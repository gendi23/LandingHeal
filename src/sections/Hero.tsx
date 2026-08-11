import { type CSSProperties, useEffect, useRef } from 'react'
import dashboardImage from '../assets/hero-image.svg'

const titleWords = ['Mejorá', 'la', 'rentabilidad', 'de', 'tu', 'centro', 'de', 'salud']

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const updatePerspective = () => {
      frame = 0
      const hero = heroRef.current
      const mockup = mockupRef.current
      const grid = gridRef.current
      if (!hero || !mockup || !grid) return
      if (reducedMotion) {
        mockup.style.setProperty('--hero-tilt', '0deg')
        mockup.style.setProperty('--hero-lift', '0px')
        mockup.style.setProperty('--hero-scale', '1')
        mockup.style.setProperty('--hero-shine', '1')
        grid.style.setProperty('--grid-parallax', '0px')
        return
      }
      const rect = hero.getBoundingClientRect()
      const travel = Math.max(
        Math.min(hero.offsetHeight * 0.55, window.innerHeight * 0.75),
        1,
      )
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1)
      mockup.style.setProperty('--hero-tilt', `${4 * (1 - progress)}deg`)
      mockup.style.setProperty('--hero-lift', `${Math.round(28 * (1 - progress))}px`)
      mockup.style.setProperty('--hero-scale', `${0.94 + progress * 0.06}`)
      mockup.style.setProperty('--hero-shine', `${progress}`)
      grid.style.setProperty('--grid-parallax', `${Math.round(progress * 18)}px`)
    }
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(updatePerspective) }
    updatePerspective()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero reveal" id="inicio" ref={heroRef} data-reveal data-full-dashboard="true">
      <div className="hero__grid" ref={gridRef} aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <span className="eyebrow eyebrow--light hero__badge">Transformá tus indicadores en decisiones</span>
        <h1 aria-label="Mejorá la rentabilidad de tu centro de salud">
          <span className="hero__words" aria-hidden="true">
            {titleWords.map((word, index) => (
              <span className="hero__word" key={word + index} style={{ '--word-index': index } as CSSProperties}>{word}</span>
            ))}
          </span>
        </h1>
        <p>
          Healthics es una plataforma de Business Intelligence para la gestión
          sanitaria, diseñada para integrar la información de tus sistemas y
          convertirla en indicadores estratégicos para la conducción del negocio.
        </p>
        <div className="hero__actions">
          <a className="button button--light" href="#contacto">Agendá una demo</a>
          <span>Compatible con los sistemas que ya utiliza tu institución.</span>
        </div>
      </div>
      <div className="hero__mockup hero__mockup--perspective" ref={mockupRef} data-scroll-perspective>
        <img src={dashboardImage} alt="Panel de indicadores de Healthics" width="1292" height="949" decoding="async" fetchPriority="high" />
      </div>
    </section>
  )
}

