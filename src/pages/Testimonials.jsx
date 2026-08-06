import { Star } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { testimonials, clinic } from "../data/siteData.js";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Patient Testimonials & Reviews"
        description="Read what patients say about EverSmile Dental Clinic — a 5.0-rated dental clinic in Vidyaranyapura, Bengaluru."
        path="/testimonials"
      />
      <PageHero
        breadcrumb="Testimonials"
        title="What Our Patients Say"
        subtitle="Real feedback from real patients across Vidyaranyapura and Bengaluru."
      />

      <section className="section-y">
        <div className="container-x">
          <div className="mb-10 flex flex-col items-center gap-2 text-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="font-heading text-2xl font-bold text-navy-900">
              {clinic.rating.toFixed(1)} out of 5
            </p>
            <p className="text-sm text-navy-600">Based on {clinic.reviewCount}+ Google reviews</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
