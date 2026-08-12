import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, Star } from "lucide-react";
import { clinic } from "../data/siteData.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faqs", label: "FAQs" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? "bg-navy-900/95 shadow-soft backdrop-blur" : "bg-navy-900"
      }`}
    >
      {/* Top info bar */}
      <div className="hidden border-b border-white/10 bg-navy-950 md:block">
        <div className="container-x flex items-center justify-between py-1.5 text-xs text-white/80">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              {clinic.rating.toFixed(1)}/5 · {clinic.reviewCount}+ Google reviews
            </span>
            <span>Mon–Sat: 4:30 PM – 8:30 PM · Sun: Closed</span>
          </div>
          <a href={clinic.phoneHref} className="flex items-center gap-1 hover:text-gold-400">
            <Phone className="h-3.5 w-3.5" />
            {clinic.phone}
          </a>
        </div>
      </div>

      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="EverSmile Logo" className="h-12 w-12 object-cover bg-navy-800 rounded-full p-1" />
          <span className="font-heading text-lg font-bold text-white sm:text-xl">
            EverSmile <span className="hidden text-gold-400 sm:inline">Dental Clinic</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-white/10 text-gold-400" : "text-white/85 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/book-appointment" className="btn-primary">
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-navy-900 lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col gap-1 py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-white/10 text-gold-400" : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book Appointment
            </Link>
            <a href={clinic.phoneHref} className="btn-outline mt-1 w-full !text-white !border-white/40">
              Call {clinic.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}