import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HowToGetStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-muted-foreground mb-2">
          How to get started
        </h1>
        <div className="h-0.5 bg-gold mb-8" />

        <div className="flex flex-col gap-8">
          {[
            { step: "1", title: "Browse & Choose", desc: "Look through our wide range of over 300 delicious frozen meals and pick your favourites." },
            { step: "2", title: "Place Your Order", desc: "Order online, by phone, or by post using our brochure order form. No minimum order required." },
            { step: "3", title: "Free Delivery", desc: "Our friendly local drivers deliver straight to your door, and even help put meals in your freezer." },
            { step: "4", title: "Heat & Enjoy", desc: "Simply heat your meal in the microwave or oven and enjoy a delicious, nutritious home-cooked taste." },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowToGetStarted;
