import heroImage from "@/assets/hero-meals.jpg";

import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="Delicious frozen ready meals"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
            Frozen ready<br />meals
          </h1>
          <p className="text-primary-foreground text-lg md:text-xl mb-6">
            delivered to your door
          </p>
          <Link
            to="/browse-meals"
            className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-sm hover:bg-forest-dark transition-colors text-lg"
          >
            Start shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
