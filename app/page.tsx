"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ServicesAccordion from "../components/ServicesAccordion";
import Link from "next/link";

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative bg-xpandify-white selection:bg-xpandify-gold selection:text-xpandify-white">
      
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[70] w-12 h-12 bg-xpandify-green border border-xpandify-gold/30 rounded-full flex items-center justify-center text-xpandify-gold shadow-lg hover:bg-xpandify-gold hover:text-xpandify-green transition-colors duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION - Architectural Glassmorphism */}
      <main id="hero" className="relative flex flex-col min-h-screen overflow-hidden cursor-default bg-xpandify-white">
        
        {/* Crisp Architectural Background Grid (No Muddy Colors) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] md:opacity-[0.06]">
           {/* Vertical Lines */}
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-xpandify-green to-transparent" />
           <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-xpandify-green to-transparent" />
           {/* Horizontal Lines */}
           <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xpandify-green to-transparent" />
           <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xpandify-green to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation/>

          <div className="flex-grow flex flex-col justify-center items-center text-center w-full max-w-6xl mx-auto px-6 md:px-12 pt-20">
            
            {/* Massive Luxury Glassmorphism Slab */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
              whileHover={{ y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
              className="relative w-full max-w-4xl p-10 md:p-20 rounded-[2.5rem] border border-xpandify-green/10 bg-xpandify-white/40 backdrop-blur-2xl shadow-[0_20px_80px_-20px_rgba(31,73,61,0.15)] overflow-hidden"
            >
              {/* Subtle internal gold highlight for the top edge of the glass */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-xpandify-gold/40 to-transparent" />
              
              <div className="flex flex-col items-center relative z-10">
                <motion.div className="mb-8 px-6 py-2 rounded-full border border-xpandify-green/10 bg-xpandify-white/80 backdrop-blur-md flex items-center gap-3">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xpandify-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-xpandify-gold"></span>
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-xpandify-green/80">
                    Atelier Digital
                  </span>
                </motion.div>

                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-xpandify-green leading-[1.1] tracking-tight mb-8 mt-4 flex flex-wrap justify-center gap-x-4">
                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6, duration: 0.8 }}>
                    Digital
                  </motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.7, duration: 0.8 }}
                    className="font-serif italic text-xpandify-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                  >
                    Excellence
                  </motion.span>
                </h2>
                
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.0, duration: 1 }}
                  className="text-sm md:text-base lg:text-lg text-xpandify-green/80 font-medium max-w-xl leading-relaxed tracking-wide px-4"
                >
                  We engineer uncompromising, high-performance digital experiences for forward-thinking brands worldwide.
                </motion.p>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* 2. SERVICES SECTION */}
      <section id="expertise" className="relative z-20 bg-xpandify-green text-xpandify-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-6 mb-12 md:mb-20">
            <span className="w-16 h-[1px] bg-xpandify-gold/50 block"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-xpandify-gold">Expertise</span>
          </div>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-16 md:mb-24 max-w-4xl">
            Engineering the <span className="font-serif italic text-xpandify-gold">avant-garde</span> of the digital landscape.
          </h3>
          <ServicesAccordion/>
        </div>
      </section>

      {/* 3. FEATURED WORK SECTION */}
      <section id="work" className="relative z-20 bg-xpandify-white pt-24 md:pt-32 pb-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-6 mb-16 md:mb-24">
            <span className="w-16 h-[1px] bg-xpandify-green/20 block"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-xpandify-green/50">Selected Work</span>
          </div>

          <div className="flex flex-col gap-24 md:gap-40">
             <Link className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group cursor-pointer" href="/work/saeidian-trading-company">
              <div className="w-full md:w-2/3 aspect-[4/3] bg-xpandify-green/5 overflow-hidden relative flex items-center justify-center border border-xpandify-green/10">
                 <div className="absolute inset-0 bg-xpandify-green/5 group-hover:bg-transparent transition-colors duration-1000 ease-out" />
                 <span className="text-xpandify-green/20 font-light tracking-widest uppercase relative z-10">Project Asset</span>
                 <span className="absolute top-6 left-6 text-xs font-serif italic text-xpandify-green/40 z-10">No. 01</span>
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-xpandify-gold mb-4 block">Logistics Architecture</span>
                <h4 className="text-3xl font-light text-xpandify-green mb-6">Saeidian Trading Co.</h4>
                <div className="text-[10px] uppercase tracking-[0.2em] text-xpandify-green/60 group-hover:text-xpandify-gold transition-colors inline-flex items-center gap-2">
                  View Case Study <span className="w-4 h-[1px] bg-current block transition-all group-hover:w-8" />
                </div>
              </div>
            </Link>

             <Link className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center group cursor-pointer" href="/work/project-02">
              <div className="w-full md:w-2/3 aspect-[4/3] bg-xpandify-green/5 overflow-hidden relative flex items-center justify-center border border-xpandify-green/10">
                 <div className="absolute inset-0 bg-xpandify-green/5 group-hover:bg-transparent transition-colors duration-1000 ease-out" />
                 <span className="text-xpandify-green/20 font-light tracking-widest uppercase relative z-10">Project Asset</span>
                 <span className="absolute top-6 left-6 text-xs font-serif italic text-xpandify-green/40 z-10">No. 02</span>
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center md:items-end md:text-right">
                <span className="text-[10px] uppercase tracking-[0.3em] text-xpandify-gold mb-4 block">Digital Experience</span>
                <h4 className="text-3xl font-light text-xpandify-green mb-6">Project Title</h4>
                <div className="text-[10px] uppercase tracking-[0.2em] text-xpandify-green/60 group-hover:text-xpandify-gold transition-colors inline-flex items-center gap-2">
                   <span className="w-4 h-[1px] bg-current block transition-all group-hover:w-8 hidden md:block" /> View Case Study <span className="w-4 h-[1px] bg-current block md:hidden transition-all group-hover:w-8" />
                </div>
              </div>
            </Link>

             <Link className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group cursor-pointer" href="/work/project-03">
              <div className="w-full md:w-2/3 aspect-[4/3] bg-xpandify-green/5 overflow-hidden relative flex items-center justify-center border border-xpandify-green/10">
                 <div className="absolute inset-0 bg-xpandify-green/5 group-hover:bg-transparent transition-colors duration-1000 ease-out" />
                 <span className="text-xpandify-green/20 font-light tracking-widest uppercase relative z-10">Project Asset</span>
                 <span className="absolute top-6 left-6 text-xs font-serif italic text-xpandify-green/40 z-10">No. 03</span>
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-xpandify-gold mb-4 block">Bespoke Web App</span>
                <h4 className="text-3xl font-light text-xpandify-green mb-6">Project Title</h4>
                <div className="text-[10px] uppercase tracking-[0.2em] text-xpandify-green/60 group-hover:text-xpandify-gold transition-colors inline-flex items-center gap-2">
                  View Case Study <span className="w-4 h-[1px] bg-current block transition-all group-hover:w-8" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer id="contact" className="relative bg-xpandify-green text-xpandify-white pt-24 md:pt-32 px-6 md:px-12 lg:px-24 flex flex-col justify-between overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 md:mb-32">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                Ready to elevate <br/> your <span className="text-xpandify-gold italic font-serif">digital presence?</span>
              </h2>
              <Link className="inline-block bg-xpandify-white text-xpandify-green px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-xpandify-gold hover:text-white shadow-xl" href="/contact">
                Start a Conversation
              </Link>
            </div>
            <div className="flex flex-col md:items-end justify-end gap-10">
              <div className="md:text-right group">
                <span className="text-[10px] uppercase tracking-[0.3em] text-xpandify-gold mb-3 block">Inquiries</span>
                <a href="mailto:hello@xpandify.co.uk" className="text-2xl font-light transition-colors relative inline-block">
                  hello@xpandify.co.uk
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-xpandify-white/30 group-hover:bg-xpandify-gold transition-colors" />
                </a>
              </div>
              <div className="md:text-right">
                <span className="text-[10px] uppercase tracking-[0.3em] text-xpandify-gold mb-3 block">Location</span>
                <p className="text-lg font-light text-xpandify-white/80">London, United Kingdom<br/>Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-0 w-full border-t border-xpandify-white/10 pt-8 pb-4">
          <h1 className="text-[15vw] leading-[0.8] font-black text-center tracking-tighter text-transparent [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:2px_#ffffff] opacity-10 select-none flex justify-between">
            <span>X</span><span>P</span><span>A</span><span>N</span><span>D</span><span>I</span><span>F</span><span>Y</span>
          </h1>
          
          <div className="absolute bottom-4 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-0 max-w-7xl mx-auto gap-4 text-[9px] uppercase tracking-[0.3em] text-xpandify-white/50 mix-blend-difference">
            <div className="flex gap-8">
              <a href="#" className="hover:text-xpandify-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-xpandify-gold transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-xpandify-gold transition-colors">Twitter</a>
            </div>
            <div>&copy; {new Date().getFullYear()} Xpandify. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
