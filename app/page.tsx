"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../components/Navigation";
import ServicesAccordion from "../components/ServicesAccordion";
import { projectsData } from "@/lib/projects";

export default function Home() {
  return (
    <div className="relative bg-xpandify-white selection:bg-xpandify-gold selection:text-xpandify-white">
      
      {/* Navigation Header */}
      <Navigation />

      {/* 1. HERO SECTION */}
      <main id="hero" className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col min-h-screen">
          <motion.div className="flex-grow flex flex-col justify-center items-center text-center w-full max-w-5xl mx-auto px-6 md:px-12 pt-20"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6, duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-xpandify-green leading-[1.1] tracking-tight mb-6 mt-8">
                Digital <br /> 
                <span className="font-serif italic text-xpandify-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] pr-4">Excellence</span>
              </h2>
              
              <p className="text-sm md:text-base lg:text-lg text-xpandify-green/60 font-light mb-12 max-w-xl leading-loose tracking-wide">
                We engineer uncompromising, high-performance digital experiences for forward-thinking brands worldwide.
              </p>
            </div>
          </motion.div>
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
      <section id="work" className="relative z-20 bg-xpandify-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-6 mb-16 md:mb-24">
            <span className="w-16 h-[1px] bg-xpandify-green/20 block"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-xpandify-green/50">Selected Work</span>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {projectsData.map((project, index) => {
              const isFirst = index === 0;
              const isSecond = index === 1;
              const linkHref = isFirst 
                ? "/work/saeidian-trading-company" 
                : isSecond 
                ? "/work/project-02" 
                : `/work/${project.slug}`;
              const displayTitle = isFirst ? "Saeidian Trading Co." : project.title;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center group cursor-pointer ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <Link href={linkHref} className={`w-full md:w-2/3 aspect-[16/10] bg-gradient-to-br ${project.imageBg || "from-[#1f493d] to-[#0f241e]"} overflow-hidden relative border border-xpandify-green/10 flex items-center justify-center`}>
                     <div className="absolute inset-0 bg-xpandify-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <span className="absolute top-6 left-6 text-xs font-mono text-xpandify-gold tracking-widest z-10">
                       {project.id} &mdash; {project.year}
                     </span>

                     <div className="relative z-10 text-center p-8">
                       <span className="text-white/50 text-xs uppercase tracking-[0.3em] block mb-2">{project.category}</span>
                       <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{displayTitle}</h3>
                     </div>

                     <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform group-hover:bg-xpandify-gold group-hover:text-xpandify-green transition-all duration-300">
                       &rarr;
                     </div>
                  </Link>

                  <div className="w-full md:w-1/3 flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-xpandify-gold mb-3 block">{project.category}</span>
                    <Link href={linkHref}><h4 className="text-3xl font-light text-xpandify-green mb-4 hover:text-xpandify-gold transition-colors">{displayTitle}</h4></Link>
                    <p className="text-sm font-light text-xpandify-green/60 leading-relaxed mb-6">
                      {project.headline}
                    </p>
                    <Link href={linkHref} className="text-xs font-semibold text-xpandify-gold uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      View Case Study &rarr;
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer id="contact" className="relative bg-[#112a23] text-xpandify-white pt-48 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Massive overlapping 3D background text */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full text-center overflow-hidden leading-none pointer-events-none select-none z-0">
           <h2 className="text-[17vw] font-black tracking-tighter text-white/[0.04] whitespace-nowrap uppercase">
             XPANDIFY
           </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-xpandify-gold font-semibold block mb-4">
                Let's Collaborate
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                Ready to elevate <br/> your <span className="text-xpandify-gold italic font-serif">digital presence?</span>
              </h2>
              <Link href="/contact" className="inline-block bg-xpandify-white text-[#112a23] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-xpandify-gold hover:text-white">
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

          <div className="w-full h-[1px] bg-xpandify-white/10 mb-12" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-xpandify-white/40">
            <div className="flex gap-8">
              <a href="#" className="hover:text-xpandify-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-xpandify-gold transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-xpandify-gold transition-colors">Twitter</a>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Xpandify. All Rights Reserved.
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}