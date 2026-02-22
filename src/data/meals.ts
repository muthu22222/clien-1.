import roastChicken from "@/assets/meal-roast-chicken.jpg";
import cottagePie from "@/assets/meal-cottage-pie.jpg";
import sweetSour from "@/assets/meal-sweet-sour.jpg";
import heroMeals from "@/assets/hero-meals.jpg";
import chefsKitchen from "@/assets/chefs-kitchen.jpg";

export interface Meal {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  range?: string;
  diet?: string;
  softer?: string;
  world?: string;
  isNew?: boolean;
  bestSeller?: boolean;
  rating: number;
  reviewsCount: number;
}

export const meals: Meal[] = [
  // MAIN MEALS - Beef
  {
    id: "1",
    title: "Roast Beef & Yorkshire Pudding",
    description: "Succulent slices of roast beef served with a crisp Yorkshire pudding, roast potatoes, carrots and rich gravy.",
    price: 6.95,
    image: heroMeals,
    category: "beef",
    range: "best",
    rating: 4.9,
    reviewsCount: 342,
    bestSeller: true
  },
  {
    id: "2",
    title: "Cottage Pie",
    description: "Minced beef in a rich gravy with carrots and onions, topped with mashed potato and cheese.",
    price: 4.95,
    image: cottagePie,
    category: "beef",
    range: "essentials",
    rating: 4.5,
    reviewsCount: 89,
    bestSeller: true
  },
  // MAIN MEALS - Chicken
  {
    id: "3",
    title: "Roast Chicken Breast",
    description: "Succulent roast chicken breast with sage & onion stuffing, served with roast potatoes, carrots, peas and gravy.",
    price: 5.95,
    image: roastChicken,
    category: "chicken",
    range: "best",
    rating: 4.8,
    reviewsCount: 124,
    bestSeller: true
  },
  {
    id: "4",
    title: "Sweet & Sour Chicken",
    description: "Chicken breast pieces in a tangy sweet and sour sauce with pineapple, peppers and onions, served with egg fried rice.",
    price: 6.25,
    image: sweetSour,
    category: "chicken",
    world: "ah",
    rating: 4.2,
    reviewsCount: 56
  },
  // MAIN MEALS - Fish
  {
    id: "5",
    title: "Battered Cod & Chips",
    description: "Battered cod fillet served with chunky chips and mushy peas.",
    price: 7.50,
    image: heroMeals,
    category: "fish",
    range: "best",
    rating: 4.9,
    reviewsCount: 210
  },
  // DESSERTS
  {
    id: "6",
    title: "Apple Crumble",
    description: "Sweet bramley apples topped with a buttery crumble, served with creamy custard.",
    price: 2.95,
    image: chefsKitchen,
    category: "hot-desserts",
    rating: 4.7,
    reviewsCount: 156
  },
  {
    id: "7",
    title: "Chocolate Sponge Pudding",
    description: "Rich chocolate sponge with a molten chocolate sauce center.",
    price: 3.25,
    image: chefsKitchen,
    category: "hot-desserts",
    rating: 4.6,
    reviewsCount: 98
  },
  // SPECIAL DIETS
  {
    id: "8",
    title: "Vegetable Lasagne",
    description: "Layers of pasta with a rich Mediterranean vegetable and tomato sauce, topped with béchamel and cheese.",
    price: 5.25,
    image: heroMeals,
    category: "veg",
    diet: "veg",
    rating: 4.4,
    reviewsCount: 78
  },
  {
    id: "9",
    title: "Gluten Free Fish Pie",
    description: "Pieces of white fish, salmon and smoked haddock in a creamy leek sauce, topped with buttery mash.",
    price: 6.50,
    image: cottagePie,
    category: "fish",
    diet: "gluten",
    rating: 4.5,
    reviewsCount: 45
  },
  // SOFTER FOODS
  {
    id: "10",
    title: "Purée Roast Chicken",
    description: "A smooth purée of roast chicken, carrots and potatoes with gravy. Level 4 suitable.",
    price: 5.50,
    image: roastChicken,
    softer: "l4p",
    rating: 4.8,
    reviewsCount: 32
  },
  {
    id: "11",
    title: "Minced Beef & Mash",
    description: "Finely minced beef in gravy with soft mashed potatoes. Level 5 suitable.",
    price: 5.25,
    image: cottagePie,
    softer: "l5",
    rating: 4.6,
    reviewsCount: 24
  },
  // WORLD FOODS
  {
    id: "12",
    title: "Chicken Tikka Masala",
    description: "Chicken breast pieces in a mildly spiced tomato and cream sauce, served with pilau rice.",
    price: 6.45,
    image: sweetSour,
    world: "ah",
    range: "asia",
    rating: 4.7,
    reviewsCount: 187
  },
  {
    id: "13",
    title: "Beef Lasagne",
    description: "An Italian classic with rich beef ragu and creamy béchamel sauce.",
    price: 5.95,
    image: heroMeals,
    category: "beef",
    range: "italy",
    rating: 4.6,
    reviewsCount: 145
  },
  // OUR RANGES - Chef's Kitchen
  {
    id: "14",
    title: "Slow Cooked Lamb Shank",
    description: "Tender lamb shank in a red wine and rosemary gravy, served with minted mash.",
    price: 8.95,
    image: chefsKitchen,
    category: "lamb",
    range: "chefs",
    rating: 4.9,
    reviewsCount: 67
  },
  // SPECIALS
  {
    id: "15",
    title: "Winter Stew",
    description: "Hearty root vegetable and beef stew, perfect for cold days.",
    price: 5.75,
    image: heroMeals,
    category: "beef",
    range: "hearty",
    rating: 4.8,
    reviewsCount: 29
  }
];
