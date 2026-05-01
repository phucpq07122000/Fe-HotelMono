import type { ReactNode } from 'react'
import { Icon } from './Icon'

export function Phone({
  title,
  subtitle,
  onBack,
  children,
  footer,
}: {
  title: string
  subtitle?: string
  onBack?: () => void
  children: ReactNode
  footer?: ReactNode
}) {
  return (
    <div className="phoneStage">
      <div className="phone" role="application" aria-label={title}>
        <div className="phoneTop">
          <button
            type="button"
            className={`iconBtn ${onBack ? '' : 'iconBtn--ghost'}`}
            onClick={onBack}
            aria-label="Back"
            disabled={!onBack}
          >
            <Icon name="back" />
          </button>
          <div className="phoneTop__title">
            <div className="phoneTop__name">{title}</div>
            {subtitle ? <div className="phoneTop__sub">{subtitle}</div> : null}
          </div>
          <div className="phoneTop__mark" aria-hidden="true">
            HotelO
          </div>
        </div>

        <div className="phoneBody">{children}</div>
        {footer ? <div className="phoneFooter">{footer}</div> : null}
      </div>
    </div>
  )
}

