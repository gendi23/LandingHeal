import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Brand } from './Brand'

const navItems = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#integraciones', label: 'Integraciones' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeId, setActiveId] = useState('inicio')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const nextScrollY = window.scrollY
      const delta = nextScrollY - lastScrollYRef.current

      setScrolled(nextScrollY > 24)
      if (nextScrollY <= 24) {
        setHidden(false)
        lastScrollYRef.current = nextScrollY
        return
      }
      if (Math.abs(delta) < 6) return

      setHidden(delta > 0)
      lastScrollYRef.current = nextScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['inicio', ...navItems.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-30% 0px -55%', threshold: [0.1, 0.35, 0.6] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      requestAnimationFrame(() => menuButtonRef.current?.focus())
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header
      className={
        'header' +
        (scrolled ? ' header--scrolled' : '') +
        (hidden && !open ? ' header--hidden' : '')
      }
    >
      <div className="container header__inner">
        <Brand />
        <button
          ref={menuButtonRef}
          className="header__menu"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          className={'header__nav' + (open ? ' is-open' : '')}
          aria-label="Navegación principal"
        >
          {navItems.map((item, index) => (
            <a
              ref={index === 0 ? firstLinkRef : undefined}
              key={item.href}
              href={item.href}
              className={activeId === item.href.slice(1) ? 'is-active' : ''}
              aria-current={
                activeId === item.href.slice(1) ? 'location' : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button--primary header__mobile-cta"
            href="#contacto"
            onClick={() => setOpen(false)}
          >
            Agendá una demo
          </a>
        </nav>
        <a className="button button--primary header__cta" href="#contacto">
          Agendá una demo
        </a>
      </div>
    </header>
  )
}

