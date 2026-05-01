# React core learning path

Tài liệu này là checklist những phần một FE React developer bắt buộc phải biết. Học theo thứ tự dưới đây, vừa đọc vừa mở code trong repo.

## 1. Component và JSX

Biết cách tách UI thành component nhỏ.

Ví dụ trong repo:

- `src/core/ui/Button.tsx`
- `src/core/ui/Page.tsx`
- `src/modules/site/pages/CoreUiPage.tsx`

Cần nắm:

- Component là function trả về JSX.
- Tên component viết hoa.
- JSX chỉ trả về một root node.
- Dùng `className`, không dùng `class`.

## 2. Props và children

Props là dữ liệu truyền từ cha xuống con. `children` là phần JSX nằm giữa thẻ mở và thẻ đóng.

Ví dụ:

```tsx
<Button variant="primary">Save</Button>
<CardBody className="grid grid--2">...</CardBody>
```

Cần nắm:

- Props nên có type rõ bằng TypeScript.
- Component UI nên nhận `className` để mở rộng khi cần.
- Không sửa props trực tiếp trong component con.

## 3. State với `useState`

State là dữ liệu thay đổi làm UI render lại.

Ví dụ:

```tsx
const [keyword, setKeyword] = useState('')
```

Cần nắm:

- State update là async theo render cycle.
- Khi state mới phụ thuộc state cũ, dùng callback: `setOpen((current) => !current)`.
- Không mutate object/array trong state, hãy tạo object/array mới.

## 4. Event handling

React dùng event handler như `onClick`, `onChange`, `onSubmit`.

Ví dụ:

```tsx
<input value={keyword} onChange={(event) => setKeyword(event.target.value)} />
```

Cần nắm:

- Form submit nên `event.preventDefault()`.
- Button trong form nên có `type="button"` nếu không submit.
- Không gọi function ngay trong JSX nếu function đó làm side effect: dùng `onClick={() => save()}`.

## 5. Conditional rendering và list rendering

Dùng điều kiện để render UI khác nhau, dùng `map` để render list.

Ví dụ:

- `Tabs` trong `src/core/ui/Tabs.tsx`
- `DataTable` trong `src/core/ui/DataTable.tsx`

Cần nắm:

- List item phải có `key` ổn định.
- Không dùng index làm key nếu list có thể thêm/xóa/sắp xếp.
- Empty state phải rõ ràng khi mảng rỗng.

## 6. Controlled form

Input controlled là input có `value` lấy từ state và update qua `onChange`.

Cần nắm:

- Search, filter, form create/update nên dùng controlled input.
- Khi form lớn, gom state thành object hoặc dùng form library sau.
- Validate ở UI trước, nhưng backend vẫn phải validate lại.

## 7. `useEffect`

`useEffect` dùng cho side effect: sync URL, gọi API, timer, subscribe event.

Ví dụ:

- `src/hooks/useHashLocation.ts`
- `src/core/hooks/useDebouncedValue.ts`

Cần nắm:

- Dependency array phải đúng.
- Cleanup event/timer trong return function.
- Không dùng `useEffect` để tính dữ liệu có thể tính trực tiếp trong render.

## 8. Custom hook

Custom hook gom logic dùng lại.

Ví dụ:

- `useDisclosure`: quản lý open/close modal.
- `useDebouncedValue`: trì hoãn value khi search.
- `useHashLocation`: sync hash URL với state.

Cần nắm:

- Hook phải bắt đầu bằng `use`.
- Hook không được gọi trong if/loop.
- Hook nên trả về API nhỏ, dễ dùng.

## 9. Context

Context dùng cho state cấp app như auth, theme, locale.

Ví dụ:

- `src/modules/auth/useAuth.tsx`

Cần nắm:

- Context không thay thế toàn bộ state management.
- Value của context nên memo nếu có object/function.
- Không nhét mọi thứ vào một context lớn.

## 10. Routing

Repo đang dùng hash routing tự viết để dễ học.

Ví dụ:

- `src/App.tsx`
- `src/modules/admin/routes.ts`
- `src/modules/site/routes.ts`

Cần nắm:

- Route là mapping giữa `path` và component.
- Lazy route giúp chia nhỏ bundle.
- Route cần auth phải redirect sang login.

## 11. API state

Khi gọi API thật, mỗi request nên có 3 state:

- `data`
- `loading`
- `error`

Pattern tối thiểu:

```tsx
const [data, setData] = useState<Item[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
```

Cần nắm:

- Hiển thị loading rõ ràng.
- Error phải render được, không chỉ `console.log`.
- Cancel hoặc ignore response cũ khi user đổi filter nhanh.

## 12. TypeScript trong React

Cần nắm các type hay dùng:

- `ReactNode`: nội dung render được.
- `ButtonHTMLAttributes<HTMLButtonElement>`: kế thừa props button gốc.
- Generic component: ví dụ `DataTable<Row>`.
- Union type: ví dụ `variant: 'default' | 'primary'`.

## Bài tập làm theo

1. Mở `#/core-ui` và đọc code `CoreUiPage.tsx`.
2. Tạo một page mới `RoomPage.tsx` trong `src/modules/admin/pages`.
3. Dùng `Page`, `PageHeader`, `Card`, `Field`, `DataTable`.
4. Đăng ký route `/admin/room` trong `src/modules/admin/routes.ts`.
5. Thêm `requiresAuth: true`.
6. Chạy build để kiểm tra type.

