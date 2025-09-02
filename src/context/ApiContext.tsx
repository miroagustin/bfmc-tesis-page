import { createContext, useContext, ReactNode } from 'react'

interface ApiContextType {
  fetchEvents: (date: Date) => Promise<any[]>
}

const ApiContext = createContext<ApiContextType>({
  fetchEvents: async () => []
})

export const ApiProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const apiBase = import.meta.env.VITE_API_BASE_URL as string | undefined

  const fetchEvents = async (date: Date): Promise<any[]> => {
    if (!apiBase) return []
    try {
      const res = await fetch(`${apiBase}/events?date=${date.toISOString()}`)
      if (!res.ok) throw new Error('Network response was not ok')
      return await res.json()
    } catch (err) {
      console.error('Failed to fetch events', err)
      return []
    }
  }

  return (
    <ApiContext.Provider value={{ fetchEvents }}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = () => useContext(ApiContext)
