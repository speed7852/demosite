import Link from "next/link";
import { Menu, Phone } from "lucide-react";

const phone = "tel:+966531555682";

function BrandLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <svg viewBox="0 0 220 70" role="img">
        <path d="M8 55 L108 7 L211 55" fill="none" stroke="#D5A02F" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 55 L108 23 L200 55" fill="none" stroke="#123568" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
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
          <Link href="/#about">من نحن</Link>
          <Link href="/#projects">أعمالنا</Link>
          <Link href="/#contact">تواصل معنا</Link>
        </nav>
        <a className="nav-cta" href={phone}><Phone size={16} /><span>اتصل بنا</span></a>
        <details className="mobile-menu">
          <summary aria-label="فتح القائمة"><Menu size={23} /></summary>
          <nav>
            <Link href="/">الرئيسية</Link>
            <Link href="/#services">خدماتنا</Link>
            <Link href="/#about">من نحن</Link>
            <Link href="/#projects">أعمالنا</Link>
            <Link href="/#contact">تواصل معنا</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
