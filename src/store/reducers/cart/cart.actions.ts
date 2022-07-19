import Product from '../../../types/product.types'
import CartActionTypes from './cart.action-types'

export const toggleCart = () => ({
  type: CartActionTypes.toggleCart
})

export const addProductToCart = (payload: Product) => ({
  type: CartActionTypes.addProductToCart,
  payload
})
