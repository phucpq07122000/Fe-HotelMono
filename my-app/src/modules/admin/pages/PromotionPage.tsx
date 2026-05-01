export function PromotionPage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Promotion</h1>
        <div className="page__actions">
          <button className="btn btn--small">New promotion</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Promotions</div>
        </div>
        <div className="card__body">
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Type</th>
                <th>Value</th>
                <th>Period</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WELCOME10</td>
                <td>Percent</td>
                <td>10%</td>
                <td>2026-04-01 → 2026-06-30</td>
                <td>
                  <span className="pill pill--green">Active</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Edit</button>
                </td>
              </tr>
              <tr>
                <td>VIP500</td>
                <td>Fixed</td>
                <td>500,000 ₫</td>
                <td>2026-05-01 → 2026-05-31</td>
                <td>
                  <span className="pill pill--gray">Scheduled</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

