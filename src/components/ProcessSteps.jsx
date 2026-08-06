import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { treatmentProcess } from "../data/siteData.js";

export default function ProcessSteps() {
  return (
    <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {treatmentProcess.map((step, i) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="relative flex flex-col items-center rounded-2xl bg-navy-900 p-6 text-center text-white"
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-3 py-0.5 text-xs font-bold text-navy-900">
            Step {step.step}
          </span>
          <div className="mb-3 mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold-400">
            <Icon name={step.icon} className="h-6 w-6" />
          </div>
          <h3 className="mb-1 font-heading text-sm font-semibold">{step.title}</h3>
          <p className="text-xs text-white/70">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
