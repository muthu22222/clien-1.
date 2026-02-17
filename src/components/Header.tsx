import { useState } from "react";
import { Menu, ShoppingBasket, Search } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useBasket } from "@/context/BasketContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"menu" | "account">("menu");
  const { total } = useBasket();

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream border-b-2 border-gold">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Left: hamburger / shop */}
          <button
            className="flex flex-col items-center gap-0.5 lg:hidden"
            onClick={() => { setMenuOpen(true); setActiveTab("menu"); }}
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7 text-muted-foreground" />
            <span className="text-xs font-bold text-muted-foreground">SHOP</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="font-bold text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/browse-meals" className="font-bold text-foreground hover:text-primary transition-colors">Browse our meals</Link>
            <Link to="/how-to-get-started" className="font-bold text-foreground hover:text-primary transition-colors">How to get started</Link>
            <Link to="/about-our-food" className="font-bold text-foreground hover:text-primary transition-colors">About our food</Link>
            <Link to="/about-us" className="font-bold text-foreground hover:text-primary transition-colors">About us</Link>
            <Link to="/contact" className="font-bold text-foreground hover:text-primary transition-colors">Contact Us</Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center">
            <div className="bg-primary px-4 py-1 rounded-sm">
              <span className="text-primary-foreground font-bold text-sm tracking-widest">WILTSHIRE</span>
            </div>
            <span className="text-foreground font-serif text-xs">EST. <span className="font-bold text-lg">FARM</span> 1991</span>
            <div className="bg-secondary px-4 py-0.5 rounded-sm -mt-0.5">
              <span className="text-secondary-foreground font-bold text-xs tracking-widest">FOODS</span>
            </div>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <Link to="/basket" className="flex flex-col items-center">
              <ShoppingBasket className="h-7 w-7 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">£{total.toFixed(2)}</span>
            </Link>
            <button aria-label="Search">
              <Search className="h-7 w-7 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col gap-2 px-4 pb-3 lg:flex-row lg:max-w-7xl lg:mx-auto">
          <Link
            to="/browse-meals"
            className="block w-full text-center bg-secondary text-secondary-foreground font-bold py-3 rounded-sm hover:bg-gold-dark transition-colors"
          >
            Browse our meals
          </Link>
          <Link
            to="/request-brochure"
            className="block w-full text-center bg-primary text-primary-foreground font-bold py-3 rounded-sm hover:bg-forest-dark transition-colors"
          >
            Request a brochure
          </Link>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </>
  );
};

export default Header;
