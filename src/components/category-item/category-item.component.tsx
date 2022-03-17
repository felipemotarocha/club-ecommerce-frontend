import { FunctionComponent } from 'react'

// Utilities
import Category from '../../types/category.types'

// Styles
import './category-item.styles.css'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `url('${category.imageUrl}')` }}>
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem
