import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import QuickActions from "@/components/QuickActions";
import DeliveryFinder from "@/components/DeliveryFinder";
import TopSellers from "@/components/TopSellers";
import FreeDelivery from "@/components/FreeDelivery";
import ChefsKitchen from "@/components/ChefsKitchen";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <TrustpilotBadge />
      <QuickActions />
      <DeliveryFinder />
      <TopSellers />
      <FreeDelivery />
      <ChefsKitchen />
      <Footer />
    </div>
  );
};

export default Index;
