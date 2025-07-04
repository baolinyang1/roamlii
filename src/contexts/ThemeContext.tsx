"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "@/types";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  readonly children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setThemeState(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;

      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = (): void => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme: Theme): void => {
    setThemeState(newTheme);
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
