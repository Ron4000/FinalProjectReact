import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import ProductPage from './components/ProductPage.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planner" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
