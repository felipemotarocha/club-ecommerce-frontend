import { render } from '@testing-library/react'
import ProductItem from './product-item.component'

describe('Product Item Component', () => {
  it('should render product', () => {
    const { getByText } = render(
      <ProductItem
        product={{ id: '1', imageUrl: 'image_url', name: 'Tênis', price: 200 }}
      />
    )

    getByText(/tênis/i)
    getByText('R$200')
  })
})
