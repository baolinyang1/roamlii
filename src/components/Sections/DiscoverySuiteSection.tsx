import {
  Share2,
  Image,
  Mail,
  Filter,
  Calendar,
  Lightbulb,
  MapPin,
  Briefcase,
  Building,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import { ToolCard } from "@/components/Cards/ToolCard";
import { toast } from "sonner";
import {
  DISCOVERY_TOOLS,
  DISCOVERY_SUITE_CONFIG,
} from "@/data/discovery-tools";
import type { DiscoveryTool } from "@/types";

// Icon props interface for Lucide React icons
interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

// Icon mapping for type-safe icon rendering
const ICON_MAP = {
  Share2: Share2,
  Image: Image,
  Mail: Mail,
  Filter: Filter,
  Calendar: Calendar,
  Lightbulb: Lightbulb,
  MapPin: MapPin,
  Briefcase: Briefcase,
  Building: Building,
} as const;

type IconName = keyof typeof ICON_MAP;

const getIcon = (iconName: string): React.ComponentType<IconProps> => {
  return ICON_MAP[iconName as IconName] || Share2;
};

const handleToolClick = (tool: DiscoveryTool): void => {
  toast(`${tool.title} clicked! Features: ${tool.features.join(", ")}`);
};

const handleCTAClick = (): void => {
  toast(`${DISCOVERY_SUITE_CONFIG.ctaText} clicked!`);
};

export const DiscoverySuiteSection = () => {
  return (
    <section className="py-1">
      <h2 className="text-3xl font-bold text-center mb-3">
        {DISCOVERY_SUITE_CONFIG.sectionTitle}
      </h2>
      <p className="text-center text-xl text-muted-foreground mb-10 font-semibold">
        {DISCOVERY_SUITE_CONFIG.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-8xl mx-auto px-8">
        {DISCOVERY_TOOLS.map((tool) => {
          const IconComponent = getIcon(tool.iconName);
          return (
            <ToolCard
              key={tool.id}
              icon={<IconComponent className="w-8 h-8" />}
              title={tool.title}
              description={tool.description}
              iconBgColor="bg-[#4682B41A]"
              iconColor="text-[#4682B4]"
              onClick={() => handleToolClick(tool)}
            />
          );
        })}

        <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center">
              <CircleCheck className="w-9 h-9 text-green-600" />
              <p className="text-2xl ml-5 font-semibold">
                {DISCOVERY_SUITE_CONFIG.supportText.title}
              </p>
            </div>
            <p className="text-xl text-muted-foreground text-left font-semibold">
              {DISCOVERY_SUITE_CONFIG.supportText.description}
            </p>
            <div className="flex justify-start">
              <button
                className="cursor-pointer bg-[#4682B4] hover:bg-[#4682B4]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                onClick={handleCTAClick}
              >
                <ArrowRight className="w-6 h-6" />
                {DISCOVERY_SUITE_CONFIG.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
