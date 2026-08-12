import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Hero from "../components/Hero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import WhyChooseCard from "../components/WhyChooseCard.jsx";
import ProcessSteps from "../components/ProcessSteps.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import TechCard from "../components/TechCard.jsx";
import DoctorCard from "../components/DoctorCard.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import CTABanner from "../components/CTABanner.jsx";
import {
  services,
  whyChooseUs,
  testimonials,
  technology,
  faqs,
  about,
  clinic,
} from "../data/siteData.js";

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredFaqs = faqs.slice(0, 5);

  return (
    <>
      <SEO
        title="Best Dentist in Vidyaranyapura, Bangalore"
        description="EverSmile Dental Clinic offers root canal treatment, dental implants, teeth whitening, braces & smile makeovers in Vidyaranyapura, Bengaluru. 5.0-rated clinic. Book now."
        path="/"
      />
      <Hero />

      {/* About preview */}
      <section className="section-y">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <img
            src={clinic.interiorPhoto}
            alt="EverSmile Dental Clinic interior"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
          />
          <div>
            <SectionHeading eyebrow="About EverSmile" title="Trusted Dental Care in Vidyaranyapura" center={false} />
            <p className="text-navy-600/90">{about.intro}</p>
            <Link to="/about" className="mt-5 inline-flex items-center gap-1 font-semibold text-navy-700 hover:text-gold-500">
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-y bg-navy-50/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Dental Treatments"
            subtitle="From routine check-ups to full smile makeovers, we offer complete dental care under one roof."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-navy">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Care Designed Around You"
            subtitle="Every visit at EverSmile is built on comfort, precision, and honest communication."
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <WhyChooseCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y bg-navy-900">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="How It Works"
            title="Your Treatment Journey"
            subtitle="A simple, transparent process from your first call to lasting results."
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Doctor */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Meet the Doctor" title="Experienced, Caring, Dedicated to Your Smile" />
          <DoctorCard />
        </div>
      </section>

      {/* Technology */}
      <section className="section-y bg-navy-50/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technology"
            title="Advanced Equipment for Precise Care"
            subtitle="We invest in modern dental technology to make treatments faster, safer, and more comfortable."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technology.map((t, i) => (
              <TechCard key={t.name} tech={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Patients Say"
            subtitle={`Rated ${testimonials[0] ? "5.0" : ""}/5 by our patients on Google.`}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="font-semibold text-navy-700 hover:text-gold-500">
              Read more reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section-y bg-navy-50/60">
        <div className="container-x">
          <SectionHeading eyebrow="FAQs" title="Common Questions, Clear Answers" />
          <FAQAccordion faqs={featuredFaqs} />
          <div className="mt-8 text-center">
            <Link to="/faqs" className="font-semibold text-navy-700 hover:text-gold-500">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}