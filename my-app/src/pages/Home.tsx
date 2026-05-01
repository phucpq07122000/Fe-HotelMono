import { RoleCard } from '../ui/RoleCard'

export function HomePage({
  onGoStore,
  onGoAdmin,
}: {
  onGoStore: () => void
  onGoAdmin: () => void
}) {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__title">Hotel Management UI</div>
        <div className="home__sub">
          Chia 2 khu: <b>Store</b> (hien thi san pham khach san) va <b>Admin</b>{' '}
          (quan ly booking).
        </div>
      </div>

      <div className="home__grid">
        <RoleCard
          title="Store"
          subtitle="Giao dien khach hang"
          bullets={['Danh sach phong/dich vu', 'Tim kiem + filter', 'Card san pham + gia']}
          cta="Mo Store"
          onClick={onGoStore}
        />
        <RoleCard
          title="Admin"
          subtitle="Giao dien quan tri"
          bullets={['Dashboard KPI', 'Booking list + status pill', 'Khu quan ly products']}
          cta="Mo Admin"
          onClick={onGoAdmin}
        />
      </div>

      <div className="home__note">
        UI nay dang follow style trong mau ban gui (nen xanh, man hinh mobile). Muon them man nao nua thi noi tui.
      </div>
    </div>
  )
}

