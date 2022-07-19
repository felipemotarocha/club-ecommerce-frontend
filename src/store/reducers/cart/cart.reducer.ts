import CartProduct from '../../../types/cart.types'
import CartActionTypes from './cart.action-types'

interface InitialState {
  isVisible: boolean
  productsTotalPrice: number
  productsCount: number
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0
}

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }

    case CartActionTypes.addProductToCart: {
      const product = action.payload

      // verificar se o produto já está no carrinho
      const productIsAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      // se sim -> aumentar sua quantidade
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      // se não -> adicioná-lo
      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }]
      }
    }

    default:
      return { ...state }
  }
}

export default cartReducer
