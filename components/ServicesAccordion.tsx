"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    { 
      title: "Bespoke Web App", 
      desc: "Custom Next.js architectures built for scale, speed, and seamless user experiences.",
      details: "We utilize modern headless architectures, React Server Components, and edge rendering to ensure your application performs at lightning speed. Perfect for platforms demanding high interactivity and seamless state management." 
    },
    { 
      title: "Digital Branding", 
      desc: "Crafting distinct visual identities and immersive interfaces that command market authority.",
      details: "From typography selection and motion design to comprehensive design systems, we build visual languages that elevate your brand's perception to luxury standards." 
    },
    { 
      title: "E-Commerce", 
      desc: "High-conversion, headless commerce solutions designed for global premium brands.",
      details: "Integrating platforms like Shopify Plus with custom frontends to create frictionless, editorial shopping experiences that drive conversions while maintaining perfect brand alignment." 
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
      {services.map((service, i) => {
        const isExpanded = expandedIndex === i;
        return (
          <div 
            key={i} 
            onClick={() => setExpandedIndex(isExpanded ? null : i)}
            className={`group relative p-8 md:p-10 border transition-all duration-500 overflow-hidden cursor-pointer ${isExpanded ? 'border-xpandify-gold/50 bg-xpandify-white/[0.05]' : 'border-xpandify-white/10 bg-xpandify-white/[0.02] hover:bg-xpandify-white/[0.04]'}`}
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xpandify-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h4 className={`text-xl font-light mb-6 transition-colors ${isExpanded ? 'text-xpandify-gold' : 'text-xpandify-white group-hover:text-xpandify-gold'}`}>
              {service.title}
            </h4>
            
            <p className="text-sm font-light leading-relaxed text-xpandify-white/50 mb-4">
              {service.desc}
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="w-8 h-[1px] bg-xpandify-gold/30 mb-4 mt-2" />
                  <p className="text-sm font-light leading-relaxed text-xpandify-white/80">
                    {service.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="absolute top-8 right-8 w-6 h-6 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
               <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} className="absolute w-full h-[1px] bg-xpandify-gold transition-transform duration-500"></motion.span>
               <motion.span animate={{ rotate: isExpanded ? 90 : 0 }} className="absolute h-full w-[1px] bg-xpandify-gold transition-transform duration-500"></motion.span>
            </div>
          </div>
        );
      })}
    </div>
  );
}