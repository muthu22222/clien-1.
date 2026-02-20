import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityButton from "@/components/AccessibilityButton";
import { Heart, Scale, Utensils, Apple } from "lucide-react";

interface DietPlan {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  suitableFor: string[];
}

const DIET_PLANS: DietPlan[] = [
  {
    id: 1,
    name: "Diabetic Friendly",
    description: "Carefully balanced meals designed to help manage blood sugar levels while enjoying delicious, nutritious food.",
    icon: <Heart className="h-6 w-6" />,
    features: [
      "Low in sugar and refined carbohydrates",
      "High in fiber and complex carbohydrates",
      "Portion-controlled meals",
      "Balanced protein and healthy fats"
    ],
    price: "From £4.99 per meal",
    suitableFor: ["Type 1 Diabetes", "Type 2 Diabetes", "Pre-diabetes"]
  },
  {
    id: 2,
    name: "Weight Management",
    description: "Nutritionally balanced meals designed to support healthy weight loss while keeping you satisfied and energized.",
    icon: <Scale className="h-6 w-6" />,
    features: [
      "Calorie-controlled portions",
      "High protein content for satiety",
      "Balanced macronutrients",
      "Low in unhealthy fats"
    ],
    price: "From £4.49 per meal",
    suitableFor: ["Weight Loss", "Weight Maintenance", "Healthy Eating"]
  },
  {
    id: 3,
    name: "Heart Healthy",
    description: "Meals designed to support cardiovascular health with reduced sodium and heart-healthy ingredients.",
    icon: <Heart className="h-6 w-6" />,
    features: [
      "Low in sodium and saturated fat",
      "Rich in omega-3 fatty acids",
      "High in antioxidants",
      "Plenty of fruits and vegetables"
    ],
    price: "From £5.29 per meal",
    suitableFor: ["High Blood Pressure", "High Cholesterol", "Heart Health"]
  },
  {
    id: 4,
    name: "High Protein",
    description: "Protein-rich meals perfect for maintaining muscle mass and supporting an active lifestyle.",
    icon: <Utensils className="h-6 w-6" />,
    features: [
      "20g+ protein per meal",
      "Lean protein sources",
      "Balanced with complex carbs",
      "Essential amino acids"
    ],
    price: "From £5.79 per meal",
    suitableFor: ["Active Lifestyle", "Muscle Maintenance", "Athletic Performance"]
  },
  {
    id: 5,
    name: "Vegetarian",
    description: "Delicious plant-based meals packed with nutrients and flavor for vegetarian diets.",
    icon: <Apple className="h-6 w-6" />,
    features: [
      "Complete protein sources",
      "Rich in vitamins and minerals",
      "High in fiber",
      "Varied cuisines and flavors"
    ],
    price: "From £4.29 per meal",
    suitableFor: ["Vegetarian Diet", "Plant-Based Eating", "Meat-Free Days"]
  },
  {
    id: 6,
    name: "Low Sodium",
    description: "Flavorful meals with reduced sodium content, perfect for those monitoring their salt intake.",
    icon: <Heart className="h-6 w-6" />,
    features: [
      "Under 600mg sodium per meal",
      "Herb and spice flavor enhancement",
      "No added salt in preparation",
      "Natural flavor preservation"
    ],
    price: "From £4.99 per meal",
    suitableFor: ["Low Sodium Diet", "Kidney Health", "Blood Pressure Management"]
  }
];

const DietPlans = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            DIET PLANS
          </h1>

          <p className="text-foreground text-center mb-12 max-w-3xl mx-auto">
            Our specialized diet plans are designed by nutritionists to meet specific dietary needs while ensuring delicious, satisfying meals. Choose the plan that best fits your health goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {DIET_PLANS.map((plan) => (
              <div key={plan.id} className="bg-card rounded-lg border border-gold overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                  </div>
                  
                  <p className="text-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Suitable For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.suitableFor.map((item, index) => (
                        <span key={index} className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gold/30">
                    <p className="text-primary font-bold mb-3">{plan.price}</p>
                    <button className="w-full bg-secondary text-secondary-foreground font-bold py-2 rounded hover:bg-gold-dark transition-colors">
                      View Meals
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card p-6 rounded-lg border border-gold mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Not Sure Which Plan to Choose?</h2>
            <p className="text-foreground mb-4">
              Our nutrition team is here to help you find the perfect diet plan for your needs. We can provide personalized recommendations based on your health goals, dietary restrictions, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded hover:bg-gold-dark transition-colors text-center">
                Speak to Nutritionist
              </a>
              <a href="/request-brochure" className="bg-card border-2 border-gold text-foreground font-bold px-6 py-3 rounded hover:bg-gold/10 transition-colors text-center">
                Download Diet Plan Guide
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-foreground mb-4">
              All our diet plans are reviewed by registered dietitians and meet UK nutritional guidelines.
            </p>
            <a href="/browse-meals" className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:bg-forest-dark transition-colors inline-block">
              Browse All Meals
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityButton />
    </div>
  );
};

export default DietPlans;
