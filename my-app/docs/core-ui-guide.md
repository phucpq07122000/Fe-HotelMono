# Core UI guide

Core UI là lớp component cơ bản để làm giao diện nhanh, nhất quán, và dễ học React hơn. Phần này AI đã dựng sẵn trong `src/core/ui`.

## Cấu trúc

```
src/core/
  hooks/
    useDebouncedValue.ts
    useDisclosure.ts
  ui/
    Badge.tsx
    Button.tsx
    Card.tsx
    DataTable.tsx
    EmptyState.tsx
    Field.tsx
    Modal.tsx
    Page.tsx
    Tabs.tsx
    index.ts
```

## Component đã có

| Component | Dùng khi nào |
| --- | --- |
| `Button` | Nút hành động: save, search, open, cancel |
| `Badge` | Trạng thái nhỏ: Active, Pending, Confirmed |
| `Page`, `PageHeader` | Khung chuẩn cho mỗi page |
| `Card`, `CardHeader`, `CardBody`, `CardTitle` | Khối nội dung có header/body |
| `Field` | Label + input/select + hint/error |
| `DataTable` | Render bảng theo `rows` và `columns` |
| `EmptyState` | Danh sách rỗng hoặc không có kết quả |
| `Tabs` | Chuyển view trong cùng một page |
| `Modal` | Dialog nhỏ cho form/confirm/detail |

## Mở demo

Chạy app rồi mở:

```
#/core-ui
```

Demo page nằm tại:

```
src/modules/site/pages/CoreUiPage.tsx
```

## Mẫu page chuẩn

```tsx
import { Button, Card, CardBody, CardHeader, CardTitle, Field, Page, PageHeader } from '../../core/ui'

export function ExamplePage() {
  return (
    <Page>
      <PageHeader title="Example" actions={<Button variant="primary">Create</Button>} />

      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardBody className="grid grid--2">
          <Field label="Keyword" inputProps={{ placeholder: 'Search...' }} />
          <div className="row row--end">
            <Button variant="primary">Search</Button>
          </div>
        </CardBody>
      </Card>
    </Page>
  )
}
```

## Quy tắc dùng

- Page mới nên dùng `Page` + `PageHeader` trước.
- Form input nên đi qua `Field`.
- Trạng thái nên dùng `Badge`, không viết tay class `pill` trong page mới.
- Bảng CRUD nên dùng `DataTable` nếu dữ liệu render theo mảng.
- Modal state nên dùng `useDisclosure`.
- Search input nên dùng `useDebouncedValue` khi gọi API hoặc filter danh sách.

