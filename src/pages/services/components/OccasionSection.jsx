import { Quote } from 'lucide-react'
import heroImage from '../../../assets/images/victorian-hero.png'
import bonbonImage from '../../../assets/images/artisan-bonbons.png'
import tabletImage from '../../../assets/images/chocolate-tablet.webp'

export default function OccasionSection() {
  return (
    <section className="screen-section occasion-section">
      <div className="container occasion-grid">
        <div className="occasion-collage" data-aos="fade-right">
          <img className="occasion-large" src={heroImage} alt="Bonbon cokelat dengan aksen daun emas" />
          <img className="occasion-small top" src={bonbonImage} alt="Pilihan bonbon berwarna cokelat dan burgundy" />
          <img className="occasion-small bottom" src={tabletImage} alt="Tablet cokelat klasik" />
        </div>
        <div className="occasion-copy" data-aos="fade-left">
          <p className="eyebrow eyebrow-light">Made for the moment</p>
          <h2>Satu bahasa rasa,<br /><em>banyak alasan untuk berbagi.</em></h2>
          <p>Nuansa yang tenang untuk ucapan terima kasih, tampilan yang berani untuk peluncuran, atau sesuatu yang sepenuhnya personal untuk orang terdekat.</p>
          <div className="occasion-tags"><span>Ulang tahun</span><span>Wedding favors</span><span>Client gifting</span><span>Private events</span><span>Thank you</span></div>
          <blockquote><Quote size={28} />Yang membuat hadiah terasa mewah bukan hanya isinya, tetapi perhatian yang terasa di setiap detail.</blockquote>
        </div>
      </div>
    </section>
  )
}
