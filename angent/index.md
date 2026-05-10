# Frontend Knowledge Map

## Muc tieu

Folder `angent/` nay khong dung de mo ta logic demo hien tai.

No dung de dinh nghia:

- du an frontend se trien khai nhu the nao
- cau truc nao duoc xem la chuan de phat trien tiep
- nguoi moi can hoc gi de vao du an va di phong van
- AI agent phai follow luat nao khi mo rong source

## Doc theo thu tu nay

1. `senior-frontend-blueprint.md`
   - Ban thiet ke muc tieu cho du an that
   - Gom `project structure`, `website structure`, `form structure`
2. `mentor-frontend-roadmap.md`
   - Ban do hoc frontend cho nguoi moi
   - Tap trung vao production va interview, khong bi gioi han boi React
3. `structure.md`
   - Tai lieu cu de doc template Horizon UI Chakra
   - Huu ich de biet template hien tai dang to chuc ra sao
4. `structure/react-beginner.md`
   - Giai thich React theo template dang co

## Nhanh gon ve source hien tai

- `src/` la template dashboard co san
- `src/routes.js` dang la route config cua template
- `src/layouts/admin/index.js` dang la bo khung layout cua template
- `src/views/*` dang la demo pages cua template

Quy uoc cua repo nay:

- Template hien tai la `reference`
- Blueprint trong tai lieu nay moi la `target`
- Khi build du an that, uu tien architecture moi truoc khi gan business logic

## Cach dung cho team

- Junior doc `mentor-frontend-roadmap.md` truoc
- Senior/lead doc `senior-frontend-blueprint.md` truoc
- AI agent doc local skill `frontend-blueprint-mentor`

## Nguyen tac chung

- Khong dua business logic vao `shared UI`
- Khong de form, API, page, validation trong cung mot file neu feature da lon
- Khong dung ten folder theo ten widget demo cua template cho du an that
- Moi module moi phai tra loi duoc 4 cau hoi:
  - page nay thuoc khu nao cua website
  - state nay la local hay server state
  - form nay submit theo contract nao
  - file nay la shared, feature, hay page-only
