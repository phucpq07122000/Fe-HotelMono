import { useMemo, useState } from 'react'
import { Badge, Button, Card, CardBody, CardHeader, CardTitle, DataTable, EmptyState, Field, MiniCard, Modal, Page, PageHeader, Tabs } from '../../../core/ui'
import { useDebouncedValue, useDisclosure } from '../../../core/hooks'

type DemoBooking = {
  id: string
  code: string
  guest: string
  status: 'Pending' | 'Confirmed'
}

const demoRows: DemoBooking[] = [
  { id: '1', code: 'BK-0001', guest: 'Nguyen Van A', status: 'Confirmed' },
  { id: '2', code: 'BK-0002', guest: 'Tran Thi B', status: 'Pending' },
]

export function CoreUiPage() {
  const modal = useDisclosure()
  const [tab, setTab] = useState('form')
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebouncedValue(keyword, 250)

  const filteredRows = useMemo(() => {
    const normalized = debouncedKeyword.trim().toLowerCase()
    if (!normalized) return demoRows
    return demoRows.filter((row) => row.code.toLowerCase().includes(normalized) || row.guest.toLowerCase().includes(normalized))
  }, [debouncedKeyword])

  return (
    <Page>
      <PageHeader title="Core UI" actions={<Button onClick={modal.show}>Open modal</Button>} />

      <Card>
        <CardHeader>
          <CardTitle>Controls</CardTitle>
        </CardHeader>
        <CardBody className="grid">
          <Tabs
            value={tab}
            onChange={setTab}
            items={[
              { value: 'form', label: 'Form' },
              { value: 'table', label: 'Table' },
              { value: 'empty', label: 'Empty' },
            ]}
          />

          {tab === 'form' && (
            <div className="grid grid--2">
              <Field label="Customer" inputProps={{ value: keyword, onChange: (event) => setKeyword(event.target.value), placeholder: 'Search booking' }} />
              <Field label="Status">
                <select className="field__input" defaultValue="confirmed">
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                </select>
              </Field>
              <MiniCard>
                <div className="miniCard__title">Reusable card</div>
                <div className="miniCard__sub">Dung cho item lap lai, dashboard tile, hoac summary nho.</div>
                <div className="miniCard__foot">
                  <Badge tone="blue">Demo</Badge>
                </div>
              </MiniCard>
            </div>
          )}

          {tab === 'table' && (
            <DataTable
              rows={filteredRows}
              getRowKey={(row) => row.id}
              empty={<EmptyState title="No bookings" description="Change keyword and try again." />}
              columns={[
                { key: 'code', header: 'Code', cell: (row) => row.code },
                { key: 'guest', header: 'Guest', cell: (row) => row.guest },
                {
                  key: 'status',
                  header: 'Status',
                  cell: (row) => <Badge tone={row.status === 'Confirmed' ? 'blue' : 'gray'}>{row.status}</Badge>,
                },
                { key: 'action', header: '', align: 'right', cell: () => <Button size="tiny">Open</Button> },
              ]}
            />
          )}

          {tab === 'empty' && <EmptyState title="No result" description="Day la mau empty state dung cho danh sach rong." action={<Button size="small">Create item</Button>} />}
        </CardBody>
      </Card>

      <Modal
        open={modal.open}
        title="Core modal"
        onClose={modal.hide}
        footer={
          <>
            <Button size="small" onClick={modal.hide}>
              Cancel
            </Button>
            <Button size="small" variant="primary" onClick={modal.hide}>
              Save
            </Button>
          </>
        }
      >
        Modal dung cho form nhanh, confirm action, hoac detail nho.
      </Modal>
    </Page>
  )
}

