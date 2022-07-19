import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react'

import CategoryContextProvider from './contexts/category.context'
import { store, persistedStore } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
