import { mockRequest } from './client'
import type { BookingJourney, BookingRequest } from '../types'

const BOOKING_STORAGE_KEY = 'hotelmonolith.booking.latest'

function buildTimeline(code: string, hotelName: string, roomLabel: string, guestName: string): BookingJourney {
  return {
    code,
    guestName,
    hotelName,
    roomLabel,
    statusLabel: 'Awaiting payment confirmation',
    paymentStatus: 'Pending',
    timeline: [
      { id: 'step-1', title: 'Request received', detail: 'Booking data was validated and queued for inventory lock.', state: 'done' },
      { id: 'step-2', title: 'Room held', detail: `${roomLabel} is reserved while payment is completed.`, state: 'current' },
      { id: 'step-3', title: 'Payment webhook', detail: 'The backend should confirm payment and release the booking ticket.', state: 'upcoming' },
      { id: 'step-4', title: 'Guest ready', detail: 'Confirmation email and check-in instructions are generated.', state: 'upcoming' },
    ],
  }
}

function persistJourney(journey: BookingJourney) {
  try {
    window.localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(journey))
  } catch {
    // Ignore local cache failures in demo mode.
  }
}

function loadJourney(): BookingJourney | null {
  try {
    const raw = window.localStorage.getItem(BOOKING_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as BookingJourney
  } catch {
    return null
  }
}

export async function createBooking(payload: BookingRequest): Promise<BookingJourney> {
  const code = `BK-${Math.floor(Date.now() / 1000).toString().slice(-6)}`
  const journey = buildTimeline(code, payload.hotelId, payload.roomLabel, payload.guestName)
  persistJourney(journey)
  return mockRequest(journey, 320)
}

export async function getBookingStatus(code?: string): Promise<BookingJourney> {
  const cached = loadJourney()
  if (cached && (!code || code === cached.code)) return mockRequest(cached, 180)

  return mockRequest(buildTimeline('BK-85631', 'Azure Atrium Hotel', 'Premium Ocean Suite', 'Milly Tyson'), 180)
}
