import resolveConfig from "tailwindcss/resolveConfig";
import overrides from "../tailwind.config";
import { useEffect, useState } from "react";
const config = resolveConfig(overrides);

export const useIsBreakpointActive = (
  breakpoint: "sm" | "md" | "lg" | "xl" | "2xl"
): boolean => {
  const width = config.theme.screens[breakpoint];
  const widthPx = parseInt(width);

  const isBreakpointActive = window.innerWidth >= widthPx;
  const [wasBreakpointActive, setWasBreakpointActive] =
    useState(isBreakpointActive);

  // if the breakpoint argument changes, immediately set state 
  // and re-render
  if (wasBreakpointActive !== isBreakpointActive) {
    setWasBreakpointActive(isBreakpointActive);
  }

  useEffect(() => {
    const handleResize = () =>
      setWasBreakpointActive(window.innerWidth >= widthPx);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isBreakpointActive;
};