"use client";

import { motion } from "framer-motion";

export default function TechMarquee() {
  const technologies = [
    "Next.js", "Vercel", "Netlify", "React", "Framer", "Figma", "WordPress", "Tailwind CSS", "Stripe"
  ];

  return (
    <div className="w-full bg-xpandify-green border-y border-xpandify-white/5 py-8 overflow-hidden relative z-20 flex">
      {/* 
        We use two identical sets of the technologies side-by-side. 
        Framer Motion pans them from 0% to -50% to create a seamless infinite loop.
      */}
      <motion.div
        className="flex flex-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        style={{ width: "fit-content" }}
      >
        <div className="flex items-center gap-12 pr-12 md:gap-24 md:pr-24">
          {technologies.map((tech, idx) => (
            <div key={`set1-${idx}`} className="flex items-center gap-12 md:gap-24">
              <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-xpandify-white/30 hover:text-xpandify-gold transition-colors duration-500 cursor-default whitespace-nowrap">
                {tech}
              </span>
              <span className="w-1 h-1 rounded-full bg-xpandify-gold/30" />
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-12 pr-12 md:gap-24 md:pr-24">
          {technologies.map((tech, idx) => (
            <div key={`set2-${idx}`} className="flex items-center gap-12 md:gap-24">
              <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-xpandify-white/30 hover:text-xpandify-gold transition-colors duration-500 cursor-default whitespace-nowrap">
                {tech}
              </span>
              <span className="w-1 h-1 rounded-full bg-xpandify-gold/30" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Subtle vignette gradients on the edges to make the text fade in/out smoothly */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-xpandify-green to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-xpandify-green to-transparent z-10 pointer-events-none" />
    </div>
  );
}
