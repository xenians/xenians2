import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { PageHeader } from '../components/PageHeader';
import { DetailedProject } from '../types';
import { DEFAULT_DETAILED_PROJECTS } from '../data/defaultProjects';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  CheckCircle2
} from 'lucide-react';

export const TrackRecordPage: React.FC = () => {
  const { data, lang } = useContent();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedModalProject, setSelectedModalProject] = useState<DetailedProject | null>(null);

  const projects: DetailedProject[] = (data.detailedProjects && data.detailedProjects.length > 0)
    ? data.detailedProjects
    : DEFAULT_DETAILED_PROJECTS;

  const validIndex = currentIndex < projects.length ? currentIndex : 0;
  const current = projects[validIndex] || projects[0] || DEFAULT_DETAILED_PROJECTS[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= projects.length - 1 ? 0 : prev + 1));
  };

  const isKo = lang === 'ko';

  // Helper functions for dynamic text resolution
  const getProjectTitle = (p: DetailedProject) => {
    if (isKo) {
      return p.titleKo || p.nameKo || p.name || p.titleEn || '';
    }
    return p.titleEn || p.name || p.titleKo || '';
  };

  const getProjectSubtitle = (p: DetailedProject) => {
    if (isKo) {
      return p.nameKo || (p.category === 'M&A' ? 'M&A 자문' : p.category === 'DEVELOPMENT' ? '복합개발 & PF' : p.category === 'OPERATION' ? '위탁운영' : p.category === 'FM' ? '스마트 시설관리' : '분양 마케팅');
    }
    return p.name || p.titleEn || p.category || '';
  };

  const getProjectLocation = (p: DetailedProject) => {
    if (isKo) {
      return p.locationKo || p.locationEn || '-';
    }
    return p.locationEn || p.locationKo || '-';
  };

  const getProjectScale = (p: DetailedProject) => {
    if (isKo) {
      return p.scaleKo || p.scaleEn || '-';
    }
    return p.scaleEn || p.scaleKo || '-';
  };

  const getProjectUse = (p: DetailedProject) => {
    if (isKo) {
      return p.useKo || p.roleKo || '-';
    }
    return p.useEn || p.roleEn || p.useKo || '-';
  };

  const getProjectGfa = (p: DetailedProject) => {
    if (isKo) {
      return p.gfaKo || p.scaleKo || '-';
    }
    return p.gfaEn || p.scaleEn || p.gfaKo || '-';
  };

  const getProjectContractor = (p: DetailedProject) => {
    if (isKo) {
      return p.contractorKo || p.roleKo || '-';
    }
    return p.contractorEn || p.roleEn || p.contractorKo || '-';
  };

  const getProjectDeveloper = (p: DetailedProject) => {
    if (isKo) {
      return p.developerKo || p.clientKo || '-';
    }
    return p.developerEn || p.clientEn || p.developerKo || '-';
  };

  const getProjectSummary = (p: DetailedProject) => {
    if (isKo) {
      return p.summaryKo || p.summaryEn || '';
    }
    return p.summaryEn || p.summaryKo || '';
  };

  const getProjectDetails = (p: DetailedProject): string[] => {
    if (isKo) {
      if (p.detailsKo && p.detailsKo.length > 0) return p.detailsKo;
      if (p.detailsEn && p.detailsEn.length > 0) return p.detailsEn;
      return [];
    }
    if (p.detailsEn && p.detailsEn.length > 0) return p.detailsEn;
    if (p.detailsKo && p.detailsKo.length > 0) return p.detailsKo;
    return [];
  };

  // Header labels
  const listTitle = isKo 
    ? (data.trackRecordHeader?.listTitleKo || '실적 프로젝트 목록')
    : (data.trackRecordHeader?.listTitleEn || 'PORTFOLIO LIST');

  const galleryTitle = isKo
    ? (data.trackRecordHeader?.galleryTitleKo || '전체 프로젝트 갤러리')
    : (data.trackRecordHeader?.galleryTitleEn || 'ALL PROJECTS GALLERY');

  const viewDetailBtnText = isKo
    ? (current.viewDetailBtnKo || data.trackRecordHeader?.viewDetailTextKo || '상세 실적 보기')
    : (current.viewDetailBtnEn || data.trackRecordHeader?.viewDetailTextEn || 'VIEW DETAIL');

  return (
    <div className="flex flex-col bg-[#f7f5f0] text-[#141413] min-h-screen selection:bg-[#c6a35b] selection:text-white">
      {/* 1. TOP HEADER BANNER (Night Skyline Forest Image) */}
      <PageHeader
        title={isKo ? (data.trackRecordHeader?.titleKo || "주요 실적 포트폴리오") : (data.trackRecordHeader?.titleEn || data.trackRecordHeader?.title || "Our Performance")}
        breadcrumb={isKo ? (data.trackRecordHeader?.subtitleKo || "PROJECTS / 실적 포트폴리오") : (data.trackRecordHeader?.subtitleEn || data.trackRecordHeader?.subtitle || "PORTFOLIO / TRACK RECORD")}
        imageSrc="/images/header-projects-night.jpg"
        imageAlt="Projects Portfolio Night Skyline"
      />

      {/* 2. MAIN PROJECTS SHOWCASE (Left list + Center Image + Right Meta Specs) */}
      <section className="py-16 md:py-24 px-6 md:px-[6vw]">
        <div className="max-w-[1500px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Numbered Project List & Section Overview */}
            <div className="lg:col-span-3 pr-0 lg:pr-3">
              <div className="mb-4 pb-3.5 border-b border-black/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#c6a35b] font-bold uppercase">
                  {listTitle}
                </span>
                <span className="text-[11px] font-mono text-[#888888] font-semibold">
                  {String(projects.length).padStart(2, '0')} {isKo ? 'PROJECTS' : 'PROJECTS'}
                </span>
              </div>

              {/* Left Column Description (Customizable via Admin Dashboard) */}
              {data.trackRecordHeader?.description && (
                <div className="mb-4 p-3 bg-black/[0.02] border border-black/[0.06] rounded-sm">
                  <p className="text-[12px] text-[#666666] leading-relaxed font-sans break-keep">
                    {data.trackRecordHeader.description}
                  </p>
                </div>
              )}

              <div className="flex flex-col space-y-1 max-h-[540px] overflow-y-auto pr-1.5">
                {projects.map((p, idx) => {
                  const isActive = idx === validIndex;
                  const displayNum = p.num || String(idx + 1).padStart(2, '0');
                  const displayName = getProjectTitle(p);
                  return (
                    <button
                      key={p.id || idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`group relative cursor-pointer w-full text-left py-3 px-3.5 rounded-md transition-all duration-300 flex items-center justify-between hover:translate-x-1.5 ${
                        isActive
                          ? 'bg-black/[0.04] text-[#141413]'
                          : 'text-[#444444] hover:bg-black/[0.025] hover:text-[#141413]'
                      }`}
                    >
                      {/* Active / Hover Dynamic Gold Indicator Bar */}
                      <span 
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-300 ${
                          isActive 
                            ? 'h-6 bg-[#c6a35b]' 
                            : 'h-0 bg-[#c6a35b] group-hover:h-4'
                        }`} 
                      />

                      <div className="flex items-center gap-3 pl-1.5 truncate">
                        <span
                          className={`font-mono text-[12px] font-bold transition-colors duration-300 shrink-0 ${
                            isActive ? 'text-[#c6a35b]' : 'text-[#888888] group-hover:text-[#c6a35b]'
                          }`}
                        >
                          {displayNum}
                        </span>
                        <span
                          className={`font-sans text-[14px] sm:text-[14.5px] transition-all duration-300 truncate ${
                            isActive
                              ? 'font-bold text-[#141413]'
                              : 'font-medium text-[#444444] group-hover:text-[#141413] group-hover:font-semibold'
                          }`}
                        >
                          {displayName}
                        </span>
                      </div>
                      <span 
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#c6a35b] scale-125' 
                            : 'bg-transparent group-hover:bg-[#c6a35b]/60'
                        }`} 
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Center Column: Large Featured Project Photo */}
            <div className="lg:col-span-5">
              <div className="w-full h-[360px] sm:h-[440px] md:h-[500px] bg-black rounded-sm overflow-hidden border border-black/[0.08] shadow-md relative group">
                <img
                  src={current.image}
                  alt={getProjectTitle(current)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/hero-seoul-skyline.jpg';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#141413]/80 backdrop-blur-md text-[#c6a35b] font-mono text-[10.5px] font-bold border border-white/10 uppercase tracking-widest">
                    {current.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Project Spec Details & Meta Table */}
            <div className="lg:col-span-4 flex flex-col justify-between min-h-[500px] pl-0 lg:pl-3">
              <div>
                {/* Title and Description */}
                <div className="mb-5 pb-4 border-b border-black/[0.08]">
                  <h2 className="font-serif text-[24px] sm:text-[28px] text-[#9e7a32] font-bold tracking-tight leading-tight">
                    {getProjectTitle(current)}
                  </h2>
                  {getProjectSubtitle(current) && (
                    <p className="text-[13.5px] text-[#777777] mt-1 font-medium">
                      {getProjectSubtitle(current)}
                    </p>
                  )}
                  {/* Detailed Description / Summary directly visible on page */}
                  {getProjectSummary(current) && (
                    <div className="mt-3 p-3.5 bg-black/[0.025] rounded border border-black/[0.06]">
                      <p className="text-[13px] text-[#444444] leading-relaxed font-sans break-keep">
                        {getProjectSummary(current)}
                      </p>
                    </div>
                  )}
                </div>

                {/* Specs Grid */}
                <div className="space-y-2 text-[13px] font-sans">
                  <div className="grid grid-cols-12 py-2 border-b border-black/[0.06]">
                    <span className="col-span-4 font-mono text-[#888888] font-semibold text-[11px] uppercase tracking-wider">{lang === 'en' ? 'LOCATION' : '위치'}</span>
                    <span className="col-span-8 text-[#141413] font-medium">{getProjectLocation(current)}</span>
                  </div>
                  <div className="grid grid-cols-12 py-2 border-b border-black/[0.06]">
                    <span className="col-span-4 font-mono text-[#888888] font-semibold text-[11px] uppercase tracking-wider">{lang === 'en' ? 'SCALE' : '규모'}</span>
                    <span className="col-span-8 text-[#141413] font-medium">{getProjectScale(current)}</span>
                  </div>
                  <div className="grid grid-cols-12 py-2 border-b border-black/[0.06]">
                    <span className="col-span-4 font-mono text-[#888888] font-semibold text-[11px] uppercase tracking-wider">{lang === 'en' ? 'USE' : '용도'}</span>
                    <span className="col-span-8 text-[#141413] font-medium">{getProjectUse(current)}</span>
                  </div>
                  <div className="grid grid-cols-12 py-2 border-b border-black/[0.06]">
                    <span className="col-span-4 font-mono text-[#888888] font-semibold text-[11px] uppercase tracking-wider">{lang === 'en' ? 'GFA' : '연면적'}</span>
                    <span className="col-span-8 text-[#141413] font-medium">{getProjectGfa(current)}</span>
                  </div>
                  <div className="grid grid-cols-12 py-2 border-b border-black/[0.06]">
                    <span className="col-span-4 font-mono text-[#888888] font-semibold text-[11px] uppercase tracking-wider">{lang === 'en' ? 'ROLE / BUILD' : '시공 / 역할'}</span>
                    <span className="col-span-8 text-[#141413] font-medium">{getProjectContractor(current)}</span>
                  </div>
                  <div className="grid grid-cols-12 py-2 border-b border-black/[0.06]">
                    <span className="col-span-4 font-mono text-[#888888] font-semibold text-[11px] uppercase tracking-wider">{lang === 'en' ? 'CLIENT / DEV' : '시행 / 고객사'}</span>
                    <span className="col-span-8 text-[#141413] font-medium">{getProjectDeveloper(current)}</span>
                  </div>
                  <div className="grid grid-cols-12 py-2 border-b border-black/[0.06]">
                    <span className="col-span-4 font-mono text-[#888888] font-semibold text-[11px] uppercase tracking-wider">{lang === 'en' ? 'COMPLETION' : '기간 / 준공'}</span>
                    <span className="col-span-8 text-[#141413] font-medium">{current.completionYear || current.year || '-'}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions & Pagination */}
              <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between">
                <button
                  onClick={() => setSelectedModalProject(current)}
                  className="cursor-pointer px-6 py-3 bg-[#141413] hover:bg-[#a18750] text-white font-mono text-[11px] tracking-[0.2em] uppercase rounded-sm transition-all duration-300 font-bold"
                >
                  {viewDetailBtnText}
                </button>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] font-bold text-[#141413]">
                    {current.num || String(validIndex + 1).padStart(2, '0')} <span className="text-black/30 font-normal">/ {String(projects.length).padStart(2, '0')}</span>
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrev}
                      className="cursor-pointer w-8 h-8 rounded-sm bg-[#f7f5f0] hover:bg-[#141413] hover:text-white border border-black/[0.08] flex items-center justify-center text-[#141413] transition-colors"
                      title="Previous Project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="cursor-pointer w-8 h-8 rounded-sm bg-[#f7f5f0] hover:bg-[#141413] hover:text-white border border-black/[0.08] flex items-center justify-center text-[#141413] transition-colors"
                      title="Next Project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 3. BOTTOM THUMBNAILS ROW */}
          <div className="mt-12 pt-8 border-t border-black/[0.08]">
            <span className="text-[10.5px] font-mono tracking-[0.3em] text-[#a18750] font-bold uppercase block mb-4">
              {galleryTitle}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3">
              {projects.map((p, idx) => {
                const isActive = idx === validIndex;
                const displayNum = p.num || String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={p.id || idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`cursor-pointer relative h-20 rounded-sm overflow-hidden border transition-all duration-300 group ${
                      isActive ? 'ring-2 ring-[#c6a35b] border-transparent scale-102 shadow-md' : 'border-black/[0.1] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={getProjectTitle(p)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/hero-seoul-skyline.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-1.5 left-2 font-mono text-[9.5px] font-bold text-white tracking-widest drop-shadow-sm">
                      {displayNum}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* MODAL POPUP FOR DETAILED CASE STUDY (VIEW DETAIL) */}
      {selectedModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedModalProject(null)}
        >
          <div 
            className="bg-white max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl border border-black/20 p-8 sm:p-10 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedModalProject(null)}
              className="cursor-pointer absolute top-6 right-6 p-2 rounded-full bg-[#f7f5f0] hover:bg-black hover:text-white text-[#141413] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#141413] text-[#c6a35b] font-mono text-[10.5px] font-bold uppercase tracking-widest inline-block mb-4">
              {selectedModalProject.category}
            </span>

            <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#9e7a32] mb-1.5">
              {getProjectTitle(selectedModalProject)}
            </h3>
            {getProjectSubtitle(selectedModalProject) && (
              <p className="text-[14px] text-[#777777] mb-5 font-medium">
                {getProjectSubtitle(selectedModalProject)}
              </p>
            )}

            {/* Modal Summary / Description */}
            {getProjectSummary(selectedModalProject) && (
              <div className="p-4 bg-[#f7f5f0] rounded-sm mb-6 border border-black/[0.06]">
                <p className="text-[14.5px] text-[#333333] leading-relaxed break-keep">
                  {getProjectSummary(selectedModalProject)}
                </p>
              </div>
            )}

            {/* Highlights Section Title */}
            <h4 className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#9e7a32] uppercase mb-3">
              {isKo 
                ? (selectedModalProject.highlightsTitleKo || '주요 수행 실적 및 핵심 성과')
                : (selectedModalProject.highlightsTitleEn || 'KEY HIGHLIGHTS & EXECUTION')}
            </h4>

            {/* Highlights List */}
            <div className="space-y-2.5 mb-8">
              {getProjectDetails(selectedModalProject).map((dt, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 text-[13.5px] text-[#444444]">
                  <CheckCircle2 className="w-4 h-4 text-[#a18750] shrink-0 mt-0.5" />
                  <span className="break-keep">{dt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedModalProject(null)}
              className="cursor-pointer w-full py-3.5 bg-[#141413] text-white font-mono text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-[#a18750] transition-colors"
            >
              {isKo ? '닫기' : 'CLOSE'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
