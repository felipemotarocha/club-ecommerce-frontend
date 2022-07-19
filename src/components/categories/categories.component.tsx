import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import CategoryItem from '../category-item/category-item.component'
import Loading from '../loading/loading.component'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// Utilities
import { fetchCategories } from '../../store/reducers/category/category.actions'
import { useAppSelector } from '../../hooks/redux.hooks'

const Categories = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
