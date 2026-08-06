import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons.jsx";
import { clinic, socialLinks } from "../data/siteData.js";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
];

const popularServices = [
  "Root Canal Treatment",
  "Dental Implants",
  "Teeth Whitening",
  "Braces",
  "Smile Designing",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-x grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-navy-900">
              ES
            </span>
            <span className="font-heading text-lg font-bold text-white">EverSmile</span>
          </div>
          <p className="text-sm leading-relaxed">
            Quality dental care with advanced treatments, experienced dentists, and a patient-first
            approach — right here in Vidyaranyapura, Bengaluru.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={socialLinks.instagram}
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-navy-900"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.facebook}
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-navy-900"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.whatsapp}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-navy-900"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-base font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-base font-semibold text-white">Popular Services</h3>
          <ul className="space-y-2 text-sm">
            {popularServices.map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-gold-400">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-base font-semibold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="h-5 w-5 flex-none text-gold-400" />
              <span>{clinic.address.full}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-5 w-5 flex-none text-gold-400" />
              <a href={clinic.phoneHref} className="hover:text-gold-400">
                {clinic.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-5 w-5 flex-none text-gold-400" />
              <a href={`mailto:${clinic.email}`} className="hover:text-gold-400">
                {clinic.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="h-5 w-5 flex-none text-gold-400" />
              <span>Mon–Sat: 4:30 PM – 8:30 PM<br />Sunday: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-4 text-xs text-white/60 sm:flex-row">
          <p>© {year} EverSmile Dental Clinic. All rights reserved.</p>
          <p>Website designed for a premium patient experience.</p>
        </div>
      </div>
    </footer>
  );
}
