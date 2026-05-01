import type { ReactNode } from 'react'

export type DataTableColumn<Row> = {
  key: string
  header: ReactNode
  cell: (row: Row) => ReactNode
  align?: 'left' | 'right'
}

type DataTableProps<Row> = {
  rows: Row[]
  columns: DataTableColumn<Row>[]
  getRowKey: (row: Row) => string
  empty?: ReactNode
}

export function DataTable<Row>({ rows, columns, getRowKey, empty }: DataTableProps<Row>) {
  if (rows.length === 0) return <>{empty ?? null}</>

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className={column.align === 'right' ? 'table__actions' : undefined}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={getRowKey(row)}>
            {columns.map((column) => (
              <td key={column.key} className={column.align === 'right' ? 'table__actions' : undefined}>
                {column.cell(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

