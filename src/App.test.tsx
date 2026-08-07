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

it('keeps the integration diagram and renders the requested contact form', () => {
  render(<App />)
  expect(screen.getByRole('img', { name: /flujo de integración/i })).toBeInTheDocument()
  expect(screen.getByRole('form', { name: /solicitud de demo/i })).toBeInTheDocument()
  expect(screen.getByLabelText(/nombre y apellido/i)).toBeRequired()
  expect(screen.getByLabelText(/institución/i)).toBeRequired()
  expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')
  expect(screen.getByLabelText(/teléfono/i)).toHaveAttribute('type', 'tel')
})

it('uses the shared vector brand in the footer', () => {
  render(<App />)
  expect(screen.getByRole('contentinfo').querySelector('.brand__logo')).toBeInTheDocument()
})
