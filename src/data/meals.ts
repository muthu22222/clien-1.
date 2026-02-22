import roastChicken from "@/assets/meal-roast-chicken.jpg";
import cottagePie from "@/assets/meal-cottage-pie.jpg";
import sweetSour from "@/assets/meal-sweet-sour.jpg";
import heroMeals from "@/assets/hero-meals.jpg";
import chefsKitchen from "@/assets/chefs-kitchen.jpg";

export interface Review {
  user: string;
  rating: number;
  date: string;
  comment: string;
  verified?: boolean;
}

export interface CookingInstructions {
  oven?: string;
  microwave?: {
    power: string;
    steps: string[];
  }[];
  guidelines?: string;
}

export interface Meal {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subCategory?: string;
  range?: string;
  diet?: string;
  softer?: string;
  world?: string;
  specials?: string;
  isNew?: boolean;
  bestSeller?: boolean;
  rating: number;
  reviewsCount: number;
  productCode?: string;
  weight?: string;
  cookingInstructions?: CookingInstructions;
  ingredients?: string;
  ingredientSummary?: string;
  storage?: string;
  suitableFor?: string[];
  reviews?: Review[];
}

export const meals: Meal[] = [
  // MEAL FROM SCREENSHOT
  {
    id: "2192",
    title: "Melt in the Middle Chocolate Puddings (pack of 2)",
    description: "A rich Belgian dark chocolate sponge with a lusciously chocolate molten centre. Velvety and indulgent.",
    price: 4.49,
    image: chefsKitchen,
    category: "hot-desserts",
    subCategory: "DESSERTS & CAKES",
    productCode: "2192",
    weight: "90g",
    rating: 4.5,
    reviewsCount: 6,
    suitableFor: ["LS", "V"],
    storage: "Store at -18°C, do not refreeze once thawed",
    ingredients: "**Egg**, Sugar, Belgian Dark Chocolate (22%) (Cocoa Mass, Sugar, Fat Reduced Cocoa Powder, Emulsifiers (Rapeseed Lecithin, **Soya** Lecithin), Natural Vanilla Flavouring), Butter (**Milk**), Vegetable Oils (Rapeseed, Sunflower), **Wheat** Flour, Water, **Milk** Powder, Cocoa Powder (1.7%).",
    ingredientSummary: "Delicious Belgian chocolate sponge with a rich hidden chocolate centre.",
    cookingInstructions: {
      oven: "Oven - place on a lined baking tray. Pre-heated oven: 200°C/400°F/Gas 6. Fan oven: 180°C/350°F. 10 mins. Use a cake slice to carefully lift the pudding onto a serving plate.",
      guidelines: "Always cook from frozen. Remove all packaging (including paper case). Ensure food is warmed through before serving. Once heated do not reheat. For best results oven heat.",
      microwave: [
        {
          power: "700 Watt/Category D",
          steps: ["step 1: 1 min", "step 2: Stand for 2 mins"]
        },
        {
          power: "800 Watt/Category E",
          steps: ["step 1: 50 secs", "step 2: Stand for 2 mins"]
        }
      ]
    },
    reviews: [
      { user: "Carol James", rating: 5, date: "February 15", comment: "Really enjoyed these", verified: true },
      { user: "Ruth", rating: 4, date: "February 14", comment: "bit small for price", verified: true },
      { user: "brenda mclaren", rating: 5, date: "February 14", comment: "Two puddings lovely", verified: true }
    ]
  },
  // MAIN MEALS - Beef
  {
    id: "1",
    title: "Roast Beef & Yorkshire Pudding",
    description: "Succulent slices of roast beef served with a crisp Yorkshire pudding, roast potatoes, carrots and rich gravy.",
    price: 6.95,
    image: heroMeals,
    category: "beef",
    range: "best",
    productCode: "1001",
    weight: "400g",
    rating: 4.9,
    reviewsCount: 342,
    bestSeller: true,
    storage: "Keep frozen at -18°C or below.",
    suitableFor: ["LS"],
    ingredients: "Roast Beef (25%), Potatoes (20%), Carrots (15%), Water, **Wheat** Flour, **Egg**, Vegetable Oil, Beef Stock, Salt, Pepper, Cornflour, Colour (Caramel).",
    ingredientSummary: "Tender beef slices with traditional Yorkshire pudding, roasties and seasonal carrots.",
    cookingInstructions: {
      oven: "Oven - 200°C/400°F/Gas 6. Remove film from Yorkshire pudding. Place tray on a baking sheet. Cook for 35-40 mins.",
      microwave: [
        {
          power: "800 Watt",
          steps: ["Pierce film lid.", "Cook for 8 mins.", "Stand for 2 mins before serving."]
        }
      ]
    }
  },
  {
    id: "2",
    title: "Cottage Pie",
    description: "Minced beef in a rich gravy with carrots and onions, topped with mashed potato and cheese.",
    price: 4.95,
    image: cottagePie,
    category: "beef",
    range: "essentials",
    productCode: "1002",
    weight: "380g",
    rating: 4.5,
    reviewsCount: 89,
    bestSeller: true,
    storage: "Keep frozen at -18°C.",
    suitableFor: ["GF"],
    ingredients: "Potatoes (35%), Minced Beef (25%), Carrots, Onions, Water, Cheese (**Milk**), Beef Stock, Cornflour, Salt, Pepper, Thyme.",
    ingredientSummary: "Classic minced beef and carrot filling topped with creamy mashed potato and melted cheese.",
    cookingInstructions: {
      oven: "Oven - 190°C/375°F/Gas 5 for 40-45 mins.",
      microwave: [
        {
          power: "800 Watt",
          steps: ["Pierce film.", "Cook for 9 mins.", "Stand for 2 mins."]
        }
      ]
    }
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
    productCode: "2001",
    weight: "410g",
    rating: 4.8,
    reviewsCount: 124,
    bestSeller: true,
    storage: "Store at -18°C.",
    suitableFor: ["LS"],
    ingredients: "Chicken Breast (28%), Potatoes, Carrots, Peas, Water, Stuffing (**Wheat** Flour, Onion, Sage), Chicken Stock, Salt, Pepper.",
    ingredientSummary: "Whole roast chicken breast with savoury stuffing, roast potatoes and peas.",
    cookingInstructions: {
      oven: "Oven - 200°C for 35 mins.",
      microwave: [
        {
          power: "850 Watt",
          steps: ["Cook for 7 mins.", "Stand and serve."]
        }
      ]
    }
  },
  {
    id: "4",
    title: "Sweet & Sour Chicken",
    description: "Chicken breast pieces in a tangy sweet and sour sauce with pineapple, peppers and onions, served with egg fried rice.",
    price: 6.25,
    image: sweetSour,
    category: "chicken",
    world: "ah",
    productCode: "2002",
    weight: "400g",
    rating: 4.2,
    reviewsCount: 56,
    storage: "Keep frozen.",
    ingredients: "Egg Fried Rice (40%), Chicken Breast (20%), Pineapple, Peppers, Onions, Sugar, Vinegar, Tomato Paste, Cornflour, Soy Sauce (**Wheat**, **Soya**).",
    ingredientSummary: "Tender chicken in a fruit-infused tangy sauce served with fluffy egg rice.",
    cookingInstructions: {
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 6 mins.", "Stir halfway through.", "Cook for further 2 mins."]
        }
      ]
    }
  },
  // MEALS - Fish
  {
    id: "5",
    title: "Battered Cod & Chips",
    description: "Battered cod fillet served with chunky chips and mushy peas.",
    price: 7.50,
    image: heroMeals,
    category: "fish",
    range: "best",
    productCode: "3001",
    weight: "420g",
    rating: 4.9,
    reviewsCount: 210,
    storage: "Store at -18°C.",
    ingredients: "Cod (**Fish**) (30%), Potatoes (30%), Peas, **Wheat** Flour, Vegetable Oil, Salt, Pepper, Raising Agents.",
    ingredientSummary: "Crispy battered cod fillet served with chunky oven chips and pea purée.",
    cookingInstructions: {
      oven: "Oven - 210°C/425°F/Gas 7 for 25-30 mins.",
      guidelines: "Not suitable for microwave cooking. Cook from frozen."
    }
  },
  {
    id: "9",
    title: "Gluten Free Fish Pie",
    description: "Pieces of white fish, salmon and smoked haddock in a creamy leek sauce, topped with buttery mash.",
    price: 6.50,
    image: cottagePie,
    category: "fish",
    diet: "gluten",
    productCode: "3002",
    weight: "400g",
    rating: 4.5,
    reviewsCount: 45,
    storage: "Keep frozen at -18°C.",
    suitableFor: ["GF", "LS"],
    ingredients: "Potatoes, White **Fish** (15%), **Salmon** (10%), Smoked Haddock (**Fish**) (5%), **Milk**, Butter, Leeks, Cornflour, Salt, White Pepper.",
    ingredientSummary: "A medley of white fish, salmon and haddock in a leek sauce with buttery mash topping.",
    cookingInstructions: {
      oven: "Oven - 190°C for 35-40 mins.",
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 8 mins.", "Stand for 2 mins."]
        }
      ]
    }
  },
  // MEALS - Lamb
  {
    id: "14",
    title: "Slow Cooked Lamb Shank",
    description: "Tender lamb shank in a red wine and rosemary gravy, served with minted mash.",
    price: 8.95,
    image: chefsKitchen,
    category: "lamb",
    range: "chefs",
    productCode: "4001",
    weight: "450g",
    rating: 4.9,
    reviewsCount: 67,
    storage: "Store at -18°C.",
    ingredients: "Lamb Shank (40%), Potatoes, Water, Red Wine, Carrots, Onions, Butter (**Milk**), Mint, Rosemary, Salt, Pepper, Garlic.",
    ingredientSummary: "Slow-roasted lamb on the bone with a rich wine reduction and minted potato mash.",
    cookingInstructions: {
      oven: "Oven - 180°C for 50-55 mins.",
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 12 mins.", "Stand for 3 mins."]
        }
      ]
    }
  },
  // MEALS - Veg
  {
    id: "8",
    title: "Vegetable Lasagne",
    description: "Layers of pasta with a rich Mediterranean vegetable and tomato sauce, topped with béchamel and cheese.",
    price: 5.25,
    image: heroMeals,
    category: "veg",
    diet: "veg",
    productCode: "4501",
    weight: "400g",
    rating: 4.4,
    reviewsCount: 78,
    storage: "Keep frozen.",
    suitableFor: ["V"],
    ingredients: "Vegetables (Courgettes, Peppers, Aubergine) (30%), Tomatoes, Pasta (**Wheat** Flour, Water), **Milk**, Cheese (**Milk**), Flour, Salt, Herbs.",
    ingredientSummary: "Layers of pasta with Mediterranean veg in a rich tomato sauce and cheese topping.",
    cookingInstructions: {
      oven: "Oven - 200°C for 35-40 mins.",
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 8 mins.", "Stand for 2 mins."]
        }
      ]
    }
  },
  // DESSERTS
  {
    id: "6",
    title: "Apple Crumble",
    description: "Sweet bramley apples topped with a buttery crumble, served with creamy custard.",
    price: 2.95,
    image: chefsKitchen,
    category: "hot-desserts",
    productCode: "5001",
    weight: "200g",
    rating: 4.7,
    reviewsCount: 156,
    storage: "Keep frozen.",
    suitableFor: ["V"],
    ingredients: "Apples (40%), Custard (**Milk**), **Wheat** Flour, Sugar, Butter (**Milk**), Oats.",
    ingredientSummary: "Tangy Bramley apple filling with a classic oat crumble topping and custard.",
    cookingInstructions: {
      oven: "Oven - 180°C for 20 mins.",
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 2 mins.", "Stand for 1 min."]
        }
      ]
    }
  },
  {
    id: "7",
    title: "Chocolate Sponge Pudding",
    description: "Rich chocolate sponge with a molten chocolate sauce center.",
    price: 3.25,
    image: chefsKitchen,
    category: "hot-desserts",
    productCode: "5002",
    weight: "110g",
    rating: 4.6,
    reviewsCount: 98,
    storage: "Keep frozen.",
    suitableFor: ["V"],
    ingredients: "**Wheat** Flour, Sugar, **Egg**, Butter (**Milk**), Cocoa Powder, Chocolate Chips (**Soya**), Raising Agents.",
    ingredientSummary: "Moist chocolate sponge pudding served with a smooth, warm chocolate sauce.",
    cookingInstructions: {
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 50 seconds.", "Stand for 1 min."]
        }
      ]
    }
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
    productCode: "6001",
    weight: "350g",
    rating: 4.8,
    reviewsCount: 32,
    storage: "Keep frozen at -18°C.",
    suitableFor: ["L4"],
    ingredients: "Chicken Purée (30%), Potato Purée, Carrot Purée, Gravy Purée, Salt, Pepper.",
    ingredientSummary: "Smooth, texture-modified roast chicken dish with potato and carrot purée.",
    cookingInstructions: {
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 6 mins.", "Ensure piping hot throughout."]
        }
      ]
    }
  },
  {
    id: "11",
    title: "Minced Beef & Mash",
    description: "Finely minced beef in gravy with soft mashed potatoes. Level 5 suitable.",
    price: 5.25,
    image: cottagePie,
    category: "softer",
    softer: "l5",
    productCode: "6002",
    weight: "380g",
    rating: 4.6,
    reviewsCount: 24,
    storage: "Keep frozen.",
    suitableFor: ["L5"],
    ingredients: "Minced Beef (25%), Mashed Potato (**Milk**), Gravy, Carrots, Salt, Pepper.",
    ingredientSummary: "Soft, finely minced beef in gravy with creamy mashed potato topping.",
    cookingInstructions: {
      microwave: [
        {
          power: "800 Watt",
          steps: ["Cook for 7 mins.", "Stand for 2 mins."]
        }
      ]
    }
  },
  // WORLD FOODS
  {
    id: "12",
    title: "Chicken Tikka Masala",
    description: "Chicken breast pieces in a mildly spiced tomato and cream sauce, served with pilau rice.",
    price: 6.45,
    image: sweetSour,
    category: "world",
    world: "ah",
    range: "asia",
    productCode: "7001",
    weight: "400g",
    rating: 4.7,
    reviewsCount: 187,
    storage: "Keep frozen.",
    ingredients: "Pilau Rice (40%), Chicken Breast (20%), Tomatoes, Cream (**Milk**), Onions, Spices, Yogurt (**Milk**), Ginger, Garlic.",
    ingredientSummary: "Chicken breast in a creamy, lightly spiced Tikka sauce served with aromatic rice.",
    cookingInstructions: {
      microwave: [
        {
          power: "800 Watt",
          steps: ["Pierce film.", "Cook for 5 mins.", "Stir and cook for 3 more mins.", "Stand for 2 mins."]
        }
      ]
    }
  },
  // SPECIALS
  {
    id: "26",
    title: "Gift Voucher - £25",
    price: 25.00,
    image: chefsKitchen,
    category: "specials",
    specials: "vouch",
    productCode: "GV25",
    rating: 5.0,
    reviewsCount: 10,
    ingredientSummary: "A digital or physical voucher valid for all Wiltshire Farm Foods products.",
    description: "Valid for 12 months from date of purchase. Can be used for any Wiltshire Farm Foods order."
  }
];

