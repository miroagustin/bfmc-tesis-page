import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useApi } from '../context/ApiContext'

const CalendarPage = () => {
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState([])
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
      <Calendar onChange={setDate} value={date} />
      <ul className="mt-3">
        {events.map((ev, idx) => (
          <li key={idx}>{ev.title || JSON.stringify(ev)}</li>
        ))}
      </ul>
    </div>
  )
}

export default CalendarPage
