export function SiteBookingPage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Booking</h1>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Booking form</div>
        </div>
        <div className="card__body grid grid--2">
          <label className="field">
            <span className="field__label">Hotel</span>
            <input className="field__input" placeholder="Select hotel" />
          </label>
          <label className="field">
            <span className="field__label">Room type</span>
            <input className="field__input" placeholder="Select room" />
          </label>
          <label className="field">
            <span className="field__label">Check-in</span>
            <input className="field__input" type="date" />
          </label>
          <label className="field">
            <span className="field__label">Check-out</span>
            <input className="field__input" type="date" />
          </label>
          <label className="field">
            <span className="field__label">Promotion code</span>
            <input className="field__input" placeholder="Optional" />
          </label>
          <div className="row row--end">
            <button className="btn btn--primary btn--small">Confirm booking</button>
          </div>
        </div>
      </section>
    </div>
  )
}

