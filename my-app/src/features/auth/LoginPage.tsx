import { ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { AuthSession } from '../../types'
import { useAuth } from './useAuth'

export function LoginPage(props: { onDone: (session: AuthSession) => void }) {
  const { login } = useAuth()
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('')

  return (
    <div className="authPage">
      <section className="authCard">
        <div className="authCard__intro">
          <span className="eyebrow">Secure entry</span>
          <h2 className="authCard__title">Hotel operations, guest booking, and search in one front-end foundation.</h2>
          <p className="authCard__copy">
            Use <strong>admin</strong> for the management view or any other username for the customer flow.
          </p>
        </div>

        <form
          className="authForm"
          onSubmit={(event) => {
            event.preventDefault()
            const session = login(username || password)
            props.onDone(session)
          }}
        >
          <label className="fieldBlock">
            <span>Username</span>
            <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="admin" />
          </label>

          <label className="fieldBlock">
            <span>Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Demo login does not verify this yet"
            />
          </label>

          <button type="submit" className="primaryButton">
            Enter workspace
          </button>
        </form>
      </section>

      <section className="authAside">
        <div className="authAside__card">
          <div className="authAside__icon">
            <ShieldCheck size={18} />
          </div>
          <h3>Security first</h3>
          <p>Axios interceptor and route gating are ready for real JWT and refresh-token integration.</p>
        </div>
        <div className="authAside__card">
          <div className="authAside__icon">
            <Sparkles size={18} />
          </div>
          <h3>Performance ready</h3>
          <p>Routes are lazy-loaded, search is deferred, and the layout is structured for domain-level growth.</p>
        </div>
      </section>
    </div>
  )
}
