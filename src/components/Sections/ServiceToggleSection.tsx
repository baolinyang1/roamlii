"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadManageSection } from "@/components/Sections/LeadManageSection";
import { DiscoverySuiteSection } from "@/components/Sections/DiscoverySuiteSection";
import type { ServiceToggleSectionProps } from "@/types";

export const ServiceToggleSection = ({
  selectedGroup,
  onGroupChange,
}: ServiceToggleSectionProps) => {
  const handleTabChange = (value: string): void => {
    onGroupChange(
      value === "lead-management"
        ? "Lead Management System"
        : "Discovery Suite",
    );
  };

  return (
    <section className="py-8">
      <div className="flex justify-center mb-3">
        <Tabs
          value={
            selectedGroup === "Lead Management System"
              ? "lead-management"
              : "discovery-suite"
          }
          onValueChange={handleTabChange}
          className="max-w-md w-full"
        >
          <TabsList className="flex bg-gray-100 dark:bg-[#1E293B] rounded-lg p-1 w-full h-auto">
            <TabsTrigger
              value="lead-management"
              className="flex-1 py-2 rounded-md text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:dark:bg-[#0F1729] data-[state=active]:text-gray-900 data-[state=active]:dark:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600 data-[state=inactive]:dark:text-gray-300 hover:text-gray-900 dark:hover:text-white data-[state=active]:border-transparent"
            >
              Lead Management System
            </TabsTrigger>
            <TabsTrigger
              value="discovery-suite"
              className="flex-1 py-2 rounded-md text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:dark:bg-[#0F1729] data-[state=active]:text-gray-900 data-[state=active]:dark:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600 data-[state=inactive]:dark:text-gray-300 hover:text-gray-900 dark:hover:text-white data-[state=active]:border-transparent"
            >
              Discovery Suite
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {selectedGroup === "Lead Management System" && <LeadManageSection />}
      {selectedGroup === "Discovery Suite" && <DiscoverySuiteSection />}
    </section>
  );
};
