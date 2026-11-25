import ThemeToggle from './ThemeToggle'
import avatar from '../assets/avatar.webp'
import Avatar from './Avatar'
import Status from './Status'
import TopPill from './TopPill'
import Dock from './Dock.jsx'

function Hero() {
  const name = 'Ange Orelien'
  const year = new Date().getFullYear()

  return (
    <section className="flex min-h-screen flex-col items-center px-6 py-6">
      <TopPill>
        <ThemeToggle />
        <span className="px-4 text-muted">play</span>
        <span className="px-4 text-muted">about</span>
      </TopPill>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
        <Avatar src={avatar} alt={`Portrait of ${name}`} size={112} />

        <p className="text-lg text-muted">{name}</p>

        <h1 className="max-w-3xl text-5xl leading-tight font-medium tracking-tight text-balance text-fg sm:text-6xl md:text-7xl">
          Full-stack developer{' '}
          <span className="text-primary-700 dark:text-primary-400">&</span>{' '}
          builder
        </h1>

        <Status />
        <Dock />
      </div>

      <p className="text-sm text-muted">
        © {year} {name}
      </p>
    </section>
  )
}

export default Hero
