"use client";

import { useEffect } from "react";

/**
 * Lower sections use `content-visibility: auto` so the first load is fast.
 * Smooth-scrolling to an in-page anchor needs real section heights, so the
 * first time someone follows a "#" link we switch every section to fully
 * rendered (html.cv-off) before the browser works out where to scroll.
 */
export default function AnchorScrollFix() {
  useEffect(() => {
    const root = document.documentElement;
    const enable = () => root.classList.add("cv-off");
    if (window.location.hash) enable();
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href*="#"]');
      if (link) enable();
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", enable);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", enable);
    };
  }, []);
  return null;
}
