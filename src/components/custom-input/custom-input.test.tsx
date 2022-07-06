import { fireEvent, render } from '@testing-library/react'
import Colors from '../../theme/theme.colors'
import CustomInput from './custom-input.component'

describe('Custom Input Component', () => {
  it('should render without error indicator', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    )

    const input = getByPlaceholderText(/lorem ipsum/i)

    expect(input).toHaveStyle('border: none')
  })

  it('should render with error indicator', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={true} />
    )

    const input = getByPlaceholderText(/lorem ipsum/i)

    expect(input).toHaveStyle(`border: 2px solid ${Colors.error}`)
  })

  it('should change value when user types', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    )

    const input = getByPlaceholderText(/lorem ipsum/i)

    fireEvent.change(input, { target: { value: 'Dolor Sit' } })

    getByDisplayValue(/dolor sit/i)
  })
})

export default {}
