import { useState } from "react";
import { Menu, ShoppingBasket, Search } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useBasket } from "@/context/BasketContext";
import { meals, Meal } from "@/data/meals";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"menu" | "account">("menu");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Meal[]>([]);
  const { total, addToBasket } = useBasket();
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const filtered = meals.filter((meal) =>
        meal.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  const handleAddToBasket = (meal: Meal) => {
    addToBasket(meal);
    toast({
      title: "Added to basket",
      description: `${meal.title} has been added to your basket.`,
    });
    setSearchQuery(""); // Clear search after adding
  };

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
              <span className="text-primary-foreground font-bold text-sm tracking-widest">CLONE</span>
            </div>
            <span className="text-foreground font-serif text-xs">EST. <span className="font-bold text-lg">FARM</span> 1991</span>
            <div className="bg-secondary px-4 py-0.5 rounded-sm -mt-0.5">
              <span className="text-secondary-foreground font-bold text-xs tracking-widest">FOODS</span>
            </div>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 relative">
            <div className="relative hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a meal..."
                  className="pl-8 pr-4 py-1 rounded-full border border-input bg-background/50 focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary w-48 transition-all focus:w-64"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <Search className="h-4 w-4 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>

              {/* Search Results Dropdown (Desktop) */}
              {searchQuery && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-card rounded-md shadow-lg border border-border z-50 overflow-hidden">
                  {searchResults.length > 0 ? (
                    <ul>
                      {searchResults.map((meal) => (
                        <li key={meal.id} className="border-b border-border last:border-0">
                          <div className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors">
                            <img src={meal.image} alt={meal.title} className="w-12 h-12 object-cover rounded-sm" />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-foreground truncate">{meal.title}</h4>
                              <p className="text-xs text-muted-foreground">£{meal.price.toFixed(2)}</p>
                            </div>
                            <button
                              onClick={() => handleAddToBasket(meal)}
                              className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1.5 rounded-sm hover:bg-forest-dark shrink-0"
                            >
                              Add
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-4 text-sm text-muted-foreground text-center">No meals found</div>
                  )}
                </div>
              )}
            </div>

            <Link to="/basket" className="flex flex-col items-center">
              <ShoppingBasket className="h-7 w-7 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">£{total.toFixed(2)}</span>
            </Link>
            <button
              aria-label="Search"
              className="md:hidden"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <Search className="h-7 w-7 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Search Input Area */}
        {mobileSearchOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 animate-in slide-in-from-top-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a meal..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
              <Search className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Search Results (Mobile) */}
            {searchQuery && (
              <div className="mt-2 bg-card rounded-md shadow-lg border border-border overflow-hidden max-h-60 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((meal) => (
                      <li key={meal.id} className="border-b border-border last:border-0">
                        <div className="flex items-center gap-3 p-3 active:bg-muted/50 transition-colors">
                          <img src={meal.image} alt={meal.title} className="w-10 h-10 object-cover rounded-sm" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-foreground truncate">{meal.title}</h4>
                            <p className="text-xs text-muted-foreground">£{meal.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => {
                              handleAddToBasket(meal);
                              setMobileSearchOpen(false);
                            }}
                            className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-sm shrink-0"
                          >
                            Add
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-sm text-muted-foreground text-center">No meals found</div>
                )}
              </div>
            )}
          </div>
        )}

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
