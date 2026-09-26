import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { BookOpen, TrendingUp, Calendar, ArrowRight, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const InsightsPage: React.FC = () => {
  const { lang } = useContent();
  const [activeTag, setActiveTag] = useState('ALL');
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const articles = [
    {
      id: 'insight-1',
      tag: 'MARKET TREND',
      titleKo: '2026 하반기 상업용 부동산 시장 전망 및 금리 인하에 따른 캡레이트(Cap Rate) 변화',
      titleEn: '2026 Commercial Real Estate Outlook & Cap Rate Dynamics Post Rate Cuts',
      date: '2026. 08. 28',
      author: 'XENIANS Research & Deal Team',
      descKo: '서울 프라임 오피스 시장의 공실률 추이와 금리 변동기에 적합한 가치부가형(Value-Add) 투자 전략을 심층 분석합니다.',
      descEn: 'An in-depth analysis of Seoul prime office vacancy rates and value-add investment opportunities in a shifting interest rate environment.',
      image: '/images/hero-seoul-skyline.jpg'
    },
    {
      id: 'insight-2',
      tag: 'DEVELOPMENT & PF',
      titleKo: 'PF 시장 재편과 시행사의 생존 전략: 수지분석 모델 고도화와 선분양 리스크 헷징',
      titleEn: 'PF Restructuring & Survival Strategies: Advanced Pro-Forma & Presale Risk Hedging',
      date: '2026. 08. 15',
      author: 'Development & Financial Engineering Div.',
      descKo: '단순 시공 중심에서 벗어나, 시행 관점의 정밀한 분양 전략 수립과 책임준공 리스크 통제 방안을 공유합니다.',
      descEn: 'Key risk mitigation frameworks for real estate developers focusing on pro-forma precision and early sell-out tactics.',
      image: '/images/pm-hero.png'
    },
    {
      id: 'insight-3',
      tag: 'HOSPITALITY & FM',
      titleKo: '위탁운영과 시설관리(FM)의 통합 시너지: 호텔·리조트 EBITDA 극대화 및 LCC 절감',
      titleEn: 'Integrated Synergy of Operations & FM: Maximizing EBITDA and Curtailing LCC',
      date: '2026. 07. 30',
      author: 'Hospitality & Asset Management Div.',
      descKo: 'F&B 리포지셔닝을 통한 객단가 상승과 BEMS 에너지 효율화를 통한 운영비 절감의 실제 사례를 소개합니다.',
      descEn: 'Case studies demonstrating operational revenue turnaround combined with smart facility management and energy savings.',
      image: '/images/ops-hero.png'
    }
  ];

  const tags = ['ALL', 'MARKET TREND', 'DEVELOPMENT & PF', 'HOSPITALITY & FM'];

  const filtered = activeTag === 'ALL' ? articles : articles.filter(a => a.tag === activeTag);

  return (
    <div className="flex flex-col bg-[#faf8f5] text-[#141413] min-h-screen selection:bg-[#c6a35b] selection:text-white">
      {/* 1. TOP HEADER BANNER */}
      <PageHeader
        title="XENIANS INSIGHTS"
        breadcrumb="INSIGHTS"
        subtitle="MARKET RESEARCH & INTELLIGENCE"
        imageSrc="/images/about-concrete-interior.jpg"
        imageAlt="Xenians Insights"
      />

      {/* Filter Tabs */}
      <div className="sticky top-20 md:top-24 z-40 bg-white/95 backdrop-blur-md border-b border-black/[0.06] px-4 md:px-[6vw] shadow-2xs">
        <div 
          className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 md:gap-3 overflow-x-auto py-3.5 no-scrollbar"
          onMouseLeave={() => setHoveredTag(null)}
        >
          {tags.map((t) => {
            const isActive = activeTag === t;
            const isHovered = hoveredTag === t;
            const isDimmed = hoveredTag !== null && !isHovered;

            return (
              <button
                key={t}
                onMouseEnter={() => setHoveredTag(t)}
                onClick={() => setActiveTag(t)}
                className={`cursor-pointer px-4.5 py-1.5 rounded-xs transition-all duration-300 shrink-0 text-[11px] md:text-[12px] font-mono tracking-wider font-semibold border-t-0 border-r-0 border-l-[3px] border-b-[2px] ${
                  isDimmed
                    ? 'opacity-30 blur-[0.6px] scale-[0.98] bg-transparent border-l-transparent border-b-transparent'
                    : isHovered || isActive
                      ? 'bg-gradient-to-br from-white via-[#faf6ed] to-[#f4e8cc] text-[#111111] border-l-[#c6a35b] border-b-[#9e7a32] shadow-[-3px_5px_15px_rgba(198,163,91,0.22)] -translate-y-0.5 translate-x-1 z-10'
                      : 'bg-transparent text-[#555555] border-l-transparent border-b-transparent hover:bg-gradient-to-br hover:from-white hover:via-[#faf6ed] hover:to-[#f4e8cc] hover:text-[#111111] hover:border-l-[#c6a35b] hover:border-b-[#9e7a32] hover:-translate-y-0.5 hover:translate-x-1 hover:shadow-[-3px_5px_15px_rgba(198,163,91,0.22)]'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Article List (Unboxed, direct on page background) */}
      <section className="py-20 md:py-28 px-6 md:px-[6vw] bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between transition-all duration-300 pt-5 pb-6 px-4 border-t-2 border-black/[0.12] hover:border-t-[3px] hover:border-[#c6a35b] hover:bg-[#ffffff] hover:shadow-[0_12px_28px_rgba(198,163,91,0.14)] hover:-translate-y-1 rounded-sm"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-black mb-5 rounded-xs">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#141413] text-white font-mono text-[9px] font-bold tracking-widest uppercase rounded-xs border border-[#c6a35b]/30">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-[#888888] mb-2.5">
                  <Calendar className="w-3.5 h-3.5 text-[#a18750]" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-serif text-[18px] md:text-[20px] text-[#9e7a32] font-bold mb-3 group-hover:text-[#b88c3a] transition-colors break-keep leading-snug">
                  {lang === 'ko' ? item.titleKo : item.titleEn}
                </h3>
                <p className="text-[13.5px] text-[#555555] leading-[1.8] font-normal line-clamp-3 break-keep">
                  {lang === 'ko' ? item.descKo : item.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.08] flex items-center justify-between text-[10.5px] font-mono tracking-widest text-[#a18750] uppercase font-bold">
                <span>{item.author}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
