import { ArrowUpRight, DollarSign, TrendingUp, Users } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { getAdminDashboard } from '../../api/hotel.api'
import { useAppStore } from '../../store/appStore'
import type { DashboardSnapshot, DashboardTone } from '../../types'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const toneIcons = {
  indigo: DollarSign,
  rose: TrendingUp,
  mint: ArrowUpRight,
  amber: Users,
} satisfies Record<DashboardTone, typeof DollarSign>

const toneStyles = {
  indigo: { background: 'rgba(109, 123, 255, 0.14)', color: '#5865f2' },
  rose: { background: 'rgba(255, 120, 152, 0.16)', color: '#ff6486' },
  mint: { background: 'rgba(67, 220, 176, 0.16)', color: '#0fb981' },
  amber: { background: 'rgba(255, 192, 92, 0.16)', color: '#d18a1b' },
} satisfies Record<DashboardTone, { background: string; color: string }>

export function AdminDashboardPage() {
  const activeDate = useAppStore((state) => state.activeDate)
  const [snapshot, setSnapshot] = useState<DashboardSnapshot | null>(null)

  useEffect(() => {
    void getAdminDashboard(activeDate).then(setSnapshot)
  }, [activeDate])

  if (!snapshot) {
    return (
      <section className="glassCard">
        <div className="sectionHead__title">Loading dashboard...</div>
      </section>
    )
  }

  return (
    <div className="dashboardGrid">
      <section className="dashboardMain">
        <div className="metricGrid">
          {snapshot.metrics.map((metric) => {
            const Icon = toneIcons[metric.tone]
            const toneStyle = toneStyles[metric.tone]

            return (
              <article key={metric.id} className="metricCard">
                <div className="metricCard__icon" style={toneStyle}>
                  <Icon size={18} />
                </div>
                <div className="metricCard__label">{metric.label}</div>
                <div className="metricCard__value">{metric.value}</div>
                <div className="metricCard__change">{metric.change}</div>
                <div
                  className="metricCard__ring"
                  style={
                    {
                      '--progress': `${metric.progress}%`,
                      '--ring-color': toneStyle.color,
                    } as CSSProperties
                  }
                >
                  <span>{metric.progress}%</span>
                </div>
              </article>
            )
          })}
        </div>

        <section className="glassCard">
          <div className="sectionHead">
            <div>
              <div className="sectionHead__label">Recent orders</div>
              <h3 className="sectionHead__title">Booking operations</h3>
            </div>
          </div>

          <div className="tableWrap">
            <table className="dataTable">
              <thead>
                <tr>
                  <th>Guest</th>
                  <th>Room</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th className="alignRight">Amount</th>
                </tr>
              </thead>
              <tbody>
                {snapshot.bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className="tablePrimary">{booking.guestName}</div>
                      <div className="tableSecondary">{booking.id}</div>
                    </td>
                    <td>{booking.roomLabel}</td>
                    <td>{booking.paymentStatus}</td>
                    <td>{booking.bookingStatus}</td>
                    <td className="alignRight">{currency.format(booking.amount / 25000)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      <aside className="dashboardSide">
        <section className="glassCard">
          <div className="sectionHead">
            <div>
              <div className="sectionHead__label">Recent updates</div>
              <h3 className="sectionHead__title">Guest activity</h3>
            </div>
          </div>

          <div className="activityList">
            {snapshot.activities.map((item) => (
              <div key={item.id} className="activityItem">
                <div className="activityItem__avatar">{item.guestName.slice(0, 1)}</div>
                <div>
                  <div className="activityItem__title">
                    <strong>{item.guestName}</strong> {item.note}
                  </div>
                  <div className="activityItem__time">{item.timeAgo}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glassCard">
          <div className="sectionHead">
            <div>
              <div className="sectionHead__label">Sales analytics</div>
              <h3 className="sectionHead__title">Demand pulse</h3>
            </div>
          </div>

          <div className="miniStats">
            {snapshot.load.map((item) => (
              <div key={item.id} className="miniStat">
                <div className="miniStat__head">
                  <span>{item.label}</span>
                  <strong>{item.delta}</strong>
                </div>
                <div className="miniStat__value">{item.value}</div>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </div>
  )
}
