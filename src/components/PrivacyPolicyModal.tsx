import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Lock, Building2, Mail, Phone, Calendar } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLang?: 'ko' | 'en';
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  defaultLang = 'ko'
}) => {
  const [modalLang, setModalLang] = useState<'ko' | 'en'>(defaultLang);

  useEffect(() => {
    setModalLang(defaultLang);
  }, [defaultLang, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[88vh] bg-[#141413] text-[#e8e6e1] border border-white/15 rounded-sm shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 sm:px-8 border-b border-white/10 flex items-center justify-between bg-[#191918] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-[#c6a35b]/15 text-[#dfbe7a] flex items-center justify-center shrink-0 border border-[#c6a35b]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                      {modalLang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
                    </h2>
                    <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-xs bg-[#c6a35b]/20 text-[#dfbe7a] uppercase font-semibold">
                      XENIANS Inc.
                    </span>
                  </div>
                  <p className="font-sans text-[11px] sm:text-[12px] text-white/50 mt-0.5">
                    {modalLang === 'ko' ? '제니안스 주식회사 공식 개인정보 처리 및 보호 방침' : 'Official Personal Information Protection & Handling Policy'}
                  </p>
                </div>
              </div>

              {/* Language Switcher & Close Button */}
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-xs border border-white/15 p-0.5 bg-black/30 font-mono text-[11px]">
                  <button
                    type="button"
                    onClick={() => setModalLang('ko')}
                    className={`px-2.5 py-1 rounded-xs transition-colors ${
                      modalLang === 'ko'
                        ? 'bg-[#c6a35b] text-[#141413] font-bold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    한국어
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalLang('en')}
                    className={`px-2.5 py-1 rounded-xs transition-colors ${
                      modalLang === 'en'
                        ? 'bg-[#c6a35b] text-[#141413] font-bold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="w-8 h-8 rounded-xs flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 font-sans text-[13px] sm:text-[13.5px] leading-relaxed text-white/80 select-text">
              {modalLang === 'ko' ? (
                /* Korean Privacy Policy */
                <div className="space-y-7">
                  <div className="p-4 bg-white/[0.03] border-l-2 border-[#c6a35b] rounded-r-xs">
                    <p className="font-medium text-white/90">
                      제니안스 주식회사(이하 '회사' 또는 'XENIANS Inc.')는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하며, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">01.</span> 개인정보의 처리 목적
                    </h3>
                    <p className="text-white/70">
                      회사는 다음의 목적을 위하여 필요한 최소한의 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-white/75 text-[12.5px]">
                      <li><strong className="text-white">자문 및 비즈니스 상담:</strong> M&A 자문, 개발·PF 금융 구조화, 호텔/리조트 위탁운영, 시설관리(FM) 등 고객 문의 접수, 상담 이력 관리, 맞춤형 제안서 발송 및 회신</li>
                      <li><strong className="text-white">계약 체결 및 이행:</strong> 자문 용역 계약, 업무 협약의 체결·유지·관리 및 대금 정산</li>
                      <li><strong className="text-white">서비스 품질 향상:</strong> 이용 통계 분석 및 서비스 고도화</li>
                    </ul>
                  </section>

                  {/* Section 2 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">02.</span> 수집하는 개인정보의 항목
                    </h3>
                    <p className="text-white/70">
                      회사는 상담 및 서비스 문의 시 아래와 같은 개인정보 항목을 수집하고 있습니다.
                    </p>
                    <div className="bg-white/[0.02] border border-white/10 p-3.5 rounded-xs space-y-2 text-[12.5px]">
                      <div>
                        <span className="font-bold text-[#c6a35b] block mb-1">■ 온라인 문의 접수 시 (필수항목)</span>
                        <p className="text-white/75">성명, 회사명/직함, 이메일 주소, 연락처(전화번호), 문의 내용</p>
                      </div>
                      <div className="pt-2 border-t border-white/5">
                        <span className="font-bold text-white/60 block mb-1">■ 인터넷 서비스 이용 과정에서 자동 생성·수집되는 항목</span>
                        <p className="text-white/60">IP주소, 쿠키(Cookie), 접속 로그, 서비스 이용 기록, 브라우저 정보</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 3 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">03.</span> 개인정보의 처리 및 보유 기간
                    </h3>
                    <p className="text-white/70">
                      회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-white/75 text-[12.5px]">
                      <li><strong className="text-white">문의 및 상담 정보:</strong> 상담 종결 및 답변 완료 후 <span className="text-[#c6a35b] font-medium">3년간</span> 보관 (사후 분쟁 처리 및 이력 확인 목적)</li>
                      <li><strong className="text-white">계약 또는 청약철회 등에 관한 기록:</strong> 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                      <li><strong className="text-white">소비자의 불만 또는 분쟁처리에 관한 기록:</strong> 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                      <li><strong className="text-white">웹사이트 방문 로그 기록:</strong> 3개월 (통신비밀보호법)</li>
                    </ul>
                  </section>

                  {/* Section 4 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">04.</span> 개인정보의 제3자 제공 및 위탁
                    </h3>
                    <p className="text-white/70">
                      회사는 정보주체의 개인정보를 명시한 목적 범위 내에서만 처리하며, 정보주체의 사전 동의 없이는 원칙적으로 외부에 제공하지 않습니다. 단, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                    </p>
                    <p className="text-white/70">
                      회사는 원활한 문의 발송 업무 처리를 위하여 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.
                    </p>
                    <div className="bg-white/[0.02] border border-white/10 p-3 rounded-xs text-[12px] text-white/70">
                      <p><strong className="text-white">위탁받는 자:</strong> Formspree Inc. / AWS / Google Workspace</p>
                      <p><strong className="text-white">위탁하는 업무의 내용:</strong> 온라인 문의 폼 전송 인프라 및 알림 메일 중계 서비스</p>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">05.</span> 정보주체와 법정대리인의 권리·의무 및 행사방법
                    </h3>
                    <p className="text-white/70">
                      정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다. 권리 행사는 공식 이메일(<span className="text-[#c6a35b]">info@xenians.co.kr</span>)을 통해 요청하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">06.</span> 개인정보의 파기절차 및 방법
                    </h3>
                    <p className="text-white/70">
                      회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-white/75 text-[12.5px]">
                      <li><strong className="text-white">전자적 파일 형태:</strong> 기록을 재생할 수 없는 기술적 방법을 사용하여 영구 삭제합니다.</li>
                      <li><strong className="text-white">종이 문서:</strong> 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
                    </ul>
                  </section>

                  {/* Section 7 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">07.</span> 개인정보의 안전성 확보조치
                    </h3>
                    <p className="text-white/70">
                      회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-white/75 text-[12.5px]">
                      <li><strong className="text-white">관리적 조치:</strong> 내부관리계획 수립 및 시행, 정기적 직원 교육, 취급자 최소화</li>
                      <li><strong className="text-white">기술적 조치:</strong> 보안프로그램 설치, SSL/TLS 암호화 통신 적용, 접근통제시스템 운용</li>
                      <li><strong className="text-white">물리적 조치:</strong> 전산실 및 자료보관실에 대한 출입 통제</li>
                    </ul>
                  </section>

                  {/* Section 8 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">08.</span> 개인정보 보호책임자 및 문의처
                    </h3>
                    <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xs text-[12.5px] space-y-1.5">
                      <p className="font-semibold text-[#c6a35b]">XENIANS Inc. 개인정보 보호 담당 부서</p>
                      <p><span className="text-white/50">부서명:</span> 운영총괄실 / 준법지원부</p>
                      <p><span className="text-white/50">공식 이메일:</span> <a href="mailto:info@xenians.co.kr" className="text-[#dfbe7a] hover:underline font-mono">info@xenians.co.kr</a></p>
                      <p><span className="text-white/50">소재지:</span> 서울특별시 강남구 테헤란로 456 XENIANS Tower 15층</p>
                    </div>
                  </section>

                  {/* Section 9 */}
                  <section className="space-y-1 pt-2 border-t border-white/10 text-white/50 text-[12px]">
                    <p>공고일자: 2019년 10월 01일</p>
                    <p>시행일자: 2019년 10월 01일 (최종 개정: 2026년 03월)</p>
                  </section>
                </div>
              ) : (
                /* English Privacy Policy */
                <div className="space-y-7">
                  <div className="p-4 bg-white/[0.03] border-l-2 border-[#c6a35b] rounded-r-xs">
                    <p className="font-medium text-white/90">
                      XENIANS Inc. (referred to as the "Company" or "XENIANS") complies with the Personal Information Protection Act and relevant global data privacy regulations to protect the rights, interests, and privacy of all data subjects.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">01.</span> Purpose of Processing Personal Data
                    </h3>
                    <p className="text-white/70">
                      The Company collects and processes minimal personal information required for the following institutional purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-white/75 text-[12.5px]">
                      <li><strong className="text-white">Advisory & Consultation:</strong> Handling inquiries regarding M&A transactions, Project Financing, Real Estate Development & PM, and Hospitality Operations, as well as delivering customized investment proposals.</li>
                      <li><strong className="text-white">Contractual Execution:</strong> Execution, management, and fulfillment of financial and advisory contracts.</li>
                      <li><strong className="text-white">Service Enhancement:</strong> Analyzing access statistics to ensure high security and service standards.</li>
                    </ul>
                  </section>

                  {/* Section 2 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">02.</span> Categories of Personal Data Collected
                    </h3>
                    <div className="bg-white/[0.02] border border-white/10 p-3.5 rounded-xs space-y-2 text-[12.5px]">
                      <div>
                        <span className="font-bold text-[#c6a35b] block mb-1">■ Online Inquiry Submission (Required)</span>
                        <p className="text-white/75">Full Name, Company Name / Title, Email Address, Contact Number, Inquiry Message</p>
                      </div>
                      <div className="pt-2 border-t border-white/5">
                        <span className="font-bold text-white/60 block mb-1">■ Automatically Collected Technical Data</span>
                        <p className="text-white/60">IP Address, Cookies, Access Logs, Browser Type, Service Usage Logs</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 3 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">03.</span> Retention and Use Period
                    </h3>
                    <p className="text-white/70">
                      Personal data is retained only for as long as necessary to fulfill the purposes of collection, or in accordance with applicable legal retention mandates:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-white/75 text-[12.5px]">
                      <li><strong className="text-white">Inquiry & Consultation Records:</strong> <span className="text-[#c6a35b] font-medium">3 years</span> from inquiry completion (for historical reference and dispute resolution).</li>
                      <li><strong className="text-white">Commercial Transaction Records:</strong> 5 years under relevant commercial laws.</li>
                      <li><strong className="text-white">Access / System Logs:</strong> 3 months under telecommunication protection acts.</li>
                    </ul>
                  </section>

                  {/* Section 4 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">04.</span> Third-Party Disclosure & Data Processors
                    </h3>
                    <p className="text-white/70">
                      The Company does not disclose personal data to third parties without prior express consent, except where required by law or judicial orders.
                    </p>
                    <div className="bg-white/[0.02] border border-white/10 p-3 rounded-xs text-[12px] text-white/70">
                      <p><strong className="text-white">Contracted Processors:</strong> Formspree Inc. / AWS / Google Workspace</p>
                      <p><strong className="text-white">Scope:</strong> Secure dispatch infrastructure for web-based inquiry routing</p>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">05.</span> Rights of Data Subjects
                    </h3>
                    <p className="text-white/70">
                      Data subjects may exercise their statutory rights to inspect, correct, delete, or suspend the processing of their personal information at any time by contacting our compliance desk at <a href="mailto:info@xenians.co.kr" className="text-[#dfbe7a] font-mono hover:underline">info@xenians.co.kr</a>.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">06.</span> Technical and Administrative Safeguards
                    </h3>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-white/75 text-[12.5px]">
                      <li><strong className="text-white">Access Control:</strong> Data handling is strictly restricted to certified personnel under strict NDAs.</li>
                      <li><strong className="text-white">Encryption:</strong> SSL/TLS encryption for all transmitted client communications.</li>
                      <li><strong className="text-white">Physical Security:</strong> Strict keycard entry and surveillance for data storage facilities.</li>
                    </ul>
                  </section>

                  {/* Section 7 */}
                  <section className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-[#c6a35b]">07.</span> Data Protection Officer
                    </h3>
                    <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xs text-[12.5px] space-y-1.5">
                      <p className="font-semibold text-[#c6a35b]">XENIANS Inc. Compliance & Data Protection Office</p>
                      <p><span className="text-white/50">Department:</span> Executive Operations & Legal Compliance</p>
                      <p><span className="text-white/50">Official Email:</span> <a href="mailto:info@xenians.co.kr" className="text-[#dfbe7a] hover:underline font-mono">info@xenians.co.kr</a></p>
                      <p><span className="text-white/50">Headquarters:</span> 15F, XENIANS Tower, 456 Teheran-ro, Gangnam-gu, Seoul, Republic of Korea</p>
                    </div>
                  </section>

                  {/* Section 8 */}
                  <section className="space-y-1 pt-2 border-t border-white/10 text-white/50 text-[12px]">
                    <p>Initial Effective Date: October 01, 2019</p>
                    <p>Last Revised: March 2026</p>
                  </section>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#191918] flex items-center justify-between shrink-0">
              <span className="font-mono text-[11px] text-white/40">
                Copyright@XENIANS Inc. All Rights Reserved.
              </span>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer px-5 py-2 bg-[#c6a35b] hover:bg-[#d6b772] text-[#141413] font-bold text-[12px] font-mono tracking-wider uppercase rounded-xs transition-colors"
              >
                {modalLang === 'ko' ? '확인 및 닫기' : 'Close'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
