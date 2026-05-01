import { useAuth } from '../../auth/useAuth'

export function SiteProfilePage() {
  const auth = useAuth()

  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Profile</h1>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Account</div>
        </div>
        <div className="card__body grid grid--2">
          <label className="field">
            <span className="field__label">Username</span>
            <input className="field__input" value={auth.user?.username ?? ''} readOnly />
          </label>
          <label className="field">
            <span className="field__label">Roles</span>
            <input className="field__input" value={(auth.user?.roles ?? []).join(', ')} readOnly />
          </label>
        </div>
      </section>
    </div>
  )
}

