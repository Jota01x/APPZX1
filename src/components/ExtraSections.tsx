import { motion, AnimatePresence } from "motion/react";
import { Zap, Target, Search, Layout, MessageSquareText, Plus, Minus, ShieldCheck } from "lucide-react";
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
    <section id="faq" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">Suporte & Dúvidas</span>
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8 pr-2">
            FAQ.<br />
            <span className="text-blue-500 tracking-[-0.05em]">FREQUENTES</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto px-4">
            Tudo o que você precisa saber para começar a escalar sua operação hoje mesmo.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {questions.map((item, i) => (
            <div key={i} className="group border-b border-white/10 pb-6">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left py-4"
              >
                <span className="font-black text-sm md:text-base text-zinc-200 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === i ? "bg-blue-600 border-blue-600 rotate-180" : ""}`}>
                  <Plus className={`w-4 h-4 transition-transform ${openIndex === i ? "hidden" : "block"}`} />
                  <Minus className={`w-4 h-4 transition-transform ${openIndex === i ? "block" : "hidden"}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-500 text-sm font-medium leading-relaxed pt-2 pb-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const ProcessSteps = () => {
  const steps = [
    {
      title: "Passo 1",
      label: "Encontra a empresa",
      description: "Nosso sistema localiza automaticamente empresas que ainda não possuem site ou presença digital.",
      icon: Search
    },
    {
      title: "Passo 2",
      label: "Cria o site",
      description: "Gera um site profissional e otimizada de forma automática em segundos.",
      icon: Layout
    },
    {
      title: "Passo 3",
      label: "Fecha a venda",
      description: "Cria as mensagens de fechamento ideais para você enviar e fechar o contrato.",
      icon: MessageSquareText
    }
  ];

  return (
    <section id="method" className="relative py-32 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">O que é a APPZHUB?</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-8 pr-2">
            UMA FERRAMENTA QUE FAZ <span className="text-blue-500">TODO O PROCESSO PRA VOCÊ</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">A estrutura que você precisa para escalar de verdade</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
        >
          {steps.map((step, i) => (
            <div key={i} className="bg-black p-8 md:p-12 hover:bg-zinc-950 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-9xl font-black tracking-tighter">0{i+1}</span>
              </div>
              
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <step.icon className="w-7 h-7 text-blue-500" />
              </div>
              
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">{step.title}</span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6">{step.label}</h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Infrastructure = () => {
  return (
    <section id="infra" className="py-32 bg-[#050505] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">Estrutura Completa</span>
        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12 pr-2">
          DOMÍNIO E HOSPEDAGEM <br />
          <span className="text-blue-500">JÁ INCLUÍDOS.</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-16 px-4">
          Você não precisa se preocupar com custos extras. Toda a estrutura do site já está pronta para ficar <span className="text-white">ativa para sempre</span> sem mensalidades.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Domínio Próprio", desc: "Sua identidade digital exclusiva inclusa no plano." },
            { title: "Hospedagem", desc: "Servidores de alta performance com uptime garantido." },
            { title: "Segurança SSL", desc: "Certificados de segurança ativos em todos os seus sites." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-blue-500/50 transition-all">
              <ShieldCheck className="w-10 h-10 text-blue-500 mb-6 mx-auto" />
              <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
              <p className="text-zinc-500 text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white mb-8 block">
              APPZ<span className="text-blue-500">HUB</span>
            </a>
            <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-sm mb-10">
              Ajudamos agências e empreendedores a dominar o mercado com tecnologia de elite e processos validados.
            </p>
          </div>

          <div>
            <span className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-8 block">Navegação</span>
            <ul className="space-y-4">
              {["Início", "Método", "Estrutura", "Planos", "FAQ"].map(item => (
                <li key={item}>
                  <a href={item === "Planos" ? "#planos" : item === "Estrutura" ? "#infra" : `#${item.toLowerCase()}`} className="text-zinc-500 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-8 block">Legal</span>
            <ul className="space-y-4">
              {["Privacidade", "Termos de Uso"].map(item => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 APPZHUB INC. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-4 text-zinc-500">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">Ambiente 100% Seguro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
