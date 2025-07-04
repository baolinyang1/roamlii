import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

export const TopBarSection = () => {
  return (
    <>
      <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-6">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/roamlii_logo.webp"
              alt="Roamlii Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};
