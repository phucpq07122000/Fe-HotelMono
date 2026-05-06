import { lazy } from 'react'
import type { AppRoute } from '../../router/types'

export const adminRoutes: AppRoute[] = [
  {
    area: 'admin',
    path: '/admin/dashboard',
    title: 'Dashboard',
    nav: { label: 'Dashboard', path: '/admin/dashboard', section: 'Command' },
    element: lazy(() => import('../../features/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/hotel',
    title: 'Hotel',
    nav: { label: 'Hotel', path: '/admin/hotel', section: 'Command' },
    element: lazy(() => import('../../features/hotel/HotelPage').then((m) => ({ default: m.HotelPage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/booking',
    title: 'Booking',
    nav: { label: 'Booking', path: '/admin/booking', section: 'Command' },
    element: lazy(() => import('../../features/admin/BookingOperationsPage').then((m) => ({ default: m.BookingOperationsPage }))),
    requiresAuth: true,
  },
]

export const adminDefaultPath = '/admin/dashboard'

