import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/home/home.page'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
