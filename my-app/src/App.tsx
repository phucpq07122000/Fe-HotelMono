import { Suspense, useEffect } from 'react'
import './App.css'

import { ErrorBoundary } from './components/ErrorBoundary'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { LoginPage } from './features/auth/LoginPage'
import { AuthProvider, useAuth } from './features/auth/useAuth'
import { useHashLocation } from './hooks/useHashLocation'
import { allRoutes, defaults, navForArea } from './modules/routes'
import { isPathMatch } from './router/match'
import { useAppStore } from './store/appStore'

function AppInner() {
  const { path, navigate } = useHashLocation()
  const auth = useAuth()

  const route = allRoutes.find((item) => isPathMatch(item.path, path)) ?? null

  const area = route?.area ?? (path.startsWith('/admin') ? 'admin' : 'site')
  const nav = navForArea(area)

  const requiresAuth = route?.requiresAuth ?? false
  const shouldGate = requiresAuth && !auth.session

  useEffect(() => {
    if (shouldGate && path !== defaults.login) navigate(defaults.login)
  }, [navigate, path, shouldGate])

  useEffect(() => {
    if (!route && path !== defaults.login) {
      const fallback = area === 'admin' ? defaults.admin : defaults.site
      navigate(fallback)
    }
  }, [area, navigate, path, route])

  if (path === defaults.login) {
    return (
      <Layout title="Access Control" areaBadge="AUTH" nav={[]} activePath={path} onNavigate={navigate} user={auth.session}>
        <LoginPage
          onDone={(session) => {
            const next = session.roles.includes('Admin') ? defaults.admin : defaults.site
            navigate(next)
          }}
        />
      </Layout>
    )
  }

  if (shouldGate) return null
  if (!route) return null

  const Page = route.element

  return (
    <Layout
      title={area === 'admin' ? 'Dashboard' : 'Guest Booking'}
      areaBadge={area === 'admin' ? 'ADMIN' : 'SITE'}
      nav={nav}
      activePath={path}
      onNavigate={navigate}
      user={auth.session}
      onLogout={
        auth.session
          ? () => {
              auth.logout()
              navigate(defaults.site)
            }
          : undefined
      }
    >
      <ErrorBoundary>
        <ProtectedRoute
          allowed={!requiresAuth || Boolean(auth.session)}
          fallback={
            <section className="stateCard">
              <div className="stateCard__eyebrow">Auth guard</div>
              <h2 className="stateCard__title">This route requires a signed session.</h2>
            </section>
          }
        >
          <Suspense fallback={<div className="glassCard">Loading workspace...</div>}>
            <Page />
          </Suspense>
        </ProtectedRoute>
      </ErrorBoundary>
    </Layout>
  )
}

function AppRoot() {
  const theme = useAppStore((state) => state.theme)

  return (
    <div className="app" data-theme={theme}>
      <div className="appShell">
        <AppInner />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoot />
    </AuthProvider>
  )
}
