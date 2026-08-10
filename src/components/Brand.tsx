import healthicsLogo from '../assets/healthics-logo.svg'

type BrandProps = { inverse?: boolean; linked?: boolean }

export function BrandLogo() {
  return (
    <img
      className="brand__logo"
      src={healthicsLogo}
      alt="Healthics"
      width="700"
      height="164"
    />
  )
}

export function Brand({ inverse = false, linked = true }: BrandProps) {
  const className = 'brand' + (inverse ? ' brand--inverse' : '')
  const content = <BrandLogo />

  if (!linked) return <span className={className}>{content}</span>

  return (
    <a className={className} href="#inicio" aria-label="Healthics - inicio">
      {content}
    </a>
  )
}