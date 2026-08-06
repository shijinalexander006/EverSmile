import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

export default function TechCard({ tech, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card"
    >
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-900 text-gold-400">
        <Icon name={tech.icon} className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-heading text-sm font-semibold text-navy-900">{tech.name}</h3>
        <p className="mt-1 text-xs text-navy-600/80">{tech.description}</p>
      </div>
    </motion.div>
  );
}
