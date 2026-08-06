import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`mb-2 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide ${
            light ? "bg-white/10 text-gold-400" : "bg-navy-50 text-navy-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed ${light ? "text-white/75" : "text-navy-600/80"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
