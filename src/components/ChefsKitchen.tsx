import chefsImg from "@/assets/chefs-kitchen.jpg";
import { Link } from "react-router-dom";

const ChefsKitchen = () => {
  return (
    <section className="bg-background py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={chefsImg}
          alt="The Chef's Kitchen"
          className="w-full max-w-lg mx-auto rounded-lg mb-6"
          loading="lazy"
        />
        <h2 className="font-serif text-3xl md:text-4xl text-muted-foreground mb-2">
          The Chef's Kitchen
        </h2>
        <div className="h-0.5 bg-gold mb-6" />
        <p className="text-foreground leading-relaxed mb-6 max-w-xl mx-auto">
          Dine on the finest dishes, created from the very best ingredients by
          award-winning chefs. This is flavour. This is The Chef's Kitchen. Just
          as simple to prepare as any other Wiltshire Farm Foods meal, treat
          yourself to the very best.
        </p>
        <Link
          to="/browse-meals"
          className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-sm hover:bg-forest-dark transition-colors"
        >
          Shop now
        </Link>
      </div>
    </section>
  );
};

export default ChefsKitchen;
