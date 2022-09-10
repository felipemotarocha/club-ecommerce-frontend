import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpers/test.helpers'
import LoginPage from './login.page'

describe('Login', () => {
  it('should show erros when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<LoginPage />, {})

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/o e-mail é obrigatório./i)
    getByText(/a senha é obrigatória./i)
  })

  it('should show error if email is invalid', async () => {
    const { getByPlaceholderText, findByText, getByText } = renderWithRedux(
      <LoginPage />,
      {}
    )

    const emailInput = getByPlaceholderText(/digite seu e-mail/i)

    userEvent.type(emailInput, 'invalid_email')

    const submitButton = getByText('Entrar')

    userEvent.click(submitButton)

    await findByText(/por favor, insira um e-mail válido./i)
  })
})
