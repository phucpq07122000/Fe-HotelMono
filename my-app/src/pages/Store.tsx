import { useMemo, useState } from 'react'
import type { StoreProduct } from '../app/types'
import { formatVnd } from '../app/format'
import { Icon } from '../ui/Icon'
import { Pill } from '../ui/Pill'
import { Phone } from '../ui/Phone'

export function StorePage({ products }: { products: StoreProduct[] }) {
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState<'All' | StoreProduct['kind']>('All')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return products.filter((p) => {
      const matchFilter = filter === 'All' ? true : p.kind === filter
      const matchQuery = query
        ? [p.name, p.location, ...p.tags].join(' ').toLowerCase().includes(query)
        : true
      return matchFilter && matchQuery
    })
  }, [products, q, filter])

  return (
    <Phone
      title="Hotel"
      subtitle="Kham pha phong & dich vu"
      footer={
        <div className="bottomNav" aria-label="Bottom navigation">
          <button type="button" className="bottomNav__item bottomNav__item--active" aria-label="Home">
            <Icon name="home" />
          </button>
          <button type="button" className="bottomNav__item" aria-label="Explore">
            <Icon name="search" />
          </button>
          <button type="button" className="bottomNav__item" aria-label="Bookings">
            <Icon name="calendar" />
          </button>
          <button type="button" className="bottomNav__item" aria-label="Profile">
            <Icon name="user" />
          </button>
        </div>
      }
    >
      <div className="phoneSearch">
        <span className="phoneSearch__icon" aria-hidden="true">
          <Icon name="search" />
        </span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search hotel, room, service..."
          aria-label="Search products"
        />
      </div>

      <div className="phoneChips" role="tablist" aria-label="Product filters">
        <button
          type="button"
          className={`phoneChip ${filter === 'All' ? 'phoneChip--active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          type="button"
          className={`phoneChip ${filter === 'Room' ? 'phoneChip--active' : ''}`}
          onClick={() => setFilter('Room')}
        >
          Room
        </button>
        <button
          type="button"
          className={`phoneChip ${filter === 'Service' ? 'phoneChip--active' : ''}`}
          onClick={() => setFilter('Service')}
        >
          Service
        </button>
        <div className="phoneChips__hint">{filtered.length} results</div>
      </div>

      <div className="phoneList" aria-label="Products list">
        {filtered.map((p) => (
          <article key={p.id} className="hotelCard">
            <div className="hotelCard__img" aria-hidden="true" />
            <div className="hotelCard__body">
              <div className="hotelCard__titleRow">
                <div className="hotelCard__title">{p.name}</div>
                <Pill tone="gray">{p.kind}</Pill>
              </div>
              <div className="hotelCard__meta">
                <span>{p.location}</span>
                <span className="dot" aria-hidden="true" />
                <span className="stars" aria-label={`Rating ${p.rating.toFixed(1)}`}>
                  ★ {p.rating.toFixed(1)}
                </span>
              </div>
              <div className="hotelCard__desc">{p.tags.slice(0, 3).join(' • ')}</div>
              <div className="hotelCard__foot">
                <div>
                  <div className="hotelCard__price">{formatVnd(p.priceVnd)}</div>
                  <div className="hotelCard__unit">{p.kind === 'Room' ? 'per night' : 'per service'}</div>
                </div>
                <button type="button" className="btn btn--primary btn--small">
                  Book now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Phone>
  )
}

