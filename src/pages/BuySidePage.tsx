import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { GradientText, TypingText } from '../components/animations/SpecialEffects';
import { FloatingDescription } from '../components/animations/FloatingDescription';
import { BarChart3, TrendingUp, Search, FileText } from 'lucide-react';
import { VerticalMarquee } from '../components/animations/SpecialEffects';

export const BuySidePage: React.FC = () => {
  const { data, lang } = useContent();
  const item = data.advisory?.sections?.[1];

  if (!item) return null;

  return (
    <div className="flex flex-col bg-ivory min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-20 text-center relative overflow-hidden bg-primary">
        <img src="/images/buyside-hero.png" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Buy-Side Background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1)_0%,transparent_70%)] z-0" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-white"
        >
          <h2 className="text-secondary text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.6em] font-bold mb-8 uppercase italic">ADV-02 / BUY-SIDE ADVISORY</h2>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 leading-tight">
             <GradientText>Buy-Side Advisory</GradientText>
          </h1>
          <div className="flex flex-col items-center gap-4 px-6 md:px-0">
            <p className="text-secondary/60 text-[11px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light uppercase">{lang === 'ko' ? '매수 자문 및 전방위적 인수 전략' : 'Buy-side Advisory & Strategic Acquisition'}</p>
            <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-auto" />
            <p className="text-[9px] md:text-[10px] text-white/20 tracking-[0.5em] uppercase mt-4">{lang === 'ko' ? '정밀한 매수를 통한 시너지 창출' : 'Unlocking Synergies through Precision Buying'}</p>
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
                             src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop"
                             alt={item.title}
                             className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-all duration-1000"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                           <div className="absolute bottom-10 left-10 text-white">
                              <div className="flex items-center gap-3 mb-3">
                                 <Search className="w-5 h-5 text-secondary" />
                                 <span className="text-secondary text-[11px] tracking-[0.4em] font-bold uppercase italic">{lang === 'ko' ? '기업 인수 자문' : 'BUY-SIDE ADVISORY'}</span>
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
                                       ko="대상 기업에 대한 철저한 펀더멘털 분석과 시너지 정량화를 통해 성공적인 인수를 이끕니다. 타겟 탐색(Deal Sourcing)부터 치밀한 재무·세무·법률 실사(Due Diligence), 정교한 밸류에이션(Valuation), 복합 파이낸싱 조달(Acquisition Financing), 그리고 사후 통합(PMI)에 이르기까지 무결점의 엔드투엔드(End-to-End) 솔루션을 제공하여 인수 후 기업 가치 증대를 실현합니다."
                                       en="We lead successful acquisitions through thorough fundamental analysis and synergy quantification. We provide flawless end-to-end solutions, from deal sourcing and rigorous financial, tax, and legal due diligence to sophisticated valuation, complex acquisition financing, and post-merger integration (PMI), realizing significant post-acquisition value enhancement."
                                       className="text-black opacity-90 text-lg md:text-xl font-light leading-relaxed border-l-2 border-secondary/50 pl-6"
                                     />
                                     <div className="space-y-12">
                                       <FloatingDescription 
                                         ko="인수 주체의 핵심 역량과 결합하여 파괴적 시너지를 창출할 수 있는 타겟을 발굴합니다."
                                         en="Identifying targets capable of creating disruptive synergies by combining with core parent competencies."
                                         className="text-black border-l-2 border-secondary pl-6"
                                       />
                                       <FloatingDescription 
                                         ko="정밀한 밸류에이션 모델링을 통해 고평가 리스크를 원천적으로 차단합니다."
                                         en="Fundamentally blocking overvaluation risks through precision valuation modeling."
                                         className="text-black border-l-2 border-secondary pl-6"
                                       />
                                       <FloatingDescription 
                                         ko="치밀한 실사와 PMI 전략 수립을 통해 성공적인 통합과 가치 증대를 실현합니다."
                                         en="Realizing successful integration and value creation via meticulous due diligence and PMI planning."
                                         className="text-black border-l-2 border-secondary pl-6"
                                       />
                                     </div>
                                  </div>
                               </VerticalMarquee>
                             </div>

                             <div className="flex items-center gap-6 mt-12">
                                <div className="h-[1px] w-16 bg-secondary/50" />
                                <p className="text-[10px] text-secondary tracking-[0.4em] uppercase font-bold">
                                   Global Acquisition Strategy
                                </p>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>


                  {/* Bottom section: Process Steps (Vertical Array) */}
                  <div className="flex flex-col gap-8 mt-12">
                    <h4 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 border-b border-primary/10 pb-4">{item.processTitle || (lang === 'ko' ? '인수 수명 주기' : 'Acquisition Lifecycle')}</h4>
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
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"
                          animate={{ x: ['-200%', '200%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
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
               <p className="text-secondary tracking-[0.3em] text-[10px] uppercase font-bold">{lang === 'ko' ? '매수 자문 단계' : 'Buy-Side Advisory Stages'}</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
               {(item.processFlow || []).map((stepItem, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-shadow relative">
                     <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center mb-6 text-lg font-serif italic border border-secondary/20">
                        {i + 1}
                     </div>
                     <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-tighter">{stepItem.step}</h4>
                     <p className="text-xs text-secondary font-medium">{stepItem.title}</p>
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
