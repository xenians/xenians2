import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { PageHeader } from '../components/PageHeader';
import { 
  MapPin, 
  Mail, 
  Clock, 
  ExternalLink, 
  Send, 
  Building2, 
  Navigation,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';
import { PrivacyPolicyModal } from '../components/PrivacyPolicyModal';

export const ContactPage: React.FC = () => {
  const { data, lang } = useContent();

  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'mna',
    subject: '',
    message: '',
    agreePrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [inquiryRefNumber, setInquiryRefNumber] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const rawContact = data.contactInfo || {};
  const contactData = {
    seoulAddressKo: rawContact.seoulAddressKo || '서울특별시 강남구 테헤란로 79길 6 JS타워',
    seoulAddressEn: (rawContact.seoulAddressEn || 'XENIANS JSTower, 6 79gil, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea').replace(/^,\s*/, ''),
    seoulTransportKo: rawContact.seoulTransportKo || '선릉역 1번 출구 (도보 3분) / 삼성역 4번 출구 (도보 5분)',
    seoulTransportEn: rawContact.seoulTransportEn || 'Seolleung Station Exit 1 (3-min walk) / Samseong Station Exit 4 (5-min walk)',
    seoulNaverMapUrl: rawContact.seoulNaverMapUrl && !rawContact.seoulNaverMapUrl.includes('456')
      ? rawContact.seoulNaverMapUrl
      : 'https://map.naver.com/v5/search/%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C79%EA%B8%B8%206',
    seoulGoogleMapUrl: rawContact.seoulGoogleMapUrl && !rawContact.seoulGoogleMapUrl.includes('456')
      ? rawContact.seoulGoogleMapUrl
      : 'https://maps.google.com/?q=6+79gil,+Teheran-ro,+Gangnam-gu,+Seoul,+Republic+of+Korea',
    seoulTitleKo: (rawContact.seoulTitleKo === '서울 본사' ? '서울' : rawContact.seoulTitleKo) || '서울',
    seoulTitleEn: rawContact.seoulTitleEn || 'Seoul HQ',
    londonTitleKo: (rawContact.londonTitleKo === '런던 오피스' ? '런던' : rawContact.londonTitleKo) || '런던',
    londonTitleEn: rawContact.londonTitleEn || 'London',
    londonAddress: rawContact.londonAddress || 'Tower 42, 25 Old Broad St, London EC2N 1HN, United Kingdom',
    singaporeTitleKo: (rawContact.singaporeTitleKo === '싱가포르 오피스' ? '싱가포르' : rawContact.singaporeTitleKo) || '싱가포르',
    singaporeTitleEn: rawContact.singaporeTitleEn || 'Singapore',
    singaporeAddress: rawContact.singaporeAddress || '7 Straits View, Marina One East Tower #12-01, Singapore 018936',
    email: (rawContact.email && !rawContact.email.includes('xenians.com'))
      ? rawContact.email.replace(/xenians\.com/gi, 'xenians.co.kr')
      : 'info@xenians.co.kr',
    hoursKo: (rawContact.hoursKo && !rawContact.hoursKo.includes('18:00')) ? rawContact.hoursKo : '09:00 - 17:00(Mon - Fri)',
    hoursEn: (rawContact.hoursEn && !rawContact.hoursEn.includes('18:00')) ? rawContact.hoursEn : '09:00 - 17:00(Mon - Fri)',
    locationsSubtitleKo: rawContact.locationsSubtitleKo || 'GLOBAL LOCATIONS',
    locationsSubtitleEn: rawContact.locationsSubtitleEn || 'GLOBAL LOCATIONS',
    locationsTitleKo: rawContact.locationsTitleKo || '글로벌 오피스 안내',
    locationsTitleEn: rawContact.locationsTitleEn || 'Global Locations & Offices',
    inquirySubtitleKo: rawContact.inquirySubtitleKo || 'EMAIL INQUIRY',
    inquirySubtitleEn: rawContact.inquirySubtitleEn || 'EMAIL INQUIRY',
    inquiryTitleKo: rawContact.inquiryTitleKo || '이메일 문의 접수',
    inquiryTitleEn: rawContact.inquiryTitleEn || 'Send an Email Inquiry',
    inquiryDescKo: rawContact.inquiryDescKo || '부동산 개발, M&A 자문, 자산 위탁운영 등 전문 상담이 필요하신 내용을 남겨주시면 담당 부서 전문가가 24시간 이내에 회신해 드립니다.',
    inquiryDescEn: (rawContact.inquiryDescEn && !rawContact.inquiryDescEn.includes('xenians.com'))
      ? rawContact.inquiryDescEn.replace(/xenians\.com/gi, 'xenians.co.kr')
      : 'For real estate advisory, M&A transactions, or hospitality consignment inquiries, please submit the form or email us directly at info@xenians.co.kr.',
    formspreeEndpoint: rawContact.formspreeEndpoint || 'https://formspree.io/f/xaqvaqyd',
    bannerTitleKo: rawContact.bannerTitleKo,
    bannerTitleEn: rawContact.bannerTitleEn,
    bannerSubKo: rawContact.bannerSubKo,
    bannerSubEn: rawContact.bannerSubEn,
    successTitleKo: rawContact.successTitleKo,
    successTitleEn: rawContact.successTitleEn,
    successDescKo: rawContact.successDescKo,
    successDescEn: rawContact.successDescEn,
  };

  const categories = [
    { value: 'mna', labelKo: 'M&A 및 매각·인수 자문', labelEn: 'M&A & Deal Advisory' },
    { value: 'development', labelKo: '시행 기획, 개발 및 프로젝트 파이낸싱 (PF)', labelEn: 'Development & Project Finance (PF)' },
    { value: 'sales', labelKo: '전략적 분양 대행 및 마케팅', labelEn: 'Sales & Marketing Advisory' },
    { value: 'operation', labelKo: '호텔·리조트·골프장 위탁운영', labelEn: 'Hospitality & Golf Operations' },
    { value: 'fm', labelKo: '스마트 시설관리 (Facility Management)', labelEn: 'Facility Management' },
    { value: 'careers', labelKo: '인재 영입 및 파트너십 제안', labelEn: 'Careers & Strategic Partnership' },
    { value: 'general', labelKo: '기타 일반 문의', labelEn: 'General Inquiry' },
  ];

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) {
      errs.name = lang === 'ko' ? '성함 / 담당자명을 입력해 주세요.' : 'Please enter your full name.';
    }
    if (!formState.email.trim()) {
      errs.email = lang === 'ko' ? '이메일 주소를 입력해 주세요.' : 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email.trim())) {
        errs.email = lang === 'ko' ? '올바른 이메일 형식을 입력해 주세요.' : 'Please enter a valid email format.';
      }
    }
    if (!formState.phone.trim()) {
      errs.phone = lang === 'ko' ? '연락처를 입력해 주세요.' : 'Please enter your contact phone number.';
    }
    if (!formState.message.trim()) {
      errs.message = lang === 'ko' ? '문의 내용을 입력해 주세요.' : 'Please enter your message details.';
    }
    if (!formState.agreePrivacy) {
      errs.privacy = lang === 'ko' ? '개인정보 수집 및 이용에 동의해 주세요.' : 'Please agree to the privacy policy.';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      alert(
        lang === 'ko'
          ? '필수 항목(성함, 이메일, 연락처, 문의 내용, 개인정보 동의)을 모두 입력해 주세요.'
          : 'Please complete all required fields (Name, Email, Phone, Message, and Privacy Agreement).'
      );
      return;
    }

    setIsSubmitting(true);
    const formElement = e.currentTarget;
    const endpoint = contactData.formspreeEndpoint || "https://formspree.io/f/xaqvaqyd";
    const catObj = categories.find(c => c.value === formState.category);
    const catLabel = catObj ? `${catObj.labelKo} (${catObj.labelEn})` : formState.category;

    try {
      // 1. Formspree Official Recommended JSON AJAX Submission
      const payload = {
        name: formState.name.trim(),
        company: formState.company.trim() || '미기재',
        email: formState.email.trim(),
        _replyto: formState.email.trim(),
        phone: formState.phone.trim(),
        category: catLabel,
        subject: formState.subject.trim() || '신규 비즈니스 문의',
        message: formState.message.trim(),
        agreePrivacy: formState.agreePrivacy ? '동의함 (Agreed)' : '미동의',
        _subject: `[XENIANS 문의] ${formState.name.trim()} - ${formState.subject.trim() || catLabel || '신규 비즈니스 문의'}`
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const generatedRef = `XEN-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
        setInquiryRefNumber(generatedRef);
        setIsSubmitting(false);
        setIsSent(true);
      } else {
        // Fallback to standard browser HTML form submission if fetch returns error
        console.warn("Formspree fetch returned non-ok status, falling back to standard submission.");
        formElement.submit();
      }
    } catch (error) {
      console.warn("Form submission network error, falling back to standard submission:", error);
      // Fallback: If fetch is blocked by browser extension or network error, submit standard form
      try {
        formElement.submit();
      } catch (submitErr) {
        alert(
          lang === 'ko'
            ? '네트워크 연결 상태를 확인해 주시거나 대표 이메일(info@xenians.co.kr)로 직접 문의해 주시기 바랍니다.'
            : 'Please check your internet connection or email us directly at info@xenians.co.kr.'
        );
        setIsSubmitting(false);
      }
    }
  };

  const handleResetForm = () => {
    setIsSent(false);
    setFormErrors({});
    setFormState({
      name: '',
      company: '',
      email: '',
      phone: '',
      category: 'mna',
      subject: '',
      message: '',
      agreePrivacy: false,
    });
  };

  // Generate pre-filled mailto URL for direct email sending
  const selectedCatLabel = categories.find(c => c.value === formState.category);
  const mailSubject = encodeURIComponent(
    formState.subject 
      ? `[XENIANS 문의] ${formState.subject}`
      : `[XENIANS 문의] ${formState.name || '고객 문의'} (${selectedCatLabel?.labelKo || '일반'})`
  );
  const mailBody = encodeURIComponent(
`[XENIANS 문의 내역]
• 성함 / 담당자: ${formState.name || '-'}
• 회사명 / 소속: ${formState.company || '-'}
• 연락처: ${formState.phone || '-'}
• 회신 이메일: ${formState.email || '-'}
• 문의 분야: ${selectedCatLabel?.labelKo || '-'}

[문의 내용]
${formState.message || '-'}
`
  );
  const directMailtoUrl = `mailto:${contactData.email}?subject=${mailSubject}&body=${mailBody}`;

  const handleDirectMailClick = (e: React.MouseEvent) => {
    if (!validateForm()) {
      e.preventDefault();
      alert(
        lang === 'ko'
          ? '필수 항목(성함, 이메일, 연락처, 문의 내용, 개인정보 동의)을 모두 작성하셔야 메일을 전송할 수 있습니다.'
          : 'Please fill in all required fields (Name, Email, Phone, Message, and Privacy Agreement) before opening your email client.'
      );
      return;
    }
    window.location.href = directMailtoUrl;
  };

  return (
    <div className="flex flex-col bg-[#f7f5f0] text-[#141413] min-h-screen selection:bg-[#c6a35b] selection:text-white">
      {/* 1. TOP HEADER BANNER */}
      <PageHeader
        title={lang === 'ko' ? (contactData.bannerTitleKo || 'CONTACT') : (contactData.bannerTitleEn || 'CONTACT')}
        breadcrumb={lang === 'ko' ? (contactData.bannerSubKo || 'CONTACT') : (contactData.bannerSubEn || 'CONTACT')}
        imageSrc="/images/hero-seoul-skyline.jpg"
        imageAlt="Contact Xenians Group"
      />

      {/* 2. GLOBAL OFFICES GUIDANCE */}
      <section className="py-16 md:py-24 px-6 md:px-[6vw] bg-white border-b border-black/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-[11px] font-bold tracking-[0.3em] text-[#c6a35b] uppercase block mb-3">
              {lang === 'ko' ? (contactData.locationsSubtitleKo || 'GLOBAL LOCATIONS') : (contactData.locationsSubtitleEn || 'GLOBAL LOCATIONS')}
            </span>
            <h2 className="font-serif text-[30px] sm:text-[36px] text-[#7c5816] font-bold">
              {lang === 'ko' ? (contactData.locationsTitleKo || '글로벌 오피스 안내') : (contactData.locationsTitleEn || 'Global Locations & Offices')}
            </h2>
            <div className="h-0.5 w-16 bg-[#c6a35b] mx-auto mt-4" />
          </div>

          {/* 3 Offices Grid (Unboxed, direct on background) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. 서울 본사 */}
            <div className="pt-6 pb-6 px-4 border-t-2 border-black/[0.12] hover:border-t-[3px] hover:border-[#c6a35b] transition-all duration-300 flex flex-col justify-between hover:bg-[#ffffff] hover:shadow-[0_12px_28px_rgba(198,163,91,0.14)] hover:-translate-y-1 rounded-sm relative group">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#141413] text-[#c6a35b] flex items-center justify-center font-bold text-xs">
                      SEOUL
                    </span>
                    <h3 className="font-serif text-[20px] font-bold text-[#7c5816]">
                      {lang === 'ko' ? (contactData.seoulTitleKo || '서울') : (contactData.seoulTitleEn || 'Seoul HQ')}
                    </h3>
                  </div>
                  <Building2 className="w-5 h-5 text-[#a18750]" />
                </div>

                <div className="space-y-4 text-[14px]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#a18750] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-wider text-[#888888] uppercase block mb-1">
                        {lang === 'ko' ? '주소 (ADDRESS)' : 'ADDRESS'}
                      </span>
                      <p className="text-[#141413] font-medium leading-relaxed break-keep">
                        {lang === 'ko' 
                          ? contactData.seoulAddressKo 
                          : (contactData.seoulAddressEn || 'XENIANS JSTower, 6 79gil, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-black/[0.04]">
                    <Navigation className="w-5 h-5 text-[#a18750] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-wider text-[#888888] uppercase block mb-1">
                        {lang === 'ko' ? '지하철 안내' : 'TRANSIT / SUBWAY'}
                      </span>
                      <p className="text-[#333333] text-[13px] font-medium leading-relaxed">
                        {lang === 'ko' 
                          ? contactData.seoulTransportKo 
                          : (contactData.seoulTransportEn || 'Seolleung Station Exit 1 (3-min walk) / Samseong Station Exit 4 (5-min walk)')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 지도 바로가기 연동 (네이버 / 구글 지도) */}
              <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center gap-3">
                <a
                  href={contactData.seoulNaverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-black/[0.04] hover:bg-[#141413] text-[#141413] hover:text-[#c6a35b] border border-black/10 rounded-xs font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <span>{lang === 'ko' ? '네이버 지도' : 'Naver Map'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={contactData.seoulGoogleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-black/[0.04] hover:bg-[#141413] text-[#141413] hover:text-[#c6a35b] border border-black/10 rounded-xs font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <span>{lang === 'ko' ? '구글 지도' : 'Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 2. 런던 오피스 */}
            <div className="pt-6 pb-6 px-4 border-t-2 border-black/[0.12] hover:border-t-[3px] hover:border-[#c6a35b] transition-all duration-300 flex flex-col justify-between hover:bg-[#ffffff] hover:shadow-[0_12px_28px_rgba(198,163,91,0.14)] hover:-translate-y-1 rounded-sm relative group">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#141413] text-[#c6a35b] flex items-center justify-center font-bold text-xs">
                      LDN
                    </span>
                    <h3 className="font-serif text-[20px] font-bold text-[#7c5816]">
                      {lang === 'ko' ? (contactData.londonTitleKo || '런던') : (contactData.londonTitleEn || 'London')}
                    </h3>
                  </div>
                  <Building2 className="w-5 h-5 text-[#a18750]" />
                </div>

                <div className="space-y-4 text-[14px]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#a18750] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-wider text-[#888888] uppercase block mb-1">
                        {lang === 'ko' ? '주소 (ADDRESS)' : 'ADDRESS'}
                      </span>
                      <p className="text-[#141413] font-medium leading-relaxed">
                        {contactData.londonAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.08]">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactData.londonAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-black/[0.04] hover:bg-[#141413] text-[#141413] hover:text-[#c6a35b] border border-black/10 rounded-xs font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{lang === 'ko' ? '구글 지도 바로가기' : 'View on Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 3. 싱가포르 오피스 */}
            <div className="pt-6 pb-6 px-4 border-t-2 border-black/[0.12] hover:border-t-[3px] hover:border-[#c6a35b] transition-all duration-300 flex flex-col justify-between hover:bg-[#ffffff] hover:shadow-[0_12px_28px_rgba(198,163,91,0.14)] hover:-translate-y-1 rounded-sm relative group">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#141413] text-[#c6a35b] flex items-center justify-center font-bold text-xs">
                      SGP
                    </span>
                    <h3 className="font-serif text-[20px] font-bold text-[#7c5816]">
                      {lang === 'ko' ? (contactData.singaporeTitleKo || '싱가포르') : (contactData.singaporeTitleEn || 'Singapore')}
                    </h3>
                  </div>
                  <Building2 className="w-5 h-5 text-[#a18750]" />
                </div>

                <div className="space-y-4 text-[14px]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#a18750] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-wider text-[#888888] uppercase block mb-1">
                        {lang === 'ko' ? '주소 (ADDRESS)' : 'ADDRESS'}
                      </span>
                      <p className="text-[#141413] font-medium leading-relaxed">
                        {contactData.singaporeAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.08]">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactData.singaporeAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-black/[0.04] hover:bg-[#141413] text-[#141413] hover:text-[#c6a35b] border border-black/10 rounded-xs font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{lang === 'ko' ? '구글 지도 바로가기' : 'View on Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EMAIL INQUIRY SECTION (사용자 요청: 메일로 문의할 수 있는 항목 다시 적용) */}
      <section className="py-16 md:py-24 px-6 md:px-[6vw] bg-[#faf8f5] border-b border-black/[0.08]">
        <div className="max-w-[1000px] mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[11px] font-bold tracking-[0.3em] text-[#c6a35b] uppercase block mb-3">
              {lang === 'ko' ? (contactData.inquirySubtitleKo || 'EMAIL INQUIRY') : (contactData.inquirySubtitleEn || 'EMAIL INQUIRY')}
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#7c5816] font-bold mb-4">
              {lang === 'ko' ? (contactData.inquiryTitleKo || '이메일 문의 접수') : (contactData.inquiryTitleEn || 'Send an Email Inquiry')}
            </h2>
            <p className="text-[14px] text-[#666666] leading-relaxed break-keep">
              {lang === 'ko'
                ? (contactData.inquiryDescKo || '부동산 개발, M&A 자문, 자산 위탁운영 등 전문 상담이 필요하신 내용을 남겨주시면 담당 부서 전문가가 24시간 이내에 회신해 드립니다.')
                : (contactData.inquiryDescEn || 'For real estate advisory, M&A transactions, or hospitality consignment inquiries, please submit the form or email us directly at info@xenians.co.kr.')}
            </p>
          </div>

          {/* Form Container (Unboxed, Direct on Page Background) */}
          <div className="pt-2">
            {isSent ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#c6a35b]/15 text-[#c6a35b] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[12px] font-bold text-[#a18750] tracking-widest uppercase">
                    INQUIRY RECEIVED
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#7c5816]">
                    {lang === 'ko' ? (contactData.successTitleKo || '문의가 성공적으로 접수되었습니다.') : (contactData.successTitleEn || 'Your inquiry has been submitted.')}
                  </h3>
                  <p className="text-[14px] text-[#666666] max-w-md mx-auto leading-relaxed">
                    {lang === 'ko'
                      ? (contactData.successDescKo || '기재해주신 이메일 주소로 담당 임원이 신속하고 면밀히 검토 후 연락드리겠습니다.')
                      : (contactData.successDescEn || 'Our specialist team will review your requirements and respond to your email within 24 business hours.')}
                  </p>
                </div>

                <div className="p-4 bg-[#f7f5f0] rounded-sm max-w-sm mx-auto border border-black/[0.05]">
                  <span className="font-mono text-[11px] text-[#888888] block mb-1">
                    REFERENCE NUMBER
                  </span>
                  <span className="font-mono text-[16px] font-bold text-[#141413] tracking-widest">
                    {inquiryRefNumber}
                  </span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleResetForm}
                    className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-[#141413] hover:bg-[#a18750] text-white font-mono text-[11.5px] font-bold tracking-wider uppercase rounded-xs transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{lang === 'ko' ? '추가 문의 작성하기' : 'Write Another Inquiry'}</span>
                  </button>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#f7f5f0] text-[#141413] border border-black/15 font-mono text-[11.5px] font-bold tracking-wider uppercase rounded-xs transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#a18750]" />
                    <span>{lang === 'ko' ? '이메일 직접 보내기' : 'Direct Email'}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form
                action={contactData.formspreeEndpoint || "https://formspree.io/f/xaqvaqyd"}
                method="POST"
                onSubmit={handleSubmit}
                id="contact-inquiry-form"
                className="space-y-6"
              >
                {/* Formspree Email Subject Configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value={`[XENIANS 웹사이트 문의] ${formState.name ? `${formState.name} - ` : ''}${formState.subject || (categories.find(c => c.value === formState.category)?.labelKo) || '신규 비즈니스 문의'}`}
                />
                {/* Formspree Reply-To Configuration */}
                <input
                  type="hidden"
                  name="_replyto"
                  value={formState.email}
                />
                
                {/* 2-Column Row: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-[11px] font-bold tracking-wider text-[#444444] uppercase mb-2">
                      {lang === 'ko' ? '성함 / 담당자명 *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      placeholder={lang === 'ko' ? '홍길동' : 'John Doe'}
                      className={`w-full px-4 py-3 bg-[#faf8f5] border text-[14px] text-[#141413] outline-none transition-colors rounded-xs ${
                        formErrors.name ? 'border-red-500 bg-red-50/20' : 'border-black/10 focus:border-[#a18750] focus:bg-white'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11.5px] text-red-600 font-sans">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block font-mono text-[11px] font-bold tracking-wider text-[#444444] uppercase mb-2">
                      {lang === 'ko' ? '회사명 / 기관명' : 'Company / Organization'}
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="contact-company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder={lang === 'ko' ? '(주)제니안스파트너스' : 'Acme Capital Corp.'}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-black/10 focus:border-[#a18750] focus:bg-white text-[14px] text-[#141413] outline-none transition-colors rounded-xs"
                    />
                  </div>
                </div>

                {/* 2-Column Row: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-[11px] font-bold tracking-wider text-[#444444] uppercase mb-2">
                      {lang === 'ko' ? '이메일 주소 *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      placeholder="client@company.co.kr"
                      className={`w-full px-4 py-3 bg-[#faf8f5] border text-[14px] text-[#141413] outline-none transition-colors rounded-xs ${
                        formErrors.email ? 'border-red-500 bg-red-50/20' : 'border-black/10 focus:border-[#a18750] focus:bg-white'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-[11.5px] text-red-600 font-sans">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block font-mono text-[11px] font-bold tracking-wider text-[#444444] uppercase mb-2">
                      {lang === 'ko' ? '연락처 *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      required
                      value={formState.phone}
                      onChange={(e) => {
                        setFormState({ ...formState, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                      }}
                      placeholder="+82 10-1234-5678"
                      className={`w-full px-4 py-3 bg-[#faf8f5] border text-[14px] text-[#141413] outline-none transition-colors rounded-xs ${
                        formErrors.phone ? 'border-red-500 bg-red-50/20' : 'border-black/10 focus:border-[#a18750] focus:bg-white'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-[11.5px] text-red-600 font-sans">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label htmlFor="contact-category" className="block font-mono text-[11px] font-bold tracking-wider text-[#444444] uppercase mb-2">
                    {lang === 'ko' ? '문의 분야 *' : 'Inquiry Category *'}
                  </label>
                  <select
                    name="category"
                    id="contact-category"
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-black/10 focus:border-[#a18750] focus:bg-white text-[14px] text-[#141413] outline-none transition-colors rounded-xs cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {lang === 'ko' ? cat.labelKo : cat.labelEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block font-mono text-[11px] font-bold tracking-wider text-[#444444] uppercase mb-2">
                    {lang === 'ko' ? '문의 제목' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder={lang === 'ko' ? '부동산 개발 자문 관련 미팅 요청의 건' : 'Request for M&A Advisory Consultation'}
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-black/10 focus:border-[#a18750] focus:bg-white text-[14px] text-[#141413] outline-none transition-colors rounded-xs"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-mono text-[11px] font-bold tracking-wider text-[#444444] uppercase mb-2">
                    {lang === 'ko' ? '문의 내용 *' : 'Message Details *'}
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    placeholder={lang === 'ko' 
                      ? '사업 대상 부지, 딜 규모, 요구 일정 등 구체적인 내용을 기재해주시면 더욱 정확하고 빠른 상담이 가능합니다.'
                      : 'Please provide details on asset location, scale, deal size, or specific advisory requirements.'}
                    className={`w-full px-4 py-3 bg-[#faf8f5] border text-[14px] text-[#141413] outline-none transition-colors rounded-xs resize-y ${
                      formErrors.message ? 'border-red-500 bg-red-50/20' : 'border-black/10 focus:border-[#a18750] focus:bg-white'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[11.5px] text-red-600 font-sans">{formErrors.message}</p>
                  )}
                </div>

                {/* Privacy Policy Agreement */}
                <div className="pt-2">
                  <label htmlFor="contact-privacy" className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="agreePrivacy"
                      id="contact-privacy"
                      required
                      value="동의함"
                      checked={formState.agreePrivacy}
                      onChange={(e) => {
                        setFormState({ ...formState, agreePrivacy: e.target.checked });
                        if (formErrors.privacy) setFormErrors({ ...formErrors, privacy: '' });
                      }}
                      className="mt-1 w-4 h-4 accent-[#141413] cursor-pointer"
                    />
                    <span className={`text-[13px] leading-relaxed ${formErrors.privacy ? 'text-red-600 font-medium' : 'text-[#666666]'}`}>
                      {lang === 'ko' 
                        ? '개인정보 수집 및 이용(문의 응대 및 상담 목적)에 동의합니다. 수집된 정보는 문의 처리 완료 후 관련 법령에 따라 안전하게 파기됩니다. (필수)'
                        : 'I agree to the collection and use of personal information solely for the purpose of handling and responding to this inquiry. (Required)'}
                      {' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsPrivacyModalOpen(true);
                        }}
                        className="text-[#a18750] hover:text-[#141413] underline underline-offset-2 font-medium cursor-pointer ml-1 inline-block"
                      >
                        {lang === 'ko' ? '[개인정보처리방침 전문]' : '[View Privacy Policy]'}
                      </button>
                    </span>
                  </label>
                  {formErrors.privacy && (
                    <p className="mt-1 ml-7 text-[11.5px] text-red-600 font-sans">{formErrors.privacy}</p>
                  )}
                </div>

                {/* Form Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-[#141413] hover:bg-[#a18750] disabled:bg-black/40 text-white font-mono text-[11.5px] font-bold tracking-[0.2em] uppercase rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? (lang === 'ko' ? '접수 중...' : 'Sending...') : (lang === 'ko' ? '이메일 문의 접수하기' : 'Submit Inquiry')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectMailClick}
                    className="cursor-pointer w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#faf8f5] text-[#141413] border border-black/15 font-mono text-[11.5px] font-bold tracking-[0.2em] uppercase rounded-xs transition-colors flex items-center justify-center gap-2 text-center"
                    title={lang === 'ko' ? '기본 이메일 프로그램(Outlook, Mail 등)으로 바로 발송' : 'Open in your default email client'}
                  >
                    <Mail className="w-4 h-4 text-[#a18750]" />
                    <span>{lang === 'ko' ? '이메일 프로그램으로 작성' : 'Open In Mail Client'}</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. BOTTOM EMAIL & HOURS (한영 변환시 절대 움직이지 않는 그리드 레이아웃) */}
      <section className="py-12 px-6 md:px-[6vw] bg-white">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12 text-[#141413]">
          
          {/* Email Item */}
          <div className="flex items-center gap-4 justify-start md:justify-end">
            <div className="w-12 h-12 rounded-full bg-[#141413] flex items-center justify-center text-[#c6a35b] shrink-0 shadow-2xs">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-[210px]">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#a18750] uppercase block mb-0.5">
                EMAIL
              </span>
              <a 
                href={`mailto:${contactData.email}`} 
                className="text-[17px] font-bold text-[#141413] hover:text-[#a18750] transition-colors whitespace-nowrap"
              >
                {contactData.email}
              </a>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-black/[0.08]" />

          {/* Business Hours Item */}
          <div className="flex items-center gap-4 justify-start">
            <div className="w-12 h-12 rounded-full bg-[#141413] flex items-center justify-center text-[#c6a35b] shrink-0 shadow-2xs">
              <Clock className="w-5 h-5" />
            </div>
            <div className="min-w-[250px]">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#a18750] uppercase block mb-0.5">
                BUSINESS HOURS
              </span>
              <span className="text-[17px] font-bold text-[#141413] font-mono tabular-nums whitespace-nowrap tracking-tight">
                {lang === 'en' ? (contactData.hoursEn || '09:00 - 17:00(Mon - Fri)') : (contactData.hoursKo || '09:00 - 17:00(Mon - Fri)')}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
        defaultLang={lang} 
      />
    </div>
  );
};
