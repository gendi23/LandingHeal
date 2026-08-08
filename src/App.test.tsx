import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import App from './App'

afterEach(cleanup)

it('keeps the Figma navigation labels and responsive menu behavior', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: 'Indicadores' })).toHaveAttribute('href', '#integraciones')
  const menu = screen.getByRole('button', { name: /abrir menú/i })
  fireEvent.click(menu)
  expect(menu).toHaveAttribute('aria-expanded', 'true')
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(menu).toHaveAttribute('aria-expanded', 'false')
})

it('preserves the exact Figma hero content and dashboard asset', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: /mejorá la rentabilidad de tu centro de salud/i })).toBeInTheDocument()
  expect(screen.getByText(/business intelligence para la gestión sanitaria/i)).toBeInTheDocument()
  expect(screen.getByText(/compatible con los sistemas que ya utiliza tu institución/i)).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /panel de indicadores/i })).toBeInTheDocument()
})

it('keeps the integration diagram and renders the demo CTA with its doctor visual', () => {
  render(<App />)
  expect(screen.getByRole('img', { name: /flujo de integración/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 2, name: /coordinemos una demo/i })).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /agendá una demo/i }).some((link) => link.getAttribute('href') === '#agendar')).toBe(true)
  expect(screen.getByText(/beneficio exclusivo durante el evento/i)).toBeInTheDocument()
  expect(screen.getByRole('img', { name: /profesional médico/i })).toHaveClass('contact__doctor')
})

it('normalizes every animated integration pulse to its own path', () => {
  render(<App />)
  const pulses = document.querySelectorAll('.integration-path--flow')
  expect(pulses).toHaveLength(6)
  expect(document.querySelector('.integration-diagram__lines')).toHaveAttribute('preserveAspectRatio', 'none')
  pulses.forEach((pulse) => expect(pulse).toHaveAttribute('pathLength', '1'))
})
it('initializes the dashboard as a lowered perspective surface', () => {
  render(<App />)
  const mockup = document.querySelector<HTMLElement>('[data-scroll-perspective]')
  expect(mockup).not.toBeNull()
  expect(mockup?.closest('.hero')).toHaveAttribute('data-full-dashboard', 'true')
  expect(mockup?.style.getPropertyValue('--hero-tilt')).toBe('11deg')
  expect(mockup?.style.getPropertyValue('--hero-lift')).toBe('44px')
  expect(mockup?.style.getPropertyValue('--hero-scale')).toBe('0.96')
})
it('uses the shared vector brand in the footer', () => {
  render(<App />)
  expect(screen.getByRole('contentinfo').querySelector('.brand__logo')).toBeInTheDocument()
})
