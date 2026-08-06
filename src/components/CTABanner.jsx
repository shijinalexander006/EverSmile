import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";
import { clinic } from "../data/siteData.js";

export default function CTABanner() {
  return (
    <section className="bg-gold-500">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Ready for a healthier, brighter smile?
          </h2>
          <p className="mt-1 text-navy-900/80">
            Book your appointment today or call us to speak with our team.
          </p>
        </div>
        <div className="flex flex-none flex-wrap justify-center gap-3">
          <Link to="/book-appointment" className="btn-navy">
            <Calendar className="h-5 w-5" />
            Book Appointment
          </Link>
          <a href={clinic.phoneHref} className="btn-outline !border-navy-900 !text-navy-900 hover:!bg-navy-900 hover:!text-white">
            <Phone className="h-5 w-5" />
            {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
