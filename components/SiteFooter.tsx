import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const whatsapp = "https://wa.me/966531555682";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">الجودة الخيام مظلات</Link>
          <p>حلول عملية وأنيقة للمظلات والسواتر والخيام وبيوت الشعر والبرجولات في مدينة الرياض.</p>
        </div>
        <div>
          <h3>روابط سريعة</h3>
          <Link href="/#services">خدماتنا</Link>
          <Link href="/#about">من نحن</Link>
          <Link href="/#projects">معرض الأعمال</Link>
          <Link href="/#contact">اطلب عرض سعر</Link>
        </div>
        <div>
          <h3>تواصل معنا</h3>
          <span><MapPin size={16} /> الرياض، المملكة العربية السعودية</span>
          <a href="tel:+966531555682"><Phone size={16} /> +966 53 155 5682</a>
          <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> واتساب</a>
        </div>
      </div>
      <div className="container copyright">
        <span>© {new Date().getFullYear()} الجودة الخيام مظلات. جميع الحقوق محفوظة.</span>
        <span>نخدم عملاءنا في الرياض</span>
      </div>
    </footer>
  );
}
