import Link from "next/link";
import { Menu, Phone } from "lucide-react";

const phone = "tel:+966531555682";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="ومظلت - الرئيسية">
          <span className="brand-mark">و</span>
          <span className="brand-copy">
            <strong>ومظلت</strong>
            <small>للمظلات والسواتر والخيام</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="القائمة الرئيسية">
          <Link href="/">الرئيسية</Link>
          <Link href="/#services">خدماتنا</Link>
          <Link href="/#about">من نحن</Link>
          <Link href="/#projects">أعمالنا</Link>
          <Link href="/#contact">اتصل بنا</Link>
        </nav>
        <a className="nav-cta" href={phone}>
          <Phone size={16} />
          <span>اتصل بنا</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="فتح القائمة"><Menu size={23} /></summary>
          <nav>
            <Link href="/">الرئيسية</Link>
            <Link href="/#services">خدماتنا</Link>
            <Link href="/#about">من نحن</Link>
            <Link href="/#projects">أعمالنا</Link>
            <Link href="/#contact">اتصل بنا</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
