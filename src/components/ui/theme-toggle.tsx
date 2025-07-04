"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  className,
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        onClick={toggleTheme}
        className="cursor-pointer w-10 h-10 rounded-md border border-border bg-background hover:bg-accent transition-colors flex items-center justify-center"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground" />
        )}
      </button>

      {showLabel && (
        <span className="text-sm font-medium">
          {theme === "dark" ? "Dark" : "Light"} Mode
        </span>
      )}
    </div>
  );
}
