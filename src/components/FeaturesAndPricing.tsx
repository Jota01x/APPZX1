import { motion } from "motion/react";
import { Check, Zap } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="planos" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">Oferta Exclusiva</span>
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6 pr-2">
            INVISTA EM <span className="text-blue-500 drop-shadow-[0_2px_2px_rgba(255,255,255,0.05)]">VOCÊ.</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">EXPERIMENTE SEM RISCO, GARANTIA DE 7 DIAS</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative group"
        >
          <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-5" />
          
          <div className="relative bg-zinc-950 border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-8">
                  Acesso Vitalício
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-10">Plano Elite</h3>
                
                <div className="flex flex-col items-center gap-6 mb-16 max-w-md mx-auto">
                  {[
                    "Crie sites Ilimitados",
                    "Buscador de Empresas Ilimitados",
                    "Mensagens de Abordagem",
                    "Hospedagem Inclusa",
                    "Domínio Incluso",
                    "Suporte VIP Prioritário",
                    "Sem Taxas de Renovação"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 w-full">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <span className="text-zinc-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-left">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10 md:p-16 text-center relative">
                <div className="mb-4">
                  <span className="text-zinc-600 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em] line-through">De R$ 397,00 por</span>
                </div>
                
                <div className="flex flex-col gap-2 mb-10">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-xl md:text-2xl font-black text-white">R$</span>
                    <span className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">197</span>
                    <span className="text-xl md:text-2xl font-black text-white">,00</span>
                  </div>
                  <span className="text-blue-500 font-black uppercase text-[10px] md:text-xs tracking-widest">
                    Ou 12x de R$ 20,99
                  </span>
                </div>

                <motion.a 
                  href="https://checkout.applyfy.com.br/checkout/cmr0ylc3d1mc301oi7r5y5slw?code=4wemx24&offer=2ZALM8Y"
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
                  className="group relative w-full py-5 px-4 bg-blue-600 text-white font-black uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] rounded-xl transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] block mb-6 overflow-hidden text-center"
                >
                  {/* High-end automatic shimmer */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      x: ["-100%", "200%"]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none"
                  />
                  <span className="relative z-10 whitespace-nowrap">Ativar Acesso</span>
                </motion.a>
                
                <div className="flex items-center justify-center gap-2 text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">+1000 Membros Ativos</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
