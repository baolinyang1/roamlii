import { ArrowRight, CreditCard, ShoppingCart } from "lucide-react";
import { FeatureCard } from "@/components/Cards/FeatureCard";

export const DescriSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-50">
      <h1 className="text-3xl font-bold text-center">Tools Dashboard</h1>
      <h2 className="text-center text-xl text-muted-foreground">
        Explore our suite of tools designed to help your business grow and
        succeed in the digital landscape.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 py-3 px-4 sm:px-8 md:px-14">
        <FeatureCard
          title="Lead Management System"
          description="Learn more about our comprehensive Lead Management System."
          buttonLabel="Explore LMS"
          icon={<ArrowRight className="w-4 h-4" />}
        />
        <FeatureCard
          title="Billing Information"
          description="View your current subscriptions and billing history."
          buttonLabel="Manage Billing"
          icon={<CreditCard className="w-4 h-4" />}
        />
        <FeatureCard
          title="Tools Checkout"
          description="Ready to purchase? Proceed to checkout with your selected tools."
          buttonLabel="Checkout"
          icon={<ShoppingCart className="w-4 h-4" />}
        />
      </div>
    </section>
  );
};
