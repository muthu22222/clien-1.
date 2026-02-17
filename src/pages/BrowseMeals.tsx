import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopSellers from "@/components/TopSellers";
import { meals } from "@/data/meals";
import { useBasket } from "@/context/BasketContext";

const BrowseMeals = () => {
  const { addToBasket } = useBasket();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-muted-foreground mb-2">
          Browse our meals
        </h1>
        <div className="h-0.5 bg-gold mb-6" />
        <p className="text-center text-foreground mb-8">
          Explore our wide range of delicious frozen ready meals, from traditional favourites to luxury chef-created dishes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-card rounded-lg shadow-sm overflow-hidden border border-border flex flex-col">
              <div className="relative aspect-video">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-full object-cover"
                />
                {meal.bestSeller && (
                  <span className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-sm">
                    BEST SELLER
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-primary">{meal.title}</h3>
                  <span className="font-bold text-foreground">£{meal.price.toFixed(2)}</span>
                </div>
                {/* Rating display */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={star <= Math.round(meal.rating) ? "currentColor" : "none"}
                        stroke="currentColor"
                        className={`w-4 h-4 ${star <= Math.round(meal.rating) ? "text-[hsl(153,70%,35%)] fill-[hsl(153,70%,35%)]" : "text-gray-300"}`}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({meal.reviewsCount})</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{meal.description}</p>
                <button
                  onClick={() => addToBasket(meal)}
                  className="w-full bg-primary text-primary-foreground font-bold py-2 rounded-sm hover:bg-forest-dark transition-colors mt-auto"
                >
                  ADD TO BASKET
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <TopSellers />
      <Footer />
    </div>
  );
};

export default BrowseMeals;
