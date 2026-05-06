import { useEffect, useState } from 'react'
import { createBooking } from '../../api/booking.api'
import { searchAvailability } from '../../api/hotel.api'
import type { BookingJourney, BookingRequest, HotelCard } from '../../types'
import { BookingStatus } from './BookingStatus'

const initialRequest: BookingRequest = {
  guestName: 'Milly Tyson',
  email: 'milly@example.com',
  hotelId: 'Azure Atrium Hotel',
  roomLabel: 'Premium Ocean Suite',
  checkIn: new Date().toISOString().slice(0, 10),
  checkOut: new Date().toISOString().slice(0, 10),
  guests: 2,
  note: '',
}

export function BookingForm() {
  const [hotels, setHotels] = useState<HotelCard[]>([])
  const [form, setForm] = useState<BookingRequest>(initialRequest)
  const [journey, setJourney] = useState<BookingJourney | null>(null)

  useEffect(() => {
    void searchAvailability({
      destination: '',
      checkIn: initialRequest.checkIn,
      checkOut: initialRequest.checkOut,
      guests: 2,
      rooms: 1,
    }).then((result) => {
      setHotels(result)
      if (result[0]) {
        setForm((current) => ({
          ...current,
          hotelId: result[0].name,
          roomLabel: `${result[0].category} room`,
        }))
      }
    })
  }, [])

  return (
    <div className="pageSplit">
      <section className="glassCard">
        <div className="sectionHead">
          <div>
            <div className="sectionHead__label">Booking</div>
            <h2 className="sectionHead__title">Reservation form</h2>
          </div>
        </div>

        <form
          className="formGrid"
          onSubmit={async (event) => {
            event.preventDefault()
            const next = await createBooking(form)
            setJourney(next)
          }}
        >
          <label className="fieldBlock">
            <span>Guest name</span>
            <input value={form.guestName} onChange={(event) => setForm((current) => ({ ...current, guestName: event.target.value }))} />
          </label>

          <label className="fieldBlock">
            <span>Email</span>
            <input value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
          </label>

          <label className="fieldBlock">
            <span>Hotel</span>
            <select value={form.hotelId} onChange={(event) => setForm((current) => ({ ...current, hotelId: event.target.value }))}>
              {hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.name}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </label>

          <label className="fieldBlock">
            <span>Room type</span>
            <input value={form.roomLabel} onChange={(event) => setForm((current) => ({ ...current, roomLabel: event.target.value }))} />
          </label>

          <label className="fieldBlock">
            <span>Check-in</span>
            <input value={form.checkIn} type="date" onChange={(event) => setForm((current) => ({ ...current, checkIn: event.target.value }))} />
          </label>

          <label className="fieldBlock">
            <span>Check-out</span>
            <input value={form.checkOut} type="date" onChange={(event) => setForm((current) => ({ ...current, checkOut: event.target.value }))} />
          </label>

          <label className="fieldBlock">
            <span>Guests</span>
            <input
              value={form.guests}
              type="number"
              min={1}
              max={8}
              onChange={(event) => setForm((current) => ({ ...current, guests: Number(event.target.value) }))}
            />
          </label>

          <label className="fieldBlock fieldBlock--wide">
            <span>Guest note</span>
            <textarea value={form.note} onChange={(event) => setForm((current) => ({ ...current, note: event.target.value }))} />
          </label>

          <div className="formActions">
            <button type="submit" className="primaryButton">
              Reserve and hold inventory
            </button>
          </div>
        </form>
      </section>

      <section className="glassCard">
        <div className="sectionHead">
          <div>
            <div className="sectionHead__label">Status</div>
            <h3 className="sectionHead__title">Booking pipeline</h3>
          </div>
        </div>

        {journey ? (
          <div className="embeddedStatus">
            <BookingStatus />
          </div>
        ) : (
          <div className="stateCard stateCard--inline">
            <div className="stateCard__eyebrow">Flow preview</div>
            <h4 className="stateCard__title">Start - Poll - Download/Confirm</h4>
            <p className="stateCard__body">
              This front-end structure is already split so a real backend can replace the mock booking API without changing page composition.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
