import { render } from '@testing-library/react'
import Colors from '../../theme/theme.colors'
import InputErrorMessage from './input-error-message.component'

describe('Input Error Message', () => {
  it('should show message with error color', () => {
    const { getByText } = render(
      <InputErrorMessage>Lorem Ipsum</InputErrorMessage>
    )

    const message = getByText('Lorem Ipsum')

    expect(message).toHaveStyle({ color: Colors.error })
  })
})
