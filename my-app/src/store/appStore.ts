import { create } from 'zustand'
import type { SearchFilters } from '../types'

type ThemeMode = 'soft' | 'midnight'

type AppStore = {
  theme: ThemeMode
  activeDate: string
  lastSearch: SearchFilters
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
  setActiveDate: (value: string) => void
  setLastSearch: (value: SearchFilters) => void
}

const today = new Date().toISOString().slice(0, 10)

export const useAppStore = create<AppStore>((set) => ({
  theme: 'soft',
  activeDate: today,
  lastSearch: {
    destination: '',
    checkIn: today,
    checkOut: today,
    guests: 2,
    rooms: 1,
  },
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'soft' ? 'midnight' : 'soft' })),
  setActiveDate: (value) => set({ activeDate: value }),
  setLastSearch: (value) => set({ lastSearch: value }),
}))
