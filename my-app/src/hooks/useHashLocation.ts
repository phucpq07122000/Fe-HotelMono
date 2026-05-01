import { useCallback, useEffect, useState } from 'react'

function normalizeHashToPath(hash: string): string {
  const raw = (hash || '').replace(/^#/, '')
  if (!raw) return '/'
  const withSlash = raw.startsWith('/') ? raw : `/${raw}`
  const pathOnly = withSlash.split('?')[0]?.split('#')[0] ?? '/'
  return pathOnly === '' ? '/' : pathOnly
}

export function useHashLocation() {
  const [path, setPath] = useState(() => normalizeHashToPath(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setPath(normalizeHashToPath(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((nextPath: string) => {
    const normalized = nextPath.startsWith('/') ? nextPath : `/${nextPath}`
    const nextHash = `#${normalized}`
    if (window.location.hash !== nextHash) window.location.hash = nextHash
    setPath(normalized)
  }, [])

  return { path, navigate }
}
