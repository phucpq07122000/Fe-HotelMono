import { createContext, createElement, startTransition, useContext, useMemo, useState, type ReactNode } from 'react'
import type { AuthSession } from '../../types'

export const AUTH_STORAGE_KEY = 'hotelmonolith.auth.session'

export type AuthUser = Pick<AuthSession, 'username' | 'roles'>

type AuthContextValue = {
  session: AuthSession | null
  user: AuthUser | null
  login: (username: string) => AuthSession
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function loadSession(): AuthSession | null {
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthSession
  } catch {
    return null
  }
}

function saveSession(session: AuthSession | null) {
  try {
    if (!session) {
      window.localStorage.removeItem(AUTH_STORAGE_KEY)
      return
    }
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
  } catch {
    // Ignore persistence errors in local demo mode.
  }
}

function buildSession(username: string): AuthSession {
  const normalized = username.trim().toLowerCase() || 'guest'
  const isAdmin = normalized === 'admin'
  return {
    username: normalized,
    displayName: isAdmin ? 'Steve Admin' : normalized.replace(/^\w/, (char) => char.toUpperCase()),
    roles: isAdmin ? ['Admin'] : ['Customer'],
    token: `demo-${normalized}-token`,
  }
}

export function AuthProvider(props: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => loadSession())

  const value = useMemo<AuthContextValue>(() => {
    return {
      session,
      user: session ? { username: session.username, roles: session.roles } : null,
      login: (username) => {
        const next = buildSession(username)
        startTransition(() => setSession(next))
        saveSession(next)
        return next
      },
      logout: () => {
        startTransition(() => setSession(null))
        saveSession(null)
      },
    }
  }, [session])

  return createElement(AuthContext.Provider, { value }, props.children)
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside <AuthProvider />')
  return value
}
