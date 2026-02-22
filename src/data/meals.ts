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
  specials?: string;
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
  // MAIN MEALS - Pork
  {
    id: "16",
    title: "Roast Pork",
    description: "Tender roast pork served with apple sauce, roast potatoes and seasonal vegetables.",
    price: 6.25,
    image: roastChicken,
    category: "pork",
    range: "tender",
    rating: 4.7,
    reviewsCount: 64
  },
  // MAIN MEALS - Lamb
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
  // MAIN MEALS - Veg
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
  {
    id: "17",
    title: "Sticky Toffee Pudding",
    description: "A classic British dessert with dates and a rich toffee sauce.",
    price: 3.50,
    image: chefsKitchen,
    category: "hot-desserts",
    rating: 4.9,
    reviewsCount: 204
  },
  {
    id: "18",
    title: "Strawberry Cheesecake",
    description: "Creamy cheesecake on a biscuit base topped with strawberry sauce.",
    price: 2.75,
    image: chefsKitchen,
    category: "cold-desserts",
    rating: 4.5,
    reviewsCount: 112
  },
  // SOFTER FOODS
  {
    id: "10",
    title: "Purée Roast Chicken",
    description: "A smooth purée of roast chicken, carrots and potatoes with gravy. Level 4 suitable.",
    price: 5.50,
    image: roastChicken,
    category: "softer",
    softer: "l4p",
    rating: 4.8,
    reviewsCount: 32
  },
  {
    id: "19",
    title: "Purée Salmon & Veg",
    description: "Smooth purée of salmon and vegetables. Level 4 suitable.",
    price: 5.75,
    image: heroMeals,
    category: "softer",
    softer: "l4p",
    rating: 4.7,
    reviewsCount: 18
  },
  {
    id: "20",
    title: "Purée Egg & Mayo Sandwich",
    description: "Level 4 suitable purée sandwich with egg and mayonnaise.",
    price: 4.50,
    image: cottagePie,
    category: "softer",
    softer: "l4s",
    rating: 4.4,
    reviewsCount: 12
  },
  {
    id: "21",
    title: "Purée Lemon Sponge",
    description: "Level 4 suitable purée cake with lemon flavor.",
    price: 3.25,
    image: chefsKitchen,
    category: "softer",
    softer: "l4d",
    rating: 4.6,
    reviewsCount: 21
  },
  {
    id: "11",
    title: "Minced Beef & Mash",
    description: "Finely minced beef in gravy with soft mashed potatoes. Level 5 suitable.",
    price: 5.25,
    image: cottagePie,
    category: "softer",
    softer: "l5",
    rating: 4.6,
    reviewsCount: 24
  },
  {
    id: "22",
    title: "Soft Roast Pork",
    description: "Bite-sized pieces of roast pork in gravy. Level 6 suitable.",
    price: 5.95,
    image: roastChicken,
    category: "softer",
    softer: "l6",
    rating: 4.7,
    reviewsCount: 15
  },
  // WORLD FOODS
  {
    id: "23",
    title: "Caribbean Chicken & Rice",
    description: "Traditional Caribbean jerk-style chicken with rice and peas.",
    price: 6.75,
    image: sweetSour,
    category: "world",
    world: "cw",
    rating: 4.8,
    reviewsCount: 42
  },
  {
    id: "24",
    title: "Kosher Beef Goulash",
    description: "Rich beef stew prepared according to Kosher standards.",
    price: 7.95,
    image: heroMeals,
    category: "world",
    world: "ks",
    rating: 4.6,
    reviewsCount: 28
  },
  {
    id: "12",
    title: "Chicken Tikka Masala",
    description: "Chicken breast pieces in a mildly spiced tomato and cream sauce, served with pilau rice.",
    price: 6.45,
    image: sweetSour,
    category: "world",
    world: "ah",
    range: "asia",
    rating: 4.7,
    reviewsCount: 187
  },
  {
    id: "25",
    title: "Halal Vegetable Biryani",
    description: "Aromatic rice dish with mixed vegetables, prepared Halal.",
    price: 5.95,
    image: sweetSour,
    category: "world",
    world: "ahv",
    diet: "veg",
    rating: 4.5,
    reviewsCount: 34
  },
  // SPECIALS
  {
    id: "26",
    title: "Gift Voucher - £25",
    description: "The perfect gift for friends and family.",
    price: 25.00,
    image: chefsKitchen,
    category: "specials",
    specials: "vouch",
    rating: 5.0,
    reviewsCount: 10
  },
  {
    id: "30",
    title: "Tasty Savings Meal Deal",
    description: "Get a selection of our best-selling meals at a special price.",
    price: 19.99,
    image: heroMeals,
    category: "specials",
    specials: "save",
    rating: 4.9,
    reviewsCount: 88
  },
  {
    id: "31",
    title: "Winter Comfort Pack",
    description: "Specially curated meals for the winter season.",
    price: 45.00,
    image: cottagePie,
    category: "specials",
    specials: "ws",
    rating: 4.8,
    reviewsCount: 42
  },
  // RANGES coverage
  {
    id: "27",
    title: "Mini Roast Chicken",
    description: "A smaller portion of our classic roast chicken.",
    price: 3.95,
    image: roastChicken,
    category: "chicken",
    range: "mini",
    rating: 4.8,
    reviewsCount: 54
  },
  {
    id: "28",
    title: "Mini Shepherds Pie",
    description: "A smaller portion of our hearty shepherds pie.",
    price: 4.25,
    image: cottagePie,
    category: "lamb",
    range: "mini-extra",
    rating: 4.7,
    reviewsCount: 41
  },
  {
    id: "29",
    title: "Breakfast Pack",
    description: "All your breakfast essentials in one pack.",
    price: 15.00,
    image: chefsKitchen,
    category: "breakfast",
    range: "breakfast",
    rating: 4.9,
    reviewsCount: 22
  },
  {
    id: "32",
    title: "Family Menu Pack",
    description: "Great value pack for the whole family.",
    price: 35.00,
    image: chefsKitchen,
    category: "packs",
    range: "packs",
    rating: 4.8,
    reviewsCount: 15
  }
];
