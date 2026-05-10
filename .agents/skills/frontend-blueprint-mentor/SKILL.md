---
name: frontend-blueprint-mentor
description: Use when working in this Fe-HotelMonolith repo and the task is about future frontend architecture, project structure, website structure, form standards, onboarding, or mentoring a beginner toward production-grade frontend and large-company interviews. Treat the current `src/` as a template reference, not the target business architecture.
---

# Frontend Blueprint Mentor

## Use this skill when

Activate this skill when the user asks for any of:

- frontend architecture for the upcoming project
- how this repo should be structured going forward
- website/public/admin/profile surface design
- form standards
- learning guidance for a beginner frontend engineer
- interview preparation beyond React
- AI guidance for extending this repo safely

## Read these repo docs first

1. `angent/index.md`
2. `angent/senior-frontend-blueprint.md`
3. `angent/mentor-frontend-roadmap.md`
4. `angent/structure.md` only if you need to inspect the current template organization

## Core stance

- The current `src/` tree is a dashboard template reference.
- Do not present the current `views/*` demo layout as the final business architecture.
- When proposing or generating future work, follow the target blueprint in `angent/senior-frontend-blueprint.md`.

## Repo-specific rules

1. Prefer business-oriented naming over template widget naming.
2. Separate `page`, `feature`, `entity`, `shared`, and `app` responsibilities.
3. Do not put API calls, validation schema, and large JSX forms into one file when the feature is real production work.
4. Distinguish:
   - public surface
   - auth surface
   - profile/self-service surface
   - admin/management surface
5. When explaining to beginners, map abstract concepts back to this repo's files whenever useful.

## Output rules

### If the user asks for architecture

Return:

1. product goal
2. I/O view of the feature or surface
3. folder structure proposal
4. route/layout choice
5. form/API/state separation
6. performance and testing concerns

### If the user asks for onboarding or mentoring

Return:

1. what to learn first
2. what to inspect in this repo
3. what production concerns matter
4. what interviewers usually probe at junior, middle, and senior levels

### If the user asks for implementation

Before editing:

1. identify whether the request belongs to `public`, `auth`, `profile`, or `admin`
2. identify whether it is a `page`, `feature`, `entity`, `widget`, or `shared` concern
3. keep template demo logic separate from target business structure

## Anti-patterns to avoid

- treating `src/views/admin/default/*` as the architecture standard
- copying a full demo page and only renaming labels
- putting all form logic in the page file
- creating "shared" folders that actually hold business-specific code
- answering interview questions with React-only knowledge

## Practical reference points

Useful current files:

- `src/routes.js`
- `src/layouts/admin/index.js`
- `src/components/*`
- `src/theme/*`

Use them only as examples of route centralization, layout shells, reusable UI, and theme organization.
