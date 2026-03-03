"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio_chat_session_id";

/**
 * Returns a stable UUID for the current browser tab session.
 * - Generated once per tab via crypto.randomUUID() and stored in sessionStorage.
 * - Returns null during SSR / before hydration (safe to guard with !sessionId).
 * - Resets when the tab is closed (sessionStorage is tab-scoped).
 */
export function useSessionId(): string | null {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    setSessionId(id);
  }, []);

  return sessionId;
}
