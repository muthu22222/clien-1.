import { Accessibility } from "lucide-react";

const AccessibilityButton = () => {
  return (
    <button
      className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-forest-dark transition-colors z-40"
      aria-label="Accessibility options"
      title="Accessibility options"
    >
      <Accessibility className="h-5 w-5" />
    </button>
  );
};

export default AccessibilityButton;
