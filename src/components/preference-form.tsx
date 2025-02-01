import { useState } from "react";
import { Coffee, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";

interface PreferenceFormProps {
  onSubmit: (preferences: {
    roastLevel: string;
    brewMethod: string;
    flavorProfile: string;
  }) => Promise<void>;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    roastLevel: "",
    brewMethod: "",
    flavorProfile: "",
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await onSubmit(preferences);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Coffee className="size-5" />
          Coffee Preferences
        </CardTitle>
        <Typography.P className="text-muted-foreground">
          Let us know your preferences to get personalized recommendations
        </Typography.P>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Typography.Small>Roast Level</Typography.Small>
          <Select
            value={preferences.roastLevel}
            onValueChange={(value) =>
              setPreferences({ ...preferences, roastLevel: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select roast level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light Roast</SelectItem>
              <SelectItem value="medium">Medium Roast</SelectItem>
              <SelectItem value="dark">Dark Roast</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Typography.Small>Brew Method</Typography.Small>
          <Select
            value={preferences.brewMethod}
            onValueChange={(value) =>
              setPreferences({ ...preferences, brewMethod: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select brew method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="drip">Drip Coffee</SelectItem>
              <SelectItem value="espresso">Espresso</SelectItem>
              <SelectItem value="french">French Press</SelectItem>
              <SelectItem value="pour">Pour Over</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Typography.Small>Flavor Profile</Typography.Small>
          <Select
            value={preferences.flavorProfile}
            onValueChange={(value) =>
              setPreferences({ ...preferences, flavorProfile: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select flavor profile" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fruity">Fruity & Bright</SelectItem>
              <SelectItem value="nutty">Nutty & Chocolate</SelectItem>
              <SelectItem value="caramel">Caramel & Sweet</SelectItem>
              <SelectItem value="bold">Bold & Intense</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={
            isLoading ||
            !preferences.roastLevel ||
            !preferences.brewMethod ||
            !preferences.flavorProfile
          }
        >
          {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
          Get Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}