import { lazy } from 'react'
import type { AppRoute } from '../../router/types'

export const siteRoutes: AppRoute[] = [
  {
    area: 'site',
    path: '/',
    title: 'Search',
    nav: { label: 'Search', path: '/', section: 'Guest' },
    element: lazy(() => import('../../features/search/SearchPage').then((m) => ({ default: m.SearchPage }))),
  },
  {
    area: 'site',
    path: '/booking',
    title: 'Booking',
    nav: { label: 'Booking', path: '/booking', section: 'Guest' },
    element: lazy(() => import('../../features/booking/BookingForm').then((m) => ({ default: m.BookingForm }))),
  },
  {
    area: 'site',
    path: '/booking/status',
    title: 'Status',
    nav: { label: 'Status', path: '/booking/status', section: 'Guest' },
    element: lazy(() => import('../../features/booking/BookingStatus').then((m) => ({ default: m.BookingStatus }))),
  },
]

export const siteDefaultPath = '/'
