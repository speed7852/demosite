import Link from "next/link";
import { Menu, Phone, MessageCircle, MapPin } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageProvider";

const phone = "tel:+966531555682";
const whatsapp = "https://wa.me/966531555682";

function BrandLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <svg viewBox="0 0 240 78" role="img" aria-label="شعار الجودة الخيام مظلات">
        <path d="M8 61 C47 45 94 22 143 5 L157 12 C121 34 87 51 57 61 Z" fill="#D6A238" />
        <path d="M151 5 C178 22 207 43 232 60 L202 60 C183 45 162 27 143 12 Z" fill="#102F5B" />
        <path d="M20 62 C63 49 104 30 145 10" fill="none" stroke="#E8C77F" strokeWidth="1.6" opacity=".85" />
        <path d="M151 10 C177 28 202 46 224 59" fill="none" stroke="#7890AC" strokeWidth="1.5" opacity=".65" />
      </svg>
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <LanguageSwitcher />
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
          <a className="header-phone" href={phone} aria-label="اتصل بنا"><Phone size={16} /><b className="phone-number">+966 53 155 5682</b></a>
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
