import type { ReactNode } from 'react'

type EmptyStateProps = {
  title: string
  description?: string
  action?: ReactNode
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="emptyState">
      <div className="emptyState__box" />
      <div className="emptyState__title">{title}</div>
      {description && <div className="emptyState__sub">{description}</div>}
      {action}
    </div>
  )
}

