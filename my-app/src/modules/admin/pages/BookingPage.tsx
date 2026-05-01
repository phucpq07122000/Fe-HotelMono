export function AdminBookingPage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Booking</h1>
        <div className="page__actions">
          <button className="btn btn--small">New booking</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Bookings</div>
        </div>
        <div className="card__body">
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Customer</th>
                <th>Hotel</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BK-0001</td>
                <td>Nguyen Van A</td>
                <td>Riverside Boutique</td>
                <td>2026-04-28</td>
                <td>2026-04-30</td>
                <td>
                  <span className="pill pill--blue">Confirmed</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Open</button>
                </td>
              </tr>
              <tr>
                <td>BK-0002</td>
                <td>Tran Thi B</td>
                <td>City Central</td>
                <td>2026-05-04</td>
                <td>2026-05-07</td>
                <td>
                  <span className="pill pill--gray">Pending</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Open</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

