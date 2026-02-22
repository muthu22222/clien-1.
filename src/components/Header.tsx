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
      <header className="bg-[#FEF9F3] border-b border-[#FBB016]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Left: hamburger / shop */}
          <button
            className="flex flex-col items-center gap-0.5"
            onClick={() => { setMenuOpen(true); setActiveTab("menu"); }}
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7 text-[#013220]" />
            <span className="text-[10px] font-bold text-[#013220]">SHOP</span>
          </button>

          {/* Desktop nav hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="font-bold text-[#013220] hover:text-primary transition-colors">Home</Link>
            <Link to="/browse-meals" className="font-bold text-[#013220] hover:text-primary transition-colors">Browse our meals</Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group py-2">
            <div className="flex flex-col items-center scale-95 md:scale-100">
              <span className="text-[#6B6B76] font-bold text-[11px] md:text-xs tracking-[0.25em] leading-none uppercase">Wiltshire</span>
              <div className="flex items-center gap-1.5 my-1">
                <div className="h-[1px] w-5 bg-[#6B6B76]/20"></div>
                <span className="text-[#6B6B76] text-[8px] md:text-[9px] font-bold tracking-[0.1em] uppercase">Est. Farm 1991</span>
                <div className="h-[1px] w-5 bg-[#6B6B76]/20"></div>
              </div>
              <div className="bg-[#FBB016] px-6 py-0.5 w-full text-center">
                <span className="text-white font-bold text-sm md:text-lg tracking-[0.3em] -mr-[0.3em]">FOODS</span>
              </div>
            </div>
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <Link to="/basket" className="flex flex-col items-center">
              <div className="relative">
                <ShoppingBasket className="h-7 w-7 text-[#013220]" />
                {total > 0 && (
                  <div className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {meals.filter(m => total > 0).length > 0 ? "!" : ""}
                  </div>
                )}
              </div>
              <span className="text-[10px] font-bold text-[#013220]">£{total.toFixed(2)}</span>
            </Link>
            <button
              aria-label="Search"
              className="p-1"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <Search className="h-7 w-7 text-[#013220]" />
            </button>
          </div>
        </div>

        {/* Mobile Search Input Area */}
        {mobileSearchOpen && (
          <div className="absolute top-16 left-0 w-full border-b border-[#FBB016]/20 bg-white p-4 shadow-xl z-50 animate-in slide-in-from-top-5">
            <div className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for a meal..."
                  className="w-full pl-10 pr-4 py-2 rounded-sm border border-input bg-background focus:outline-none focus:ring-1 focus:ring-[#FBB016]"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  autoFocus
                />
                <Search className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button
                onClick={() => { setMobileSearchOpen(false); setSearchQuery(""); }}
                className="text-sm font-bold text-[#013220] p-2"
              >
                Close
              </button>
            </div>

            {/* Search Results (Mobile) */}
            {searchQuery && (
              <div className="mt-2 bg-card rounded-md shadow-lg border border-border overflow-hidden max-h-[60vh] overflow-y-auto">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((meal) => (
                      <li key={meal.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                        <div className="flex items-center gap-3 p-3 transition-colors">
                          <img src={meal.image} alt={meal.title} className="w-12 h-12 object-cover rounded-sm" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-[#013220] truncate">{meal.title}</h4>
                            <p className="text-xs text-muted-foreground">£{meal.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => {
                              handleAddToBasket(meal);
                              setMobileSearchOpen(false);
                            }}
                            className="bg-[#013220] text-white text-xs font-bold px-3 py-1.5 rounded-sm shrink-0"
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
        <div className="flex flex-col gap-0 lg:flex-row lg:max-w-7xl lg:mx-auto">
          <Link
            to="/browse-meals"
            className="block w-full text-center bg-[#FBB016] text-[#013220] font-bold py-3.5 hover:bg-[#e8a214] transition-colors uppercase tracking-widest text-[13px] border-b border-[#013220]/5"
          >
            Browse our meals
          </Link>
          <Link
            to="/request-brochure"
            className="block w-full text-center bg-[#013220] text-white font-bold py-3.5 hover:bg-[#00281a] transition-colors uppercase tracking-widest text-[13px]"
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
