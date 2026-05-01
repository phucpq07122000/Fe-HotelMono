export function Icon({ name }: { name: 'back' | 'search' | 'home' | 'bag' | 'calendar' | 'user' }) {
  // Simple inline icons to avoid extra deps/assets.
  if (name === 'back') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.7 5.3a1 1 0 0 1 0 1.4L10.41 11H20a1 1 0 1 1 0 2h-9.59l4.3 4.29a1 1 0 1 1-1.42 1.42l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.41.01Z"
        />
      </svg>
    )
  }
  if (name === 'search') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10 4a6 6 0 1 0 3.6 10.8l4.3 4.3a1 1 0 0 0 1.4-1.4l-4.3-4.3A6 6 0 0 0 10 4Zm0 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"
        />
      </svg>
    )
  }
  if (name === 'home') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3.2a1 1 0 0 1 .66.25l8 7a1 1 0 1 1-1.32 1.5L19 11.4V20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5h-2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8.6l-.34.29a1 1 0 1 1-1.32-1.5l8-7A1 1 0 0 1 12 3.2Z"
        />
      </svg>
    )
  }
  if (name === 'bag') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 7V6a5 5 0 0 1 10 0v1h2a1 1 0 0 1 1 1l-1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 8a1 1 0 0 1 1-1h2Zm2 0h6V6a3 3 0 0 0-6 0v1Z"
        />
      </svg>
    )
  }
  if (name === 'calendar') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm12 8H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9Z"
        />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0 2c-4 0-8 2-8 5a1 1 0 0 0 2 0c0-1.8 2.9-3 6-3s6 1.2 6 3a1 1 0 0 0 2 0c0-3-4-5-8-5Z"
      />
    </svg>
  )
}

