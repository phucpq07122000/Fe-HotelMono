# Mentor FE Roadmap

## Muc tieu

File nay danh cho nguoi moi hoc frontend nhung muon di lam production va di phong van cong ty lon.

Khong hoc theo kieu:

- hoc thuoc React hook
- hoc CSS cho dep
- clone UI cho nhanh

Phai hoc theo kieu:

- hieu web van hanh ra sao
- hieu source lon duoc chia the nao
- hieu vi sao code cua minh chay duoc o production

## 1. Nen web bat buoc

Day la nhom kien thuc neu hong thi se rat de bi hoi rot:

- HTML semantic
- CSS layout: block, flex, grid, stacking context
- DOM, event bubbling, event delegation
- Browser render pipeline: parse, layout, paint, composite
- HTTP, HTTPS, status code, method, header, cookie
- CORS, cache, CDN
- localStorage, sessionStorage, cookie
- auth co ban: access token, refresh token, session

Cau hoi phong van hay gap:

- tai sao click 1 nut lai co the trigger nhieu event
- khac nhau giua cookie va localStorage
- vi sao request bi CORS
- tai sao page bi cham du React van dung

## 2. JavaScript va TypeScript

Frontend engineer tot khong duoc yeu JS o muc "viet duoc".

Can chac:

- scope, closure
- hoisting
- this
- prototype
- array methods va immutable update
- promise, async/await, microtask, macrotask
- module system
- error handling
- TypeScript type, interface, union, generic, narrowing

Cau hoi phong van hay gap:

- vi sao closure vua manh vua nguy hiem
- khac nhau giua `==` va `===`
- event loop la gi
- type va interface khac nhau khi nao dung

## 3. React chi la tang UI

Nguoi moi hay tuong React la frontend.
Khong phai.

React la mot tang de render UI. Khi hoc React, can luon map no vao bai toan rong hon:

- component la tang view
- state la du lieu dieu khien view
- effect la dong bo voi ben ngoai
- route la navigation layer
- API la integration layer

Neu hoc React ma khong map vao architecture thi rat de roi vao:

- page 1000 dong
- form 1 file
- fetch API trong moi component
- khong phan biet local state va server state

## 4. Nhung thu mot FE production phai biet

### Performance

- bundle size
- code splitting
- lazy load
- debounce va throttle
- image optimization
- avoid rerender khong can thiet
- list virtualization
- do bang DevTools, Lighthouse, Web Vitals

### Accessibility

- keyboard navigation
- focus order
- aria label
- contrast
- semantic form field
- loading, empty, error state

### Testing

- unit test cho pure logic
- integration test cho page/form/flow
- e2e cho login, CRUD, checkout, payment flow

### Debugging

- doc stack trace
- xem Network tab
- xem request payload va response contract
- phan biet bug UI, bug state, bug API, bug data

## 5. Tu duy architecture cho nguoi moi

Khi nhin mot source lon, truoc tien phai hoi:

1. App entry nam o dau
2. Route nam o dau
3. Layout nam o dau
4. Shared component nam o dau
5. Feature folder nam o dau
6. API layer nam o dau
7. Form schema nam o dau

Neu khong tra loi duoc 7 cau nay, nghia la chua that su "doc duoc source".

## 6. Tu duy phong van cong ty lon

Cong ty lon thuong khong hoi "thuoc API React" la chinh.
Ho hoi:

- ban debug nhu the nao
- ban chia source the nao de scale
- ban xac dinh state nao dua vao store
- ban toi uu page cham bang cach nao
- ban review PR cua junior ra sao
- ban test feature nay o dau va vi sao

Noi ngan gon:

- junior bi hoi "biet lam khong"
- middle bi hoi "biet giai thich khong"
- senior bi hoi "biet trade-off va dan doi khong"

## 7. Lo trinh hoc de di lam that

### Stage 1 - Foundation

- HTML, CSS, responsive
- JavaScript core
- Git co ban
- HTTP co ban

### Stage 2 - App building

- React component, props, state, effect
- Router
- Form
- API call
- Loading, error, empty state

### Stage 3 - Production

- TypeScript
- auth flow
- data fetching strategy
- folder structure
- reusable component
- performance va accessibility

### Stage 4 - Interview upgrade

- event loop
- browser rendering
- caching
- testing strategy
- frontend architecture
- system design cho web app

## 8. Cach doc repo nay de hoc

Repo nay dang co template dashboard. Dung no de hoc cach nhan dien:

- `src/routes.js`: route config
- `src/layouts/admin/index.js`: layout shell
- `src/views/*`: page demo
- `src/components/*`: reusable UI
- `src/theme/*`: design system cua template

Nhung khi build du an that, khong nen giu nguyen cach chia do lam architecture business.

## 9. Checklist tu danh gia

Neu muon di phong van, hay tu hoi:

- Minh co giai thich duoc browser render 1 page nhu the nao khong
- Minh co biet request auth chay ra sao khong
- Minh co biet vi sao rerender xay ra khong
- Minh co biet cach chia folder cho 1 feature CRUD co form khong
- Minh co biet cach test flow quan trong nhat cua app khong
- Minh co biet cach debug bug production khong

Neu con nhieu cau "khong", uu tien hoc theo lo trinh o tren thay vi hoc them UI library moi.
