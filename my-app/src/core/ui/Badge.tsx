import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from './cx'

type BadgeTone = 'gray' | 'blue' | 'green' | 'red' | 'yellow'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone
  children: ReactNode
}

export function Badge({ tone = 'gray', className, children, ...props }: BadgeProps) {
  return (
    <span {...props} className={cx('pill', `pill--${tone}`, className)}>
      {children}
    </span>
  )
}

