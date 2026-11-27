import avatar from '../assets/avatar.webp'
import Avatar from './Avatar'
import CopyEmail from './CopyEmail'
import DijonClock from './DijonClock'
import Dock from './Dock'
import Status from './Status'
import ThemeToggle from './ThemeToggle'
import TopPill from './TopPill'
import Typewriter from './Typewriter'
import { profile } from '../content/profile'
import { typingPhrases } from '../content/typing'

function Hero() {
  const { name } = profile
  const year = new Date().getFullYear()

  return (
    <section className="flex min-h-screen flex-col items-center px-6 py-6">
      <TopPill>
        <ThemeToggle />
        <span className="hidden sm:inline-flex">
          <DijonClock />
        </span>
        <span className="px-4 text-muted">play</span>
        <span className="px-4 text-muted">about</span>
        {profile.cv && (
          <a
            href={profile.cv}
            download
            className="hidden px-4 text-muted transition-colors hover:text-fg sm:inline"
          >
            CV
          </a>
        )}
        {profile.email && <CopyEmail email={profile.email} />}
      </TopPill>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
        <Avatar src={avatar} alt={`Portrait of ${name}`} size={112} />

        <p className="text-lg text-muted">{name}</p>

        <h1 className="max-w-3xl text-5xl leading-tight font-medium tracking-tight text-balance text-fg sm:text-6xl md:text-7xl">
          Full-stack developer{' '}
          <span className="text-primary-700 dark:text-primary-400">&</span>{' '}
          builder
        </h1>

        <Typewriter
          phrases={typingPhrases}
          className="min-h-14 max-w-xl text-lg text-muted sm:min-h-8"
        />

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
