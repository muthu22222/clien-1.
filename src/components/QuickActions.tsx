import { ListOrdered, Hash, Heart } from "lucide-react";

const actions = [
  { icon: ListOrdered, label: "Repeat\nOrder" },
  { icon: Hash, label: "Shop By\nBrochure\nCode" },
  { icon: Heart, label: "Shop\nFrom\nFavourites" },
];

const QuickActions = () => {
  return (
    <section className="bg-card py-8 px-4">
      <div className="max-w-md mx-auto flex flex-col gap-4 lg:max-w-4xl lg:flex-row">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-4 bg-secondary rounded-lg px-6 py-5 w-full hover:bg-gold-dark transition-colors group"
          >
            <div className="bg-primary rounded-full p-3 flex-shrink-0">
              <action.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-primary font-bold text-xl text-left whitespace-pre-line leading-tight">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
