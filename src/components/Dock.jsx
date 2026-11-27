import { useMotionValue, useReducedMotion } from 'motion/react'
import DockItem from './DockItem'
import { dockLinks, dockPages } from '../content/dock'

function Dock() {
  // Horizontal position of the pointer. Infinity = pointer is not over the dock.
  const mouseX = useMotionValue(Infinity)
  const reduceMotion = useReducedMotion()

  return (
    <nav
      aria-label="Main"
      onMouseMove={(event) => {
        if (!reduceMotion) mouseX.set(event.clientX)
      }}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="inline-flex flex-wrap items-end justify-center gap-3 rounded-3xl border border-line bg-surface/70 p-3 shadow-lg backdrop-blur sm:h-20 sm:flex-nowrap"
    >
      {dockPages.map((item) => (
        <DockItem key={item.id} mouseX={mouseX} {...item} />
      ))}

      <span aria-hidden="true" className="mx-1 h-10 w-px self-center bg-line" />

      {dockLinks.map((item) => (
        <DockItem key={item.id} mouseX={mouseX} {...item} />
      ))}
    </nav>
  )
}

export default Dock
