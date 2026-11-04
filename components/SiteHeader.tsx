import Link from "next/link";
import { Menu, Phone, MessageCircle, MapPin } from "lucide-react";

const phone = "tel:+966531555682";
const whatsapp = "https://wa.me/966531555682";

function BrandLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <svg viewBox="0 0 220 76" role="img">
        <path d="M8 58 L108 8 L212 58" fill="none" stroke="#D5A02F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 58 L108 27 L198 58" fill="none" stroke="#123568" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="الجودة الخيام مظلات - الرئيسية">
          <BrandLogo />
          <span className="brand-copy"><strong>الجودة الخيام مظلات</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="القائمة الرئيسية">
          <Link href="/">الرئيسية</Link>
          <Link href="/#services">خدماتنا</Link>
          <Link href="/#projects">أعمالنا</Link>
          <Link href="/#about">من نحن</Link>
          <Link href="/#contact">تواصل معنا</Link>
        </nav>
        <div className="header-contact">
          <a className="header-whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> تواصل عبر واتساب</a>
          <a className="header-phone" href={phone}><Phone size={16} /><b dir="ltr">+966 53 155 5682</b></a>
          <span className="header-city"><MapPin size={16} /> الرياض</span>
        </div>
        <details className="mobile-menu">
          <summary aria-label="فتح القائمة"><Menu size={24} /></summary>
          <nav>
            <Link href="/">الرئيسية</Link>
            <Link href="/#services">خدماتنا</Link>
            <Link href="/#projects">أعمالنا</Link>
            <Link href="/#about">من نحن</Link>
            <Link href="/#contact">تواصل معنا</Link>
            <a href={whatsapp}>تواصل عبر واتساب</a>
            <a href={phone}>اتصل بنا</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
