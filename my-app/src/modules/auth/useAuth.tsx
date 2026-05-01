import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type AuthUser = {
  username: string
  roles: string[]
}

type AuthContextValue = {
  user: AuthUser | null
  login: (username: string) => AuthUser
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const LS_KEY = 'hotelmonolith.auth.user'

function loadUser(): AuthUser | null {
  try {
    const raw = window.localStorage.getItem(LS_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthUser
  } catch {
    return null
  }
}

function saveUser(user: AuthUser | null) {
  try {
    if (!user) window.localStorage.removeItem(LS_KEY)
    else window.localStorage.setItem(LS_KEY, JSON.stringify(user))
  } catch {
    // ignore
  }
}

export function AuthProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => loadUser())

  const value = useMemo<AuthContextValue>(() => {
    return {
      user,
      login: (username) => {
        const next: AuthUser = { username, roles: username === 'admin' ? ['Admin'] : ['Customer'] }
        setUser(next)
        saveUser(next)
        return next
      },
      logout: () => {
        setUser(null)
        saveUser(null)
      },
    }
  }, [user])

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider />')
  return ctx
}
