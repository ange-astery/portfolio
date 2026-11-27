import { useEffect, useState } from 'react'
import { profile } from '../content/profile'

function getTime() {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: profile.timeZone,
  }).format(new Date())
}

function DijonClock() {
  const [time, setTime] = useState(getTime)

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="flex items-center gap-2 px-4 text-muted tabular-nums">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-secondary-500"
      />
      {profile.city} {time}
    </span>
  )
}

export default DijonClock
