import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

function Typewriter({
  phrases,
  typeSpeed = 45,
  deleteSpeed = 22,
  pause = 1500,
  className = '',
}) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) return

    const full = phrases[index]
    const isComplete = !deleting && text === full
    const isEmpty = deleting && text === ''

    let delay = deleting ? deleteSpeed : typeSpeed
    if (isComplete) delay = pause
    if (isEmpty) delay = 350

    const timer = setTimeout(() => {
      if (isComplete) {
        setDeleting(true)
      } else if (isEmpty) {
        setDeleting(false)
        setIndex((index + 1) % phrases.length)
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [
    text,
    deleting,
    index,
    phrases,
    typeSpeed,
    deleteSpeed,
    pause,
    reduceMotion,
  ])

  return (
    <p className={className}>
      {/* Screen readers read all the phrases once, not letter by letter */}
      <span className="sr-only">{phrases.join('. ')}</span>
      <span aria-hidden="true">{reduceMotion ? phrases[0] : text}</span>
      {!reduceMotion && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block h-[1.1em] w-0.5 translate-y-[0.2em] animate-pulse bg-primary-600 dark:bg-primary-400"
        />
      )}
    </p>
  )
}

export default Typewriter
