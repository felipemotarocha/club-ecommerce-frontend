import { onAuthStateChanged } from 'firebase/auth'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

// Utilities
import { auth } from './config/firebase.config'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
