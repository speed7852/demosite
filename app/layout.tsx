import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "الجودة الخيام مظلات | مظلات وسواتر وخيام في الرياض",
  description: "حلول للمظلات والسواتر والخيام وبيوت الشعر والبرجولات في الرياض. تواصل معنا لطلب عرض سعر.",
  openGraph: {
    title: "الجودة الخيام مظلات",
    description: "نصنع الظل، ونضيف الجمال لمساحاتك.",
    locale: "ar_SA",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ScrollReveal />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
