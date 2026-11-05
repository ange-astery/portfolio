function Avatar({ src, alt, initials = 'AO', size = 96 }) {
    const box = { width: size, height: size }

    if (!src) {
        return (
            <div
                style={box}
                aria-hidden="true"
                className="flex items-center justify-center rounded-full border border-line bg-surface font-semibold text-primary-700 dark:text-primary-400"
            >
                {initials}
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            style={box}
            className="rounded-full border border-line object-cover"
        />
    )
}

export default Avatar