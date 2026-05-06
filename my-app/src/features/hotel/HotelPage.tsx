import { useEffect, useState } from 'react'
import { getHotelInventory } from '../../api/hotel.api'
import type { HotelCard } from '../../types'

const percent = new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 0 })

export function HotelPage() {
  const [hotels, setHotels] = useState<HotelCard[]>([])

  useEffect(() => {
    void getHotelInventory().then(setHotels)
  }, [])

  return (
    <div className="pageStack">
      <section className="glassCard">
        <div className="sectionHead">
          <div>
            <div className="sectionHead__label">Hotel domain</div>
            <h2 className="sectionHead__title">Inventory readiness</h2>
          </div>
        </div>

        <div className="inventoryGrid">
          {hotels.map((hotel) => (
            <article key={hotel.id} className="inventoryCard">
              <div className="inventoryCard__head">
                <div>
                  <h3>{hotel.name}</h3>
                  <p>{hotel.city}</p>
                </div>
                <span className="badge badge--accent">{hotel.status}</span>
              </div>

              <p className="inventoryCard__copy">{hotel.summary}</p>

              <div className="inventoryCard__row">
                <span>Occupancy</span>
                <strong>{percent.format(hotel.occupancy / 100)}</strong>
              </div>

              <div className="inventoryCard__row">
                <span>Amenities</span>
                <strong>{hotel.amenities.join(' - ')}</strong>
              </div>

              <div className="hotelCard__tags">
                {hotel.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
