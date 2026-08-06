import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import BlogCard from "../components/BlogCard.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { blogPosts } from "../data/siteData.js";

export default function Blog() {
  return (
    <>
      <SEO
        title="Dental Health Blog"
        description="Tips and guides on oral hygiene, root canal treatment, dental implants, braces vs aligners, and more from EverSmile Dental Clinic, Bengaluru."
        path="/blog"
      />
      <PageHero
        breadcrumb="Blog"
        title="Dental Health Tips & Guides"
        subtitle="Helpful articles from our team to keep your smile healthy between visits."
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
