# Senior Frontend Blueprint

## Muc tieu

File nay mo ta kien truc muc tieu cho du an frontend sap trien khai.

No khong mo ta logic demo hien tai trong `src/views/*`.
Source hien tai chi la template tham khao de giu:

- layout idea
- visual primitive
- component inspiration

Business architecture cua du an that phai theo blueprint nay.

## 1. Product direction

Du an can san sang cho 2 loai nhu cau:

- website/public surface
- management/admin surface

Vi vay architecture khong nen chia theo widget demo, ma chia theo business area va UI surface.

## 2. Cau truc du an chuan

Muc tieu la chia du an theo trach nhiem ro rang:

```text
src/
  app/
    providers/
    router/
    store/
    styles/
  shared/
    ui/
    lib/
    hooks/
    constants/
    types/
  entities/
    user/
    hotel/
    booking/
  features/
    auth/
    search-hotel/
    manage-booking/
    update-profile/
  widgets/
    sidebar/
    navbar/
    filters/
    booking-table/
  pages/
    public/
    auth/
    admin/
    profile/
```

## 3. Quy tac chia lop

### `app/`

Dung cho phan khoi dong he thong:

- app provider
- router root
- global state bootstrap
- global theme
- auth bootstrap

Khong dat business feature vao day.

### `shared/`

Dung cho thu co the tai su dung rong:

- base button
- modal shell
- formatter
- http client
- query key helper
- common hook khong gan business

Khong dat API cua mot module cu the vao `shared/`.

### `entities/`

Dung cho kha nang mo ta business object co tinh on dinh:

- `hotel`
- `booking`
- `customer`
- `role`

Moi entity nen co:

- `types`
- `model`
- `api` nho neu can
- `ui` nho neu co pattern lap lai

### `features/`

Day la noi chua use case:

- login
- create booking
- approve promotion
- update profile

Feature la noi dung nhat de dat:

- form
- validation
- submit handler
- API mapping
- side effect lien quan use case

### `widgets/`

Dung cho cum UI lon hon component nhung chua dat muc page:

- booking filter panel
- dashboard summary strip
- hotel search results block

### `pages/`

Page chi nen lam:

- compose widgets va features
- lay route params
- trigger page-level loading/error shell

Khong nen nhoi full business flow vao page.

## 4. Cau truc website chuan

Frontend nay nen tach 4 khu:

### `public`

Cho nguoi chua dang nhap:

- home
- hotel list
- hotel detail
- promotion
- contact

### `auth`

Cho login, register, forgot password, verify flow.

### `profile`

Cho self-service:

- my profile
- my bookings
- change password
- notification settings

### `admin`

Cho management:

- dashboard
- hotel management
- customer management
- booking management
- promotion management
- role/permission management

## 5. Route strategy

Route config nen dat tap trung, khong hard-code khap noi.

De xuat:

- `app/router/public-routes.ts`
- `app/router/auth-routes.ts`
- `app/router/profile-routes.ts`
- `app/router/admin-routes.ts`

Moi route item nen co:

- `path`
- `page`
- `layout`
- `requiresAuth`
- `permissions`
- `breadcrumb`
- `seo` neu la public page

## 6. Layout strategy

Toi thieu can 4 layout:

- `PublicLayout`
- `AuthLayout`
- `ProfileLayout`
- `AdminLayout`

Moi layout chi xu ly:

- shell
- nav
- sidebar
- header
- footer
- responsive frame

Khong dat API call business vao layout.

## 7. Form structure chuan

Form la noi rat de lo xon. Can tach ro:

```text
features/
  create-hotel/
    api/
    model/
    ui/
    lib/
```

Trong do:

- `api/`: request function
- `model/`: input type, dto, mapping
- `ui/`: form component, field group, submit section
- `lib/`: validation schema, default value, transform helper

## 8. Quy tac lam form

1. Field config va schema khong dat lan trong page.
2. Mapping request payload tach khoi JSX.
3. Server error phai map ve field neu co the.
4. Luon co:
   - loading state
   - disabled state
   - submit error state
   - success state
5. Neu form dai:
   - tach section
   - tach reusable field group
   - co sticky action bar neu can

## 9. Form state va server state

Khong gop het vao cung mot state.

- form state: gia tri user dang nhap
- server state: data lay tu API
- ui state: open modal, active tab, expanded row

Neu khong tach ba loai nay, code se rat nhanh roi.

## 10. API layer chuan

Moi feature khong nen `fetch` truc tiep trong component.

Can co layer ro:

- http client
- endpoint function
- response mapper
- query/mutation hook neu co

Muc tieu:

- de test
- de thay doi contract
- de log/decode loi

## 11. Permission va auth

Can quy uoc tu dau:

- route nao can login
- route nao can role
- component nao can permission gate
- token refresh o dau
- unauthorized xu ly the nao

Auth la cross-cutting concern, nhung khong vi the ma dat tung doan auth logic khap moi page.

## 12. Performance by design

Ngay tu architecture can tranh:

- page import qua nhieu widget nang
- form lon gom qua nhieu controlled field khong can thiet
- table render full list khong phan trang
- image lon khong toi uu
- route nao cung tai mot lan

Baseline can co:

- route-level lazy load
- image policy
- pagination strategy
- caching strategy cho server state

## 13. Testing strategy

### Unit

- formatter
- mapper
- validation helper
- permission helper

### Integration

- form submit flow
- route guard
- data table filter
- modal action

### E2E

- login
- CRUD quan trong
- booking/payment flow

## 14. Team conventions

- ten folder theo business term, khong theo ten demo widget
- page khong vuot qua muc "qua nhieu viec"
- utility chung moi duoc vao `shared`
- feature nao co submit thi phai co schema va request mapper ro rang
- route moi phai co owner surface: public, auth, profile, admin

## 15. Cach nhin template hien tai

Co the hoc tu template hien tai:

- `src/routes.js`: cach tap trung route
- `src/layouts/admin/index.js`: cach tao shell layout
- `src/components/*`: cach tach reusable UI
- `src/theme/*`: cach quan ly theme

Khong nen copy nguyen:

- `views/admin/default`
- `views/admin/marketplace`
- `views/admin/profile`

vi day la demo page structure, khong phai target business structure.
