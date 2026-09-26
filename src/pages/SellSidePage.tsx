import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { GradientText, TypingText } from '../components/animations/SpecialEffects';
import { FloatingDescription } from '../components/animations/FloatingDescription';
import { BarChart3, TrendingUp, Search, FileText } from 'lucide-react';
import { VerticalMarquee } from '../components/animations/SpecialEffects';

export const SellSidePage: React.FC = () => {
  const { data, lang } = useContent();
  const item = data.advisory?.sections?.[0];

  if (!item) return null;

  return (
    <div className="flex flex-col bg-ivory min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-20 text-center relative overflow-hidden bg-primary">
        <img src="/images/sellside-hero.png" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Sell-Side Background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1)_0%,transparent_70%)] z-0" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <h2 className="text-secondary text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.6em] font-bold mb-8 uppercase italic">ADV-01 / SELL-SIDE ADVISORY</h2>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary">
             Sell-Side Advisory
          </h1>
          <div className="flex flex-col items-center gap-4 px-6 md:px-0">
            <p className="text-secondary/60 text-[11px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light uppercase">{lang === 'ko' ? '매각 자문 및 최적의 엑시트 전략' : 'Sell-side Advisory & Optimal Exit Strategy'}</p>
            <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-auto" />
            <p className="text-[9px] md:text-[10px] text-white/20 tracking-[0.5em] uppercase mt-4">{lang === 'ko' ? '전략적 엑시트를 통한 가치 극대화' : 'Maximizing Value through Strategic Exit'}</p>
          </div>
        </motion.div>
      </section>

      {/* Advisory Sections */}
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 gap-52">
            <motion.section 
               id={item.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="relative scroll-mt-32"
            >
               <div className="flex flex-col gap-24">
                  {/* Top section: Title, Image, Description */}
                  <div className="flex flex-col lg:flex-row gap-24 items-start">
                     <div className="lg:w-1/2 relative lg:sticky lg:top-32">
                        <div className="absolute -inset-4 border border-secondary/10 rounded-2xl z-0" />
                        <div className="relative z-10 group overflow-hidden rounded-xl border border-primary/5 aspect-[16/10] bg-white shadow-2xl">
                           <motion.img 
                             src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop"
                             alt={item.title}
                             className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-all duration-1000"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                           <div className="absolute bottom-10 left-10 text-white">
                              <div className="flex items-center gap-3 mb-3">
                                 <FileText className="w-5 h-5 text-secondary" />
                                 <span className="text-secondary text-[11px] tracking-[0.4em] font-bold uppercase italic">{lang === 'ko' ? '기업 매각 자문' : 'SELL-SIDE ADVISORY'}</span>
                              </div>
                              <h3 className="text-4xl md:text-5xl font-serif">{item.title}</h3>
                           </div>
                        </div>
                     </div>
                     <div className="lg:w-1/2 border-l-2 border-secondary/20 pl-6 md:pl-10 lg:pl-20 py-4 flex flex-col gap-8 mb-12">
                        <div className="flex flex-col gap-8">
                           <div className="flex flex-col gap-8">
                             <div className="h-[450px] md:h-[600px] overflow-hidden relative">
                               <VerticalMarquee speed={80} className="h-full">
                                  <div className="flex flex-col gap-20 pb-20">
                                     <FloatingDescription 
                                       ko="제니안스 그룹의 기업 매각 자문은 단순한 엑시트(Exit)를 넘어, 기업의 본질적 내재 가치(Intrinsic Value)를 입체적으로 마사지하고 재정의하는 고도의 금융 공학적 프로세스입니다. 당사의 M&A 스페셜리스트들은 잠재적 매수자의 전략적 니즈를 꿰뚫는 맞춤형 투자 모델링(Tailored Investment Modeling)을 통해 매도인의 경제적 효익을 극대화하고 거래의 종결성(Certainty of Closing)을 보장합니다."
                                       en="Xenians Group's sell-side advisory goes beyond simple exits; it is a high-level financial engineering process that multi-dimensionally refines and redefines a company's intrinsic value. Our M&A specialists maximize the seller's economic benefits and ensure transaction certainty through tailored investment modeling that precisely addresses the strategic needs of potential buyers."
                                       className="text-black opacity-90 text-lg md:text-xl font-light leading-relaxed border-l-2 border-secondary/50 pl-6"
                                     />
                                     <div className="space-y-12">
                                       <FloatingDescription 
                                         ko="기업의 잠재된 가능성을 정교한 딜 구조로 재해석하여 매도인의 가치를 극대화합니다."
                                         en="Reinterpreting corporate potential into sophisticated deal structures to maximize seller value."
                                         className="text-black border-l-2 border-secondary pl-6"
                                       />
                                       <FloatingDescription 
                                         ko="엄격한 기밀 유지와 전략적 매수자 발굴을 통해 거래의 종결성을 보장합니다."
                                         en="Ensuring transaction certainty through strict confidentiality and strategic buyer sourcing."
                                         className="text-black border-l-2 border-secondary pl-6"
                                       />
                                       <FloatingDescription 
                                         ko="단순한 자문을 넘어 기업의 미래 가치 성장 모멘텀을 설계합니다."
                                         en="Designing future growth momentum beyond standard financial advisory."
                                         className="text-black border-l-2 border-secondary pl-6"
                                       />
                                     </div>
                                  </div>
                               </VerticalMarquee>
                             </div>

                             <div className="flex items-center gap-6 mt-12">
                                <div className="h-[1px] w-16 bg-secondary/50" />
                                <p className="text-[10px] text-secondary tracking-[0.4em] uppercase font-bold">
                                   Premium Advisory Excellence
                                </p>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>


                  {/* Bottom section: Process Steps (Vertical Array) */}
                  <div className="flex flex-col gap-8 mt-12">
                    <h4 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 border-b border-primary/10 pb-4">{item.processTitle || (lang === 'ko' ? '거래 수명 주기' : 'Transactional Lifecycle')}</h4>
                    {(item.process || []).map((step, i) => (
                      <motion.div
                         key={i}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: i * 0.1 }}
                         viewport={{ once: true }}
                         className="flex flex-col md:flex-row gap-12 p-12 lg:p-16 border border-primary/5 bg-secondary/5 rounded-2xl hover:border-secondary/50 hover:shadow-xl transition-all group relative overflow-hidden items-center"
                      >
                         <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                         />
                         <div className="md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary/5 pb-8 md:pb-0 md:pr-12 shrink-0 relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                               <span className="text-6xl text-primary/10 font-serif italic">0{i + 1}</span>
                               <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px]">{lang === 'ko' ? '단계' : 'PHASE'}</span>
                            </div>
                            <h5 className="text-3xl font-serif text-primary group-hover:text-secondary transition-colors tracking-tight leading-tight">{step.title || step.step}</h5>
                         </div>
                         <div className="md:w-2/3 relative z-10">
                            <p className="text-lg text-primary/80 leading-relaxed font-normal break-keep">{step.content}</p>
                         </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </motion.section>
        </div>
      </div>

      {/* Process Flow Section */}
      <section className="py-32 px-6 md:px-20 bg-ivory/50 border-t border-primary/5">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4 mb-20">
               <h2 className="text-4xl md:text-5xl font-serif text-primary">{lang === 'ko' ? '프로세스 플로우' : 'Process Flow'}</h2>
               <p className="text-secondary tracking-[0.3em] text-[10px] uppercase font-bold">{lang === 'ko' ? '매각 자문 단계' : 'Sell-Side Advisory Stages'}</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
               {(item.processFlow || []).map((stepItem, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-shadow relative">
                     <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-6 text-lg font-serif italic border border-secondary/20">
                        {i + 1}
                     </div>
                     <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-tighter">{stepItem.step}</h4>
                     <p className="text-xs text-secondary font-medium">{stepItem.title}</p>
                     
                     {i !== (item.processFlow?.length || 0) - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-secondary/20 z-10">
                           {/* Arrow or dot divider could go here */}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Methodology Section */}
      <motion.section 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
         viewport={{ once: true }}
         className="py-32 px-6 md:px-12 bg-white text-primary"
      >
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="flex-1">
               <h2 className="text-xs tracking-[0.6em] font-bold mb-6 text-primary/40 uppercase">{data.advisory.methodology.subtitle}</h2>
               <h3 className="text-4xl md:text-6xl font-serif mb-12">{data.advisory.methodology.title}</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {(data.advisory?.methodology?.items || []).map((m, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="shrink-0 p-3 bg-primary/5 text-primary/40 rounded-full">
                           {m.title.includes('Valuation') || m.title.includes('DCF') || m.title.includes('Multiple') ? <TrendingUp /> : m.title.includes('Due') ? <Search /> : <FileText />}
                        </div>
                        <div>
                           <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">{m.title}</h4>
                           <p className="text-xs text-primary/60 leading-relaxed">{m.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex-1 relative p-12 bg-primary/5 rounded-sm">
               <div className="absolute top-0 right-0 p-8">
                  <BarChart3 className="w-12 h-12 text-primary/10" />
               </div>
               <p className="text-lg italic font-serif leading-loose text-primary/80 relative z-10">
                  "{data.advisory.methodology.quote}"
               </p>
               <div className="mt-8 flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-primary" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Research Team Insight</span>
               </div>
            </div>
         </div>
      </motion.section>
    </div>
  );
};
