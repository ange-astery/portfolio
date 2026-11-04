import Status from './Status'

function Hero() {
    const name = 'Ange Orélien'
    const year = new Date().getFullYear()

    return (
        <section>
            <p>{name}</p>
            <h1>Full-stack developer & builder</h1>
            <Status />
            <p>© {year} {name}</p>
        </section>
    )
}

export default Hero