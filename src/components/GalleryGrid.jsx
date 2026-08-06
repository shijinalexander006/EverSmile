import { useState } from "react";
import { motion } from "framer-motion";
import { galleryCategories } from "../data/siteData.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function GalleryGrid() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? galleryCategories : galleryCategories.filter((c) => c.id === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            active === "all" ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-700 hover:bg-navy-100"
          }`}
        >
          All
        </button>
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === cat.id ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-700 hover:bg-navy-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {filtered.map((cat) => (
        <div key={cat.id} className="mb-10">
          <h3 className="mb-4 font-heading text-xl font-semibold text-navy-900">{cat.name}</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <ImagePlaceholder
                  label={`${cat.name} photo ${i + 1}`}
                  className="aspect-square w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
