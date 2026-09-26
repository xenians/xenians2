import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { GradientText, VerticalMarquee } from '../components/animations/SpecialEffects';
import { FloatingDescription } from '../components/animations/FloatingDescription';
import { 
  Building, 
  Hotel, 
  Trees, 
  Home, 
  Layout, 
  Activity, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  ShieldCheck, 
  Users, 
  Zap, 
  Search, 
  Settings, 
  Globe, 
  CheckCircle2,
  CalendarDays,
  Target,
  Briefcase,
  Flag,
  Trophy,
  Crown,
  Waves
} from 'lucide-react';

export const OperationsPage: React.FC = () => {
  const { lang } = useContent();

  return (
    <div className="flex flex-col bg-primary min-h-screen selection:bg-secondary/30">
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 md:px-20 text-center relative overflow-hidden bg-primary">
        <img src="/images/ops-hero.png" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Operations Background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05)_0%,transparent_70%)] z-0" />
        <div className="relative z-10 text-white">
          <h2 className="text-secondary text-[11px] tracking-[0.6em] font-bold mb-8 uppercase italic">
            {lang === 'ko' ? '통합 호스피탈리티 & 레저 자산 관리' : 'Integrated Hospitality & Leisure Asset Management'}
          </h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-8xl font-serif mb-12 leading-tight tracking-tighter"
          >
             <GradientText>Consignment Operations</GradientText>
          </motion.h1>
          <div className="max-w-3xl mx-auto border-t border-secondary/10 pt-8 mt-12 px-6">
             <div className="space-y-6">
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                 className="text-white/80 text-lg md:text-xl font-noto font-bold"
               >
                  {lang === 'ko' ? '운영 효율과 프리미엄 고객 경험을 동시에.' : 'Operational Efficiency and Premium Guest Experience, Simultaneously.'}
               </motion.p>
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.6 }}
                 className="text-secondary/80 text-base md:text-xl font-noto font-light italic"
               >
                  {lang === 'ko' ? '“공간을 운영하는 것이 아니라 자산의 가치를 성장시킵니다.”' : '“We don’t just operate spaces; we grow the value of assets.”'}
               </motion.p>
             </div>
          </div>
          <div className="mt-16 h-[1px] w-24 bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-auto" />
        </div>
      </section>

      {/* SECTION 1 — WHY XENIANS */}
      <section className="py-32 px-6 md:px-12 bg-royal relative">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="md:w-1/2">
                  <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">Why Xenians</h2>
                  <h3 className="text-4xl md:text-5xl font-serif leading-tight animate-deep-blue">
                     <GradientText>{lang === 'ko' ? '글로벌 수준의 운영 시스템과 프리미엄 고객 경험' : 'Global Operations & Premium Guest Experience'}</GradientText>
                  </h3>
               </div>
               <div className="md:w-1/2 border-l border-white/10 pl-12">
                  <p className="text-white/70 text-lg leading-relaxed font-noto">
                     {lang === 'ko' ? (
                        '글로벌 수준의 운영 시스템과 프리미엄 고객 경험 설계를 기반으로 호텔 및 레저 자산의 경쟁력을 극대화합니다. 데이터 기반의 수익 최적화와 럭셔리 호스피탈리티 철학을 결합하여 시장을 선도합니다.'
                     ) : (
                        'We maximize the competitiveness of hotel and leisure assets based on global-level operation systems and premium customer experience design. Leading the market by combining data-driven revenue optimization with luxury hospitality philosophy.'
                     )}
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 2 — Operating Portfolios */}
      <section className="py-32 px-6 md:px-12 bg-ivory">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-secondary text-[10px] tracking-[0.4em] font-bold mb-6 uppercase italic">Operating Portfolios</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-primary animate-deep-blue">{lang === 'ko' ? '운영 가능 자산' : 'Management Asset Portfolios'}</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
               {[
                  { icon: <Hotel className="w-8 h-8" />, label: lang === 'ko' ? "Luxury Hotels" : "Luxury Hotels" },
                  { icon: <Trees className="w-8 h-8" />, label: lang === 'ko' ? "Golf Resorts" : "Golf Resorts" },
                  { icon: <Crown className="w-8 h-8" />, label: lang === 'ko' ? "Premium Resorts" : "Premium Resorts" },
                  { icon: <Building className="w-8 h-8" />, label: lang === 'ko' ? "Serviced Residences" : "Serviced Residences" },
                  { icon: <Flag className="w-8 h-8" />, label: lang === 'ko' ? "Private Clubs" : "Private Clubs" },
               ].map((asset, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-primary/5 hover:border-secondary/30 transition-all text-center group"
                  >
                     <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">
                        {asset.icon}
                     </div>
                     <span className="text-xs font-serif text-primary font-bold tracking-tight">{asset.label}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>


      {/* 1. Management Contract & 2. Asset Value Enhancement */}
      <section className="py-32 px-6 md:px-12 bg-primary">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* 위탁운영 */}
            <div className="space-y-12">
               <div>
                  <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">01. Management Contract</h2>
                  <h3 className="text-4xl font-serif text-white mb-8">{lang === 'ko' ? '호스피탈리티 위탁운영' : 'Hospitality Management Contract'}</h3>
                  <p className="text-white/60 text-sm leading-loose">
                     {lang === 'ko' ? '호텔 및 골프장의 통합 운영 솔루션을 통해 인건비 효율화와 수익 극대화를 실현합니다.' : 'Achieving cost efficiency and revenue maximization through integrated operation solutions for hotels and golf courses.'}
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                     lang === 'ko' ? "호텔 & 골프 운영 총괄" : "Total Asset Operations",
                     lang === 'ko' ? "객실/예약 & 티타임 관리" : "Room & Tee-time MGMT",
                     lang === 'ko' ? "F&B & 클럽하우스 운영" : "F&B & Clubhouse MGMT",
                     lang === 'ko' ? "코스 및 경기 운영 관리" : "Course & Game Operations",
                     lang === 'ko' ? "고객경험(CX) & VIP 의전" : "Guest Experience & VIP Protocol",
                     lang === 'ko' ? "인력 교육 및 서비스 매뉴얼" : "HR & Service Training",
                     lang === 'ko' ? "운영 KPI & 수익 최적화" : "KPI & Revenue Optimization"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10 text-white/80 text-xs text-[11px]">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        {item}
                     </div>
                  ))}
               </div>

               <div className="p-8 bg-secondary/10 rounded-2xl border border-secondary/20">
                  <h4 className="text-secondary text-xs font-bold mb-6 tracking-widest uppercase italic border-b border-secondary/20 pb-4">Operational Focus</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                     {[
                        { ko: "인건비 효율화 (OPEX Control)", en: "OPEX Control & Cost Efficiency" },
                        { ko: "객실/티타임 가동률 상승", en: "Room/Tee-time Occupancy Growth" },
                        { ko: "OTA & 예약 채널 최적화", en: "OTA & Channel Optimization" },
                        { ko: "VIP & 회원 관리 (LTV Focus)", en: "VIP & LTV Focus Management" },
                        { ko: "브랜드 서비스 매뉴얼 구축", en: "Service Standard & Manual Setup" }
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-white/90">
                           <div className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                           {lang === 'ko' ? item.ko : item.en}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Asset Value Enhancement */}
            <div className="space-y-12">
               <div>
                  <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">02. Asset Value Enhancement</h2>
                  <h3 className="text-4xl font-serif text-white mb-8">{lang === 'ko' ? '자산 가치 증대 솔루션' : 'Asset Value Enhancement'}</h3>
                  <p className="text-secondary/80 text-xl font-serif italic mb-6">
                     “{lang === 'ko' ? '운영 수익성과 부동산 자산 가치를 동시에 개선' : 'Improving Operational Profitability and Real Estate Asset Value Simultaneously'}”
                  </p>
               </div>

               <div className="grid grid-cols-1 gap-6">
                  {[
                     { title: "Revenue Optimization", en: "Yield Management", desc: lang === 'ko' ? "데이터 기반의 티타임 및 객실 수익 분석을 통한 수익 극대화" : "Maximizing revenue through data-driven analysis of tee-times and rooms." },
                     { title: "ADR & Green-fee Strategy", en: "Sophisticated Pricing", desc: lang === 'ko' ? "시절별/수요별 정교한 가격 정책으로 점유율과 단가 균형" : "Sophisticated pricing policies balanced with occupancy and rate." },
                     { title: "Asset Renewal Consulting", en: "Facility Rejuvenation", desc: lang === 'ko' ? "클럽하우스 및 객실 리뉴얼을 통한 하드웨어 경쟁력 확보" : "Securing hardware competitiveness through clubhouse and room renewal." },
                     { title: "Brand Repositioning", en: "Luxury Rebranding", desc: lang === 'ko' ? "시장 트렌드에 맞춘 브랜드 가치 재정의 및 리뉴얼" : "Redefining brand value and renewal aligned with market trends." }
                  ].map((item, i) => (
                     <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary/40 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                           <h4 className="text-xl font-serif text-white group-hover:text-secondary transition-colors">{item.title}</h4>
                           <span className="text-[10px] text-secondary/40 tracking-widest uppercase">{item.en}</span>
                        </div>
                        <p className="text-sm text-white/50">{item.desc}</p>
                     </div>
                  ))}
               </div>
               
               <div className="flex gap-4 p-8 bg-royal rounded-2xl border border-white/5">
                  <TrendingUp className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                     <p className="text-white font-bold mb-1">{lang === 'ko' ? '장기적 운영 수익 분석 & 자산 설계' : 'Long-term Yield Analysis & Asset Design'}</p>
                     <p className="text-white/40 text-[11px]">{lang === 'ko' ? '단순 운영을 넘어 투자자의 시각에서 자산의 미래 가치를 설계합니다.' : 'We design the future value of assets from an investor perspective, going beyond simple operation.'}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>


      {/* 3. Revenue Management Center */}
      <section className="py-48 px-6 md:px-12 bg-ivory overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">03. Revenue Management Center</h2>
                  <h3 className="text-5xl md:text-6xl font-serif mb-12 leading-tight animate-deep-blue">
                     <GradientText>
                        Data-Driven<br />
                        Leisure Pricing.
                     </GradientText>
                  </h3>
                  <div className="space-y-8">
                     {[
                        { icon: <BarChart3 className="w-6 h-6" />, title: lang === 'ko' ? "실시간 객실 & 티타임 분석" : "Real-time Supply Analysis", desc: lang === 'ko' ? "시장 수요를 실시간으로 트래킹하여 최적의 티타임 및 객실가 도출" : "Tracking market demand in real-time to derive optimal tee-times and room rates." },
                        { icon: <CalendarDays className="w-6 h-6" />, title: lang === 'ko' ? "시즌별 가격 전략" : "Seasonal Pricing Tactics", desc: lang === 'ko' ? "이벤트 및 시즌 데이터를 활용한 선제적 예약 유도 및 가격 차등" : "Preemptive booking induction and price differentiation using seasonal data." },
                        { icon: <Target className="w-6 h-6" />, title: lang === 'ko' ? "채널별 성과 분석" : "Channel Performance Analysis", desc: lang === 'ko' ? "글로벌 OTA 및 예약 플랫폼별 성과 분석을 통한 판매 비중 최적화" : "Optimizing sales share through performance analysis by OTA and booking platforms." },
                        { icon: <Globe className="w-6 h-6" />, title: lang === 'ko' ? "글로벌 예약 시스템 운영" : "Global Booking Operations", desc: lang === 'ko' ? "전 세계 주요 채널과의 유기적인 연동 및 통합 인벤토리 관리" : "Organic link with major global channels and integrated inventory management." }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-6">
                           <div className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center shrink-0">
                              {item.icon}
                           </div>
                           <div>
                              <h4 className="text-lg font-serif text-primary mb-1">{item.title}</h4>
                              <p className="text-sm text-primary/60">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 relative">
                  <div className="bg-primary p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Brain className="w-48 h-48 text-secondary" />
                     </div>
                     <div className="relative z-10 text-white space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary text-[10px] font-bold tracking-widest uppercase">
                           <Zap className="w-3 h-3 fill-secondary" />
                           AI Demand Forecasting
                        </div>
                        <h4 className="text-3xl font-serif tracking-tight">AI 기반 통합 수요 예측</h4>
                        <p className="text-white/60 leading-relaxed font-noto text-sm">
                           {lang === 'ko' 
                              ? '과거의 데이터와 실시간 시장 지표를 결합하여, 향후 365일의 수요를 예측합니다. 호텔의 점유율과 골프장의 티타임 수요를 결합한 알고리즘을 통해 리조트 전체 수익의 완벽한 균형점을 찾아냅니다.' 
                              : 'Predicting demand for the next 365 days by combining historical data and real-time market indicators. We find the perfect balance point for resort-wide revenue through algorithms combining hotel occupancy and golf tee-time demand.'}
                        </p>
                        <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8 text-center">
                           <div>
                              <p className="text-2xl font-serif text-secondary">+22%</p>
                              <p className="text-[10px] text-white/40 uppercase tracking-widest">Revenue Growth</p>
                           </div>
                           <div>
                              <p className="text-2xl font-serif text-secondary">+15%</p>
                              <p className="text-[10px] text-white/40 uppercase tracking-widest">Pricing Precision</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* New Section: Membership & VIP Service */}
      <section className="py-32 px-6 md:px-12 bg-royal">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">Membership & VIP Experience</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight">{lang === 'ko' ? '프리미엄 멤버십 & VIP 서비스' : 'Premium Membership & VIP Experience'}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { icon: <Crown className="w-10 h-10" />, title: "Private Membership", desc: lang === 'ko' ? "독점적인 회원 혜택과 프리미엄 가치 관리" : "Exclusive benefits and premium value management." },
                  { icon: <Users className="w-10 h-10" />, title: "VIP Concierge", desc: lang === 'ko' ? "개인화된 맞춤형 컨시어지 서비스 제공" : "Providing personalized and bespoke concierge services." },
                  { icon: <Briefcase className="w-10 h-10" />, title: "Corporate Membership", desc: lang === 'ko' ? "기업 회원을 위한 맞춤형 패키지 및 네트워킹" : "Customized packages and networking for corporate members." },
                  { icon: <Trophy className="w-10 h-10" />, title: "Executive Networking", desc: lang === 'ko' ? "고위층을 위한 네트워킹 이벤트 및 행사 주최" : "Hosting networking events and functions for executives." }
               ].map((item, i) => (
                  <div key={i} className="p-10 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-white transition-all group">
                     <div className="text-secondary mb-8 flex justify-center group-hover:scale-110 transition-transform">
                        {item.icon}
                     </div>
                     <h4 className="text-xl font-serif text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                     <p className="text-sm text-white/50 group-hover:text-primary/70 transition-colors">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Operation Process */}
      <section className="py-32 bg-ivory text-primary">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-6 uppercase italic">Operational Excellence</h2>
               <h3 className="text-4xl md:text-5xl font-serif tracking-tight">{lang === 'ko' ? '운영 프로세스' : 'Integrated Operations Process'}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
               {[
                  { step: "01", title: "Asset & Market Analysis", desc: lang === 'ko' ? "자산 및 시장 정밀 분석" : "Diagnosis" },
                  { step: "02", title: "Revenue Strategy", desc: lang === 'ko' ? "수익 최적화 전략 수립" : "Strategy" },
                  { step: "03", title: "System Setup", desc: lang === 'ko' ? "운영 시스템 및 조직 구축" : "Setup" },
                  { step: "04", title: "Experience Enhancement", desc: lang === 'ko' ? "고객 경험 및 서비스 교육" : "Education" },
                  { step: "05", title: "Asset Management", desc: lang === 'ko' ? "성과 관리 및 자산 증대" : "Governance" }
               ].map((process, i) => (
                  <div key={i} className="relative group">
                     {i < 4 && <div className="hidden md:block absolute top-10 left-1/2 w-full h-[1px] bg-primary/10 z-0" />}
                     <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-primary text-secondary flex items-center justify-center font-serif text-2xl mb-8 group-hover:bg-secondary group-hover:text-primary transition-all">
                           {process.step}
                        </div>
                        <h4 className="text-sm font-serif text-primary mb-2 text-center">{process.title}</h4>
                        <p className="text-[10px] text-primary/40 uppercase tracking-widest text-center">{process.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final Branding Section */}
      <section className="py-48 px-6 md:px-12 bg-primary">
         <div className="max-w-7xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-secondary text-[10px] tracking-[0.6em] font-bold mb-8 uppercase italic">Future of Hospitality</h2>
               <h3 className="text-4xl md:text-6xl font-serif mb-12 leading-tight animate-deep-blue">
                  <GradientText>
                     {lang === 'ko' ? (
                        <>“운영 효율을 넘어 <br />자산 가치 상승까지 설계합니다.”</>
                     ) : (
                        <>“Beyond Operational Efficiency, <br />We Design Asset Value Growth.”</>
                     )}
                  </GradientText>
               </h3>
               <p className="text-white/50 text-base max-w-2xl mx-auto leading-loose italic mb-12">
                  Premium Integrated Hospitality & Leisure Asset Management by Xenians Group
               </p>

            </motion.div>
         </div>
      </section>
    </div>
  );
};
