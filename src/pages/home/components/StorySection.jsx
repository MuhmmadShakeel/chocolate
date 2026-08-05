import { Sparkles } from 'lucide-react'
import storyImage from '../../../assets/images/chocolate-story.webp'

export default function StorySection() {
  return (
    <section className="screen-section story-section" id="cerita">
      <div className="container story-grid">
        <div className="story-visual" data-aos="fade-right">
          <div className="image-frame"><img src={storyImage} alt="Potongan cokelat hitam artisan" /></div>
          <div className="story-seal" data-aos="zoom-in" data-aos-delay="250">
            <Sparkles size={18} />
            <span>Made slowly</span>
            <strong>Served beautifully</strong>
          </div>
        </div>
        <div className="story-copy" data-aos="fade-left">
          <p className="eyebrow">Cerita manis</p>
          <h2>Cokelat artisan dengan karakter yang <em>tenang dan elegan.</em></h2>
          <p className="lead-copy">Kami membawa kehangatan toko manisan klasik ke dalam pengalaman modern—melalui aroma kakao, tekstur lembut, dan detail yang menyambut sejak pandangan pertama.</p>
          <p>Setiap pilihan disusun untuk dinikmati sebagai hadiah, suguhan keluarga, pelengkap perayaan, atau teman bersantai ketika hari mulai melambat.</p>
          <blockquote>“Satu potong yang baik tidak sekadar manis. Ia meninggalkan kesan.”</blockquote>
          <div className="story-stats">
            <div><strong>01</strong><span>Bahan yang dipilih dengan cermat</span></div>
            <div><strong>02</strong><span>Detail akhir yang dikerjakan tangan</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
