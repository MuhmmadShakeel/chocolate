import { Check, ChevronRight } from 'lucide-react'
import storyImage from '../../../assets/images/chocolate-story.webp'

const process = [
  ['Percakapan', 'Ceritakan momen, jumlah, nuansa, dan karakter penerimanya.'],
  ['Kurasi rasa', 'Kami menyusun kombinasi rasa yang seimbang dan mudah dinikmati.'],
  ['Penyempurnaan', 'Warna, kemasan, pesan, dan detail akhir diselaraskan.'],
  ['Presentasi', 'Pesanan disiapkan rapi, diperiksa, lalu siap diberikan.'],
]

export default function BespokeProcess() {
  return (
    <section className="screen-section process-section">
      <div className="container process-grid">
        <div className="process-copy" data-aos="fade-right">
          <p className="eyebrow">The bespoke process</p>
          <h2>Dari gagasan kecil menjadi <em>gestur yang berkesan.</em></h2>
          <p className="lead-copy">Proses kami dibuat jelas dan personal. Anda tahu apa yang dipilih, mengapa dipilih, dan bagaimana semuanya akan hadir.</p>
          <div className="process-list">
            {process.map(([title, text], index) => (
              <div key={title} data-aos="fade-up" data-aos-delay={index * 70}>
                <span><Check size={15} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ChevronRight size={17} />
              </div>
            ))}
          </div>
        </div>
        <div className="process-image" data-aos="fade-left">
          <img src={storyImage} alt="Tekstur cokelat hitam sebagai bagian dari proses artisan" />
          <div className="process-image-note"><span>01—04</span><strong>Thoughtful from first taste to final ribbon.</strong></div>
        </div>
      </div>
    </section>
  )
}
