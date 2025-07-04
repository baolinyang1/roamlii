import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ToolCardProps } from "@/types";

export const ToolCard = ({
  icon,
  title,
  description,
  iconBgColor = "bg-gray-100",
  iconColor = "text-gray-600",
  stripWidth = "w-[13%]",
  height = "h-45",
  onClick,
}: ToolCardProps) => {
  const responsiveHeight = `min-h-[200px] sm:${height}`;

  return (
    <Card
      className={`${responsiveHeight} relative overflow-hidden ${onClick ? "cursor-pointer hover:shadow-md transition-shadow" : ""}`}
      onClick={onClick}
    >
      <div
        className={`absolute left-0 top-0 h-full ${stripWidth} ${iconBgColor} flex items-center justify-center z-10`}
      >
        <div className={`w-8 h-8 ${iconColor}`}>{icon}</div>
      </div>
      <div className="pl-[15%] pr-4 py-0">
        <CardHeader className="space-y-2 px-0">
          <CardTitle className="text-xl lg:text-2xl font-semibold break-words">
            {title}
          </CardTitle>
          <CardDescription className="text-sm lg:text-base text-muted-foreground break-words leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
};
