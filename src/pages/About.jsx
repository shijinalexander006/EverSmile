import { Target, Eye } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import DoctorCard from "../components/DoctorCard.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { about } from "../data/siteData.js";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about EverSmile Dental Clinic in Vidyaranyapura, Bengaluru — our mission, vision, and patient-first approach to dental care."
        path="/about"
      />
      <PageHero
        breadcrumb="About Us"
        title="Dedicated to Healthy, Beautiful Smiles"
        subtitle="Get to know the clinic, our mission, and the values that guide every treatment we provide."
      />

      <section className="section-y">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ImagePlaceholder label="Clinic exterior / interior photo" className="aspect-[4/3] w-full" />
          <div>
            <SectionHeading eyebrow="Who We Are" title="About EverSmile Dental Clinic" center={false} />
            <p className="text-navy-600/90">{about.intro}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-navy-50/60">
        <div className="container-x grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-4 font-heading text-xl font-bold text-navy-900">Our Mission</h3>
            <ul className="space-y-3">
              {about.mission.map((m) => (
                <li key={m.title}>
                  <p className="font-semibold text-navy-800">{m.title}</p>
                  <p className="text-sm text-navy-600/80">{m.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-navy-900 p-8 text-white shadow-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-gold-400">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mb-4 font-heading text-xl font-bold">Our Vision</h3>
            <p className="text-white/80">{about.vision}</p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Meet the Doctor" title="Experienced, Caring, Dedicated to Your Smile" />
          <DoctorCard />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
