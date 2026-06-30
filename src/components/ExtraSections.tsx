import { motion, AnimatePresence } from "motion/react";
import { Zap, Target, Search, Layout, MessageSquareText, Plus, Minus } from "lucide-react";
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "COMO O APPZHUB AJUDA NA MINHA PRODUTIVIDADE?",
      a: "O APPZHUB automatiza as tarefas repetitivas de prospecção e criação, permitindo que você escale seus resultados sem precisar trabalhar mais horas por dia. É a tecnologia trabalhando para o seu crescimento."
    },
    {
      q: "NÃO TENHO EXPERIÊNCIA NA ÁREA, CONSIGO COMEÇAR?",
      a: "Sim, nossa plataforma foi desenvolvida para ser intuitiva. Removemos as complexidades técnicas para que você foque no que traz retorno real para o seu negócio, mesmo começando do zero."
    },
    {
      q: "O BUSCADOR REALMENTE ENCONTRA OPORTUNIDADES QUALIFICADAS?",
      a: "Com certeza. Nossa ferramenta identifica empresas que já possuem demanda por serviços digitais, facilitando sua abordagem e aumentando significativamente as chances de fechamento de contratos."
    },
    {
      q: "QUAL O DIFERENCIAL DA METODOLOGIA APPZHUB?",
      a: "Não entregamos apenas uma ferramenta, mas sim um ecossistema completo validado por centenas de membros. Você terá acesso a processos que transformam esforço em resultados previsíveis."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">FAQ. PERGUNTAS FREQUENTES</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950/30">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-zinc-900/50 transition-colors"
              >
                <span className="font-black text-xs sm:text-sm text-zinc-200 uppercase tracking-widest">{item.q}</span>
                {openIndex === i ? (
                  <Minus className="w-4 h-4 text-blue-500 shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-zinc-600 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-500 text-sm font-bold leading-relaxed tracking-tight border-t border-zinc-800/50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProcessSteps = () => {
  const steps = [
    {
      title: "Encontre Negócios",
      description: "Use nosso buscador elite para localizar empresas que precisam de um site ou melhorias urgentes.",
      icon: Search
    },
    {
      title: "Crie o Site",
      description: "Monte uma landing page de alta performance em minutos usando nossos templates validados.",
      icon: Layout
    },
    {
      title: "Feche a Venda",
      description: "Utilize nossos scripts de abordagem prontos para fechar contratos de alto valor.",
      icon: MessageSquareText
    }
  ];

  return (
    <section id="method" className="py-24 lg:py-40 bg-[#050505] border-y border-zinc-900 relative overflow-hidden">
      {/* Background Orbs - Reduced for mobile */}
      <div className="hidden md:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      <div className="hidden md:block absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-32 px-4">
          <span className="text-blue-500 font-black text-[10px] tracking-[0.4em] uppercase bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">Metodologia APPZHUB</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mt-10 mb-8 uppercase tracking-tighter leading-[0.9] sm:leading-[0.85] italic">
            3 PASSOS PARA <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600">DOMINAR A VENDA</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10" />

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="relative group"
            >
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Icon Container with Step Number */}
                <div className="relative mb-12">
                  <div className="w-28 h-28 bg-zinc-900 border-2 border-zinc-800 rounded-[40px] flex items-center justify-center text-white md:group-hover:border-blue-500/50 md:group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 relative z-10 overflow-hidden will-change-transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity" />
                    <step.icon className="w-12 h-12 text-blue-500 md:group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Floating Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 text-black rounded-[18px] flex items-center justify-center text-xl font-black italic shadow-2xl shadow-blue-500/40 z-20 border-4 border-[#050505] md:group-hover:rotate-12 transition-transform duration-500 will-change-transform">
                    {i + 1}
                  </div>

                  {/* Decorative Glow - Desktop only */}
                  <div className="hidden md:block absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
                
                <h3 className="text-3xl font-black text-white mb-5 uppercase tracking-tighter italic group-hover:text-blue-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-base font-medium leading-relaxed tracking-tight max-w-[280px] lg:max-w-none">
                  {step.description}
                </p>
                
                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 bg-gradient-to-b from-zinc-800 to-transparent mt-12" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Suggestion */}
        <div className="mt-24 lg:mt-32 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Zap className="w-3 h-3 text-blue-500" />
            Método validado por +500 membros
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 lg:py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16 lg:mb-20">
          <div>
            <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-6 italic">
              APPZHUB
            </div>
            <p className="text-zinc-500 max-w-xs text-sm font-medium leading-relaxed uppercase tracking-tight">
              Ajudamos agências e empreendedores a dominar o mercado com tecnologia de elite.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 lg:gap-16 items-center opacity-20 grayscale hover:grayscale-0 transition-all cursor-default select-none">
            <span className="font-black text-xs sm:text-sm italic tracking-tighter">TECHFLOW</span>
            <span className="font-black text-xs sm:text-sm italic tracking-tighter">LEADGENIX</span>
          </div>
        </div>
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] sm:text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] text-center md:text-left">
          <p>© 2026 APPZHUB INC. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">PRIVACIDADE</a>
            <a href="#" className="hover:text-white">TERMOS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
