import Image from "next/image";
import {
  ArrowLeft, ArrowUpLeft, CheckCircle2, Clock3, MapPin,
  MessageCircle, ShieldCheck, Sparkles, Wrench, Phone, Star
} from "lucide-react";

const whatsapp = "https://wa.me/966531555682?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1.";

const services = [
  { number: "01", title: "مظلات السيارات", description: "مظلات عملية وأنيقة للمواقف والمنازل والمنشآت، بتصاميم تناسب مساحة موقعك.", image: "/gallery/project-09.webp", alt: "مظلة مواقف سيارات" },
  { number: "02", title: "المظلات الخارجية", description: "حلول للمداخل والأحواش والممرات تمنحك الظل والراحة طوال اليوم.", image: "/gallery/project-23.webp", alt: "مظلة خارجية" },
  { number: "03", title: "الخيام وبيوت الشعر", description: "خيام وبيوت شعر تجمع بين الطابع الأصيل والراحة في الاستخدام.", image: "/gallery/project-02.webp", alt: "بيت شعر" },
  { number: "04", title: "السواتر والتجهيزات", description: "خيارات للخصوصية وتنسيق المساحات الخارجية حسب احتياجك.", image: "/gallery/project-10.webp", alt: "تجهيز خارجي" }
];

const labels = [
  "جلسة داخلية وديكورات", "بيت شعر", "مظلة بولي كربونيت", "تجهيز بيت شعر", "باب خشبي خارجي", "تشطيب جدران", "مظلة مدخل", "ديكور سقف داخلي",
  "مظلات مواقف سيارات", "بوابة حديد", "مظلات سيارات", "تشطيب داخلي", "ديكور سقف", "مشروع بيت شعر", "جلسة داخلية", "مظلة خارجية",
  "سقف زجاجي", "تشطيب بيت شعر", "مظلة سيارات", "باب خارجي", "باب مدخل", "مظلة موقف", "مظلة مدخل", "باب خارجي",
  "تشطيب داخلي", "مظلة مدخل", "مظلات سيارات", "ديكور داخلي", "سقف ممر", "مظلة شبكية", "مظلة خارجية", "تشطيب داخلي"
];
const projects = labels.map((title, i) => ({title, image: `/gallery/project-${String(i + 1).padStart(2, "0")}.webp`}));

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="مقدمة الموقع">
        <div className="hero-image">
          <div className="hero-image-caption"><span>من أعمالنا</span><b>تصاميم تجمع الجودة والجمال</b></div>
        </div>
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow"><span /> الجودة الخيام مظلات · الرياض</div>
            <h1>ظل يريحك،<br /><em>وتصميم يليق بمساحتك</em></h1>
            <p className="hero-lead">ننفذ المظلات والسواتر والخيام وبيوت الشعر والبرجولات، بحلول عملية تضيف الراحة والجمال إلى مساحتك.</p>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsapp}>اطلب عرض سعر <ArrowLeft size={18} /></a>
              <a className="button button-outline" href="#projects">شاهد أعمالنا</a>
            </div>
            <div className="hero-location"><MapPin size={16} /> الرياض، المملكة العربية السعودية</div>
          </div>
        </div>
        <div className="hero-note"><span>01</span><span className="note-line" /><span>حلول خارجية متكاملة</span></div>
      </section>

      <section className="trust-strip">
        <div className="container trust-items">
          <div><ShieldCheck /><span><b>اهتمام بالجودة</b><small>اختيار الخامات بعناية</small></span></div>
          <div><Wrench /><span><b>تنفيذ باحترافية</b><small>عناية بالتفاصيل</small></span></div>
          <div><Clock3 /><span><b>تواصل واضح</b><small>متابعة من البداية</small></span></div>
          <div><MapPin /><span><b>نخدم الرياض</b><small>داخل مدينة الرياض</small></span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow dark"><span /> خدماتنا</div><h2>كل ما تحتاجه لمساحتك <em>الخارجية</em></h2></div>
            <p>من المظلات إلى بيوت الشعر، نوفر خيارات متنوعة تساعدك على الاستفادة من المساحة براحة وأناقة.</p>
          </div>
          <div className="service-grid">
            {services.map(s => <article className="service-card" key={s.number}>
              <div className="service-photo"><Image src={s.image} alt={s.alt} fill sizes="(max-width: 700px) 100vw, 25vw" /><span className="service-number">{s.number}</span></div>
              <div className="service-copy"><h3>{s.title}</h3><p>{s.description}</p><a href={whatsapp}>اطلب الخدمة <ArrowUpLeft size={16} /></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-main-image"><Image src="/gallery/project-08.webp" alt="تفاصيل من أحد الأعمال" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
            <div className="about-stamp"><Sparkles size={22} /><span>جمال<br />ووظيفة</span></div>
          </div>
          <div className="about-copy">
            <div className="eyebrow dark"><span /> من نحن</div>
            <h2>نحوّل فكرتك إلى مساحة<br /><em>تستمتع بها كل يوم</em></h2>
            <p>في الجودة الخيام مظلات، نساعدك على اختيار الحل المناسب لمساحتك في الرياض. نهتم بالتفاصيل، ونوازن بين الشكل العملي والتصميم الجميل، لتكون النتيجة مناسبة لاحتياجك.</p>
            <ul>
              <li><CheckCircle2 /> حلول تناسب طبيعة ومساحة الموقع</li>
              <li><CheckCircle2 /> خيارات متعددة للتصميم والخامات</li>
              <li><CheckCircle2 /> تواصل واضح قبل وأثناء التنفيذ</li>
            </ul>
            <a className="text-link" href="#contact">تعرّف على خدماتنا وتواصل معنا <ArrowLeft size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow dark"><span /> معرض الصور</div><h2>شاهد نماذج من <em>أعمالنا</em></h2></div>
            <p>مجموعة من الصور الأصلية للأعمال والمشاريع، لتأخذ فكرة عن الخيارات والتفاصيل المتاحة.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => <article className="project-card" key={p.image}>
              <div className="project-photo"><Image src={p.image} alt={p.title} fill sizes="(max-width: 700px) 50vw, 33vw" /></div>
              <div className="project-meta"><span>{String(i + 1).padStart(2, "0")} · من أعمالنا</span><h3>{p.title}</h3></div>
            </article>)}
          </div>
          <p className="gallery-disclaimer">جميع الصور المعروضة من معرض الأعمال الأصلي.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div><div className="eyebrow"><span /> ابدأ مشروعك معنا</div><h2>جاهز لتطوير مساحتك؟</h2><p>أرسل لنا تفاصيل طلبك، وسنتواصل معك لمناقشة الخيارات المناسبة.</p></div>
          <a className="button button-gold" href={whatsapp}><MessageCircle size={18} /> تواصل عبر واتساب</a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div><div className="eyebrow dark"><span /> تواصل معنا</div><h2>يسعدنا <em>خدمتك</em></h2><p>للاستفسارات وطلبات الأسعار، تواصل معنا عبر الهاتف أو واتساب.</p></div>
          <div className="contact-card">
            <div><span className="contact-icon"><Phone size={20} /></span><span><small>رقم التواصل</small><b dir="ltr">+966 53 155 5682</b></span></div>
            <div><span className="contact-icon"><MapPin size={20} /></span><span><small>نطاق الخدمة</small><b>الرياض، المملكة العربية السعودية</b></span></div>
            <a className="button button-dark" href={whatsapp}>راسلنا الآن <ArrowLeft size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
