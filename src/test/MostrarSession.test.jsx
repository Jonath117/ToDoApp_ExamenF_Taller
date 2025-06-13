import { render, screen } from '@testing-library/react'
import MostrarSesion from '../components/SesionComp'
import { vi } from 'vitest'
import { supabase } from '../services/supabaseClient'

vi.mock('../services/supabaseClient', () => ({
  supabase: {
    auth: {
      getUser: vi.fn(),
    },
  },
}))

describe('MostrarSesion', () => {
  it('muestra "Sesión Activa" si el usuario está logueado', async () => {
    supabase.auth.getUser.mockResolvedValue({
      data: { user: { id: '123' } },
    })

    render(<MostrarSesion />)

    expect(await screen.findByText('Sesion Activa')).toBeInTheDocument()
  })

  it('muestra "Sesión Inactiva" si no hay usuario', async () => {
    supabase.auth.getUser.mockResolvedValue({
      data: { user: null },
    })

    render(<MostrarSesion />)

    expect(await screen.findByText('Sesion Inactiva')).toBeInTheDocument()
  })
})
