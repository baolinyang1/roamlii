import type {
  DigitalGrowthPlan,
  PlanFeature,
  PlanComparison,
  PlanTier,
  NonEmptyArray,
} from "@/types";

const createFeatures = (features: string[]): readonly PlanFeature[] => {
  return features.map((name) => ({ name }));
};

const createComparisons = (
  comparisons: {
    service: string;
    description: string;
    category: "basic" | "advanced" | "enterprise";
  }[],
): readonly PlanComparison[] => {
  return comparisons;
};

export const DIGITAL_GROWTH_PLANS: NonEmptyArray<DigitalGrowthPlan> = [
  {
    id: "foundation",
    title: "Digital Growth Plan - Foundation",
    monthlyPrice: 190,
    yearlyPrice: 1900,
    description:
      "A simple, hands-off starting point. Get the essentials without the complexity. For businesses with simple technological needs and an interest in basic digitization tools. Roamlii offers a set of tools that once implemented, do not require constant monitoring or updating.",
    targetAudience: "Small businesses with simple technological needs",
    complexity: "low",
    maintenanceFrequency: "set-and-forget",
    includes: createFeatures([
      "Conversational AI",
      "Website Chat Widget",
      "Reputation AI",
      "Missed Call Text Back",
      "2-way Text and Email Conversations",
      "Email Templates",
      "GMB Messaging",
      "Facebook Messenger",
      "Text to Pay",
      "Dynamic Tagging",
    ]),
    similarServices: createComparisons([
      {
        service: "Google Reviews Auto-Response",
        description: "automated customer engagement",
        category: "basic",
      },
      {
        service: "Facebook Messenger Auto-Reply",
        description: "handling basic inquiries effortlessly",
        category: "basic",
      },
      {
        service: "Google's Missed Call Notifications",
        description: "keeping communication open without manual follow-ups",
        category: "basic",
      },
    ]),
    note: "Set it and forget it – These tools work in the background, requiring little to no ongoing effort after setup.",
    yearlySavings: 380,
  },
  {
    id: "basecamp",
    title: "Digital Growth Plan - Basecamp",
    monthlyPrice: 290,
    yearlyPrice: 2900,
    description:
      "Essential tools for businesses ready to climb higher and take control. For businesses with a moderate focus on digitization and are able to monitor and update their digital tools frequently (weekly).",
    targetAudience: "Growing businesses with moderate digitization focus",
    complexity: "medium",
    maintenanceFrequency: "weekly",
    includes: createFeatures([
      "All Foundation tools",
      "CRM",
      "Email Campaigns",
      "Social Media Dashboard",
      "Web Forms",
      "Survey Builder",
      "Reporting",
      "Communities",
      "Certificates",
      "Memberships",
      "GoKollab",
    ]),
    similarServices: createComparisons([
      {
        service: "MailChimp or Constant Contact",
        description: "for email campaigns and customer engagement",
        category: "advanced",
      },
      {
        service: "Google Forms or Typeform",
        description: "for collecting customer information",
        category: "advanced",
      },
      {
        service: "HubSpot Free CRM or Pipedrive",
        description: "for basic customer relationship management",
        category: "advanced",
      },
    ]),
    note: "Familiar and manageable – If you can navigate tools like MailChimp, these will feel intuitive. Requires light tech-savviness, with some upkeep to maximise effectiveness, but remains low-touch overall.",
    isPopular: true,
    yearlySavings: 580,
  },
  {
    id: "summit",
    title: "Digital Growth Plan - Summit",
    monthlyPrice: 390,
    yearlyPrice: 3900,
    description:
      "The most advanced tools, built for those who want to lead and excel. For businesses who are keen on innovating their marketing strategy using state-of-the-art digitization tools and have dedicated staff to manage digital tools on a daily basis.",
    targetAudience: "Enterprise businesses with dedicated digital teams",
    complexity: "high",
    maintenanceFrequency: "daily",
    includes: createFeatures([
      "All Basecamp tools",
      "Calendar Scheduling",
      "Workflow Automations",
      "Opportunities and Pipelines",
      "Website Builder",
      "Funnels & Landing Pages",
      "Blogging System",
      "Trigger Links",
      "Proposals & Estimates",
      "Invoices",
    ]),
    similarServices: createComparisons([
      {
        service: "HubSpot Pipelines",
        description: "for tracking leads and sales",
        category: "enterprise",
      },
      {
        service: "ActiveCampaign Automations",
        description: "for nurturing leads with automated emails",
        category: "enterprise",
      },
      {
        service: "ClickFunnels or Shopify Website Builder",
        description: "for maintaining a dynamic sales funnel or website",
        category: "enterprise",
      },
      {
        service: "WordPress Blogging",
        description: "for content marketing and SEO strategies",
        category: "enterprise",
      },
    ]),
    note: "Strategic and powerful – Designed for businesses that want full control over their digital presence and customer journey. Requires ongoing management and a solid understanding of navigating tools that work in concert with one another.",
    yearlySavings: 780,
  },
] as const;

export const BILLING_CONFIG = {
  monthlyLabel: "Monthly Billing",
  yearlyLabel: "Yearly Billing",
  maxYearlySavings: 780,
  currency: "USD",
  discountPercentage: 16.7,
} as const;

export const getPlanById = (id: PlanTier): DigitalGrowthPlan | undefined => {
  return DIGITAL_GROWTH_PLANS.find((plan) => plan.id === id);
};

export const getPopularPlan = (): DigitalGrowthPlan | undefined => {
  return DIGITAL_GROWTH_PLANS.find((plan) => plan.isPopular === true);
};

export const getPlansByComplexity = (
  complexity: DigitalGrowthPlan["complexity"],
): DigitalGrowthPlan[] => {
  return DIGITAL_GROWTH_PLANS.filter((plan) => plan.complexity === complexity);
};

export const calculatePrice = (
  plan: DigitalGrowthPlan,
  isYearly: boolean,
): number => {
  return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
};

export const calculateSavings = (plan: DigitalGrowthPlan): number => {
  return plan.monthlyPrice * 12 - plan.yearlyPrice;
};
