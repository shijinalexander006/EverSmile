# EverSmile Dental Clinic — Website

A modern, responsive, SEO-optimized website for EverSmile Dental Clinic (Vidyaranyapura, Bengaluru).

## Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS (navy blue / white premium healthcare palette)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v7
- **Forms:** React Hook Form
- **SEO:** react-helmet-async + JSON-LD structured data, sitemap.xml, robots.txt
- **Backend (optional):** Node.js + Express, in `/backend`
- **Database (optional):** MongoDB Atlas (Mongoose)
- **Image storage (optional):** Cloudinary
- **Deployment:** Vercel (frontend), Render (backend)

## Getting started (frontend)

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

The site works fully as a **static frontend** out of the box — the appointment form
will log submissions to the console if no backend is configured. To connect the
optional backend, copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to your
deployed API URL.

## Getting started (optional backend)

```bash
cd backend
npm install
cp .env.example .env   # fill in MongoDB Atlas + Cloudinary credentials
npm run dev
```

Endpoints:
- `POST /api/appointments` — save an appointment request
- `GET /api/appointments` — list appointment requests
- `POST /api/contact` — save a contact form message
- `POST /api/uploads` — upload an image to Cloudinary (multipart `image` field)

## Deployment

**Frontend (Vercel):**
1. Push this repo to GitHub.
2. Import the project in Vercel, framework preset "Vite".
3. Add environment variable `VITE_API_BASE_URL` (your Render backend URL) if using the backend.
4. Deploy.

**Backend (Render):**
1. Create a new Web Service pointing at the `/backend` folder.
2. Build command: `npm install`. Start command: `npm start`.
3. Add environment variables from `backend/.env.example` (MongoDB Atlas URI, Cloudinary keys, `CLIENT_ORIGIN` set to your Vercel domain).
4. Deploy.

## Editing content (simple CMS-style approach)

All editable content lives in **`src/data/siteData.js`** — a single file containing:

- Clinic info, address, phone, hours, socials
- Doctor profile (name, qualification, experience, registration number, bio)
- Services (all 17 treatments with icons & descriptions)
- Why Choose Us, Treatment Process steps, Technology list
- Testimonials, FAQs
- Blog posts (10 articles)
- Gallery categories

Fields marked `// PLACEHOLDER` should be updated once real data (photos, pricing,
certifications, exact doctor details) is available. No code changes are required
elsewhere in the site — every page imports from this file.

### Adding real photos

Photo spots currently render a dashed placeholder (`ImagePlaceholder` component).
To add a real photo, replace the `<ImagePlaceholder .../>` usage with a normal
`<img src="..." alt="..." />`, or wire the image path into `siteData.js` and swap
the component. If using the optional backend, upload images via `POST /api/uploads`
(Cloudinary) and store the returned URL in `siteData.js`.

### Sections still needing real content

- Clinic logo (`clinic.logo` in siteData.js)
- Doctor profile & photo
- Interior/exterior, team, and treatment photos (Gallery)
- Pricing details
- Awards & certifications
- Insurance/payment options (partially filled — confirm details)
- Real Google review author names/consent
- Social media links (Instagram, Facebook, Google Business Profile)
- WhatsApp number confirmation, email address
- Google Maps link confirmation

## Project structure

```
src/
  data/siteData.js        content "CMS"
  components/              shared UI (Navbar, Footer, cards, forms, etc.)
  pages/                    one file per route
backend/                   optional Express + MongoDB + Cloudinary API
public/                    robots.txt, sitemap.xml, favicon
```
