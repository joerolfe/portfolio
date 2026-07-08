"use client";

import { useEffect } from "react";

/** Disables browser scroll restoration so every visit opens at the top. */
export default function StartAtTop() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
