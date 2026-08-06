import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { services } from "../data/siteData.js";

export default function Services() {
  return (
    <>
      <SEO
        title="Dental Services"
        description="Explore all dental services at EverSmile Dental Clinic, Vidyaranyapura, Bengaluru — general dentistry, root canal, implants, braces, whitening, veneers and more."
        path="/services"
      />
      <PageHero
        breadcrumb="Services"
        title="Complete Dental Care, All in One Place"
        subtitle="From preventive check-ups to advanced cosmetic and surgical treatments — explore everything we offer."
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
