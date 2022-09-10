import { renderWithRedux } from '../../helpers/test.helpers'
import Cart from './cart.component'

describe('Cart', () => {
  it('should show correct cart products', () => {
    const { getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: '1',
              imageUrl: 'image_url',
              name: 'Boné',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })

    getByText(/boné/i)
    getByText('R$100')
    getByText('2')
    getByText('Total: R$200')
  })
})
