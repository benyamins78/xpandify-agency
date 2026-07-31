"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Check if we've scrolled past the very top
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide when scrolling down, show when scrolling up
    if (latest > previous && latest > 150 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { title: "Expertise", id: "expertise" },
    { title: "Work", id: "work" },
    { title: "Agency", id: "contact" }, 
    { title: "Contact", id: "contact" }
  ];

  return (
    <>
      <motion.header 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 p-6 md:px-12 lg:px-24 flex justify-between items-center z-[60] transition-all duration-500 ${
          scrolled 
            ? 'bg-xpandify-green/95 backdrop-blur-xl border-b border-xpandify-white/10 shadow-2xl' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="relative z-50 text-xl font-medium text-xpandify-white tracking-[0.3em] uppercase cursor-pointer" onClick={(e) => handleNavClick(e as any, "hero")}>
          Xpandify<span className="text-xpandify-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">.</span>
        </div>
        
        <button onClick={toggleMenu} className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 md:hidden group">
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 4, backgroundColor: "#D4AF37", width: "24px" } : { rotate: 0, y: -4, backgroundColor: "#ffffff", width: "24px" }}
            className="h-[1px] block absolute transition-all duration-300"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            className="w-24px h-[1px] bg-xpandify-white block absolute transition-all duration-300"
            style={{ width: "24px" }}
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4, backgroundColor: "#D4AF37", width: "24px" } : { rotate: 0, y: 4, backgroundColor: "#ffffff", width: "16px" }}
            className="h-[1px] block absolute transition-all duration-300 right-3"
            style={isOpen ? { right: "8px" } : {}}
          />
        </button>

        <nav className="hidden md:flex gap-12 text-[10px] font-semibold uppercase tracking-[0.25em] text-xpandify-white/80 relative z-50">
          {menuItems.map((item) => (
            <a key={item.title} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)} className="hover:text-xpandify-gold transition-colors duration-300 relative group flex flex-col items-center">
              <span>{item.title}</span>
              <span className="absolute -bottom-2 w-0 h-[1px] bg-xpandify-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(25px)", transition: { duration: 0.5 } }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.4, delay: 0.2 } }}
            className="fixed inset-0 z-[55] bg-xpandify-green/95 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-xpandify-gold/15 rounded-full blur-[90px] pointer-events-none" />
            
            <motion.nav 
              initial="initial" animate="open" exit="initial"
              variants={{ initial: {}, open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
              className="flex flex-col items-center gap-10 relative z-10"
            >
              {menuItems.map((item) => (
                <div key={item.title} className="flex flex-col items-center overflow-hidden">
                  <motion.a 
                    variants={{ initial: { y: 20, opacity: 0 }, open: { y: 0, opacity: 1 } }}
                    href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}
                    className="text-4xl font-light text-xpandify-white tracking-widest hover:text-xpandify-gold transition-colors duration-300 uppercase"
                  >
                    {item.title}
                  </motion.a>
                </div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
