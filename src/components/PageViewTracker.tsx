"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/components/GoogleAnalytics";

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackPageView(document.title, pathname);
    }
  }, [pathname]);

  return null;
}
