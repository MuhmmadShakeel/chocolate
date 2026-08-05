import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const homeLinks = [
  { label: 'Cerita', to: '/#cerita' },
  { label: 'Koleksi', to: '/#koleksi' },
  { label: 'Keunggulan', to: '/#keunggulan' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="Victorian Chocolate Shoppe home">
          <span className="brand-mark">V</span>
          <span className="brand-copy">
            <strong>Victorian</strong>
            <small>Chocolate Shoppe</small>
          </span>
        </Link>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {homeLinks.map((link) => (
            <Link key={link.label} to={link.to}>{link.label}</Link>
          ))}
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Layanan</NavLink>
          <Link className="nav-cta" to="/services#service-contact">
            <ShoppingBag size={16} strokeWidth={1.8} />
            Pesan Bespoke
          </Link>
        </nav>

        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
