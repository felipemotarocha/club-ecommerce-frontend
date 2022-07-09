import renderWithContext from '../../utils/test.utils'
import Header from './header.component'

describe('Header Component', () => {
  it('should show sign out button if user is authenticated', async () => {
    const { getByText } = renderWithContext(<Header />, {
      userContext: { isAuthenticated: true }
    })

    getByText('Sair')
  })

  it('should shown sign in and sign on buttons if user is not authenticated', () => {
    const { getByText } = renderWithContext(<Header />, {
      userContext: { isAuthenticated: false }
    })

    getByText(/criar conta/i)
    getByText(/login/i)
  })
})

export default {}
