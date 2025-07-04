import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export const OnboardingCard = () => {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Lead Management System – Onboarding
        </CardTitle>
        <span className="text-4xl font-bold text-[#64748B]">
          $490 <span className="text-base font-normal ml-1">one-off</span>
        </span>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-base text-muted-foreground leading-relaxed">
          It can be extremely time consuming and down-right intimidating to
          integrate a new system into your business operations. And to be
          honest, most small businesses don&apos;t have the time or the digital
          bandwidth to get systems like this set up to be truly effective
          solutions for them. Instead, the new system is added to bottom of the
          list of problems the owner/manager has to solve. A system is only as
          good as its initial integration, its adoption by the team, and its
          ongoing management. We&apos;ll help get you set up, so you can make
          the most out of this incredible system, and keep you on track to
          ensure it&apos;s solving problems for you every single day.
        </p>
        <div className="flex items-center gap-4 pt-4 border-t">
          <Button
            className="cursor-pointer flex-[0.7] bg-[#4682B4] text-white hover:bg-[#5673a3] flex items-center justify-center gap-2"
            onClick={() => toast("Add to Cart clicked!")}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
          <span className="text-[#D97706] text-sm flex-[0.3]">
            Add a subscription plan to your cart before adding this item.
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
