import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../../assets/images/victorian-hero.png'

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-media" src={heroImage} alt="Koleksi bonbon cokelat artisan di atas meja kayu gelap" />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <div className="hero-copy" data-aos="fade-up">
          <p className="eyebrow eyebrow-light">The art of slow chocolate</p>
          <h1 id="hero-title">Kenikmatan yang<br /><em>diracik untuk dikenang.</em></h1>
          <p className="hero-lead">Lapisan rasa yang halus, bahan pilihan, dan sentuhan artisan—dipersembahkan untuk hadiah, perayaan, dan jeda manis Anda.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#koleksi">Jelajahi koleksi <ArrowRight size={17} /></a>
            <Link className="button button-ghost" to="/services">Lihat layanan</Link>
          </div>
        </div>
        <div className="hero-note" data-aos="fade-left" data-aos-delay="300">
          <span>Small batch</span>
          <strong>Elegan dalam detail.<br />Hangat dalam rasa.</strong>
        </div>
      </div>
      <a className="scroll-cue" href="#cerita" aria-label="Scroll to story"><ArrowDown size={17} /> <span>Temukan cerita</span></a>
    </section>
  )
}
