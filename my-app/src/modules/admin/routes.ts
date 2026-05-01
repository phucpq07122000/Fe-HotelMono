import { lazy } from 'react'
import type { AppRoute } from '../../router/types'

export const adminRoutes: AppRoute[] = [
  {
    area: 'admin',
    path: '/admin/hotel',
    title: 'Hotel',
    nav: { label: 'Hotel', path: '/admin/hotel', section: 'Master' },
    element: lazy(() => import('./pages/HotelPage').then((m) => ({ default: m.HotelPage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/user',
    title: 'User',
    nav: { label: 'User', path: '/admin/user', section: 'Master' },
    element: lazy(() => import('./pages/UserPage').then((m) => ({ default: m.UserPage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/customer',
    title: 'Customer',
    nav: { label: 'Customer', path: '/admin/customer', section: 'Master' },
    element: lazy(() => import('./pages/CustomerPage').then((m) => ({ default: m.CustomerPage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/role',
    title: 'Role',
    nav: { label: 'Role', path: '/admin/role', section: 'Master' },
    element: lazy(() => import('./pages/RolePage').then((m) => ({ default: m.RolePage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/facetvalue',
    title: 'FacetValue',
    nav: { label: 'FacetValue', path: '/admin/facetvalue', section: 'Catalog' },
    element: lazy(() => import('./pages/FacetValuePage').then((m) => ({ default: m.FacetValuePage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/promotion',
    title: 'Promotion',
    nav: { label: 'Promotion', path: '/admin/promotion', section: 'Sales' },
    element: lazy(() => import('./pages/PromotionPage').then((m) => ({ default: m.PromotionPage }))),
    requiresAuth: true,
  },
  {
    area: 'admin',
    path: '/admin/booking',
    title: 'Booking',
    nav: { label: 'Booking', path: '/admin/booking', section: 'Operations' },
    element: lazy(() => import('./pages/BookingPage').then((m) => ({ default: m.AdminBookingPage }))),
    requiresAuth: true,
  },
]

export const adminDefaultPath = '/admin/booking'

