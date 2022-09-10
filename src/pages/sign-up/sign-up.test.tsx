import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpers/test.helpers'
import SignUpPage from './sign-up.page'

describe('Sign Up', () => {
  it('should show error when trying to submit without filling all required fields', async () => {
    const { getByText, findByText } = renderWithRedux(<SignUpPage />, {})

    const submitButton = getByText('Criar Conta', { selector: 'button' })

    userEvent.click(submitButton)

    await findByText(/o nome é obrigatório./i)
    getByText(/o sobrenome é obrigatório./i)
    getByText(/o e-mail é obrigatório./i)
    getByText(/a senha é obrigatória./i)
    getByText(/a confirmação de senha é obrigatória./i)
  })
})
