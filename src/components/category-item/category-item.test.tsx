import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Category from '../../types/category.types'
import CategoryItem from './category-item.component'

describe('Category Item', () => {
  it('should render a category', () => {
    const category: Category = {
      id: '1',
      displayName: 'Masculino',
      imageUrl: 'image_url',
      name: 'male',
      products: [
        {
          id: '1',
          imageUrl: 'image_url',
          name: 'Boné',
          price: 200
        }
      ]
    }

    const { getByText } = render(
      <BrowserRouter>
        <CategoryItem category={category} />
      </BrowserRouter>
    )

    getByText(/masculino/i)
    getByText(/explorar/i)
  })
})

export default {}
