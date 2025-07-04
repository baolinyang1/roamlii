import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, CircleAlert } from "lucide-react";
import { toast } from "sonner";
import type { PlanCardProps } from "@/types";

export const PlanCard = ({
  plan,
  billingPeriod,
  onAddToCart,
  isLoading = false,
  isSelected = false,
}: PlanCardProps) => {
  const isYearly = billingPeriod === "yearly";
  const displayPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const savings = plan.yearlySavings;

  const handleAddToCart = () => {
    if (!isLoading) {
      onAddToCart(plan.id);
      toast(`${plan.title} added to cart!`);
    }
  };

  return (
    <Card
      className={`${isSelected ? "ring-2 ring-[#4682B4]" : ""} ${plan.isPopular ? "border-[#4682B4]" : ""}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold leading-none tracking-tight">
            {plan.title}
          </CardTitle>
          {plan.isPopular && (
            <Badge className="text-xs font-semibold text-white bg-[#4682B4] px-2 py-1 rounded border-transparent">
              Popular
            </Badge>
          )}
        </div>
        <div className="mb-3">
          <span className="text-4xl font-bold text-[#64748B]">
            ${displayPrice.toLocaleString()}{" "}
            <span className="text-base font-normal text-[#64748B] ml-1">
              /{isYearly ? "year" : "month"}
            </span>
          </span>
          {isYearly && (
            <div className="mt-2">
              <Badge className="text-sm font-semibold text-green-600 bg-green-50 px-4 py-1 rounded border-transparent">
                You will save ${savings}
              </Badge>
            </div>
          )}
        </div>
        <CardDescription>
          <p className="text-base text-muted-foreground">{plan.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between h-full">
        <div>
          <h4 className="text-lg font-semibold mb-1">Includes:</h4>
          <ul className="space-y-2 text-sm font-medium">
            {plan.includes.map((feature, index) => (
              <li
                key={`${plan.id}-include-${index}`}
                className="flex items-start gap-2 text-foreground"
              >
                <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
                <span>{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mt-2 mb-2">
            Similar Services:
          </h4>
          <ul className="space-y-2 text-base font-medium text-muted-foreground">
            {plan.similarServices.map((comparison, index) => (
              <li
                key={`${plan.id}-similar-${index}`}
                className="flex text-medium items-start gap-2 text-muted-foreground"
              >
                <CircleAlert className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span>
                  {comparison.service} ({comparison.description})
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-base font-semibold mt-3 mb-4">{plan.note}</p>
        <hr className="border-t border-border -mx-6 mb-4" />
        <Button
          variant="outline"
          className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#4682B4] text-white hover:bg-[#5673a3] disabled:opacity-50"
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          <ShoppingCart className="w-4 h-4" />
          {isLoading ? "Adding..." : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
};
