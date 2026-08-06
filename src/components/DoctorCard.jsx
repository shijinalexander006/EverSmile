import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BadgeCheck } from "lucide-react";
import { doctor } from "../data/siteData.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function DoctorCard() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <ImagePlaceholder label="Doctor professional photo" className="aspect-[3/4] w-full max-w-sm mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-heading text-2xl font-bold text-navy-900">{doctor.name}</h3>
        <p className="mt-1 font-medium text-gold-500">{doctor.qualification}</p>
        <p className="mt-4 text-navy-600/90">{doctor.bio}</p>

        <ul className="mt-6 space-y-3 text-sm text-navy-700">
          <li className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 flex-none text-navy-500" />
            {doctor.experience}
          </li>
          <li className="flex items-start gap-3">
            <GraduationCap className="h-5 w-5 flex-none text-navy-500" />
            <span>Specializations: {doctor.specializations.join(", ")}</span>
          </li>
          <li className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 flex-none text-navy-500" />
            Registration No: {doctor.registrationNumber}
          </li>
          <li className="flex items-center gap-3">
            <Award className="h-5 w-5 flex-none text-navy-500" />
            Awards & certifications — to be added
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
