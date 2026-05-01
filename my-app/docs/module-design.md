# Frontend module design (Admin/Site)

This app uses a simple **module-first** structure: each module exports its own routes, and `src/App.tsx` composes them into the running application.

## Goals

- Keep code organized by **domain module** (Hotel, Booking, Promotion, …).
- Make each module **self-contained** (pages + routes + types/services later).
- Allow lazy loading per page via `React.lazy()` to keep bundles smaller.
- Keep routing simple with hash URLs (`#/admin/hotel`, `#/booking`, …).

## Folder layout

```
src/
  modules/
    admin/
      pages/
      routes.ts
    site/
      pages/
      routes.ts
    auth/
      useAuth.tsx
  layouts/
    ShellLayout.tsx
  hooks/
    useHashLocation.ts
  router/
    match.ts
    types.ts
```

## Areas

- **Admin** (`/admin/*`): back-office pages (CRUD, master data).
  - Hotel
  - User
  - Customer
  - Promotion
  - FacetValue
  - Role
  - Booking
- **Site** (`/`): customer-facing pages.
  - Home
  - Promotions
  - Booking
  - Profile
  - Login

## Add a new Admin module/page

1. Create a page component:
   - `src/modules/admin/pages/<YourPage>.tsx`
2. Register a route:
   - `src/modules/admin/routes.ts`
3. Add navigation metadata (`nav`) so it shows in sidebar.
4. Prefer importing UI from `src/core/ui` instead of writing raw repeated markup.

## Add a new Site module/page

1. Create a page component:
   - `src/modules/site/pages/<YourPage>.tsx`
2. Register a route:
   - `src/modules/site/routes.ts`
3. Prefer `Page`, `PageHeader`, `Card`, `Field`, `DataTable`, and `Badge` from `src/core/ui`.

## Route shape

Routes are declared with:

- `area`: `"admin"` or `"site"`
- `path`: hash path (example: `/admin/hotel`)
- `title`: page title (for docs / future breadcrumb)
- `nav`: optional sidebar item
- `element`: lazy component import
- `requiresAuth`: gate access (redirects to `/login`)

## HTML/TSX page template

Use this layout for fast, consistent pages:

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
        <div className="card__body">
          {/* form/table/cards */}
        </div>
      </section>
    </div>
  )
}
```

## Login/auth (demo)

- Auth state lives in `localStorage` (`hotelmonolith.auth.user`).
- Login sets role:
  - username `admin` → `Admin`
  - otherwise → `Customer`

Replace this with real API login later.

## Learning docs

- Core UI guide: `docs/core-ui-guide.md`
- React core learning path: `docs/react-core-learning.md`
