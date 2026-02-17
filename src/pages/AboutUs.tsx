import Header from "@/components/Header";
import Footer from "@/components/Footer";
import deliveryImg from "@/assets/delivery-driver.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-muted-foreground mb-2">
          About us
        </h1>
        <div className="h-0.5 bg-gold mb-8" />

        <img src={deliveryImg} alt="Our team" className="w-64 h-48 object-cover rounded-lg mx-auto mb-6" loading="lazy" />

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            Wiltshire Farm Foods has been delivering delicious frozen ready meals to doors across the country since 1991. We're proud to be one of the UK's most trusted meal delivery services.
          </p>
          <p>
            Our friendly local drivers deliver all over the country but are local to you, so you'll always see a familiar face. We believe in good old-fashioned service — no subscriptions, no fuss.
          </p>
          <h2 className="font-bold text-primary text-xl pt-2">Our Promise</h2>
          <p>
            Free delivery on every order, a friendly smile at your door, and over 300 delicious meals to choose from. That's the Wiltshire Farm Foods promise.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
