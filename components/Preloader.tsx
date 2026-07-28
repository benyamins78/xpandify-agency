"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Exact timing to match the slow, deliberate luxury feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-xpandify-white"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Extremely subtle ambient glow for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-xpandify-gold/5 rounded-full blur-[60px] pointer-events-none" />
          
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            className="relative z-10 overflow-visible"
          >
            {/* First Line (Green) */}
            <motion.line 
              x1="20" y1="20" x2="80" y2="80" 
              stroke="#1f493d" 
              strokeWidth="1" // Ultra thin, sharp line
              strokeLinecap="square" // Square caps look more architectural
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 2.4, times: [0, 0.6, 1], ease: [0.76, 0, 0.24, 1] }} // Slow ease out
            />
            {/* Second Line (Gold) */}
            <motion.line 
              x1="20" y1="80" x2="80" y2="20" 
              stroke="#D4AF37" 
              strokeWidth="1" 
              strokeLinecap="square"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 2.4, delay: 0.15, times: [0, 0.6, 1], ease: [0.76, 0, 0.24, 1] }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}