import type { NavItem } from '../router/types'

export function ShellLayout(props: {
  title: string
  areaBadge: string
  nav: NavItem[]
  activePath: string
  onNavigate: (path: string) => void
  onLogout?: () => void
  children: React.ReactNode
}) {
  const sections = groupNav(props.nav)
  return (
    <div className="shell">
      <div className="shell__top">
        <div className="shell__brand">
          <div className="shell__badge">{props.areaBadge}</div>
          <div>
            <div className="shell__title">{props.title}</div>
            <div className="shell__subtitle">Module-based demo scaffold</div>
          </div>
        </div>
        {props.onLogout && (
          <button type="button" className="btn btn--small" onClick={props.onLogout}>
            Logout
          </button>
        )}
      </div>

      <div className="shell__body">
        <aside className="shell__nav" aria-label="Navigation">
          {sections.map((section) => (
            <div key={section.key} className="shell__navGroup">
              {section.label && <div className="shell__navLabel">{section.label}</div>}
              <div className="shell__navItems">
                {section.items.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    className={`shell__navItem ${props.activePath === item.path ? 'shell__navItem--active' : ''}`}
                    onClick={() => props.onNavigate(item.path)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <main className="shell__content">{props.children}</main>
      </div>
    </div>
  )
}

function groupNav(items: NavItem[]) {
  const map = new Map<string, { key: string; label: string | null; items: NavItem[] }>()
  for (const item of items) {
    const key = item.section ?? ''
    if (!map.has(key)) map.set(key, { key, label: item.section ?? null, items: [] })
    map.get(key)!.items.push(item)
  }
  return [...map.values()].map((g) => ({ ...g, items: g.items.sort((a, b) => a.label.localeCompare(b.label)) }))
}

