import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = title
    ? `${title} | EverSmile Dental Clinic`
    : "EverSmile Dental Clinic | Best Dentist in Vidyaranyapura, Bangalore";
  const url = `https://www.eversmiledental.in${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
