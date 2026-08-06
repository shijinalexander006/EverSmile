import { MessageCircle } from "lucide-react";
import { clinic } from "../data/siteData.js";

export default function WhatsAppButton() {
  return (
    <a
      href={`${clinic.whatsappHref}?text=${encodeURIComponent(
        "Hi EverSmile Dental Clinic, I'd like to book an appointment."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 animate-float"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
