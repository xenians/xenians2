import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Handshake, 
  Building2, 
  BarChart3, 
  UserCheck, 
  Settings
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang } = useContent();

  // 5 Business Services matching the reference layout
  const businessServices = [
    {
      num: '01',
      title: 'M&A ADVISORY',
      titleKo: 'M&A ADVISORY',
      descKo: '전략적 매각·인수 자문 거래의 가치를 극대화합니다.',
      descEn: 'Maximizing transaction value in strategic buy-side and sell-side advisory.',
      icon: Handshake,
      link: '/business/mna',
    },
    {
      num: '02',
      title: 'DEVELOPMENT & PF',
      titleKo: 'DEVELOPMENT & PF',
      descKo: '사업 기획부터 금융, 개발, PM, Exit까지 통합 관리합니다.',
      descEn: 'Master planning across capital structuring, permitting, PM, and exit.',
      icon: Building2,
      link: '/business/development',
    },
    {
      num: '03',
      title: 'SALES & MARKETING',
      titleKo: 'SALES & MARKETING',
      descKo: '시장 분석과 전략적 포지셔닝으로 최적의 판매 성과를 만듭니다.',
      descEn: 'Data-driven marketing and presale execution ensuring rapid sell-out.',
      icon: BarChart3,
      link: '/business/sales',
    },
    {
      num: '04',
      title: 'OPERATIONS',
      titleKo: 'OPERATIONS',
      descKo: '운영 효율과 수익성 개선으로 자산의 가치를 높입니다.',
      descEn: 'Turnaround operations and dynamic revenue management for hospitality assets.',
      icon: UserCheck,
      link: '/business/operation',
    },
    {
      num: '05',
      title: 'FACILITY MANAGEMENT',
      titleKo: 'FACILITY MANAGEMENT',
      descKo: '시설의 가치를 유지하고 지속 가능한 경쟁력을 만듭니다.',
      descEn: 'Preserving asset value with smart BMS monitoring and LCC optimization.',
      icon: Settings,
      link: '/business/fm',
    },
  ];

  // 4 Insights Articles
  const insightArticles = [
    {
      tag: 'MARKET',
      title: '2024년 글로벌 부동산 시장 전망',
      enTitle: '2024 Global Real Estate Market Outlook',
      date: '2024.04.30',
      image: '/images/hero-seoul-skyline.jpg',
    },
    {
      tag: 'INSIGHT',
      title: '오피스 자산의 가치 재정의',
      enTitle: 'Redefining Prime Office Asset Valuation',
      date: '2024.04.15',
      image: '/images/project-gangnam-tower.jpg',
    },
    {
      tag: 'PROJECT',
      title: 'ACRO SEOUL FOREST 개발 스토리',
      enTitle: 'The Making of ACRO SEOUL FOREST',
      date: '2024.04.01',
      image: '/images/project-acro-forest.jpg',
    },
    {
      tag: 'TREND',
      title: '호텔 시장의 새로운 기회',
      enTitle: 'New Investment Frontiers in Hospitality',
      date: '2024.03.20',
      image: '/images/project-jeju-resort.jpg',
    },
  ];

  return (
    <div className="flex flex-col bg-[#f7f5f0] text-[#141413] min-h-screen selection:bg-[#c6a35b] selection:text-white">
      
      {/* 1. HERO SECTION (Left Indicator, Big Headline, Seoul Skyline) */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-[#0e0e0d] text-white pt-36 pb-12 px-6 md:px-[6vw] overflow-hidden">
        {/* Background Panoramic Night Skyline */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-seoul-skyline.jpg"
            alt="Seoul Skyline"
            className="w-full h-full object-cover object-center brightness-[0.70] contrast-[1.1] scale-102"
          />
          {/* Subtle vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0d] via-transparent to-black/60" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1500px] mx-auto w-full my-auto flex items-center gap-12 sm:gap-16">
          
          {/* Left Vertical Progress Track (01 — 05) */}
          <div className="hidden sm:flex flex-col items-center gap-3 text-white/50 font-mono text-[11px] tracking-widest shrink-0">
            <span className="text-[#c6a35b] font-bold">01</span>
            <div className="w-[1.5px] h-16 bg-white/20 relative overflow-hidden">
              <motion.div 
                className="w-full h-1/2 bg-[#c6a35b]"
                animate={{ y: [0, 32, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span>05</span>
          </div>

          {/* Main Headline & Tags */}
          <div className="max-w-3xl">
            <h1 className="font-serif text-[38px] sm:text-[54px] md:text-[66px] lg:text-[76px] font-normal leading-[1.18] tracking-tight mb-8 break-keep animate-slow-color-shift">
              {lang === 'ko' ? (
                <>새로운 가치를 발견하고<br />미래를 설계합니다.</>
              ) : (
                <>Discovering New Value,<br />Designing the Future.</>
              )}
            </h1>

            <div className="space-y-3">
              <p className="font-mono text-[11px] sm:text-[13px] tracking-[0.35em] text-[#c6a35b] uppercase font-bold">
                REAL ESTATE · INVESTMENT · DEVELOPMENT
              </p>
              <p className="font-sans text-[13.5px] sm:text-[15px] text-white/70 font-light tracking-wide">
                From Capital to Asset. From Strategy to Execution.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom subtle divider line */}
        <div className="relative z-10 max-w-[1500px] mx-auto w-full border-t border-white/10 pt-4" />
      </section>

      {/* 2. OUR BUSINESS SECTION (Compact Responsive Grid, Easy to View on Mobile) */}
      <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-[6vw] bg-[#fbf9f6] border-b border-black/[0.08]">
        <div className="max-w-[1500px] mx-auto">
          
          {/* Header */}
          <div className="mb-8 sm:mb-12 md:mb-14">
            <span className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.25em] sm:tracking-[0.3em] text-[#a18750] font-bold uppercase block mb-1.5 sm:mb-2">
              OUR BUSINESS
            </span>
            <h2 className="font-serif text-[22px] sm:text-[30px] md:text-[38px] text-[#9e7a32] font-medium tracking-tight">
              {lang === 'ko' ? '전문성과 실행력으로 가치를 완성합니다.' : 'Completing Value with Deep Expertise & Execution.'}
            </h2>
          </div>

          {/* 5 Column Compact Editorial Grid - 2 columns on mobile, 5 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-6">
            {businessServices.map((svc, idx) => {
              const Icon = svc.icon;
              const isLast = idx === businessServices.length - 1;
              return (
                <Link
                  key={idx}
                  to={svc.link}
                  className={`group p-3.5 sm:p-5 border-t-2 border-black/[0.12] hover:border-t-[3px] hover:border-[#c6a35b] transition-all duration-300 flex flex-col justify-between hover:bg-[#ffffff] hover:shadow-[0_8px_24px_rgba(198,163,91,0.14)] hover:-translate-y-0.5 rounded-sm bg-white/40 ${
                    isLast 
                      ? 'col-span-2 sm:col-span-1 lg:col-span-1 min-h-[120px] sm:min-h-[220px] lg:min-h-[250px]' 
                      : 'min-h-[140px] sm:min-h-[220px] lg:min-h-[250px]'
                  }`}
                >
                  <div>
                    {/* Top: Number & Icon */}
                    <div className="flex items-center justify-between mb-3 sm:mb-6">
                      <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#888888] group-hover:text-[#c6a35b] font-bold transition-colors">
                        {svc.num}
                      </span>
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-sm bg-black/[0.04] flex items-center justify-center text-[#141413] group-hover:bg-[#141413] group-hover:text-[#c6a35b] group-hover:shadow-xs transition-all duration-300">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.7]" />
                      </div>
                    </div>

                    {/* Title inside Card Box: High-Contrast Prestige Gold */}
                    <h3 className="font-sans font-bold text-[12.5px] sm:text-[14px] md:text-[15px] text-[#9e7a32] uppercase tracking-wider mb-1 sm:mb-2.5 leading-snug group-hover:text-[#b88c3a] transition-colors">
                      {lang === 'ko' ? svc.titleKo : svc.title}
                    </h3>

                    {/* Description: Charcoal Body Text */}
                    <p className="text-[11px] sm:text-[12px] md:text-[13px] text-[#555555] leading-relaxed break-keep line-clamp-2 sm:line-clamp-3">
                      {lang === 'ko' ? svc.descKo : svc.descEn}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-2.5 sm:pt-4 mt-2 sm:mt-3 border-t border-black/[0.05] flex items-center justify-between text-[10.5px] sm:text-[12px] font-semibold text-[#141413] group-hover:text-[#c6a35b] transition-colors">
                    <span>{lang === 'ko' ? '자세히 보기' : 'Learn More'}</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform text-[#c6a35b]" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. ABOUT XENIANS (Clean Editorial Layout without the 4 small boxes) */}
      <section className="relative py-24 md:py-32 px-6 md:px-[6vw] bg-[#161615] text-white overflow-hidden border-b border-white/10">
        {/* Subtle background ambient texture */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/about-concrete-interior.jpg"
            alt="Interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Eyebrow & Main Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#c6a35b]" />
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#c6a35b] font-bold uppercase">
                ABOUT XENIANS
              </span>
            </div>

            <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] text-white font-normal leading-[1.2] break-keep">
              {lang === 'ko' ? (
                <>자산을 넘어,<br />가치를 봅니다.</>
              ) : (
                <>Beyond the Asset,<br />We See True Value.</>
              )}
            </h2>

            <div className="w-16 h-[1px] bg-white/20" />
          </div>

          {/* Right Column: Deep Narrative & Navigation Link */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <p className="text-[15px] sm:text-[16px] text-white/85 leading-[1.9] font-light break-keep">
              {lang === 'ko' ? (
                '시장의 변화, 자본의 흐름, 공간의 가능성 그리고 운영의 효율이 결합될 때 새로운 가치가 만들어집니다. XENIANS는 자산을 하나의 고정된 결과물이 아닌, 지속적으로 발전하고 수익을 창출하는 플랫폼으로 바라봅니다.'
              ) : (
                'New value is created when market dynamics, capital flow, spatial potential, and operational efficiency align. XENIANS views assets not as fixed outcomes, but as sustainable, evolving platforms that continuously generate long-term value.'
              )}
            </p>

            <p className="text-[13.5px] sm:text-[14px] text-white/55 leading-[1.8] font-light break-keep">
              {lang === 'ko' ? (
                '독보적인 금융 공학적 분석과 현장 중심의 실무 실행력을 바탕으로 M&A 자문, 프로젝트 개발 및 금융, 전략적 분양 마케팅, 럭셔리 호스피탈리티 위탁 운영, 그리고 스마트 시설 관리까지 전 생애주기 통합 솔루션을 제공합니다.'
              ) : (
                'Leveraging rigorous financial engineering and decisive execution, we deliver end-to-end solutions across M&A advisory, development finance, sales marketing, luxury operations, and smart facility management.'
              )}
            </p>

            <div className="pt-4">
              <Link
                to="/company"
                className="group inline-flex items-center gap-3 px-7 py-3.5 border border-[#c6a35b] text-[#c6a35b] hover:bg-[#c6a35b] hover:text-white font-mono text-[11px] tracking-[0.25em] font-bold uppercase rounded-sm transition-all duration-300"
              >
                <span>{lang === 'ko' ? '회사 소개 바로가기' : 'ABOUT COMPANY'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. INSIGHTS SECTION (4 Realistic Photo Cards) */}
      <section className="py-20 md:py-28 px-6 md:px-[6vw] bg-[#f7f5f0] border-b border-black/[0.08]">
        <div className="max-w-[1500px] mx-auto">
          
          {/* Header & View All Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-black/[0.08]">
            <div>
              <span className="text-[10.5px] font-mono tracking-[0.3em] text-[#a18750] font-bold uppercase block mb-2">
                INSIGHTS
              </span>
              <h2 className="font-serif text-[28px] sm:text-[34px] text-[#9e7a32] font-medium">
                {lang === 'ko' ? '시장의 인사이트와 XENIANS의 시선을 전합니다.' : 'Market Insights & Perspectives from XENIANS.'}
              </h2>
            </div>

            <Link
              to="/insights"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-black/20 text-[#141413] hover:border-[#a18750] hover:text-[#a18750] font-mono text-[11px] tracking-widest uppercase rounded-sm transition-colors shrink-0"
            >
              <span>{lang === 'ko' ? '전체보기' : 'VIEW ALL'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Unboxed Insight Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {insightArticles.map((art, idx) => (
              <Link
                key={idx}
                to="/insights"
                className="group flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Photo */}
                <div className="h-[190px] w-full overflow-hidden rounded-sm relative border border-black/[0.08] shadow-xs">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/hero-seoul-skyline.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-[#c6a35b] font-mono text-[9px] tracking-widest uppercase font-bold px-2 py-0.5 rounded-xs">
                    {art.tag}
                  </div>
                </div>

                {/* Content Directly on Background - Title in High-Contrast Prestige Gold */}
                <div className="pt-4 flex flex-col justify-between flex-grow">
                  <h3 className="font-sans font-bold text-[15px] text-[#9e7a32] group-hover:text-[#b88c3a] transition-colors line-clamp-2 leading-snug mb-2.5">
                    {lang === 'ko' ? art.title : art.enTitle}
                  </h3>
                  <span className="font-mono text-[11px] text-[#888888]">
                    {art.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER (Luxury Lounge Backdrop with Offices) */}
      <section className="relative py-20 md:py-24 px-6 md:px-[6vw] bg-[#141413] text-white overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-concrete-interior.jpg"
            alt="Lounge Interior"
            className="w-full h-full object-cover brightness-[0.40] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="max-w-[1500px] mx-auto relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left CTA Text & Button */}
          <div className="max-w-2xl space-y-4">
            <h2 className="font-serif text-[32px] sm:text-[42px] font-normal leading-tight">
              LET'S CREATE<br />
              VALUE TOGETHER.
            </h2>
            <p className="text-[14.5px] text-white/70 font-light">
              {lang === 'ko' ? '새로운 가치를 함께 만들어갑니다.' : 'Partnering together to create lasting real estate value.'}
            </p>
            <div className="pt-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#c6a35b] hover:bg-white text-[#141413] font-mono text-[11.5px] tracking-[0.25em] font-bold uppercase rounded-sm transition-all duration-300 shadow-lg"
              >
                <span>CONTACT XENIANS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Global Offices */}
          <div className="lg:border-l lg:border-white/20 lg:pl-12 space-y-3 font-mono">
            <span className="text-[10.5px] tracking-[0.3em] text-[#c6a35b] font-bold uppercase block mb-1">
              OFFICES
            </span>
            <div className="space-y-1.5 text-[13px] tracking-wider text-white/80">
              <p className="hover:text-white transition-colors">SEOUL</p>
              <p className="hover:text-white transition-colors">LONDON</p>
              <p className="hover:text-white transition-colors">SINGAPORE</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
