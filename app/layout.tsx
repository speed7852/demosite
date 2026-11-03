import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "ومظلت | مظلات وسواتر وخيام وبرجولات في الرياض",
  description:
    "حلول متكاملة للمظلات والسواتر والخيام وبيوت الشعر والبرجولات في الرياض. تواصل معنا لطلب معاينة وعرض سعر.",
  openGraph: {
    title: "ومظلت | حلول المظلات والسواتر في الرياض",
    description: "نصنع الظل ونضيف الجمال لمساحاتك.",
    locale: "ar_SA",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
