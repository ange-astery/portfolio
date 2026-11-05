import Avatar from './Avatar'
import Status from './Status'
import TopPill from './TopPill'

function Hero() {
    const name = 'Ange Orélien'
    const year = new Date().getFullYear()

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
            <div className="absolute top-6">
                <TopPill>
                    <span className="px-4">theme</span>
                    <span className="px-4">play</span>
                    <a href="#about" className="px-4">
                        about
                    </a>
                </TopPill>
            </div>

            <Avatar alt={`Portrait of ${name}`} size={112} />

            <p className="text-lg text-muted">{name}</p>

            <h1 className="max-w-3xl text-5xl leading-tight font-medium tracking-tight text-balance text-fg sm:text-6xl md:text-7xl">
                Full-stack developer{' '}
                <span className="text-primary-700 dark:text-primary-400">&</span> builder
            </h1>

            <Status />

            <p className="absolute bottom-6 text-sm text-muted">
                © {year} {name}
            </p>
        </section>
    )
}

export default Hero
