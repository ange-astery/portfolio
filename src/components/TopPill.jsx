function TopPill({ children }) {
    return (
        <nav
            aria-label="Quick actions"
            className="inline-flex items-center divide-x divide-line rounded-full border border-line bg-surface/70 py-2 text-sm backdrop-blur"
        >
            {children}
        </nav>
    )
}

export default TopPill
