import { BookingStatus } from '../booking/BookingStatus'

export function BookingOperationsPage() {
  return (
    <div className="pageStack">
      <section className="glassCard">
        <div className="sectionHead">
          <div>
            <div className="sectionHead__label">Operations</div>
            <h2 className="sectionHead__title">Booking control room</h2>
          </div>
        </div>

        <div className="opsGrid">
          <div className="stateCard stateCard--inline">
            <div className="stateCard__eyebrow">Flow contract</div>
            <h3 className="stateCard__title">Start - Poll - Confirm</h3>
            <p className="stateCard__body">
              Keep page I/O thin: page triggers action, API module owns transport, and status polling stays isolated for later queue or webhook work.
            </p>
          </div>

          <div className="stateCard stateCard--inline">
            <div className="stateCard__eyebrow">Performance notes</div>
            <h3 className="stateCard__title">Three senior guardrails</h3>
            <p className="stateCard__body">Avoid N+1 availability calls, keep filters paged, and debounce search inputs before hitting the real API.</p>
          </div>
        </div>
      </section>

      <BookingStatus />
    </div>
  )
}
