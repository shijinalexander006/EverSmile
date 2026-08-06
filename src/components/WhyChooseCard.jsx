import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

export default function WhyChooseCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 9) * 0.04 }}
      className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-400">
        <Icon name={item.icon} className="h-6 w-6" />
      </div>
      <h3 className="mb-1 font-heading text-base font-semibold text-navy-900">{item.title}</h3>
      <p className="text-sm text-navy-600/80">{item.description}</p>
    </motion.div>
  );
}
