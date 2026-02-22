import { Heart, Star, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { useBasket } from "@/context/BasketContext";
import { useToast } from "@/hooks/use-toast";
import { meals, Meal } from "@/data/meals";

const TopSellers = () => {
  const { addToBasket } = useBasket();
  const { toast } = useToast();

  const bestSellers = meals.filter(m => m.bestSeller).slice(0, 3);

  const handleAddToBasket = (meal: Meal) => {
    addToBasket(meal);
    toast({
      title: "Added to basket",
      description: `${meal.title} has been added to your basket.`,
    });
  };

  return (
    <section className="bg-background py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-[#013220] mb-2 uppercase tracking-tight">
          Top sellers
        </h2>
        <div className="h-0.5 bg-[#FBB016] mb-8" />

        <div className="flex flex-col gap-6">
          {bestSellers.map((meal) => (
            <div key={meal.id} className="bg-card rounded-lg shadow-sm overflow-hidden border border-border group hover:shadow-md transition-shadow">
              {/* Trustpilot-style rating */}
              <div className="flex items-center gap-2 px-4 pt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#82C341] p-0.5 rounded-sm">
                      <Star className="h-3 w-3 fill-white text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-[#6B6B76]">{meal.reviewsCount} reviews</span>
              </div>

              <div className="flex p-4 gap-4 md:gap-6">
                {/* Image */}
                <Link to={`/meal/${meal.id}`} className="relative w-28 h-28 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-sm block">
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <button className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm text-[#013220] hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  {meal.range === 'best' && (
                    <div className="absolute top-2 right-2 bg-[#FAF7F2] text-[#013220] text-[9px] font-bold px-1.5 py-0.5 rounded border border-[#FBB016]/30 uppercase tracking-widest">
                      Well Balanced
                    </div>
                  )}
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col">
                  <Link to={`/meal/${meal.id}`}>
                    <h3 className="font-bold text-[#013220] text-lg md:text-xl leading-tight hover:underline line-clamp-2">{meal.title}</h3>
                  </Link>
                  <p className="text-[#6B6B76] text-sm mt-1 line-clamp-1">{meal.ingredientSummary}</p>

                  <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
                    <div className="flex items-center justify-between md:justify-start md:gap-6 w-full md:w-auto">
                      <span className="text-[#6B6B76] font-medium">{meal.weight}</span>
                      <span className="font-bold text-[#013220] text-xl">£{meal.price.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto gap-4">
                      {/* Random high number for 'sold' effect */}
                      <span className="text-[10px] font-bold text-[#6B6B76] uppercase tracking-widest bg-[#6B6B76]/5 px-2 py-1 rounded">
                        {Math.floor(Math.random() * (5000 - 500) + 500)} Sold
                      </span>
                      <button
                        onClick={() => handleAddToBasket(meal)}
                        className="bg-[#013220] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#00281a] transition-all shadow-md active:scale-95 flex items-center gap-2 text-sm whitespace-nowrap">
                        <ShoppingBasket className="h-4 w-4" />
                        + Basket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <Link to="/browse-meals" className="inline-block bg-[#FBB016] text-[#013220] font-bold px-12 py-4 rounded-full hover:bg-[#e8a214] transition-all shadow-lg uppercase tracking-widest text-sm">
          View all meals
        </Link>
      </div>
    </section>
  );
};

export default TopSellers;
