import { Phone, MessageCircle, Clock } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AppointmentForm from "../components/AppointmentForm.jsx";
import { clinic } from "../data/siteData.js";

export default function BookAppointment() {
  return (
    <>
      <SEO
        title="Book Appointment"
        description="Book your dental appointment online at EverSmile Dental Clinic, Vidyaranyapura, Bengaluru. Choose your treatment, date, and preferred time."
        path="/book-appointment"
      />
      <PageHero
        breadcrumb="Book Appointment"
        title="Book Your Appointment"
        subtitle="Fill in your details below and our team will confirm your slot shortly."
      />

      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <SectionHeading eyebrow="Appointment Request" title="Tell Us About Your Visit" center={false} />
              <AppointmentForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-card">
              <h3 className="mb-4 font-heading text-lg font-semibold">Prefer to talk?</h3>
              <div className="space-y-3">
                <a href={clinic.phoneHref} className="flex items-center gap-3 text-sm hover:text-gold-400">
                  <Phone className="h-5 w-5 text-gold-400" />
                  {clinic.phone}
                </a>
                <a
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-gold-400"
                >
                  <MessageCircle className="h-5 w-5 text-gold-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="mb-3 flex items-center gap-2 font-heading text-lg font-semibold text-navy-900">
                <Clock className="h-5 w-5 text-navy-700" />
                Working Hours
              </h3>
              <ul className="space-y-1 text-sm text-navy-600/90">
                {clinic.workingHours.map((wh) => (
                  <li key={wh.day} className="flex justify-between gap-6">
                    <span>{wh.day}</span>
                    <span>{wh.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-navy-50 p-6">
              <h3 className="mb-2 font-heading text-sm font-semibold text-navy-900">Emergency?</h3>
              <p className="text-sm text-navy-600/90">
                Call us directly at{" "}
                <a href={clinic.phoneHref} className="font-semibold text-navy-800">
                  {clinic.emergencyContact}
                </a>{" "}
                for urgent dental care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
