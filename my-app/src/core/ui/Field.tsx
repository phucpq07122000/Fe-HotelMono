import type { InputHTMLAttributes, ReactNode } from 'react'
import { cx } from './cx'

type FieldProps = {
  label: string
  hint?: ReactNode
  error?: ReactNode
  children?: ReactNode
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export function Field({ label, hint, error, children, inputProps }: FieldProps) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {children ?? <input {...inputProps} className={cx('field__input', inputProps?.className)} />}
      {hint && !error && <span className="field__hint">{hint}</span>}
      {error && <span className="field__error">{error}</span>}
    </label>
  )
}

