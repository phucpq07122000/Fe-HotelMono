export function SiteHomePage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Home</h1>
        <div className="page__actions">
          <span className="pill pill--blue">Site</span>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Search availability</div>
        </div>
        <div className="card__body grid grid--3">
          <label className="field">
            <span className="field__label">Destination</span>
            <input className="field__input" placeholder="City / hotel" />
          </label>
          <label className="field">
            <span className="field__label">Check-in</span>
            <input className="field__input" type="date" />
          </label>
          <label className="field">
            <span className="field__label">Check-out</span>
            <input className="field__input" type="date" />
          </label>
          <div className="row row--end">
            <button className="btn btn--primary btn--small">Search</button>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Featured promotions</div>
        </div>
        <div className="card__body grid grid--2">
          <div className="miniCard">
            <div className="miniCard__title">WELCOME10</div>
            <div className="miniCard__sub">10% off for first booking.</div>
            <div className="miniCard__foot">
              <button className="btn btn--tiny">Use</button>
            </div>
          </div>
          <div className="miniCard">
            <div className="miniCard__title">VIP500</div>
            <div className="miniCard__sub">500k VND off for VIP members.</div>
            <div className="miniCard__foot">
              <button className="btn btn--tiny">Use</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

