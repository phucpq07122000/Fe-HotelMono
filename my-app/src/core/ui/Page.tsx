import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from './cx'

type PageProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Page({ className, children, ...props }: PageProps) {
  return (
    <div {...props} className={cx('page', className)}>
      {children}
    </div>
  )
}

export function PageHeader(props: { title: string; actions?: ReactNode }) {
  return (
    <header className="page__head">
      <h1 className="page__title">{props.title}</h1>
      {props.actions && <div className="page__actions">{props.actions}</div>}
    </header>
  )
}

