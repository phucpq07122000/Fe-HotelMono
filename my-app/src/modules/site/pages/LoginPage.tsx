import { useMemo, useState } from 'react'
import { useAuth } from '../../auth/useAuth'
import type { AuthUser } from '../../auth/useAuth'

export function LoginPage(props: { onDone: (user: AuthUser) => void }) {
  const auth = useAuth()
  const [username, setUsername] = useState(auth.user?.username ?? '')

  const hint = useMemo(() => {
    if (!username) return 'Tip: use "admin" to see Admin routes.'
    if (username === 'admin') return 'You will get role: Admin'
    return 'You will get role: Customer'
  }, [username])

  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Login</h1>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Sign in</div>
        </div>
        <div className="card__body grid grid--2">
          <label className="field">
            <span className="field__label">Username</span>
            <input className="field__input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin / customer" />
          </label>
          <div className="row row--end">
            <button
              className="btn btn--primary btn--small"
              onClick={() => {
                if (!username.trim()) return
                const nextUser = auth.login(username.trim())
                props.onDone(nextUser)
              }}
            >
              Login
            </button>
          </div>
          <div className="hint">{hint}</div>
        </div>
      </section>
    </div>
  )
}
