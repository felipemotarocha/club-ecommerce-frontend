import renderWithContext from '../../utils/test.utils'
import Cart from './cart.component'

describe('Cart Component', () => {
  it('should show products, products count and total price', async () => {
    const { getByText } = renderWithContext(<Cart />, {
      cartContext: {
        products: [
          {
            id: '1',
            imageUrl: 'imageUrl',
            name: 'Tênis',
            price: 500,
            quantity: 2
          }
        ],
        productsTotalPrice: 1000,
        productsCount: 1
      }
    })

    getByText(/tênis/i)
    getByText('Total: R$1000')
  })
})

export default {}
