import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeTab: "menu" | "account";
  onTabChange: (tab: "menu" | "account") => void;
}

const MobileMenu = ({ open, onClose, activeTab, onTabChange }: MobileMenuProps) => {
  const [browseOpen, setBrowseOpen] = useState(true);
  const [openSubCategories, setOpenSubCategories] = useState<string[]>([]);

  const toggleSubCategory = (category: string) => {
    setOpenSubCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />

      <div className="absolute left-0 top-0 bottom-0 w-[70%] max-w-sm bg-white flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => onTabChange("menu")}
            className={`flex-1 py-4 font-bold text-sm tracking-wider transition-colors ${activeTab === "menu"
              ? "bg-[#013220] text-white"
              : "bg-white text-[#013220]"
              }`}
          >
            MENU
          </button>
          <button
            onClick={() => onTabChange("account")}
            className={`flex-1 py-4 font-bold text-sm tracking-wider transition-colors ${activeTab === "account"
              ? "bg-[#013220] text-white"
              : "bg-white text-[#013220]"
              }`}
          >
            ACCOUNT
          </button>
        </div>
        {/* Gold separator below tabs */}
        <div className="h-2 bg-[#FBB016] w-full" />

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          {activeTab === "menu" ? (
            <div className="flex flex-col">
              {/* Browse our meals main section */}
              <button
                onClick={() => setBrowseOpen(!browseOpen)}
                className={`w-full flex items-center justify-between px-4 py-4 font-bold transition-colors ${browseOpen ? "bg-[#FBB016] text-[#013220]" : "bg-white text-[#013220] border-b border-[#FBB016]/20"
                  }`}
              >
                Browse our meals
                {browseOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {browseOpen && (
                <div className="bg-[#FAF7F2]">
                  <CategoryItem label="Main Meals" onClick={() => toggleSubCategory('main')} isOpen={openSubCategories.includes('main')}>
                    <SubLink to="/browse-meals?category=beef" label="Beef" onClose={onClose} />
                    <SubLink to="/browse-meals?category=chicken" label="Chicken" onClose={onClose} />
                    <SubLink to="/browse-meals?category=fish" label="Fish" onClose={onClose} />
                    <SubLink to="/browse-meals?category=pork" label="Pork" onClose={onClose} />
                    <SubLink to="/browse-meals?category=lamb" label="Lamb" onClose={onClose} />
                    <SubLink to="/browse-meals?category=veg" label="Vegetarian" onClose={onClose} />
                  </CategoryItem>

                  <CategoryItem label="Desserts & Lighter Bites" onClick={() => toggleSubCategory('desserts')} isOpen={openSubCategories.includes('desserts')}>
                    <SubLink to="/browse-meals?category=hot-desserts" label="Hot Desserts" onClose={onClose} />
                    <SubLink to="/browse-meals?category=cold-desserts" label="Cold Desserts" onClose={onClose} />
                    <SubLink to="/browse-meals?category=fruit" label="Fruit" onClose={onClose} />
                    <SubLink to="/browse-meals?category=lighter-bites" label="Lighter Bites" onClose={onClose} />
                  </CategoryItem>

                  <CategoryItem label="Our Ranges" onClick={() => toggleSubCategory('ranges')} isOpen={openSubCategories.includes('ranges')}>
                    <SubLink to="/browse-meals?range=best" label="Best Sellers" onClose={onClose} />
                    <SubLink to="/browse-meals?range=chefs" label="Chef's Kitchen" onClose={onClose} />
                    <SubLink to="/browse-meals?range=essentials" label="Essentials" onClose={onClose} />
                    <SubLink to="/browse-meals?range=tender" label="Extra Tender" onClose={onClose} />
                    <SubLink to="/browse-meals?range=italy" label="Italian & Mediterranean" onClose={onClose} />
                    <SubLink to="/browse-meals?range=asia" label="Taste of Asia" onClose={onClose} />
                    <SubLink to="/browse-meals?range=mini" label="Mini Meals" onClose={onClose} />
                    <SubLink to="/browse-meals?range=mini-plus" label="Mini Meals Extra" onClose={onClose} />
                    <SubLink to="/browse-meals?range=hearty" label="Hearty Meals" onClose={onClose} />
                    <SubLink to="/browse-meals?range=breakfast" label="Breakfast" onClose={onClose} />
                    <SubLink to="/browse-meals?range=packs" label="Menu Packs" onClose={onClose} />
                  </CategoryItem>

                  <CategoryItem label="Special Diets" onClick={() => toggleSubCategory('diets')} isOpen={openSubCategories.includes('diets')}>
                    <SubLink to="/browse-meals?diet=veg" label="Vegetarian" onClose={onClose} />
                    <SubLink to="/browse-meals?diet=gluten" label="Gluten Free" onClose={onClose} />
                    <SubLink to="/browse-meals?diet=free" label="Free From" onClose={onClose} />
                  </CategoryItem>

                  <CategoryItem label="Softer Foods" onClick={() => toggleSubCategory('softer')} isOpen={openSubCategories.includes('softer')}>
                    <SubLink to="/browse-meals?softer=l4p" label="Level 4 Purée Meals" onClose={onClose} />
                    <SubLink to="/browse-meals?softer=l4s" label="Level 4 Purée Snacks & Sandwiches" onClose={onClose} />
                    <SubLink to="/browse-meals?softer=l4d" label="Level 4 Purée Cakes & Desserts" onClose={onClose} />
                    <SubLink to="/browse-meals?softer=l5" label="Level 5 Minced Meals" onClose={onClose} />
                    <SubLink to="/browse-meals?softer=l6" label="Level 6 Soft & Bite-Sized Meals" onClose={onClose} />
                  </CategoryItem>

                  <CategoryItem label="World Foods" onClick={() => toggleSubCategory('world')} isOpen={openSubCategories.includes('world')}>
                    <SubLink to="/browse-meals?world=cw" label="Caribbean & West Indian" onClose={onClose} />
                    <SubLink to="/browse-meals?world=ks" label="Kosher" onClose={onClose} />
                    <SubLink to="/browse-meals?world=ah" label="Asian Halal" onClose={onClose} />
                    <SubLink to="/browse-meals?world=ahv" label="Asian Halal Vegetarian" onClose={onClose} />
                  </CategoryItem>

                  <CategoryItem label="Specials" onClick={() => toggleSubCategory('specials')} isOpen={openSubCategories.includes('specials')}>
                    <SubLink to="/browse-meals?vouch" label="Gift Vouchers" onClose={onClose} />
                    <SubLink to="/browse-meals?save" label="Tasty Savings" onClose={onClose} />
                    <SubLink to="/browse-meals?ws" label="Winter & Spring Menu" onClose={onClose} />
                  </CategoryItem>
                </div>
              )}

              {/* Bottom Main Links */}
              <div className="flex flex-col bg-white border-t border-[#FBB016]/40">
                <MainNavLink to="/" label="Home" onClose={onClose} />
                <MainNavLink to="/how-to-get-started" label="How to get started" onClose={onClose} />
                <MainNavLink to="/about-our-food" label="About our food" onClose={onClose} />
                <MainNavLink to="/about-us" label="About us" onClose={onClose} />
                <MainNavLink to="/contact" label="Contact Us" onClose={onClose} />
              </div>
            </div>
          ) : (
            <div className="p-4 flex flex-col gap-4">
              <Link to="/signin" onClick={onClose} className="block w-full py-4 text-center font-bold text-[#013220] border-2 border-[#013220] rounded-sm">Sign In</Link>
              <Link to="/register" onClick={onClose} className="block w-full py-4 text-center font-bold bg-[#013220] text-white rounded-sm">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryItem = ({ label, onClick, isOpen, children }: { label: string, onClick: () => void, isOpen: boolean, children?: React.ReactNode }) => (
  <div className="border-b border-[#FBB016]/10">
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-4 font-bold text-[#013220] hover:bg-[#FBB016]/5 transition-colors text-left`}
    >
      <span className="flex-1">{label}</span>
      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
    </button>
    {isOpen && children && (
      <div className="bg-white border-t border-[#FBB016]/5">
        {children}
      </div>
    )}
  </div>
);

const SubLink = ({ to, label, onClose }: { to: string, label: string, onClose: () => void }) => (
  <Link
    to={to}
    onClick={onClose}
    className="block w-full text-left px-6 py-3.5 font-bold text-[#013220] hover:bg-[#FBB016]/5 border-b border-[#FBB016]/5 last:border-0"
  >
    {label}
  </Link>
);

const MainNavLink = ({ to, label, onClose }: { to: string, label: string, onClose: () => void }) => (
  <Link
    to={to}
    onClick={onClose}
    className="block w-full text-left px-4 py-4 font-bold text-[#013220] border-b border-[#FBB016]/20 transition-colors"
  >
    {label}
  </Link>
);

export default MobileMenu;
