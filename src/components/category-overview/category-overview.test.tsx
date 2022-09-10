import { renderWithRedux } from '../../helpers/test.helpers'
import Category from '../../types/category.types'
import CategoryOverview from './category-overview.component'

describe('Category Overview', () => {
  it('should show correct category and its products', () => {
    const category: Category = {
      displayName: 'Lorem Ipsum',
      id: '1',
      imageUrl: 'image_url',
      name: 'lorem-ipsum',
      products: [
        {
          id: '2',
          imageUrl: 'image_url',
          name: 'Lorem',
          price: 100
        },
        {
          id: '3',
          imageUrl: 'image_url',
          name: 'Ipsum',
          price: 200
        },
        {
          id: '4',
          imageUrl: 'image_url',
          name: 'Dolor',
          price: 300
        },
        {
          id: '5',
          imageUrl: 'image_url',
          name: 'Sit',
          price: 400
        },
        {
          id: '6',
          imageUrl: 'image_url',
          name: 'Amet',
          price: 500
        }
      ]
    }
    const { getByText, queryByText } = renderWithRedux(
      <CategoryOverview category={category} />,
      {}
    )

    getByText(/lorem ipsum/i)

    // Produtos
    getByText('Lorem')
    getByText('R$100')

    getByText('Ipsum')
    getByText('R$200')

    getByText('Dolor')
    getByText('R$300')

    getByText('Sit')
    getByText('R$400')

    expect(queryByText('Amet')).toBeNull()
  })
})
