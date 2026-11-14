function DockItem({ label, initials, icon, tone = 'bg-primary-600', href }) {
  const className = `flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${tone}`

  const content = icon ? (
    <img src={icon} alt="" className="h-full w-full object-cover" />
  ) : (
    initials
  )

  if (href) {
    const isWeb = href.startsWith('http')
    return (
      <a
        href={href}
        aria-label={label}
        title={label}
        className={className}
        {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={className}
    >
      {content}
    </button>
  )
}

export default DockItem
