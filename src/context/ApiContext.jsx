import { createContext, useContext } from 'react'

const ApiContext = createContext({ fetchEvents: async () => [] })

export const ApiProvider = ({ children }) => {
  const apiBase = import.meta.env.VITE_API_BASE_URL

  const fetchEvents = async (date) => {
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
