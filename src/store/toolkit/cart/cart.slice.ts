import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CartProduct from '../../../types/cart.types'
import Product from '../../../types/product.types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isVisible = !state.isVisible
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload

      // verificar se o produto já está no carrinho
      const productIsAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      // se sim -> aumentar sua quantidade
      if (productIsAlreadyInCart) {
        state.products = state.products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )

        return
      }

      // se não -> adicioná-lo
      state.products = [...state.products, { ...product, quantity: 1 }]
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    increaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    },
    decreaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    },
    clearCartProducts: (state) => {
      state.products = []
    }
  }
})

export const {
  toggleCart,
  addProductToCart,
  removeProductFromCart,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  clearCartProducts
} = cartSlice.actions

export default cartSlice.reducer
