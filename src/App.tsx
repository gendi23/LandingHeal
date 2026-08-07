import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Benefits } from './sections/Benefits'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Integration } from './sections/Integration'

export default function App() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )
    const reducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('is-visible', 'has-entered'),
      )
      return
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
          if (entry.isIntersecting) entry.target.classList.add('has-entered')
        }),
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="reveal" data-reveal>
          <Benefits />
        </div>
        <div className="reveal" data-reveal>
          <Integration />
        </div>
        <div className="reveal" data-reveal>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}


