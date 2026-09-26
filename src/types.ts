export interface SectionContent {
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  image?: string;
}

export interface AdvisoryItem {
  id: string;
  title: string;
  description: string;
  process: { step: string; content: string; title?: string }[];
  processFlow?: { step: string; title: string }[];
  expertise?: { title?: string; icon?: string; desc: string }[];
}

export interface DetailedProject {
  id: string;
  num?: string;
  name?: string;
  nameKo?: string;
  category: 'M&A' | 'DEVELOPMENT' | 'SALES' | 'OPERATION' | 'FM' | string;
  titleKo: string;
  titleEn: string;
  year: string;
  locationKo: string;
  locationEn?: string;
  scaleKo: string;
  scaleEn?: string;
  useKo?: string;
  useEn?: string;
  gfaKo?: string;
  gfaEn?: string;
  contractorKo?: string;
  contractorEn?: string;
  developerKo?: string;
  developerEn?: string;
  completionYear?: string;
  roleKo: string;
  roleEn?: string;
  clientKo?: string;
  clientEn?: string;
  summaryKo: string;
  summaryEn?: string;
  detailsKo: string[];
  detailsEn?: string[];
  image: string;
  highlightsTitleKo?: string;
  highlightsTitleEn?: string;
  viewDetailBtnKo?: string;
  viewDetailBtnEn?: string;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  year: string;
  client?: string;
  description: string;
  image?: string;
}

export interface SiteTheme {
  primary: string;
  secondary: string;
  charlie: string;
  fontSans: string;
  fontSerif: string;
}

export interface SiteAssets {
  logo: string;
  ceoPhoto: string;
  ceoSignature: string;
}

export interface SiteData {
  theme: SiteTheme;
  assets: SiteAssets;
  navigation: { name: string; path: string }[];
  footer: {
    description: string;
    services: string[];
    contact: {
      address: string;
      email: string;
      phone: string;
    };
    copyright: string;
  };
  hero: {
    title: string;
    description: string;
  };
  home: {
    servicesHeader: { subtitle: string; title: string; description: string };
    philosophy: { 
      subtitle: string; 
      title: string; 
      description: string; 
      items: string[];
      image: string;
    };
  };
  company: {
    intro: {
      subtitle: string;
      title: string;
      description: string;
    };
    ceoMessage: {
      ko: string;
      en: string;
      name: string;
      role: string;
    };
    organization: {
       name: string;
       enName?: string;
       role: string;
       division: string;
       enRole?: string;
       sub?: { name: string; enName?: string; role?: string; enRole?: string; }[];
    }[];
    values: { icon: string; title: string; desc: string }[];
    vision: {
      title: string;
      description: string;
      subtitle?: string;
      titleFirst?: string;
      titleSecond?: string;
      stats?: { label: string; value: string; suffix: string; koLabel?: string }[];
      image?: string;
    };
  };
  advisory: {
    header: { subtitle: string; title: string; description: string };
    sections: AdvisoryItem[];
    methodology: {
      subtitle: string;
      title: string;
      items: { title: string; desc: string }[];
      quote: string;
    };
  };
  pm: {
    header: { subtitle: string; title: string; description: string };
    title: string;
    description: string;
    steps: { step: string; title: string; description: string }[];
  };
  operations: {
    header: { subtitle: string; title: string; description: string };
    hotel: SectionContent & {
      features: { icon: string; title: string; desc: string; en: string }[];
      insight: {
        title: string;
        description: string;
        cards: { title: string; description: string }[];
      };
    };
    golf: SectionContent & {
      features: { icon: string; title: string; desc: string; en: string }[];
      imageText: { main: string; sub: string };
    };
    stats: { label: string; value: string; sub: string }[];
  };
  trackRecordHeader: {
    subtitle: string;
    title: string;
    description: string;
    listTitleKo?: string;
    listTitleEn?: string;
    galleryTitleKo?: string;
    galleryTitleEn?: string;
    viewDetailTextKo?: string;
    viewDetailTextEn?: string;
  };
  trackRecord: ProjectItem[];
  detailedProjects?: DetailedProject[];
  common: {
    explore: string;
    aboutXenians: string;
    advisoryServices: string;
    exploreDivision: string;
    valuesAndPhilosophy: string;
    strategicPartnership: string;
    ceoMessageTitle: string;
    executiveHead: string;
    executiveHeadDescription: string;
    managingDirectorTitle: string;
    managingDirectorSubtitle: string;
    managingDirectorRole: string;
    systematicGovernance: string;
    sectorExpertise: string;
    expandingNetwork: string;
  };
  trackRecordExtra?: {
    expertise: {
      title: string;
      items: string[];
      description: string;
      enDescription: string;
    };
    global: {
      title: string;
      description: string;
      enDescription: string;
      stats: { label: string; value: string }[];
    };
  };
  contactInfo?: {
    formspreeEndpoint?: string;
    bannerTitleKo?: string;
    bannerTitleEn?: string;
    bannerSubKo?: string;
    bannerSubEn?: string;
    seoulAddressKo: string;
    seoulAddressEn?: string;
    seoulTransportKo: string;
    seoulTransportEn?: string;
    seoulNaverMapUrl: string;
    seoulGoogleMapUrl: string;
    seoulTitleKo?: string;
    seoulTitleEn?: string;
    londonTitleKo?: string;
    londonTitleEn?: string;
    londonAddress: string;
    singaporeTitleKo?: string;
    singaporeTitleEn?: string;
    singaporeAddress: string;
    email: string;
    hoursKo: string;
    hoursEn?: string;
    locationsSubtitleKo?: string;
    locationsSubtitleEn?: string;
    locationsTitleKo?: string;
    locationsTitleEn?: string;
    inquirySubtitleKo?: string;
    inquirySubtitleEn?: string;
    inquiryTitleKo?: string;
    inquiryTitleEn?: string;
    inquiryDescKo?: string;
    inquiryDescEn?: string;
    successTitleKo?: string;
    successTitleEn?: string;
    successDescKo?: string;
    successDescEn?: string;
  };
}
