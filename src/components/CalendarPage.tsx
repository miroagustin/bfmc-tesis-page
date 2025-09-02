import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useApi } from '../context/ApiContext'

interface Event {
  title?: string
  [key: string]: unknown
}

const CalendarPage = (): JSX.Element => {
  const [date, setDate] = useState<Date>(new Date())
  const [events, setEvents] = useState<Event[]>([])
  const { fetchEvents } = useApi()

  useEffect(() => {
    const load = async () => {
      const data = await fetchEvents(date)
      setEvents(data)
    }
    load()
  }, [date, fetchEvents])

  return (
    <div>
      <Calendar onChange={(value) => setDate(value as Date)} value={date} />
      <ul className="mt-3">
        {events.map((ev, idx) => (
          <li key={idx}>{ev.title || JSON.stringify(ev)}</li>
        ))}
      </ul>
    </div>
  )
}

export default CalendarPage
