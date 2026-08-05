import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/home/HomePage'
import ServicesPage from './pages/services/ServicesPage'

function SiteRoutes() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      offset: 60,
      once: true,
      mirror: false,
    })
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
      AOS.refreshHard()
    }, 60)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  )
}
