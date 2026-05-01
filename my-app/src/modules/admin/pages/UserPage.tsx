export function UserPage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">User</h1>
        <div className="page__actions">
          <button className="btn btn--small">Invite user</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Users</div>
        </div>
        <div className="card__body">
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>admin</td>
                <td>admin@hotel.local</td>
                <td>
                  <span className="pill pill--blue">Admin</span>
                </td>
                <td>
                  <span className="pill pill--green">Active</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Manage</button>
                </td>
              </tr>
              <tr>
                <td>staff01</td>
                <td>staff01@hotel.local</td>
                <td>
                  <span className="pill pill--gray">Staff</span>
                </td>
                <td>
                  <span className="pill pill--green">Active</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Manage</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

