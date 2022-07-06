import { render } from '@testing-library/react'
import Category from '../../types/category.types'
import CategoryOverview from './category-overview.component'

describe('Category Overview Component', () => {
  it('should render a category with its products', () => {
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

    const { getByText } = render(<CategoryOverview category={category} />)

    getByText(/masculino/i)
    getByText(/Boné/i)
    getByText(/200/i)
  })
})

export default {}
