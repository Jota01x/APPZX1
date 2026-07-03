import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, LogOut, LayoutGrid, Mail, ExternalLink } from 'lucide-react';
import { Document } from '../types';
import { jsPDF } from 'jspdf';

interface DashboardProps {
  onLogout: () => void;
}

const DOCUMENTS: Document[] = [
  {
    id: '1',
    title: 'Banco de Objeções',
    description: 'Aprenda a contornar as principais objeções dos clientes e feche muito mais vendas com argumentos prontos.',
    content: `ACELERADOR DE RESULTADOS
Banco de Objeções
12 objeções reais na venda de site para negócios locais — e como contornar cada uma

Como usar este material
Cada objeção vem com o motivo real por trás da fala, uma resposta pronta para usar no WhatsApp ou pessoalmente, e a técnica de persuasão aplicada. Adapte o tom à sua linguagem, mas mantenha a estrutura: validar, reenquadrar e conduzir para o próximo passo.

Objeção 1
"Não preciso de site, já tenho Instagram."
POR QUE ELE DIZ ISSO
Ele associa 'presença online' apenas à rede social porque é o que ele já usa e entende. Ele não enxerga a diferença entre um perfil e um ativo digital que ele controla.
COMO RESPONDER
Faz todo sentido o Instagram continuar sendo importante — a ideia não é substituir, é reforçar. O problema é que o Instagram pode sair do ar, mudar de algoritmo ou até ser derrubado, e você perde tudo. O site é o único lugar que é 100% seu, aparece no Google quando alguém pesquisa o seu negócio, e passa confiança pra quem nunca ouviu falar de você. Posso te mostrar como ficaria o seu em 2 minutos?
TÉCNICA USADA
Reenquadre + prova de posse (ativo próprio vs. alugado) + CTA de baixo compromisso

Objeção 2
"Tá caro."
POR QUE ELE DIZ ISSO
Raramente é sobre o valor absoluto — é sobre não ter clareza do retorno. Ele está comparando o preço com 'nada' (não ter site), não com o que o site pode gerar.
COMO RESPONDER
Entendo. Só pra ter uma ideia: quanto custa pra você UM cliente novo hoje? [pausa pra resposta] O site paga ele mesmo com um ou dois clientes a mais por mês, e depois disso é lucro puro, sem mensalidade. Não é gasto, é a ferramenta que traz esses clientes.
TÉCNICA USADA
Ancoragem no custo de aquisição + reformulação de gasto para investimento

Objeção 3
"Vou pensar."
POR QUE ELE DIZ ISSO
Quase nunca é sobre pensar de fato — é uma forma educada de escapar de uma decisão sem parecer estar dizendo não. Geralmente esconde uma objeção não verbalizada (preço, confiança, prioridade).
COMO RESPONDER
Sem problema, é uma decisão sua. Só pra eu te ajudar melhor: é o valor que tá pesando, o tempo pra colocar no ar, ou alguma inesperurança se vai funcionar pro seu tipo de negócio? Assim eu já te mando algo mais direcionado.
TÉCNICA USADA
Isolamento da objeção real + pergunta de múltipla escolha (facilita a resposta)

Objeção 4
"Já tentei site antes e não deu resultado."
POR QUE ELE DIZ ISSO
Ele teve uma experiência ruim (provavelmente um site mal feito, sem SEO básico, ou abandonado sem manutenção) e está generalizando essa experiência para qualquer site.
COMO RESPONDER
Entendo a frustração, isso acontece muito porque a maioria dos sites por aí é só uma 'vitrine bonita' parada, sem nenhuma estratégia por trás. O que eu faço é diferente: o site já vem pronto pra aparecer no Google e ligado direto ao seu WhatsApp, pra transformar visita em conversa de venda. Posso te mostrar um exemplo parecido com o seu segmento?
TÉCNICA USADA
Empatia + diferenciação do concorrente anterior + prova social específica do nicho

Objeção 5
"Não tenho tempo pra cuidar disso."
POR QUE ELE DIZ ISSO
Ele está imaginando o trabalho que teria com um site tradicional — atualizar, escrever textos, mexer em código. Ele não sabe que a proposta é diferente.
COMO RESPONDER
Boa notícia: você não vai precisar mexer em nada. Eu monto tudo pronto, com as informações do seu negócio, e te entrego funcionando. Seu único trabalho depois é responder o WhatsApp quando o cliente chamar — que é exatamente o que você já faz hoje.
TÉCNICA USADA
Remoção de fricção percebida + reforço de que o esforço extra é zero

Objeção 6
"Meu filho/sobrinho vai fazer."
POR QUE ELE DIZ ISSO
Ele já tem alguém 'de confiança' cotado, geralmente de graça, e está comparando preço, não qualidade ou velocidade de entrega.
COMO RESPONDER
Que ótimo ele saber mexer com isso! Só um ponto: site rápido, que carrega bem e aparece no Google, tem uma parte técnica chata de configurar (hospedagem, performance, SEO) que consome muito tempo de quem tá aprendendo. Eu entrego isso pronto em poucos dias — ele pode inclusive ajudar depois com ajustes, sem problema nenhum.
TÉCNICA USADA
Validação sem confronto + destaque da variável tempo/técnica que o familiar não resolve rápido

Objeção 7
"Não sei se funciona pro meu tipo de negócio."
POR QUE ELE DIZ ISSO
Ele não tem referência de alguém parecido com ele que já usou site e teve resultado. Está com medo de ser 'cobaia'.
COMO RESPONDER
Entendo a dúvida. Eu já fiz site pra [tipo de negócio parecido] e o que mudou foi simples: antes o cliente achava só pelo boca a boca, agora ele acha pesquisando no Google também. Funciona pra praticamente qualquer negócio local, porque hoje em dia todo mundo pesquisa antes de decidir onde comprar.
TÉCNICA USADA
Prova social específica por segmento + normalização do comportamento do consumidor atual

Objeção 8
"E se eu não gostar do resultado?"
POR QUE ELE DIZ ISSO
Medo de arrependimento pós-compra, comum em quem nunca comprou algo digital de alguém que não conhece pessoalmente.
COMO RESPONDER
Fica tranquilo, antes de qualquer cobrança eu te mostro exatamente como vai ficar o site pronto, do jeitinho que você vai receber. Você só confirma depois de ver e aprovar.
TÉCNICA USADA
Redução de risco percebida + prova antes do compromisso

Objeção 9
"Prefiro investir em anúncio."
POR QUE ELE DIZ ISSO
Ele entende que precisa de mais clientes, mas está pulando uma etapa: anúncio manda gente pra algum lugar — sem site, esse 'lugar' costuma ser um perfil solto que passa menos confiança.
COMO RESPONDER
Anúncio é ótimo, e o site trabalha junto com ele: quando alguém clica no anúncio e cai numa página só sua, profissional, converte muito mais do que cair só num perfil de Instagram. Um potencializa o outro.
TÉCNICA USADA
Reformulação de 'ou' para 'e' — o site como multiplicador do investimento em anúncio, não concorrente dele

Objeção 10
"Não confio em comprar pela internet de alguém que não conheço."
POR QUE ELE DIZ ISSO
Falta de prova social e de contato prévio. Ele está avaliando o risco de ser enganado, não o produto em si.
COMO RESPONDER
Faz total sentido essa cautela. Posso te mostrar sites que já fiz pra outros negócios aqui da região, e você pode falar com eles se quiser confirmar. Também posso te mostrar o site pronto antes de qualquer pagamento.
TÉCNICA USADA
Prova social verificável + redução de risco (mostrar antes de cobrar)

Objeção 11
"Já tenho clientes suficientes."
POR QUE ELE DIZ ISSO
Ele está pensando no volume atual, não no que perde quando um cliente pesquisa o nome do negócio no Google e não encontra nada — ou pior, encontra o concorrente.
COMO RESPONDER
Que bom que o movimento tá bom! Só um detalhe: hoje, quando alguém pesquisa o nome do seu negócio ou o que você vende na região, o que aparece? Se não for você, é seu concorrente. O site garante que, mesmo quem não te conhece ainda, te encontre primeiro.
TÉCNICA USADA
Mudança de foco de volume atual para participação de mercado / visibilidade competitiva

Objeção 12
"Vou esperar o movimento melhorar pra investir."
POR QUE ELE DIZ ISSO
Ele está tratando o site como uma despesa vinculada ao caixa atual, não como a ferramenta que pode ajudar a melhorar esse movimento.
COMO RESPONDER
Entendo, mas geralmente é o contrário: o movimento melhora depois que mais gente te encontra, não antes. Esperar significa continuar invisível pra quem tá pesquisando por você agora. O investimento é justamente o que ajuda a destravar esse momento.
TÉCNICA USADA
Inversão de causa e efeito + urgência baseada em custo de oportunidade

Regra de ouro
Nunca discuta a objeção de frente. Valide o que a pessoa sentiu, reenquadre o ponto de vista, e sempre feche com uma pergunta ou próximo passo simples. Objeção não é rejeição — é pedido de mais informação.`,
    type: 'pdf',
    url: '/documentos/banco-de-objecoes.pdf',
  },
  {
    id: '2',
    title: 'Portfólio + Instagram Estruturado',
    description: 'O guia definitivo para criar um portfólio irresistível que atrai clientes de alto ticket.',
    content: `ACELERADOR DE RESULTADOS
Portfólio + Instagram Estruturado
Como parecer profissional antes mesmo de fechar o primeiro cliente

Introdução
Antes de alguém confiar o próprio negócio a você, essa pessoa vai te julgar em segundos — pelo que aparece quando pesquisa seu nome, vê seu Instagram ou clica num link que você mandou. Não é sobre enganar ninguém: é sobre mostrar, de forma organizada, que você sabe o que está fazendo.
Este guia tem duas partes que trabalham juntas: um portfólio simples em formato de site, e um Instagram estruturado para sustentar esse portfólio com prova social contínua. Você não precisa de nada caro ou complicado — precisa de organização e consistência.

Parte 1 — Portfólio em site
Por que um portfólio muda o jogo
Um print de conversa ou um antes/depois solto no WhatsApp convence uma pessoa. Um portfólio bem montado convence qualquer pessoa que chega até ele, a qualquer hora, sem você precisar estar presente explicando. Ele trabalha por você 24 horas por dia.

As 5 seções que todo portfólio precisa ter
• Início: uma frase clara do que você faz e para quem — sem enrolação. Ex: "Eu crio sites para negócios locais que ainda não têm presença online."
• Sobre: quem é você, há quanto tempo faz isso, e por que alguém deveria confiar em você. Duas ou três frases bastam.
• Cases/Projetos: 3 a 6 exemplos do que você já entregou, com print do resultado (site, antes/depois, ou métrica alcançada).
• Depoimentos: mensagens reais de clientes satisfeitos — print de WhatsApp funciona perfeitamente aqui, não precisa ser nada formal.
• Contato: um botão único e óbvio, de preferência direto para o WhatsApp, sem formulário complicado.

Dica prática: Se você ainda não tem cases pagos, ofereça 1 ou 2 sites de graça ou com desconto grande para negócios reais, só para ter conteúdo verdadeiro para essa seção. Isso paga o investimento em poucos dias de credibilidade a mais.

Erros que destroem a credibilidade
• Portfólio com texto genérico que poderia ser de qualquer pessoa — seja específico sobre o que você resolve.
• Excesso de informação na primeira tela — a pessoa precisa entender o que você faz em 3 segundos.
• Nenhum contato visível sem precisar rolar a página inteira.
• Cases sem contexto — mostre o problema que existia antes e o que mudou depois.

Como usar o portfólio na prática
Envie o link do portfólio antes mesmo de começar a negociar preço. Isso muda completamente o tom da conversa: em vez de você convencer alguém do zero, a pessoa já chega mais aberta porque viu prova antes de você pedir qualquer coisa.

Parte 2 — Instagram estruturado
O papel do Instagram nessa engrenagem
O portfólio prova competência técnica. O Instagram prova que você é uma pessoa real, ativa, e que esse não foi um trabalho isolado — é o que você faz com frequência. Um sustenta o outro.

Bio: o cartão de visitas
• Nome de usuário fácil de lembrar e, se possível, ligado ao que você faz.
• Primeira linha da bio: o que você faz + para quem, igual ao portfólio.
• Link direto para o portfólio ou WhatsApp — nunca deixe o "link na bio" apontando para nada.

Destaques (stories fixados)
• "Sobre mim" — quem é você, rapidamente.
• "Antes e depois" — os resultados visuais mais fortes que você tem.
• "Depoimentos" — prints de clientes satisfeitos.
• "Como funciona" — o passo a passo de como é fechar com você, tirando a insegurança de quem nunca comprou algo assim.

Grade (feed): 3 tipos de conteúdo que se revezam
• Prova: antes/depois, resultado de cliente, print de conversa aprovando o trabalho.
• Educação: uma dica rápida sobre presença online, tipo "3 sinais de que seu negócio precisa de site".
• Bastidor: você trabalhando, gravando um vídeo curto explicando o que está fazendo naquele momento — isso humaniza e gera confiança.

Dica prática: Não precisa postar todo dia. 3 publicações bem pensadas por semana, seguindo esses 3 tipos alternados, já é suficiente para parecer ativo e confiável.

Cronograma simples de postagem
• Segunda: conteúdo de prova (case ou depoimento).
• Quarta: conteúdo educativo (dica rápida).
• Sexta: bastidor (vídeo curto de você trabalhando).

Parte 3 — Juntando as duas peças
O fluxo ideal é: alguém vê seu conteúdo ou recebe sua abordagem → entra no seu Instagram e vê que você é ativo e tem prova social → clica no link do portfólio → vê os cases organizados → te chama no WhatsApp já convencido. Cada peça reduz a desconfiança da próxima.
Você não precisa ter tudo perfeito para começar. Comece com o mínimo de cada seção, publique, e vá melhorando com o tempo — o pior portfólio é aquele que nunca sai do papel.

Checklist final
• Portfólio no ar com as 5 seções básicas
• Pelo menos 2 cases reais (mesmo que cortesia) publicados
• Bio do Instagram com link funcionando
• 4 destaques fixados (Sobre, Antes/depois, Depoimentos, Como funciona)
• Rotina de 3 posts por semana definida`,
    type: 'pdf',
    url: '/documentos/ebook-portfolio.pdf',
  },
  {
    id: '3',
    title: '[EM BREVE] Provas Sociais',
    description: 'Galeria completa de resultados e depoimentos para passar autoridade, credibilidade e explodir sua taxa de conversão.',
    content: 'Este conteúdo estará disponível em breve para todos os membros.',
    type: 'doc',
    url: '#',
  }
];

export default function Dashboard({ onLogout }: DashboardProps) {
  const [showSupport, setShowSupport] = useState(false);

  const handleDownload = (doc: Document) => {
    if (!doc.content) return;
    
    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.width;
      const pageHeight = pdf.internal.pageSize.height;
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      let cursorY = 30;

      // Helper for page breaks
      const checkPageBreak = (needed: number) => {
        if (cursorY + needed > pageHeight - 20) {
          pdf.addPage();
          cursorY = 25;
          return true;
        }
        return false;
      };

      const lines = doc.content.split('\n');
      
      lines.forEach((line, index) => {
        const text = line.trim();
        
        if (!text) {
          cursorY += 4;
          return;
        }

        // 1. "ACELERADOR DE RESULTADOS" (Header)
        if (text === "ACELERADOR DE RESULTADOS") {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(10);
          pdf.setTextColor(197, 160, 89); // Gold
          pdf.text(text, pageWidth / 2, cursorY, { align: 'center' });
          cursorY += 10;
          return;
        }

        // 2. Main Document Title
        if (text === doc.title || (index < 5 && text === "Banco de Objeções") || (index < 5 && text === "Portfólio + Instagram Estruturado")) {
           pdf.setFont("times", "bold");
           pdf.setFontSize(26);
           pdf.setTextColor(30, 30, 30);
           const splitTitle = pdf.splitTextToSize(text, contentWidth);
           pdf.text(splitTitle, pageWidth / 2, cursorY, { align: 'center' });
           cursorY += (splitTitle.length * 10) + 5;
           return;
        }

        // 3. Section Headers
        if (text.startsWith('Objeção') || text.startsWith('Introdução') || text.startsWith('Parte') || text.startsWith('Regra de ouro') || text.startsWith('Checklist final')) {
          checkPageBreak(20);
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(14);
          pdf.setTextColor(197, 160, 89);
          pdf.text(text, margin, cursorY);
          cursorY += 10;
          return;
        }

        // 4. Sub-headers (POR QUE ELE DIZ ISSO, COMO RESPONDER, TÉCNICA USADA)
        if (text === text.toUpperCase() && text.length > 5 && !text.includes('"') && !text.includes('—')) {
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(10);
          pdf.setTextColor(197, 160, 89);
          pdf.text(text, margin, cursorY);
          cursorY += 6;
          return;
        }

        // 5. Normal text / Body text
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(11);
        pdf.setTextColor(60, 60, 60);
        const splitContent = pdf.splitTextToSize(text, contentWidth);
        checkPageBreak(splitContent.length * 6);
        pdf.text(splitContent, margin, cursorY);
        cursorY += (splitContent.length * 6) + 2;
      });

      pdf.save(`${doc.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      const element = document.createElement("a");
      const file = new Blob([doc.content], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `${doc.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };
  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-brand-dark/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
              <LayoutGrid className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              APPZHUB
            </span>
          </div>
          
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-white/60 hover:text-white transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Bem-vindo à sua Área de Membros</h2>
          <p className="text-white/60 text-lg">Aqui você encontrará seus documentos exclusivos e materiais de apoio.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTS.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-dark border border-white/10 rounded-2xl p-6 hover:border-brand-blue/50 transition-all hover:shadow-2xl hover:shadow-brand-blue/5 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <FileText className="w-6 h-6 text-brand-blue group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                {doc.title}
              </h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed flex-grow">
                {doc.description}
              </p>

              <div className="flex items-stretch mt-auto w-full">
                <button 
                  onClick={() => handleDownload(doc)}
                  className={`flex-1 flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                    doc.url === '#' && !doc.content
                      ? 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5' 
                      : 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-lg shadow-brand-blue/20'
                  }`}
                  disabled={doc.url === '#' && !doc.content}
                >
                  <Download className="w-4 h-4" />
                  {doc.url === '#' && !doc.content ? 'Indisponível' : 'Baixar PDF'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Website Link Button */}
        <div className="mt-12 flex justify-center">
          <a 
            href="https://appzhub.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-brand-dark border border-white/10 rounded-2xl hover:border-brand-blue/50 transition-all hover:shadow-xl hover:shadow-brand-blue/10"
          >
            <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue transition-colors">
              <ExternalLink className="w-5 h-5 text-brand-blue group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Acesse o Site Oficial</p>
              <p className="text-lg font-display font-bold">Ir para APPZHUB</p>
            </div>
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-transparent border border-brand-blue/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl font-bold mb-2">Precisa de ajuda?</h4>
              <p className="text-white/60">Nosso suporte está disponível de segunda a sexta para te auxiliar.</p>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setShowSupport(!showSupport)}
                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                {showSupport ? <Mail className="w-4 h-4" /> : null}
                {showSupport ? 'APPZHUB@SUPORTE.COM' : 'Falar com Suporte'}
              </button>
              
              <AnimatePresence>
                {showSupport && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-brand-blue font-mono text-sm text-center"
                  >
                    Clique acima para copiar ou enviar um e-mail
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
