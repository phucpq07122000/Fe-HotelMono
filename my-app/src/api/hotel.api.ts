import { mockRequest } from './client'
import type { BookingRecord, DashboardSnapshot, HotelCard, SearchFilters } from '../types'

const hotels: HotelCard[] = [
  {
    id: 'HTL-001',
    name: 'Azure Atrium Hotel',
    city: 'Da Nang',
    category: '5-star urban resort',
    rating: 4.9,
    priceFrom: 2450000,
    occupancy: 81,
    status: 'Ready',
    summary: 'Rooftop pool, smart check-in, and high-speed business lounge.',
    tags: ['Ocean view', 'Digital key', 'Breakfast'],
    amenities: ['Spa', 'Airport transfer', 'Coworking floor'],
  },
  {
    id: 'HTL-002',
    name: 'Lantern Bay Suites',
    city: 'Hoi An',
    category: 'Boutique riverside stay',
    rating: 4.7,
    priceFrom: 1780000,
    occupancy: 67,
    status: 'Ready',
    summary: 'Small-footprint luxury with evening cultural programming.',
    tags: ['Riverfront', 'Family suite', 'Late checkout'],
    amenities: ['Bike rental', 'Garden cafe', 'Shuttle bus'],
  },
  {
    id: 'HTL-003',
    name: 'North Gate Business Hotel',
    city: 'Ha Noi',
    category: 'Executive city hotel',
    rating: 4.8,
    priceFrom: 1980000,
    occupancy: 74,
    status: 'Busy',
    summary: 'Optimized for business travel with secure meeting suites.',
    tags: ['Meeting rooms', 'Fast Wi-Fi', 'Executive floor'],
    amenities: ['Board room', 'Laundry express', 'Private dining'],
  },
  {
    id: 'HTL-004',
    name: 'Mekong Horizon Retreat',
    city: 'Can Tho',
    category: 'Wellness destination',
    rating: 4.6,
    priceFrom: 1620000,
    occupancy: 53,
    status: 'Maintenance',
    summary: 'Quiet wellness campus with guided local itinerary packages.',
    tags: ['Retreat', 'Wellness', 'Nature'],
    amenities: ['Meditation deck', 'Private tour desk', 'Yoga studio'],
  },
]

const bookings: BookingRecord[] = [
  {
    id: 'BK-85631',
    guestName: 'Milly Tyson',
    roomLabel: 'Premium Ocean Suite',
    checkIn: '2026-05-05',
    checkOut: '2026-05-08',
    paymentStatus: 'Pending',
    bookingStatus: 'Processing',
    amount: 10360000,
  },
  {
    id: 'BK-63031',
    guestName: 'Helen Mart',
    roomLabel: 'Family Corner Room',
    checkIn: '2026-05-07',
    checkOut: '2026-05-09',
    paymentStatus: 'Refunded',
    bookingStatus: 'Confirmed',
    amount: 6840000,
  },
  {
    id: 'BK-70901',
    guestName: 'Mark Hellen',
    roomLabel: 'Skyline Executive',
    checkIn: '2026-05-04',
    checkOut: '2026-05-06',
    paymentStatus: 'Paid',
    bookingStatus: 'Checked in',
    amount: 7520000,
  },
  {
    id: 'BK-11123',
    guestName: 'Alyssa Dunn',
    roomLabel: 'Studio Twin',
    checkIn: '2026-05-11',
    checkOut: '2026-05-13',
    paymentStatus: 'Paid',
    bookingStatus: 'Confirmed',
    amount: 4960000,
  },
]

export async function getAdminDashboard(activeDate: string): Promise<DashboardSnapshot> {
  const labelSuffix = activeDate ? new Date(activeDate).toLocaleDateString('en-GB') : 'today'

  return mockRequest(
    {
      metrics: [
        { id: 'sales', label: 'Total Sales', value: '$25,024', change: `+12% vs ${labelSuffix}`, progress: 81, tone: 'indigo' },
        { id: 'expense', label: 'Total Expenses', value: '$14,160', change: '-4% vendor spend', progress: 62, tone: 'rose' },
        { id: 'income', label: 'Net Income', value: '$10,860', change: '+8% margin lift', progress: 44, tone: 'mint' },
      ],
      bookings,
      activities: [
        { id: 'A-1', guestName: 'Milly Tyson', note: 'received itinerary updates for Ocean Suite stay', timeAgo: '2 minutes ago' },
        { id: 'A-2', guestName: 'Helen Mart', note: 'confirmed airport pickup and room preference', timeAgo: '8 minutes ago' },
        { id: 'A-3', guestName: 'Mark Hellen', note: 'finished digital check-in on mobile', timeAgo: '15 minutes ago' },
        { id: 'A-4', guestName: 'Alyssa Dunn', note: 'requested early breakfast for conference day', timeAgo: '26 minutes ago' },
      ],
      load: [
        { id: 'L-1', label: 'Online bookings', value: '3,849', delta: '+39%', tone: 'indigo' },
        { id: 'L-2', label: 'Offline bookings', value: '1,100', delta: '-17%', tone: 'rose' },
        { id: 'L-3', label: 'New guests', value: '849', delta: '+25%', tone: 'mint' },
      ],
    },
    280,
  )
}

export async function searchAvailability(filters: SearchFilters): Promise<HotelCard[]> {
  const keyword = filters.destination.trim().toLowerCase()
  const filtered =
    keyword.length === 0
      ? hotels
      : hotels.filter((hotel) => {
          const haystack = `${hotel.name} ${hotel.city} ${hotel.category}`.toLowerCase()
          return haystack.includes(keyword)
        })

  return mockRequest(filtered, 260)
}

export async function getHotelInventory(): Promise<HotelCard[]> {
  return mockRequest(hotels, 180)
}
