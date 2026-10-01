import { SiteData } from './types';
import { DEFAULT_DETAILED_PROJECTS } from './data/defaultProjects';

export const INITIAL_DATA_KO: SiteData = {
  theme: {
    primary: "#0A0A0A",
    secondary: "#D4AF37",
    charlie: "#1A1A1A",
    fontSans: "'Inter', sans-serif",
    fontSerif: "'Playfair Display', serif"
  },
  assets: {
    logo: "/images/로고.png",
    ceoPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
    ceoSignature: "/images/싸인.png"
  },
  navigation: [
    { name: 'ABOUT', path: '/company' },
    { name: 'BUSINESS', path: '/business' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'INSIGHTS', path: '/insights' },
    { name: 'CONTACT', path: '/contact' },
  ],
  footer: {
    description: "제니안스 그룹은 고도의 전문성과 글로벌 네트워크를 바탕으로 기업 가치 극대화와 자산의 효율적 운영을 위한 최적의 솔루션을 제공하는 전략적 파트너입니다.",
    services: ["M&A Advisory", "Project Financing", "Hotel Operations"],
    contact: {
      address: "서울 : 서울특별시 강남구 테헤란로79길 6 JS타워\n런던 : Tower 42, 25 Old Broad St, London EC2N 1HN, United Kingdom\n싱가포르 : 7 Straits View, Marina One East Tower #12-01, Singapore 018936",
      email: "info@xenians.co.kr",
      phone: ""
    },
    copyright: "Copyright@XENIANS Inc. All Rights Reserved."
  },
  hero: {
    title: "Revolutionizing Asset Value Through Strategic Insight",
    description: "제니안스 그룹은 독보적인 M&A 자문, 정교한 프로젝트 파이낸싱 구조화, 그리고 혁신적인 자산 위탁 운영을 통해 자본 시장의 새로운 표준을 제시합니다."
  },
  home: {
    servicesHeader: {
      subtitle: "CORE BUSINESS",
      title: "Our expertise spans the entire lifecycle of value.",
      description: "제니안스 그룹은 고도의 금융 공학적 접근과 현장 중심의 실무 역량을 결합하여 자산의 숨겨진 가치를 발굴합니다."
    },
    philosophy: {
      subtitle: "OUR PHILOSOPHY",
      title: "Beyond standard, creating new horizons.",
      description: "우리는 단순한 숫자의 나열을 넘어, 자산이 가진 상징성과 미래 성장 동력을 입체적으로 분석합니다. 제니안스 그룹과 함께하는 모든 딜(Deal)은 신뢰와 혁신의 역사가 됩니다.",
      items: ["Client-Centric Integrity", "Strategic Convergence", "Agile Execution"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop"
    }
  },
  company: {
    intro: {
      subtitle: "XENIANS GROUP",
      title: "About the Group",
      description: "글로벌 자본 시장의 복잡성 속에서 명확한 방향성과 지속 가능한 가치를 제시하는 최고의 전력적 동반자입니다."
    },
    ceoMessage: {
      ko: "변화와 도전의 시대,\n새로운 가치를 만들어 가는 XENIANS.\n\n\n오늘날 우리가 직면한 비즈니스 환경은 그 어느 때보다 빠르고 복잡하게 변화하고 있습니다.\n단순히 자본의 이동을 넘어, 정교한 전략과 치밀한 실행력이 결합되어야만 생존할 수 있으며,\n예측 불가능한 시장 속에서 기업의 지속 가능한 성장과 자산 가치의 극대화는 모든 경영자와 \n투자자의 가장 핵심적인 시대적 과제가 되었습니다.\n\n‘Value-Driven, Result-Oriented’라는 우리의 핵심 철학처럼, 제니안스 그룹의 모든 임직원은 흔들림 없는 원칙과 탁월한 전문성으로 언제나 최상의 결과물을 증명해 내겠습니다. \n여러분의 위대한 성장 여정에 제니안스 그룹이 최고의 파트너로 함께할 것을 약속드립니다.\n\n감사합니다.",
      en: "Piercing through the intrinsic value of assets,\nPresenting a new milestone for growth.\n\nWelcome to XENIANS GROUP.\n\nToday's business environment is evolving faster and more complexly than ever. Beyond the mere flow of capital, survival is only possible through the fusion of sophisticated strategy and meticulous execution. In an unpredictable market, ensuring sustainable corporate growth and maximizing asset value have become the most critical challenges for all executives and investors.\n\nXENIANS GROUP goes beyond offering simple directions, providing the most practical and sharp solutions based on thorough data analysis and overwhelming field experience. We offer optimal solutions to maximize client asset value based on sharp analytical prowess and precise statistics in M&A, PROJECT MANAGEMENT, and OUTSOURCING THE OPERATION sectors. Our execution capabilities, which recreate the intrinsic value of premium assets, combine with hands-on operational expertise to prove 'practical profit models' rather than leaning on theory.\n\nMeeting the expectations of our partners who trust XENIANS GROUP, we promise results that set the market standard through transparent processes and overwhelming expertise. Just as our core philosophy 'Value-Driven, Result-Oriented' suggests, all employees of XENIANS GROUP will always prove the best results with unwavering principles and exceptional professionalism. We promise that XENIANS GROUP will be your best partner on your great journey of growth.\n\nThank you.",
      name: "유  석  / Phillip Yoo",
      role: "CHIEF EXECUTIVE OFFICER"
    },
    organization: [
      { 
        name: "자문 및 자본시장 부문", 
        enName: "Advisory & Capital Markets Division",
        role: "전문적인 금융 솔루션과 자본 시장 자문을 통해 최적의 거래 구조를 실현합니다.", 
        division: "자문 부문", 
        enRole: "Realizing optimal deal structures through professional financial solutions and capital market advisory.",
        sub: [
          { name: "기업 금융팀", enName: "Corporate Finance Team", role: "자본 구조 설계 및 효율적인 자금 조달 전략 수립을 통한 거래 성사", enRole: "Capital structuring and financing strategy development." },
          { name: "M&A 전략", enName: "M&A Strategy", role: "시장 분석 및 타겟 발굴을 통한 전략적 딜 소싱과 구조 설계", enRole: "Market analysis and strategic deal sourcing." },
          { name: "기업매각 1·2팀", enName: "Sell-side Teams 1&2", role: "기업 매각 프로세스 주도 및 투자자 발굴을 통한 가치 극대화", enRole: "Maximizing value through leading sell-side processes." },
          { name: "기업인수 1·2팀", enName: "Buy-side Teams 1&2", role: "유망 인수 대상 발굴 및 정교한 인수 전략 수립과 자문", enRole: "Target discovery and strategic acquisition advisory." },
          { name: "거래 실행팀", enName: "Transaction Execution Team", role: "복합 거래 실행 관리 및 실무 실사 조율과 계약 협상 주도", enRole: "Execution of complex transactions and contract negotiation." }
        ]
      },
      { 
        name: "전략기획·운영부문", 
        enName: "Strategy & Operations Division",
        role: "전략적 의사결정 지원 및 효율적인 프로젝트 운영을 통해 비즈니스 가치를 극대화합니다.", 
        division: "전략 운영 부문", 
        enRole: "Supporting strategic decision-making and maximizing business value through efficient project operations.",
        sub: [
          { name: "프로젝트 관리 사무실(PMO)", enName: "Project Management Office (PMO)", role: "범부처 프로젝트 통합 관리 및 표준 프로세스 구축", enRole: "Integrated management of cross-departmental projects and standard process establishment." },
          { name: "전략 기획 팀", enName: "Strategic Planning Team", role: "중장기 사업 전략 수립 및 핵심 성과 지표(KPI) 관리", enRole: "Long-term business strategy formulation and KPI management." },
          { name: "리스크 관리 팀", enName: "Risk Management Team", role: "전사적 리스크 식별 및 선제적 대응 체계 구축", enRole: "Enterprise risk identification and proactive response system establishment." },
          { name: "건설 PM 팀", enName: "Construction PM Team", role: "건설 프로젝트 공정 관리 및 기술적 타당성 검토", enRole: "Construction project schedule management and technical feasibility review." },
          { name: "프로젝트 파이낸스(PF) 팀", enName: "Project Finance (PF) Team", role: "부동산 및 대규모 개발 사업의 자금 구조 설계 및 조달", enRole: "Financial structuring and sourcing for real estate and large-scale development projects." }
        ]
      },
      { 
        name: "위탁 운영 부문", 
        enName: "Asset & Hospitality Management Division",
        role: "프리미엄 자산의 효율적 운영과 수익성 개선을 위한 전문 솔루션을 제공합니다.", 
        division: "위탁 운영 부문", 
        enRole: "Providing professional solutions for efficient operation and profitability improvement of premium assets.",
        sub: [
          { name: "위탁운영 팀", enName: "Hospitality Operations Team", role: "현장 중심의 고품격 서비스 운영 및 인적 자원 관리", enRole: "Field-oriented high-quality service operation and human resource management." },
          { name: "수익 관리 팀", enName: "Revenue Management Team", role: "데이터 분석 기반의 탄력적 가격 정책 및 수익 극대화", enRole: "Dynamic pricing and revenue maximization based on data analysis." },
          { name: "자산 관리 팀", enName: "Asset Management Team", role: "자산 물리적 컨디션 관리 및 장기적 가치 제고 전략", enRole: "Physical condition management and long-term value appreciation strategy." },
          { name: "서비스 품질 관리 팀", enName: "Service Quality Control Team", role: "서비스 표준화 및 정기적 품질 점검(QC) 프로세스 운영", enRole: "Service standardization and regular quality control (QC) process operation." },
          { name: "영업 및 OTA 전략 팀", enName: "Sales & OTA Strategy Team", role: "온/오프라인 판매 채널 최적화 및 전략적 마케팅 제휴", enRole: "Online/offline sales channel optimization and strategic marketing alliances." }
        ]
      },
      { 
        name: "경영지원부문", 
        enName: "Corporate Support Division",
        role: "안정적인 사업 환경 조성을 위한 지원 체계 및 거버넌스를 구축합니다.", 
        division: "거버넌스 부문", 
        enRole: "Establishing support systems and governance for a stable business environment.",
        sub: [
          { name: "법률지원 팀", enName: "Compliance & Legal Team", role: "계약 검토, 준법 감시 및 법률 리스크 선제적 관리", enRole: "Contract review, compliance monitoring, and proactive legal risk management." },
          { name: "재무 팀", enName: "Finance Team", role: "회계 자금 관리 및 세무 투명성 성 및 효율성 제고", enRole: "Accounting, fund management, and enhancing tax transparency and efficiency." },
          { name: "인사 팀", enName: "Human Resources Team", role: "최적의 인재 발굴 및 성과 중심의 합리적 보상 체계 운영", enRole: "Talent discovery and operation of performance-based compensation systems." },
          { name: "IT 마케팅 팀", enName: "IT Marketing Team", role: "디지털 인프라 관리 및 기술 기반의 마케팅 전략 지원", enRole: "Digital infrastructure management and tech-based marketing strategy support." }
        ]
      }
    ],
    vision: {
      title: "Global Alternative Investment Standard",
      description: "제니안스 그룹은 2030년까지 아시아 태평양 지역을 대표하는 대체 투자 및 자문 그룹으로 도약할 것입니다.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop",
      subtitle: "OUR VISION 2030",
      titleFirst: "Defining New Standards",
      titleSecond: "In Asset Value",
      stats: [
        { label: "Target AUM", value: "5", suffix: "T+", koLabel: "목표 운용 자산" },
        { label: "Global Offices", value: "10", suffix: "+", koLabel: "글로벌 거점" },
        { label: "Expert Pool", value: "200", suffix: "+", koLabel: "전문 인력" }
      ]
    },
    values: [
      { icon: "Target", title: "Excellence", desc: "업계를 선도하는 전문성을 통한 압도적 성과 분석 및 추구" },
      { icon: "ShieldCheck", title: "Integrity", desc: "고객과의 신뢰와 투명성을 모든 파트너십의 핵심 가치로 상정" },
      { icon: "Globe", title: "Global Insight", desc: "글로벌 거시 경제 흐름을 반영한 인사이트로 선제적 리스크 관리" },
      { icon: "Users", title: "Co-Growth", desc: "임직원과 고객이 함께 성장하는 동반 성장의 철학" }
    ]
  },
  advisory: {
    header: {
      subtitle: "M&A ADVISORY",
      title: "Strategic Transactions",
      description: "기업 매각(Sell-side), 인수(Buy-side) 및 가치평가(Valuation)에 이르는 전 과정에 걸쳐 고도의 전문성과 치밀한 협상 전략을 제공합니다."
    },
    sections: [
      {
        id: "sell-side",
        title: "기업 매각 자문",
        description: "제니안스 그룹의 매각 자문은 고도의 금융 공학적 프로세스입니다. M&A 스페셜리스트들이 매도자의 이익을 극대화하고 딜 클로징의 확실성을 보장하기 위해 맞춤형 투자 모델링을 구축합니다.",
        process: [
          { step: "Initial Engagement", title: "거래 준비 및 전략 수립", content: "프로젝트 전략 검토 및 자문계약 체결: 경영진 미팅 및 매각 목적 정의, 예상 거래 구조 검토, 비밀유지계약(NDA) 체결, 프로젝트 일정 수립" },
          { step: "Strategic Review & Valuation", title: "기업 분석 및 가치평가", content: "재무제표 및 사업 구조 분석, 산업 및 시장 환경 분석, DCF 분석, 적정 기업가치 산정(EV/Equity Value)" },
          { step: "Marketing Preparation", title: "투자 유치 자료 및 매각 구조 설계", content: "Information Memorandum(IM) 작성, Teaser 및 투자 포인트 구성, Data Room(VDR) 구축, SPA 주요 조건 설계" },
          { step: "Buyer Screening & Deal Sourcing", title: "잠재 투자자 발굴 및 접촉", content: "Strategic/Financial Investor 발굴, 국내외 투자자 네트워크 활용, Teaser 배포 및 초기 미팅 진행" },
          { step: "Indicative Offer Stage", title: "예비 입찰 및 투자 의향 검토", content: "IM 배포, Q&A 대응, 예비입찰서(IOI) 접수, 우선협상대상자(Preferred Bidder) 선정" },
          { step: "Due Diligence", title: "실사 및 리스크 검토", content: "재무(FDD), 세무(Tax DD), 법률(Legal DD), 운영(Operation DD) 등 ESG 및 Compliance 검토" },
          { step: "Negotiation & Documentation", title: "조건 협상 및 계약 체결", content: "SPA(주식매매계약) 협상, 주요 진술 및 보장(R&W) 검토, 가격 조정 메커니즘 협상, Closing 조건 협의" },
          { step: "Closing & Post-Closing", title: "거래 종결 및 사후 지원", content: "Closing 실행, 대금 정산, 지분 이전 절차, 인수 후 통합(PMI) 지원, 경영 안정화 및 이해관계자 관리" }
        ],
        processFlow: [
          { step: "Engagement", title: "거래 준비 및 계약" },
          { step: "Valuation", title: "기업 분석 및 평가" },
          { step: "Marketing", title: "투자 유치 자료 설계" },
          { step: "Screening", title: "잠재 투자자 발굴" },
          { step: "Offer", title: "예비 입찰 및 선정" },
          { step: "DD", title: "실사 및 리스크 검토" },
          { step: "Negotiation", title: "조건 협상 및 계약" },
          { step: "Closing", title: "거래 종결 및 지원" }
        ],
        expertise: [
          { title: "최적의 엑시트 타이밍 분석", desc: "거시 경제 지표와 산업 사이클 분석을 통해 기업 가치가 최고점에 도달하는 최적의 매각 시점을 제안합니다." },
          { title: "전략적 스토리텔링(Equity Story)", desc: "단순한 재무 수치를 넘어, 기업의 미래 성장 엔진과 인수 시의 시너지 가치를 입체적으로 설계합니다." },
          { title: "글로벌 네트워크 활용", desc: "국내외 폭넓은 전략적 투자자(SI) 및 재무적 투자자(FI) 풀을 가동하여 딜의 경쟁도를 높입니다." }
        ]
      },
      {
        id: "buy-side",
        title: "기업 인수 자문",
        description: "대상 기업에 대한 철저한 펀더멘털 분석과 시너지 정량화를 통해 성공적인 인수를 이끕니다. 타겟 탐색부터 PMI까지 무결점의 엔드투엔드 솔루션을 제공합니다.",
        process: [
          { step: "Acquisition Strategy", title: "인수 전략 수립", content: "투자 목적 및 방향 설정, Target 산업 선정, 투자 기준 정의, 예상 투자 규모 및 구조 검토, 시너지 전략 수립" },
          { step: "Target Screening", title: "인수 대상 발굴", content: "시장 조사 및 산업 분석, 잠재 매물 발굴, 네트워크 기반 Deal Sourcing, 비공개 딜 접촉, 우선 검토 대상 선정" },
          { step: "Preliminary Review", title: "예비 검토 및 투자 타당성 분석", content: "사업 구조 분석, 재무 상태 검토, 시장 경쟁력 평가, 리스크 요인 분석, 예비 기업가치 산정" },
          { step: "Indicative Proposal", title: "투자 제안 및 LOI 제출", content: "투자 구조 설계, Indicative Valuation 산정, LOI(Letter of Intent) 제출, 독점 협상권 협의, 주요 거래 조건 협상" },
          { step: "Due Diligence", title: "정밀 실사 수행", content: "Financial, Legal, Tax, Commercial, Operational Due Diligence 및 ESG/Compliance 검토" },
          { step: "Deal Structuring", title: "거래 구조 및 금융 조달", content: "인수 구조 설계, SPC 설립 검토, Project Financing(PF) 검토, 투자자 및 금융기관 협의, 자본 구조 조정" },
          { step: "Final Negotiation & Signing", title: "최종 협상 및 계약 체결", content: "SPA 협상, 가격 조정 메커니즘 협의, 진술 및 보장(R&W) 검토, 선행 조건(CP) 협의, Signing" },
          { step: "Closing & PMI", title: "거래 종결 및 PMI", content: "Closing, 지분 이전, 조직 통합(PMI), 경영 안정화, 운영 효율화 및 시너지 실행, KPI 및 성과 관리" }
        ],
        processFlow: [
          { step: "Strategy", title: "인수 전략 수립" },
          { step: "Screening", title: "인수 대상 발굴" },
          { step: "Review", title: "예비 검토 및 분석" },
          { step: "Proposal", title: "제안 및 LOI 제출" },
          { step: "Due Diligence", title: "정밀 실사 수행" },
          { step: "Structuring", title: "거래 구조 및 조달" },
          { step: "Final Negotiation", title: "최종 협상 및 계약" },
          { step: "Closing & PMI", title: "거래 종결 및 통합" }
        ],
        expertise: [
          { title: "비공개 딜(Proprietary Deal) 발굴", desc: "공개 시장에 나오지 않은 잠재적 매물을 탐색하여 경쟁을 최소화한 유리한 조건으로 딜을 수행합니다." },
          { title: "인수 금융(Acquisition Financing)", desc: "자체 네트워킹을 통한 선순위/후순위/메자닌 등 최적의 자금 조달 구조를 설계합니다." },
          { title: "PMI 연계 실사", desc: "인수 완료 후 즉각적인 가치 창출이 가능하도록 실사 단계부터 경영 통합 이슈를 발굴합니다." }
        ]
      },
      {
        id: "valuation",
        title: "기업 가치평가",
        description: "독립적이고 객관적인 시각으로 기업의 철저한 재무 및 영업 능력을 분석하여 정확한 가치를 산출합니다. 현대 가치평가 이론에서 가장 신뢰받는 현금흐름할인법(DCF: Discounted Cash Flow)을 핵심 축으로 삼으며, 시장가치 방식(Market Multiple)과 자산가치 방식 등 다각도의 교차 검증을 통해 평가의 완결성을 확보합니다. 단순한 재무제표의 숫자를 넘어 매크로 경제 지표, 산업 내 밸류체인 지위, 무형의 기술력과 경영권 프리미엄까지 종합적으로 수치화하여 자본 시장이 납득할 수 있는 가장 공신력 있는 밸류에이션 리포트를 제공합니다.",
        process: [
          { step: "Environment Analysis", title: "환경 분석", content: "글로벌 거시 경제 흐름과 대상 기업이 속한 산업의 Life-cycle, 진입 장벽, 경쟁 구도를 다각도로 분석하여 미래 세후 영업이익 산출을 위한 핵심 변수(할인율, 영구성장률 등)의 주요 가정 타당성을 면밀히 검증합니다." },
          { step: "Financial Normalization", title: "재무 정규화", content: "과거 재무제표에 혼재된 비경상적·일회성 비용 및 수익, 비유동 영업 자산을 엄격히 분리 및 조정하여 실질적인 잉여현금흐름(FCF) 창출 능력을 정규화(Normalization)하고 내실 가치를 진단합니다." },
          { step: "Valuation Modeling", title: "밸류에이션 모델링", content: "절대적 가치 척도인 현금흐름할인법(DCF) 평가 모형을 핵심 축으로 구축하되, 상장사 및 유사 M&A 거래 배수를 활용한 상대가치평가(Relative Valuation) 모델과 자산가치평가를 복합 교차 검증하여 밸류에이션의 절대적 객관성을 확보합니다." },
          { step: "Scenario & Sensitivity", title: "시나리오 및 민감도 분석", content: "가중평균자본비용(WACC), 자본적 지출(CAPEX), 운전자본 회전율 등의 핵심 거시적/미시적 팩터 변화에 따른 내재가치 변동성을 시나리오 별 민감도 분석(Sensitivity Test)으로 시뮬레이션하여 의사결정에 직결되는 리포트를 구축합니다." }
        ],
        processFlow: [
          { step: "산정", title: "Indicative Value" },
          { step: "LOI 가격 협상", title: "Offer Price" },
          { step: "Due Diligence 조정", title: "Adjusted Value" },
          { step: "최종 딜 클로징", title: "Final Consideration" },
          { step: "사후 정산", title: "Earn-out / Escrow" }
        ],
        expertise: [
          { icon: "ShieldCheck", title: "M&A 및 투자 유치 목적의 가치평가", desc: "명확한 실사와 향후 사업 계획의 타당성을 기반으로 객관적인 가치 금액을 산출합니다." },
          { icon: "PieChart", title: "무형자산 평가", desc: "브랜드 가치, 영업권, 지적재산권 등의 공정 가치(Fair Value) 산정을 통해 숨겨진 자산을 발굴합니다." },
          { icon: "BarChart3", title: "재무 모델링 및 시나리오 시뮬레이션", desc: "다각도의 경영 환경 변화가 내재 가치에 미치는 영향을 고도의 시나리오 분석으로 도출합니다." }
        ]
      }
    ],
    methodology: {
      subtitle: "METHODOLOGY",
      title: "In-depth Valuation analytical Models.",
      items: [
        { title: "DCF Model", desc: "미래 현금 흐름 추정을 통한 본질적 가치 산출" },
        { title: "Peer Multiple", desc: "유사 상장사 지표 비교를 통한 상대 가치 평가" },
        { title: "Due Diligence", desc: "잠재적 재무 및 세무 리스크의 엄격한 상호 검증" },
        { title: "Term Sheet", desc: "거래 종결성을 높이는 핵심 조건의 정밀한 조율" }
      ],
      quote: "Valuation is not just about numbers; it's about translating a company's past resilience and future growth potential into a coherent financial narrative that resonates with the capital market."
    }
  },
  pm: {
    header: {
      subtitle: "PROJECT MANAGEMENT & PF",
      title: "금융 및 자금 구조 설계",
      description: "제니안스 그룹은 부동산 금융 시장의 복잡한 메커니즘을 관통하는 고도의 파이낸싱 구조화와 철저한 사업 관리를 통해, 단순한 개발을 넘어 자산 가치의 근본적인 혁신을 실현합니다. 우리는 자본의 효율적 배치와 현장 중심의 리스크 통제를 결합하여 최적의 수익률을 보장합니다.",
    },
    title: "프로젝트 및 건설 관리",
    description: "우리는 개발 사업의 전 주기(Life-cycle)에서 발생하는 각종 재무적, 공학적 리스크를 선제적으로 식별하고 헤지(Hedge)합니다. 특히 현장의 건설 관리(CM) 역량과 금융 자문 역량의 시너지를 통해 성공적인 엑시트(Exit)를 견인합니다.",
    steps: [
      { step: "01", title: "Feasibility Evaluation", description: "금융권 심사 가이드라인을 넘어서는 보수적이고 정교한 수지 분석과 법률·세무·기술적 타당성 검토를 통해 사업의 본질적 성공 가능성을 진단합니다." },
      { step: "02", title: "Strategic Capital Stack", description: "에쿼티(Equity), 브릿지론(Bridge), 본 PF(Senior/Mezzanine)를 아우르는 최적의 자본 구조를 설계하여 금융 비용을 최소화하고 자금 조달의 안정성을 확보합니다." },
      { step: "03", title: "Risk Mitigation & RM", description: "시공사 책임준공 확약 및 신용보강 협의를 주도하고, 공정 지연 및 미분양 리스크에 대한 다층적 방어 기제를 구축하여 투자자의 이익을 보호합니다." },
      { step: "04", title: "Construction Optimization", description: "건설 현장의 설계 변경 관리, 공정율 모니터링, 공사비 기성 검토 등 기술적 PM 업무를 통해 공학적 완성도와 경제성을 동시에 달성합니다." },
      { step: "05", title: "Exit & Asset Repositioning", description: "준공 전 선매각(Sell-through) 전략 수립 또는 준공 후 임대 최적화 및 리포지셔닝을 통해 최종적인 자산 가치 상승과 성공적인 엑시트를 관리합니다." }
    ]
  },
  operations: {
    header: {
      subtitle: "CONSIGNMENT OPERATIONS",
      title: "자산 가치 제고 및 가동률 최적화 관리",
      description: "단순 운영을 넘어, 전략적 리포지셔닝과 수익 중심의 운영 모델을 통해 자산의 순영업이익(NOI)과 자본 가치를 극대화합니다."
    },
    hotel: {
      subtitle: "Hotel & Resort Consignment Operations",
      title: "럭셔리 호스피탈리티 자산 관리",
      description: "우리는 단순히 호텔을 운영하는 것이 아니라, 자산의 근본적인 수익 구조를 개혁합니다. PMS 기반의 데이터 분석, 실시간 예약 최적화, 그리고 프리미엄 F&B 컨텐츠 도입을 통해 자산의 NOI를 획기적으로 개선하며 브랜드 정체성을 재정립합니다.",
      features: [
        { icon: "Utensils", title: "F&B Concepts", desc: "트렌디한 다이닝 브랜드 유치 및 마케팅 기획", en: "Curating trendy dining brands & marketing planning." },
        { icon: "Star", title: "SOP Standard", desc: "글로벌 5성급 수준의 서비스 표준 및 매뉴얼 기획", en: "Global 5-star service standards & manual planning." }
      ],
      insight: {
        title: "STRATEGIC REPOSITIONING",
        description: "우리는 노후화되거나 수익성이 낮은 자산을 진단하여, 타겟 고객층 재설정과 대대적인 공간 혁신을 통해 자산의 생애 주기(Life-cycle)를 연장합니다.",
        cards: [
          { title: "Revenue Management (RM)", description: "빅데이터 기반의 수요 예측 및 동적 가격 정책(Dynamic Pricing)을 통해 OCC(객실 점유율)와 ADR(객단가)의 최적 균형점을 도출하여 RevPAR를 극대화합니다." },
          { title: "Experience Design", description: "단순 숙박을 넘어, 지역의 특색을 살린 로컬 컨텐츠와 차별화된 F&B 경험을 설계하여 고객의 재방문율을 높이고 브랜드 충성도를 강화합니다." }
        ]
      }
    },
    golf: {
      subtitle: "Golf Club Premium Operations",
      title: "전략적 골프 자산 운영 최적화",
      description: "골프장 경영의 본질적 가치인 '코스 품질'과 '고객 경험'을 극대화합니다. 최신 토목 기술 기반의 코스 관리 솔루션과 타겟팅된 멤버십 마케팅을 통해 운영 효율성을 제고하고, 고액 자산가층을 위한 전용 서비스를 강화합니다.",
      features: [
        { icon: "Trophy", title: "Course Planning", desc: "최신 토목 기술 기반 코스 컨디션 및 리뉴얼 기획", en: "Tech-driven course conditioning & renewal planning." },
        { icon: "Users", title: "Membership", desc: "고객 생애 가치(LTV) 중심의 멤버십 고도화 및 전략 기획", en: "LTV-centric membership strategies & strategic planning." }
      ],
      imageText: { main: "Heritage & Tech", sub: "MAXIMIZING ELITE ASSETS" }
    },
    stats: [
      { label: "Operation Portfolio", value: "25+", sub: "Premium Properties" },
      { label: "Revenue Efficiency", value: "+35%", sub: "Avg. NOI Growth" },
      { label: "Service Score", value: "4.9/5", sub: "Guest Satisfaction" }
    ]
  },
  trackRecordHeader: {
    subtitle: "TRACK RECORD",
    title: "Our Performance",
    description: ""
  },
  trackRecord: [
    { id: "tr1", category: "M&A", title: "K-Tech Manufacturing Cross-border Sell-side", year: "2024", description: "국내 제조 중견기업의 글로벌 시장 진출을 위한 일본 대기업과의 M&A 자문 성사.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1287&auto=format&fit=crop" },
    { id: "tr2", category: "PM/PF", title: "Gangnam CBD Office Square Development PF", year: "2023", description: "역삼역 인근 복합 오피스 빌딩 신축 사업에 대한 1,500억 규모 PF 구조화 완료.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" },
    { id: "tr3", category: "M&A", title: "Jeju Emerald Ocean Resort Turnaround", year: "2023", description: "부실 리조트 위탁 운영 개시 후 1년 만에 EBITDA 250% 흑자 전환 달성.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop" },
    { id: "tr4", category: "M&A", title: "Seoul Premium Hotel Asset Repositioning", year: "2024", description: "노후화된 강남권 비즈니스 호텔을 5성급 부티크 호텔로 리포지셔닝하여 ADR(객단가) 40% 상승.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" },
    { id: "tr5", category: "M&A", title: "Kyunggi Golf Club Value-add Operation", year: "2023", description: "코스 리뉴얼 및 F&B 직영 전환을 통한 퍼블릭 골프장 수익성 개선 및 코스 퀄리티 극대화.", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1470&auto=format&fit=crop" },
    { id: "tr6", category: "M&A", title: "Busan Retail Complex Consignment Management", year: "2022", description: "초대형 상업 시설 MD 개편 및 통합 관제 시스템 도입을 통한 공실률 제로 달성.", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1470&auto=format&fit=crop" }
  ],
  trackRecordExtra: {
    expertise: {
      title: "SECTOR EXPERTISE",
      items: ["Consumer/Retail", "Tech/SaaS", "Manufacturing", "ESG/Green Energy", "Real Estate", "Healthcare"],
      description: "제니안스 그룹은 산업별 버티컬 전문성을 갖춘 전문 인력들이 팀을 구성하여, 단순한 재무적 접근을 넘어 해당 산업의 핵심 본질을 꿰뚫는 인사이트를 제공합니다.",
      enDescription: "Bridging financial strategy with vertical industrial expertise."
    },
    global: {
      title: "Expanding Network Boundaries.",
      description: "우리는 국내 시장에 안주하지 않고 일본, 동남아시아, 미주 지역의 파트너들과 협력하여 크로스보더(Cross-border) 딜의 새로운 기회를 창출합니다. 글로벌 자본의 흐름을 국내로 연결하고, 국내의 우수한 자본을 세계 시장으로 진출시키는 가교 역할을 수행합니다.",
      enDescription: "Connecting global capital with local opportunity through strategic corridors.",
      stats: [
        { label: "Global Partner Regions", value: "12" },
        { label: "Cross-border Deals", value: "400B+" },
        { label: "Network FI/SI", value: "150+" },
        { label: "Advisory Pool", value: "Elite" }
      ]
    }
  },
  common: {
    explore: "자세히 보기",
    aboutXenians: "제니안스 소개",
    advisoryServices: "자문 서비스",
    exploreDivision: "부문 탐색",
    valuesAndPhilosophy: "제니안스 그룹의 가치와 철학",
    strategicPartnership: "Strategic Partnership",
    ceoMessageTitle: "CEO MESSAGE",
    executiveHead: "최고 의사결정 기구",
    executiveHeadDescription: "그룹 중장기 비전 수립 및 총괄 의사결정",
    managingDirectorTitle: "운영 파트너 / 임원진",
    managingDirectorSubtitle: "운영 총괄 임원",
    managingDirectorRole: "전 부처 프로젝트 성과 관리 및 실무 운영 총괄",
    systematicGovernance: "체계적인 조직 구조",
    sectorExpertise: "산업별 전문 역량",
    expandingNetwork: "글로벌 네트워크 확장"
  },
  detailedProjects: DEFAULT_DETAILED_PROJECTS,
  contactInfo: {
    formspreeEndpoint: "https://formspree.io/f/xaqvaqyd",
    bannerTitleKo: "CONTACT",
    bannerTitleEn: "CONTACT",
    bannerSubKo: "오시는 길 & 이메일 문의",
    bannerSubEn: "Global Locations & Inquiries",
    seoulAddressKo: "서울특별시 강남구 테헤란로 79길 6 JS타워",
    seoulAddressEn: "XENIANS JSTower, 6 79gil, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea",
    seoulTransportKo: "네이버/구글 지도 바로가기 연동",
    seoulTransportEn: "Seolleung Station Exit 1 (3-min walk) / Samseong Station Exit 4 (5-min walk)",
    seoulNaverMapUrl: "https://map.naver.com/v5/search/%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C79%EA%B8%B8%206",
    seoulGoogleMapUrl: "https://maps.google.com/?q=6+79gil,+Teheran-ro,+Gangnam-gu,+Seoul,+Republic+of+Korea",
    seoulTitleKo: "서울",
    seoulTitleEn: "Seoul HQ",
    londonTitleKo: "런던",
    londonTitleEn: "London",
    londonAddress: "Tower 42, 25 Old Broad St, London EC2N 1HN, United Kingdom",
    singaporeTitleKo: "싱가포르",
    singaporeTitleEn: "Singapore",
    singaporeAddress: "7 Straits View, Marina One East Tower #12-01, Singapore 018936",
    email: "info@xenians.co.kr",
    hoursKo: "09:00 - 17:00(Mon - Fri)",
    hoursEn: "09:00 - 17:00(Mon - Fri)",
    locationsSubtitleKo: "GLOBAL LOCATIONS",
    locationsSubtitleEn: "GLOBAL LOCATIONS",
    locationsTitleKo: "글로벌 오피스 안내",
    locationsTitleEn: "Global Locations & Offices",
    inquirySubtitleKo: "EMAIL INQUIRY",
    inquirySubtitleEn: "EMAIL INQUIRY",
    inquiryTitleKo: "이메일 문의 접수",
    inquiryTitleEn: "Send an Email Inquiry",
    inquiryDescKo: "부동산 개발, M&A 자문, 자산 위탁운영 등 전문 상담이 필요하신 내용을 남겨주시면 담당 부서 전문가가 24시간 이내에 회신해 드립니다.",
    inquiryDescEn: "For real estate advisory, M&A transactions, or hospitality consignment inquiries, please submit the form or email us directly at info@xenians.co.kr.",
    successTitleKo: "문의가 성공적으로 접수되었습니다.",
    successTitleEn: "Your inquiry has been submitted.",
    successDescKo: "기재해주신 이메일 주소로 담당 부서에서 신속하고 면밀히 검토 후 연락드리겠습니다.",
    successDescEn: "Our specialist team will review your requirements and respond to your email within 24 business hours."
  }
};

export const INITIAL_DATA_EN: SiteData = {
  ...INITIAL_DATA_KO,
  navigation: [
    { name: 'COMPANY', path: '/company' },
    { name: 'BUSINESS', path: '/business' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'INSIGHTS', path: '/insights' },
    { name: 'CONTACT', path: '/contact' },
  ],
  footer: {
    ...INITIAL_DATA_KO.footer,
    description: "Xenians Group is a strategic partner providing optimal solutions for maximizing corporate value and efficient asset operation based on expertise and a global network.",
  },
  hero: {
    title: "Revolutionizing Asset Value Through Strategic Insight",
    description: "Xenians Group sets new standards in capital markets through unrivaled M&A advisory, sophisticated project finance structuring, and innovative asset management."
  },
  home: {
    servicesHeader: {
      subtitle: "CORE BUSINESS",
      title: "Our expertise spans the entire lifecycle of value.",
      description: "We discover the hidden value of assets by combining a sophisticated financial engineering approach with field-oriented operational capabilities."
    },
    philosophy: {
      ...INITIAL_DATA_KO.home.philosophy,
      description: "We analyze the symbolism and future growth engines of assets beyond just numbers. Every deal with Xenians Group becomes a history of trust and innovation.",
    }
  },
  company: {
    ...INITIAL_DATA_KO.company,
    intro: {
      subtitle: "XENIANS GROUP",
      title: "About the Group",
      description: "An elite strategic companion providing clear direction and sustainable value amidst the complexity of global capital markets."
    },
    organization: INITIAL_DATA_KO.company.organization.map(o => ({
      ...o,
      name: o.enName || o.name,
      role: o.enRole || o.role,
      division: o.division && o.division.includes("부문") ? o.division.replace("자문 부문", "ADVISORY DIV.").replace("전략 운영 부문", "STRATEGIC OPS DIV.").replace("위탁 운영 부문", "HOSPITALITY DIV.").replace("거버넌스 부문", "GOVERNANCE DIV.") : o.division,
      sub: o.sub?.map(s => ({ ...s, name: s.enName || s.name, role: s.enRole || s.role }))
    })),
    values: [
      { icon: "Target", title: "Excellence", desc: "Aiming for overwhelming performance through industry-leading expertise." },
      { icon: "ShieldCheck", title: "Integrity", desc: "Placing trust and transparency at the core of client relationships." },
      { icon: "Globe", title: "Global Insight", desc: "Preemptively managing risks with insights reflecting global macroeconomic trends." },
      { icon: "Users", title: "Co-Growth", desc: "A philosophy of mutual growth between employees and clients." }
    ],
    vision: {
      ...INITIAL_DATA_KO.company.vision,
      description: "Xenians Group will leap forward as a representative alternative investment and advisory group in the Asia-Pacific region by 2030."
    }
  },
  advisory: {
    header: {
      subtitle: "M&A ADVISORY",
      title: "Strategic Transactions",
      description: "We provide high-level expertise and meticulous negotiation strategies throughout the process of Sell-side, Buy-side, and Valuation."
    },
    sections: INITIAL_DATA_KO.advisory.sections.map(s => ({
      ...s,
      title: s.id === 'sell-side' ? 'Sell-side Advisory' : s.id === 'buy-side' ? 'Buy-side Advisory' : 'Corporate Valuation',
      description: s.id === 'sell-side' 
        ? "Xenians Group's sell-side advisory is a high-level financial engineering process. M&A specialists maximize seller benefits and ensure closing certainty through tailored investment modeling."
        : s.id === 'buy-side'
        ? "We lead successful acquisitions through fundamental analysis and synergy quantification. End-to-end solutions from deal sourcing to PMI."
        : "Accurate value calculation by analyzing financial and operational capabilities from an independent perspective inside authoritative reports.",
      process: s.process.map(p => ({
        ...p,
        title: p.step, // Use step name as title in EN
        content: s.id === 'sell-side' ? (
          p.step === "Initial Engagement" ? "Project strategic review and engagement contract: Meeting with management and defining transaction objectives, reviewing expected transaction structures, signing NDA, and establishing project schedule." :
          p.step === "Strategic Review & Valuation" ? "Corporate analysis and valuation: Reviewing financial statements and business structure, industry environmental analysis, DCF analysis, and determining appropriate corporate value." :
          p.step === "Marketing Preparation" ? "Investment material and deal structure design: Preparing Information Memorandum (IM), Teaser and investment points, establishing Virtual Data Room (VDR), and designing key SPA terms." :
          p.step === "Buyer Screening & Deal Sourcing" ? "Potential investor identification and contact: Sourcing Strategic/Financial Investors, utilizing global networks, and conducting Teaser distribution and initial meetings." :
          p.step === "Indicative Offer Stage" ? "Indicative offers and investment intent review: IM distribution after NDA, Q&A support, receiving IOIs, and selecting Preferred Bidders." :
          p.step === "Due Diligence" ? "Due diligence and risk review: Financial, Tax, Legal, and Operational DD, along with ESG and Compliance reviews." :
          p.step === "Negotiation & Documentation" ? "Terms negotiation and contract finalization: SPA negotiation, R&W review, price adjustment mechanism negotiation, and closing condition agreement." :
          "Closing and post-closing support: Executing closing, settlement of payment, equity transfer procedures, and post-merger integration support."
        ) : s.id === 'buy-side' ? (
          p.step === "Acquisition Strategy" ? "Acquisition strategy establishment: Setting investment objectives, target industry selection, defining investment criteria, and synergy strategy formulation." :
          p.step === "Target Screening" ? "Target identification: Market research and industry analysis, potential target sourcing, network-based deal sourcing, and private deal outreach." :
          p.step === "Preliminary Review" ? "Preliminary review and investment feasibility: Analyzing business structure, financial health, market competitiveness, and risk factors." :
          p.step === "Indicative Proposal" ? "Investment proposal and LOI: Designing investment structure, indicative valuation, LOI submission, and exclusivity negotiation." :
          p.step === "Due Diligence" ? "Meticulous due diligence: Conducting Financial, Legal, Tax, Commercial, and Operational DD and Compliance reviews." :
          p.step === "Deal Structuring" ? "Deal structure and financing: Designing acquisition structures, SPC establishment review, Project Financing (PF) review, and capital restructuring." :
          p.step === "Final Negotiation & Signing" ? "Final negotiation and contract signing: SPA negotiation, price adjustment mechanism agreement, R&W review, and Signing." :
          "Closing & PMI: Final closing, equity transfer, organization integration, management stabilization, and synergy realization."
        ) : (
          p.step === "Environment Analysis" ? "Environmental analysis: Analyzing macro trends and industry lifecycles to verify key assumptions for future profit projections." :
          p.step === "Financial Normalization" ? "Financial normalization: Adjusting non-recurring items and non-operating assets to normalize Free Cash Flow creation capability." :
          p.step === "Valuation Modeling" ? "Valuation modeling: Building DCF valuation models cross-validated with relative valuation and asset-based methods for objectivity." :
          "Scenario & Sensitivity: Simulating intrinsic value volatility through scenario-based sensitivity analysis on key macro and micro factors."
        )
      })),
      processFlow: s.id === 'sell-side' ? [
        { step: "Engagement", title: "Phase 1" },
        { step: "Valuation", title: "Phase 2" },
        { step: "Marketing", title: "Phase 3" },
        { step: "Screening", title: "Phase 4" },
        { step: "Offer", title: "Phase 5" },
        { step: "DD", title: "Phase 6" },
        { step: "Negotiation", title: "Phase 7" },
        { step: "Closing", title: "Phase 8" }
      ] : s.id === 'buy-side' ? [
        { step: "Strategy", title: "Phase 1" },
        { step: "Screening", title: "Phase 2" },
        { step: "Review", title: "Phase 3" },
        { step: "Proposal", title: "Phase 4" },
        { step: "Due Diligence", title: "Phase 5" },
        { step: "Structuring", title: "Phase 6" },
        { step: "Final Negotiation", title: "Phase 7" },
        { step: "Closing & PMI", title: "Phase 8" }
      ] : [
        { step: "Indicative", title: "Stage 1" },
        { step: "Offer", title: "Stage 2" },
        { step: "Adjusted", title: "Stage 3" },
        { step: "Final", title: "Stage 4" },
        { step: "Closing", title: "Stage 5" }
      ],
      expertise: s.id === 'sell-side' ? [
        { title: "Optimal Timing", desc: "Analyzing macro and industrial cycles for maximum valuation." },
        { title: "Strategic Storytelling", desc: "Building future growth engines and synergy values beyond numbers." },
        { title: "Global Network", desc: "Activating global SI pools to trigger deal competition." }
      ] : s.id === 'buy-side' ? [
        { title: "Proprietary Deals", desc: "Sourcing exclusive deals to minimize competition." },
        { title: "Acquisition Financing", desc: "Designing optimal fund structures via internal networks." },
        { title: "PMI Integration", desc: "Identifying integration issues from the DD stage." }
      ] : [
        { icon: "ShieldCheck", title: "M&A Valuation", desc: "Calculating objective values based on rigorous DD." },
        { icon: "PieChart", title: "Intangible Asset", desc: "Discovering hidden assets via fair value assessment." },
        { icon: "BarChart3", title: "Financial Modeling", desc: "Deriving impacts of environment changes via high-level analysis." }
      ]
    })),
    methodology: {
      ...INITIAL_DATA_KO.advisory.methodology,
      title: "In-depth Valuation Analytical Models.",
      items: [
        { title: "DCF Model", desc: "Intrinsic value through future cash flow estimation" },
        { title: "Peer Multiple", desc: "Relative valuation through market comparison" },
        { title: "Due Diligence", desc: "Strict verification of financial and tax risks" },
        { title: "Term Sheet", desc: "Precise coordination of key conditions" }
      ]
    }
  },
  pm: {
    ...INITIAL_DATA_KO.pm,
    header: {
      subtitle: "PROJECT MANAGEMENT & PF",
      title: "Financial & Capital Structuring",
      description: "Xenians Group realizes fundamental innovation in asset value beyond simple development through high-level financing structuring and thorough business management that penetrates the complex mechanisms of the real estate finance market.",
    },
    title: "Project & Construction Management",
    description: "We proactively identify and hedge various financial and engineering risks occurring throughout the life-cycle of development projects.",
    steps: INITIAL_DATA_KO.pm.steps.map(s => ({
      ...s,
      title: s.title === "Feasibility Evaluation" ? "Feasibility Evaluation" :
             s.title === "Strategic Capital Stack" ? "Strategic Capital Stack" :
             s.title === "Risk Mitigation & RM" ? "Risk Mitigation & RM" :
             s.title === "Construction Optimization" ? "Construction Optimization" :
             "Exit & Asset Repositioning",
      description: s.title === "Feasibility Evaluation" ? "Diagnosing the essential success potential through conservative and sophisticated balance analysis and legal, tax, and technical feasibility reviews." :
                   s.title === "Strategic Capital Stack" ? "Designing an optimal capital structure covering Equity, Bridge loans, and main PF to minimize financial costs." :
                   s.title === "Risk Mitigation & RM" ? "Leading constructor liability completion commitments and building multi-layered defense mechanisms against schedule delays." :
                   s.title === "Construction Optimization" ? "Achieving engineering perfection and economic efficiency through technical PM tasks like design change management." :
                   "Managing final asset value appreciation and successful exit through sell-through strategies or rental optimization."
    }))
  },
  operations: {
    ...INITIAL_DATA_KO.operations,
    header: {
      subtitle: "CONSIGNMENT OPERATIONS",
      title: "Asset Value Enhancement & Occupancy Optimization",
      description: "Maximizing NOI and capital value of assets through strategic repositioning and profit-oriented operation models."
    },
    hotel: {
      ...INITIAL_DATA_KO.operations.hotel,
      subtitle: "Hotel & Resort Consignment Operations",
      title: "Luxury Hospitality Asset Management",
      description: "We reform the fundamental profit structure of the asset. Improving NOI and redefining brand identity through PMS-based data analysis and real-time reservation optimization.",
      insight: {
        title: "STRATEGIC REPOSITIONING",
        description: "Extending the life-cycle of assets through target audience resetting and large-scale space innovation.",
        cards: [
          { title: "Revenue Management (RM)", description: "Maximizing RevPAR by deriving the optimal balance between OCC and ADR through demand forecasting." },
          { title: "Experience Design", description: "Strengthening brand loyalty by designing differentiated F&B experiences and local content." }
        ]
      }
    },
    golf: {
      ...INITIAL_DATA_KO.operations.golf,
      subtitle: "Golf Club Premium Operations",
      title: "Strategic Golf Asset Operation Optimization",
      description: "Maximizing the core value of golf course management: 'course quality' and 'customer experience'."
    }
  },
  trackRecordHeader: {
    ...INITIAL_DATA_KO.trackRecordHeader,
    subtitle: "PORTFOLIO / TRACK RECORD",
    title: "PROJECTS",
    description: ""
  },
  contactInfo: {
    formspreeEndpoint: "https://formspree.io/f/xaqvaqyd",
    bannerTitleKo: "CONTACT",
    bannerTitleEn: "CONTACT",
    bannerSubKo: "오시는 길 & 이메일 문의",
    bannerSubEn: "Global Locations & Inquiries",
    seoulAddressKo: "서울특별시 강남구 테헤란로 79길 6 JS타워",
    seoulAddressEn: "XENIANS JSTower, 6 79gil, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea",
    seoulTransportKo: "네이버/구글 지도 바로가기 연동",
    seoulTransportEn: "Seolleung Station Exit 1 (3-min walk) / Samseong Station Exit 4 (5-min walk)",
    seoulNaverMapUrl: "https://map.naver.com/v5/search/%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C79%EA%B8%B8%206",
    seoulGoogleMapUrl: "https://maps.google.com/?q=6+79gil,+Teheran-ro,+Gangnam-gu,+Seoul,+Republic+of+Korea",
    seoulTitleKo: "서울",
    seoulTitleEn: "Seoul HQ",
    londonTitleKo: "런던",
    londonTitleEn: "London",
    londonAddress: "Tower 42, 25 Old Broad St, London EC2N 1HN, United Kingdom",
    singaporeTitleKo: "싱가포르",
    singaporeTitleEn: "Singapore",
    singaporeAddress: "7 Straits View, Marina One East Tower #12-01, Singapore 018936",
    email: "info@xenians.co.kr",
    hoursKo: "09:00 - 17:00(Mon - Fri)",
    hoursEn: "09:00 - 17:00(Mon - Fri)",
    locationsSubtitleKo: "GLOBAL LOCATIONS",
    locationsSubtitleEn: "GLOBAL LOCATIONS",
    locationsTitleKo: "글로벌 오피스 안내",
    locationsTitleEn: "Global Locations & Offices",
    inquirySubtitleKo: "EMAIL INQUIRY",
    inquirySubtitleEn: "EMAIL INQUIRY",
    inquiryTitleKo: "이메일 문의 접수",
    inquiryTitleEn: "Send an Email Inquiry",
    inquiryDescKo: "부동산 개발, M&A 자문, 자산 위탁운영 등 전문 상담이 필요하신 내용을 남겨주시면 담당 부서 전문가가 24시간 이내에 회신해 드립니다.",
    inquiryDescEn: "For real estate advisory, M&A transactions, or hospitality consignment inquiries, please submit the form or email us directly at info@xenians.co.kr.",
    successTitleKo: "문의가 성공적으로 접수되었습니다.",
    successTitleEn: "Your inquiry has been submitted.",
    successDescKo: "기재해주신 이메일 주소로 담당 부서에서 신속하고 면밀히 검토 후 연락드리겠습니다.",
    successDescEn: "Our specialist team will review your requirements and respond to your email within 24 business hours."
  },
  trackRecord: INITIAL_DATA_KO.trackRecord.map(tr => ({
    ...tr,
    description: tr.id === 'tr1' ? "Cross-border M&A advisory for global market entry."
      : tr.id === 'tr2' ? "PF structuring for complex office building development."
      : tr.id === 'tr3' ? "EBITDA turnaround through consignment operation."
      : tr.id === 'tr4' ? "Hotel asset repositioning for 40% ADR increase."
      : tr.id === 'tr5' ? "Strategic golf course value-add operation."
      : "Full occupancy through MD reorganization for retail complex."
  })),
  trackRecordExtra: {
    expertise: {
      title: "SECTOR EXPERTISE",
      items: ["Consumer/Retail", "Tech/SaaS", "Manufacturing", "ESG/Green Energy", "Real Estate", "Healthcare"],
      description: "Insights piercing through the core essence of industries beyond simple financial approaches.",
      enDescription: "Bridging financial strategy with vertical industrial expertise."
    },
    global: {
      title: "Expanding Network Boundaries.",
      description: "Collaborating with global partners to create opportunities for cross-border deals.",
      enDescription: "Connecting global capital with local opportunity.",
      stats: [
        { label: "Global Partner Regions", value: "12" },
        { label: "Cross-border Deals", value: "400B+" },
        { label: "Network FI/SI", value: "150+" },
        { label: "Advisory Pool", value: "Elite" }
      ]
    }
  },
  common: {
    explore: "EXPLORE",
    aboutXenians: "About Xenians",
    advisoryServices: "Advisory Services",
    exploreDivision: "EXPLORE DIVISION",
    valuesAndPhilosophy: "Values & Philosophy",
    strategicPartnership: "Strategic Partnership",
    ceoMessageTitle: "CEO MESSAGE",
    executiveHead: "EXECUTIVE HEAD",
    executiveHeadDescription: "Group long-term vision & overall decision making",
    managingDirectorTitle: "MANAGEMENT / PARTNER",
    managingDirectorSubtitle: "Executive Managing Director",
    managingDirectorRole: "Performance management and execution oversight across all divisions.",
    systematicGovernance: "SYSTEMATIC GOVERNANCE",
    sectorExpertise: "SECTOR EXPERTISE",
    expandingNetwork: "Expanding Network Boundaries"
  },
  detailedProjects: DEFAULT_DETAILED_PROJECTS
};

export const INITIAL_DATA = INITIAL_DATA_KO;
