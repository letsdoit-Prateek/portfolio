"use client";

import { useEffect } from "react";
import { getFirebaseAnalytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

// Google Analytics component for Next.js
export function GoogleAnalytics() {
  useEffect(() => {
    // Initialize Firebase Analytics
    const initAnalytics = async () => {
      try {
        const analyticsInstance = await getFirebaseAnalytics();
        
        if (analyticsInstance) {
          // Log a page view when the component mounts
          logEvent(analyticsInstance, "page_view", {
            page_title: document.title,
            page_location: window.location.href,
          });
          console.log('📊 Google Analytics initialized and page view logged');
        }
      } catch (error) {
        console.error('❌ Failed to initialize Google Analytics:', error);
      }
    };

    if (typeof window !== "undefined") {
      initAnalytics();
    }
  }, []);

  return null; // This component doesn't render anything
}

// Utility functions for tracking events
export const trackEvent = async (eventName: string, parameters?: Record<string, unknown>) => {
  try {
    const analyticsInstance = await getFirebaseAnalytics();
    if (analyticsInstance) {
      logEvent(analyticsInstance, eventName, parameters);
    }
  } catch (error) {
    console.error('❌ Failed to track event:', error);
  }
};

// Common tracking functions
export const trackPageView = async (pageTitle: string, pagePath: string) => {
  await trackEvent("page_view", {
    page_title: pageTitle,
    page_location: `${window.location.origin}${pagePath}`,
  });
};

export const trackButtonClick = async (buttonName: string, location?: string) => {
  await trackEvent("button_click", {
    button_name: buttonName,
    location: location || "unknown",
  });
};

export const trackDownload = async (fileName: string) => {
  await trackEvent("file_download", {
    file_name: fileName,
  });
};

export const trackOutboundClick = async (url: string, linkText?: string) => {
  await trackEvent("click", {
    link_url: url,
    link_text: linkText || url,
    outbound: true,
  });
};

export const trackChatInteraction = async (action: string, details?: string) => {
  await trackEvent("chat_interaction", {
    action: action,
    details: details,
  });
};
