export type UserRole = 'Admin' | 'Customer'

export type AuthSession = {
  username: string
  displayName: string
  roles: UserRole[]
  token: string
}

export type SearchFilters = {
  destination: string
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
}

export type HotelStatus = 'Ready' | 'Busy' | 'Maintenance'

export type HotelCard = {
  id: string
  name: string
  city: string
  category: string
  rating: number
  priceFrom: number
  occupancy: number
  status: HotelStatus
  summary: string
  tags: string[]
  amenities: string[]
}

export type DashboardTone = 'indigo' | 'rose' | 'mint' | 'amber'

export type DashboardMetric = {
  id: string
  label: string
  value: string
  change: string
  progress: number
  tone: DashboardTone
}

export type BookingRecord = {
  id: string
  guestName: string
  roomLabel: string
  checkIn: string
  checkOut: string
  paymentStatus: 'Paid' | 'Pending' | 'Refunded'
  bookingStatus: 'Confirmed' | 'Processing' | 'Checked in'
  amount: number
}

export type ActivityItem = {
  id: string
  guestName: string
  note: string
  timeAgo: string
}

export type DashboardLoadItem = {
  id: string
  label: string
  value: string
  delta: string
  tone: DashboardTone
}

export type DashboardSnapshot = {
  metrics: DashboardMetric[]
  bookings: BookingRecord[]
  activities: ActivityItem[]
  load: DashboardLoadItem[]
}

export type BookingRequest = {
  guestName: string
  email: string
  hotelId: string
  roomLabel: string
  checkIn: string
  checkOut: string
  guests: number
  note: string
}

export type BookingStepState = 'done' | 'current' | 'upcoming'

export type BookingStep = {
  id: string
  title: string
  detail: string
  state: BookingStepState
}

export type BookingJourney = {
  code: string
  guestName: string
  hotelName: string
  roomLabel: string
  statusLabel: string
  paymentStatus: string
  timeline: BookingStep[]
}
