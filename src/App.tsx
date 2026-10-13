import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:id" element={<DetailPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
