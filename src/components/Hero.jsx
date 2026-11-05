import Status from './Status'

function Hero() {
  const name = 'Ange Orélien'
  const year = new Date().getFullYear()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div
        aria-hidden="true"
        className="flex h-24 w-24 items-center justify-center rounded-full border border-line bg-surface text-2xl font-semibold text-primary-700 dark:text-primary-400"
      >
        AO
      </div>

      <p className="text-lg text-muted">{name}</p>

      <h1 className="max-w-3xl text-5xl leading-tight font-medium tracking-tight text-fg sm:text-6xl md:text-7xl">
        Full-stack developer{' '}
        <span className="text-primary-700 dark:text-primary-400">&</span>{' '}
        builder
      </h1>

      <Status />

      <p className="absolute bottom-6 text-sm text-muted">
        © {year} {name}
      </p>
    </section>
  )
}

export default Hero
