import { Suspense, useEffect } from 'react'
import './App.css'

import { useHashLocation } from './hooks/useHashLocation'
import { ShellLayout } from './layouts/ShellLayout'
import { isPathMatch } from './router/match'
import { allRoutes, defaults, navForArea } from './modules/routes'
import { AuthProvider, useAuth } from './modules/auth/useAuth'
import { LoginPage } from './modules/site/pages/LoginPage'

function AppInner() {
  const { path, navigate } = useHashLocation()
  const auth = useAuth()

  const route = allRoutes.find((item) => isPathMatch(item.path, path)) ?? null

  const area = route?.area ?? (path.startsWith('/admin') ? 'admin' : 'site')
  const nav = navForArea(area)

  const requiresAuth = route?.requiresAuth ?? false
  const shouldGate = requiresAuth && !auth.user

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
      <ShellLayout title="HotelMonolith" areaBadge="AUTH" nav={[]} activePath={path} onNavigate={navigate}>
        <LoginPage
          onDone={(user) => {
            const next = user.roles.includes('Admin') ? defaults.admin : defaults.site
            navigate(next)
          }}
        />
      </ShellLayout>
    )
  }

  if (shouldGate) return null

  if (!route) return null

  const Page = route.element

  return (
    <ShellLayout
      title="HotelMonolith"
      areaBadge={area === 'admin' ? 'ADMIN' : 'SITE'}
      nav={nav}
      activePath={path}
      onNavigate={navigate}
      onLogout={
        auth.user
          ? () => {
              auth.logout()
              navigate(defaults.site)
            }
          : undefined
      }
    >
      <Suspense fallback={<div className="page">Loading...</div>}>
        <Page />
      </Suspense>
    </ShellLayout>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <div className="app">
        <div className="appShell">
          <AppInner />
        </div>
      </div>
    </AuthProvider>
  )
}
