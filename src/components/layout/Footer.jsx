import { ArrowUpRight, Instagram, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer" id="kunjungi">
      <div className="footer-main container">
        <div className="footer-brand">
          <span className="brand-mark">V</span>
          <div>
            <h2>Victorian Chocolate Shoppe</h2>
            <p>Cokelat artisan, diracik untuk menjadi bagian dari cerita yang berkesan.</p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Jelajahi</span>
            <Link to="/#cerita">Cerita kami</Link>
            <Link to="/#koleksi">Koleksi</Link>
            <Link to="/services">Layanan bespoke</Link>
          </div>
          <div>
            <span className="footer-label">Terhubung</span>
            <a href="https://www.victorianchocolateshoppe.com/" target="_blank" rel="noreferrer">Situs utama <ArrowUpRight size={14} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram</a>
            <span className="footer-location"><MapPin size={14} /> Dibuat untuk momen istimewa</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Victorian Chocolate Shoppe</span>
        <span>Crafted with care. Shared with joy.</span>
      </div>
    </footer>
  )
}
