import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  ArrowRight,
  Handshake,
  Building2,
  TrendingUp,
  UserCheck,
  Settings,
  MessageSquare,
  Phone,
  Mail,
  ArrowUp,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useContent } from '../context/ContentContext';
import { MagneticButton } from './MagneticButton';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, lang, setLang } = useContent();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { scrollY } = useScroll();

  // Helper to dynamically get navigation menu names customized in Admin Dashboard
  const getNavLabel = (path: string, fallbackKo: string, fallbackEn: string) => {
    const custom = data.navigation?.find((n) => n.path === path);
    if (custom?.name && custom.name.trim() !== '') {
      return custom.name;
    }
    return lang === 'ko' ? fallbackKo : fallbackEn;
  };

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 30);
      setShowBackToTop(latest > 400);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Close mobile menu and dropdown on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsBusinessOpen(false);
  }, [location.pathname]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsBusinessOpen(false);
  };

  const navLinks = [
    { nameKo: 'ABOUT', nameEn: 'ABOUT', path: '/company' },
    { nameKo: 'BUSINESS', nameEn: 'BUSINESS', path: '/business', isDropdown: true },
    { nameKo: 'PROJECTS', nameEn: 'PROJECTS', path: '/projects' },
    { nameKo: 'INSIGHTS', nameEn: 'INSIGHTS', path: '/insights' },
    { nameKo: 'CONTACT', nameEn: 'CONTACT', path: '/contact' },
  ];

  const businessDivisions = [
    { key: 'mna', labelKo: '01 M&A 자문', labelEn: '01 M&A Advisory', subKo: '가치를 중심으로 설계하는 전략적 거래', subEn: 'Strategic Transactions & Valuation', icon: Handshake, path: '/business/mna' },
    { key: 'development', labelKo: '02 시행 · 개발', labelEn: '02 Development & PM', subKo: '자본 구조에서 프로젝트 완성까지', subEn: 'Master Planning & PF Structuring', icon: Building2, path: '/business/development' },
    { key: 'sales', labelKo: '03 분양대행', labelEn: '03 Strategic Sales', subKo: '시행 관점의 수지분석 및 완판 전략', subEn: 'Data-driven Presale Execution', icon: TrendingUp, path: '/business/sales' },
    { key: 'operation', labelKo: '04 위탁운영', labelEn: '04 Hospitality Ops', subKo: '호텔·리조트·상업시설 수익 극대화', subEn: 'Turnaround & Revenue Management', icon: UserCheck, path: '/business/operation' },
    { key: 'fm', labelKo: '05 시설관리', labelEn: '05 Facility Management', subKo: '위탁운영 연계형 스마트 FM & LCC', subEn: 'Smart FM & LCC Optimization', icon: Settings, path: '/business/fm' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#141413] font-sans selection:bg-[#c6a35b] selection:text-white">
      {/* FIXED HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 h-20 md:h-24 z-50 transition-all duration-300 px-4 sm:px-6 md:px-[6vw] flex items-center justify-between gap-2 sm:gap-4",
          isScrolled 
            ? "bg-[#ffffff]/92 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.03)] text-[#141413]" 
            : "bg-gradient-to-b from-white/95 via-white/70 to-transparent text-[#141413] pt-2"
        )}
      >
        {/* Brand Logo with Platform Subtitle */}
        <Link 
          to="/" 
          onClick={handleNavClick}
          className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4 group shrink min-w-0 z-10"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
            <img 
              src="/images/logo.png" 
              alt="Xenians Group" 
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/로고.png";
              }}
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span 
              className="font-sans text-[15px] sm:text-[18px] md:text-[21px] font-extrabold tracking-[0.03em] sm:tracking-[0.05em] text-[#141413] leading-none truncate"
            >
              XENIANS GROUP
            </span>
            <span className="font-mono text-[7px] sm:text-[8.5px] md:text-[9.5px] tracking-[0.14em] sm:tracking-[0.25em] text-[#a18750] font-bold uppercase mt-1 sm:mt-1.5 leading-none truncate">
              REAL ESTATE BUSINESS PLATFORM
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-[12px] xl:text-[12.5px] font-mono tracking-[0.18em] font-medium">
          {navLinks.map((item) => {
            if (item.isDropdown) {
              const isBusinessActive = location.pathname.startsWith('/business');
              return (
                <div
                  key={item.path}
                  className="relative h-full py-7 flex items-center"
                  onMouseEnter={() => setIsBusinessOpen(true)}
                  onMouseLeave={() => setIsBusinessOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    onClick={handleNavClick}
                    className={cn(
                      "group relative flex items-center gap-1.5 py-1.5 px-3.5 rounded-full transition-all duration-300 font-semibold",
                      isBusinessActive 
                        ? "text-[#a18750] bg-[#c6a35b]/15 shadow-2xs font-bold" 
                        : "text-[#1f1f1e] hover:text-[#a18750] hover:bg-[#c6a35b]/12 hover:shadow-2xs hover:scale-105"
                    )}
                  >
                    <span className="relative z-10 transition-colors">{getNavLabel(item.path, item.nameKo, item.nameEn)}</span>
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-all duration-300 text-[#a18750] group-hover:translate-y-0.5", isBusinessOpen && "rotate-180 text-[#c6a35b]")} />
                    
                    {/* Bottom subtle gold accent line on hover & active */}
                    <span className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#c6a35b] transition-all duration-300 rounded-full",
                      isBusinessActive ? "w-[60%]" : "w-0 group-hover:w-[60%]"
                    )} />
                  </NavLink>

                  {/* Business 5-Division Architectural Luxury Flyout */}
                  <AnimatePresence>
                    {isBusinessOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.985 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-[42%] xl:-translate-x-1/2 w-[700px] bg-white text-[#141413] border border-[#c6a35b]/45 shadow-[0_32px_75px_-15px_rgba(0,0,0,0.3),0_0_0_1px_rgba(198,163,91,0.2)] z-50 rounded-xl overflow-hidden flex flex-col"
                      >
                        {/* Invisible hover bridge to prevent any cursor drop-off */}
                        <div className="absolute -top-3 inset-x-0 h-4 pointer-events-auto" />

                        {/* Top Hairline Metallic Accent Bar */}
                        <div className="h-[3px] w-full bg-gradient-to-r from-[#dfbe7a]/30 via-[#c6a35b] to-[#dfbe7a]/30" />

                        {/* Split Architectural Container */}
                        <div className="flex">
                          {/* Left Brand Vision & Matrix Showcase (approx 230px) */}
                          <div className="w-[230px] shrink-0 bg-gradient-to-b from-[#181816] via-[#141413] to-[#0f0f0e] text-white p-5 flex flex-col justify-between relative overflow-hidden border-r border-[#262624]">
                            {/* Subtle gold glow watermark */}
                            <div className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-[#c6a35b]/10 blur-2xl" />

                            {/* Top Tag */}
                            <div className="relative z-10">
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c6a35b] shadow-[0_0_8px_rgba(198,163,91,0.8)]" />
                                <span className="font-mono text-[9px] tracking-[0.25em] text-[#c6a35b] uppercase font-bold">
                                  VALUE CHAIN
                                </span>
                              </div>
                              <div className="mt-4">
                                <h4 className="font-sans text-[15px] font-bold text-white leading-snug tracking-tight">
                                  {lang === 'ko' ? (
                                    <>
                                      부동산 생애주기
                                      <br />
                                      전체 통합 플랫폼
                                    </>
                                  ) : (
                                    <>
                                      Integrated
                                      <br />
                                      Real Estate Matrix
                                    </>
                                  )}
                                </h4>
                                <p className="mt-2 text-[11px] font-sans text-neutral-400 leading-relaxed font-light">
                                  {lang === 'ko' 
                                    ? '기획·인수부터 개발, 분양, 운영 및 FM까지 유기적으로 연계된 5대 핵심 사업부'
                                    : 'End-to-end execution across 5 specialized divisions for maximum asset value.'}
                                </p>
                              </div>
                            </div>

                            {/* Middle Metric Badge */}
                            <div className="relative z-10 my-4 py-3 border-y border-white/[0.08]">
                              <div className="flex items-center justify-between text-[10px] font-mono text-[#c6a35b]">
                                <span>01 — 05 DIVISIONS</span>
                                <span className="text-neutral-400">ONE-STOP</span>
                              </div>
                            </div>

                            {/* Bottom Overview CTA */}
                            <div className="relative z-10 pt-1">
                              <Link
                                to="/business"
                                onClick={handleNavClick}
                                className="group/btn flex items-center justify-between text-[11.5px] font-mono tracking-wider text-[#dfbe7a] hover:text-white transition-all py-1 px-1.5 rounded hover:bg-white/5"
                              >
                                <span className="font-semibold group-hover/btn:translate-x-0.5 transition-transform">{lang === 'ko' ? '사업부 전체보기' : 'VIEW ALL'}</span>
                                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-[#c6a35b] group-hover/btn:border-[#c6a35b] group-hover/btn:text-[#141413] group-hover/btn:scale-110 transition-all shadow-xs">
                                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                </div>
                              </Link>
                            </div>
                          </div>

                          {/* Right Divisions List (470px) */}
                          <div className="flex-1 bg-gradient-to-b from-[#ffffff] to-[#faf8f5] flex flex-col justify-between">
                            {/* Header Row */}
                            <div className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-black/[0.04]">
                              <span className="text-[9.5px] font-mono tracking-[0.2em] text-[#8e8a80] uppercase font-semibold">
                                CORE SPECIALIZATIONS
                              </span>
                              <span className="text-[9.5px] font-mono text-[#a18750] tracking-wider uppercase font-medium">
                                5 DIVISIONS
                              </span>
                            </div>

                            {/* 5 Division Links */}
                            <div className="p-2 space-y-1">
                              {businessDivisions.map((div, idx) => {
                                const DivIcon = div.icon;
                                const isDivActive = location.pathname === div.path;
                                const numStr = String(idx + 1).padStart(2, '0');
                                const titleKo = div.labelKo.replace(/^\d+\s*/, '');
                                const titleEn = div.labelEn.replace(/^\d+\s*/, '');

                                return (
                                  <Link
                                    key={div.key}
                                    to={div.path}
                                    onClick={handleNavClick}
                                    className={cn(
                                      "group relative px-3.5 py-2.5 rounded-lg flex items-center justify-between transition-all duration-200 border border-transparent",
                                      isDivActive
                                        ? "bg-[#f5ede0] border-[#c6a35b]/50 shadow-xs"
                                        : "hover:bg-[#f6ede0] hover:border-[#c6a35b]/60 hover:shadow-md hover:-translate-y-0.5"
                                    )}
                                  >
                                    {/* Left accent indicator - prominent glow on hover */}
                                    <div
                                      className={cn(
                                        "absolute left-0 inset-y-1.5 w-1 rounded-r transition-all duration-200",
                                        isDivActive 
                                          ? "bg-[#c6a35b] opacity-100 w-1.5 shadow-[0_0_8px_rgba(198,163,91,0.6)]" 
                                          : "bg-[#c6a35b] opacity-0 group-hover:opacity-100 group-hover:w-1.5 group-hover:shadow-[0_0_8px_rgba(198,163,91,0.6)]"
                                      )}
                                    />

                                    <div className="flex items-center gap-3.5 min-w-0">
                                      {/* Architectural Icon Box */}
                                      <div className={cn(
                                        "w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 border",
                                        isDivActive
                                          ? "bg-[#141413] text-[#c6a35b] border-[#141413] shadow-xs scale-105"
                                          : "bg-[#f5f2ea] text-[#555555] border-black/[0.05] group-hover:bg-[#141413] group-hover:text-[#c6a35b] group-hover:border-[#c6a35b] group-hover:shadow-xs group-hover:scale-110"
                                      )}>
                                        <DivIcon className="w-3.5 h-3.5 stroke-[1.75]" />
                                      </div>

                                      {/* Text Container */}
                                      <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className={cn(
                                            "font-mono text-[11px] font-bold tracking-wider transition-colors shrink-0",
                                            isDivActive ? "text-[#a18750]" : "text-[#a18750] group-hover:text-[#c6a35b] group-hover:font-extrabold"
                                          )}>
                                            {numStr}
                                          </span>
                                          <span className="font-sans font-bold text-[13px] text-[#1a1a19] group-hover:text-[#9e7a32] transition-colors tracking-tight truncate">
                                            {lang === 'ko' ? titleKo : titleEn}
                                          </span>
                                          <span className="font-mono text-[9px] text-[#9a958b] group-hover:text-[#a18750] tracking-wider uppercase font-medium truncate transition-colors">
                                            {lang === 'ko' ? titleEn : ''}
                                          </span>
                                        </div>
                                        <p className="text-[11px] font-sans text-[#666666] group-hover:text-[#222222] transition-colors truncate mt-0.5 font-normal">
                                          {lang === 'ko' ? div.subKo : div.subEn}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Right Action Arrow */}
                                    <div className="flex items-center pl-2 shrink-0">
                                      <div className={cn(
                                        "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200",
                                        isDivActive
                                          ? "text-[#141413] bg-[#c6a35b] shadow-xs"
                                          : "text-black/25 group-hover:text-[#141413] group-hover:bg-[#c6a35b] group-hover:scale-110 group-hover:shadow-xs group-hover:translate-x-0.5"
                                      )}>
                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform" />
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={cn(
                  "group relative py-1.5 px-3.5 rounded-full transition-all duration-300 font-semibold",
                  isActive 
                    ? "text-[#a18750] bg-[#c6a35b]/15 shadow-2xs font-bold" 
                    : "text-[#1f1f1e] hover:text-[#a18750] hover:bg-[#c6a35b]/12 hover:shadow-2xs hover:scale-105"
                )}
              >
                <span className="relative z-10 transition-colors">{getNavLabel(item.path, item.nameKo, item.nameEn)}</span>
                
                {/* Bottom subtle gold accent line on hover & active */}
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#c6a35b] transition-all duration-300 rounded-full",
                  isActive ? "w-[60%]" : "w-0 group-hover:w-[60%]"
                )} />
              </NavLink>
            );
          })}
        </nav>

        {/* Right Tools: Language Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3.5 md:gap-5 shrink-0 z-10">
          {/* Language Toggle */}
          <div className="flex items-center font-mono text-[9.5px] sm:text-[10.5px] md:text-[11px] tracking-wider text-[#555555] bg-white border border-black/10 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 shadow-2xs shrink-0">
            <button
              onClick={() => setLang('ko')}
              className={cn(
                "cursor-pointer px-1.5 sm:px-2 py-0.5 rounded-full transition-colors font-medium",
                lang === 'ko' ? "text-[#a18750] font-bold bg-[#faf8f5]" : "hover:text-black"
              )}
            >
              KR
            </button>
            <span className="text-black/20 mx-0.5">|</span>
            <button
              onClick={() => setLang('en')}
              className={cn(
                "cursor-pointer px-1.5 sm:px-2 py-0.5 rounded-full transition-colors font-medium",
                lang === 'en' ? "text-[#a18750] font-bold bg-[#faf8f5]" : "hover:text-black"
              )}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="cursor-pointer lg:hidden p-2 sm:p-2.5 text-[#141413] rounded-md bg-white border border-black/10 shadow-2xs hover:bg-[#faf8f5] shrink-0 touch-manipulation active:scale-95 transition-transform"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#141413]" /> : <Menu className="w-5 h-5 text-[#141413]" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU MODAL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 bg-[#ffffff] border-t border-black/10 px-5 py-6 sm:p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="space-y-4 pt-1">
              <Link
                to="/company"
                onClick={handleNavClick}
                className="block font-serif text-[19px] sm:text-[22px] text-[#141413] hover:text-[#9e7a32] hover:translate-x-1.5 transition-all font-medium py-1"
              >
                {getNavLabel('/company', '회사소개 (ABOUT)', 'ABOUT XENIANS')}
              </Link>

              {/* Business Section in Mobile Menu */}
              <div className="border-t border-b border-black/10 py-3 my-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#a18750] uppercase font-bold">
                    {getNavLabel('/business', 'BUSINESS', 'BUSINESS')}
                  </span>
                  <Link 
                    to="/business"
                    onClick={handleNavClick}
                    className="text-[10.5px] font-mono text-[#888888] hover:text-[#9e7a32] font-semibold"
                  >
                    {lang === 'ko' ? '전체보기' : 'VIEW ALL'} →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-1">
                  {businessDivisions.map((div) => (
                    <Link
                      key={div.key}
                      to={div.path}
                      onClick={handleNavClick}
                      className="py-2 px-2.5 rounded-md text-[13.5px] text-[#333333] hover:text-[#9e7a32] hover:bg-[#c6a35b]/10 hover:translate-x-1 transition-all flex items-center justify-between font-medium"
                    >
                      <span>{lang === 'ko' ? div.labelKo : div.labelEn}</span>
                      <span className="text-[11px] font-mono text-[#a18750] font-bold">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/projects"
                onClick={handleNavClick}
                className="block font-serif text-[19px] sm:text-[22px] text-[#141413] hover:text-[#9e7a32] hover:translate-x-1.5 transition-all font-medium py-1"
              >
                {getNavLabel('/projects', '프로젝트 실적 (PROJECTS)', 'PROJECTS & TRACK RECORD')}
              </Link>

              <Link
                to="/insights"
                onClick={handleNavClick}
                className="block font-serif text-[19px] sm:text-[22px] text-[#141413] hover:text-[#9e7a32] hover:translate-x-1.5 transition-all font-medium py-1"
              >
                {getNavLabel('/insights', '인사이트 (INSIGHTS)', 'INSIGHTS')}
              </Link>

              <Link
                to="/contact"
                onClick={handleNavClick}
                className="block font-serif text-[19px] sm:text-[22px] text-[#141413] hover:text-[#9e7a32] hover:translate-x-1.5 transition-all font-medium py-1"
              >
                {getNavLabel('/contact', '글로벌 오피스 (CONTACT)', 'CONTACT US')}
              </Link>
            </div>

            <div className="pt-6 border-t border-black/10 text-[#666666] font-mono text-[10px] flex items-center justify-between">
              <p>Copyright@XENIANS Inc. All Rights Reserved.</p>
              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsPrivacyOpen(true);
                  }}
                  className="hover:text-black font-sans cursor-pointer underline underline-offset-2"
                >
                  {lang === 'ko' ? '개인정보처리방침' : 'PRIVACY POLICY'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT OUTLET */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FLOATING BACK TO TOP BUTTON (Floating inquiry button removed per user request) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="cursor-pointer w-11 h-11 rounded-full bg-white/95 text-[#141413] hover:bg-[#a18750] hover:text-white border border-black/10 shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* FOOTER (Exact Layout from Reference Image) */}
      <footer className="bg-[#0f0f0e] text-[#ffffff]/70 border-t border-white/10 pt-16 pb-12 px-6 md:px-[6vw]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Left: Emblem & Brand Wordmark */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" onClick={handleNavClick} className="inline-flex items-center gap-4 sm:gap-4.5 md:gap-5 group">
                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/images/logo.png" 
                    alt="Xenians Group Emblem" 
                    className="w-full h-full object-contain brightness-110 transition-opacity group-hover:opacity-90"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/로고.png";
                    }}
                  />
                </div>
                <div className="flex items-center">
                  <img 
                    src="/images/로고3.png" 
                    alt="XENIANS GROUP" 
                    className="h-9 sm:h-10 md:h-11 w-auto object-contain shrink-0 transition-opacity group-hover:opacity-90"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/xenians-logo.png";
                    }}
                  />
                </div>
              </Link>

              {/* Slogan under the bottom left logo */}
              <div className="mt-3.5 pl-0.5">
                <p className="font-sans text-[12px] sm:text-[13px] tracking-[0.14em] text-[#dfbe7a] font-medium select-none opacity-95">
                  Value-Driven, Result-Oriented
                </p>
              </div>
            </div>
          </div>

          {/* Right Columns: Company, Business, Projects, Contact */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* COMPANY */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.25em] text-white font-bold uppercase mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2.5 font-sans text-[13px] text-white/60">
                <li>
                  <Link to="/company#ceo" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    About XENIANS
                  </Link>
                </li>
                <li>
                  <Link to="/company#org" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Leadership & Org
                  </Link>
                </li>
                <li>
                  <Link to="/company#overview" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Our Strength
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* BUSINESS */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.25em] text-white font-bold uppercase mb-4">
                BUSINESS
              </h4>
              <ul className="space-y-2.5 font-sans text-[13px] text-white/60">
                <li>
                  <Link to="/business/mna" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    M&A Advisory
                  </Link>
                </li>
                <li>
                  <Link to="/business/development" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Development & PF
                  </Link>
                </li>
                <li>
                  <Link to="/business/sales" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Sales & Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/business/operation" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Operations
                  </Link>
                </li>
                <li>
                  <Link to="/business/fm" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Facility Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* PROJECTS */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.25em] text-white font-bold uppercase mb-4">
                PROJECTS
              </h4>
              <ul className="space-y-2.5 font-sans text-[13px] text-white/60">
                <li>
                  <Link to="/projects" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Selected Projects
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Track Record
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.25em] text-white font-bold uppercase mb-4">
                CONTACT
              </h4>
              <ul className="space-y-2.5 font-sans text-[13px] text-white/60">
                <li>
                  <Link to="/contact" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Seoul Office
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    London Office
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
                    Singapore Office
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Admin Link */}
        <div className="max-w-[1500px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="font-sans text-[12px] sm:text-[12.5px] text-[#dfbe7a] hover:text-white font-medium underline underline-offset-4 cursor-pointer transition-colors"
            >
              {lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
            </button>
            <span className="text-white/25 hidden sm:inline">•</span>
            <p className="font-sans text-[12px] sm:text-[12.5px] text-white/55 tracking-wide font-normal select-none">
              Copyright@XENIANS Inc. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-white/50 font-mono text-[11px]">
            <Link to="/admin" onClick={handleNavClick} className="hover:text-[#c6a35b] transition-colors">
              ADMIN LOGIN
            </Link>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        defaultLang={lang} 
      />
    </div>
  );
};
