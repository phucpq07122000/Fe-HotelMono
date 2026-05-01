import type { ComponentType, LazyExoticComponent } from 'react'

export type AppArea = 'site' | 'admin'

export type NavItem = {
  label: string
  path: string
  section?: string
}

export type AppRoute = {
  area: AppArea
  path: string
  title: string
  nav?: NavItem
  element: LazyExoticComponent<ComponentType>
  requiresAuth?: boolean
}
