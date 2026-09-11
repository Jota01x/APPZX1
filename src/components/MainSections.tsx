import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Zap, Search, Layout, Database, ShieldCheck, Star, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Método", href: "#method" },
    { label: "Estrutura", href: "#infra" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 group">
            <span className="text-white">APPZ<span className="text-blue-500">HUB</span></span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black text-white uppercase tracking-tighter">APPZHUB</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black text-white uppercase tracking-tighter"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#planos"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 py-5 bg-blue-600 text-white text-center font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.3)]"
              >
                Ativar Acesso
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative pt-44 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-black">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-10 max-w-6xl mx-auto pr-2">
            CRIE A ESTRUTURA COMPLETA <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 font-black">PARA VENDER SITES EM 2 MINUTOS</span>
          </h1>

          <div className="flex flex-col items-center max-w-3xl mx-auto border-t border-white/10 pt-12">
            <p className="text-sm md:text-xl text-zinc-400 font-medium leading-relaxed tracking-tight mb-12 px-4">
              A estrutura definitiva para criar sites de elite e encontrar empresas qualificadas em segundos. <span className="text-white">Foco total em escala e faturamento.</span>
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center w-full max-w-xl px-6"
            >
              <motion.a 
                animate={{ 
                  scale: [1, 1.015, 1],
                  boxShadow: [
                    "0 0 0px rgba(37,99,235,0)", 
                    "0 0 25px rgba(37,99,235,0.4)", 
                    "0 0 0px rgba(37,99,235,0)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                href="#planos"
                className="w-full group relative flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white py-5 px-4 md:px-8 rounded-xl transition-all duration-300 overflow-hidden"
              >
                <motion.div 
                  initial={false}
                  animate={{ 
                    x: ["-100%", "250%"]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none"
                />
                <span className="text-lg md:text-2xl font-black uppercase tracking-tighter relative z-10 whitespace-nowrap">Ativar Acesso</span>
              </motion.a>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">IA Exclusiva</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Templates Elite</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em]">Suporte 24/7</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
