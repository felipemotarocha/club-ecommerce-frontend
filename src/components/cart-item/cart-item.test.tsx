import { renderWithRedux } from '../../helpers/test.helpers'
import CartProduct from '../../types/cart.types'
import CartItem from './cart-item.component'

describe('Cart Item', () => {
  it('should show correct cart item', () => {
    const cartItem: CartProduct = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Boné',
      price: 100,
      quantity: 1
    }

    const { getByText, getByLabelText } = renderWithRedux(
      <CartItem product={cartItem} />,
      {}
    )

    getByText(/boné/i)
    getByText('R$100')
    getByText('1')
    getByLabelText(/increase quantity of boné/i)
    getByLabelText(/decrease quantity of boné/i)
    getByLabelText(/remove boné/i)
  })
})
