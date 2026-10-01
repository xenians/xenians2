import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { PageHeader } from '../components/PageHeader';
import { INITIAL_DATA_KO, INITIAL_DATA_EN } from '../constants';
import { 
  Target, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ChevronRight,
  Briefcase,
  Building2,
  Hotel,
  Users2
} from 'lucide-react';

export const CompanyPage: React.FC = () => {
  const { data, lang } = useContent();
  const [activeTab, setActiveTab] = useState<'ceo' | 'org' | 'overview'>('ceo');
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const isKo = lang === 'ko';
  const ceoMsg = data.company.ceoMessage;
  const defaultOrgKo = INITIAL_DATA_KO.company.organization;
  const defaultOrgEn = INITIAL_DATA_EN.company.organization;
  const organizationData = (data.company.organization && data.company.organization.length > 0)
    ? data.company.organization
    : (isKo ? defaultOrgKo : defaultOrgEn);

  // Robust helpers ensuring Korean mode always displays Korean text and English mode displays English
  const getDivisionName = (divItem: any, idx: number) => {
    if (isKo) {
      const koCanonical = defaultOrgKo[idx]?.name;
      if (divItem.name && /[가-힣]/.test(divItem.name)) return divItem.name;
      return koCanonical || divItem.name || '';
    }
    const enCanonical = defaultOrgEn[idx]?.name || divItem.enName;
    return divItem.enName || enCanonical || divItem.name || '';
  };

  const getDivisionRole = (divItem: any, idx: number) => {
    if (isKo) {
      const koCanonical = defaultOrgKo[idx]?.role;
      if (divItem.role && /[가-힣]/.test(divItem.role)) return divItem.role;
      return koCanonical || divItem.role || '';
    }
    const enCanonical = defaultOrgEn[idx]?.role || divItem.enRole;
    return divItem.enRole || enCanonical || divItem.role || '';
  };

  const getTeamName = (team: any, dIdx: number, tIdx: number) => {
    if (isKo) {
      const koCanonical = defaultOrgKo[dIdx]?.sub?.[tIdx]?.name;
      if (team.name && /[가-힣]/.test(team.name)) return team.name;
      return koCanonical || team.name || '';
    }
    const enCanonical = defaultOrgEn[dIdx]?.sub?.[tIdx]?.name || team.enName;
    return team.enName || enCanonical || team.name || '';
  };

  const getTeamRole = (team: any, dIdx: number, tIdx: number) => {
    if (isKo) {
      const koCanonical = defaultOrgKo[dIdx]?.sub?.[tIdx]?.role;
      if (team.role && /[가-힣]/.test(team.role)) return team.role;
      return koCanonical || team.role || '';
    }
    const enCanonical = defaultOrgEn[dIdx]?.sub?.[tIdx]?.role || team.enRole;
    return team.enRole || enCanonical || team.role || '';
  };

  const defaultCeoKo = `제니안스에 오신 것을 환영합니다.

급변하는 글로벌 자본시장과 부동산 개발 환경 속에서, 자산의 본질적 가치를 정확히 통찰하고 지속 가능한 수익 구조를 완성하는 일은 기업의 영속성을 결정짓는 핵심 과제입니다.

제니안스 그룹(XENIANS GROUP)은 M&A 자문, 시행 및 개발 관리(PM), 전문적인 위탁 운영에 이르는 전 과정을 유기적으로 통합하여 최적의 솔루션을 제공합니다. 우리는 정교한 데이터 분석과 현장 중심의 실행력을 결합하여, 이론에 머물지 않고 실질적인 자산 가치 극대화와 수익 모델을 입증해 왔습니다.

‘Value-Driven, Result-Oriented’라는 확고한 원칙 아래, 투명한 프로세스와 압도적인 전문성으로 시장의 기준을 세우겠습니다. 신뢰할 수 있는 전략적 파트너로서 귀사의 성공적인 비즈니스 여정을 함께하겠습니다.

감사합니다.`;

  const defaultCeoEn = `Welcome to XENIANS GROUP.

In a rapidly shifting global capital market and complex real estate landscape, piercing through the intrinsic value of assets and establishing sustainable growth structures have become the definitive imperative for leadership.

XENIANS GROUP delivers fully integrated advisory and execution across M&A, Development & PM, and Specialized Hospitality & Facility Operations. Rooted in rigorous data intelligence and extensive field experience, we translate sophisticated strategy into tangible economic value and proven returns.

Guided by our core principle of ‘Value-Driven, Result-Oriented’, we remain committed to setting the benchmark for institutional excellence and transparency. As your trusted strategic partner, we look forward to achieving lasting success together.

Thank you.`;

  const cleanCeoBody = (rawText?: string) => {
    if (!rawText) return '';
    return rawText
      .replace(/^자산의 본질적 가치를 꿰뚫고\s*\n\s*새로운 성장의 이정표를 제시합니다\.\s*\n*/, '')
      .replace(/^Piercing through the intrinsic value of assets,\s*\n\s*Presenting a new milestone for growth\.\s*\n*/i, '')
      .replace(/^Unlocking the Intrinsic Value of Assets,\s*\n\s*Presenting a New Milestone for Growth\.\s*\n*/i, '')
      .trim();
  };

  const displayCeoBody = lang === 'ko'
    ? (cleanCeoBody(ceoMsg.ko) || defaultCeoKo)
    : (cleanCeoBody(ceoMsg.en) || defaultCeoEn);

  const divisionIcons = [Briefcase, Layers, Hotel, Users2];

  return (
    <div className="flex flex-col bg-[#f7f5f0] text-[#141413] min-h-screen selection:bg-[#c6a35b] selection:text-white">
      {/* 1. TOP HEADER BANNER (Matching Reference Image) */}
      <PageHeader
        title={isKo ? "제니안스 소개" : "ABOUT XENIANS"}
        breadcrumb={isKo ? "ABOUT / 회사소개" : "ABOUT"}
        imageSrc="/images/header-about.jpg"
        imageAlt="About Xenians"
      />

      {/* 2. MAIN CONTENT (Left Nav + Right Editorial Content) */}
      <section className="py-16 md:py-24 px-6 md:px-[6vw]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Vertical Sidebar / Table of Contents (Unboxed, Direct on Background with Refined Hover Animation) */}
          <div className="lg:col-span-3 lg:sticky lg:top-32 pr-0 lg:pr-4">
            <div className="mb-5 pb-3.5 border-b border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#dfbe7a] to-[#7c5816] shadow-2xs shrink-0" />
                <span className="font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#1e3a8a] tracking-tight">
                  {isKo ? '제니안스 소개' : 'ABOUT XENIANS'}
                </span>
              </div>
              <span className="font-mono text-[11px] font-bold text-[#7c5816] bg-[#faf7f2] px-2.5 py-0.5 rounded-full border border-[#c6a35b]/25 shadow-2xs">
                03 SECTIONS
              </span>
            </div>
            
            <nav 
              className="flex flex-col gap-2"
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {[
                { id: 'ceo', label: 'CEO MESSAGE', labelKo: 'CEO 메시지' },
                { id: 'org', label: 'ORGANIZATION', labelKo: '조직도' },
                { id: 'overview', label: 'OUR STRENGTH', labelKo: '핵심 역량' },
              ].map((item, idx) => {
                const isActive = activeTab === item.id;
                const isHovered = hoveredMenu === item.id;
                const isDimmed = hoveredMenu !== null && !isHovered;

                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setHoveredMenu(item.id)}
                    onClick={() => {
                      setActiveTab(item.id as any);
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`group cursor-pointer relative w-full text-left py-2.5 px-3.5 rounded-xs transition-all duration-300 flex items-center justify-between border-t-0 border-r-0 border-l-[3px] border-b-[2px] overflow-hidden ${
                      isDimmed 
                        ? 'opacity-30 blur-[0.6px] scale-[0.985] bg-transparent border-l-transparent border-b-transparent' 
                        : isHovered || isActive
                          ? 'bg-gradient-to-br from-white via-[#faf6ed] to-[#f4e8cc] text-[#111111] border-l-[#c6a35b] border-b-[#9e7a32] shadow-[-3px_6px_16px_rgba(198,163,91,0.2),0_4px_12px_rgba(0,0,0,0.04)] font-bold -translate-y-0.5 translate-x-1 z-10'
                          : 'bg-transparent text-[#444444] border-l-transparent border-b-transparent hover:bg-gradient-to-br hover:from-white hover:via-[#faf6ed] hover:to-[#f4e8cc] hover:text-[#111111] hover:border-l-[#c6a35b] hover:border-b-[#9e7a32] hover:-translate-y-0.5 hover:translate-x-1 hover:shadow-[-3px_6px_16px_rgba(198,163,91,0.2)]'
                    }`}
                  >
                    {/* Subtle Gold Shimmer Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#c6a35b]/[0.12] via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="flex items-center gap-2.5 min-w-0 relative z-10 pl-0.5">
                      <span
                        className={`font-mono text-[11.5px] font-bold shrink-0 transition-colors duration-200 ${
                          isActive || isHovered ? 'text-[#7c5816]' : 'text-[#888888] group-hover:text-[#7c5816]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-sans text-[13.5px] sm:text-[14px] tracking-tight truncate transition-colors duration-200 ${
                          isActive || isHovered
                            ? 'font-bold text-[#111111]'
                            : 'font-medium text-[#333333] group-hover:text-[#111111] group-hover:font-bold'
                        }`}
                      >
                        {lang === 'ko' ? item.labelKo : item.label}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center pl-1.5 shrink-0">
                      <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive || isHovered
                          ? 'bg-gradient-to-br from-[#dfbe7a] via-[#c6a35b] to-[#7c5816] text-white shadow-2xs translate-x-0.5 scale-105' 
                          : 'bg-black/[0.04] text-[#888888] group-hover:bg-gradient-to-br group-hover:from-[#dfbe7a] group-hover:via-[#c6a35b] group-hover:to-[#7c5816] group-hover:text-white group-hover:scale-105 group-hover:translate-x-0.5'
                      }`}>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-black/[0.08] font-sans text-[13px] text-[#666666] leading-relaxed break-keep">
              <p className="font-semibold text-[#141413] mb-1 font-mono text-[12px]">XENIANS INC.</p>
              <p>{lang === 'ko' ? '글로벌 부동산 자문 및 종합 자산 관리 그룹' : 'Real Estate Advisory & Management Group'}</p>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-9 space-y-16 sm:space-y-20">
            
            {/* CEO MESSAGE SECTION (Unboxed, Sitting Directly on Page Background with Centered Watermark Emblem) */}
            <div id="ceo" className="relative pb-16 border-b border-black/[0.08] scroll-mt-32 overflow-hidden">
              
              <div className="relative z-10 max-w-3xl">
                {/* Centered Watermark Logo Emblem directly behind CEO message text */}
                <div 
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] md:w-[520px] h-[320px] sm:h-[440px] md:h-[520px] pointer-events-none select-none opacity-[0.055] -z-10"
                >
                  <img 
                    src="/images/logo.png" 
                    alt="" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/로고.png";
                    }}
                  />
                </div>

                <span className="text-[10.5px] font-mono tracking-[0.3em] text-[#c6a35b] font-bold uppercase block mb-3">
                  CEO MESSAGE
                </span>
                <div className="w-12 h-[2px] bg-[#c6a35b] mb-8" />

                <h2 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] text-[#7c5816] font-medium leading-[1.35] mb-8 break-keep">
                  {lang === 'ko' ? (
                    <>자산의 본질적 가치를 꿰뚫고<br />새로운 성장의 이정표를 제시합니다.</>
                  ) : (
                    <>Piercing through the intrinsic value of assets,<br />Presenting a new milestone for growth.</>
                  )}
                </h2>

                <div className="space-y-6 text-[14.5px] sm:text-[15.5px] text-[#444444] leading-[1.9] font-normal break-keep whitespace-pre-line">
                  {displayCeoBody}
                </div>

                {/* Signature Line */}
                <div className="mt-12 pt-8 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center flex-wrap gap-3 sm:gap-5">
                    <span className="font-serif text-[15px] sm:text-[16px] text-[#555555] font-medium tracking-wide">
                      {lang === 'ko' ? 'XENIANS GROUP 대표이사' : 'CEO of XENIANS GROUP'}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-[18px] sm:text-[21px] text-[#141413] font-bold tracking-wide">
                        {ceoMsg.name || '유 석 / PHILLIP YOO'}
                      </span>
                      <img 
                        src="/images/싸인.png" 
                        alt="CEO Signature" 
                        className="h-9 sm:h-11 w-auto object-contain opacity-95 -mt-1 inline-block"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ORGANIZATION STRUCTURE SECTION (Unboxed, Sitting Directly on Page Background) */}
            <div id="org" className="pb-16 border-b border-black/[0.08] scroll-mt-32">
              <div className="mb-10">
                <span className="font-sans text-[12px] sm:text-[13px] font-bold tracking-tight text-[#c6a35b] uppercase block mb-1.5">
                  {isKo ? '조직 체계' : 'ORGANIZATION STRUCTURE'}
                </span>
                <h3 className="font-sans text-[22px] sm:text-[26px] text-[#7c5816] font-bold tracking-tight">
                  {isKo ? '제니안스 조직 체계' : 'XENIANS Group Organization'}
                </h3>
                <p className="font-sans text-[14px] text-[#555555] mt-2 font-normal">
                  {isKo 
                    ? '전문성과 유기적인 협업을 바탕으로 최고의 시너지를 창출하는 4대 핵심 사업 부문' 
                    : '4 Core Divisions maximizing strategic synergies through deep expertise and agile collaboration'}
                </p>
              </div>

              {/* Top Executive Node */}
              <div className="flex flex-col items-center mb-10">
                <div className="w-full max-w-sm py-4 px-6 bg-[#141413] text-white rounded-sm text-center shadow-sm border border-black/[0.15]">
                  <span className="font-sans text-[11px] sm:text-[11.5px] font-bold tracking-tight text-[#c6a35b] uppercase block mb-0.5">
                    {isKo ? '총괄 경영진' : 'EXECUTIVE LEADERSHIP'}
                  </span>
                  <span className="font-sans text-[17px] font-bold tracking-normal text-[#dfbe7a]">
                    {isKo ? '대표이사 / CEO' : 'Chief Executive Officer'}
                  </span>
                </div>
                <div className="w-[1.5px] h-8 bg-black/20" />
              </div>

              {/* 4 Divisions Grid (Unboxed with Enhanced Hover Animation Color) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {organizationData.map((divItem, dIdx) => {
                  const Icon = divisionIcons[dIdx % divisionIcons.length];
                  const subTeams = divItem.sub || defaultOrgKo[dIdx]?.sub || [];
                  return (
                    <div 
                      key={dIdx} 
                      className="pt-6 pb-6 px-4 border-t-2 border-black/[0.12] hover:border-t-[3px] hover:border-[#c6a35b] transition-all duration-300 flex flex-col justify-between hover:bg-[#ffffff] hover:shadow-[0_12px_28px_rgba(198,163,91,0.14)] hover:-translate-y-1 rounded-sm"
                    >
                      <div>
                        {/* Division Header */}
                        <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-black/[0.08]">
                          <div>
                            <span className="font-sans text-[11.5px] sm:text-[12px] font-bold text-[#7c5816] tracking-normal uppercase block mb-1">
                              {isKo ? `사업 부문 0${dIdx + 1}` : `DIVISION 0${dIdx + 1}`}
                            </span>
                            <h4 className="font-sans text-[18px] sm:text-[19px] font-bold text-[#7c5816] tracking-tight">
                              {getDivisionName(divItem, dIdx)}
                            </h4>
                          </div>
                          <div className="w-9 h-9 rounded-sm bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shrink-0 text-[#141413]">
                            <Icon className="w-4 h-4 text-[#7c5816]" />
                          </div>
                        </div>

                        {/* Division Role Summary */}
                        <p className="font-sans text-[13px] text-[#555555] leading-relaxed mb-5 font-normal">
                          {getDivisionRole(divItem, dIdx)}
                        </p>

                        {/* Teams & Sub-roles list */}
                        <div className="space-y-2.5">
                          <span className="font-sans text-[11.5px] sm:text-[12px] font-bold text-[#141413] tracking-tight block">
                            {isKo ? '주요 팀 및 핵심 역할' : 'KEY TEAMS & ROLES'}
                          </span>
                          <div className="space-y-2">
                            {subTeams.map((team: any, tIdx: number) => (
                              <div 
                                key={tIdx} 
                                className="p-2.5 bg-black/[0.025] rounded-sm border-l-2 border-[#c6a35b]/40 text-[12.5px]"
                              >
                                <div className="font-sans font-bold text-[#141413]">
                                  {getTeamName(team, dIdx, tIdx)}
                                </div>
                                <div className="font-sans text-[11.5px] text-[#666666] mt-0.5 leading-snug font-normal">
                                  {getTeamRole(team, dIdx, tIdx)}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* OUR STRENGTH SECTION (Unboxed with Enhanced Hover Animation Color) */}
            <div id="overview" className="scroll-mt-32">
              <div className="mb-8">
                <span className="font-sans text-[12px] sm:text-[13px] font-bold tracking-tight text-[#c6a35b] uppercase block mb-1.5">
                  {isKo ? '핵심 역량' : 'OUR STRENGTH'}
                </span>
                <h3 className="font-sans text-[22px] sm:text-[26px] text-[#7c5816] font-bold tracking-tight">
                  {lang === 'ko' ? '차별화된 핵심 경쟁력' : 'Core Competencies'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { num: '01', title: 'EXPERTISE', titleKo: '전문성', descKo: '금융, 개발, 자산운영의 전문 역량을 유기적으로 결합합니다.', descEn: 'Organically combining deep expertise across finance, development, and asset management.', icon: Target },
                  { num: '02', title: 'INTEGRATION', titleKo: '통합적 사고', descKo: '투자부터 운영까지 자산 전체의 관점에서 최적의 해답을 설계합니다.', descEn: 'Designing holistic solutions from investment inception through operational lifecycle.', icon: Layers },
                  { num: '03', title: 'EXECUTION', titleKo: '실행력', descKo: '전략에 머무르지 않고 현장의 의사결정과 실행까지 직접 연결합니다.', descEn: 'Translating strategic insights into decisive on-site execution and value realization.', icon: Zap },
                  { num: '04', title: 'TRUST', titleKo: '신뢰', descKo: '투명한 커뮤니케이션과 일관된 원칙으로 장기 파트너십을 구축합니다.', descEn: 'Forging lasting institutional partnerships through principled transparency and consistency.', icon: ShieldCheck },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="pt-6 pb-6 px-4 border-t-2 border-black/[0.12] hover:border-t-[3px] hover:border-[#c6a35b] transition-all duration-300 hover:bg-[#ffffff] hover:shadow-[0_12px_28px_rgba(198,163,91,0.14)] hover:-translate-y-1 rounded-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[12px] text-[#7c5816] font-bold">{item.num}</span>
                        <Icon className="w-5 h-5 text-[#141413]" />
                      </div>
                      <h4 className="font-serif text-[16px] font-bold text-[#7c5816] mb-2">
                        {lang === 'ko' ? item.titleKo : item.title}
                      </h4>
                      <p className="text-[12.5px] text-[#666666] leading-relaxed">
                        {lang === 'ko' ? item.descKo : item.descEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
