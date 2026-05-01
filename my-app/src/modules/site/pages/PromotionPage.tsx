export function SitePromotionPage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Promotions</h1>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Available promotions</div>
        </div>
        <div className="card__body grid grid--2">
          <div className="miniCard">
            <div className="miniCard__title">WELCOME10</div>
            <div className="miniCard__sub">10% off for first booking.</div>
            <div className="miniCard__foot">
              <button className="btn btn--tiny">Apply</button>
            </div>
          </div>
          <div className="miniCard">
            <div className="miniCard__title">VIP500</div>
            <div className="miniCard__sub">500k VND off for VIP members.</div>
            <div className="miniCard__foot">
              <button className="btn btn--tiny">Apply</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

