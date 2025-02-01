import { useState } from "react";
import { Coffee } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { PreferenceForm } from "@/components/preference-form";
import { CoffeeCard } from "@/components/coffee-card";
import { RecommendationSkeleton } from "@/components/recommendation-skeleton";

// Mock data for coffee recommendations
const COFFEE_RECOMMENDATIONS = [
  {
    name: "Ethiopian Yirgacheffe",
    description:
      "A light roast coffee with bright acidity, floral notes, and hints of citrus and bergamot.",
    strength: "Medium",
    roast: "Light Roast",
  },
  {
    name: "Colombian Supremo",
    description:
      "A well-balanced medium roast with caramel sweetness, nutty undertones, and a smooth finish.",
    strength: "Medium",
    roast: "Medium Roast",
  },
  {
    name: "Sumatra Mandheling",
    description:
      "A full-bodied dark roast with earthy notes, low acidity, and a rich, complex flavor profile.",
    strength: "Strong",
    roast: "Dark Roast",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferenceSubmit = async (preferences: {
    roastLevel: string;
    brewMethod: string;
    flavorProfile: string;
  }) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setShowRecommendations(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-8 pt-4">
      <header className="mx-auto mb-8 flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="size-8 text-primary" />
          <Typography.H3>Coffee AI</Typography.H3>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Typography.H1 className="mb-4">
            Find Your Perfect Coffee Match
          </Typography.H1>
          <Typography.Lead>
            Let our AI help you discover coffee based on your preferences
          </Typography.Lead>
        </div>

        <div className="mb-16 flex justify-center">
          <PreferenceForm onSubmit={handlePreferenceSubmit} />
        </div>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RecommendationSkeleton />
            <RecommendationSkeleton />
            <RecommendationSkeleton />
          </div>
        )}

        {showRecommendations && !isLoading && (
          <>
            <Typography.H2 className="mb-8 text-center">
              Recommended Coffee Selections
            </Typography.H2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {COFFEE_RECOMMENDATIONS.map((coffee) => (
                <CoffeeCard
                  key={coffee.name}
                  name={coffee.name}
                  description={coffee.description}
                  strength={coffee.strength}
                  roast={coffee.roast}
                  onSelect={() => {
                    // Handle selection
                  }}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}