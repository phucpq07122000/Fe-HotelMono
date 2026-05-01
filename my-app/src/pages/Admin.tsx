import { useMemo } from 'react'
import type { AdminTab, Booking } from '../app/types'
import { formatVnd } from '../app/format'
import { Icon } from '../ui/Icon'
import { Phone } from '../ui/Phone'
import { Pill } from '../ui/Pill'

export function AdminPage({
  tab,
  setTab,
  bookings,
}: {
  tab: AdminTab
  setTab: (t: AdminTab) => void
  bookings: Booking[]
}) {
  const kpis = useMemo(() => {
    const revenue = bookings
      .filter((b) => b.status !== 'Cancelled')
      .reduce((sum, b) => sum + b.totalVnd, 0)
    const confirmed = bookings.filter((b) => b.status === 'Confirmed' || b.status === 'CheckedIn').length
    return [
      { label: 'Doanh thu', value: formatVnd(revenue) },
      { label: 'Booking OK', value: String(confirmed) },
      { label: 'Dang cho', value: String(bookings.filter((b) => b.status === 'Pending').length) },
      { label: 'Huy', value: String(bookings.filter((b) => b.status === 'Cancelled').length) },
    ]
  }, [bookings])

  return (
    <Phone
      title="Admin"
      subtitle="Booking management"
      footer={
        <div className="bottomNav" aria-label="Bottom navigation">
          <button
            type="button"
            className={`bottomNav__item ${tab === 'dashboard' ? 'bottomNav__item--active' : ''}`}
            onClick={() => setTab('dashboard')}
            aria-label="Dashboard"
          >
            <Icon name="home" />
          </button>
          <button
            type="button"
            className={`bottomNav__item ${tab === 'bookings' ? 'bottomNav__item--active' : ''}`}
            onClick={() => setTab('bookings')}
            aria-label="Bookings"
          >
            <Icon name="calendar" />
          </button>
          <button
            type="button"
            className={`bottomNav__item ${tab === 'products' ? 'bottomNav__item--active' : ''}`}
            onClick={() => setTab('products')}
            aria-label="Products"
          >
            <Icon name="bag" />
          </button>
          <button type="button" className="bottomNav__item" aria-label="Profile">
            <Icon name="user" />
          </button>
        </div>
      }
    >
      {tab === 'dashboard' && (
        <section className="kpiRow" aria-label="KPI cards">
          {kpis.map((k) => (
            <div className="kpiMini" key={k.label}>
              <div className="kpiMini__label">{k.label}</div>
              <div className="kpiMini__value">{k.value}</div>
            </div>
          ))}
        </section>
      )}

      {tab === 'bookings' && (
        <section className="listPanel" aria-label="Bookings list">
          <div className="listPanel__head">
            <div className="listPanel__title">Recent bookings</div>
            <button type="button" className="btn btn--ghost btn--small">
              New
            </button>
          </div>

          <div className="bookingList">
            {bookings.map((b) => (
              <div className="bookingItem" key={b.id}>
                <div className="bookingItem__row">
                  <div className="bookingItem__code mono">{b.code}</div>
                  <div>
                    {b.status === 'Pending' && <Pill tone="gray">Pending</Pill>}
                    {b.status === 'Confirmed' && <Pill tone="blue">Confirmed</Pill>}
                    {b.status === 'CheckedIn' && <Pill tone="green">Checked-in</Pill>}
                    {b.status === 'Cancelled' && <Pill tone="red">Cancelled</Pill>}
                  </div>
                </div>
                <div className="bookingItem__sub">
                  <b>{b.guest}</b> • {b.product}
                </div>
                <div className="bookingItem__row bookingItem__row--muted">
                  <div>
                    {b.checkIn} → {b.checkOut}
                  </div>
                  <div className="bookingItem__money">{formatVnd(b.totalVnd)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {tab === 'products' && (
        <section className="listPanel">
          <div className="listPanel__head">
            <div className="listPanel__title">Products</div>
            <button type="button" className="btn btn--primary btn--small">
              Add
            </button>
          </div>
          <div className="emptyState">
            <div className="emptyState__box" aria-hidden="true" />
            <div className="emptyState__title">Chua co noi dung</div>
            <div className="emptyState__sub">Them CRUD phong/dich vu o day (form + upload anh + gia + status).</div>
          </div>
        </section>
      )}
    </Phone>
  )
}

