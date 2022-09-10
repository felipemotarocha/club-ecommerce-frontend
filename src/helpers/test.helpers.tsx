import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import rootReducer from '../store/root-reducer'
import { RootState } from '../store/store'

export const renderWithRedux = (
  component: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState
    }),
    ...renderOptions
  }: {
    preloadedState?: Partial<RootState>
    store?: any
  }
) => {
  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    )
  }

  return render(component, { wrapper: Wrapper, ...renderOptions })
}
