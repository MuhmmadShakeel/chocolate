import { ArrowRight, Clock3, Mail, PackageCheck } from 'lucide-react'

export default function ServiceContact() {
  return (
    <section className="service-contact" id="service-contact">
      <div className="container contact-shell" data-aos="fade-up">
        <div>
          <p className="eyebrow eyebrow-light">Begin your order</p>
          <h2>Mari merancang sesuatu<br /><em>yang hanya milik Anda.</em></h2>
          <p>Bagikan gambaran singkat tentang acara, penerima, jumlah, dan tanggal. Kami akan membantu menyusun langkah berikutnya.</p>
          <a className="button button-gold" href="mailto:hello@victorianchocolateshoppe.com">Mulai percakapan <ArrowRight size={17} /></a>
        </div>
        <aside>
          <div><Mail size={20} /><span><small>Kontak</small>hello@victorianchocolateshoppe.com</span></div>
          <div><Clock3 size={20} /><span><small>Waktu persiapan</small>Disesuaikan dengan skala pesanan</span></div>
          <div><PackageCheck size={20} /><span><small>Presentasi</small>Siap diberikan saat diterima</span></div>
        </aside>
      </div>
    </section>
  )
}
