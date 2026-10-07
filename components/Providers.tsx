"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

const loadMotionFeatures = () => import("./motion-features").then((mod) => mod.default);

export default function Providers({ children }: { children: ReactNode }) {
  return (
    // Default theme follows the OS; the toggle stores an explicit choice.
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {/* reducedMotion="user" turns off transform animations for people who ask for less motion. */}
      <MotionConfig reducedMotion="user">
        <LazyMotion features={loadMotionFeatures} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  );
}
