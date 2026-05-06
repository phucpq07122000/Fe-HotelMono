# React Cho Nguoi Moi - Doc Theo Horizon UI Chakra

## Muc tieu

File nay giai thich React theo cach de hoc nhat:

- khong hoc ly thuyet rong
- di tu source that trong repo
- nhin tu ngoai vao trong

Repo dang doc:

- `D:\OneDrive\DataPerson\FolderPersonalInformation\Code\HotelManagementSystem\HotelMonolith\Fe-HotelMonolith\horizon-ui-chakra-source`

## React la gi

Noi ngan gon:

- React la thu vien de xay giao dien bang cac `component`
- Moi `component` la 1 khoi UI nho
- Nhieu component ghep lai thanh 1 trang
- Nhieu trang ghep lai thanh 1 ung dung

Vi du rat de hieu:

- `Navbar` la 1 component
- `Sidebar` la 1 component
- `ProfileCard` la 1 component
- Trang dashboard la noi lap cac component do lai

## 4 khai niem bat buoc phai nam

### 1. Component

Component la 1 ham tra ve giao dien.

Vi du:

```jsx
function Hello() {
  return <div>Hello React</div>;
}
```

Y nghia:

- ban viet UI bang nhieu ham nho
- moi ham chiu trach nhiem 1 phan giao dien

### 2. JSX

JSX la cu phap trong giong HTML nhung viet trong JavaScript.

Vi du:

```jsx
const element = <h1>Xin chao</h1>;
```

Dung de:

- viet UI de doc
- de nhin
- de tach component

### 3. Props

`props` la du lieu component cha truyen xuong component con.

Vi du:

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Neu goi:

```jsx
<Welcome name="Phuc" />
```

Thi ket qua se la:

```jsx
Hello Phuc
```

Y nghia:

- component co the dung lai
- chi thay du lieu dau vao

### 4. State

`state` la du lieu song ben trong component.

Vi du:

```jsx
const [count, setCount] = useState(0);
```

Y nghia:

- `count` la gia tri hien tai
- `setCount` la cach cap nhat gia tri
- khi state doi, UI se render lai

## Doc repo nay theo thu tu nao

Neu moi hoc, dung doc ngau nhien. Doc theo thu tu nay:

1. `src/index.js`
2. `src/App.js`
3. `src/routes.js`
4. `src/layouts/admin/index.js`
5. 1 page cu the trong `src/views/*`
6. cac component ma page do dang goi

## 1. Diem bat dau cua app

File:

- `src/index.js`

Day la noi React duoc gan vao HTML goc.

Ban cu hieu:

- HTML co 1 cai khung rong
- React nhay vao cai khung do de ve UI

## 2. App shell

File:

- `src/App.js`

Trong file nay, co 3 y chinh:

- boc app bang `ChakraProvider`
- khai bao route lon
- giu `theme` trong state

Ban co the hieu nhu sau:

- `App.js` la cua vao tong
- no quyet dinh app se chia thanh khu nao
- o day co 3 khu: `auth`, `admin`, `rtl`

Doan quan trong:

```jsx
<Routes>
  <Route path="auth/*" element={<AuthLayout />} />
  <Route path="admin/*" element={<AdminLayout />} />
  <Route path="rtl/*" element={<RTLLayout />} />
</Routes>
```

Y nghia:

- URL doi thi component hien ra se doi
- do la co che route trong React

## 3. Route la gi

File:

- `src/routes.js`

File nay la danh sach cac trang.

Vi du:

- `Main Dashboard`
- `Data Tables`
- `Profile`
- `Sign In`

Moi item thuong co:

- `name`
- `layout`
- `path`
- `icon`
- `component`

Hay doc no nhu cau:

- khi vao URL nay
- trong layout nay
- thi hien component kia

## 4. Layout la gi

File:

- `src/layouts/admin/index.js`
- `src/layouts/auth/index.js`

`layout` la bo khung dung chung cho nhieu trang.

Vi du trong admin:

- co `Sidebar`
- co `Navbar`
- co `Footer`
- phan noi dung giua thay doi theo route

Tu duy dung:

- `layout` = khung co dinh
- `page` = noi dung thay doi

Neu khong co layout, moi trang se phai viet lai sidebar, navbar, footer.

## 5. View hay page la gi

Thu muc:

- `src/views/admin/default`
- `src/views/admin/profile`
- `src/views/auth/signIn`

Day la tang man hinh.

Ban cu hieu:

- `views` = moi folder la 1 man hinh lon
- trong man hinh do lai lap tiep cac component nho hon

Vi du:

- `dashboard` la 1 page
- trong dashboard co chart, card, bang, activity...

## 6. Component dung lai la gi

Thu muc:

- `src/components/card`
- `src/components/navbar`
- `src/components/sidebar`
- `src/components/charts`

Day la noi chua cac manh UI co the dung lai nhieu noi.

Vi du:

- 1 card thong ke dung o 3 trang
- 1 navbar dung cho toan bo admin
- 1 input field dung cho nhieu form

Tinh than quan trong nhat cua React nam o day:

- chia nho UI
- tai su dung UI
- quan ly de hon

## 7. Theme la gi

Thu muc:

- `src/theme`

No chua:

- mau sac
- breakpoint
- style override cho component Chakra

Neu ban moi hoc, cu hieu:

- `theme` la bo quy tac giao dien chung
- doi theme la co the doi nhieu noi cung luc

## 8. Dung tong the repo nay de nho flow

Hoc theo 1 dong:

`App` -> `Routes` -> `Layout` -> `View/Page` -> `Components`

Y nghia thuc te:

- `App` chia khu
- `Routes` quyet dinh duong dan
- `Layout` tao khung
- `View` la trang lon
- `Components` la manh UI nho

## 9. Cach hoc de khong bi ngop

Khong nen:

- mo 20 file mot luc
- hoc het hooks ngay tu dau
- nhay vao code chart phuc tap truoc

Nen hoc:

1. Doc `App.js`
2. Doc `routes.js`
3. Chon 1 trang de doc, nen bat dau bang `auth/signIn`
4. Xem trang do dang goi component nao
5. Quay lai `components/` de hieu cach tach UI

## 10. Ban can nam gi tiep theo sau file nay

Sau khi hieu file nay, thu tu hoc nen la:

1. `useState`
2. `props`
3. event `onClick`, `onChange`
4. render list bang `.map()`
5. `useEffect`
6. form submit
7. fetch API
8. state management lon hon

## 11. Danh gia repo nay duoi goc nhin nguoi moi hoc

Phu hop de hoc:

- cach chia layout
- cach to chuc routes
- cach tach component UI
- cach dung Chakra UI

Khong ly tuong de hoc logic app that ngay lap tuc vi:

- no la template dashboard demo
- co nhieu data mock
- co nhieu phan trang tri nhu NFT, chart, anh minh hoa

## 12. Cach lien he voi frontend hotel cua ban

Frontend hotel hien tai trong repo cua ban dang theo huong de hoc hon neu dua ve:

- `features/<domain>/pages`
- `features/<domain>/components`
- `api`
- `types`
- `store`

Con template Horizon nay tot nhat nen dung de hoc:

- cach lam admin shell
- cach bo tri sidebar/navbar/content
- cach chia reusable UI

## Ket luan cho nguoi moi

Neu chi nho 3 y, hay nho:

1. React la cach ghep UI tu nhieu component nho.
2. Route giup doi trang, layout giup giu khung, page giup hien noi dung.
3. Muon gioi React, phai tap doc va tach component thay vi viet 1 file that dai.
