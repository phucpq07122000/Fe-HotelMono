import axios from 'axios'

const AUTH_STORAGE_KEY = 'hotelmonolith.auth.session'

export const http = axios.create({
  baseURL: '/api',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) return config
    const session = JSON.parse(raw) as { token?: string }
    if (session.token) config.headers.Authorization = `Bearer ${session.token}`
  } catch {
    // Keep the client safe for local-first demo mode.
  }
  return config
})

http.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error),
)

export async function mockRequest<T>(data: T, delayMs = 220): Promise<T> {
  await new Promise((resolve) => window.setTimeout(resolve, delayMs))
  return data
}
