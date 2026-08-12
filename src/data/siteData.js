/**
 * ============================================================
 *  EVERSMILE DENTAL CLINIC — SITE CONTENT / "CMS"
 * ============================================================
 * Every piece of editable content for the website lives in this
 * single file. Non-technical staff can hand this file to a
 * developer (or, once a real CMS/admin panel is wired up, this
 * becomes the shape of the database records) to update:
 *   - Clinic details, hours, contact info
 * - Doctor profile
 *   - Services & treatments
 *   - Testimonials
 *   - Gallery
 *   - Blog posts
 *   - FAQs
 *
 * Fields marked "PLACEHOLDER" should be replaced with real data
 * (photos, pricing, certifications, etc.) once available.
 * ============================================================
 */

export const clinic = {
  name: "EverSmile Dental Clinic",
  tagline: "Creating Healthy, Beautiful Smiles for Every Family",
  logo: "/logo-placeholder.svg",
  interiorPhoto: "/images/clinic-interior.png",
  address: {
    line1: "556, 8th Main Road, HMT Layout 2nd Block",
    line2: "Vidyaranyapura, Bengaluru, Karnataka 560097",
    full: "556, 8th Main Road, HMT Layout 2nd Block, Vidyaranyapura, Bengaluru, Karnataka 560097",
  },
  phone: "+91 80884 88718",
  phoneHref: "tel:+918088488718",
  whatsapp: "+91 80884 88718",
  whatsappHref: "https://wa.me/918088488718",
  email: "info@eversmiledental.in",
  rating: 5.0,
  reviewCount: 20,
  googleMapsEmbed:
    "https://www.google.com/maps?q=556,+8th+Main+Road,+HMT+Layout+2nd+Block,+Vidyaranyapura,+Bengaluru,+Karnataka+560097&output=embed",
  googleMapsLink:
    "https://www.google.com/maps/search/?api=1&query=556+8th+Main+Road+HMT+Layout+2nd+Block+Vidyaranyapura+Bengaluru+Karnataka+560097",
  googleBusinessProfile: "#",
  workingHours: [
    { day: "Monday", hours: "4:30 PM – 8:30 PM" },
    { day: "Tuesday", hours: "4:30 PM – 8:30 PM" },
    { day: "Wednesday", hours: "4:30 PM – 8:30 PM" },
    { day: "Thursday", hours: "4:30 PM – 8:30 PM" },
    { day: "Friday", hours: "4:30 PM – 8:30 PM" },
    { day: "Saturday", hours: "4:30 PM – 8:30 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  emergencyContact: "+91 80884 88718",
  languagesSpoken: ["English", "Hindi", "Kannada", "Telugu"],
  parkingInfo: "Two-wheeler & car parking available near the clinic premises.",
  insurance: "Cashless & reimbursement claims accepted with select insurance providers. Please call to confirm your policy.",
};

export const socialLinks = {
  instagram: "#",
  facebook: "#",
  google: clinic.googleBusinessProfile,
  whatsapp: clinic.whatsappHref,
};

export const heroContent = {
  heading: "Creating Healthy, Beautiful Smiles for Every Family",
  subtitle:
    "Providing quality dental care with advanced treatments, experienced dentists, and a patient-first approach.",
};

export const about = {
  intro:
    "EverSmile Dental Clinic is a modern dental care center in Vidyaranyapura, Bengaluru, dedicated to delivering gentle, effective, and affordable treatments for every member of the family. From routine check-ups to advanced cosmetic and surgical procedures, our team combines clinical expertise with a warm, patient-first approach.",
  mission: [
    {
      title: "Affordable Dental Care",
      description: "Transparent, fair pricing on every treatment, with no compromise on quality.",
    },
    {
      title: "Modern Technology",
      description: "Digital diagnostics and up-to-date equipment for accurate, efficient treatment.",
    },
    {
      title: "Patient Comfort",
      description: "Gentle, pain-free procedures in a calm, welcoming environment.",
    },
    {
      title: "Long-lasting Oral Health",
      description: "Preventive guidance and follow-up care that protects your smile for years to come.",
    },
  ],
  vision:
    "To become one of the most trusted dental clinics in Bangalore — known for compassionate care, clinical excellence, and smiles that last a lifetime.",
};

export const services = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    icon: "Stethoscope",
    short: "Check-up, oral examination & consultation",
    description:
      "Comprehensive dental check-ups, oral examinations, and consultations to catch problems early and keep your mouth healthy.",
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    icon: "Sparkles",
    short: "Scaling, polishing & gum cleaning",
    description:
      "Professional scaling and polishing to remove plaque and tartar, plus gentle gum cleaning for fresher breath and healthier gums.",
  },
  {
    slug: "fillings",
    name: "Fillings",
    icon: "CircleDot",
    short: "Tooth-coloured, composite fillings",
    description:
      "Natural-looking, tooth-coloured composite fillings that restore cavities while blending seamlessly with your smile.",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    icon: "Activity",
    short: "Single & multiple sitting RCT",
    description:
      "Painless root canal therapy using rotary endodontics, completed in single or multiple sittings depending on your case.",
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    icon: "Minus",
    short: "Normal & surgical extraction",
    description:
      "Safe, comfortable extractions — from simple removals to more complex surgical procedures — with careful aftercare guidance.",
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    icon: "Scissors",
    short: "Impacted & problematic wisdom teeth",
    description:
      "Expert removal of impacted or troublesome wisdom teeth with minimal discomfort and a smooth recovery.",
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    icon: "Crown",
    short: "Zirconia, ceramic & metal crowns",
    description:
      "Durable, natural-looking crowns in zirconia, ceramic, or metal to restore the strength and shape of damaged teeth.",
  },
  {
    slug: "dental-bridges",
    name: "Dental Bridges",
    icon: "GitCommitHorizontal",
    short: "Fixed replacement for missing teeth",
    description:
      "Custom-made bridges that fill gaps left by missing teeth, restoring your bite and a confident smile.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    icon: "Anchor",
    short: "Single, multiple & full mouth implants",
    description:
      "Permanent, natural-feeling tooth replacement — from a single implant to full-mouth rehabilitation.",
  },
  {
    slug: "braces",
    name: "Braces",
    icon: "AlignCenter",
    short: "Metal & ceramic braces",
    description:
      "Effective teeth-straightening with metal or discreet ceramic braces, tailored to your orthodontic needs.",
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    icon: "Square",
    short: "Invisible, removable aligners",
    description:
      "Virtually invisible, removable aligners that straighten teeth comfortably without metal wires or brackets.",
  },
  {
    slug: "smile-designing",
    name: "Smile Designing",
    icon: "Smile",
    short: "Complete smile makeovers",
    description:
      "A customised combination of cosmetic treatments designed to give you the smile you've always wanted.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    icon: "Sun",
    short: "Professional in-clinic whitening",
    description:
      "Safe, professional whitening treatments that brighten your smile by several shades in a single visit.",
  },
  {
    slug: "veneers",
    name: "Veneers",
    icon: "Layers",
    short: "Porcelain & composite veneers",
    description:
      "Thin, custom shells bonded to teeth to correct chips, gaps, discolouration, and uneven shapes.",
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    icon: "Baby",
    short: "Gentle dental care for children",
    description:
      "Friendly, gentle dental care designed specifically for infants, children, and teenagers.",
  },
  {
    slug: "gum-treatments",
    name: "Gum Treatments",
    icon: "HeartPulse",
    short: "Periodontal & gum disease care",
    description:
      "Diagnosis and treatment of gum disease, bleeding gums, and periodontal issues to protect the foundation of your teeth.",
  },
  {
    slug: "dentures",
    name: "Dentures",
    icon: "Grip",
    short: "Complete & partial dentures",
    description:
      "Comfortable, custom-fitted complete or partial dentures that restore function and a natural appearance.",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    icon: "Siren",
    short: "Urgent dental care when you need it",
    description:
      "Prompt care for dental emergencies — severe pain, trauma, broken teeth, and more.",
  },
];

export const whyChooseUs = [
  { title: "Experienced Dentist", icon: "GraduationCap", description: "Skilled, experienced clinicians you can trust." },
  { title: "Latest Equipment", icon: "Cpu", description: "Advanced diagnostic and treatment technology." },
  { title: "Sterilized Instruments", icon: "ShieldCheck", description: "Strict sterilization protocols for your safety." },
  { title: "Pain-free Treatments", icon: "Feather", description: "Gentle techniques focused on your comfort." },
  { title: "Affordable Pricing", icon: "IndianRupee", description: "Transparent, fair pricing on all treatments." },
  { title: "Personalized Care", icon: "UserCheck", description: "Treatment plans tailored to your unique needs." },
  { title: "Friendly Environment", icon: "Smile", description: "A warm, welcoming clinic for the whole family." },
  { title: "Convenient Location", icon: "MapPin", description: "Easy to reach, right in Vidyaranyapura." },
  { title: "Flexible Appointment Timing", icon: "CalendarClock", description: "Evening hours that fit your schedule." },
];

export const treatmentProcess = [
  { step: 1, title: "Book Appointment", description: "Schedule your visit online, by phone, or via WhatsApp.", icon: "CalendarPlus" },
  { step: 2, title: "Consultation", description: "Discuss your concerns with our dentist in a comfortable setting.", icon: "MessageSquare" },
  { step: 3, title: "Diagnosis", description: "Thorough examination and diagnostics to understand your needs.", icon: "Search" },
  { step: 4, title: "Treatment Plan", description: "A clear, customised plan with transparent costs and timelines.", icon: "ClipboardList" },
  { step: 5, title: "Procedure", description: "Gentle, precise treatment using modern techniques.", icon: "Syringe" },
  { step: 6, title: "Follow-up Care", description: "Ongoing guidance to protect your results long-term.", icon: "CalendarCheck" },
];

export const galleryCategories = [
  { id: "whitening", name: "Teeth Whitening", images: [] },
  { id: "smile-makeover", name: "Smile Makeover", images: [] },
  { id: "implants", name: "Dental Implants", images: [] },
  { id: "braces", name: "Braces", images: [] },
  { id: "veneers", name: "Veneers", images: [] },
];

export const testimonials = [
  {
    name: "Anita R.",
    rating: 5,
    text: "Very professional doctor and friendly staff. Explained everything clearly before starting treatment.",
    source: "Google Review",
  },
  {
    name: "Ramesh K.",
    rating: 5,
    text: "Clean clinic and painless treatment. My root canal was much easier than I expected.",
    source: "Google Review",
  },
  {
    name: "Divya S.",
    rating: 5,
    text: "Excellent experience from start to finish. Highly recommend EverSmile for the whole family.",
    source: "Google Review",
  },
  {
    name: "Manoj P.",
    rating: 5,
    text: "Booked an evening slot easily and was seen right on time. Great communication throughout.",
    source: "Google Review",
  },
];

export const doctor = {
  name: "Dr. Jincy Samuel",
  qualification: "Dental surgeon",
  experience: "20+ Years of Experience",
  specializations: ["General Dentistry", "Cosmetic Dentistry", "Root Canal Treatment"],
  photo: "/images/dental-photo.png",
  professionalPhoto: "/images/doctor-photo2.jpg",
  };

export const technology = [
  { name: "Digital X-Ray", icon: "ScanLine", description: "Fast, low-radiation imaging for accurate diagnosis." },
  { name: "RVG", icon: "Radar", description: "Radiovisiography for instant, detailed dental images." },
  { name: "Rotary Endodontics", icon: "RotateCw", description: "Precise, efficient root canal treatment." },
  { name: "Laser Dentistry", icon: "Zap", description: "Minimally invasive, precise laser-assisted procedures." },
  { name: "Intraoral Camera", icon: "Camera", description: "See exactly what your dentist sees, in real time." },
  { name: "Autoclave Sterilization", icon: "ShieldCheck", description: "Hospital-grade sterilization of every instrument." },
];

export const faqs = [
  {
    question: "How often should I visit a dentist?",
    answer:
      "We recommend a dental check-up and cleaning every six months. Regular visits help catch issues early, before they become painful or expensive to treat.",
  },
  {
    question: "Does root canal treatment hurt?",
    answer:
      "Modern root canal treatment is performed under local anaesthesia and is generally painless. Most patients report feeling far less discomfort than expected, and any mild soreness afterward is easily managed.",
  },
  {
    question: "How long do dental implants last?",
    answer:
      "With proper care and regular check-ups, dental implants can last 15–25 years or even a lifetime, making them one of the most durable tooth replacement options available.",
  },
  {
    question: "Are clear aligners better than braces?",
    answer:
      "Both are effective for straightening teeth. Clear aligners are removable and nearly invisible, ideal for mild-to-moderate cases, while braces can handle more complex alignment issues. We'll help you choose the best fit during a consultation.",
  },
  {
    question: "How much does teeth whitening cost?",
    answer:
      "Pricing depends on the whitening method and the current condition of your teeth. Contact the clinic for a personalised quote after a quick evaluation.",
  },
  {
    question: "Can children visit the dentist?",
    answer:
      "Absolutely. We provide gentle, child-friendly pediatric dental care, including check-ups, cleanings, and preventive treatments for kids of all ages.",
  },
  {
    question: "Do you provide emergency treatment?",
    answer:
      "Yes, we offer emergency dental care for severe pain, trauma, broken teeth, and other urgent issues. Call us directly for the fastest response.",
  },
];

export const blogPosts = [
  {
    slug: "10-tips-for-healthy-teeth",
    title: "10 Tips for Healthy Teeth",
    excerpt: "Simple daily habits that protect your teeth and gums for a lifetime of healthy smiles.",
    category: "Oral Hygiene",
    date: "2026-06-01",
    content:
      "Maintaining healthy teeth starts with consistent daily habits: brushing twice a day with fluoride toothpaste, flossing daily, limiting sugary snacks, staying hydrated, and visiting your dentist every six months. Using a soft-bristled brush, replacing it every three months, and avoiding tobacco also go a long way in protecting your smile for years to come.",
  },
  {
    slug: "signs-you-need-a-root-canal",
    title: "Signs You Need a Root Canal",
    excerpt: "Persistent tooth pain? Here are the warning signs that shouldn't be ignored.",
    category: "Treatments",
    date: "2026-05-20",
    content:
      "Common signs that you may need a root canal include prolonged sensitivity to hot or cold, severe toothache when chewing, swollen or tender gums, a darkening tooth, and a recurring pimple on the gums. If you notice any of these symptoms, schedule a consultation promptly — early treatment is more comfortable and prevents further damage.",
  },
  {
    slug: "benefits-of-dental-implants",
    title: "Benefits of Dental Implants",
    excerpt: "Why implants are considered the gold standard for replacing missing teeth.",
    category: "Treatments",
    date: "2026-05-05",
    content:
      "Dental implants look, feel, and function like natural teeth. They preserve jawbone density, don't rely on neighbouring teeth for support (unlike bridges), and can last decades with proper care. For patients missing one or more teeth, implants offer a long-term, confidence-restoring solution.",
  },
  {
    slug: "how-to-prevent-cavities",
    title: "How to Prevent Cavities",
    excerpt: "Practical steps to keep tooth decay at bay, for kids and adults alike.",
    category: "Oral Hygiene",
    date: "2026-04-18",
    content:
      "Cavities form when plaque bacteria feed on sugars and produce acid that erodes enamel. Preventing them means brushing twice daily, flossing, reducing sugary and acidic foods, drinking water after meals, and using fluoride treatments where recommended. Regular dental check-ups help catch early decay before it needs a filling.",
  },
  {
    slug: "braces-vs-aligners",
    title: "Braces vs Aligners",
    excerpt: "Comparing traditional braces and clear aligners to help you choose the right option.",
    category: "Orthodontics",
    date: "2026-04-02",
    content:
      "Braces use brackets and wires to gradually shift teeth and are effective for complex misalignments. Clear aligners are removable, nearly invisible trays best suited for mild-to-moderate corrections. Your choice depends on the complexity of your case, lifestyle, and aesthetic preference — our team can guide you after an assessment.",
  },
  {
    slug: "wisdom-tooth-removal-guide",
    title: "Wisdom Tooth Removal Guide",
    excerpt: "What to expect before, during, and after wisdom tooth extraction.",
    category: "Treatments",
    date: "2026-03-15",
    content:
      "Wisdom teeth often become impacted due to lack of space, leading to pain, infection, or crowding. Removal is typically done under local anaesthesia, with recovery involving mild swelling for a few days. Following your dentist's aftercare instructions — soft foods, gentle rinsing, and rest — ensures smooth healing.",
  },
  {
    slug: "foods-that-damage-teeth",
    title: "Foods That Damage Teeth",
    excerpt: "Common foods and drinks that quietly harm your enamel — and what to eat instead.",
    category: "Oral Hygiene",
    date: "2026-03-01",
    content:
      "Sticky sweets, sugary sodas, citrus fruits, ice, and starchy chips can all contribute to enamel erosion and cavities over time. Balancing these with tooth-friendly choices like dairy, leafy greens, nuts, and plenty of water helps protect your smile between dental visits.",
  },
  {
    slug: "how-often-should-you-visit-a-dentist",
    title: "How Often Should You Visit a Dentist?",
    excerpt: "A closer look at why twice-yearly check-ups matter more than you think.",
    category: "Oral Hygiene",
    date: "2026-02-14",
    content:
      "Most dentists recommend a check-up every six months, though patients with gum disease, high cavity risk, or ongoing treatment may need more frequent visits. Regular check-ups allow early detection of issues, professional cleaning that home care can't replicate, and personalised advice for your oral health.",
  },
  {
    slug: "teeth-whitening-myths",
    title: "Teeth Whitening Myths",
    excerpt: "Separating fact from fiction when it comes to brightening your smile safely.",
    category: "Cosmetic Dentistry",
    date: "2026-01-28",
    content:
      "Myth: whitening damages enamel — in reality, professional whitening under dental supervision is safe. Myth: whitening works the same for everyone — results vary based on the original shade and cause of discolouration. Myth: DIY kits are as effective as in-clinic treatments — professional treatments are typically faster and longer-lasting with more predictable results.",
  },
  {
    slug: "importance-of-childrens-dental-care",
    title: "Importance of Children's Dental Care",
    excerpt: "Building healthy habits early sets children up for a lifetime of good oral health.",
    category: "Pediatric Dentistry",
    date: "2026-01-10",
    content:
      "Early dental visits help children get comfortable with dental care, allow dentists to monitor development, and catch issues like early decay or bite problems. Teaching kids to brush and floss properly, along with limiting sugary snacks, builds habits that protect both baby and permanent teeth.",
  },
];

export const appointmentTreatmentOptions = services.map((s) => s.name);