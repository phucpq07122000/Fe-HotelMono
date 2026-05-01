import type { AppRoute, NavItem } from '../router/types'
import { adminRoutes, adminDefaultPath } from './admin/routes'
import { siteRoutes, siteDefaultPath } from './site/routes'

export const allRoutes: AppRoute[] = [...siteRoutes, ...adminRoutes]

export const defaults = {
  admin: adminDefaultPath,
  site: siteDefaultPath,
  login: '/login',
} as const

export function navForArea(area: 'admin' | 'site') {
  const from = area === 'admin' ? adminRoutes : siteRoutes
  return from.map((r) => r.nav).filter(Boolean) as NavItem[]
}
