import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { heroContent, clinic, doctor } from "../data/siteData.js";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, white 0, transparent 30%), radial-gradient(circle at 85% 75%, white 0, transparent 25%)",
        }}
        aria-hidden="true"
      />
      <div className="container-x relative grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gold-400">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            {clinic.rating.toFixed(1)}/5 rated · {clinic.reviewCount}+ happy patients
          </span>
          <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {heroContent.heading}
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">{heroContent.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book-appointment" className="btn-primary">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Link>
            <a href={clinic.phoneHref} className="btn-outline">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
            <ShieldCheck className="h-5 w-5 text-gold-400" />
            Sterilized instruments · Pain-free treatments · Affordable pricing
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <img
            src={doctor.photo}
            alt={`${doctor.name} at EverSmile Dental Clinic`}
            className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-soft sm:block">
            <p className="font-heading text-2xl font-bold text-navy-900">20+</p>
            <p className="text-xs text-navy-600">5-Star Google Reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}