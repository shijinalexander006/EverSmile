import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon.jsx";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-navy-200 hover:shadow-soft"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-navy-900 group-hover:text-gold-400">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold text-navy-900">{service.name}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-navy-600/80">
        {service.description || service.short}
      </p>
      <Link
        to="/book-appointment"
        className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-gold-500"
      >
        Book this treatment
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
