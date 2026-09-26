import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Award, BarChart3, PieChart, ShieldCheck, ChevronRight } from 'lucide-react';
import { GradientText, TypingText, VerticalMarquee } from '../components/animations/SpecialEffects';
import { FloatingDescription } from '../components/animations/FloatingDescription';
import { useContent } from '../context/ContentContext';

export const ValuationPage: React.FC = () => {
  const { data, lang } = useContent();
  const valuationData = (data.advisory?.sections || [])[2] || {
    title: "Corporate Valuation",
    description: "",
    process: []
  };

  return (
    <div className="flex flex-col bg-ivory min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-20 text-center relative overflow-hidden bg-primary">
        <img src="/images/valuation-hero.png" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Valuation Background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1)_0%,transparent_70%)] z-0" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-white"
        >
          <h2 className="text-secondary text-[10px] md:text-[11px] tracking-[0.5em] md:tracking-[0.6em] font-bold mb-8 uppercase italic">ADV-03 / VALUATION SERVICES</h2>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary">
             Corporate Valuation
          </h1>
          <div className="flex flex-col items-center gap-4 px-6 md:px-0">
            <p className="text-secondary/60 text-[11px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] font-light uppercase">{lang === 'ko' ? '기업 가치 평가 및 가치 혁신 솔루션' : 'Corporate Valuation & Value Innovation Solutions'}</p>
            <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-auto" />
            <p className="text-[9px] md:text-[10px] text-white/20 tracking-[0.5em] uppercase mt-4">{lang === 'ko' ? '독립적이고 객관적인 평가 전문성' : 'Independent Integrity in Assessment'}</p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-32"
         >
            {/* Overview Section */}
            <div className="flex flex-col lg:flex-row gap-24 items-start">
               <div className="lg:w-1/2">
                  <div className="flex items-center gap-6 mb-12">
                     <div className="p-5 bg-secondary/10 rounded-2xl">
                        <TrendingUp className="w-10 h-10 text-secondary" />
                     </div>
             <h2 className="text-4xl md:text-5xl font-serif text-primary">Corporate Valuation Overview<br /><span className="text-xl font-light text-secondary">Global Standards</span></h2>
                  </div>
                  <div className="space-y-12">
                     <p className="text-2xl md:text-4xl font-light text-primary italic opacity-95 leading-snug tracking-tight">
                        {lang === 'ko' ? '추정 재무제표 검토 및 정교한 기업 가치 산정' : 'Review of Projected Financial Statements and Sophisticated Enterprise Value Calculation'}
                        <br /><span className="text-lg md:text-xl text-secondary">{lang === 'ko' ? 'Review of Financial Statements' : '(Review of Financial Statements)'}</span>
                     </p>
                     
                      <div className="lg:w-full border-l-2 border-secondary/20 pl-6 md:pl-10 py-4 flex flex-col gap-8 mb-12">
                         <div className="flex flex-col gap-8">
                             <div className="h-[450px] md:h-[600px] overflow-hidden relative">
                               <VerticalMarquee speed={80} className="h-full">
                                  <div className="flex flex-col gap-20 pb-20">
                                     <FloatingDescription 
                                       ko="기업가치평가는 M&A 거래의 출발점이자 최종 결정자입니다. 저희는 글로벌 스탠다드 방법론과 산업별 심층 분석을 결합하여, 매수자에게는 적정 지불 한계를, 매도자에게는 가치 극대화 근거를 제공합니다."
                                       en="Corporate valuation is both the starting point and the final determinant of M&A transactions. By combining global standard methodologies and in-depth industry analysis, we provide the right payment limit for buyers and the basis for maximizing value for sellers."
                                       className="text-primary/80 text-lg md:text-xl font-light leading-relaxed border-l-2 border-secondary/50 pl-6"
                                     />
                                     <div className="space-y-12">
                                       <FloatingDescription 
                                         ko="현대 가치평가 이론에서 가장 신뢰받는 현금흐름할인법(DCF)을 핵심 축으로 삼으며, 시장가치 방식과 자산가치 방식 등 다각도의 교차 검증을 통해 평가의 완결성을 확보합니다."
                                         en="Using DCF as the core axis, we ensure valuation completeness through cross-validation of market and asset value methods."
                                         className="text-primary/70 border-l-2 border-secondary pl-6"
                                       />
                                       <FloatingDescription 
                                         ko="단순한 재무제표의 숫자를 넘어 매크로 경제 지표, 산업 내 밸류체인 지위, 무형의 기술력과 경영권 프리미엄까지 종합적으로 수치화하여 공신력 있는 리포트를 제공합니다."
                                         en="Beyond financial statements, we quantify macro indicators, value chain position, and intangible technologies to provide authoritative reports."
                                         className="text-primary/60 border-l-2 border-secondary pl-6"
                                       />
                                     </div>
                                  </div>
                               </VerticalMarquee>
                            </div>
                         </div>
                      </div>
                     
                     <p className="text-xs text-secondary tracking-[0.3em] font-bold uppercase mt-8">
                        Independent, Objective, and Rigorous Valuation Expertise.
                     </p>
                  </div>
               </div>
               <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="p-12 bg-white/40 backdrop-blur-sm border border-secondary/10 rounded-2xl shadow-xl">
                     <h4 className="text-secondary tracking-[0.3em] text-[10px] font-bold mb-10 uppercase italic border-b border-primary/5 pb-4">{lang === 'ko' ? '전문 역량' : 'Our Specialized Expertise'}</h4>
                     <ul className="space-y-10">
                        {(valuationData.expertise || []).map((exp, i) => (
                           <li key={i} className="flex items-start gap-5">
                              {i === 0 ? <ShieldCheck className="w-7 h-7 text-secondary shrink-0" /> : i === 1 ? <PieChart className="w-7 h-7 text-secondary shrink-0" /> : <BarChart3 className="w-7 h-7 text-secondary shrink-0" />}
                              <div>
                                 <strong className="text-primary block mb-2 text-xl font-serif">{exp.title}</strong>
                                 <span className="text-sm text-primary/50 leading-relaxed font-light">{exp.desc}</span>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
            
            <div className="h-[1px] w-full bg-primary/5" />

            {/* Process Section */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               viewport={{ once: true }}
            >
               <div className="flex items-center gap-4 mb-16">
                  <Award className="w-10 h-10 text-secondary" />
                  <h2 className="text-4xl font-serif text-primary">{lang === 'ko' ? '가치 평가 방법론' : 'Valuation Methodology'}</h2>
               </div>
               <div className="flex flex-col gap-8">
                  {(valuationData.process || []).map((step, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
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
                              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px]">{lang === 'ko' ? '단계' : 'Phase'}</span>
                           </div>
                           <h5 className="text-3xl font-serif text-primary group-hover:text-secondary transition-colors tracking-tight leading-tight">{step.title || step.step}</h5>
                        </div>
                        <div className="md:w-2/3 relative z-10">
                           <p className="text-lg text-primary/80 leading-relaxed font-normal break-keep">{step.content}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
            
            {/* Process Flow Section */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               viewport={{ once: true }}
               className="pt-16 border-t border-primary/5"
            >
               <div className="flex flex-col items-center text-center gap-4 mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif text-primary">{lang === 'ko' ? '프로세스 플로우' : 'Process Flow'}</h2>
                  <p className="text-secondary tracking-[0.3em] text-[10px] uppercase font-bold">{lang === 'ko' ? '가치 평가 수행 단계' : 'Valuation Execution Stages'}</p>
               </div>
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-secondary/20 z-0"></div>
                  {(valuationData.processFlow || []).map((stepItem, i) => (
                     <div key={i} className="flex flex-col items-center text-center w-full md:w-auto relative z-10">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-secondary/30 flex items-center justify-center mb-6 shadow-xl relative">
                           <span className="text-xl font-serif text-primary italic">0{i + 1}</span>
                           {i < (valuationData.processFlow?.length || 0) - 1 && (
                              <div className="absolute top-1/2 -right-4 translate-x-full -translate-y-1/2 text-secondary/30 hidden md:flex items-center">
                                 <ChevronRight className="w-6 h-6" />
                              </div>
                           )}
                        </div>
                        <h4 className="text-xl font-bold font-noto text-primary mb-2 whitespace-nowrap">{stepItem.step}</h4>
                        <p className="text-sm text-secondary/80 font-light whitespace-nowrap">{stepItem.title}</p>
                     </div>
                  ))}
               </div>
            </motion.div>
         </motion.div>
      </section>
    </div>
  );
};
