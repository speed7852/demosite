import Image from "next/image";
import {
  ArrowLeft, ArrowUpLeft, CheckCircle2, Clock3, MapPin,
  MessageCircle, ShieldCheck, Sparkles, Wrench
} from "lucide-react";

const whatsapp = "https://wa.me/966531555682?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1.";

const services = [
  { number: "01", title: "مظلات السيارات", description: "مظلات ثابتة وعصرية للمواقف والمنازل والمنشآت، بتصاميم تناسب مساحة الموقع.", image: "/gallery/project-09.webp", alt: "مظلة مواقف سيارات منفذة" },
  { number: "02", title: "المظلات الخارجية", description: "مظلات مداخل وأحواش وممرات للحماية من الشمس والعوامل الجوية.", image: "/gallery/project-23.webp", alt: "مظلة مدخل خارجية" },
  { number: "03", title: "الخيام وبيوت الشعر", description: "تنفيذ خيام وبيوت شعر بتفاصيل مستوحاة من الطابع السعودي الأصيل.", image: "/gallery/project-02.webp", alt: "بيت شعر خارجي" },
  { number: "04", title: "السواتر والتجهيزات", description: "حلول متنوعة للخصوصية والتجهيزات الخارجية حسب احتياج المكان.", image: "/gallery/project-10.webp", alt: "بوابة وتجهيز خارجي" }
];

const galleryLabels = [
  "جلسة داخلية وديكورات", "بيت شعر", "مظلة بولي كربونيت", "تجهيز بيت شعر", "باب خشبي خارجي", "تشطيب جدران", "مظلة مدخل", "ديكور سقف داخلي",
  "مظلات مواقف سيارات", "بوابة حديد", "مظلات سيارات", "تشطيب داخلي", "ديكور سقف", "مشروع بيت شعر", "جلسة داخلية", "مظلة خارجية",
  "سقف زجاجي", "تشطيب بيت شعر", "مظلة سيارات", "باب خارجي", "باب مدخل", "مظلة موقف", "مظلة مدخل", "باب خارجي",
  "تشطيب داخلي", "مظلة مدخل", "مظلات سيارات", "ديكور داخلي", "سقف ممر", "مظلة شبكية", "مظلة خارجية", "تشطيب داخلي"
];

const projects = galleryLabels.map((title, index) => ({
  title,
  category: "من أعمالنا",
  image: `/gallery/project-${String(index + 1).padStart(2, "0")}.webp`
}));

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow"><span /> خبرة واهتمام بالتفاصيل في الرياض</div>
          <h1>نصنع الظل،<br /><em>ونضيف الجمال</em> لمساحاتك</h1>
          <p className="hero-lead">
            حلول للمظلات والسواتر والخيام وبيوت الشعر والبرجولات،
            بتصاميم تناسب احتياجك وتفاصيل المكان.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsapp}>اطلب عرض سعر <ArrowLeft size={18} /></a>
            <a className="button button-outline" href="#services">اكتشف خدماتنا</a>
          </div>
          <div className="hero-location"><MapPin size={16} /> الرياض، المملكة العربية السعودية</div>
        </div>
        <div className="hero-note"><span>01</span><span className="note-line" /><span>حلول خارجية متكاملة</span></div>
      </section>

      <section className="trust-strip">
        <div className="container trust-items">
          <div><ShieldCheck /><span><b>اهتمام بالجودة</b><small>اختيار الخامات بعناية</small></span></div>
          <div><Wrench /><span><b>تنفيذ باحترافية</b><small>عناية بالتفاصيل</small></span></div>
          <div><Clock3 /><span><b>وضوح في التعامل</b><small>تواصل ومتابعة مستمرة</small></span></div>
          <div><MapPin /><span><b>نخدم الرياض</b><small>داخل مدينة الرياض</small></span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow dark"><span /> ماذا نقدم</div><h2>خدماتنا <em>الرئيسية</em></h2></div>
            <p>نوفر خيارات متنوعة لتجهيز المساحات الخارجية، مع الاهتمام بالوظيفة والشكل وجودة التنفيذ.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-photo">
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  <span className="service-number">{service.number}</span>
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={whatsapp}>استفسر عن الخدمة <ArrowUpLeft size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-main-image">
              <Image src="/gallery/project-08.webp" alt="تصميم معماري لمساحة خارجية" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="about-stamp"><Sparkles size={22} /><span>جمال<br />ووظيفة</span></div>
          </div>
          <div className="about-copy">
            <div className="eyebrow dark"><span /> من نحن</div>
            <h2>مساحتك الخارجية<br /><em>تستحق عناية خاصة</em></h2>
            <p>في ومظلت، نركز على تقديم حلول للمظلات والسواتر والخيام والبرجولات في الرياض. نبدأ بفهم احتياجك وطبيعة المساحة، ثم نساعدك في اختيار الحل المناسب من حيث التصميم والاستخدام.</p>
            <ul>
              <li><CheckCircle2 /> حلول تناسب احتياج الموقع</li>
              <li><CheckCircle2 /> خيارات متنوعة للتصميم والخامات</li>
              <li><CheckCircle2 /> تواصل واضح قبل وأثناء تنفيذ العمل</li>
            </ul>
            <a className="text-link" href="#contact">تواصل معنا <ArrowLeft size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow dark"><span /> لمحات من أعمالنا</div><h2>أفكار تلهم <em>مساحتك</em></h2></div>
            <p>استعرض مجموعة من صور الأعمال التي شاركتنا بها، وتشمل المظلات وبيوت الشعر والتجهيزات الداخلية والخارجية.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.image}>
                <div className="project-photo">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 33vw" />
                </div>
                <div className="project-meta"><span>{String(index + 1).padStart(2, "0")} · {project.category}</span><h3>{project.title}</h3></div>
              </article>
            ))}
          </div>
          <p className="gallery-disclaimer">صور من الأعمال والمشاريع التي تم تزويدنا بها.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div><div className="eyebrow"><span /> خطوتك الأولى تبدأ هنا</div><h2>لديك مساحة تريد تطويرها؟</h2><p>شاركنا فكرتك وسنتواصل معك لمناقشة الخدمة المناسبة وطلب عرض سعر.</p></div>
          <a className="button button-gold" href={whatsapp}><MessageCircle size={18} /> تواصل عبر واتساب</a>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div><div className="eyebrow dark"><span /> نحن بالقرب منك</div><h2>يسعدنا <em>تواصلك</em></h2><p>للاستفسارات وطلبات الأسعار، تواصل معنا عبر الهاتف أو واتساب.</p></div>
          <div className="contact-card">
            <div><span className="contact-icon"><PhoneIcon /></span><span><small>رقم التواصل</small><b dir="ltr">+966 53 155 5682</b></span></div>
            <div><span className="contact-icon"><MapPin size={20} /></span><span><small>نطاق الخدمة</small><b>الرياض، المملكة العربية السعودية</b></span></div>
            <a className="button button-dark" href={whatsapp}>راسلنا الآن <ArrowLeft size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

function PhoneIcon() {
  return <span className="phone-glyph">☎</span>;
}
