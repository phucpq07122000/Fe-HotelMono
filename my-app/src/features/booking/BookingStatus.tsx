import { useEffect, useState } from 'react'
import { getBookingStatus } from '../../api/booking.api'
import type { BookingJourney } from '../../types'

export function BookingStatus() {
  const [journey, setJourney] = useState<BookingJourney | null>(null)

  useEffect(() => {
    void getBookingStatus().then(setJourney)
  }, [])

  if (!journey) {
    return (
      <section className="glassCard">
        <div className="sectionHead__title">Loading booking status...</div>
      </section>
    )
  }

  return (
    <div className="pageStack">
      <section className="glassCard">
        <div className="sectionHead">
          <div>
            <div className="sectionHead__label">Booking status</div>
            <h2 className="sectionHead__title">{journey.code}</h2>
          </div>
          <div className="badge badge--accent">{journey.paymentStatus}</div>
        </div>

        <div className="statusOverview">
          <div>
            <div className="statusOverview__label">Guest</div>
            <div className="statusOverview__value">{journey.guestName}</div>
          </div>
          <div>
            <div className="statusOverview__label">Hotel</div>
            <div className="statusOverview__value">{journey.hotelName}</div>
          </div>
          <div>
            <div className="statusOverview__label">Room</div>
            <div className="statusOverview__value">{journey.roomLabel}</div>
          </div>
        </div>
      </section>

      <section className="glassCard">
        <div className="sectionHead">
          <div>
            <div className="sectionHead__label">Delivery timeline</div>
            <h3 className="sectionHead__title">{journey.statusLabel}</h3>
          </div>
        </div>

        <div className="timeline">
          {journey.timeline.map((step) => (
            <div key={step.id} className={`timeline__item timeline__item--${step.state}`}>
              <div className="timeline__dot" />
              <div>
                <div className="timeline__title">{step.title}</div>
                <div className="timeline__copy">{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
