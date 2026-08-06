import { MapPin, Phone, Clock, MessageCircle, Mail, ParkingCircle, Languages } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AppointmentForm from "../components/AppointmentForm.jsx";
import { clinic } from "../data/siteData.js";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Visit or contact EverSmile Dental Clinic in Vidyaranyapura, Bengaluru. Address, phone, working hours, WhatsApp, and directions."
        path="/contact"
      />
      <PageHero
        breadcrumb="Contact"
        title="Get in Touch With Us"
        subtitle="We're here to answer your questions and help you book your next visit."
      />

      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Contact Info" title="Visit EverSmile Dental Clinic" center={false} />

            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-none text-navy-700" />
                <div>
                  <p className="font-semibold text-navy-900">Address</p>
                  <p className="text-sm text-navy-600/90">{clinic.address.full}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-none text-navy-700" />
                <div>
                  <p className="font-semibold text-navy-900">Phone</p>
                  <a href={clinic.phoneHref} className="text-sm text-navy-600/90 hover:text-gold-500">
                    {clinic.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-none text-navy-700" />
                <div>
                  <p className="font-semibold text-navy-900">Email</p>
                  <a href={`mailto:${clinic.email}`} className="text-sm text-navy-600/90 hover:text-gold-500">
                    {clinic.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 flex-none text-navy-700" />
                <div>
                  <p className="font-semibold text-navy-900">Working Hours</p>
                  <ul className="mt-1 text-sm text-navy-600/90">
                    {clinic.workingHours.map((wh) => (
                      <li key={wh.day} className="flex justify-between gap-6">
                        <span>{wh.day}</span>
                        <span>{wh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <ParkingCircle className="h-5 w-5 flex-none text-navy-700" />
                <div>
                  <p className="font-semibold text-navy-900">Parking</p>
                  <p className="text-sm text-navy-600/90">{clinic.parkingInfo}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Languages className="h-5 w-5 flex-none text-navy-700" />
                <div>
                  <p className="font-semibold text-navy-900">Languages Spoken</p>
                  <p className="text-sm text-navy-600/90">{clinic.languagesSpoken.join(", ")}</p>
                </div>
              </li>
            </ul>

            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100 shadow-card">
              <iframe
                title="EverSmile Dental Clinic location"
                src={clinic.googleMapsEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <SectionHeading eyebrow="Book a Visit" title="Send Us a Message" center={false} />
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
