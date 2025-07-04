export type Theme = "light" | "dark";

export type ServiceGroup = "Lead Management System" | "Discovery Suite";

export type BillingPeriod = "monthly" | "yearly";

export type PlanTier = "foundation" | "basecamp" | "summit";

export type TailwindColorClass =
  | `bg-[#4682B4]`
  | `text-[#4682B4]`
  | `border-[#4682B4]`
  | `bg-[#4682B41A]`
  | "bg-gray-100"
  | "text-gray-600"
  | "bg-green-50"
  | "text-green-600"
  | "text-muted-foreground";

export type ResponsiveHeight =
  | "h-45"
  | "h-48"
  | "h-52"
  | "h-60"
  | "h-64"
  | "min-h-60"
  | "min-h-64"
  | `min-h-[${number}px]`;

export type StripWidth = "w-[13%]" | "w-[15%]" | "w-[18%]" | "w-[20%]";
export interface DiscoveryTool {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: "engagement" | "promotion" | "management" | "discovery";
  readonly iconName: string;
  readonly features: readonly string[];
  readonly isPopular?: boolean;
}

export interface PlanFeature {
  readonly name: string;
  readonly description?: string;
  readonly isHighlight?: boolean;
}

export interface PlanComparison {
  readonly service: string;
  readonly description: string;
  readonly category: "basic" | "advanced" | "enterprise";
}

export interface DigitalGrowthPlan {
  readonly id: PlanTier;
  readonly title: string;
  readonly monthlyPrice: number;
  readonly yearlyPrice: number;
  readonly description: string;
  readonly targetAudience: string;
  readonly complexity: "low" | "medium" | "high";
  readonly maintenanceFrequency: "set-and-forget" | "weekly" | "daily";
  readonly includes: readonly PlanFeature[];
  readonly similarServices: readonly PlanComparison[];
  readonly note: string;
  readonly isPopular?: boolean;
  readonly yearlySavings: number;
}

export interface ToolCardProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
  readonly iconBgColor?: TailwindColorClass;
  readonly iconColor?: TailwindColorClass;
  readonly stripWidth?: StripWidth;
  readonly height?: ResponsiveHeight;
  readonly onClick?: () => void;
}

export interface PlanCardProps {
  readonly plan: DigitalGrowthPlan;
  readonly billingPeriod: BillingPeriod;
  readonly onAddToCart: (planId: PlanTier) => void;
  readonly isLoading?: boolean;
  readonly isSelected?: boolean;
}

export interface FeatureCardProps {
  readonly title: string;
  readonly description: string;
  readonly buttonLabel: string;
  readonly icon: React.ReactNode;
  readonly onClick?: () => void;
  readonly isDisabled?: boolean;
  readonly variant?:
    | "default"
    | "outline"
    | "destructive"
    | "ghost"
    | "link"
    | "secondary";
}

export interface ServiceToggleSectionProps {
  readonly selectedGroup: ServiceGroup;
  readonly onGroupChange: (group: ServiceGroup) => void;
}

export type NonEmptyArray<T> = [T, ...T[]];
