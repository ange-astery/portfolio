import DockItem from './DockItem'
import { dockLinks, dockPages } from '../content/dock'

function Dock() {
  return (
    <nav
      aria-label="Main"
      className="inline-flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-line bg-surface/70 p-3 shadow-lg backdrop-blur"
    >
      {dockPages.map((item) => (
        <DockItem key={item.id} {...item} />
      ))}

      <span aria-hidden="true" className="mx-1 h-10 w-px bg-line" />

      {dockLinks.map((item) => (
        <DockItem key={item.id} {...item} />
      ))}
    </nav>
  )
}

export default Dock
