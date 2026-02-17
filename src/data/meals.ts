import roastChicken from "@/assets/meal-roast-chicken.jpg";
import cottagePie from "@/assets/meal-cottage-pie.jpg";
import sweetSour from "@/assets/meal-sweet-sour.jpg";
import heroMeals from "@/assets/hero-meals.jpg";

export interface Meal {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  bestSeller?: boolean;
  rating: number;
  reviewsCount: number;
}

export const meals: Meal[] = [
  {
    id: "1",
    title: "Roast Chicken",
    description: "Succulent roast chicken breast with sage & onion stuffing, served with roast potatoes, carrots, peas and gravy.",
    price: 5.95,
    image: roastChicken,
    category: "Traditional Favourites",
    bestSeller: true,
    rating: 4.8,
    reviewsCount: 124
  },
  {
    id: "2",
    title: "Cottage Pie",
    description: "Minced beef in a rich gravy with carrots and onions, topped with mashed potato and cheese.",
    price: 4.95,
    image: cottagePie,
    category: "Traditional Favourites",
    bestSeller: true,
    rating: 4.5,
    reviewsCount: 89
  },
  {
    id: "3",
    title: "Sweet & Sour Chicken",
    description: "Chicken breast pieces in a tangy sweet and sour sauce with pineapple, peppers and onions, served with egg fried rice.",
    price: 6.25,
    image: sweetSour,
    category: "World Flavours",
    rating: 4.2,
    reviewsCount: 56
  },
  {
    id: "4",
    title: "Fish & Chips",
    description: "Battered cod fillet served with chips and mushy peas.",
    price: 7.50,
    image: heroMeals,
    category: "Traditional Favourites",
    rating: 4.9,
    reviewsCount: 210
  },
  {
    id: "5",
    title: "Beef Lasagne",
    description: "Layers of pasta, minced beef in tomato sauce and béchamel sauce, topped with melted cheese.",
    price: 5.50,
    image: heroMeals,
    category: "Italian",
    rating: 4.6,
    reviewsCount: 145
  },
  {
    id: "6",
    title: "Vegetable Curry",
    description: "Mixed vegetables in a medium spiced curry sauce, served with fluffy basmati rice.",
    price: 5.25,
    image: sweetSour, // Using sweet & sour as temporary placeholder for curry
    category: "Vegetarian",
    rating: 4.4,
    reviewsCount: 78
  }
];
