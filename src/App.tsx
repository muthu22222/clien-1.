import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Basket from "./pages/Basket";
import { BasketProvider } from "./context/BasketContext";
import BrowseMeals from "./pages/BrowseMeals";
import HowToGetStarted from "./pages/HowToGetStarted";
import AboutOurFood from "./pages/AboutOurFood";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import RequestBrochure from "./pages/RequestBrochure";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import TrackOrder from "./pages/TrackOrder";
import CookiePolicy from "./pages/CookiePolicy";
import TermsConditions from "./pages/TermsConditions";
import PrivacyCookiePolicy from "./pages/PrivacyCookiePolicy";
import DataProtectionPolicy from "./pages/DataProtectionPolicy";
import SofterFoodsMenu from "./pages/SofterFoodsMenu";
import FAQs from "./pages/FAQs";
import Jobs from "./pages/Jobs";
import Sitemap from "./pages/Sitemap";
import Blog from "./pages/Blog";
import DietPlans from "./pages/DietPlans";
import Reviews from "./pages/Reviews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BasketProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/browse-meals" element={<BrowseMeals />} />
            <Route path="/diet-plans" element={<DietPlans />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/how-to-get-started" element={<HowToGetStarted />} />
            <Route path="/about-our-food" element={<AboutOurFood />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/request-brochure" element={<RequestBrochure />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-cookie-policy" element={<PrivacyCookiePolicy />} />
            <Route path="/data-protection-policy" element={<DataProtectionPolicy />} />
            <Route path="/softer-foods-menu" element={<SofterFoodsMenu />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </BasketProvider>
  </QueryClientProvider>
);

export default App;
