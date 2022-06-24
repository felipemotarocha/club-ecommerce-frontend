import { FunctionComponent, useContext, useEffect } from 'react'

// Styles
import { Container } from './categories-overview.styles'

// Utilities
import { CategoryContext } from '../../contexts/category.context'

// Components
import CategoryOverview from '../category-overview/category-overview.component'
import Loading from '../loading/loading.component'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
