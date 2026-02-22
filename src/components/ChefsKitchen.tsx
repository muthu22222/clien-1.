import chefsImg from "@/assets/chefs-kitchen.jpg";
import { Link } from "react-router-dom";

const ChefsKitchen = () => {
  return (
    <section className="bg-background py-14 px-4 border-t border-[#FBB016]/10">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={chefsImg}
          alt="The Chef's Kitchen"
          className="w-full max-w-lg mx-auto rounded-sm mb-10 shadow-sm"
          loading="lazy"
        />
        <h2 className="font-serif text-[28px] md:text-[34px] text-[#6B6B76] mb-4 uppercase tracking-wide">
          The Chef's Kitchen
        </h2>
        <div className="h-[2px] w-24 bg-[#FBB016] mx-auto mb-6" />
        <p className="text-[#6B6B76] leading-relaxed mb-8 max-w-xl mx-auto text-[17px]">
          Dine on the finest dishes, created from the very best ingredients by
          award-winning chefs. This is flavour. This is The Chef's Kitchen. Just
          as simple to prepare as any other Wiltshire Farm Foods meal, treat
          yourself to the very best.
        </p>
        <Link
          to="/browse-meals?range=chefs"
          className="inline-block bg-[#004225] text-white font-bold px-10 py-3.5 rounded-sm hover:bg-[#00321c] transition-colors"
        >
          Shop now
        </Link>
      </div>
    </section>
  );
};

export default ChefsKitchen;
