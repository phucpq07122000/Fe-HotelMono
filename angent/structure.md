# Horizon UI Chakra - Structure Notes

## Nguon clone

- Repo: `https://github.com/horizon-ui/horizon-ui-chakra.git`
- Thu muc local: `D:\OneDrive\DataPerson\FolderPersonalInformation\Code\HotelManagementSystem\HotelMonolith\Fe-HotelMonolith\horizon-ui-chakra-source`

## Tong quan nhanh

- Day la template dashboard dung `react-scripts` (Create React App), `React 19`, `Chakra UI`.
- Diem vao app la `src/index.js` -> `src/App.js`.
- Route trung tam nam o `src/routes.js`.
- Kieu to chuc hien tai la `layout + views + reusable components`, chua tach theo feature/business module.

## Cay thu muc rut gon

```text
horizon-ui-chakra-source
|-- public/
|   |-- favicon.ico
|   |-- index.html
|   |-- manifest.json
|   `-- robots.txt
|-- src/
|   |-- App.js
|   |-- index.js
|   |-- routes.js
|   |-- assets/
|   |   |-- css/
|   |   `-- img/
|   |       |-- auth/
|   |       |-- avatars/
|   |       |-- dashboards/
|   |       |-- layout/
|   |       |-- nfts/
|   |       `-- profile/
|   |-- components/
|   |   |-- calendar/
|   |   |-- card/
|   |   |-- charts/
|   |   |-- dataDispaly/
|   |   |-- fields/
|   |   |-- fixedPlugin/
|   |   |-- footer/
|   |   |-- icons/
|   |   |-- menu/
|   |   |-- navbar/
|   |   |   `-- searchBar/
|   |   |-- rtlProvider/
|   |   |-- scroll/
|   |   |-- scrollbar/
|   |   |-- separator/
|   |   `-- sidebar/
|   |       `-- components/
|   |-- contexts/
|   |   `-- SidebarContext.js
|   |-- layouts/
|   |   |-- admin/
|   |   |-- auth/
|   |   `-- rtl/
|   |-- theme/
|   |   |-- additions/
|   |   |   `-- card/
|   |   |-- components/
|   |   `-- foundations/
|   |-- variables/
|   |   `-- charts.js
|   `-- views/
|       |-- admin/
|       |   |-- dataTables/
|       |   |-- default/
|       |   |-- marketplace/
|       |   |-- profile/
|       |   `-- rtl/
|       `-- auth/
|           `-- signIn/
|-- .env
|-- package.json
|-- README.md
`-- CHANGELOG.md
```

## Ghi chu cau truc

### 1. Entry va app shell

- `src/index.js`: mount React app vao DOM.
- `src/App.js`: boc `ChakraProvider`, chia 3 nhanh route lon:
  - `auth/*`
  - `admin/*`
  - `rtl/*`
- `src/routes.js`: khai bao menu item va map route -> page component.

### 2. Layout

- `src/layouts/admin`: layout dashboard chinh, gom `Sidebar`, `Navbar`, `Footer`, va render cac route admin.
- `src/layouts/auth`: layout rieng cho man hinh dang nhap.
- `src/layouts/rtl`: layout cho giao dien right-to-left.

Nhan xet:
- Routing dang dua tren 1 mang route tap trung.
- Sidebar/menu cung doc truc tiep tu `routes.js`.

### 3. Views

- `src/views/admin/default`: dashboard mac dinh.
- `src/views/admin/dataTables`: bang du lieu demo.
- `src/views/admin/marketplace`: marketplace/NFT demo.
- `src/views/admin/profile`: trang profile.
- `src/views/admin/rtl`: bien the RTL cua dashboard.
- `src/views/auth/signIn`: trang dang nhap.

Nhan xet:
- `views` la page-level.
- Moi page thuong co `components/` rieng va `variables/` rieng ngay ben trong page do.

### 4. Reusable components

- `src/components/card`: card, statistics, NFT card...
- `src/components/charts`: bar, line, pie chart wrappers.
- `src/components/navbar`, `sidebar`, `footer`: khung dashboard.
- `src/components/fields`: input/switch field wrappers.
- `src/components/calendar`, `menu`, `icons`, `separator`, `scrollbar`: cac UI piece dung lai.

Nhan xet:
- Day la tang reusable UI.
- Ten thu muc `dataDispaly` dang bi sai chinh ta, dung ra nen la `dataDisplay`.

### 5. Theme va style system

- `src/theme/theme.js`: theme goc cua Chakra.
- `src/theme/styles.js`: style config chung.
- `src/theme/components/*`: override component styles.
- `src/theme/foundations/breakpoints.js`: breakpoint setup.
- `src/assets/css/*`: css bo sung ngoai Chakra.

Nhan xet:
- Theme duoc tap trung kha ro.
- Van con tron giua Chakra theme va file CSS thu cong.

### 6. Assets va du lieu demo

- `src/assets/img/*`: anh minh hoa cho auth, dashboard, avatar, NFT, profile.
- `src/variables/charts.js`: du lieu/option chart.
- Trong tung page con co nhieu file `.json` mock data cho table.

Nhan xet:
- Template nay mang tinh demo rat ro.
- Nhieu data dang la static JSON, can tach ra neu doi sang du lieu that.

## Danh gia nhanh theo huong tai su dung

- Manh:
  - Tach ro `layout`, `views`, `components`, `theme`.
  - De dung lam source tham khao de copy dashboard shell.
  - `routes.js` giup nhin nhanh tat ca man hinh chinh.
- Han che:
  - Chua theo feature-first/business module.
  - Route config dang tron ca metadata menu va component render.
  - Co nhieu artifact demo (`NFT`, mock JSON, anh placeholder).
  - Ten folder va convention chua that su dong nhat.

## Neu muon tai su dung cho du an hotel

- Co the hoc 4 lop:
  - `layouts/` cho khung admin
  - `components/` cho UI dung lai
  - `theme/` cho token/style system
  - `views/` de thay bang `features/*/pages`
- Neu migrate vao frontend hotel hien tai, nen doi tu `views/*` sang `features/<domain>/pages`, `features/<domain>/components`, `api`, `types`, `store`.

## Lenh quet lai cau truc

```powershell
tree /A /F .\horizon-ui-chakra-source
```

## Tai lieu bo sung

- Giai thich React cho nguoi moi: `D:\OneDrive\DataPerson\FolderPersonalInformation\Code\HotelManagementSystem\HotelMonolith\Fe-HotelMonolith\angent\structure\react-beginner.md`
