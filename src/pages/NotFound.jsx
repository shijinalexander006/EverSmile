import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-heading text-6xl font-bold text-navy-900">404</p>
        <h1 className="mt-3 font-heading text-2xl font-semibold text-navy-900">Page not found</h1>
        <p className="mt-2 max-w-md text-navy-600/80">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className="btn-navy mt-6">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </section>
    </>
  );
}
