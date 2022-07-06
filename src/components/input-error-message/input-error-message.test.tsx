import { render } from '@testing-library/react'
import Colors from '../../theme/theme.colors'
import InputErrorMessage from './input-error-message.component'

describe('Input Error Message', () => {
  it('should show message with error color', () => {
    const { getByText } = render(
      <InputErrorMessage>Mensagem de Erro</InputErrorMessage>
    )

    const message = getByText(/mensagem de erro/i)

    expect(message).toHaveStyle(`color: ${Colors.error}`)
  })
})
