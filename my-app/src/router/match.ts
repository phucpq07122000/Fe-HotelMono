export function isPathMatch(routePath: string, currentPath: string): boolean {
  const normalizedRoute = routePath.startsWith('/') ? routePath : `/${routePath}`
  const normalizedCurrent = currentPath.startsWith('/') ? currentPath : `/${currentPath}`
  return normalizedRoute === normalizedCurrent
}

