import { useRef } from 'react'
import { motion, useSpring, useTransform } from 'motion/react'

const BASE_SIZE = 56 // px, icon size when the pointer is far away
const MAX_SIZE = 88 // px, icon size right under the pointer
const REACH = 140 // px, distance at which the effect fades out

function DockItem({
  label,
  initials,
  icon,
  tone = 'bg-primary-600',
  href,
  mouseX,
}) {
  const ref = useRef(null)

  // Distance between the pointer and the center of this icon
  const distance = useTransform(mouseX, (x) => {
    const box = ref.current?.getBoundingClientRect()
    return box ? x - (box.x + box.width / 2) : Infinity
  })

  // Close = big, far = small, then a spring makes the movement smooth
  const target = useTransform(
    distance,
    [-REACH, 0, REACH],
    [BASE_SIZE, MAX_SIZE, BASE_SIZE],
  )
  const size = useSpring(target, { mass: 0.1, stiffness: 170, damping: 14 })

  const className = `flex h-full w-full items-center justify-center overflow-hidden rounded-2xl text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${tone}`

  const content = icon ? (
    <img src={icon} alt="" className="h-full w-full object-cover" />
  ) : (
    initials
  )

  const isWeb = href?.startsWith('http')

  const element = href ? (
    <a
      href={href}
      aria-label={label}
      className={className}
      {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  ) : (
    <button type="button" aria-label={label} className={className}>
      {content}
    </button>
  )

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="group relative shrink-0"
    >
      {element}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-full bg-fg px-3 py-1 text-xs font-medium whitespace-nowrap text-bg opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100"
      >
        {label}
      </span>
    </motion.div>
  )
}

export default DockItem
