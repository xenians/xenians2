import React, { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { PageHeader } from '../components/PageHeader';
import { 
  Building2, 
  TrendingUp, 
  Handshake, 
  Settings, 
  CheckCircle2,
  Search,
  Share2,
  Wrench,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  FileText,
  ShieldCheck,
  BarChart3,
  Compass,
  Coins,
  Sparkles,
  Hotel,
  Activity,
  Cpu,
  Target,
  ClipboardCheck,
  Layers
} from 'lucide-react';

interface ValueDriverPoint {
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  deliverableKo: string;
  deliverableEn: string;
  strategyKo: string;
  strategyEn: string;
}

interface ProcessStep {
  step: string;
  label: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  iconName: string;
}

interface BusinessDivision {
  id: string;
  tabNumber: string;
  tabLabel: string;
  tabLabelKo: string;
  title: string;
  titleKo: string;
  descKo: string;
  descEn: string;
  imageSrc: string;
  points: ValueDriverPoint[];
  processFlow: ProcessStep[];
}

export const BusinessPage: React.FC = () => {
  const { lang } = useContent();
  const params = useParams<{ tab?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Expanded point index state for KEY SCOPES & VALUE DRIVERS (default closed, opens on click)
  const [expandedPointIdx, setExpandedPointIdx] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const divisions: BusinessDivision[] = [
    {
      id: 'mna',
      tabNumber: '01',
      tabLabel: 'M&A ADVISORY',
      tabLabelKo: 'M&A 및 매각·인수 자문',
      title: 'M&A Advisory',
      titleKo: 'M&A 및 전략적 매각·인수 자문 (M&A Advisory)',
      descKo: '전략적 매각·인수 자문 거래의 가치를 극대화합니다. 정교한 데이터 분석과 폭넓은 기관투자자 네트워크를 바탕으로 매각 전략 수립부터 투자자 매칭, 협상 및 딜 클로징까지 전 과정을 원스톱으로 총괄합니다.',
      descEn: 'Maximizing transaction value in strategic M&A and asset acquisitions. From marketing roadmap to buyer sourcing, valuation modeling, and definitive SPA closing.',
      imageSrc: '/images/business-mna-boardroom.jpg',
      points: [
        {
          titleKo: '매각 및 인수 전략 수립 및 실행 로드맵 총괄',
          titleEn: 'M&A / Buy-side & Sell-side Transaction Roadmap',
          descKo: '대상 자산 및 기업의 내재가치를 면밀히 분석하여 최적의 매각/인수 타이밍과 거래 구조를 도출합니다. 시장 사이클, 매수자 성향, 세무 및 규제 이슈를 종합적으로 고려한 단계별 마일스톤을 수립합니다.',
          descEn: 'In-depth assessment of intrinsic value to formulate optimal transaction structures, timing, regulatory compliance, and customized execution roadmaps.',
          deliverableKo: '매각/인수 전략 보고서 (Strategic Positioning Report), 단계별 마일스톤 계획표',
          deliverableEn: 'Strategic Positioning Report, Milestone Roadmap & Timeline',
          strategyKo: '거래 불확실성 최소화 및 잠재적 리스크의 선제적 헷징',
          strategyEn: 'Minimizing deal uncertainty & preemptively mitigating transaction risks',
        },
        {
          titleKo: '국내외 기관 및 글로벌 잠재 투자자 네트워크 매칭',
          titleEn: 'Domestic & Global Institutional Investor Sourcing',
          descKo: '국내 유수의 연기금, 공제회, 자산운용사, PEF뿐만 아니라 런던, 싱가포르 등 글로벌 자본 시장의 전략적·재무적 투자자(SI/FI) 풀을 가동하여 가장 경쟁력 있는 입찰 구도를 형성합니다.',
          descEn: 'Mobilizing tier-one institutional investors, asset managers, and cross-border SI/FI capital in Seoul, London, and Singapore to drive competitive bidding.',
          deliverableKo: '비밀유지협약서(NDA), 티저 레터(Teaser Letter), 투자설명서(IM)',
          deliverableEn: 'Non-Disclosure Agreement (NDA), Teaser Letter, Information Memorandum (IM)',
          strategyKo: '복수 유력 원매자 간 경쟁을 통한 밸류에이션 프리미엄 확보',
          strategyEn: 'Capturing premium valuation multiples through competitive bidder tension',
        },
        {
          titleKo: '정밀 DCF 가치평가 모델링 및 협상 밸류 극대화',
          titleEn: 'Rigorous DCF Valuation Modeling & Price Maximization',
          descKo: '현금흐름할인법(DCF), 거래사례비교법, 순자산가치법(NAV) 등을 다각도로 적용한 정교한 금융 모델링을 통해 매도자/매수자 맞춤형 협상 레버리지와 방어 논리를 완벽히 구축합니다.',
          descEn: 'Dynamic DCF modeling, precedent transaction benchmarks, and NAV analysis to engineer quantitative bargaining leverage and defend target prices.',
          deliverableKo: '동적 DCF 재무 모델(Dynamic Financial Model), 시나리오별 민감도 분석표',
          deliverableEn: 'Dynamic Financial Model, Sensitivity Matrix by Scenario',
          strategyKo: '객관적 정량 데이터 기반의 협상 우위 선점 및 거래 가치 극대화',
          strategyEn: 'Data-driven negotiation dominance to achieve optimal exit prices',
        },
        {
          titleKo: '법률·재무 실사(Due Diligence) 및 본계약 체결 지원',
          titleEn: 'Legal/Financial Due Diligence & Definitive Contract Closing',
          descKo: '대형 회계법인 및 법무법인 자문단과의 긴밀한 코디네이션을 통해 재무·세무·법률 실사를 원활히 지휘하고, SPA(주식매매계약서)의 진술·보증(R&W) 및 손해배상 조항을 치밀하게 조율합니다.',
          descEn: 'Orchestrating legal, tax, and accounting diligence teams while negotiating definitive terms in the Stock Purchase Agreement (SPA) and indemnities.',
          deliverableKo: '실사 Q&A 관리대장, 진술 및 보증(R&W) 협상 가이드, SPA 최종본',
          deliverableEn: 'Due Diligence Tracker, R&W Negotiation Term Sheet, Final SPA',
          strategyKo: '잠재적 우발 채무 및 법적 분쟁 리스크의 원천적 차단',
          strategyEn: 'Eliminating latent liabilities and post-closing dispute exposures',
        },
        {
          titleKo: '거래 종결(Closing) 및 PMI 통합 사후 관리',
          titleEn: 'Transaction Closing & Post-Merger Integration Oversight',
          descKo: '선행 조건(CP) 충족 검토, 잔금 납입, 소유권 이전 및 정부 승인 인허가 등 딜 클로징 절차를 총괄하며, 인수 후 조기 경영 안정화를 위한 PMI(인수 후 통합) 가이드를 원스톱 지원합니다.',
          descEn: 'Oversight of closing conditions precedent (CP), fund transfers, regulatory filings, and a 100-day PMI transition blueprint.',
          deliverableKo: '거래 종결 확인서(Closing Memo), 100일 PMI 실행 계획서',
          deliverableEn: 'Closing Memorandum, 100-Day PMI Strategic Plan',
          strategyKo: '성공적인 거래 매듭 및 인수 초기 시너지의 조기 가시화',
          strategyEn: 'Seamless operational transition & rapid realization of merger synergies',
        },
      ],
      processFlow: [
        {
          step: '01',
          label: 'DEAL SOURCING',
          titleKo: '딜 소싱 및 스크리닝',
          titleEn: 'Sourcing & Screening',
          descKo: '잠재 매물·원매자 전수 조사 및 비밀유지협약(NDA) 체결',
          descEn: 'Comprehensive market scanning & confidential NDA execution',
          iconName: 'search',
        },
        {
          step: '02',
          label: 'VALUATION & MODELING',
          titleKo: '가치평가 및 구조화',
          titleEn: 'Valuation & Structuring',
          descKo: '정밀 DCF 모델링, 세무·규제 사전 검토 및 밸류에이션 도출',
          descEn: 'Rigorous DCF financial modeling & strategic deal structuring',
          iconName: 'bar-chart',
        },
        {
          step: '03',
          label: 'INVESTOR MARKETING',
          titleKo: '기관 마케팅 및 티저 배포',
          titleEn: 'Targeted Marketing',
          descKo: '국내외 기관·PEF 타깃팅, 티저 레터 및 IM 배포',
          descEn: 'Teaser & IM distribution to qualified institutional investors',
          iconName: 'network',
        },
        {
          step: '04',
          label: 'DUE DILIGENCE & SPA',
          titleKo: '정밀 실사 및 본계약 협상',
          titleEn: 'Due Diligence & SPA',
          descKo: '회계·법률 실사 총괄 및 주식매매계약서(SPA) 핵심 조항 확정',
          descEn: 'Comprehensive DD coordination & definitive SPA negotiation',
          iconName: 'file-check',
        },
        {
          step: '05',
          label: 'CLOSING & PMI',
          titleKo: '거래 종결 및 사후 통합',
          titleEn: 'Closing & Integration',
          descKo: '대금 지급, 소유권 이전 및 100일 PMI 사후 전략 지원',
          descEn: 'Transaction closing, escrow release & post-merger integration',
          iconName: 'handshake',
        },
      ],
    },
    {
      id: 'development',
      tabNumber: '02',
      tabLabel: 'DEVELOPMENT & PM',
      tabLabelKo: '시행 기획 · 개발 및 PM',
      title: 'Development & PM',
      titleKo: '시행 기획, 개발 및 프로젝트 매니지먼트 (Development & PM)',
      descKo: '사업 기획부터 금융 구조화, 인허가, 개발 PM, 시공 관리 및 Exit까지 통합 관리합니다. 시장 변동성에 흔들리지 않는 자본 구조와 치밀한 리스크 헷징으로 개발 사업의 성공을 견인합니다.',
      descEn: 'Integrated development management across site acquisition, zoning approvals, PF syndication, construction PM, and exit liquidation.',
      imageSrc: '/images/business-development-tower.jpg',
      points: [
        {
          titleKo: '부지 적합성 분석 및 최고최선이용(Highest & Best Use) 기획',
          titleEn: 'Site Feasibility & Highest-and-Best-Use Master Planning',
          descKo: '대상지의 도시계획 조례, 교통 인프라, 광역 배후 수요 및 토지 용도를 다각도로 시뮬레이션하여 용적률을 극대화하고 자산 가치를 최고조로 끌어올리는 복합개발 콘셉트를 도출합니다.',
          descEn: 'Rigorous analysis of zoning ordinances, infrastructure, and demographic catchments to engineer highest-and-best-use mixed-use master concepts.',
          deliverableKo: '부지 사업타당성 보고서, 최고최선이용(HBU) 기본구상(안), MD 공간배치도',
          deliverableEn: 'Feasibility Study, HBU Conceptual Master Plan, Spatial Programming',
          strategyKo: '토지 용적률 및 사업 면적의 효율적 극대화로 초기 개발이익 확보',
          strategyEn: 'Maximizing FAR utilization and baseline land yield for superior return',
        },
        {
          titleKo: '인허가 프로세스 단축 및 대관 리스크 선제적 통제',
          titleEn: 'Permitting Acceleration & Municipal Regulatory Oversight',
          descKo: '지구단위계획 수립, 건축 심의, 교통·환경영향평가 등 까다로운 행정 절차를 사전에 검토하고 유관 지자체와의 소통을 주도하여 인허가 지연으로 인한 금융 비용 누수를 원천 차단합니다.',
          descEn: 'Navigating municipal approvals, environmental reviews, and zoning hearings to compress approval cycles and prevent interest carrying drag.',
          deliverableKo: '인허가 통합 마일스톤 일정표, 지자체 대관 심의 대응 리포트',
          deliverableEn: 'Regulatory Milestone Schedule, Municipal Hearing Review Dossier',
          strategyKo: '인허가 소요 기간 단축을 통한 브릿지론 금융 이자 비용 대폭 절감',
          strategyEn: 'Compressing approval timelines to slash bridge financing interest costs',
        },
        {
          titleKo: '선순위·중순위 PF 대출 주선 및 정교한 금융 구조화',
          titleEn: 'Senior/Mezzanine PF Syndication & Financial Modeling',
          descKo: '시중은행, 증권사, 보험사, 연기금 등 주요 금융기관과의 탄탄한 네트워크를 기반으로 선순위, 중순위(Mezzanine), 에쿼티(Equity)의 최적 조달 비율을 설계하고 본 PF 금융 약정을 체결합니다.',
          descEn: 'Structuring resilient capital stacks across Senior, Mezzanine, and LP Equity tranches with top financial institutions for optimal WACC.',
          deliverableKo: 'PF 사업약정서(Loan Agreement), 현금흐름 수지분석표(Cash-Flow Waterfall)',
          deliverableEn: 'Syndicated Loan Agreement, Cash-Flow Waterfall & Underwriting Sheet',
          strategyKo: '조달 금리 및 취급 수수료 최적화로 사업 안정성과 시행 마진 동시 확보',
          strategyEn: 'Optimizing cost of capital while securing defensive covenant headroom',
        },
        {
          titleKo: '책임준공 시공사 입찰 및 공정·원가 감리 총괄 (PM)',
          titleEn: 'Guaranteed Completion Contractor Procurement & Cost PM',
          descKo: '1군 대형 건설사와의 책임준공 도급계약 협상, 공사비 원가 적정성 검증(VE), 마일스톤별 공정률 및 현장 품질 관리를 총괄하여 공기 지연 없는 완벽한 시공 품질을 보장합니다.',
          descEn: 'Procuring tier-1 general contractors under Guaranteed Maximum Price (GMP) terms, managing value engineering (VE), and auditing construction PM.',
          deliverableKo: '공사도급계약 가이드라인, 공정·원가 모니터링 주간/월간 리포트, VE 제안서',
          deliverableEn: 'Construction Contract Protocols, Weekly/Monthly PM Reports, VE Dossier',
          strategyKo: '공사비 증액(Claim) 원천 차단 및 적기 준공을 통한 리스크 제거',
          strategyEn: 'Eliminating cost overrun claims and ensuring flawless on-time completion',
        },
        {
          titleKo: '조기 자금 회수를 위한 Exit 전략 및 리밸런싱',
          titleEn: 'Pre-Sale Execution & Structured Exit Liquidation',
          descKo: '선분양, 기관 선매입(Forward Purchase), 리츠(REITs) 자산 편입 등 다각도의 출구 전략을 사업 착수 단계부터 병행하여 투자자의 원리금 회수 안정성을 조기에 확정 짓습니다.',
          descEn: 'Structuring forward purchases, early pre-sales, and institutional REIT exits from Day 1 to de-risk equity returns and lock in project profits.',
          deliverableKo: 'Exit 포트폴리오 전략 보고서, 기관 선매입 제안서, 사업 청산 정산서',
          deliverableEn: 'Exit Strategy Dossier, Institutional Forward-Sale Proposal, Final Settlement',
          strategyKo: '개발 이익의 조기 실현 및 준공 시점의 미분양·시장 변동성 위험 제거',
          strategyEn: 'Early profit locking and total elimination of market liquidation risks',
        },
      ],
      processFlow: [
        {
          step: '01',
          label: 'FEASIBILITY & CONCEPT',
          titleKo: '사업성 검토 및 마스터플랜',
          titleEn: 'Site Feasibility & Concept',
          descKo: '부지 적합성 분석, 최고최선이용(HBU) 도출 및 마스터플랜 기획',
          descEn: 'Zoning review, HBU modeling & architectural master conceptualization',
          iconName: 'compass',
        },
        {
          step: '02',
          label: 'ZONING & APPROVALS',
          titleKo: '인허가 및 규제 승인',
          titleEn: 'Zoning & Permitting',
          descKo: '지구단위계획 및 건축·교통 심의 신속 취득, 리스크 선제 통제',
          descEn: 'Accelerated municipal approvals, zoning variances & regulatory compliance',
          iconName: 'shield-check',
        },
        {
          step: '03',
          label: 'PF FINANCING',
          titleKo: 'PF 금융 구조화 및 조달',
          titleEn: 'PF Syndication',
          descKo: '선·중순위 대주단 구성, 에쿼티 유치 및 사업약정 체결',
          descEn: 'Senior/Mezzanine loan syndication, equity placement & financial close',
          iconName: 'coins',
        },
        {
          step: '04',
          label: 'PM & CONSTRUCTION',
          titleKo: '시공 책임준공 및 공정 관리',
          titleEn: 'Construction PM',
          descKo: '1군 시공사 책임준공 도급계약, 원가 감리(VE) 및 공정 완벽 준수',
          descEn: 'Tier-1 contractor procurement, rigorous VE cost control & site PM',
          iconName: 'wrench',
        },
        {
          step: '05',
          label: 'EXIT & LIQUIDATION',
          titleKo: '분양·매각 및 이익 정산',
          titleEn: 'Exit & Liquidation',
          descKo: '분양 완판 및 기관 선매입을 통한 개발 수익의 안정적 회수',
          descEn: 'Forward-sale execution, total sell-out closing & profit distribution',
          iconName: 'award',
        },
      ],
    },
    {
      id: 'sales',
      tabNumber: '03',
      tabLabel: 'SALES & MARKETING',
      tabLabelKo: '분양 대행 및 마케팅',
      title: 'Sales & Marketing',
      titleKo: '전략적 분양 대행 및 프리미엄 마케팅 (Sales & Marketing)',
      descKo: '철저한 시장 분석과 전략적 포지셔닝으로 최적의 판매 성과를 만듭니다. 단순한 영업 대행을 넘어 시행 관점의 수지분석과 타깃 VIP 마케팅을 결합하여 조기 완판을 달성합니다.',
      descEn: 'Data-driven marketing and strategic sales execution. Structuring developer-side profitability analysis and bespoke VIP targeting to drive rapid sell-out.',
      imageSrc: '/images/business-sales-gallery.jpg',
      points: [
        {
          titleKo: '지역 시장 수급 및 타깃 수요층 정밀 통계 분석',
          titleEn: 'Demographic Analytics & Micro-Market Demand Segmentation',
          descKo: '인근 지역 5개년 공급 물량, 분양가 추이, 거래 회전율 및 유효 고소득 가구 데이터를 통계적으로 교차 분석하여 실패 없는 타깃 고객군 페르소나를 정밀 도출합니다.',
          descEn: 'Cross-analyzing historical absorption rates, buyer demographics, and submarket transaction velocities to map high-intent target buyer profiles.',
          deliverableKo: '미시 부동산 수급 분석 보고서, 타깃 고객군 페르소나 프로파일링 리포트',
          deliverableEn: 'Submarket Absorption Report, Target Buyer Persona Blueprint',
          strategyKo: '데이터 기반 정밀 타깃팅으로 분양 마케팅 비용 낭비 제로화',
          strategyEn: 'Data-guided demand targeting to eliminate marketing budget wastage',
        },
        {
          titleKo: '시행사 관점의 분양가 산정 및 수지분석 최적화',
          titleEn: 'Developer Cash-Flow Underwriting & Pricing Strategy',
          descKo: '단순한 중개 영업이 아닌 시행사의 수지 결산 관점에서, 층별·향별·타입별 분양가를 정밀 차등화하여 분양 초기 자금 회수 속도와 시행 마진을 극대화합니다.',
          descEn: 'Floor-by-floor and unit-by-unit pricing matrices modeled against total project cash flows to accelerate early liquidity while maximizing developer net margins.',
          deliverableKo: '타입·군별 분양가 매트릭스, 분양률 시나리오별 수지 시뮬레이션표',
          deliverableEn: 'Graduated Pricing Matrix, Cash-Flow Sensitivity Analysis by Absorption',
          strategyKo: '안정적 초기 분양률 확보와 개발 사업의 최종 순수익 극대화',
          strategyEn: 'Accelerating early contract velocity while defending top-line margin',
        },
        {
          titleKo: '하이엔드 VIP 마케팅 및 오프라인 라운지 운영 총괄',
          titleEn: 'High-End VIP Private Marketing & Gallery Operations',
          descKo: '고액 자산가(HNWIs)를 위한 사전 예약제 프라이빗 갤러리 기획, 하이엔드 라이프스타일 브랜드 협업 프라이빗 쇼케이스, 1:1 심층 자산 브리핑을 전담 운영합니다.',
          descEn: 'Designing confidential private sales salons, ultra-high-net-worth (UHNW) client invitations, and discreet one-on-one investment briefings.',
          deliverableKo: 'VIP 프라이빗 갤러리 운영 매뉴얼, VIP 멤버십 DB 초청 프로그램',
          deliverableEn: 'Private Gallery Operating Manual, Exclusive VIP Invitation Program',
          strategyKo: '최고급 하이엔드 자산의 희소성 각인 및 계약 전환율 극대화',
          strategyEn: 'Amplifying prestige appeal and converting high-conviction VIP leads',
        },
        {
          titleKo: '디지털 미디어 믹스 및 온·오프라인 통합 프로모션',
          titleEn: 'Digital Media Matrix & Omni-Channel Promotion Campaigns',
          descKo: '고도화된 디지털 퍼포먼스 광고, 시네마틱 3D 영상 콘텐츠, 유력 부동산 인플루언서 협업 및 랜드마크 옥외 미디어를 결합하여 시장의 시선을 압도합니다.',
          descEn: 'Hyper-targeted performance ads, architectural CGI visuals, influencer engagement, and premier billboard placements executing an integrated omnichannel blitz.',
          deliverableKo: '통합 미디어 믹스 실행 계획서, 주간 리드(Lead) 유입 및 전환 분석표',
          deliverableEn: 'Omni-Channel Media Mix Plan, Weekly Lead Conversion Analytics',
          strategyKo: '단기간 폭발적인 유효 청약 고객 집객 및 브랜드 인지도 선점',
          strategyEn: 'Generating intense subscription demand within a compressed marketing window',
        },
        {
          titleKo: '계약자 사후 관리 및 잔금 납입·입주 관리 지원',
          titleEn: 'Contractor Management & Post-Closing Move-In Support',
          descKo: '계약 체결 이후 중도금 집단대출 실행, 입주 예정자 사전 점검 코디네이션, 소유권 이전 등기 및 잔금 완납까지 완벽한 사후 관리 시스템으로 계약 해지율을 제로화합니다.',
          descEn: 'Providing turnkey post-sale management including interim loan syndication, pre-occupancy inspection oversight, and title transfer settlement.',
          deliverableKo: '계약자 케어 프로세스 가이드, 입주 관리 및 잔금 수납 모니터링표',
          deliverableEn: 'Post-Sale Customer Care Guide, Move-In & Final Settlement Dashboard',
          strategyKo: '계약 해지율 0% 달성 및 안정적인 사업 정산 마무리 보장',
          strategyEn: 'Achieving zero contract default rate and flawless final project settlement',
        },
      ],
      processFlow: [
        {
          step: '01',
          label: 'MARKET RESEARCH',
          titleKo: '시장 수급 및 타깃 분석',
          titleEn: 'Market Research',
          descKo: '인근 실거래·공급 물량 전수 조사 및 유효 타깃 수요층 도출',
          descEn: 'Submarket demographic audit, absorption analysis & persona mapping',
          iconName: 'search',
        },
        {
          step: '02',
          label: 'PRICING STRATEGY',
          titleKo: '전략적 분양가 산정',
          titleEn: 'Pricing Strategy',
          descKo: '시행사 수지 극대화를 위한 군별·타입별 차등 분양가 설계',
          descEn: 'Developer profitability underwriting & graduated unit pricing matrix',
          iconName: 'pie-chart',
        },
        {
          step: '03',
          label: 'VIP PRE-MARKETING',
          titleKo: '프라이빗 갤러리 운영',
          titleEn: 'VIP Pre-Marketing',
          descKo: '하이엔드 VIP 타깃팅 라운지 기획 및 사전 청약 의향 확보',
          descEn: 'Curated VIP private gallery curation, private previews & lead seeding',
          iconName: 'sparkles',
        },
        {
          step: '04',
          label: 'SALES CAMPAIGN',
          titleKo: '전문 영업 및 계약 체결',
          titleEn: 'Sales Closing Campaign',
          descKo: '옴니채널 미디어 믹스 캠페인 및 전문 상담을 통한 조기 완판',
          descEn: 'Omnichannel promotional launch, high-touch consultation & rapid sell-out',
          iconName: 'target',
        },
        {
          step: '05',
          label: 'POST-SALES MANAGEMENT',
          titleKo: '입주 관리 및 잔금 수납',
          titleEn: 'Post-Sales Management',
          descKo: '계약자 케어, 중도금 대출 연계 및 무결점 잔금 입주 총괄',
          descEn: 'Buyer care, interim mortgage bridge & flawless handover settlement',
          iconName: 'award',
        },
      ],
    },
    {
      id: 'operation',
      tabNumber: '04',
      tabLabel: 'OPERATIONS',
      tabLabelKo: '위탁운영',
      title: 'Operations',
      titleKo: '호텔·리조트 및 상업시설 위탁운영 (Hospitality Operations)',
      descKo: '운영 효율과 수익성 개선으로 자산의 가치를 높입니다. 호텔, 럭셔리 리조트, 골프장, 복합 상업시설의 전문 운영 시스템과 다이내믹 요금 전략을 통해 영업이익(NOI)을 극대화합니다.',
      descEn: 'Maximizing Net Operating Income (NOI) and operational efficiency for luxury hotels, resorts, golf clubs, and commercial complexes.',
      imageSrc: '/images/business-hotel-resort.jpg',
      points: [
        {
          titleKo: '호텔·리조트·골프장 하스피탈리티 전문 위탁운영',
          titleEn: 'Full-Service Luxury Hospitality & Resort Operations',
          descKo: '글로벌 럭셔리 호텔 수준의 체계적인 총괄 운영 시스템을 적용하여, 브랜드 콘셉트 설정부터 전문 인력 채용·교육, 객실 정비, 컨시어지 및 VIP 멤버십 케어까지 원스톱으로 책임집니다.',
          descEn: 'Implementing global luxury standards across staffing, guest services, housekeeping, front desk operations, and private concierge curation.',
          deliverableKo: '호텔 표준 운영 절차서(SOP), 서비스 품질 평가(QA) 가이드라인',
          deliverableEn: 'Standard Operating Procedures (SOP), Quality Assurance (QA) Guidelines',
          strategyKo: '독보적인 서비스 품질 확보 및 자산 브랜드 가치 프리미엄 창출',
          strategyEn: 'Establishing premier hospitality reputation and asset brand premiums',
        },
        {
          titleKo: '다이내믹 요금(Revenue Management) 및 객실 가동률 극대화',
          titleEn: 'Dynamic Pricing & Revenue Yield Maximization',
          descKo: '실시간 빅데이터 수요 예측 알고리즘을 바탕으로 ADR(평균객실단가)을 기동성 있게 조정하고, 글로벌 OTA 및 자사 직판(Direct Booking) 채널 믹스를 최적화하여 RevPAR을 극대화합니다.',
          descEn: 'Deploying algorithmic revenue management (RMS) to adjust dynamic ADR and fine-tune direct-to-consumer vs. global OTA channel distributions.',
          deliverableKo: '일간/주간 RMS 레비뉴 리포트, 채널별 수수료 최적화 분석표',
          deliverableEn: 'Daily/Weekly RMS Yield Report, Channel Distribution Optimization Audit',
          strategyKo: '성수기 수익 극대화 및 비수기 가동률 방어를 통한 총매출 증대',
          strategyEn: 'Maximizing peak-season ADR while defending occupancy during shoulder periods',
        },
        {
          titleKo: 'F&B 리포지셔닝 및 프리미엄 식음 콘텐츠 기획',
          titleEn: 'F&B Concept Repositioning & Dining Curation',
          descKo: '미쉐린 스타 셰프 및 트렌디한 F&B 브랜드와의 컬래버레이션, 시그니처 다이닝 및 프라이빗 라운지 기획을 통해 부대시설 매출을 비약적으로 끌어올리고 핫플레이스화를 실현합니다.',
          descEn: 'Collaborating with renowned culinary brands and Michelin-starred chefs to re-concept signature restaurants, rooftops, and private dining lounges.',
          deliverableKo: 'F&B 마스터 콘셉트 기획서, 식음 원가(Food Cost) 관리 대장',
          deliverableEn: 'Master F&B Concept Blueprint, Food Cost Control Matrix',
          strategyKo: '투숙객 외 외부 고객 유입 증대 및 F&B 영업 마진 획기적 개선',
          strategyEn: 'Driving high non-room revenue and expanding regional customer footfall',
        },
        {
          titleKo: '우량 테넌트 유치(MD 개편) 및 장기 마스터리스 계약',
          titleEn: 'Commercial Anchor Tenant Leasing & MD Restructuring',
          descKo: '상업 복합시설의 집객력을 견인할 핵심 앵커 테넌트를 엄선 유치하고, 공실 리스크를 원천 차단하는 전략적 장기 임대차 계약 구조를 설계하여 안정적인 현금흐름을 창출합니다.',
          descEn: 'Attracting premium lifestyle, retail, and wellness anchors while structuring long-term master leases that eliminate vacancy risk.',
          deliverableKo: '상업시설 MD 개편 마스터플랜, 테넌트 임대차 조건 협약서(LOI/Lease)',
          deliverableEn: 'Commercial MD Restructuring Blueprint, Anchor Tenant Lease Agreements',
          strategyKo: '안정적인 장기 임대 수익 기반 구축 및 상권 랜드마크화 달성',
          strategyEn: 'Securing defensive long-term lease cash flows and landmark commercial status',
        },
        {
          titleKo: '운영 데이터 기반 자산 리노베이션 및 가치 제고',
          titleEn: 'Data-Driven Capex Repositioning & Value-Add Execution',
          descKo: '실시간 고객 만족도 데이터와 시설 가동률을 분석하여 최소 비용으로 최대 효과를 도출하는 부분 리노베이션(Value-Add CapEx)을 단행, 자산 가치를 극적으로 리밸류에이션합니다.',
          descEn: 'Leveraging guest behavioral analytics to target high-ROI value-add capex enhancements that refresh the property and compress terminal cap rates.',
          deliverableKo: '연간 CapEx 투자 계획서, 공간 효율화 투자수익률(ROI) 분석 보고서',
          deliverableEn: 'Annual CapEx Investment Plan, Spatial Optimization ROI Dossier',
          strategyKo: '자산 감가상각 방어 및 추후 자산 매각 시 캡레이트(Cap Rate) 하락 유도',
          strategyEn: 'Preventing asset obsolescence and driving cap rate compression on exit',
        },
      ],
      processFlow: [
        {
          step: '01',
          label: 'ASSET DIAGNOSIS',
          titleKo: '현장 실사 및 자산 진단',
          titleEn: 'Asset Audit & Diagnosis',
          descKo: '호텔·리조트 하드웨어/소프트웨어 진단 및 리포지셔닝 기획',
          descEn: 'Physical asset inspection, operational audit & repositioning strategy',
          iconName: 'activity',
        },
        {
          step: '02',
          label: 'REVENUE OPTIMIZATION',
          titleKo: '수익 관리 및 채널 최적화',
          titleEn: 'Revenue Management (RMS)',
          descKo: '다이내믹 요금(RMS) 알고리즘 적용 및 글로벌 OTA 채널 재편',
          descEn: 'Algorithmic dynamic pricing & direct vs OTA distribution optimization',
          iconName: 'bar-chart',
        },
        {
          step: '03',
          label: 'F&B & MD CURATION',
          titleKo: '식음·상업 콘텐츠 재편',
          titleEn: 'F&B & Tenant Curation',
          descKo: '프리미엄 시그니처 다이닝 도입 및 우량 앵커 테넌트 유치',
          descEn: 'Signature culinary concepts, lifestyle anchors & master leasing',
          iconName: 'hotel',
        },
        {
          step: '04',
          label: 'SERVICE EXCELLENCE',
          titleKo: '표준 운영 및 품질 관리',
          titleEn: 'Operational Excellence',
          descKo: '글로벌 스탠다드 SOP 적용 및 지속적인 서비스 품질 평가',
          descEn: 'Luxury SOP execution, staff empowerment & rigorous QA auditing',
          iconName: 'shield-check',
        },
        {
          step: '05',
          label: 'NOI MAXIMIZATION',
          titleKo: '영업이익 극대화 및 밸류업',
          titleEn: 'NOI Maximization & Value-Up',
          descKo: '비용 절감과 객실당 매출(RevPAR) 증대로 자산 매각 가치 제고',
          descEn: 'Surging NOI performance, cap-rate compression & institutional exit readiness',
          iconName: 'award',
        },
      ],
    },
    {
      id: 'fm',
      tabNumber: '05',
      tabLabel: 'FACILITY MANAGEMENT',
      tabLabelKo: '스마트 시설관리 (FM)',
      title: 'Facility Management',
      titleKo: '위탁운영 연계형 스마트 시설관리 (Facility Management)',
      descKo: '시설의 가치를 유지하고 지속 가능한 경쟁력을 만듭니다. IoT 기반의 스마트 BMS/IBS 원격 모니터링과 LCC(생애주기비용) 절감 솔루션으로 안전하고 효율적인 빌딩 운영을 보장합니다.',
      descEn: 'Preserving asset longevity and operational safety through IoT-driven smart BMS monitoring, predictive maintenance, and LCC optimization.',
      imageSrc: '/images/business-smart-fm.jpg',
      points: [
        {
          titleKo: 'IoT 기반 스마트 BMS 원격 중앙 관제 및 에너지 절감',
          titleEn: 'IoT-Enabled Smart BMS Central Monitoring & Energy Optimization',
          descKo: '빌딩 내 전력, 가스, 냉난방, 급배수 설비 센서를 클라우드 스마트 BMS와 연동하여 실시간 에너지 부하를 자동 제어하고 공용 관리비를 최대 20% 절감합니다.',
          descEn: 'Integrating real-time HVAC, electrical, and plumbing sensors into cloud-connected BMS architectures to automate load shedding and cut utility costs.',
          deliverableKo: '스마트 BMS 대시보드 구축서, 에너지 사용량 월간 절감 보고서',
          deliverableEn: 'Smart BMS Architecture Blueprint, Monthly Energy Optimization Audit',
          strategyKo: '운영비(OPEX)의 획기적 절감 및 실시간 원격 안전 관제 시스템 완비',
          strategyEn: 'Substantial OPEX savings and real-time remote facility safety surveillance',
        },
        {
          titleKo: '건축·기계·전기·소방 설비 예방 정비 및 안전 진단',
          titleEn: 'Preventive Maintenance for HVAC, Electrical & Fire Safety',
          descKo: '정기 열화상 진단, 절연 저항 테스트, 소방 연동 정밀 점검 등 사전 예지 보전(Predictive Maintenance)을 통해 불시의 장비 셧다운과 안전사고를 완벽히 예방합니다.',
          descEn: 'Executing predictive maintenance schedules including thermal imaging, electrical load tests, and fire system simulations to prevent catastrophic downtime.',
          deliverableKo: '연간 법정/정기 점검 계획서, 설비 예방정비 이력 관리 대장',
          deliverableEn: 'Statutory Inspection Plan, Predictive Equipment Maintenance Ledger',
          strategyKo: '장비 고장으로 인한 운영 중단 사고 제로(Zero Downtime) 달성',
          strategyEn: 'Zero unplanned downtime and total prevention of structural hazards',
        },
        {
          titleKo: 'LCC(건축물 생애주기비용) 분석 및 장기수선계획 수립',
          titleEn: 'Life Cycle Costing (LCC) & Long-Term Maintenance Planning',
          descKo: '건축물의 내구연한과 주요 설비의 교체 주기를 과학적으로 예측하여 향후 10~30년간 발생할 장기수선계획과 수선충당금을 최적화함으로써 돌발적 대규모 지출을 방지합니다.',
          descEn: 'Applying actuarial LCC models to formulate 10-to-30-year capital expenditure schedules and replacement reserves, eliminating surprise cash calls.',
          deliverableKo: '장기수선계획서(Long-Term Replacement Plan), LCC 최적화 시뮬레이션 보고서',
          deliverableEn: 'Long-Term Capital Replacement Plan, LCC Actuarial Simulation',
          strategyKo: '예측 가능한 안정적 시설 예산 운영 및 건물의 물리적 수명 연장',
          strategyEn: 'Predictable capex budgeting and significant extension of asset lifespan',
        },
        {
          titleKo: 'ESG 친환경 빌딩 인증(LEED / G-SEED) 컨설팅',
          titleEn: 'ESG Green Building Certification (LEED / G-SEED) Advisory',
          descKo: '친환경 자재 사용, 실내 공기질 정밀 모니터링, 절수 설비 적용 등 글로벌 ESG 기준에 부합하는 환경 운영 가이드를 제공하여 국제 친환경 건축물 인증 획득을 지원합니다.',
          descEn: 'Advising on green material retrofits, indoor environmental quality (IEQ) controls, and water-conservation systems to achieve LEED and G-SEED certifications.',
          deliverableKo: 'LEED/녹색건축인증 평가 보고서, ESG 탄소배출량 감축 현황판',
          deliverableEn: 'LEED / Green Building Dossier, Scope 1 & 2 Carbon Reduction Dashboard',
          strategyKo: '글로벌 기관 투자자 선호도 극대화 및 친환경 빌딩 프리미엄 확보',
          strategyEn: 'Elevating institutional investor appeal and unlocking green building premiums',
        },
        {
          titleKo: '24/365 긴급 대응 체계 및 무재해 운영 관리',
          titleEn: '24/365 Emergency Response & Zero-Incident Facility Protocols',
          descKo: '화재, 누수, 정전, 지진 등 예기치 못한 비상사태에 대비하여 24시간 전문 종합방재실 운영과 기동반 즉시 출동 체계를 가동하여 입주민과 자산의 안전을 철저히 수호합니다.',
          descEn: 'Maintaining a 24/7 central control center with rapid-deployment strike teams prepared for immediate response to fire, flooding, or power failure events.',
          deliverableKo: '비상 대응 시나리오 매뉴얼, 비상 훈련 및 무재해 운영 기록부',
          deliverableEn: 'Crisis Response Action Protocols, Emergency Drill & Safety Record',
          strategyKo: '365일 안전하고 쾌적한 빌딩 환경 보장 및 법적 책임 리스크 예방',
          strategyEn: '365-day tenant safety assurance and complete insulation from liability',
        },
      ],
      processFlow: [
        {
          step: '01',
          label: 'ENGINEERING AUDIT',
          titleKo: '시설 종합 정밀 진단',
          titleEn: 'Full-Asset Engineering Audit',
          descKo: '건축, 기계, 전기, 소방 설비 전수 점검 및 리스크 식별',
          descEn: 'Holistic structural, mechanical, electrical & fire life-safety inspection',
          iconName: 'wrench',
        },
        {
          step: '02',
          label: 'SMART BMS INTEGRATION',
          titleKo: '스마트 관제 시스템 구축',
          titleEn: 'Smart BMS / IoT Integration',
          descKo: 'IoT 기반 원격 중앙관제 연동 및 실시간 에너지 모니터링',
          descEn: 'Cloud IoT sensor deployment & automated central monitoring installation',
          iconName: 'cpu',
        },
        {
          step: '03',
          label: 'PREVENTIVE MAINTENANCE',
          titleKo: '예방 정비 및 에너지 절감',
          titleEn: 'Preventive Maintenance',
          descKo: '설비 생애주기 기반 사전 정밀 유지보수 및 공조 최적화',
          descEn: 'Predictive equipment servicing & automated HVAC efficiency scheduling',
          iconName: 'settings',
        },
        {
          step: '04',
          label: 'ESG & SAFETY PROTOCOLS',
          titleKo: '친환경 인증 및 안전 방재',
          titleEn: 'ESG & Safety Protocols',
          descKo: 'LEED 친환경 빌딩 인증 컨설팅 및 24/365 무재해 방재 가동',
          descEn: 'LEED green certification roadmap & 24/7 zero-incident disaster protocols',
          iconName: 'shield-check',
        },
        {
          step: '05',
          label: 'LCC OPTIMIZATION',
          titleKo: '생애주기 비용 절감',
          titleEn: 'LCC Cost Optimization',
          descKo: '장기수선계획 수립 및 내구연한 연장으로 빌딩 자산 가치 보존',
          descEn: 'Actuarial long-term reserve planning & building asset value preservation',
          iconName: 'award',
        },
      ],
    },
  ];

  // Resolve active tab from params or searchParams
  const rawKey = (params.tab || searchParams.get('tab') || 'mna').toLowerCase();
  
  // Tab alias mapping
  let activeDivisionId = 'mna';
  if (['mna', 'm&a', 'sellside', 'buyside', 'valuation'].includes(rawKey)) {
    activeDivisionId = 'mna';
  } else if (['development', 'pm', 'dev', 'pf'].includes(rawKey)) {
    activeDivisionId = 'development';
  } else if (['sales', 'marketing', 'sales-marketing'].includes(rawKey)) {
    activeDivisionId = 'sales';
  } else if (['operation', 'operations', 'hospitality', 'ops'].includes(rawKey)) {
    activeDivisionId = 'operation';
  } else if (['fm', 'facility', 'facility-management'].includes(rawKey)) {
    activeDivisionId = 'fm';
  }

  const current = divisions.find((d) => d.id === activeDivisionId) || divisions[0];

  const handleTabChange = (divId: string) => {
    setExpandedPointIdx(null); // default closed on tab switch so contents appear on click
    navigate(`/business/${divId}`, { replace: true });
  };

  // Helper function to render process step icons
  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-5 h-5 text-[#c6a35b]" />;
      case 'bar-chart':
        return <BarChart3 className="w-5 h-5 text-[#c6a35b]" />;
      case 'network':
        return <Share2 className="w-5 h-5 text-[#c6a35b]" />;
      case 'file-check':
        return <ClipboardCheck className="w-5 h-5 text-[#c6a35b]" />;
      case 'handshake':
        return <Handshake className="w-5 h-5 text-[#c6a35b]" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-[#c6a35b]" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-[#c6a35b]" />;
      case 'coins':
        return <Coins className="w-5 h-5 text-[#c6a35b]" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-[#c6a35b]" />;
      case 'award':
        return <CheckCircle2 className="w-5 h-5 text-[#c6a35b]" />;
      case 'pie-chart':
        return <Building2 className="w-5 h-5 text-[#c6a35b]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#c6a35b]" />;
      case 'target':
        return <Target className="w-5 h-5 text-[#c6a35b]" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-[#c6a35b]" />;
      case 'hotel':
        return <Hotel className="w-5 h-5 text-[#c6a35b]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#c6a35b]" />;
      case 'settings':
        return <Settings className="w-5 h-5 text-[#c6a35b]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#c6a35b]" />;
    }
  };

  return (
    <div className="flex flex-col bg-[#f7f5f0] text-[#141413] min-h-screen selection:bg-[#c6a35b] selection:text-white">
      {/* 1. TOP HEADER BANNER with Full Background Photo */}
      <PageHeader
        title="OUR BUSINESS"
        breadcrumb="BUSINESS"
        subtitle="VALUE-DRIVEN, RESULT-ORIENTED REAL ESTATE SERVICES"
        imageSrc="/images/header-business.jpg"
        imageAlt="Business Divisions"
      />

      {/* 2. MAIN BUSINESS DETAIL (Left Vertical Division Selector + Right Clean Content) */}
      <section className="py-16 md:py-24 px-6 md:px-[6vw]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Vertical Division List (Unified Luxury Sidebar with Gold Hover & Spotlight Dimming) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 pr-0 lg:pr-4">
            <div className="mb-5 pb-3.5 border-b border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#dfbe7a] to-[#9e7a32] shadow-2xs shrink-0" />
                <span className="font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#1e3a8a] tracking-tight">
                  {lang === 'ko' ? '핵심 사업 영역' : 'BUSINESS SECTORS'}
                </span>
              </div>
              <span className="font-mono text-[11px] font-bold text-[#9e7a32] bg-[#faf7f2] px-2.5 py-0.5 rounded-full border border-[#c6a35b]/25 shadow-2xs">
                0{divisions.length} {lang === 'ko' ? 'DIVISIONS' : 'DIVISIONS'}
              </span>
            </div>

            <nav 
              className="flex flex-col gap-2"
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {divisions.map((div) => {
                const isActive = div.id === current.id;
                const isHovered = hoveredMenu === div.id;
                const isDimmed = hoveredMenu !== null && !isHovered;

                return (
                  <button
                    key={div.id}
                    onMouseEnter={() => setHoveredMenu(div.id)}
                    onClick={() => handleTabChange(div.id)}
                    className={`group cursor-pointer relative w-full text-left py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-xs transition-all duration-300 flex items-center justify-between border-t-0 border-r-0 border-l-[3px] border-b-[2px] overflow-hidden ${
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
                          isActive || isHovered ? 'text-[#9e7a32]' : 'text-[#888888] group-hover:text-[#9e7a32]'
                        }`}
                      >
                        {div.tabNumber}
                      </span>
                      <span
                        className={`font-sans text-[13.5px] sm:text-[14px] tracking-tight truncate transition-colors duration-200 ${
                          isActive || isHovered
                            ? 'font-bold text-[#111111]'
                            : 'font-medium text-[#333333] group-hover:text-[#111111] group-hover:font-bold'
                        }`}
                      >
                        {lang === 'ko' ? div.tabLabelKo : div.tabLabel}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center pl-1.5 shrink-0">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive || isHovered
                          ? 'bg-gradient-to-br from-[#dfbe7a] via-[#c6a35b] to-[#9e7a32] text-white shadow-2xs translate-x-0.5 scale-105' 
                          : 'bg-black/[0.04] text-[#888888] group-hover:bg-gradient-to-br group-hover:from-[#dfbe7a] group-hover:via-[#c6a35b] group-hover:to-[#9e7a32] group-hover:text-white group-hover:scale-105 group-hover:translate-x-0.5'
                      }`}>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-black/[0.08] font-sans text-[13.5px] text-[#555555] leading-relaxed break-keep">
              {lang === 'ko' 
                ? '제니안스는 각 분야 최고의 전문 인력으로 구성된 전담 팀을 통해 맞춤형 자산 솔루션을 제공합니다.'
                : 'XENIANS provides tailored real estate solutions through dedicated multi-disciplinary advisory teams.'}
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8">
            {/* Top Featured Service Image */}
            <div className="w-full h-[260px] sm:h-[340px] md:h-[400px] rounded-sm overflow-hidden mb-8 border border-black/[0.08] shadow-sm relative group">
              <img
                src={current.imageSrc}
                alt={current.title}
                className="w-full h-full object-cover object-center brightness-95 group-hover:scale-102 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero-seoul-skyline.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 text-white/95 font-mono text-[11px] tracking-widest uppercase bg-black/50 px-3 py-1 backdrop-blur-xs rounded-xs font-semibold">
                {current.tabLabel}
              </div>
            </div>

            {/* Division Title & Description */}
            <div className="mb-8 pb-7 border-b border-black/[0.08]">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#a18750] font-bold uppercase block mb-2.5">
                {current.tabNumber} / XENIANS BUSINESS DIVISION
              </span>
              <h2 className="font-sans text-[26px] sm:text-[32px] md:text-[34px] font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#9e7a32] via-[#c6a35b] to-[#dfbe7a] bg-clip-text text-transparent inline-block">
                {lang === 'ko' ? current.titleKo : current.title}
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#333333] leading-[1.8] font-normal break-keep">
                {lang === 'ko' ? current.descKo : current.descEn}
              </p>
            </div>

            {/* Key Scopes & Value Drivers Accordion */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-2 border-b border-black/[0.08]">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#111111] font-bold uppercase">
                  KEY SCOPES & VALUE DRIVERS
                </span>
                <span className="text-[12px] font-sans text-[#777777] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c6a35b]" />
                  {lang === 'ko' ? '항목을 클릭하시면 상세 실행 내역이 표시됩니다' : 'Click any item below to view detailed execution scopes'}
                </span>
              </div>

              {current.points.map((pt, pIdx) => {
                const isExpanded = expandedPointIdx === pIdx;
                return (
                  <div 
                    key={pIdx} 
                    className={`group/card transition-all duration-300 rounded-xs border-t-0 border-r-0 border-l-[3px] border-b-[2px] overflow-hidden ${
                      isExpanded 
                        ? 'bg-gradient-to-br from-[#1e1d1a] via-[#151413] to-[#0d0c0b] text-white border-l-[#dfbe7a] border-b-[#9e7a32] shadow-[-4px_8px_20px_rgba(0,0,0,0.35),0_8px_16px_rgba(198,163,91,0.2)] -translate-y-0.5 translate-x-1 p-3.5 sm:p-4' 
                        : 'bg-white text-[#111111] border-l-black/10 border-b-black/10 hover:bg-gradient-to-br hover:from-[#21201d] hover:via-[#161514] hover:to-[#0e0d0c] hover:text-white hover:border-l-[#dfbe7a] hover:border-b-[#9e7a32] hover:shadow-[-4px_8px_20px_rgba(0,0,0,0.3),0_8px_16px_rgba(198,163,91,0.2)] hover:-translate-y-0.5 hover:translate-x-1 py-2.5 px-3.5 sm:py-3 sm:px-4'
                    }`}
                  >
                    {/* Header / Click Trigger */}
                    <button
                      type="button"
                      onClick={() => setExpandedPointIdx(isExpanded ? null : pIdx)}
                      className="w-full cursor-pointer flex items-start sm:items-center justify-between gap-3 text-left transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-all duration-300 ${
                          isExpanded 
                            ? 'bg-gradient-to-br from-[#dfbe7a] via-[#c6a35b] to-[#9e7a32] text-white shadow-[0_0_12px_rgba(198,163,91,0.7)] scale-105' 
                            : 'bg-black/[0.06] text-[#555555] group-hover/card:bg-gradient-to-br group-hover/card:from-[#dfbe7a] group-hover/card:via-[#c6a35b] group-hover/card:to-[#9e7a32] group-hover/card:text-white group-hover/card:shadow-[0_0_12px_rgba(198,163,91,0.7)] group-hover/card:scale-105'
                        }`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <div>
                          <span className={`font-sans text-[14.5px] sm:text-[15px] leading-snug transition-colors duration-300 ${
                            isExpanded 
                              ? 'font-bold text-white' 
                              : 'font-semibold text-[#111111] group-hover/card:text-white group-hover/card:font-bold'
                          }`}>
                            {lang === 'ko' ? pt.titleKo : pt.titleEn}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span className={`hidden sm:inline-block text-[11px] font-sans font-medium transition-colors duration-300 ${
                          isExpanded 
                            ? 'text-[#dfbe7a] font-bold' 
                            : 'text-[#777777] group-hover/card:text-[#dfbe7a] group-hover/card:font-semibold'
                        }`}>
                          {isExpanded 
                            ? (lang === 'ko' ? '닫기' : 'Close') 
                            : (lang === 'ko' ? '상세보기' : 'View Detail')}
                        </span>
                        <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isExpanded 
                            ? 'rotate-180 text-white bg-gradient-to-br from-[#dfbe7a] to-[#9e7a32] shadow-xs' 
                            : 'text-black/40 bg-black/[0.04] group-hover/card:bg-gradient-to-br group-hover/card:from-[#dfbe7a] group-hover/card:to-[#9e7a32] group-hover/card:text-white group-hover/card:rotate-90'
                        }`}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </button>

                    {/* Expandable Explanation */}
                    {isExpanded && (
                      <div className="pt-4 pb-1 animate-fadeIn border-t border-white/10 mt-3">
                        {/* Scope Narrative */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#dfbe7a]" />
                            <span className="text-[10.5px] font-mono tracking-[0.2em] text-[#dfbe7a] font-bold uppercase">
                              EXECUTION ROADMAP & METHODOLOGY
                            </span>
                          </div>
                          <p className="font-sans text-[13.5px] sm:text-[14px] text-white/90 leading-[1.8] font-normal break-keep pl-3 border-l-2 border-[#dfbe7a]">
                            {lang === 'ko' ? pt.descKo : pt.descEn}
                          </p>
                        </div>

                        {/* Deliverables & Strategic Value Grid (Interactive Sub-Cards with Left/Bottom lines & Gradients) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                          {/* Deliverables */}
                          <div className="p-3 sm:p-3.5 rounded-xs border-t-0 border-r-0 border-l-2 border-b-2 border-l-[#dfbe7a] border-b-[#9e7a32] bg-gradient-to-br from-white/10 via-white/[0.05] to-transparent hover:bg-gradient-to-br hover:from-[#c6a35b]/30 hover:to-[#9e7a32]/20 hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-300 flex items-start gap-2.5 group/sub">
                            <div className="w-6 h-6 rounded-full bg-white/10 group-hover/sub:bg-gradient-to-br group-hover/sub:from-[#dfbe7a] group-hover/sub:to-[#9e7a32] text-[#dfbe7a] group-hover/sub:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                              <FileText className="w-3 h-3" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-[10px] font-mono tracking-[0.15em] text-[#dfbe7a] font-bold uppercase block">
                                KEY DELIVERABLES
                              </span>
                              <span className="font-sans text-[13px] sm:text-[13.5px] font-semibold text-white/95 leading-relaxed block mt-0.5">
                                {lang === 'ko' ? pt.deliverableKo : pt.deliverableEn}
                              </span>
                            </div>
                          </div>

                          {/* Strategic Value */}
                          <div className="p-3 sm:p-3.5 rounded-xs border-t-0 border-r-0 border-l-2 border-b-2 border-l-[#dfbe7a] border-b-[#9e7a32] bg-gradient-to-br from-white/10 via-white/[0.05] to-transparent hover:bg-gradient-to-br hover:from-[#c6a35b]/30 hover:to-[#9e7a32]/20 hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-300 flex items-start gap-2.5 group/sub">
                            <div className="w-6 h-6 rounded-full bg-white/10 group-hover/sub:bg-gradient-to-br group-hover/sub:from-[#dfbe7a] group-hover/sub:to-[#9e7a32] text-[#dfbe7a] group-hover/sub:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                              <TrendingUp className="w-3 h-3" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-[10px] font-mono tracking-[0.15em] text-[#dfbe7a] font-bold uppercase block">
                                STRATEGIC VALUE DRIVERS
                              </span>
                              <span className="font-sans text-[13px] sm:text-[13.5px] font-semibold text-white/95 leading-relaxed block mt-0.5">
                                {lang === 'ko' ? pt.strategyKo : pt.strategyEn}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* 3. TAILORED PROCESS FLOW (Clean Minimalist Process Cards) */}
        <div className="max-w-[1500px] mx-auto mt-20 pt-12 border-t border-black/[0.08]">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#a18750] font-bold uppercase block mb-2">
              {current.tabNumber} / {current.tabLabel} PROCESS FLOW
            </span>
            <h3 className="font-sans text-[24px] sm:text-[28px] font-extrabold mb-2.5 bg-gradient-to-r from-[#9e7a32] via-[#c6a35b] to-[#dfbe7a] bg-clip-text text-transparent inline-block">
              {lang === 'ko' 
                ? `${current.tabLabelKo} 표준 실행 프로세스` 
                : `${current.tabLabel} Standard Execution Methodology`}
            </h3>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#555555] leading-relaxed break-keep">
              {lang === 'ko'
                ? '제니안스 그룹의 데이터 분석과 금융 구조화 역량을 바탕으로 단계별 가치를 극대화하는 표준 실행 로드맵입니다.'
                : 'A structured, institutional-grade execution roadmap engineered to maximize asset value at every critical milestone.'}
            </p>
          </div>

          {/* Process Flow Grid - Clean Simple Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4.5 relative">
            {current.processFlow.map((step, sIdx) => {
              return (
                <div
                  key={sIdx}
                  className="p-5 bg-white border border-black/[0.08] hover:border-[#c6a35b] transition-all duration-200 flex flex-col justify-between rounded-sm shadow-2xs hover:shadow-sm"
                >
                  {/* Step Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold text-[#a18750] tracking-wider uppercase bg-[#faf8f4] px-2 py-0.5 rounded-xs border border-black/[0.04]">
                        STEP {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#faf8f4] border border-black/[0.04] flex items-center justify-center text-[#555555]">
                        {renderStepIcon(step.iconName)}
                      </div>
                    </div>

                    {/* Step English Subtitle */}
                    <span className="font-mono text-[10px] tracking-wider text-[#888888] font-bold uppercase block mb-1">
                      {step.label}
                    </span>

                    {/* Step Title in High-Contrast Black */}
                    <h4 className="font-sans text-[15px] font-bold text-[#111111] mb-2 leading-snug">
                      {lang === 'ko' ? step.titleKo : step.titleEn}
                    </h4>

                    {/* Step Description */}
                    <p className="font-sans text-[13px] sm:text-[13.5px] text-[#444444] leading-relaxed break-keep">
                      {lang === 'ko' ? step.descKo : step.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};


