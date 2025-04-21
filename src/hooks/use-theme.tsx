import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get the theme from localStorage
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    return storedTheme || defaultTheme;
  });

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both theme classes first
    root.classList.remove("light", "dark");

    // If theme is system, add the appropriate theme based on system preference
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      // Otherwise add the specified theme class
      root.classList.add(theme);
    }
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Define the handler that updates the theme when system preference changes
    const handleChange = () => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      const newTheme = mediaQuery.matches ? "dark" : "light";
      root.classList.add(newTheme);
    };

    // Add the listener
    mediaQuery.addEventListener("change", handleChange);
    
    // Initial call to set the right theme
    handleChange();
    
    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}; 