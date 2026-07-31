"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "ai"; content: string };

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Welcome to Xpandify. How may I assist you with your digital presence today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

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
          history: messages.slice(1) // Send history excluding the hardcoded greeting
        }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", content: "Connection error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-[80] w-14 h-14 bg-xpandify-green border border-xpandify-gold/40 rounded-none flex items-center justify-center text-xpandify-gold shadow-[0_10px_40px_rgba(31,73,61,0.4)] hover:bg-xpandify-gold hover:text-xpandify-green transition-colors duration-500"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* The Luxury Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed bottom-8 right-8 z-[90] w-[90vw] max-w-[380px] h-[550px] bg-xpandify-green/95 backdrop-blur-2xl border border-xpandify-gold/20 shadow-[0_20px_80px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden rounded-none"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-xpandify-gold/50" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-xpandify-gold/50" />
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-xpandify-white/10 relative">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xpandify-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-xpandify-gold"></span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-xpandify-white">
                  Concierge
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-xpandify-white/50 hover:text-xpandify-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  <span className="text-[8px] uppercase tracking-widest text-xpandify-white/30 mb-2">
                    {msg.role === "user" ? "Client" : "Xpandify"}
                  </span>
                  <div className={`p-4 text-sm font-light leading-relaxed max-w-[85%] ${
                    msg.role === "user" 
                      ? "bg-xpandify-white/10 text-xpandify-white border border-xpandify-white/5" 
                      : "bg-transparent text-xpandify-white/90 border-l border-xpandify-gold/50 pl-5 pr-0 py-2"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex flex-col items-start">
                   <span className="text-[8px] uppercase tracking-widest text-xpandify-white/30 mb-2">Xpandify</span>
                   <div className="pl-5 py-2 border-l border-xpandify-gold/50 flex gap-1">
                     <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1 h-1 bg-xpandify-gold" />
                     <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 h-1 bg-xpandify-gold" />
                     <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 h-1 bg-xpandify-gold" />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-xpandify-white/10 bg-xpandify-white/5 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message the atelier..."
                className="w-full bg-transparent text-sm font-light text-xpandify-white placeholder:text-xpandify-white/30 focus:outline-none pr-10"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xpandify-gold opacity-70 hover:opacity-100 disabled:opacity-30 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
