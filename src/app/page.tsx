"use client";
import { useState } from "react";
import { DescriSection } from "@/components/Sections/DescriptionSection";
import { EndingSection } from "@/components/Sections/EndingSection";
import { TopBarSection } from "@/components/Sections/TopBarSection";
import { ServiceToggleSection } from "@/components/Sections/ServiceToggleSection";
import type { ServiceGroup } from "@/types";

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<ServiceGroup>(
    "Lead Management System",
  );

  const handleGroupChange = (group: ServiceGroup): void => {
    setSelectedGroup(group);
  };

  return (
    <>
      <TopBarSection />

      <main>
        <DescriSection />

        <ServiceToggleSection
          selectedGroup={selectedGroup}
          onGroupChange={handleGroupChange}
        />

        <EndingSection />
      </main>
    </>
  );
}
