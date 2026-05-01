export function CustomerPage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Customer</h1>
        <div className="page__actions">
          <button className="btn btn--small">New customer</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Customers</div>
        </div>
        <div className="card__body">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Loyalty</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyen Van A</td>
                <td>a@example.com</td>
                <td>+84 90 000 0000</td>
                <td>
                  <span className="pill pill--blue">Silver</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">View</button>
                </td>
              </tr>
              <tr>
                <td>Tran Thi B</td>
                <td>b@example.com</td>
                <td>+84 91 111 1111</td>
                <td>
                  <span className="pill pill--green">Gold</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

