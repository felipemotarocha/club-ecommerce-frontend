import { renderWithRedux } from '../../helpers/test.helpers'
import CartProduct from '../../types/cart.types'
import Header from './header.component'

describe('Header', () => {
  it('should show sign out button if user is authenticated', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: true } } as any
    })

    getByText('Sair')
  })

  it('should show sign in and sign up button if user is not authenticated', () => {
    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: { userReducer: { isAuthenticated: false } } as any
    })

    getByText(/login/i)
    getByText(/criar conta/i)
  })

  it('should show correct cart products count', () => {
    const products: CartProduct[] = [
      {
        id: '1',
        imageUrl: 'image_url',
        name: 'Boné',
        price: 100,
        quantity: 10
      },
      {
        id: '2',
        imageUrl: 'image_url',
        name: 'Jaqueta',
        price: 100,
        quantity: 12
      }
    ]

    const { getByText } = renderWithRedux(<Header />, {
      preloadedState: {
        cartReducer: {
          products
        }
      } as any
    })

    getByText('22')
  })
})
