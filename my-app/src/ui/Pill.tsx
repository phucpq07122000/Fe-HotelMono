import type { ReactNode } from 'react'

export function Pill({
  tone,
  children,
}: {
  tone: 'gray' | 'green' | 'blue' | 'red'
  children: ReactNode
}) {
  return <span className={`pill pill--${tone}`}>{children}</span>
}

