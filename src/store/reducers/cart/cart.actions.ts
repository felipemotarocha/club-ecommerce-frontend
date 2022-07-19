import Product from '../../../types/product.types'
import CartActionTypes from './cart.action-types'

export const toggleCart = () => ({
  type: CartActionTypes.toggleCart
})

export const addProductToCart = (payload: Product) => ({
  type: CartActionTypes.addProductToCart,
  payload
})

export const removeProductFromCart = (payload: string) => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})

export const increaseCartProductQuantity = (payload: string) => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})

export const decreaseCartProductQuantity = (payload: string) => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})

export const clearCartProducts = () => ({
  type: CartActionTypes.clearCartProducts
})
