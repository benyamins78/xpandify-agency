"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // @ts-ignore
        body: new URLSearchParams(formData).toString(),
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative bg-xpandify-green min-h-screen selection:bg-xpandify-gold selection:text-xpandify-white text-xpandify-white">
      <Navigation/>
      
      <main className="pt-40 pb-24 px-6 md:px-12 lg:px-24 flex flex-col min-h-screen">
        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col md:flex-row gap-16 md:gap-24 pt-12">
           
           <div className="w-full md:w-1/2 flex flex-col justify-between">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
                <span className="text-[10px] uppercase tracking-[0.4em] text-xpandify-gold mb-6 block">Let's Connect</span>
                <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-12">
                  Start a <br/> <span className="font-serif italic text-xpandify-gold">conversation.</span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-col gap-12 mt-12 md:mt-0">
                 <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-xpandify-white/40 block mb-3">Direct Inquiry</span>
                    <a href="mailto:hello@xpandify.co.uk" className="text-2xl font-light hover:text-xpandify-gold transition-colors">hello@xpandify.co.uk</a>
                 </div>
                 <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-xpandify-white/40 block mb-3">Global Headquarters</span>
                    <p className="text-lg font-light text-xpandify-white/80">London, United Kingdom</p>
                 </div>
              </motion.div>
           </div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
             className="w-full md:w-1/2 bg-xpandify-white/[0.02] border border-xpandify-white/10 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
           >
              {status === "success" ? (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-xpandify-green/90 backdrop-blur-md z-20 text-center px-8">
                    <h3 className="text-3xl font-light text-xpandify-gold mb-4">Message Received.</h3>
                    <p className="text-xpandify-white/70 font-light">We will review your inquiry and be in touch shortly.</p>
                 </div>
              ) : null}

              {/* Netlify requires data-netlify="true" and a hidden form-name input */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="flex flex-col gap-12"
              >
                 <input type="hidden" name="form-name" value="contact" />
                 
                 <div className="relative group">
                    <input type="text" name="name" id="name" required className="w-full bg-transparent border-b border-xpandify-white/20 py-4 text-lg font-light text-xpandify-white focus:outline-none focus:border-xpandify-gold peer" placeholder=" " />
                    <label htmlFor="name" className="absolute left-0 top-4 text-xpandify-white/40 text-sm font-light uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-xpandify-gold peer-valid:-top-4 peer-valid:text-[10px]">Your Name</label>
                 </div>
                 
                 <div className="relative group">
                    <input type="email" name="email" id="email" required className="w-full bg-transparent border-b border-xpandify-white/20 py-4 text-lg font-light text-xpandify-white focus:outline-none focus:border-xpandify-gold peer" placeholder=" " />
                    <label htmlFor="email" className="absolute left-0 top-4 text-xpandify-white/40 text-sm font-light uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-xpandify-gold peer-valid:-top-4 peer-valid:text-[10px]">Email Address</label>
                 </div>

                 <div className="relative group">
                    <input type="text" name="company" id="company" className="w-full bg-transparent border-b border-xpandify-white/20 py-4 text-lg font-light text-xpandify-white focus:outline-none focus:border-xpandify-gold peer" placeholder=" " />
                    <label htmlFor="company" className="absolute left-0 top-4 text-xpandify-white/40 text-sm font-light uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-xpandify-gold peer-valid:-top-4 peer-valid:text-[10px]">Company / Brand</label>
                 </div>

                 <div className="relative group">
                    <textarea name="project" id="project" required rows={4} className="w-full bg-transparent border-b border-xpandify-white/20 py-4 text-lg font-light text-xpandify-white focus:outline-none focus:border-xpandify-gold peer resize-none" placeholder=" "></textarea>
                    <label htmlFor="project" className="absolute left-0 top-4 text-xpandify-white/40 text-sm font-light uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-xpandify-gold peer-valid:-top-4 peer-valid:text-[10px]">Project Details</label>
                 </div>

                 <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="self-start mt-4 bg-xpandify-gold text-xpandify-green px-12 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-xpandify-white hover:text-xpandify-green disabled:opacity-50"
                 >
                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                 </button>
              </form>
           </motion.div>
        </div>
      </main>
    </div>
  );
}
