import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, MapPin } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageProvider";

const phone = "tel:+966531555682";
const whatsapp = "https://wa.me/966531555682";

function WhatsAppMark() {
  return (
    <svg className="whatsapp-brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#168B54" />
      <path d="M10.1 8.9c.4-.9 1-1 1.7-1h1.1c.4 0 .8.2 1 .7l1.3 3.1c.2.5.1.9-.2 1.3l-1 1.2c-.3.3-.3.7-.1 1.1 1 1.7 2.4 3.1 4.1 4 .4.2.8.2 1.1-.2l1.3-1.5c.3-.4.8-.5 1.2-.3l2.9 1.4c.5.2.7.6.6 1.1l-.3 1.4c-.2.8-.9 1.4-1.7 1.6-1.5.4-3.6-.1-6.2-1.5-3.5-1.9-6.2-4.8-7.2-7.5-.8-2.2-.6-3.9.4-4.9Z" fill="#fff" />
      <path d="M6.5 25.5 8 21.2a12 12 0 1 1 4.1 4.1l-5.6.2Z" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function BrandLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <Image src="/al-jawdah-logo.svg" alt="الجودة الخيام مظلات" width={1000} height={360} priority />
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          <span><MapPin size={14} /> الرياض، المملكة العربية السعودية</span>
          <a href={phone}><Phone size={14} /> <b className="phone-number">+966 53 155 5682</b></a>
        </div>
      </div>
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
          <a className="header-whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppMark /> تواصل عبر واتساب</a>
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
