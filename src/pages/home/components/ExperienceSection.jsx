import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import giftingImage from '../../../assets/images/bespoke-gifting.png'

export default function ExperienceSection() {
  return (
    <section className="experience-section">
      <div className="experience-media" data-aos="zoom-out"><img src={giftingImage} alt="Kotak bingkisan cokelat berwarna burgundy dan ivory" /></div>
      <div className="experience-panel" data-aos="fade-up">
        <p className="eyebrow eyebrow-light">Bespoke gifting</p>
        <h2>Sebuah hadiah yang terasa <em>benar-benar dipikirkan.</em></h2>
        <p>Pilih rasa, suasana warna, dan detail presentasi. Kami menyatukannya menjadi bingkisan yang layak dikenang.</p>
        <Link className="button button-gold" to="/services">Rancang bersama kami <ArrowRight size={17} /></Link>
      </div>
    </section>
  )
}
