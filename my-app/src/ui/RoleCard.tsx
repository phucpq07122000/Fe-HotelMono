export function RoleCard({
  title,
  subtitle,
  bullets,
  cta,
  onClick,
}: {
  title: string
  subtitle: string
  bullets: string[]
  cta: string
  onClick: () => void
}) {
  return (
    <button type="button" className="roleCard" onClick={onClick}>
      <div className="roleCard__head">
        <div>
          <div className="roleCard__title">{title}</div>
          <div className="roleCard__subtitle">{subtitle}</div>
        </div>
        <div className="roleCard__cta">{cta}</div>
      </div>
      <div className="roleCard__body">
        <ul className="roleCard__bullets">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </button>
  )
}

