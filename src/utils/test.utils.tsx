import * as React from 'react'
import { render } from '@testing-library/react'

import UserContextProvider, { IUserContext } from '../contexts/user.context'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider, { ICartContext } from '../contexts/cart.context'

interface ContextInitialValues {
  userContext?: Partial<IUserContext>
  cartContext?: Partial<ICartContext>
}

const renderWithContext = (
  component: React.ReactElement,
  initialValues?: ContextInitialValues
) => {
  const Wrapper: React.FunctionComponent = ({ children }) => {
    return (
      <BrowserRouter>
        <UserContextProvider initialValues={initialValues?.userContext}>
          <CartContextProvider initialValues={initialValues?.cartContext}>
            {children}
          </CartContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    )
  }

  return render(component, { wrapper: Wrapper })
}

export default renderWithContext
