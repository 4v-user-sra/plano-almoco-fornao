import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Pizza, Megaphone, ChartLineUp, Clock, Desktop, Fire, CaretRight, ShieldWarning } from '@phosphor-icons/react';
import { cn } from './lib/utils';

// --- MOTION CONFIG ---
const SPRING_HEAVY = { type: 'spring', stiffness: 80, damping: 20 };
const SPRING_SMOOTH = { type: 'spring', stiffness: 120, damping: 24 };

// --- COMPONENTS ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={SPRING_SMOOTH}
        className="fixed top-0 left-0 w-full z-50 border-b-2 border-[#050505] bg-[#f4f4f0]"
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Fire weight="fill" className="text-[#FF2A2A] w-6 h-6" />
            <span className="font-bold tracking-tight uppercase text-lg text-[#050505]">[ O FORNÃO ]</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-[4px] w-6 h-5 justify-center items-end group"
          >
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-full h-[3px] bg-[#050505] origin-center" 
            />
            <motion.div 
              animate={{ width: isOpen ? "100%" : "70%", rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="h-[3px] bg-[#050505] origin-center transition-all duration-300" 
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#f4f4f0] flex flex-col items-center justify-center border-[12px] border-[#050505]"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...SPRING_HEAVY, delay: 0.1 }}
              className="flex flex-col items-center gap-10 text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#050505]"
            >
              <a href="#setup" className="hover:text-[#FF2A2A] transition-colors" onClick={() => setIsOpen(false)}>Setup & Estruturação</a>
              <a href="#criativo" className="hover:text-[#FF2A2A] transition-colors" onClick={() => setIsOpen(false)}>Diretrizes Criativas</a>
              <a href="#lancamento" className="hover:text-[#FF2A2A] transition-colors" onClick={() => setIsOpen(false)}>Mídia & Lançamento</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ButtonPrimary = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="group relative rounded-none px-8 py-4 bg-[#FF2A2A] text-white font-black tracking-widest uppercase text-[12px] flex items-center gap-4 hover:bg-[#050505] transition-colors duration-300 border-2 border-[#050505]">
      <span>{children}</span>
      <div className="w-8 h-8 rounded-none border border-white flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
        <CaretRight weight="bold" className="w-4 h-4" />
      </div>
    </button>
  );
};

const NoiseOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-10 mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
);

const AmbientGlow = () => null; // Removed for brutalism

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center px-4 md:px-12 py-32 md:py-48 overflow-hidden border-b-[4px] border-[#050505]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10 items-stretch">
        
        {/* Left Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="flex-1 flex flex-col items-start justify-center border-l-[8px] border-[#FF2A2A] pl-8"
        >
          <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#050505] mb-4 bg-white border border-[#050505] px-2 py-1">
            ESTRATÉGIA GLOBAL DE CAMPANHA // 01
          </div>
          
          <h1 className="text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-tighter font-black text-[#050505] mb-8 uppercase text-balance">
            O SABOR DA NOITE <br />
            <span className="text-[#FF2A2A]">NA VELOCIDADE DO SEU DIA</span>
          </h1>

          <p className="text-[#050505] text-lg md:text-xl max-w-[40ch] leading-snug mb-12 font-medium">
            Introduzindo o Almoço Rápido O Fornão. Refeições completas, prontas e entregues voando.
          </p>

          <ButtonPrimary>Acionar Plano de Mídia</ButtonPrimary>
        </motion.div>

        {/* Right Asset */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
           className="flex-1 w-full relative border-2 border-[#050505] bg-white p-4 flex flex-col"
        >
           <div className="flex justify-between items-center border-b-2 border-[#050505] pb-2 mb-4 font-mono text-xs font-bold">
             <span>IMG_REF_001</span>
             <span className="uppercase text-[#FF2A2A]">Ativo</span>
           </div>
           <div className="flex-1 w-full relative overflow-hidden group border border-[#050505] grayscale contrast-125">
             <img 
                src="https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=2000&auto=format&fit=crop" 
                alt="Mealbox Concept" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms]"
             />
           </div>
           <div className="mt-4 bg-[#050505] text-white p-4 flex items-center justify-between font-mono">
              <div className="text-xs font-bold uppercase tracking-widest leading-none">Meta Ads Geolocalizado</div>
              <div className="h-2 w-1/3 bg-white/20 overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="h-full bg-[#FF2A2A]"
                />
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

const BentoGrid = () => {
   return (
      <section id="setup" className="py-32 md:py-48 px-4 md:px-12 w-full max-w-7xl mx-auto border-b-[4px] border-[#050505]">
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={SPRING_HEAVY}
            className="mb-16 border-l-[8px] border-[#050505] pl-8"
         >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#050505]">Plano de Execução</h2>
            <p className="text-[#050505]/70 text-lg font-medium">Cronograma tático e estrutural para o go-live.</p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-2 grid-flow-dense">
            
            {/* Card 1: Setup - Large */}
            <motion.div 
               whileHover={{ scale: 0.99 }}
               className="col-span-1 md:col-span-2 md:row-span-2 doppelrand group"
            >
               <div className="doppelrand-inner p-8 flex flex-col justify-between">
                  <div className="relative z-10">
                    <Desktop className="text-[#FF2A2A] w-8 h-8 mb-6" />
                    <h3 className="text-2xl font-black uppercase text-[#050505] mb-3 border-b-2 border-[#050505] pb-2 inline-block">Fase 1: Setup</h3>
                    <p className="text-[#050505]/80 text-sm leading-relaxed mb-6 mt-4">
                      Dia 1 a 3. Configuração das opções de Almoço no Cardapioweb e sistema ERP. Cadastro das mealboxes e segmentação rigorosa da base de clientes (+1500 contatos).
                    </p>
                  </div>
                  <div className="relative z-10 p-4 bg-white border border-[#050505] font-mono text-xs text-[#050505] flex flex-col gap-2">
                     <div className="flex justify-between items-center">
                        <span className="font-bold">STATUS</span>
                        <span className="text-[#white] bg-[#FF2A2A] px-2 py-0.5 animate-pulse text-white">RUNNING</span>
                     </div>
                     <div className="w-full bg-[#050505] h-[2px] my-1" />
                     <div className="flex justify-between items-center">
                        <span className="font-bold">CRM_TARGETS</span>
                        <span className="text-[#050505]">&gt; 1500 INATIVOS</span>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Card 2: Produção Criativa */}
            <motion.div 
               whileHover={{ scale: 0.99 }}
               className="col-span-1 md:col-span-2 doppelrand group"
            >
               <div className="doppelrand-inner p-8 relative overflow-hidden h-full min-h-[240px]">
                 <div className="absolute top-0 right-0 w-1/2 h-full border-l-2 border-[#050505] bg-[#050505]">
                   <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1913&auto=format&fit=crop" className="w-full h-full object-cover object-center grayscale contrast-125 opacity-50 mix-blend-screen" />
                 </div>
                 <div className="relative z-10 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-black uppercase text-[#050505] mb-2 bg-white inline-block px-2 border border-[#050505] w-fit">Fase 2: Produção</h3>
                    <p className="text-[#050505]/80 font-medium text-sm max-w-[30ch] mt-2">
                      Dia 4 a 10. Estética Food Porn. Takes de processo e montagem ágil transmitindo velocidade. 
                    </p>
                 </div>
               </div>
            </motion.div>

             {/* Card 3: Go-Live */}
             <motion.div 
               whileHover={{ scale: 0.99 }}
               className="col-span-1 md:col-span-2 doppelrand group"
            >
               <div className="doppelrand-inner p-8 flex flex-row items-center justify-between relative overflow-hidden bg-white">
                 <div className="relative z-10">
                    <h3 className="text-xl font-black uppercase text-[#050505] mb-2 inline-block border-b-2 border-[#050505] pb-1">Fase 3: Go-Live</h3>
                    <p className="text-[#050505]/80 font-medium text-sm max-w-[28ch] mt-2">
                      Dia 11. Disparo na base quente às <span className="bg-[#FF2A2A] text-white px-1">10h30</span>. Meta Ads Raio 4km.
                    </p>
                 </div>
                 <div className="w-16 h-16 rounded-none border-2 border-[#050505] bg-white flex items-center justify-center shrink-0">
                    <ChartLineUp className="text-[#FF2A2A] w-8 h-8" />
                 </div>
               </div>
            </motion.div>

         </div>
      </section>
   );
};

const CreativeSection = () => {
  return (
    <section id="criativo" className="py-32 md:py-48 px-4 md:px-12 w-full bg-[#EAE8E3] border-b-[4px] border-[#050505] relative overflow-hidden">
        {/* Abstract Background Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black tracking-tighter text-[#050505]/5 pointer-events-none whitespace-nowrap">
          FOOD_PORN
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-24">
           {/* Left text */}
           <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={SPRING_HEAVY}
             className="flex-1 flex flex-col justify-center"
           >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-[#050505] border-l-[8px] border-[#FF2A2A] pl-8">
                DIRETRIZES <br/>
                VISUAIS.
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 border-2 border-[#050505] p-4 bg-white">
                  <div className="shrink-0 font-mono text-[#050505] font-bold text-lg mt-1 w-8">01</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase text-[#050505]">Estética</h4>
                    <p className="text-[#050505]/80 font-medium text-sm leading-relaxed mt-2">Close-ups extremos (Macro). Iluminação focada no brilho. Fundo remetendo a ambiente corporativo.</p>
                  </div>
                </div>
                <div className="flex gap-4 border-2 border-[#050505] p-4 bg-white">
                  <div className="shrink-0 font-mono text-[#050505] font-bold text-lg mt-1 w-8">02</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase text-[#050505]">Ad Formats</h4>
                    <p className="text-[#050505]/80 font-medium text-sm leading-relaxed mt-2">Reels ritmo TikTok. Foco no vapor, marmita sendo aberta e fechada rapidamente na cozinha.</p>
                  </div>
                </div>
                <div className="flex gap-4 border-2 border-[#050505] p-4 bg-white">
                  <div className="shrink-0 font-mono text-[#050505] font-bold text-lg mt-1 w-8">03</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase text-[#050505]">Copywriting</h4>
                    <p className="text-[#050505]/80 font-medium text-sm leading-relaxed mt-2">Gatilhos de conveniência: <span className="bg-[#FF2A2A] text-white px-1 font-bold">"Sem louça, sem sujeira"</span>. Urgência: "Sua fome não espera".</p>
                  </div>
                </div>
              </div>
           </motion.div>

           {/* Right Z-Axis Cards */}
           <div className="flex-1 relative min-h-[500px]">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={SPRING_HEAVY}
                className="absolute top-10 right-0 md:right-10 w-[80%] doppelrand z-10 bg-white"
              >
                  <div className="doppelrand-inner p-6 relative overflow-hidden bg-white border-[#050505]">
                    <div className="absolute inset-0 opacity-[0.15] scale-105 pointer-events-none grayscale contrast-150">
                       <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-mono text-[#FF2A2A] mb-2 font-bold uppercase tracking-widest bg-white border border-[#050505] w-fit px-2 py-0.5">VIDEO [ REELS_TIKTOK ]</div>
                      <div className="text-sm font-medium text-[#050505] bg-[#EAE8E3] p-2 border-l-2 border-[#050505]">"Cansado de perder seu horário de almoço esperando a comida? O Fornão agora entrega o almoço perfeito..."</div>
                    </div>
                  </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{...SPRING_HEAVY, delay: 0.1}}
                className="absolute top-48 right-4 md:right-32 w-[90%] doppelrand z-20 bg-white"
              >
                  <div className="doppelrand-inner p-0 overflow-hidden bg-white flex flex-col group border-[#050505]">
                     <div className="h-40 w-full overflow-hidden relative grayscale contrast-125 border-b-2 border-[#050505]">
                       <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                       <div className="absolute bottom-0 right-0 bg-[#050505] text-white px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                         <span className="w-2 h-2 rounded-none bg-[#FF2A2A]"></span> TOP_VIEW
                       </div>
                     </div>
                     <div className="p-6">
                       <div className="text-xs font-mono text-[#FF2A2A] mb-2 font-bold uppercase tracking-widest bg-[#050505] text-white w-fit px-2 py-0.5">ESTÁTICO_FEED</div>
                       <div className="text-[15px] font-black uppercase text-[#050505] mb-2 leading-tight">O sabor da nossa noite, agora no seu almoço.</div>
                       <div className="text-xs text-[#050505]/70 font-medium leading-relaxed">Foto Top View da mealbox. Fundo neutro com selo O Fornão.</div>
                     </div>
                  </div>
              </motion.div>
           </div>
        </div>
    </section>
  );
}

const CRMSection = () => {
   return (
    <section id="lancamento" className="py-32 md:py-48 px-4 md:px-12 w-full max-w-7xl mx-auto border-b-2 border-[#050505]">
       <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={SPRING_HEAVY}
            className="border-l-[8px] border-[#050505] pl-8"
         >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#050505]">Plano CRM</h2>
            <p className="text-[#050505]/70 text-lg max-w-[40ch] font-medium">Monetização da base de &gt;1500 contatos. Foco em margem limpa sem CAC adicional.</p>
         </motion.div>
         <div className="text-right border-2 border-[#050505] p-4 bg-white">
            <div className="text-[10px] uppercase text-[#FF2A2A] font-mono tracking-widest mb-1 font-bold">TARGET</div>
            <div className="text-2xl font-black text-[#050505]">CAC = R$ 0,00</div>
         </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MessageCard 
            day="Dia 1" 
            title="Lançamento" 
            text="Fala, [Nome]! Você já é fã das nossas noites... O Fornão também salva o seu almoço! Lançamos nossas Mealboxes... [Link]"
            imgUrl="https://images.unsplash.com/photo-1508215885820-4585e5610815?auto=format&fit=crop&q=80&w=800"
          />
          <MessageCard 
            day="Dia 3" 
            title="Incentivo Expresso" 
            text="O relógio tá correndo e a fome batendo, [Nome]? Não perca tempo na cozinha. Adicionamos entrega expressa pra você... [Link]"
            imgUrl="https://images.unsplash.com/photo-1617500350786-fb59f816cb1c?auto=format&fit=crop&q=80&w=800"
          />
          <MessageCard 
            day="Quinta/Sexta" 
            title="Fidelização Corporativa" 
            text="Sextou no escritório, [Nome]! Reúna a galera e peçam juntos os pratos executivos do O Fornão. Alta qualidade. [Link]"
            imgUrl="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
          />
       </div>

       <div className="mt-24 pt-16 border-t-[4px] border-[#050505] flex flex-col md:flex-row gap-12">
          <div className="flex-1 bg-white border-2 border-[#050505] p-8">
             <div className="flex items-center gap-3 mb-6 border-b-2 border-[#050505] pb-4">
                <ShieldWarning className="w-8 h-8 text-[#FF2A2A]" weight="fill" />
                <h3 className="text-2xl font-black uppercase text-[#050505]">Riscos Previstos</h3>
             </div>
             <p className="text-[#050505]/80 text-sm font-medium leading-relaxed mb-4">
               Gargalo operacional na cozinha. <br/><strong className="text-[#FF2A2A] font-black uppercase mt-1 block">Solução:</strong> Processos de montagem pré-definidos no pré-preparo.<br/><br/>
               Canibalização de motoboys. <br/><strong className="text-[#FF2A2A] font-black uppercase mt-1 block">Solução:</strong> Rotas otimizadas e raio curto (3-5km).
             </p>
          </div>
          <div className="flex-1 bg-white border-2 border-[#050505] p-8">
             <div className="flex items-center gap-3 mb-6 border-b-2 border-[#050505] pb-4">
                <ChartLineUp className="w-8 h-8 text-[#050505]" weight="bold" />
                <h3 className="text-2xl font-black uppercase text-[#050505]">Escala</h3>
             </div>
             <p className="text-[#050505]/80 text-sm font-medium leading-relaxed">
               Vendas B2B Corporativa<br/>(pacotes empresariais mensais).<br/><br/>
               Aumento de Ticket Extra<br/>(Order bump com bebidas e sobremesas).
             </p>
          </div>
       </div>
    </section>
   );
}

const MessageCard = ({ day, title, text, imgUrl }: {day: string, title: string, text: string, imgUrl?: string}) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="doppelrand group relative"
    >
      <div className="doppelrand-inner p-8 flex flex-col bg-white overflow-hidden relative border-[#050505]">
        {imgUrl && (
          <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity duration-300 grayscale contrast-125 mix-blend-multiply">
            <div className="absolute inset-0 bg-[#EAE8E3]/80 mix-blend-screen z-10" />
            <img src={imgUrl} className="w-full h-full object-cover object-right z-0" />
          </div>
        )}
        <div className="relative z-10 flex items-center justify-between mb-8">
          <div className="px-2 py-0.5 bg-[#050505] text-[10px] uppercase text-white tracking-widest font-bold font-mono">{day}</div>
        </div>
        <h4 className="text-2xl font-black uppercase text-[#050505] mb-4 relative z-10">{title}</h4>
        <div className="text-sm text-[#050505]/80 font-medium leading-relaxed relative z-10 bg-white/80 p-4 border-l-4 border-[#FF2A2A]">
          {text}
        </div>
      </div>
    </motion.div>
  )
}

const Footer = () => (
  <footer className="w-full py-12 text-center text-[#050505] border-t-[8px] border-[#050505] bg-[#EAE8E3]">
    <div className="font-mono text-xs uppercase tracking-[0.2em] font-bold">V4 Company Analysis // O Fornão Lançamento Almoço 2026</div>
    <div className="font-mono text-[10px] uppercase tracking-widest mt-2 text-[#FF2A2A] font-bold">System: Industrial/Telem</div>
  </footer>
)

export default function App() {
  return (
    <main className="w-full max-w-full overflow-x-hidden min-h-[100dvh] bg-[#f4f4f0] selection:bg-[#FF2A2A] selection:text-white">
      <NoiseOverlay />
      <Navigation />
      <Hero />
      <BentoGrid />
      <CreativeSection />
      <CRMSection />
      <Footer />
    </main>
  );
}
