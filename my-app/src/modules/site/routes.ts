import { lazy } from 'react'
import type { AppRoute } from '../../router/types'

export const siteRoutes: AppRoute[] = [
  {
    area: 'site',
    path: '/',
    title: 'Home',
    nav: { label: 'Home', path: '/', section: 'Site' },
    element: lazy(() => import('./pages/HomePage').then((m) => ({ default: m.SiteHomePage }))),
  },
  {
    area: 'site',
    path: '/promotions',
    title: 'Promotions',
    nav: { label: 'Promotions', path: '/promotions', section: 'Site' },
    element: lazy(() => import('./pages/PromotionPage').then((m) => ({ default: m.SitePromotionPage }))),
  },
  {
    area: 'site',
    path: '/booking',
    title: 'Booking',
    nav: { label: 'Booking', path: '/booking', section: 'Site' },
    element: lazy(() => import('./pages/BookingPage').then((m) => ({ default: m.SiteBookingPage }))),
  },
  {
    area: 'site',
    path: '/profile',
    title: 'Profile',
    nav: { label: 'Profile', path: '/profile', section: 'Account' },
    element: lazy(() => import('./pages/ProfilePage').then((m) => ({ default: m.SiteProfilePage }))),
    requiresAuth: true,
  },
  {
    area: 'site',
    path: '/core-ui',
    title: 'Core UI',
    nav: { label: 'Core UI', path: '/core-ui', section: 'Learning' },
    element: lazy(() => import('./pages/CoreUiPage').then((m) => ({ default: m.CoreUiPage }))),
  },
]

export const siteDefaultPath = '/'
