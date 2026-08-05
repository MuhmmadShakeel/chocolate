import { Box, Gem, HeartHandshake, Leaf } from 'lucide-react'
import bonbonImage from '../../../assets/images/artisan-bonbons.png'

const values = [
  { icon: Leaf, title: 'Bahan pilihan', text: 'Profil kakao kaya dengan pasangan rasa yang jernih dan seimbang.' },
  { icon: Gem, title: 'Dibuat artisan', text: 'Bentuk, tekstur, dan dekorasi ditangani sebagai bagian dari rasa.' },
  { icon: Box, title: 'Presentasi berkelas', text: 'Setiap kotak hadir rapi dan siap diberikan tanpa tambahan apa pun.' },
  { icon: HeartHandshake, title: 'Sentuhan personal', text: 'Pilihan dapat disesuaikan dengan kisah dan suasana momen Anda.' },
]

export default function CraftSection() {
  return (
    <section className="screen-section craft-section" id="keunggulan">
      <div className="craft-visual" data-aos="fade-right"><img src={bonbonImage} alt="Susunan bonbon artisan di atas kertas buatan tangan" /></div>
      <div className="craft-content" data-aos="fade-left">
        <p className="eyebrow eyebrow-light">Alasan memilih</p>
        <h2>Detail kecil.<br /><em>Kesan yang besar.</em></h2>
        <p className="craft-intro">Dari pemilihan rasa hingga pita terakhir, setiap keputusan dibuat untuk menghadirkan pengalaman yang utuh.</p>
        <div className="value-list">
          {values.map(({ icon: Icon, title, text }, index) => (
            <article key={title} data-aos="fade-up" data-aos-delay={index * 80}>
              <Icon size={22} strokeWidth={1.5} />
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
