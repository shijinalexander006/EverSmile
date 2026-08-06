import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import GalleryGrid from "../components/GalleryGrid.jsx";
import CTABanner from "../components/CTABanner.jsx";

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="See before-and-after results from EverSmile Dental Clinic — teeth whitening, smile makeovers, dental implants, braces, and veneers in Bengaluru."
        path="/gallery"
      />
      <PageHero
        breadcrumb="Gallery"
        title="Smiles We're Proud Of"
        subtitle="Photos will be added here soon — browse by category to see the range of treatments we offer."
      />

      <section className="section-y">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
