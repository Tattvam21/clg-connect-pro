import { useEffect, useState } from "react";

// Default breakpoints used in Tailwind CSS
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export type BreakpointKey = keyof typeof breakpoints;

export function useBreakpoint(breakpoint: BreakpointKey): boolean {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsAboveBreakpoint(window.innerWidth >= breakpoints[breakpoint]);
    };

    // Set on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isAboveBreakpoint;
}

export function useIsMobile(): boolean {
  return !useBreakpoint("md");
}

export function useIsTablet(): boolean {
  const isAboveMd = useBreakpoint("md");
  const isBelowLg = !useBreakpoint("lg");
  return isAboveMd && isBelowLg;
}

export function useIsDesktop(): boolean {
  return useBreakpoint("lg");
}
