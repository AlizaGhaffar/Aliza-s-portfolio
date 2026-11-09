"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useSessionId } from "@/hooks/useSessionId";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  // messages state intentionally lives outside the open/close toggle
  // so conversation persists when the panel is closed and reopened (US2)
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const sessionId = useSessionId();

  // Auto-scroll to the latest message. Only the list scrolls, never the page.
  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || !sessionId || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, session_id: sessionId }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: res.ok
          ? (data.response ?? "Sorry, I couldn't get a response.")
          : (data.detail ?? "Something went wrong. Please try again."),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "The chatbot service is temporarily unavailable. Please try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* ── Floating toggle button ─────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Ask me about Aliza"}
        aria-expanded={isOpen}
        className="btn-motion btn-gradient fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 text-white shadow-2xl shadow-violet-900/50"
      >
        <svg
          className={`chat-icon absolute h-6 w-6 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg
          className={`chat-icon absolute h-6 w-6 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* ── Chat panel ────────────────────────────────────────────────────── */}
      <div
        className={`chat-panel fixed bottom-24 right-6 z-50 flex w-[min(20rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07070f]/95 shadow-2xl shadow-violet-900/40 md:w-96 ${isOpen ? "is-open" : ""}`}
        style={{ maxHeight: "70vh" }}
      >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 shadow-lg shadow-violet-900/40">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ask me about Aliza</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-slate-500">Portfolio assistant</span>
                </div>
              </div>
            </div>

            {/* Message list */}
            <div ref={listRef} className="flex flex-1 flex-col gap-3 overflow-y-auto overscroll-contain scroll-smooth p-4">
              {messages.length === 0 && (
                <div className="mt-2 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hi! Ask me anything about Aliza&apos;s projects, skills, or experience.
                  </p>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "ml-auto rounded-br-sm bg-gradient-to-br from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-900/30"
                      : "mr-auto rounded-bl-sm border border-white/[0.08] bg-white/[0.04] text-slate-300"
                  }`}
                >
                  {msg.content}
                </div>
              ))}

              {isLoading && (
                <div className="mr-auto flex gap-1.5 rounded-2xl rounded-bl-sm border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="typing-dot h-1.5 w-1.5 rounded-full bg-violet-400"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 border-t border-white/10 bg-white/[0.02] p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Aliza's work..."
                disabled={isLoading || !sessionId}
                maxLength={500}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-base sm:text-sm text-white placeholder-slate-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim() || !sessionId}
                aria-label="Send message"
                className="btn-motion btn-gradient flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-900/30 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
      </div>
    </>
  );
}
