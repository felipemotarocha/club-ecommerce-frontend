import { combineReducers } from 'redux'
import cartReducer from './reducers/cart/cart.reducer'
import userReducer from './toolkit/user/user.slice'
import categoryReducer from './reducers/category/category.reducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootReducer
