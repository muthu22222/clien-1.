import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import FreeDelivery from "@/components/FreeDelivery";
import ChefsKitchen from "@/components/ChefsKitchen";
import NewMenu from "@/components/NewMenu";
import TopSellers from "@/components/TopSellers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <TrustpilotBadge />
      <FreeDelivery />
      <ChefsKitchen />
      <NewMenu />
      <TopSellers />
      <Footer />
    </div>
  );
};

export default Index;
