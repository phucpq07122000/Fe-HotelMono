# Agent notes (Frontend)

This repo contains a Vite + React app in `my-app/`.

## Module-first structure

- Admin routes: `my-app/src/modules/admin/routes.ts`
- Site routes: `my-app/src/modules/site/routes.ts`
- Shared auth: `my-app/src/modules/auth/useAuth.tsx`
- Layout shell: `my-app/src/layouts/ShellLayout.tsx`
- Hash routing hook: `my-app/src/hooks/useHashLocation.ts`
- Core UI: `my-app/src/core/ui/*`
- Core hooks: `my-app/src/core/hooks/*`

## Conventions

- Prefer adding new features as new pages under the correct area:
  - Admin: `my-app/src/modules/admin/pages/*`
  - Site: `my-app/src/modules/site/pages/*`
- Register pages via `React.lazy()` in the area `routes.ts`.
- Keep page markup consistent with the primitives in `my-app/src/App.css`:
  - `page`, `page__head`, `page__title`, `card`, `table`, `field`, `grid`
- For new pages, prefer imports from `my-app/src/core/ui` instead of repeating raw UI markup.

## Auth gating (demo)

- Mark routes with `requiresAuth: true` if they require login.
- `/login` is handled directly in `my-app/src/App.tsx`.
