"use client";

import { useEffect } from "react";

export function ResetHash() {
  useEffect(() => {
    if (!window.location.hash) return;
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
    window.scrollTo(0, 0);
  }, []);

  return null;
}
