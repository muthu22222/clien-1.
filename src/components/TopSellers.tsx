import { Heart, Star } from "lucide-react";
import mealChicken from "@/assets/meal-roast-chicken.jpg";
import mealSweetSour from "@/assets/meal-sweet-sour.jpg";
import mealCottagePie from "@/assets/meal-cottage-pie.jpg";
import { Link } from "react-router-dom";
import { useBasket } from "@/context/BasketContext";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: "1",
    name: "Roast Chicken Breast with Stuffing",
    weight: "390g",
    price: "5.99",
    reviews: 478,
    image: mealChicken,
    badge: "Well Balanced",
    sold: 549,
    category: "Traditional Favourites"
  },
  {
    id: "3",
    name: "Luxury Sweet & Sour Chicken",
    weight: "465g",
    price: "6.39",
    reviews: 318,
    image: mealSweetSour,
    badge: null,
    sold: 4176,
    category: "World Flavours"
  },
  {
    id: "2",
    name: "Cottage Pie",
    weight: "390g",
    price: "5.49",
    reviews: 771,
    image: mealCottagePie,
    badge: "Well Balanced",
    sold: 2340,
    category: "Traditional Favourites"
  },
];

const TopSellers = () => {
  const { addToBasket } = useBasket();
  const { toast } = useToast();

  const handleAddToBasket = (product: any) => {
    addToBasket({
      id: product.id,
      title: product.name,
      price: parseFloat(product.price.replace('£', '')),
      image: product.image,
      category: product.category,
      description: product.name // Fallback description
    });
    toast({
      title: "Added to basket",
      description: `${product.name} has been added to your basket.`,
    });
  };

  return (
    <section className="bg-background py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-muted-foreground mb-2">
          Top sellers
        </h2>
        <div className="h-0.5 bg-gold mb-8" />

        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-card rounded-lg shadow-sm overflow-hidden">
              {/* Trustpilot mini */}
              <div className="flex items-center gap-2 px-4 pt-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-[hsl(153,70%,35%)] p-0.5">
                      <Star className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.reviews} reviews</span>
              </div>

              <div className="flex p-4 gap-4">
                {/* Image */}
                <div className="relative w-36 h-36 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                    loading="lazy"
                  />
                  <button className="absolute bottom-2 left-2 bg-card/80 rounded-full p-1.5">
                    <Heart className="h-5 w-5 text-muted-foreground" />
                  </button>
                  {product.badge && (
                    <div className="absolute top-2 right-2 bg-secondary text-foreground text-[10px] font-bold px-1.5 py-0.5 rounded border border-gold-dark">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-foreground text-lg leading-tight">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-muted-foreground">{product.weight}</span>
                    <span className="font-bold text-foreground text-lg">{product.price}</span>
                  </div>
                  <div className="h-px bg-border my-2" />
                  <div className="flex items-center justify-between">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-bold">
                      {product.sold}
                    </span>
                    <button
                      onClick={() => handleAddToBasket(product)}
                      className="bg-primary text-primary-foreground font-bold px-5 py-2 rounded-sm hover:bg-forest-dark transition-colors">
                      + Basket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to="/browse-meals" className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-sm hover:bg-forest-dark transition-colors">
          View all meals
        </Link>
      </div>
    </section>
  );
};

export default TopSellers;
