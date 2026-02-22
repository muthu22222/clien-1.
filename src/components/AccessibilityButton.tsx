import { Accessibility } from "lucide-react";

const AccessibilityButton = () => {
  return (
    <button
      className="fixed right-4 top-[60%] -translate-y-1/2 bg-[#013220] text-white p-2.5 rounded-sm shadow-lg hover:bg-black transition-colors z-[45]"
      aria-label="Accessibility options"
      title="Accessibility options"
    >
      <Accessibility className="h-6 w-6" />
    </button>
  );
};

export default AccessibilityButton;
