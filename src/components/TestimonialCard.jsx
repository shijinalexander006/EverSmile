import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
      className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-card"
    >
      <Quote className="mb-3 h-8 w-8 text-navy-100" />
      <div className="mb-3 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-navy-700">&ldquo;{testimonial.text}&rdquo;</p>
      <div>
        <p className="font-heading text-sm font-semibold text-navy-900">{testimonial.name}</p>
        <p className="text-xs text-navy-500">{testimonial.source}</p>
      </div>
    </motion.div>
  );
}
