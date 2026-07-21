import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Zap, Search, Layout, Database, ShieldCheck, Star, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Método", href: "#method" },
    { label: "Planos", href: "#pricing" },
    { label: "Perguntas", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-[padding,background-color] ${
      isScrolled 
        ? "bg-black/90 md:bg-black/80 md:backdrop-blur-lg border-b border-white/5 py-1" 
        : "bg-transparent py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <a href="#home" className="text-2xl font-black tracking-tighter italic">
              <span className="md:animate-[colorShift_4s_infinite_ease-in-out]">APPZHUB</span>
            </a>
          </div>
          <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="text-zinc-400 hover:text-white transition-colors">{item.label}</a>
            ))}
          </nav>
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-white hover:bg-zinc-800 transition-all flex items-center justify-center group active:scale-95 will-change-transform"
            >
              <Menu size={20} className="md:group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black md:bg-black/98 md:backdrop-blur-2xl flex flex-col overflow-hidden will-change-opacity"
          >
            {/* Background Decor - Only on Desktop for performance */}
            <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -mr-96 -mt-96 pointer-events-none" />
            <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-[150px] -ml-96 -mb-96 pointer-events-none" />

            <div className="flex justify-between items-center h-20 px-6 sm:px-10 border-b border-white/5 relative z-10">
              <span className="text-2xl font-black tracking-tighter italic text-white">APPZHUB</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 active:scale-90 transition-all flex items-center justify-center will-change-transform"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10">
              <nav className="flex flex-col space-y-4 sm:space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-baseline gap-6 sm:gap-10 border-b border-transparent md:hover:border-white/5 pb-2 transition-all"
                  >
                    <span className="text-blue-500/40 font-mono text-sm sm:text-xl font-bold md:group-hover:text-blue-500 transition-colors">
                      0{index + 1}
                    </span>
                    <span className="text-4xl sm:text-8xl font-black text-white md:group-hover:text-blue-500 md:group-hover:translate-x-4 transition-all uppercase tracking-tighter italic will-change-transform">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 sm:mt-24"
              >
                <a
                  href="#pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-blue-400 transition-all shadow-[0_0_40px_rgba(59,130,246,0.2)] md:hover:scale-105 active:scale-95 will-change-transform"
                >
                  Começar Agora
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>

            <div className="p-8 sm:p-10 border-t border-white/5 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em] italic">
                  © 2024 APPZHUB • Investimento Inteligente
                </p>
              </div>
              <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">
                <span>Vibe Tech</span>
                <span>•</span>
                <span>Foco em Resultado</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  return (
    <div id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 lg:pt-48 pb-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            Nova Versão 3.0
          </span>
          <span className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">
            Plano Vitalício novo
          </span>
        </div>
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.95] sm:leading-[0.9] mb-8 uppercase max-w-[15ch] sm:max-w-none mx-auto will-change-transform">
            CRIE SITES EM <span className="text-blue-500 md:text-white md:animate-[colorShift_4s_infinite_ease-in-out]">2 MINUTOS</span>{" "}
            <br className="hidden sm:block" />
            E VENDA PARA <span className="italic font-serif text-blue-500 underline decoration-[6px] underline-offset-[10px] md:underline-offset-[16px]">EMPRESAS.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-zinc-400 mb-12 font-medium leading-relaxed tracking-tight px-4 sm:px-0">
            A estrutura completa para criar sites de elite e encontrar empresas qualificadas em segundos. Pare de perder tempo e escale seu faturamento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="#pricing" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full sm:w-auto bg-blue-500 text-black px-8 py-5 sm:px-12 sm:py-6 rounded-2xl text-base sm:text-xl font-black uppercase tracking-tighter hover:bg-blue-400 transition-all flex items-center justify-center gap-3 whitespace-nowrap group shadow-[0_0_20px_rgba(59,130,246,0.2)] md:animate-[pulse_2s_infinite_ease-in-out] will-change-transform"
            >
              GARANTIR ACESSO VITALÍCIO 
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[4] group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
