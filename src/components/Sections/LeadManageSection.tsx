"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { PlanCard } from "@/components/Cards/PlanCard";
import { WebsiteRebuilderPackageCard } from "@/components/Cards/WebsiteRebuilderPackageCard";
import { OnboardingCard } from "@/components/Cards/OnboardingCard";
import { Badge } from "@/components/ui/badge";
import {
  DIGITAL_GROWTH_PLANS,
  BILLING_CONFIG,
} from "@/data/digital-growth-plans";
import type { BillingPeriod, PlanTier } from "@/types";

export const LeadManageSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const isYearly = billingPeriod === "yearly";

  const handleBillingChange = (checked: boolean): void => {
    setBillingPeriod(checked ? "yearly" : "monthly");
  };

  const handleAddToCart = (planId: PlanTier): void => {
    console.log(`Adding plan ${planId} with ${billingPeriod} billing to cart`);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-3 p-2 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-3 relative">
          <div className="w-32 text-right">
            <span
              className={
                isYearly
                  ? "text-muted-foreground"
                  : "font-semibold text-foreground"
              }
            >
              {BILLING_CONFIG.monthlyLabel}
            </span>
          </div>

          <Switch
            checked={isYearly}
            onCheckedChange={handleBillingChange}
            className="cursor-pointer data-[state=checked]:bg-[#4682B4] dark:data-[state=checked]:bg-[#4682B4] scale-140"
          />

          <div className="w-32 text-left relative">
            <span
              className={
                isYearly
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground"
              }
            >
              {BILLING_CONFIG.yearlyLabel}
            </span>
            {isYearly && (
              <Badge className="hidden sm:block absolute left-full top-1/2 -translate-y-1/2 text-sm text-white font-semibold bg-[#4B4A68] px-2 py-1 rounded-md whitespace-nowrap border-transparent">
                Save up to ${BILLING_CONFIG.maxYearlySavings}/year
              </Badge>
            )}
          </div>
        </div>

        {isYearly && (
          <Badge className="block sm:hidden text-sm text-white font-semibold bg-[#4B4A68] px-2 py-1 rounded-md whitespace-nowrap border-transparent">
            Save up to ${BILLING_CONFIG.maxYearlySavings}/year
          </Badge>
        )}
      </div>
      <p className="text-base text-center text-muted-foreground p-2 font-semibold">
        Choose your LMS Membership Plan month.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-5 py-3 px-4 md:px-15 max-w-8xl mx-auto">
        {DIGITAL_GROWTH_PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            billingPeriod={billingPeriod}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 flex items-center justify-center p-4">
        <OnboardingCard />
        <WebsiteRebuilderPackageCard />
      </div>
    </section>
  );
};
