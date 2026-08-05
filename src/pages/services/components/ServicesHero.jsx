import { ArrowDown, MoveRight } from 'lucide-react'
import giftingImage from '../../../assets/images/bespoke-gifting.png'

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <img src={giftingImage} alt="Presentasi layanan bingkisan cokelat premium" />
      <div className="services-hero-shade" />
      <div className="container services-hero-content" data-aos="fade-up">
        <p className="eyebrow eyebrow-light">Layanan Victorian</p>
        <h1>Dirancang untuk momen<br /><em>yang tidak biasa.</em></h1>
        <p>Dari satu kotak yang personal hingga ratusan bingkisan perusahaan, kami merancang pengalaman cokelat yang terasa padu, hangat, dan tepat sasaran.</p>
        <a className="button button-gold" href="#layanan">Temukan layanan <MoveRight size={18} /></a>
      </div>
      <a className="scroll-cue" href="#layanan"><ArrowDown size={17} /><span>Lihat pilihan</span></a>
    </section>
  )
}
