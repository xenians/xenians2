import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { ShieldCheck, Mail, Building2, Calendar } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { lang } = useContent();
  const [pageLang, setPageLang] = useState<'ko' | 'en'>(lang);

  return (
    <div className="pt-28 pb-24 px-6 md:px-[6vw] bg-[#f7f5f0] min-h-screen text-[#141413]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-black/10 pb-8 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141413] text-[#dfbe7a] font-mono text-[11px] font-bold tracking-widest uppercase mb-4 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LEGAL COMPLIANCE</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
              {pageLang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
            </h1>
            <p className="mt-2 text-[#666666] font-sans text-sm sm:text-base">
              {pageLang === 'ko' ? '제니안스 주식회사(XENIANS Inc.) 고객 개인정보 보호 및 처리 방침' : 'Personal Information Handling & Protection Standards of XENIANS Inc.'}
            </p>
          </div>

          <div className="inline-flex rounded-xs border border-black/15 p-1 bg-white shadow-2xs font-mono text-xs shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setPageLang('ko')}
              className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                pageLang === 'ko'
                  ? 'bg-[#141413] text-[#dfbe7a] font-bold'
                  : 'text-[#666666] hover:text-[#141413]'
              }`}
            >
              한국어 (KO)
            </button>
            <button
              type="button"
              onClick={() => setPageLang('en')}
              className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                pageLang === 'en'
                  ? 'bg-[#141413] text-[#dfbe7a] font-bold'
                  : 'text-[#666666] hover:text-[#141413]'
              }`}
            >
              English (EN)
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white p-8 sm:p-12 border border-black/10 rounded-xs shadow-sm space-y-10 leading-relaxed text-[14px] text-[#333333]">
          {pageLang === 'ko' ? (
            <>
              <div className="p-4 bg-[#fbf9f4] border-l-4 border-[#c6a35b] text-[#141413] text-[14.5px]">
                <p className="font-medium">
                  제니안스 주식회사(이하 '회사' 또는 'XENIANS Inc.')는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하며, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  제1조 (개인정보의 처리 목적)
                </h2>
                <p>
                  회사는 다음의 목적을 위하여 필요한 최소한의 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#555555]">
                  <li><strong>자문 및 프로젝트 상담:</strong> M&A 자문, PF 자금조달, 개발 및 PM, 위탁운영 상담 접수 및 검토 회신</li>
                  <li><strong>고객 커뮤니케이션:</strong> 제안서 발송, 미팅 일정 조율, 후속 안내</li>
                  <li><strong>서비스 품질 관리:</strong> 서비스 이용 통계 분석 및 접속 환경 개선</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  제2조 (처리하는 개인정보 항목)
                </h2>
                <div className="bg-[#fbf9f4] p-4 rounded-xs border border-black/5 space-y-3">
                  <div>
                    <h3 className="font-bold text-[#141413]">1. 온라인 상담 접수 (필수 항목)</h3>
                    <p className="text-[#555555]">성명, 회사명, 이메일 주소, 연락처(전화번호), 문의 상세 내용</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#141413]">2. 웹사이트 이용 과정에서 자동 수집 항목</h3>
                    <p className="text-[#555555]">IP 주소, 쿠키(Cookie), 접속 로그, 브라우저 종류 및 OS 정보</p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  제3조 (개인정보의 보유 및 이용 기간)
                </h2>
                <p>
                  원칙적으로 개인정보의 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 다음과 같이 법정 기간 동안 안전하게 보관합니다.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#555555]">
                  <li>문의 및 상담 이력: <strong>3년</strong></li>
                  <li>계약 또는 청약철회 등에 관한 기록: <strong>5년</strong> (전자상거래법)</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: <strong>3년</strong> (전자상거래법)</li>
                  <li>웹사이트 접속 로그 기록: <strong>3개월</strong> (통신비밀보호법)</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  제4조 (개인정보의 제3자 제공 및 위탁)
                </h2>
                <p>
                  회사는 고객의 사전 동의 없이 개인정보를 제3자에게 임의로 제공하지 않습니다. 원활한 문의 발송 업무를 위해 전산 인프라 서비스(Formspree, 클라우드 호스팅 서비스)에 기술적 전송 업무만을 위탁하고 있습니다.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  제5조 (정보주체의 권리·의무 및 행사방법)
                </h2>
                <p>
                  정보주체는 회사에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다. 권리 행사는 공식 이메일(<span className="font-mono text-[#a18750] font-semibold">info@xenians.co.kr</span>)을 통해 가능하며, 회사는 지체 없이 처리합니다.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  제6조 (개인정보 보호책임자 및 문의처)
                </h2>
                <div className="bg-[#fbf9f4] p-5 rounded-xs border border-black/5 space-y-2">
                  <p className="font-bold text-[#141413]">XENIANS Inc. 개인정보 보호 담당 데스크</p>
                  <p><span className="text-[#888888]">담당:</span> 경영지원본부 / IT마케팅팀</p>
                  <p><span className="text-[#888888]">공식 이메일:</span> <a href="mailto:info@xenians.co.kr" className="text-[#a18750] font-mono hover:underline">info@xenians.co.kr</a></p>
                  <p><span className="text-[#888888]">소재지:</span> 서울특별시 강남구 테헤란로79길 6 (6 79gil, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea)</p>
                </div>
              </section>

              <section className="pt-4 border-t border-black/10 text-xs text-[#888888] space-y-1">
                <p>공고일자: 2019년 10월 01일</p>
                <p>시행일자: 2019년 10월 01일 (최종 개정: 2026년 03월)</p>
                <p className="pt-2 font-mono">Copyright@XENIANS Inc. All Rights Reserved.</p>
              </section>
            </>
          ) : (
            <>
              <div className="p-4 bg-[#fbf9f4] border-l-4 border-[#c6a35b] text-[#141413] text-[14.5px]">
                <p className="font-medium">
                  XENIANS Inc. respects your privacy and is committed to protecting your personal data in accordance with the Korean Personal Information Protection Act and applicable global standards.
                </p>
              </div>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  1. Purpose of Processing
                </h2>
                <p>
                  The Company processes essential information to deliver strategic financial advisory, project financing structuring, asset development, and hospitality operations, as well as addressing business inquiries and executing advisory agreements.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  2. Categories of Information Collected
                </h2>
                <div className="bg-[#fbf9f4] p-4 rounded-xs border border-black/5 space-y-2">
                  <p><strong>Required:</strong> Full Name, Company / Title, Email Address, Contact Telephone Number, Inquiry Content</p>
                  <p><strong>Automated:</strong> IP Address, Cookies, Browser / OS Type, Network Request Logs</p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  3. Retention Period
                </h2>
                <p>
                  Inquiry records are stored for up to 3 years for historical validation and dispute resolution, or as required by applicable laws (Commercial contracts: 5 years; Web traffic logs: 3 months).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  4. Data Subject Rights
                </h2>
                <p>
                  You have the right to request access to, correction of, or deletion of your personal data at any time by contacting our compliance desk at <a href="mailto:info@xenians.co.kr" className="text-[#a18750] font-mono hover:underline">info@xenians.co.kr</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-lg font-bold text-[#141413] border-b border-black/10 pb-2">
                  5. Privacy Compliance Desk
                </h2>
                <div className="bg-[#fbf9f4] p-5 rounded-xs border border-black/5 space-y-2">
                  <p className="font-bold text-[#141413]">XENIANS Inc. Legal & Compliance Office</p>
                  <p><span className="text-[#888888]">Department:</span> Management Support Div. / IT & Marketing Team</p>
                  <p><span className="text-[#888888]">Official Email:</span> <a href="mailto:info@xenians.co.kr" className="text-[#a18750] font-mono hover:underline">info@xenians.co.kr</a></p>
                  <p><span className="text-[#888888]">Address:</span> 6 79gil, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea</p>
                </div>
              </section>

              <section className="pt-4 border-t border-black/10 text-xs text-[#888888] space-y-1">
                <p>Effective Date: October 01, 2019</p>
                <p>Last Revised: March 2026</p>
                <p className="pt-2 font-mono">Copyright@XENIANS Inc. All Rights Reserved.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
