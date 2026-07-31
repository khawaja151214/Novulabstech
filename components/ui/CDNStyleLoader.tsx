"use client";

import { useEffect } from "react";

// Only AOS CSS is deferred — Bootstrap + Icons are loaded server-side in layout.tsx
const DEFERRED_STYLESHEETS = [
  "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css",
];

/**
 * Injects non-critical CDN stylesheets after mount.
 * Bootstrap and Bootstrap Icons are now server-side in <head> to prevent FOUC.
 * Only AOS animation CSS is truly lazy since it's scroll-triggered.
 */
export default function CDNStyleLoader() {
  useEffect(() => {
    DEFERRED_STYLESHEETS.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
