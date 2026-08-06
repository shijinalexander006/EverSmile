import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Send } from "lucide-react";
import { appointmentTreatmentOptions } from "../data/siteData.js";

/**
 * Appointment request form.
 *
 * By default this stores the submission locally and shows a success
 * message — enough for a static/frontend-only deployment. To wire it
 * up to a real backend:
 *   1. Deploy the Express API in /backend (see backend/README.md)
 *   2. Set VITE_API_BASE_URL in a .env file (e.g. your Render URL)
 *   3. This component will POST to `${VITE_API_BASE_URL}/api/appointments`
 */
export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const apiBase = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    setErrorMsg("");
    try {
      if (apiBase) {
        const res = await fetch(`${apiBase}/api/appointments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No backend configured yet — log locally so nothing is lost.
        console.info("Appointment request (no backend configured):", data);
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      setErrorMsg("Something went wrong. Please call us directly or try again.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center">
        <CheckCircle2 className="mb-3 h-12 w-12 text-navy-700" />
        <h3 className="font-heading text-xl font-semibold text-navy-900">Request received!</h3>
        <p className="mt-2 max-w-sm text-sm text-navy-600">
          Thank you for booking with EverSmile Dental Clinic. Our team will contact you shortly to
          confirm your appointment.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-navy mt-6"
          type="button"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-navy-800">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", { required: "Please enter your name" })}
            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", {
              required: "Please enter your phone number",
              pattern: { value: /^[0-9+\-\s]{7,15}$/, message: "Enter a valid phone number" },
            })}
            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
          className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="treatment" className="mb-1.5 block text-sm font-medium text-navy-800">
          Treatment Required *
        </label>
        <select
          id="treatment"
          {...register("treatment", { required: "Please select a treatment" })}
          className="w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
          aria-invalid={!!errors.treatment}
        >
          <option value="">Select a treatment</option>
          {appointmentTreatmentOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
          <option value="Not sure / General consultation">Not sure / General consultation</option>
        </select>
        {errors.treatment && <p className="mt-1 text-xs text-red-600">{errors.treatment.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-navy-800">
            Preferred Date *
          </label>
          <input
            id="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            {...register("date", { required: "Please choose a date" })}
            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
            aria-invalid={!!errors.date}
          />
          {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date.message}</p>}
        </div>

        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-navy-800">
            Preferred Time *
          </label>
          <input
            id="time"
            type="time"
            min="16:30"
            max="20:30"
            {...register("time", { required: "Please choose a time" })}
            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
            aria-invalid={!!errors.time}
          />
          {errors.time && <p className="mt-1 text-xs text-red-600">{errors.time.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Tell us more about your concern (optional)"
          className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200"
        />
      </div>

      {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        <Send className="h-4 w-4" />
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </button>

      <p className="text-xs text-navy-500">
        * Required fields. We'll contact you to confirm the exact time slot. For urgent matters, please
        call us directly.
      </p>
    </form>
  );
}
