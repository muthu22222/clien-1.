import { Star } from "lucide-react";

const TrustpilotBadge = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-[hsl(153,70%,35%)] p-1">
            <Star className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
          </div>
        ))}
        <div className="bg-[hsl(153,70%,35%)] p-1 relative overflow-hidden">
          <Star className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-muted" />
        </div>
      </div>
      <span className="font-bold text-foreground flex items-center gap-1">
        <Star className="h-4 w-4 fill-[hsl(153,70%,35%)] text-[hsl(153,70%,35%)]" />
        Trustpilot
      </span>
    </div>
  );
};

export default TrustpilotBadge;
