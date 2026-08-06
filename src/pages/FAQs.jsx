import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { faqs } from "../data/siteData.js";

export default function FAQs() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about root canal treatment, dental implants, clear aligners, teeth whitening, and more at EverSmile Dental Clinic."
        path="/faqs"
      />
      <PageHero
        breadcrumb="FAQs"
        title="Frequently Asked Questions"
        subtitle="Straight answers to the questions we hear most often from patients."
      />

      <section className="section-y">
        <div className="container-x">
          <FAQAccordion faqs={faqs} allowMultiple />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
