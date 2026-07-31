"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "ai" | "user";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Welcome to Xpandify. How may I assist your digital vision today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to respond");

      setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "ai", content: "I apologize, an error occurred. Please contact us at hello@xpandify.co.uk." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[80]">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-xpandify-green border border-xpandify-gold/40 rounded-full flex items-center justify-center text-xpandify-gold shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-xpandify-gold hover:text-xpandify-green transition-colors duration-300 relative group"
        aria-label="Toggle AI Concierge"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-xpandify-gold rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-xpandify-gold rounded-full" />
        
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[380px] md:w-[420px] h-[520px] bg-xpandify-green/95 backdrop-blur-2xl border border-xpandify-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden z-[90]"
          >
            {/* Header */}
            <div className="p-5 border-b border-xpandify-white/10 flex justify-between items-center bg-xpandify-green/90">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-xpandify-gold rounded-full" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-xpandify-white font-medium">Xpandify Concierge</h4>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-xpandify-gold/70">Atelier AI v1.0</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-xpandify-white/60 hover:text-xpandify-gold transition-colors text-xs uppercase tracking-widest"
              >
                Close
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-5 overflow-y-auto flex flex-col gap-4 text-sm font-light">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col max-w-[85%] ${msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"}`}
                >
                  <span className="text-[8px] uppercase tracking-[0.2em] text-xpandify-white/40 mb-1">
                    {msg.role === "user" ? "You" : "Concierge"}
                  </span>
                  <div className={`p-4 rounded-none border text-xs md:text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-xpandify-gold/10 border-xpandify-gold/30 text-xpandify-white" 
                      : "bg-xpandify-white/[0.04] border-xpandify-white/10 text-xpandify-white/90"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col items-start max-w-[85%]">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-xpandify-white/40 mb-1">Concierge</span>
                  <div className="p-4 rounded-none border border-xpandify-white/10 bg-xpandify-white/[0.04] text-xpandify-white/60 text-xs italic flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-xpandify-gold rounded-full animate-pulse" />
                    Consulting archives...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-xpandify-white/10 bg-xpandify-green flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Inquire about our atelier..."
                className="flex-grow bg-xpandify-white/[0.04] border border-xpandify-white/10 px-4 py-3 text-xs text-xpandify-white placeholder:text-xpandify-white/30 focus:outline-none focus:border-xpandify-gold/60 rounded-none transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-xpandify-gold text-xpandify-green px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-xpandify-white transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
