import { startTransition, useDeferredValue, useEffect, useEffectEvent, useState } from 'react'
import { searchAvailability } from '../../api/hotel.api'
import { useAppStore } from '../../store/appStore'
import type { HotelCard, SearchFilters } from '../../types'

type AvailabilityState = {
  hotels: HotelCard[]
  loading: boolean
}

export function useAvailability() {
  const lastSearch = useAppStore((state) => state.lastSearch)
  const setLastSearch = useAppStore((state) => state.setLastSearch)
  const [filters, setFilters] = useState<SearchFilters>(lastSearch)
  const [state, setState] = useState<AvailabilityState>({ hotels: [], loading: false })
  const deferredDestination = useDeferredValue(filters.destination)

  const runSearch = useEffectEvent(async (nextFilters: SearchFilters) => {
    const hotels = await searchAvailability(nextFilters)
    startTransition(() => setState({ hotels, loading: false }))
    setLastSearch(nextFilters)
  })

  useEffect(() => {
    void runSearch({ ...filters, destination: deferredDestination })
  }, [deferredDestination, filters])

  return {
    filters,
    hotels: state.hotels,
    loading: state.loading,
    setField<K extends keyof SearchFilters>(field: K, value: SearchFilters[K]) {
      setState((current) => ({ ...current, loading: true }))
      setFilters((current) => ({ ...current, [field]: value }))
    },
  }
}
