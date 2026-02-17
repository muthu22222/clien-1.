import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeTab: "menu" | "account";
  onTabChange: (tab: "menu" | "account") => void;
}

const menuLinks = [
  { label: "Browse our meals", to: "/browse-meals" },
  { label: "Home", to: "/" },
  { label: "How to get started", to: "/how-to-get-started" },
  { label: "About our food", to: "/about-our-food" },
  { label: "About us", to: "/about-us" },
  { label: "Contact Us", to: "/contact" },
];

const accountLinks = [
  { label: "Sign In", to: "/signin" },
  { label: "Register", to: "/register" },
];

const MobileMenu = ({ open, onClose, activeTab, onTabChange }: MobileMenuProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} />

      <div className="absolute left-0 top-0 bottom-0 w-[70%] max-w-sm bg-cream flex flex-col">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => onTabChange("menu")}
            className={`flex-1 py-4 font-bold text-sm tracking-wider ${
              activeTab === "menu"
                ? "bg-secondary text-secondary-foreground"
                : "bg-cream text-foreground"
            }`}
          >
            MENU
          </button>
          <button
            onClick={() => onTabChange("account")}
            className={`flex-1 py-4 font-bold text-sm tracking-wider ${
              activeTab === "account"
                ? "bg-primary text-primary-foreground"
                : "bg-cream text-foreground"
            }`}
          >
            ACCOUNT
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "menu" ? (
            <>
              <Link
                to="/browse-meals"
                onClick={onClose}
                className="w-full flex items-center justify-between px-4 py-4 bg-secondary text-secondary-foreground font-bold border-b border-gold"
              >
                Browse our meals
                <ChevronDown className="h-5 w-5" />
              </Link>
              {menuLinks.slice(1).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={onClose}
                  className="block w-full text-left px-4 py-4 font-bold text-foreground border-b border-gold/40 hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </>
          ) : (
            accountLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={onClose}
                className="block w-full text-left px-4 py-4 font-bold text-primary border-b border-gold/40 hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
