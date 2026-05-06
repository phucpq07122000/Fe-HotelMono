import { MapPin, Shield, Sparkles, WavesLadder } from 'lucide-react'
import { useAvailability } from './useAvailability'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function SearchPage() {
  const { filters, hotels, loading, setField } = useAvailability()

  return (
    <div className="pageStack">
      <section className="heroPanel">
        <div className="heroPanel__content">
          <span className="eyebrow">Guest journey</span>
          <h2 className="heroPanel__title">Search, review, and reserve with a UI foundation that can grow into real hotel commerce.</h2>
          <p className="heroPanel__copy">
            This page is split for clean I/O: local form state, search hook, mock API contract, and presentational cards.
          </p>
        </div>
        <div className="heroPanel__badges">
          <span className="tag"><Sparkles size={16} /> 2026 UI system</span>
          <span className="tag"><Shield size={16} /> API-safe layering</span>
          <span className="tag"><WavesLadder size={16} /> Deferred search</span>
        </div>
      </section>

      <section className="glassCard">
        <div className="sectionHead">
          <div>
            <div className="sectionHead__label">Availability search</div>
            <h3 className="sectionHead__title">Quick search form</h3>
          </div>
        </div>

        <div className="filterGrid">
          <label className="fieldBlock">
            <span>Destination</span>
            <input value={filters.destination} onChange={(event) => setField('destination', event.target.value)} placeholder="Da Nang, Ha Noi, Hoi An" />
          </label>

          <label className="fieldBlock">
            <span>Check-in</span>
            <input value={filters.checkIn} type="date" onChange={(event) => setField('checkIn', event.target.value)} />
          </label>

          <label className="fieldBlock">
            <span>Check-out</span>
            <input value={filters.checkOut} type="date" onChange={(event) => setField('checkOut', event.target.value)} />
          </label>

          <label className="fieldBlock">
            <span>Guests</span>
            <input
              value={filters.guests}
              type="number"
              min={1}
              max={8}
              onChange={(event) => setField('guests', Number(event.target.value))}
            />
          </label>

          <label className="fieldBlock">
            <span>Rooms</span>
            <input
              value={filters.rooms}
              type="number"
              min={1}
              max={4}
              onChange={(event) => setField('rooms', Number(event.target.value))}
            />
          </label>

          <div className="statHint">
            <div className="statHint__label">Query mode</div>
            <div className="statHint__value">{loading ? 'Fetching mock API...' : `${hotels.length} stays available`}</div>
          </div>
        </div>
      </section>

      <section className="resultGrid">
        {hotels.map((hotel) => (
          <article key={hotel.id} className="hotelCard">
            <div className="hotelCard__media" />
            <div className="hotelCard__body">
              <div className="hotelCard__meta">
                <span className="badge badge--soft">{hotel.category}</span>
                <span className="badge badge--accent">{hotel.status}</span>
              </div>
              <h3 className="hotelCard__title">{hotel.name}</h3>
              <div className="hotelCard__location">
                <MapPin size={15} />
                <span>{hotel.city}</span>
              </div>
              <p className="hotelCard__copy">{hotel.summary}</p>
              <div className="hotelCard__tags">
                {hotel.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="hotelCard__footer">
                <div>
                  <div className="hotelCard__price">{currency.format(hotel.priceFrom / 25000)}</div>
                  <div className="hotelCard__small">from / night</div>
                </div>
                <button type="button" className="primaryButton">
                  Start booking
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
