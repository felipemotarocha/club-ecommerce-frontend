import Category from '../../../types/category.types'
import CategoryActionTypes from './category.action-types'

interface InitialState {
  categories: Category[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false
}

const categoryReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true }

    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload }

    case CategoryActionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false }

    default:
      return state
  }
}

export default categoryReducer
