"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-xpandify-white cursor-none"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Extremely subtle, elegant background glow to give the white depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-xpandify-gold/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative flex flex-col items-center justify-center">
            {/* The Architectural Precision X */}
            <svg
              width="140" 
              height="140"
              viewBox="0 0 100 100"
              className="relative z-10 overflow-visible"
            >
              {/* Outer precision corners (Tying into the Hero glass slab motif) */}
              <motion.path
                d="M 15 25 L 15 15 L 25 15"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.4] }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <motion.path
                d="M 75 15 L 85 15 L 85 25"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.4] }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <motion.path
                d="M 85 75 L 85 85 L 75 85"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.4] }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <motion.path
                d="M 25 85 L 15 85 L 15 75"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.75"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.4] }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* Main crossing lines - Razor thin for elegance */}
              {/* Line 1 (Very subtle dark green shadow line) */}
              <motion.line 
                x1="30" y1="30" x2="70" y2="70" 
                stroke="#1f493d" 
                strokeWidth="1" 
                strokeOpacity="0.25"
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 2.2, times: [0, 0.6, 1], ease: [0.76, 0, 0.24, 1] }} 
              />
              {/* Line 2 (Solid Gold primary stroke) */}
              <motion.line 
                x1="30" y1="70" x2="70" y2="30" 
                stroke="#D4AF37" 
                strokeWidth="1.25" 
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 2.2, delay: 0.2, times: [0, 0.6, 1], ease: [0.76, 0, 0.24, 1] }}
              />

              {/* Center precision dot tying the intersection together */}
              <motion.circle 
                cx="50" cy="50" r="1.5" 
                fill="#D4AF37"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              />
            </svg>

            {/* Subtext revealing underneath with massive tracking for luxury feel */}
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-4 flex flex-col items-center"
            >
              <span className="text-[7px] uppercase tracking-[0.6em] text-xpandify-green/40 font-medium ml-1">
                Initializing
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
