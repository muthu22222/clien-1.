import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityButton from "@/components/AccessibilityButton";

const SofterFoodsMenu = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            SOFTER FOODS MENU
          </h1>

          <section className="mb-8">
            <p className="text-foreground mb-4 text-lg">
              Our Softer Foods range has been specially developed for those who have difficulty chewing or swallowing. These meals are IDDSI compliant and designed to be both nutritious and appetising.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">What are Texture Modified Foods?</h2>
            <p className="text-foreground mb-4">
              Texture modified foods are meals that have been specially prepared to meet specific consistency levels. Our softer foods menu offers meals that are easier to chew and swallow, while maintaining great taste and nutritional value.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">IDDSI Compliance</h2>
            <p className="text-foreground mb-4">
              All our softer foods meet the International Dysphagia Diet Standardisation Initiative (IDDSI) standards. We offer:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li><strong>Level 4 - Puréed:</strong> Smooth, cohesive, and uniform texture</li>
              <li><strong>Level 5 - Minced & Moist:</strong> Soft and moist, requiring minimal chewing</li>
              <li><strong>Level 6 - Soft & Bite-Sized:</strong> Soft, tender, and easily mashed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Our Softer Foods Range</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-4 rounded-lg border border-gold">
                <h3 className="font-bold text-primary mb-2">Main Meals</h3>
                <p className="text-foreground text-sm">Beef stew, chicken casserole, fish pie, shepherd&apos;s pie, and more</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-gold">
                <h3 className="font-bold text-primary mb-2">Vegetarian Options</h3>
                <p className="text-foreground text-sm">Vegetable curry, macaroni cheese, lentil hotpot, and more</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-gold">
                <h3 className="font-bold text-primary mb-2">Desserts</h3>
                <p className="text-foreground text-sm">Chocolate mousse, fruit purées, custard, and more</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-gold">
                <h3 className="font-bold text-primary mb-2">Soups</h3>
                <p className="text-foreground text-sm">Creamy vegetable, chicken, tomato, and more</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Nutritional Information</h2>
            <p className="text-foreground mb-4">
              All our softer foods meals are nutritionally balanced to ensure you receive the vitamins and minerals you need. Each meal is carefully prepared to maintain nutritional content while meeting texture requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">How to Order</h2>
            <p className="text-foreground mb-4">
              You can browse our full Softer Foods range online or request a brochure. Our team is also available to help you choose the right meals for your needs.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="/browse-meals" className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded hover:bg-gold-dark transition-colors inline-block text-center">
                Browse Softer Foods
              </a>
              <a href="/request-brochure" className="bg-card border-2 border-gold text-foreground font-bold px-6 py-3 rounded hover:bg-gold/10 transition-colors inline-block text-center">
                Request Brochure
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Need Advice?</h2>
            <p className="text-foreground mb-4">
              If you&apos;re unsure which texture level is right for you, we recommend speaking to your healthcare professional. You can also contact our friendly team for guidance.
            </p>
            <p className="text-foreground mb-4">
              Call us on <strong>01225 756093</strong> or{" "}
              <a href="/contact" className="text-primary underline hover:text-primary/80">
                contact us online
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <AccessibilityButton />
    </div>
  );
};

export default SofterFoodsMenu;
