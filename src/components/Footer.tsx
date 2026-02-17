import { useState } from "react";
import { Facebook } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-cream-dark pt-10 pb-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Newsletter */}
        <div className="mb-8">
          <div className="flex max-w-md mx-auto lg:mx-0 border-2 border-gold rounded-sm overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-card text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button className="bg-secondary text-secondary-foreground font-bold px-6 hover:bg-gold-dark transition-colors">
              Sign up
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto lg:mx-0">
            We will keep your information safe and not sell it on to third parties.
            Read more about how we handle your data in our{" "}
            <a href="#" className="underline">Data Protection Policy</a>.
          </p>
        </div>

        {/* Social */}
        <div className="flex gap-3 mb-8 justify-center lg:justify-start">
          <a href="#" className="bg-foreground text-card rounded-md p-2 hover:bg-primary transition-colors" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="bg-foreground text-card rounded-md p-2 hover:bg-primary transition-colors" aria-label="X">
            <span className="font-bold text-sm">𝕏</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Popular Links */}
          <div>
            <h4 className="font-bold text-primary mb-3">Popular Links</h4>
            {["Contact Us", "Blog", "Softer Foods Menu", "FAQs", "Jobs", "Sitemap"].map((link) => (
              <a key={link} href="#" className="block text-foreground py-1 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-primary mb-3">Legal</h4>
            {["Terms & Conditions", "Privacy & Cookie Policy", "Cookie Preferences"].map((link) => (
              <a key={link} href="#" className="block text-foreground py-1 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* App */}
          <div>
            <h4 className="font-bold text-primary mb-3">Download our App</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="bg-foreground text-card rounded-lg px-4 py-2 inline-flex items-center gap-2 w-fit hover:bg-primary transition-colors">
                <span className="text-xl">🍎</span>
                <div>
                  <div className="text-[10px]">Download on the</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-foreground text-card rounded-lg px-4 py-2 inline-flex items-center gap-2 w-fit hover:bg-primary transition-colors">
                <span className="text-xl">▶️</span>
                <div>
                  <div className="text-[10px]">GET IT ON</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="underline text-foreground hover:text-primary transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
