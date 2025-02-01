import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface CoffeeCardProps {
  name: string;
  description: string;
  strength: string;
  roast: string;
  onSelect?: () => void;
}

export function CoffeeCard({
  name,
  description,
  strength,
  roast,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl text-foreground">{name}</CardTitle>
          <Coffee className="size-5 text-primary" />
        </div>
        <div className="flex gap-2">
          <Typography.Small className="rounded-full bg-secondary px-2.5 py-0.5">
            {strength}
          </Typography.Small>
          <Typography.Small className="rounded-full bg-secondary px-2.5 py-0.5">
            {roast}
          </Typography.Small>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Typography.P className="text-muted-foreground">{description}</Typography.P>
        <Button
          onClick={onSelect}
          className="w-full"
          variant="outline"
        >
          Select This Coffee
        </Button>
      </CardContent>
    </Card>
  );
}