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
            <Route path="/how-to-get-started" element={<HowToGetStarted />} />
            <Route path="/about-our-food" element={<AboutOurFood />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/request-brochure" element={<RequestBrochure />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </BasketProvider>
  </QueryClientProvider>
);

export default App;
