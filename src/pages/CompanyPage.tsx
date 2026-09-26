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
        title={isKo ? "제니안스 그룹 소개" : "ABOUT XENIANS"}
        breadcrumb={isKo ? "ABOUT / 회사소개" : "ABOUT"}
        imageSrc="/images/header-about.jpg"
        imageAlt="About Xenians"
      />

      {/* 2. MAIN CONTENT (Left Nav + Right Editorial Content) */}
      <section className="py-16 md:py-24 px-6 md:px-[6vw]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Vertical Sidebar / Table of Contents (Unboxed, Direct on Background with Refined Hover Animation) */}
          <div className="lg:col-span-3 lg:sticky lg:top-32 pr-0 lg:pr-4">
            <div className="mb-6 pb-4 border-b border-black/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#c6a35b] font-bold uppercase">
                {isKo ? '제니안스 소개' : 'ABOUT XENIANS'}
              </span>
              <span className="text-[11px] font-mono text-[#888888] font-semibold">
                {isKo ? '03개 섹션' : '03 SECTIONS'}
              </span>
            </div>
            
            <nav className="space-y-1.5">
              {[
                { id: 'ceo', label: 'CEO MESSAGE', labelKo: 'CEO 메시지' },
                { id: 'org', label: 'ORGANIZATION', labelKo: '조직도' },
                { id: 'overview', label: 'OUR STRENGTH', labelKo: '핵심 역량' },
              ].map((item, idx) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id as any);
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`group relative cursor-pointer w-full text-left py-3.5 px-4 rounded-md transition-all duration-300 flex items-center justify-between hover:translate-x-2 border border-transparent ${
                      isActive
                        ? 'bg-white text-[#141413] shadow-[0_4px_16px_rgba(198,163,91,0.14)] border-[#c6a35b]/40'
                        : 'text-[#444444] hover:bg-white hover:text-[#141413] hover:shadow-xs hover:border-black/[0.06]'
                    }`}
                  >
                    {/* Active / Hover Dynamic Gold Indicator Bar */}
                    <span 
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[4px] rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'h-8 bg-[#c6a35b] shadow-xs' 
                          : 'h-0 bg-[#c6a35b] group-hover:h-6'
                      }`} 
                    />

                    <div className="flex items-center gap-3 pl-2">
                      <span
                        className={`font-mono text-[12px] font-bold transition-colors duration-300 ${
                          isActive ? 'text-[#c6a35b]' : 'text-[#888888] group-hover:text-[#c6a35b]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-sans text-[15px] sm:text-[15.5px] transition-all duration-300 ${
                          isActive
                            ? 'font-bold text-[#141413]'
                            : 'font-medium text-[#444444] group-hover:text-[#141413] group-hover:font-semibold'
                        }`}
                      >
                        {lang === 'ko' ? item.labelKo : item.label}
                      </span>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 shrink-0 ${
                        isActive
                          ? 'text-[#c6a35b] translate-x-1 opacity-100'
                          : 'text-[#c6a35b] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-black/[0.08] font-sans text-[13px] text-[#666666] leading-relaxed break-keep">
              <p className="font-semibold text-[#141413] mb-1 font-mono text-[12px]">XENIANS INC.</p>
              <p>{lang === 'ko' ? '글로벌 부동산 투자 및 종합 자산 자문 그룹' : 'Real Estate Investment & Advisory Group'}</p>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-9 space-y-16 sm:space-y-20">
            
            {/* CEO MESSAGE SECTION (Unboxed, Sitting Directly on Page Background) */}
            <div id="ceo" className="pb-16 border-b border-black/[0.08] scroll-mt-32">
              <div className="max-w-3xl">
                <span className="text-[10.5px] font-mono tracking-[0.3em] text-[#c6a35b] font-bold uppercase block mb-3">
                  CEO MESSAGE
                </span>
                <div className="w-12 h-[2px] bg-[#c6a35b] mb-8" />

                <h2 className="font-serif text-[24px] sm:text-[30px] md:text-[34px] text-[#9e7a32] font-medium leading-[1.35] mb-8 break-keep">
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
                <span className="text-[10.5px] font-mono tracking-[0.3em] text-[#c6a35b] font-bold uppercase block mb-2">
                  {isKo ? '조직 체계' : 'ORGANIZATION STRUCTURE'}
                </span>
                <h3 className="font-serif text-[22px] sm:text-[26px] text-[#9e7a32] font-medium">
                  {isKo ? '제니안스 그룹 조직 체계' : 'XENIANS Group Organization'}
                </h3>
                <p className="text-[14px] text-[#666666] mt-2">
                  {isKo 
                    ? '전문성과 유기적인 협업을 바탕으로 최고의 시너지를 창출하는 4대 핵심 사업 부문' 
                    : '4 Core Divisions maximizing strategic synergies through deep expertise and agile collaboration'}
                </p>
              </div>

              {/* Top Executive Node */}
              <div className="flex flex-col items-center mb-10">
                <div className="w-full max-w-sm py-4 px-6 bg-[#141413] text-white rounded-sm text-center shadow-sm border border-black/[0.15]">
                  <span className="font-mono text-[10.5px] tracking-[0.25em] text-[#c6a35b] uppercase font-bold block mb-0.5">
                    {isKo ? '총괄 경영진' : 'EXECUTIVE LEADERSHIP'}
                  </span>
                  <span className="font-serif text-[17px] font-medium tracking-wider text-[#dfbe7a]">
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
                            <span className="font-mono text-[10px] tracking-widest text-[#a18750] font-bold uppercase block mb-1">
                              {isKo ? `사업 부문 0${dIdx + 1}` : `DIVISION 0${dIdx + 1}`}
                            </span>
                            <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#9e7a32]">
                              {getDivisionName(divItem, dIdx)}
                            </h4>
                          </div>
                          <div className="w-9 h-9 rounded-sm bg-black/[0.04] border border-black/[0.08] flex items-center justify-center shrink-0 text-[#141413]">
                            <Icon className="w-4 h-4 text-[#a18750]" />
                          </div>
                        </div>

                        {/* Division Role Summary */}
                        <p className="text-[13px] text-[#555555] leading-relaxed mb-5">
                          {getDivisionRole(divItem, dIdx)}
                        </p>

                        {/* Teams & Sub-roles list */}
                        <div className="space-y-2.5">
                          <span className="font-mono text-[10px] tracking-[0.2em] text-[#141413] uppercase font-bold block">
                            {isKo ? '주요 팀 및 핵심 역할' : 'KEY TEAMS & ROLES'}
                          </span>
                          <div className="space-y-2">
                            {subTeams.map((team: any, tIdx: number) => (
                              <div 
                                key={tIdx} 
                                className="p-2.5 bg-black/[0.025] rounded-sm border-l-2 border-[#c6a35b]/40 text-[12.5px]"
                              >
                                <div className="font-semibold text-[#141413]">
                                  {getTeamName(team, dIdx, tIdx)}
                                </div>
                                <div className="text-[11.5px] text-[#666666] mt-0.5 leading-snug">
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
                <span className="text-[10.5px] font-mono tracking-[0.3em] text-[#c6a35b] font-bold uppercase block mb-2">
                  {isKo ? '핵심 역량' : 'OUR STRENGTH'}
                </span>
                <h3 className="font-serif text-[22px] sm:text-[26px] text-[#9e7a32] font-medium">
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
                        <span className="font-mono text-[12px] text-[#a18750] font-bold">{item.num}</span>
                        <Icon className="w-5 h-5 text-[#141413]" />
                      </div>
                      <h4 className="font-serif text-[16px] font-bold text-[#9e7a32] mb-2">
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
