import { FunctionComponent } from 'react'

import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.styles'

import Category from '../../types/category.types'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
