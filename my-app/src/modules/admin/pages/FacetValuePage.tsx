export function FacetValuePage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">FacetValue</h1>
        <div className="page__actions">
          <button className="btn btn--small">New facet value</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Facet values</div>
        </div>
        <div className="card__body">
          <table className="table">
            <thead>
              <tr>
                <th>Facet</th>
                <th>Value</th>
                <th>Sort</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RoomType</td>
                <td>Deluxe</td>
                <td>10</td>
                <td className="table__actions">
                  <button className="btn btn--tiny">Edit</button>
                </td>
              </tr>
              <tr>
                <td>BedType</td>
                <td>King</td>
                <td>20</td>
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

