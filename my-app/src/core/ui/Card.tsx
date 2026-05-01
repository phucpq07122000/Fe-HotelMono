import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from './cx'

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <section {...props} className={cx('card', className)}>
      {children}
    </section>
  )
}

export function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <div {...props} className={cx('card__head', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div {...props} className={cx('card__title', className)}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: CardProps) {
  return (
    <div {...props} className={cx('card__body', className)}>
      {children}
    </div>
  )
}

export function MiniCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div {...props} className={cx('miniCard', className)}>
      {children}
    </div>
  )
}

