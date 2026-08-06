import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function BlogCard({ post, index = 0 }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
    >
      <ImagePlaceholder label={post.title} className="aspect-[16/10] w-full rounded-none border-0" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-3 text-xs text-navy-500">
          <span className="inline-flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </span>
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold text-navy-900">{post.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-navy-600/80">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-gold-500"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
