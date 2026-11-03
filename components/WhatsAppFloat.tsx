import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/966531555682?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85."
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle size={22} />
      <span>تواصل واتساب</span>
    </a>
  );
}
