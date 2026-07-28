"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150 && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsOpen(false);
    if (!isHome) return; // let normal Link handle routing if not home

    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { title: "Expertise", id: "expertise", href: "/#expertise" },
    { title: "Work", id: "work", href: "/#work" },
    { title: "Contact", id: "contact", href: "/contact" }
  ];

  return (
    <>
      <motion.header 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 p-6 md:px-12 lg:px-24 flex justify-between items-center z-[60] transition-colors duration-500 ${scrolled || !isHome ? 'bg-xpandify-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        <Link href="/" className="relative z-50 text-xl font-medium text-xpandify-green tracking-[0.3em] uppercase">
          Xpandify<span className="text-xpandify-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">.</span>
        </Link>
        
        <button onClick={toggleMenu} className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 md:hidden group" aria-label="Toggle Menu">
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 4, backgroundColor: "#D4AF37", width: "24px" } : { rotate: 0, y: -4, backgroundColor: "#1f493d", width: "24px" }}
            className="h-[1px] block absolute transition-all duration-300"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            className="h-[1px] bg-xpandify-green block absolute transition-all duration-300"
            style={{ width: "24px" }}
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4, backgroundColor: "#D4AF37", width: "24px" } : { rotate: 0, y: 4, backgroundColor: "#1f493d", width: "16px" }}
            className="h-[1px] block absolute transition-all duration-300 right-3"
            style={isOpen ? { right: "8px" } : {}}
          />
        </button>

        <nav className="hidden md:flex gap-12 text-[10px] font-semibold uppercase tracking-[0.25em] text-xpandify-green relative z-50">
          {menuItems.map((item) => (
            <Link 
              key={item.title} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.id)} 
              className="hover:text-xpandify-gold transition-colors duration-300 relative group flex flex-col items-center"
            >
              <span>{item.title}</span>
              <span className="absolute -bottom-2 w-0 h-[1px] bg-xpandify-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(25px)", transition: { duration: 0.5 } }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.4, delay: 0.2 } }}
            className="fixed inset-0 z-[55] bg-xpandify-white/95 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-xpandify-gold/15 rounded-full blur-[90px] pointer-events-none" />
            
            <motion.nav 
              initial="initial" animate="open" exit="initial"
              variants={{ initial: {}, open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
              className="flex flex-col items-center gap-10 relative z-10"
            >
              {menuItems.map((item) => (
                <div key={item.title} className="flex flex-col items-center overflow-hidden">
                  <Link 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-4xl font-light text-xpandify-green tracking-widest hover:text-xpandify-gold transition-colors duration-300 uppercase"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}