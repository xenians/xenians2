import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { GradientText, TypingText, VerticalMarquee } from '../components/animations/SpecialEffects';
import { FloatingDescription } from '../components/animations/FloatingDescription';
import { Landmark, ArrowUpRight, Shield, Layers, TrendingUp, Clock, ShieldAlert, Users, LayoutDashboard, FileSearch, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

export const PMPage: React.FC = () => {
  const { lang } = useContent();

  return (
    <div className="flex flex-col bg-ivory min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-20 text-center relative overflow-hidden bg-primary">
        <img src="/images/pm-hero.png" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="PM Background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1)_0%,transparent_70%)] z-0" />
        <div className="relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 leading-tight"
          >
             <GradientText>Project Management & Planning</GradientText>
          </motion.h1>
          <div className="flex flex-col items-center gap-4 px-6 md:px-0">
            <p className="text-secondary/60 text-[10px] md:text-sm tracking-[0.4em] font-light uppercase">{lang === 'ko' ? '딜의 속도와 품질을 결정하는 정교한 거버넌스' : 'Sophisticated Governance for Deal Speed and Quality'}</p>
            <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-auto" />
            <p className="text-[9px] md:text-[10px] text-white/20 tracking-[0.5em] uppercase mt-4">{lang === 'ko' ? '전략적 자문의 정교한 역동성' : 'Precision Dynamics in Strategic Advisory'}</p>
          </div>
        </div>
      </section>

      {/* Hero Content */}
      <section className="py-32 px-6 md:px-12 bg-royal relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
         <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="flex flex-col lg:flex-row gap-24 items-start mb-32 text-white">
               <div className="lg:w-1/2">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-serif mb-12 leading-tight text-white"
                  >
                     <GradientText>Building the <br />Architecture of Capital.</GradientText>
                  </motion.h3>

                  <div className="mb-12 space-y-6 h-[280px] md:h-[250px] overflow-hidden border-l-2 border-secondary/20 pl-6 md:pl-10 py-4">
                     <VerticalMarquee speed={40}>
                        <div className="flex flex-col gap-8">
                           <div className="flex flex-col gap-2">
                               <div className="text-secondary tracking-[0.6em] uppercase text-[10px] font-bold italic">Strategic Planning</div>
                               <div className="text-white font-serif text-xl md:text-2xl tracking-wide">{lang === 'ko' ? '사업 기획 및 자율적 자산 구조 최적화' : 'Business Planning & Asset Structure Optimization'} <br /><span className="text-sm text-white/50">(Strategic Business Planning)</span></div>
                           </div>
                           <div className="flex flex-col gap-2">
                               <div className="text-secondary tracking-[0.6em] uppercase text-[10px] font-bold italic">Risk Architecture</div>
                               <div className="text-white font-serif text-xl md:text-2xl tracking-wide">{lang === 'ko' ? '통합 타당성 분석 및 리스크 헤징' : 'Integrated Feasibility Analysis & Risk Hedging'} <br /><span className="text-sm text-white/50">(Comprehensive Feasibility & Risk Hedging)</span></div>
                           </div>
                           <div className="space-y-4">
                              <p className="text-secondary text-xl md:text-2xl leading-relaxed font-noto font-bold">
                                 {lang === 'ko' ? '딜의 속도와 품질을 동시에 잡습니다.' : 'Accelerating Deal Speed While Ensuring Uncompromising Quality.'} <br />
                                 {lang === 'ko' ? '전략부터 클로징까지, 하나의 팀이 끝냅니다.' : 'One Team, From Visionary Strategy to Final Closing.'}
                              </p>
                              <p className="text-white/80 text-xs md:text-sm leading-relaxed font-noto max-w-xl opacity-80">
                                 {lang === 'ko' ? '프로젝트는 수십 개의 워크스트림이 동시에 진행되는 고강도 협업입니다. 저희 PM 파트는 전략 수립 단계부터 딜 클로징 이후 PMI까지, 모든 이해관계자를 하나의 거버넌스 체계 아래 정렬하여 프로젝트를 예측 가능하게 완수합니다.' : 'M&A projects involve intense collaboration with dozens of simultaneous workstreams. Our PM part aligns all stakeholders under a single governance framework, from strategy to post-closing PMI, ensuring predictable project completion.'}
                              </p>
                           </div>
                        </div>
                     </VerticalMarquee>
                  </div>

                  <div className="grid grid-cols-2 gap-12 pt-8 border-t border-primary/5">
                     <div className="group">
                        <p className="text-4xl font-serif text-secondary mb-2 group-hover:scale-105 transition-transform origin-left">1.5T+</p>
                        <p className="text-[10px] tracking-widest text-primary/40 font-bold uppercase italic">Asset Management</p>
                     </div>
                     <div className="group">
                        <p className="text-4xl font-serif text-secondary mb-2 group-hover:scale-105 transition-transform origin-left">98%</p>
                        <p className="text-[10px] tracking-widest text-primary/40 font-bold uppercase italic">Exit Efficiency</p>
                     </div>
                  </div>
               </div>

               <div className="lg:w-1/2 grid grid-cols-1 gap-8">
                  {[
                     { icon: <Shield className="w-8 h-8" />, title: "Risk Mitigation", desc: lang === 'ko' ? "시공사 책임준공 확약 및 미분양 담보 대출 등을 통한 다층적 리스크 방어 네트워크 구축" : "Building a multi-layered risk defense network through contractor completion guarantees and loan facilities." },
                     { icon: <Layers className="w-8 h-8" />, title: "Capital Stack Design", desc: lang === 'ko' ? "Equity, Mezzanine, Senior Loan의 고도화된 결합을 통한 최적의 조달 금리 실현" : "Achieving optimal procurement rates through advanced combination of Equity, Mezzanine, and Senior Loans." },
                     { icon: <TrendingUp className="w-8 h-8" />, title: "ROI Maximization", desc: lang === 'ko' ? "철저한 수지 분석과 공정 관리를 통해 자본 대비 최상의 경제적 효익을 제공" : "Providing the best economic benefits against capital through thorough balance analysis and progress management." }
                  ].map((item, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-12 border border-white/10 bg-white shadow-2xl hover:border-secondary/30 transition-all group rounded-2xl"
                     >
                        <div className="text-secondary mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                        <h4 className="text-2xl font-serif mb-4 text-primary">{item.title}</h4>
                        <p className="text-sm text-primary leading-relaxed font-normal font-noto">{item.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>

         {/* Deal Lifecycle Section */}
         <div className="pt-32 bg-stone-100 rounded-3xl p-12 -mx-12">
            <div className="text-center mb-16">
               <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">Deal Lifecycle Management</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-primary animate-deep-blue tracking-tight">{lang === 'ko' ? '딜 전체 라이프사이클 관리' : 'Full Deal Lifecycle Management'}</h3>
            </div>

            <div className="max-w-6xl mx-auto">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
                  {[
                     { step: lang === 'ko' ? "전략 수립" : "Strategy", title: "Strategy", icon: <TrendingUp className="w-5 h-5" /> },
                     { step: lang === 'ko' ? "대상 선정" : "Targeting", title: "Targeting", icon: <Users className="w-5 h-5" /> },
                     { step: lang === 'ko' ? "협상 구조화" : "Negotiation", title: "Negotiation", icon: <Layers className="w-5 h-5" /> },
                     { step: lang === 'ko' ? "Due Diligence" : "DD", icon: <FileSearch className="w-5 h-5" /> },
                     { step: lang === 'ko' ? "계약 클로징" : "Closing", icon: <CheckCircle2 className="w-5 h-5" /> },
                     { step: lang === 'ko' ? "PMI 통합" : "PMI", icon: <Zap className="w-5 h-5" /> }
                  ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center bg-white p-8 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        <span className="text-[10px] text-secondary/40 font-bold mb-2">0{i+1}</span>
                        <h4 className="text-sm font-bold font-noto text-primary mb-1 text-center whitespace-nowrap">{item.step}</h4>
                        <p className="text-[10px] text-secondary tracking-widest uppercase">{item.title}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         
         {/* Workstream Management Section */}
         <div className="mt-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <div className="md:w-1/2">
                  <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">Operational Excellence</h2>
                  <h3 className="text-4xl md:text-5xl font-serif text-white animate-deep-blue">{lang === 'ko' ? '워크스트림 관리 체계' : 'Workstream Management Framework'}</h3>
               </div>
               <div className="md:w-1/3">
                  <p className="text-white/70 text-sm leading-relaxed border-l border-secondary/30 pl-6 italic">
                     "복합적인 이해관계를 하나의 거버넌스로 통합하여 프로젝트의 예측 가능성을 담보합니다."
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  {
                     title: lang === 'ko' ? "통합 프로젝트 컨트롤타워" : "Integrated Project Control Tower",
                     items: lang === 'ko' ? [
                        "단일 Issue Log & Action Item 트래킹",
                        "법률·회계·재무·전략 워크스트림 한 곳에서 관리"
                     ] : [
                        "Single Issue Log & Action Item Tracking",
                        "Legal, accounting, financial, and strategic workstreams managed in one place"
                     ]
                  },
                  {
                     title: lang === 'ko' ? "주간 Steering Committee 운영" : "Weekly Steering Committee Operation",
                     items: lang === 'ko' ? [
                        "의사결정 병목 즉시 해소, 에스컬레이션 체계 명문화",
                        "실시간 프로젝트 대시보드 제공 (투명성 확보)"
                     ] : [
                        "Immediate resolution of decision-making bottlenecks, formalized escalation system",
                        "Real-time project dashboard provided (Ensuring transparency)"
                     ]
                  },
                  {
                     title: lang === 'ko' ? "실시간 프로젝트 대시보드 제공" : "Real-time Project Dashboard",
                     items: lang === 'ko' ? [
                        "클라이언트가 언제든 현황 파악 가능한 투명성 확보",
                        "클라우드 기반 협업 툴을 통한 실시간 데이터 공유"
                     ] : [
                        "Ensuring transparency for clients to grasp status at any time",
                        "Real-time data sharing through cloud-based collaboration tools"
                     ]
                  },
                  {
                     title: lang === 'ko' ? "멀티 이해관계자 조율" : "Multi-Stakeholder Coordination",
                     items: lang === 'ko' ? [
                        "매수자·매도자·법무법인·회계법인 동시 조율",
                        "각 주체별 역할과 마감 기한 명확하게 배분"
                     ] : [
                        "Simultaneous coordination of buyer, seller, law firm, and accounting firm",
                        "Clear allocation of roles and deadlines for each entity"
                     ]
                  },
                  {
                     title: lang === 'ko' ? "VDR 구성 및 Q&A 관리" : "VDR Configuration & Q&A Management",
                     items: lang === 'ko' ? [
                        "정보 요청 우선순위화, 답변 지연 없는 DD 진행",
                        "보안 레이어 기반의 기밀 데이터 관리"
                     ] : [
                        "Prioritization of information requests, DD progress without response delay",
                        "Confidential data management based on security layers"
                     ]
                  },
                  {
                     title: lang === 'ko' ? "정기 경영진 브리핑 패키지 작성" : "Regular Executive Briefing Package",
                     items: lang === 'ko' ? [
                        "CEO·이사회가 최소 시간으로 최대 정보를 얻는 구조",
                        "핵심 리스크와 의사결정 필요 사항 중심 요약"
                     ] : [
                        "Structure where CEO and Board get maximum information in minimum time",
                        "Summaries centered on core risks and decision-making requirements"
                     ]
                  }
               ].map((card, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-secondary/50 transition-all">
                     <h4 className="text-xl font-serif text-secondary mb-6">{card.title}</h4>
                     <ul className="space-y-4">
                        {card.items.map((item, j) => (
                           <li key={j} className="flex gap-3 text-sm text-white/80 font-noto">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Risk Management Section */}
      <section className="py-48 px-6 md:px-12 bg-ivory text-primary overflow-hidden relative">
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
               <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">Security & Stability</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-primary animate-deep-blue tracking-tight">{lang === 'ko' ? '리스크 관리 프레임워크' : 'Risk Management Framework'}</h3>
               <p className="text-secondary/60 text-sm tracking-[0.4em] font-light uppercase mt-4">Risk Management Framework</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {[
                  {
                     title: lang === 'ko' ? "일정 리스크" : "Schedule Risk",
                     subtitle: "Time Control",
                     content: lang === 'ko' 
                        ? "크리티컬 패스(Critical Path) 실시간 모니터링을 통해 지연 징후를 3일 내 감지합니다. Due Diligence 지연이 딜 파기로 이어지는 실패 요인을 원천 차단합니다."
                        : "Detect delay signs within 3 days through real-time Critical Path monitoring. Fundamentally block failure factors that lead to deal termination due to DD delays.",
                     icon: <Clock className="w-10 h-10" />
                  },
                  {
                     title: lang === 'ko' ? "정보 리스크" : "Information Risk",
                     subtitle: "Information Security",
                     content: lang === 'ko'
                        ? "민감 정보 접근 권한의 단계별 통제와 NDA 위반 추칙 체계를 갖춥니다. VDR 보안 레이어 이중 운영으로 정보 유출에 의한 딜 붕괴를 방지합니다."
                        : "Maintain step-by-step control of sensitive information access and NDA violation tracking systems. Prevent deal collapse due to information leaks with dual-layer VDR security.",
                     icon: <ShieldAlert className="w-10 h-10" />
                  },
                  {
                     title: lang === 'ko' ? "관계 리스크" : "Relationship Risk",
                     subtitle: "Relationship Mediation",
                     content: lang === 'ko'
                        ? "협상 교착 상태 시 중립적 조정자(Neutral Mediator) 역할을 수행합니다. 양측 팀 간 감정적 대립이 딜 로직을 훼손하지 않도록 완벽한 커퓨니케이션 완충 역할을 합니다."
                        : "Serve as a Neutral Mediator during negotiation deadlocks. Act as a perfect communication buffer to prevent emotional confrontation between teams from damaging deal logic.",
                     icon: <Users className="w-10 h-10" />
                  },
                  {
                     title: lang === 'ko' ? "규제 리스크" : "Regulatory Risk",
                     subtitle: "Regulatory Compliance",
                     content: lang === 'ko'
                        ? "기업결합 신고, 공정거래법, 외투법 등 규제 타임라인을 마스터 플랜에 선제 반영합니다. 규제 당국과의 소통을 내재화하여 예기치 못한 클로징 지연을 방지합니다."
                        : "Proactively reflect regulatory timelines (Business Combination filing, Fair Trade Act, etc.) into master plans. Internalize communication with regulatory authorities to prevent unexpected closing delays.",
                     icon: <Landmark className="w-10 h-10" />
                  }
               ].map((risk, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="bg-white p-12 rounded-[2rem] border border-secondary/10 shadow-xl flex flex-col items-start hover:bg-primary hover:text-white transition-all group"
                  >
                     <div className="text-secondary mb-8 group-hover:scale-110 transition-transform">{risk.icon}</div>
                     <div className="mb-4">
                        <span className="text-[10px] text-secondary font-bold tracking-[0.4em] uppercase italic">{risk.subtitle}</span>
                        <h4 className="text-3xl font-serif mt-2">{risk.title}</h4>
                     </div>
                     <p className="text-lg leading-relaxed font-noto text-primary/70 group-hover:text-white/80">{risk.content}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Professional Detail Section */}
      <section className="py-48 px-6 md:px-12 bg-white text-primary overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_right,rgba(212,175,55,0.02)_0%,transparent_70%)]" />
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-32 items-center">
               <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                     <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">Advanced PM & Planning Solutions</h2>
                     <h3 className="text-4xl md:text-5xl font-serif mb-12 leading-tight text-primary animate-deep-blue tracking-tight">{lang === 'ko' ? '사업 기획 및 건설관리 (Planning & CM)' : 'Planning & Construction Management'}</h3>
                     <div className="lg:w-full border-l-2 border-secondary/20 pl-10 py-4 flex flex-col gap-8 mb-12">
                        <div className="flex flex-col gap-8 text-primary">
                           <FloatingDescription 
                              ko="제니안스 그룹은 사업 초기 기획 단계부터 정교한 타당성 검토와 원가 공학을 결합하여 자산의 상징성을 구축합니다."
                              en="Structuring asset symbolism from inception through meticulous planning and cost engineering."
                              className="text-primary/80"
                           />
                           <FloatingDescription 
                              ko="건설 관리와 금융 자문의 유기적 결합으로 개발 사업의 복합적인 변수를 통제하고 자본 효율성을 극대화합니다."
                              en="Controlling kompleks variables and maximizing capital efficiency through organic fusion of CM and financial advisory."
                              className="text-primary/70"
                           />
                        </div>
                     </div>
                     <div className="space-y-10">
                        <div className="p-10 border border-primary/5 rounded-2xl hover:border-secondary/30 transition-all group bg-ivory/30">
                           <h4 className="text-2xl font-serif mb-4 group-hover:text-secondary transition-colors">Strategic Planning <span className="text-sm font-sans text-secondary block">{lang === 'ko' ? '전략적 사업 기획' : 'Strategic Business Planning'}</span></h4>
                           <p className="text-base text-primary/80 font-medium leading-relaxed mb-4">
                              {lang === 'ko' ? '시장 트렌드 분석과 자본 효율성을 고려한 최적의 마스터플랜을 수립하며, 사업의 실현 가능성을 극대화합니다.' : 'We establish optimal master plans considering market trends and capital efficiency, maximizing project feasibility.'}
                           </p>
                           <p className="text-[10px] text-primary/50 uppercase tracking-[0.4em] font-bold">Establishing optimal master plans considering market trends and capital efficiency.</p>
                        </div>
                        <div className="p-10 border border-primary/5 rounded-2xl hover:border-secondary/30 transition-all group bg-ivory/30">
                           <h4 className="text-2xl font-serif mb-4 group-hover:text-secondary transition-colors">Risk-Adjusted Execution <span className="text-sm font-sans text-secondary block">{lang === 'ko' ? '리스크 기반 실행' : 'Risk-Based Execution'}</span></h4>
                           <p className="text-base text-primary/80 font-medium leading-relaxed mb-4">
                              {lang === 'ko' ? '건설 현장의 실시간 공정 모니터링 시스템을 통해 준공 지연 및 예산 초과 리스크를 선제적으로 배제합니다.' : 'We proactively eliminate risks of completion delays and budget overruns through real-time progress monitoring systems at construction sites.'}
                           </p>
                           <p className="text-[10px] text-primary/50 uppercase tracking-[0.4em] font-bold">Proactive site progress monitoring to prevent budget overruns.</p>
                        </div>
                     </div>
                  </motion.div>
               </div>
               <div className="flex-1 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.1)] group"
                  >
                     <motion.img 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80" />
                     <div className="absolute bottom-16 left-16 right-16 text-white ">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="h-[1px] w-12 bg-secondary" />
                           <span className="text-[10px] text-secondary font-bold tracking-[0.4em] uppercase italic">Engineering of Success</span>
                        </div>
                        <p className="text-3xl font-serif italic leading-relaxed tracking-tight">
                           {lang === 'ko' ? '"건축적 완성도를 넘어 자본과 현장의 완벽한 결합을 설계합니다."' : '"Designing the perfect fusion of capital and site beyond architectural perfection."'}
                        </p>
                        <p className="text-[11px] text-white/60 mt-6 uppercase tracking-[0.5em] font-light">Synthesizing capital engineering with site excellence.</p>
                     </div>
                  </motion.div>
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary flex items-center justify-center rounded-2xl rotate-12 shadow-2xl z-20 group hover:rotate-0 transition-transform cursor-pointer">
                     <Landmark className="w-20 h-20 text-white -rotate-12 group-hover:rotate-0 transition-transform" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Capabilities Marquee */}
      <section className="py-24 bg-primary text-secondary overflow-hidden">
         <div className="whitespace-nowrap flex gap-24 items-center">
            <motion.div
               animate={{ x: [0, -1500] }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="flex gap-24 text-4xl md:text-6xl font-serif italic opacity-30 select-none"
            >
               <span>FEASIBILITY REVIEW</span>
               <span className="text-white/20">/</span>
               <span>EQUITY STRUCTURING</span>
               <span className="text-white/20">/</span>
               <span>MEZZANINE DEBT</span>
               <span className="text-white/20">/</span>
               <span>EXIT STRATEGY</span>
               <span className="text-white/20">/</span>
               <span>CASH FLOW MGMT</span>
               <span className="text-white/20">/</span>
               <span>FEASIBILITY REVIEW</span>
               <span className="text-white/20">/</span>
               <span>EQUITY STRUCTURING</span>
               <span className="text-white/20">/</span>
               <span>MEZZANINE DEBT</span>
               <span className="text-white/20">/</span>
               <span>EXIT STRATEGY</span>
               <span className="text-white/20">/</span>
               <span>CASH FLOW MGMT</span>
            </motion.div>
         </div>
      </section>
    </div>
  );
};
