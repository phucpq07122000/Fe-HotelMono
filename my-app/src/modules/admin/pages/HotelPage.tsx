export function HotelPage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Hotel</h1>
        <div className="page__actions">
          <button className="btn btn--small">New hotel</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Search</div>
        </div>
        <div className="card__body grid grid--2">
          <label className="field">
            <span className="field__label">Name</span>
            <input className="field__input" placeholder="e.g. Riverside Boutique" />
          </label>
          <label className="field">
            <span className="field__label">City</span>
            <input className="field__input" placeholder="e.g. Bangkok" />
          </label>
          <div className="row row--end">
            <button className="btn btn--primary btn--small">Search</button>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Hotels</div>
        </div>
        <div className="card__body">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Rating</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Riverside Boutique</td>
                <td>Bangkok</td>
                <td>4.6</td>
                <td>
                  <span className="pill pill--green">Active</span>
                </td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Edit</button>
                </td>
              </tr>
              <tr>
                <td>City Central</td>
                <td>Hanoi</td>
                <td>4.2</td>
                <td>
                  <span className="pill pill--gray">Draft</span>
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

