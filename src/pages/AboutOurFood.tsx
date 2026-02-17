import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chefsImg from "@/assets/chefs-kitchen.jpg";

const AboutOurFood = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-muted-foreground mb-2">
          About our food
        </h1>
        <div className="h-0.5 bg-gold mb-8" />

        <img src={chefsImg} alt="Our food" className="w-full rounded-lg mb-6" loading="lazy" />

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            At Wiltshire Farm Foods, we believe everyone deserves access to delicious, nutritious meals. That's why we've been crafting our frozen ready meals with care since 1991.
          </p>
          <p>
            Our meals are prepared using quality ingredients, with no artificial colours or flavours. Each dish is carefully balanced to provide great taste and proper nutrition.
          </p>
          <h2 className="font-bold text-primary text-xl pt-2">Nutritionally Balanced</h2>
          <p>
            Many of our meals carry the Well Balanced badge, meaning they meet strict nutritional guidelines. We also offer a range of softer foods for those who need them.
          </p>
          <h2 className="font-bold text-primary text-xl pt-2">Made with Quality Ingredients</h2>
          <p>
            From classic British roasts to world-inspired cuisines, every meal is made with carefully sourced ingredients and prepared by our experienced team of chefs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutOurFood;
