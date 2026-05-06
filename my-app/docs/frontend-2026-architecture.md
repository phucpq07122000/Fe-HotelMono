# Frontend 2026 Architecture

## Goal

This app keeps the current `my-app` Vite entrypoint but shifts the source into a clearer teaching and scaling shape:

- `src/features`: domain-first UI and hooks
- `src/api`: transport boundary and interceptors
- `src/components`: reusable app shell and guards
- `src/store`: small cross-page client state
- `src/types`: shared contracts

## Why this shape

1. Easy to extend
Each new business area gets a feature folder instead of adding logic into a global page bucket.

2. Easy to learn
The input -> hook -> API -> render path is visible in one place. New developers can trace a page without digging through the whole app.

3. Ready for performance work
Routes stay lazy, search is deferred, and the API layer is isolated so real caching or React Query can be added later without rewriting page layout.

4. Ready for security work
Axios interceptor, auth storage boundary, protected routes, and error boundaries are already in place for real JWT, refresh flow, and API error contracts.

## Extension rules

- Put page-specific remote calls behind `src/api/*`.
- Keep local form state inside the feature unless multiple routes need it.
- Add admin routes in `src/modules/admin/routes.ts`.
- Add guest routes in `src/modules/site/routes.ts`.
- Avoid placing domain logic directly inside `App.tsx` or the shared layout.

## Performance checklist

- Add pagination before rendering large booking or hotel lists.
- Debounce or defer search fields before hitting the backend.
- Measure p95 response time for search and booking endpoints before optimizing UI.
- Keep dashboard summary APIs separate from paged table APIs.

## Security checklist

- Move auth from `localStorage` to secure cookie or hardened token flow when the backend is ready.
- Validate every booking field on the server, even if the UI already validates it.
- Enforce role checks on backend admin APIs, not only in the front-end route guard.
- Sanitize all rich-text or guest note output before rendering it back to the page.
