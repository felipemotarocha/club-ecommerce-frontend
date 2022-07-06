import { render } from '@testing-library/react'
import CustomButton from './custom-button.component'

describe('Custom Button Component', () => {
  it('should render with correct children', () => {
    const { getByText } = render(<CustomButton>Lorem Ipsum</CustomButton>)

    getByText(/lorem ipsum/i)
  })
})

export default {}
