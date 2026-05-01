export type View = 'home' | 'store' | 'admin'

export type AdminTab = 'dashboard' | 'bookings' | 'products'

export type StoreProduct = {
  id: string
  name: string
  kind: 'Room' | 'Service'
  location: string
  rating: number
  priceVnd: number
  tags: string[]
}

export type Booking = {
  id: string
  code: string
  guest: string
  product: string
  checkIn: string
  checkOut: string
  totalVnd: number
  status: 'Pending' | 'Confirmed' | 'CheckedIn' | 'Cancelled'
}

