import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";
import TechCard from "../components/TechCard.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { services, technology } from "../data/siteData.js";

const categories = [
  {
    title: "Preventive & General Care",
    slugs: ["general-dentistry", "teeth-cleaning", "gum-treatments"],
  },
  {
    title: "Restorative Treatments",
    slugs: ["fillings", "root-canal-treatment", "dental-crowns", "dental-bridges", "dentures"],
  },
  {
    title: "Surgical Treatments",
    slugs: ["tooth-extraction", "wisdom-tooth-removal", "dental-implants"],
  },
  {
    title: "Orthodontic Treatments",
    slugs: ["braces", "clear-aligners"],
  },
  {
    title: "Cosmetic Dentistry",
    slugs: ["smile-designing", "teeth-whitening", "veneers"],
  },
  {
    title: "Pediatric & Emergency Care",
    slugs: ["pediatric-dentistry", "emergency-dentistry"],
  },
];

export default function Treatments() {
  return (
    <>
      <SEO
        title="Treatments & Treatment Process"
        description="Discover EverSmile Dental Clinic's treatment categories and step-by-step process, from consultation to follow-up care, in Vidyaranyapura, Bengaluru."
        path="/treatments"
      />
      <PageHero
        breadcrumb="Treatments"
        title="Our Treatments, Organised for You"
        subtitle="Browse treatments by category, and see exactly what to expect at every step of your visit."
      />

      <section className="section-y bg-navy-900">
        <div className="container-x">
          <SectionHeading light eyebrow="Treatment Process" title="What Happens During Your Visit" />
          <ProcessSteps />
        </div>
      </section>

      {categories.map((cat, idx) => {
        const items = services.filter((s) => cat.slugs.includes(s.slug));
        return (
          <section key={cat.title} className={`section-y ${idx % 2 === 1 ? "bg-navy-50/60" : ""}`}>
            <div className="container-x">
              <SectionHeading title={cat.title} center={false} />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                  <ServiceCard key={s.slug} service={s} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technology"
            title="Advanced Equipment for Precise Treatments"
            subtitle="Modern tools that make every treatment more accurate, comfortable, and efficient."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technology.map((t, i) => (
              <TechCard key={t.name} tech={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
