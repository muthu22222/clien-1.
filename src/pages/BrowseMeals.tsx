import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopSellers from "@/components/TopSellers";
import { meals } from "@/data/meals";
import { useBasket } from "@/context/BasketContext";

const BrowseMeals = () => {
  const { addToBasket } = useBasket();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get filters from URL
  const categoryFilter = queryParams.get("category");
  const rangeFilter = queryParams.get("range");
  const dietFilter = queryParams.get("diet");
  const softerFilter = queryParams.get("softer");
  const worldFilter = queryParams.get("world");
  const specialsFilter = queryParams.get("specials");

  // Apply filtering
  const filteredMeals = meals.filter((meal) => {
    if (categoryFilter && meal.category !== categoryFilter) return false;
    if (rangeFilter && meal.range !== rangeFilter) return false;
    if (dietFilter && meal.diet !== dietFilter) return false;
    if (softerFilter && meal.softer !== softerFilter) return false;
    if (worldFilter && meal.world !== worldFilter) return false;
    // For specials and others, you can add similar logic
    return true;
  });

  // Determine page title based on filter
  const getPageTitle = () => {
    if (categoryFilter) return categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1).replace("-", " ");
    if (rangeFilter) return "Our Ranges";
    if (dietFilter) return "Special Diets";
    if (softerFilter) return "Softer Foods";
    if (worldFilter) return "World Foods";
    return "Browse our meals";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 min-h-[60vh]">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-primary mb-2">
          {getPageTitle()}
        </h1>
        <div className="h-0.5 bg-gold max-w-md mx-auto mb-6" />
        <p className="text-center text-foreground mb-8 max-w-2xl mx-auto">
          Explore our wide range of delicious frozen ready meals, prepared with care and delivered to your door.
        </p>

        {filteredMeals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {filteredMeals.map((meal) => (
              <div key={meal.id} className="bg-card rounded-lg shadow-sm overflow-hidden border border-border flex flex-col group hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {meal.bestSeller && (
                    <span className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-sm">
                      BEST SELLER
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-base text-primary leading-tight line-clamp-2">{meal.title}</h3>
                  </div>
                  <div className="mb-2">
                    <span className="font-bold text-lg text-foreground">£{meal.price.toFixed(2)}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={star <= Math.round(meal.rating) ? "currentColor" : "none"}
                          stroke="currentColor"
                          className={`w-3.5 h-3.5 ${star <= Math.round(meal.rating) ? "text-secondary fill-secondary" : "text-gray-300"}`}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground font-medium">({meal.reviewsCount})</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{meal.description}</p>

                  <button
                    onClick={() => addToBasket(meal)}
                    className="w-full bg-primary text-primary-foreground font-bold py-2.5 rounded-sm hover:bg-forest-dark transition-colors mt-auto text-sm"
                  >
                    ADD TO BASKET
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-muted-foreground mb-4">No meals found for this selection</h2>
            <button
              onClick={() => window.location.href = '/browse-meals'}
              className="bg-secondary text-white px-6 py-2 rounded-sm font-bold"
            >
              See all meals
            </button>
          </div>
        )}
      </main>
      <TopSellers />
      <Footer />
    </div>
  );
};

export default BrowseMeals;
