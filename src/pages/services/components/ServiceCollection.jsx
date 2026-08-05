import { Building2, CalendarHeart, Gift, Sparkles } from 'lucide-react'
import giftingImage from '../../../assets/images/bespoke-gifting.png'
import bonbonImage from '../../../assets/images/artisan-bonbons.png'
import stackImage from '../../../assets/images/chocolate-stack.webp'

const services = [
  { icon: Gift, title: 'Bingkisan Personal', copy: 'Komposisi rasa dan presentasi yang dirancang untuk satu orang, satu cerita, dan satu kesan yang intim.', note: 'Mulai dari 1 kotak', image: giftingImage },
  { icon: Building2, title: 'Corporate Gifting', copy: 'Hadiah perusahaan yang konsisten, refined, dan dapat disesuaikan untuk klien, tim, serta mitra penting.', note: 'Pemesanan skala kecil–besar', image: bonbonImage },
  { icon: CalendarHeart, title: 'Perayaan & Acara', copy: 'Cokelat untuk meja penyambutan, suvenir, private dinner, ulang tahun, dan perayaan yang bermakna.', note: 'Kurasi sesuai suasana acara', image: stackImage },
  { icon: Sparkles, title: 'Signature Selection', copy: 'Pilihan bonbon, truffle, dan tablet yang kami susun sebagai perjalanan rasa dalam satu presentasi.', note: 'Kurasi rasa khusus', image: bonbonImage },
]

export default function ServiceCollection() {
  return (
    <section className="screen-section service-collection" id="layanan">
      <div className="container">
        <div className="section-heading centered" data-aos="fade-up">
          <div><p className="eyebrow">What we create</p><h2>Layanan yang terasa<br /><em>personal dari awal.</em></h2></div>
          <p>Setiap kebutuhan dimulai dari percakapan singkat, lalu berkembang menjadi pilihan rasa dan presentasi yang jelas.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy, note, image }, index) => (
            <article className="service-card" key={title} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-card-image"><img src={image} alt={title} /><span>0{index + 1}</span></div>
              <div className="service-card-copy">
                <Icon size={22} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <small>{note}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
