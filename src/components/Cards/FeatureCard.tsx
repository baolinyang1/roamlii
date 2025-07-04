import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { FeatureCardProps } from "@/types";

export const FeatureCard = ({
  title,
  description,
  buttonLabel,
  icon,
  onClick,
  isDisabled = false,
  variant = "outline",
}: FeatureCardProps) => {
  const handleClick = () => {
    if (!isDisabled && !onClick) {
      toast(`${buttonLabel} clicked!`);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Card className="min-h-60 lg:min-h-64 flex flex-col max-w-md mx-auto w-full">
      <CardHeader className="flex-1 p-6">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base font-semibold text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Button
          variant={variant}
          className="cursor-pointer w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleClick}
          disabled={isDisabled}
        >
          {icon}
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  );
};
