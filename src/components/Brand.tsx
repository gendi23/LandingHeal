type BrandProps = { inverse?: boolean; linked?: boolean }

export function BrandLogo() {
  return (
    <svg
      className="brand__logo"
      viewBox="0 0 32 32"
      role="img"
      aria-label="Healthics"
    >
      <rect width="32" height="32" rx="3" fill="currentColor" />
      <path
        d="M8 7v18M16 12v8M24 7v18"
        stroke="var(--brand-logo-bars)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Brand({ inverse = false, linked = true }: BrandProps) {
  const content = (
    <>
      <BrandLogo />
      <strong>Healthics</strong>
    </>
  )
  const className = 'brand' + (inverse ? ' brand--inverse' : '')
  if (!linked) return <span className={className}>{content}</span>
  return (
    <a className={className} href="#inicio" aria-label="Healthics - inicio">
      {content}
    </a>
  )
}
