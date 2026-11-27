import { useEffect, useState } from 'react'
import { Check, Mail } from 'lucide-react'

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(id)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className="flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors hover:text-fg"
    >
      {copied ? <Check size={16} /> : <Mail size={16} />}
      <span aria-live="polite">{copied ? 'Copied' : 'Email'}</span>
    </button>
  )
}

export default CopyEmail
