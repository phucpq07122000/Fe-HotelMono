---
name: fe-module-scaffold
description: Scaffold and maintain the module-based Vite+React frontend in this repo. Use when adding or modifying Admin/Site modules (Hotel, User, Customer, Promotion, FacetValue, Role, Booking, Login, Profile), wiring new pages into hash routes, updating sidebar navigation, or generating consistent TSX/HTML page templates that match the `ShellLayout` + `App.css` primitives.
---

# Frontend module scaffold

## Repo conventions (read first)

- App root: `my-app/`
- Module routes:
  - Admin: `my-app/src/modules/admin/routes.ts`
  - Site: `my-app/src/modules/site/routes.ts`
- Layout primitives: `my-app/src/layouts/ShellLayout.tsx`
- Hash navigation: `my-app/src/hooks/useHashLocation.ts`
- Auth demo: `my-app/src/modules/auth/useAuth.tsx`
- CSS primitives: `my-app/src/App.css`
- Core UI: `my-app/src/core/ui/index.ts`
- Core hooks: `my-app/src/core/hooks/index.ts`

## Add a new page (checklist)

1. Create page component under:
   - Admin: `my-app/src/modules/admin/pages/<Name>Page.tsx`
   - Site: `my-app/src/modules/site/pages/<Name>Page.tsx`
2. Add route entry in the correct `routes.ts`:
   - `path` must start with `/`
   - use `lazy(() => import('./pages/...').then(m => ({ default: m.<Export> })))`
3. If you want it in sidebar, set `nav: { label, path, section }`
4. If it requires login, set `requiresAuth: true`
5. Prefer core UI imports from `my-app/src/core/ui`

## Page template (TSX)

Prefer this skeleton (matches current CSS):

```tsx
export function ExamplePage() {
  return (
    <div className="page">
      <header className="page__head">
        <h1 className="page__title">Title</h1>
        <div className="page__actions">
          <button className="btn btn--small">Action</button>
        </div>
      </header>

      <section className="card">
        <div className="card__head">
          <div className="card__title">Section</div>
        </div>
        <div className="card__body">{/* form/table/cards */}</div>
      </section>
    </div>
  )
}
```

## Common UI patterns

- Search form: use `grid grid--2` or `grid grid--3` + `field`
- CRUD list: use `table` + `table__actions`
- Small cards: use `miniCard`
