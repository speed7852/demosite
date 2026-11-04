"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft, ArrowUpLeft, CheckCircle2, Clock3, MapPin,
  MessageCircle, ShieldCheck, Sparkles, Wrench, Phone, ChevronLeft, ChevronRight, X
} from "lucide-react";

const whatsapp = "https://wa.me/966531555682?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1.";

const services = [
  { number: "01", title: "مظلات السيارات", description: "مظلات عملية وأنيقة للمواقف والمنازل والمنشآت، بتصاميم تناسب مساحة موقعك.", image: "/gallery/project-09.webp", alt: "مظلة مواقف سيارات" },
  { number: "02", title: "المظلات الخارجية", description: "حلول للمداخل والأحواش والممرات تمنحك الظل والراحة طوال اليوم.", image: "/gallery/project-23.webp", alt: "مظلة خارجية" },
  { number: "03", title: "الخيام وبيوت الشعر", description: "خيام وبيوت شعر تجمع بين الطابع الأصيل والراحة في الاستخدام.", image: "/gallery/project-02.webp", alt: "بيت شعر" },
  { number: "04", title: "السواتر والتجهيزات", description: "خيارات للخصوصية وتنسيق المساحات الخارجية حسب احتياجك.", image: "/gallery/project-10.webp", alt: "تجهيز خارجي" }
];

const customerProjects = [
  { title: "مظلات سيارات ومواقف", category: "awnings", image: "/gallery/customer/01_Car_and_Outdoor_Awnings/01-01.jpg" },
  { title: "مظلات خارجية", category: "awnings", image: "/gallery/customer/01_Car_and_Outdoor_Awnings/01-02.jpg" },
  { title: "مظلات مواقف", category: "awnings", image: "/gallery/customer/01_Car_and_Outdoor_Awnings/01-03.jpg" },
  { title: "مظلات سيارات", category: "awnings", image: "/gallery/customer/01_Car_and_Outdoor_Awnings/01-04.jpg" },
  { title: "خيام وبيوت شعر", category: "tents", image: "/gallery/customer/02_Tents_and_Beit_Al_Shaar_Interiors/02-01.jpg" },
  { title: "تجهيزات بيت شعر", category: "tents", image: "/gallery/customer/02_Tents_and_Beit_Al_Shaar_Interiors/02-02.jpg" },
  { title: "ديكورات بيوت الشعر", category: "tents", image: "/gallery/customer/02_Tents_and_Beit_Al_Shaar_Interiors/02-03.jpg" },
  { title: "جلسات داخلية", category: "tents", image: "/gallery/customer/02_Tents_and_Beit_Al_Shaar_Interiors/02-04.jpg" },
  { title: "تفاصيل بيت شعر", category: "tents", image: "/gallery/customer/02_Tents_and_Beit_Al_Shaar_Interiors/02-05.jpg" },
  { title: "برجولات وتغطيات", category: "pergolas", image: "/gallery/customer/03_Pergolas_and_Roofing/03-01.jpg" },
  { title: "تشطيبات وأسقف داخلية", category: "interiors", image: "/gallery/customer/04_Interior_Finishing_and_Ceilings/04-01.jpg" },
  { title: "ديكورات أسقف", category: "interiors", image: "/gallery/customer/04_Interior_Finishing_and_Ceilings/04-02.jpg" },
  { title: "أبواب وتشطيبات خارجية", category: "doors", image: "/gallery/customer/05_Doors_and_Exterior_Finishing/05-01.jpg" },
  { title: "أعمال أبواب خارجية", category: "doors", image: "/gallery/customer/05_Doors_and_Exterior_Finishing/05-02.jpg" },
  { title: "تشطيبات ومداخل", category: "doors", image: "/gallery/customer/05_Doors_and_Exterior_Finishing/05-03.jpg" }
];
const categories = [
  { id: "all", label: "جميع الأعمال" },
  { id: "awnings", label: "مظلات السيارات والخارجية" },
  { id: "tents", label: "الخيام وبيوت الشعر" },
  { id: "pergolas", label: "البرجولات والأسقف" },
  { id: "interiors", label: "التشطيبات الداخلية" },
  { id: "doors", label: "الأبواب والتشطيبات الخارجية" }
];

const heroSlides = [
  { image: "/gallery/project-19.webp", alt: "مظلة سيارات بتصميم أنيق" },
  { image: "/gallery/project-23.webp", alt: "مظلة خارجية" },
  { image: "/gallery/project-02.webp", alt: "خيمة وبيت شعر" },
  { image: "/gallery/project-10.webp", alt: "سواتر خارجية" }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const visibleProjects = selectedCategory === "all" ? customerProjects : customerProjects.filter(project => project.category === selectedCategory);
  const moveSlide = useCallback((direction: number) => {
    setActiveSlide(current => (current + direction + heroSlides.length) % heroSlides.length);
  }, []);
  const movePhoto = useCallback((direction: number) => {
    setActivePhoto(current => current === null ? null : (current + direction + visibleProjects.length) % visibleProjects.length);
  }, [visibleProjects.length]);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide(current => (current + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    if (activePhoto === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowLeft") movePhoto(1);
      if (event.key === "ArrowRight") movePhoto(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePhoto, movePhoto]);
  return (
    <main>
      <section className="hero" aria-label="مقدمة الموقع">
        <div className="hero-image" style={{ backgroundImage: 'url("' + heroSlides[activeSlide].image + '")' }} role="img" aria-label={heroSlides[activeSlide].alt}>
          <button className="hero-slide-arrow hero-slide-prev" onClick={() => moveSlide(-1)} aria-label="الصورة السابقة"><ChevronRight /></button>
          <button className="hero-slide-arrow hero-slide-next" onClick={() => moveSlide(1)} aria-label="الصورة التالية"><ChevronLeft /></button>
          <div className="hero-slide-dots" aria-label="اختيار صورة">
            {heroSlides.map((slide, index) => <button key={slide.image} className={index === activeSlide ? "active" : ""} onClick={() => setActiveSlide(index)} aria-label={'عرض الصورة ' + (index + 1)} />)}
          </div>
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
              <div className="service-photo"><Image src={s.image} alt={s.alt} fill sizes="(max-width: 700px) 100vw, 25vw" /></div>
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
          <div className="showcase-banner">
            <div className="showcase-photos">
              <button type="button" onClick={() => setActivePhoto(0)} aria-label="عرض المشروع"><Image src={customerProjects[0].image} alt="مظلات سيارات" fill sizes="(max-width: 700px) 24vw, 12vw" /></button>
              <button type="button" onClick={() => setActivePhoto(4)} aria-label="عرض المشروع"><Image src={customerProjects[4].image} alt="خيام وبيوت شعر" fill sizes="(max-width: 700px) 24vw, 12vw" /></button>
              <button type="button" onClick={() => setActivePhoto(1)} aria-label="عرض المشروع"><Image src={customerProjects[9].image} alt="برجولات" fill sizes="(max-width: 700px) 24vw, 12vw" /></button>
              <button type="button" onClick={() => setActivePhoto(9)} aria-label="عرض المشروع"><Image src={customerProjects[12].image} alt="أبواب وتشطيبات" fill sizes="(max-width: 700px) 24vw, 12vw" /></button>
            </div>
            <div className="showcase-copy">
              <div className="eyebrow"><span /> أعمالنا</div>
              <h2>معرض المشاريع</h2>
              <p>شاهد مجموعة من أعمالنا المنفذة في الرياض.</p>
              <a className="button button-gold" href="#all-projects">عرض جميع المشاريع <ArrowLeft size={17} /></a>
            </div>
          </div>
          <div className="gallery-filters" role="group" aria-label="تصنيف الأعمال">
            {categories.map(category => <button key={category.id} type="button" className={selectedCategory === category.id ? "active" : ""} onClick={() => { setSelectedCategory(category.id); setActivePhoto(null); }}>{category.label}</button>)}
          </div>
          <div id="all-projects" className="project-grid">
            {visibleProjects.map((p, i) => <article className="project-card" key={p.image}>
              <button className="project-photo project-photo-button" type="button" onClick={() => setActivePhoto(i)} aria-label={'تكبير صورة ' + p.title}>
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 700px) 50vw, 33vw" />
              </button>
              <div className="project-meta"><h3>{p.title}</h3></div>
            </article>)}
          </div>
          <p className="gallery-disclaimer">اضغط على أي صورة لعرضها والتنقل بين الصور.</p>
        </div>
      </section>

      {activePhoto !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="معرض الصور" onClick={() => setActivePhoto(null)}>
          <button className="gallery-close" onClick={() => setActivePhoto(null)} aria-label="إغلاق المعرض"><X /></button>
          <button className="gallery-arrow gallery-arrow-prev" onClick={event => { event.stopPropagation(); movePhoto(1); }} aria-label="الصورة السابقة"><ChevronRight /></button>
          <div className="gallery-view" onClick={event => event.stopPropagation()}>
            <div className="gallery-large-image"><Image src={visibleProjects[activePhoto].image} alt={visibleProjects[activePhoto].title} fill sizes="100vw" priority /></div>
            <div className="gallery-caption">{projects[activePhoto].title} <span>{activePhoto + 1} / {visibleProjects.length}</span></div>
          </div>
          <button className="gallery-arrow gallery-arrow-next" onClick={event => { event.stopPropagation(); movePhoto(-1); }} aria-label="الصورة التالية"><ChevronLeft /></button>
        </div>
      )}

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
            <div><span className="contact-icon"><Phone size={20} /></span><span><small>رقم التواصل</small><b className="phone-number">+966 53 155 5682</b></span></div>
            <div><span className="contact-icon"><MapPin size={20} /></span><span><small>نطاق الخدمة</small><b>الرياض، المملكة العربية السعودية</b></span></div>
            <div className="contact-actions"><a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /> واتساب</a><a className="button button-dark" href="tel:+966531555682"><Phone size={19} /> اتصل الآن</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
