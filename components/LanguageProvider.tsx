"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "ar" | "en";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "ar", setLanguage: () => {} });

const translations: Record<string, string> = {
  "الرئيسية":"Home","خدماتنا":"Our Services","أعمالنا":"Our Work","من نحن":"About Us","تواصل معنا":"Contact Us",
  "تواصل عبر واتساب":"WhatsApp Us","الرياض":"Riyadh","اطلب عرض سعر":"Request a Quote","شاهد أعمالنا":"View Our Work",
  "الجودة الخيام مظلات · الرياض":"Al Jawdah Tents & Awnings · Riyadh","ظل يريحك،":"Comfortable Shade,",
  "وتصميم يليق بمساحتك":"Designed for Your Space","ننفذ المظلات والسواتر والخيام وبيوت الشعر والبرجولات، بحلول عملية تضيف الراحة والجمال إلى مساحتك.":"We deliver practical, elegant awnings, screens, tents, traditional بيت الشعر and pergolas that bring comfort and style to your space.",
  "الرياض، المملكة العربية السعودية":"Riyadh, Saudi Arabia","اهتمام بالجودة":"Quality Focus","اختيار الخامات بعناية":"Carefully selected materials",
  "تنفيذ باحترافية":"Professional Execution","عناية بالتفاصيل":"Attention to detail","تواصل واضح":"Clear Communication","متابعة من البداية":"Support from the start",
  "نخدم الرياض":"Serving Riyadh","داخل مدينة الرياض":"Across Riyadh","كل ما تحتاجه لمساحتك ":"Everything Your Outdoor Space Needs ",
  "الخارجية":"Outdoor","من المظلات إلى بيوت الشعر، نوفر خيارات متنوعة تساعدك على الاستفادة من المساحة براحة وأناقة.":"From awnings to traditional tents, we offer options that help you enjoy your space in comfort and style.",
  "مظلات السيارات":"Car Awnings","مظلات عملية وأنيقة للمواقف والمنازل والمنشآت، بتصاميم تناسب مساحة موقعك.":"Practical, elegant awnings for homes, parking areas and businesses, tailored to your space.",
  "المظلات الخارجية":"Outdoor Awnings","حلول للمداخل والأحواش والممرات تمنحك الظل والراحة طوال اليوم.":"Shade solutions for entrances, courtyards and walkways.",
  "الخيام وبيوت الشعر":"Tents & Traditional Seating","خيام وبيوت شعر تجمع بين الطابع الأصيل والراحة في الاستخدام.":"Tents and traditional بيت الشعر spaces combining authentic style with everyday comfort.",
  "السواتر والتجهيزات":"Screens & Outdoor Solutions","خيارات للخصوصية وتنسيق المساحات الخارجية حسب احتياجك.":"Privacy screens and outdoor solutions tailored to your needs.",
  "اطلب الخدمة":"Request This Service","جمال":"Beauty","ووظيفة":"and Function","نحوّل فكرتك إلى مساحة":"We Turn Your Idea Into a Space","تستمتع بها كل يوم":"You Enjoy Every Day",
  "في الجودة الخيام مظلات، نساعدك على اختيار الحل المناسب لمساحتك في الرياض. نهتم بالتفاصيل، ونوازن بين الشكل العملي والتصميم الجميل، لتكون النتيجة مناسبة لاحتياجك.":"At Al Jawdah Tents & Awnings, we help you choose the right solution for your space in Riyadh. We focus on details and balance function with attractive design.",
  "حلول تناسب طبيعة ومساحة الموقع":"Solutions suited to your site","خيارات متعددة للتصميم والخامات":"Multiple design and material options",
  "تواصل واضح قبل وأثناء التنفيذ":"Clear communication throughout","تعرّف على خدماتنا وتواصل معنا":"Explore Our Services & Contact Us",
  "معرض الصور":"Photo Gallery","شاهد نماذج من ":"Explore Examples of ","أعمالنا":"Our Work",
  "مجموعة من الصور الأصلية للأعمال والمشاريع، لتأخذ فكرة عن الخيارات والتفاصيل المتاحة.":"A selection of original project photos showcasing our work and available options.",
  "معرض المشاريع":"Project Gallery","شاهد مجموعة من أعمالنا المنفذة في الرياض.":"Explore a selection of our completed projects in Riyadh.",
  "عرض جميع المشاريع":"View All Projects","جميع الأعمال":"All Projects","مظلات السيارات والخارجية":"Car & Outdoor Awnings",
  "البرجولات والأسقف":"Pergolas & Roofing","التشطيبات الداخلية":"Interior Finishing","الأبواب والتشطيبات الخارجية":"Doors & Exterior Finishing",
  "اضغط على أي صورة لعرضها والتنقل بين الصور.":"Select any photo to view it and browse the gallery.",
  "ابدأ مشروعك معنا":"Start Your Project","جاهز لتطوير مساحتك؟":"Ready to Transform Your Space?",
  "أرسل لنا تفاصيل طلبك، وسنتواصل معك لمناقشة الخيارات المناسبة.":"Send us your requirements and we'll discuss the right options with you.",
  "تواصل عبر واتساب":"Chat on WhatsApp","يسعدنا ":"We'd Be Happy to ","خدمتك":"Help You",
  "للاستفسارات وطلبات الأسعار، تواصل معنا عبر الهاتف أو واتساب.":"For enquiries and quotations, contact us by phone or WhatsApp.",
  "رقم التواصل":"Phone Number","نطاق الخدمة":"Service Area","واتساب":"WhatsApp","اتصل الآن":"Call Now",
  "روابط سريعة":"Quick Links","اطلب عرض سعر":"Request a Quote","©":"©",
  "جميع الحقوق محفوظة.":"All rights reserved.","نخدم عملاءنا في الرياض":"Proudly serving customers across Riyadh",
  "مظلات سيارات ومواقف":"Car Parking Awnings","مظلات خارجية":"Outdoor Awnings","مظلات مواقف":"Parking Awnings",
  "خيام وبيوت شعر":"Tents & Traditional Seating","تجهيزات بيت شعر":"Traditional Tent Setup","ديكورات بيوت الشعر":"Traditional Tent Interiors",
  "جلسات داخلية":"Indoor Seating","تفاصيل بيت شعر":"Traditional Tent Details","برجولات وتغطيات":"Pergolas & Canopies",
  "تشطيبات وأسقف داخلية":"Interior Finishing & Ceilings","ديكورات أسقف":"Ceiling Designs","أبواب وتشطيبات خارجية":"Doors & Exterior Finishing",
  "أعمال أبواب خارجية":"Exterior Door Work","تشطيبات ومداخل":"Finishing & Entrances"
};

function LanguageEffects({ language }: { language: Language }) {
  useEffect(() => {
    const originals = new WeakMap<Text, string>();
    const attrOriginals = new WeakMap<Element, Record<string, string>>();
    const translate = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const textNode = node as Text;
        if (!originals.has(textNode)) originals.set(textNode, textNode.nodeValue || "");
        const original = originals.get(textNode) || "";
        const trimmed = original.trim();
        if (!trimmed) continue;
        const translated = language === "en" ? translations[trimmed] : trimmed;
        if (translated !== undefined && textNode.nodeValue !== original.replace(trimmed, translated)) {
          textNode.nodeValue = original.replace(trimmed, translated);
        }
      }
      document.querySelectorAll<HTMLElement>("[aria-label],[alt],[title]").forEach(element => {
        const attrs = ["aria-label","alt","title"];
        const saved = attrOriginals.get(element) || {};
        attrs.forEach(attr => {
          const value = element.getAttribute(attr);
          if (value && saved[attr] === undefined) saved[attr] = value;
          const original = saved[attr];
          if (original) {
            const translated = language === "en" ? translations[original] : original;
            if (translated !== undefined && value !== translated) element.setAttribute(attr, translated);
            else if (language === "ar" && value !== original) element.setAttribute(attr, original);
          }
        });
        attrOriginals.set(element, saved);
      });
    };
    translate();
    const observer = new MutationObserver(translate);
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    return () => observer.disconnect();
  }, [language]);
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");
  useEffect(() => {
    const saved = window.localStorage.getItem("site-language");
    if (saved === "en" || saved === "ar") setLanguage(saved);
  }, []);
  useEffect(() => { window.localStorage.setItem("site-language", language); }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}><LanguageEffects language={language} />{children}</LanguageContext.Provider>;
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  return <div className="language-switcher" aria-label="Choose website language">
    <button type="button" className={language === "ar" ? "active" : ""} onClick={() => setLanguage("ar")}>العربية</button>
    <span aria-hidden="true">|</span>
    <button type="button" className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>English</button>
  </div>;
}
