export function RolePage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Role</h1>
        <div className="page__actions">
          <button className="btn btn--small">New role</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Roles</div>
        </div>
        <div className="card__body grid grid--2">
          <div className="miniCard">
            <div className="miniCard__title">Admin</div>
            <div className="miniCard__sub">Full access to admin site.</div>
            <div className="miniCard__foot">
              <button className="btn btn--tiny">Edit</button>
            </div>
          </div>
          <div className="miniCard">
            <div className="miniCard__title">Staff</div>
            <div className="miniCard__sub">Manage bookings and inventory.</div>
            <div className="miniCard__foot">
              <button className="btn btn--tiny">Edit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

