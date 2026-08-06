import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import SEO from "../components/SEO.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import BlogCard from "../components/BlogCard.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { blogPosts } from "../data/siteData.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="section-y">
        <div className="container-x max-w-3xl">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-gold-500">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-4 flex items-center gap-4 text-xs text-navy-500">
            <span className="inline-flex items-center gap-1">
              <Tag className="h-3.5 w-3.5" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </span>
          </div>

          <h1 className="mb-6 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">{post.title}</h1>

          <ImagePlaceholder label={post.title} className="mb-8 aspect-[16/9] w-full" />

          <p className="text-lg leading-relaxed text-navy-700">{post.content}</p>
        </div>
      </article>

      {fallbackRelated.length > 0 && (
        <section className="section-y bg-navy-50/60">
          <div className="container-x">
            <h2 className="mb-8 font-heading text-2xl font-bold text-navy-900">More Articles</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fallbackRelated.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
