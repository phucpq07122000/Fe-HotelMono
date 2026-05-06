import {
  BedDouble,
  CalendarCheck2,
  LayoutDashboard,
  MoonStar,
  Search,
  ShieldCheck,
  SunMedium,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { AuthSession } from '../types'
import type { NavItem } from '../router/types'
import { useAppStore } from '../store/appStore'

const navIcons: Record<string, LucideIcon> = {
  '/': Search,
  '/booking': CalendarCheck2,
  '/booking/status': ShieldCheck,
  '/admin/dashboard': LayoutDashboard,
  '/admin/hotel': BedDouble,
  '/admin/booking': CalendarCheck2,
}

export function Layout(props: {
  title: string
  areaBadge: string
  nav: NavItem[]
  activePath: string
  onNavigate: (path: string) => void
  onLogout?: () => void
  user: AuthSession | null
  children: React.ReactNode
}) {
  const sections = groupNav(props.nav)
  const theme = useAppStore((state) => state.theme)
  const toggleTheme = useAppStore((state) => state.toggleTheme)
  const activeDate = useAppStore((state) => state.activeDate)
  const setActiveDate = useAppStore((state) => state.setActiveDate)

  return (
    <div className="workspace" data-theme={theme}>
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="sidebar__brand">
          <div className="sidebar__logo">HM</div>
          <div>
            <div className="sidebar__title">HotelMonolith</div>
            <div className="sidebar__subtitle">2026 front-end system</div>
          </div>
        </div>

        <div className="sidebar__sections">
          {sections.map((section) => (
            <div key={section.key} className="sidebar__group">
              {section.label ? <div className="sidebar__label">{section.label}</div> : null}
              <div className="sidebar__items">
                {section.items.map((item) => {
                  const Icon = navIcons[item.path] ?? LayoutDashboard
                  const isActive = props.activePath === item.path

                  return (
                    <button
                      key={item.path}
                      type="button"
                      className={`navButton ${isActive ? 'navButton--active' : ''}`}
                      onClick={() => props.onNavigate(item.path)}
                    >
                      <Icon size={18} strokeWidth={2.2} />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar__footer">
          <div className="securityCard">
            <div className="securityCard__title">Security defaults</div>
            <div className="securityCard__copy">Keep tokens short-lived, validate forms server-side, and protect admin routes.</div>
          </div>
        </div>
      </aside>

      <div className="surface">
        <header className="topbar">
          <div>
            <div className="topbar__eyebrow">{props.areaBadge}</div>
            <h1 className="topbar__title">{props.title}</h1>
          </div>

          <div className="topbar__actions">
            <label className="topbar__dateField">
              <span>Ops date</span>
              <input value={activeDate} type="date" onChange={(event) => setActiveDate(event.target.value)} />
            </label>

            <button type="button" className="iconButton" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'soft' ? <MoonStar size={18} /> : <SunMedium size={18} />}
            </button>

            <div className="profileChip">
              <div className="profileChip__avatar">{props.user?.displayName?.slice(0, 1) ?? 'G'}</div>
              <div>
                <div className="profileChip__name">{props.user?.displayName ?? 'Guest mode'}</div>
                <div className="profileChip__meta">{props.user?.roles.join(', ') ?? 'Visitor'}</div>
              </div>
            </div>

            {props.onLogout ? (
              <button type="button" className="ghostButton" onClick={props.onLogout}>
                Sign out
              </button>
            ) : null}
          </div>
        </header>

        <main className="content">{props.children}</main>
      </div>
    </div>
  )
}

function groupNav(items: NavItem[]) {
  const map = new Map<string, { key: string; label: string | null; items: NavItem[] }>()
  for (const item of items) {
    const key = item.section ?? ''
    if (!map.has(key)) map.set(key, { key, label: item.section ?? null, items: [] })
    map.get(key)?.items.push(item)
  }

  return [...map.values()].map((group) => ({
    ...group,
    items: group.items.sort((a, b) => a.label.localeCompare(b.label)),
  }))
}
