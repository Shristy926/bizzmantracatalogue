import { useLocation } from "react-router-dom";

const pageHeadings: Record<string, string> = {
  "/": "Welcome to Bizzmantra",
  "/about": "About Us",
  "/industries": "Industries",
  "/contact": "Contact Us"
};

export default function PageHeader() {
  const location = useLocation();
  const heading = pageHeadings[location.pathname] || "Bizzmantra";

  return (
    <section className="background">
      <div className="hero-overlay">
        <div className="container text-white">
          <h1 className="display-4">{heading}</h1>
          <p className="lead">
            Smart Fleet Management Solutions for Modern Businesses
          </p>
        </div>
      </div>
    </section>
  );
}
