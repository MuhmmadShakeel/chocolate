import { ArrowUpRight } from 'lucide-react'
import bonbonImage from '../../../assets/images/artisan-bonbons.png'
import tabletImage from '../../../assets/images/chocolate-tablet.webp'
import stackImage from '../../../assets/images/chocolate-stack.webp'

const collection = [
  { number: '01', label: 'Handcrafted', title: 'Truffle Artisan', description: 'Pusat lembut, karakter kakao dalam, dan lapisan akhir yang dibuat satu demi satu.', image: stackImage },
  { number: '02', label: 'Signature selection', title: 'Bonbon Premium', description: 'Bentuk berkilau dan komposisi rasa seimbang untuk sajian yang terasa istimewa.', image: bonbonImage },
  { number: '03', label: 'Everyday ritual', title: 'Cokelat Klasik', description: 'Tablet cokelat yang bersih, kaya, dan nyaman dinikmati kapan pun Anda membutuhkan jeda.', image: tabletImage },
]

export default function CollectionSection() {
  return (
    <section className="screen-section collection-section" id="koleksi">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <div><p className="eyebrow">Pilihan favorit</p><h2>Tiga cara menikmati<br /><em>karakter kakao.</em></h2></div>
          <p>Ragam klasik dan modern dengan tekstur yang dirancang untuk membuat setiap gigitan terasa berbeda.</p>
        </div>
        <div className="collection-grid">
          {collection.map((item, index) => (
            <article className={`collection-card card-${index + 1}`} key={item.title} data-aos="fade-up" data-aos-delay={index * 120}>
              <div className="collection-image"><img src={item.image} alt={item.title} /></div>
              <div className="collection-content">
                <div className="card-meta"><span>{item.number}</span><span>{item.label}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#kunjungi" aria-label={`Temukan ${item.title}`}>Temukan rasa <ArrowUpRight size={17} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
