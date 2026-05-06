export function ProtectedRoute(props: {
  allowed: boolean
  fallback?: React.ReactNode
  children: React.ReactNode
}) {
  if (!props.allowed) return <>{props.fallback ?? null}</>
  return <>{props.children}</>
}
