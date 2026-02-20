import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface SitemapSection {
  title: string;
  links: { label: string; path: string }[];
}

const SITEMAP_SECTIONS: SitemapSection[] = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", path: "/" },
      { label: "Browse Meals", path: "/browse-meals" },
      { label: "Basket", path: "/basket" },
      { label: "Checkout", path: "/checkout" },
      { label: "Order Confirmation", path: "/order-confirmation" },
      { label: "Track Order", path: "/track-order" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About Us", path: "/about-us" },
      { label: "About Our Food", path: "/about-our-food" },
      { label: "How To Get Started", path: "/how-to-get-started" },
      { label: "Softer Foods Menu", path: "/softer-foods-menu" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", path: "/contact" },
      { label: "FAQs", path: "/faqs" },
      { label: "Request Brochure", path: "/request-brochure" },
      { label: "Jobs", path: "/jobs" },
      { label: "Blog", path: "/blog" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign In", path: "/signin" },
      { label: "Register", path: "/register" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", path: "/terms-conditions" },
      { label: "Privacy & Cookie Policy", path: "/privacy-cookie-policy" },
      { label: "Cookie Policy", path: "/cookie-policy" },
      { label: "Data Protection Policy", path: "/data-protection-policy" },
    ],
  },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            SITEMAP
          </h1>

          <p className="text-foreground mb-8 text-center">
            Find your way around our website with this complete list of all our pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITEMAP_SECTIONS.map((section, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-gold">
                <h2 className="text-lg font-bold text-primary mb-4 border-b border-gold/30 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-foreground hover:text-primary transition-colors hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground mb-4">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded hover:bg-gold-dark transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
