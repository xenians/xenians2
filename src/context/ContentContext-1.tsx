import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteData } from '../types';
import { INITIAL_DATA_KO, INITIAL_DATA_EN } from '../constants';
import { DEFAULT_DETAILED_PROJECTS } from '../data/defaultProjects';

const MASTER_KEY_KO = 'xenians_site_data_ko_master';
const MASTER_KEY_EN = 'xenians_site_data_en_master';
const STORAGE_KEY_KO = 'xenians_site_data_ko_v33';
const STORAGE_KEY_EN = 'xenians_site_data_en_v33';

interface ContentContextType {
  data: SiteData;
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
  updateData: (newData: SiteData) => void;
  resetData: () => void;
  importSiteData: (imported: Partial<SiteData>) => void;
  exportSiteData: () => SiteData;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Scan and retrieve the most recent saved data across all previous versions (v50 down to v1)
function getLatestStoredData(prefix: 'xenians_site_data_ko' | 'xenians_site_data_en'): string | null {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  try {
    const langSuffix = prefix.endsWith('_ko') ? 'ko' : 'en';
    // 1. Permanent master key
    const master = localStorage.getItem(`${prefix}_master`);
    if (master) return master;

    // 2. Permanent fail-safe backup key
    const perm = localStorage.getItem(`xenians_permanent_data_${langSuffix}`);
    if (perm) return perm;

    // 3. Current version key
    const currentV = localStorage.getItem(`${prefix}_v33`);
    if (currentV) return currentV;

    // 4. Scan numbered version keys from v50 down to v1
    for (let v = 50; v >= 1; v--) {
      const val = localStorage.getItem(`${prefix}_v${v}`);
      if (val) {
        // Automatically migrate to master key
        try {
          localStorage.setItem(`${prefix}_master`, val);
          localStorage.setItem(`xenians_permanent_data_${langSuffix}`, val);
        } catch (e) {}
        return val;
      }
    }

    // 5. Scan all keys in localStorage for anything starting with prefix
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith(prefix) || key.includes(prefix))) {
        const val = localStorage.getItem(key);
        if (val) {
          try {
            localStorage.setItem(`${prefix}_master`, val);
            localStorage.setItem(`xenians_permanent_data_${langSuffix}`, val);
          } catch (e) {}
          return val;
        }
      }
    }
  } catch (e) {
    console.warn('Storage retrieval warning:', e);
  }
  return null;
}

// Helper to deep merge stored data over default data without losing user modifications
function mergeSiteData(defaults: SiteData, savedRaw: string | null): SiteData {
  if (!savedRaw) return defaults;
  try {
    const sanitizedRaw = savedRaw.replace(/xenians\.com/gi, 'xenians.co.kr');
    const saved = JSON.parse(sanitizedRaw);

    const defaultsProjects = (defaults.detailedProjects && defaults.detailedProjects.length > 0)
      ? defaults.detailedProjects
      : DEFAULT_DETAILED_PROJECTS;

    // Preserve all customized detailedProjects directly as edited by the user,
    // but automatically pick up brand-new projects added in code (by id) even if
    // the visitor's browser has an older cached copy in localStorage that predates them.
    const projects = (() => {
      const savedProjects = saved.detailedProjects;
      if (!savedProjects || savedProjects.length === 0) return defaultsProjects;

      const savedIds = new Set(savedProjects.map((p: any) => p?.id));
      const newFromCode = defaultsProjects.filter((p: any) => !savedIds.has(p?.id));

      // New code-side projects are appended after saved ones. If you need them in a
      // specific position, adjust the order here or clear localStorage on next deploy.
      return newFromCode.length > 0 ? [...savedProjects, ...newFromCode] : savedProjects;
    })();

    return {
      ...defaults,
      ...saved,
      hero: { ...defaults.hero, ...(saved.hero || {}) },
      home: {
        ...defaults.home,
        servicesHeader: { ...defaults.home.servicesHeader, ...(saved.home?.servicesHeader || {}) },
        philosophy: { ...defaults.home.philosophy, ...(saved.home?.philosophy || {}) },
      },
      company: {
        ...defaults.company,
        ...(saved.company || {}),
        organization: (saved.company?.organization && saved.company.organization.length > 0)
          ? saved.company.organization
          : defaults.company.organization,
        intro: { ...defaults.company.intro, ...(saved.company?.intro || {}) },
        values: (saved.company?.values && saved.company.values.length > 0) ? saved.company.values : defaults.company.values,
        vision: { ...defaults.company.vision, ...(saved.company?.vision || {}) },
        ceoMessage: {
          ...defaults.company.ceoMessage,
          ...(saved.company?.ceoMessage || {}),
          name: saved.company?.ceoMessage?.name || defaults.company.ceoMessage.name,
        },
      },
      navigation: (saved.navigation && saved.navigation.length > 0) ? saved.navigation : defaults.navigation,
      trackRecordHeader: { ...defaults.trackRecordHeader, ...(saved.trackRecordHeader || {}) },
      detailedProjects: projects,
      contactInfo: {
        ...defaults.contactInfo,
        ...(saved.contactInfo || {}),
        email: (saved.contactInfo?.email && !saved.contactInfo.email.includes('xenians.com'))
          ? saved.contactInfo.email.replace(/xenians\.com/gi, 'xenians.co.kr')
          : 'info@xenians.co.kr',
        hoursKo: (saved.contactInfo?.hoursKo && !saved.contactInfo.hoursKo.includes('18:00'))
          ? saved.contactInfo.hoursKo
          : '09:00 - 17:00(Mon - Fri)',
        hoursEn: (saved.contactInfo?.hoursEn && !saved.contactInfo.hoursEn.includes('18:00'))
          ? saved.contactInfo.hoursEn
          : '09:00 - 17:00(Mon - Fri)',
        inquiryDescEn: (saved.contactInfo?.inquiryDescEn && !saved.contactInfo.inquiryDescEn.includes('xenians.com'))
          ? saved.contactInfo.inquiryDescEn.replace(/xenians\.com/gi, 'xenians.co.kr')
          : defaults.contactInfo.inquiryDescEn,
        formspreeEndpoint: saved.contactInfo?.formspreeEndpoint || defaults.contactInfo.formspreeEndpoint,
        bannerTitleKo: saved.contactInfo?.bannerTitleKo || defaults.contactInfo.bannerTitleKo,
        bannerTitleEn: saved.contactInfo?.bannerTitleEn || defaults.contactInfo.bannerTitleEn,
        bannerSubKo: saved.contactInfo?.bannerSubKo || defaults.contactInfo.bannerSubKo,
        bannerSubEn: saved.contactInfo?.bannerSubEn || defaults.contactInfo.bannerSubEn,
        successTitleKo: saved.contactInfo?.successTitleKo || defaults.contactInfo.successTitleKo,
        successTitleEn: saved.contactInfo?.successTitleEn || defaults.contactInfo.successTitleEn,
        successDescKo: saved.contactInfo?.successDescKo || defaults.contactInfo.successDescKo,
        successDescEn: saved.contactInfo?.successDescEn || defaults.contactInfo.successDescEn,
      },
      footer: {
        ...defaults.footer,
        ...(saved.footer || {}),
        email: 'info@xenians.co.kr',
        copyright: 'Copyright@XENIANS Inc. All Rights Reserved.',
      },
    };
  } catch (e) {
    console.error('Failed to parse saved site data', e);
    return defaults;
  }
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Respect user's previously selected language across reloads and browser sessions
  const [lang, setLang] = useState<'ko' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('xenians_lang');
      if (savedLang === 'ko' || savedLang === 'en') {
        return savedLang;
      }
      const sessionLang = sessionStorage.getItem('xenians_session_lang');
      if (sessionLang === 'ko' || sessionLang === 'en') {
        return sessionLang;
      }
    }
    return 'en';
  });

  const [dataKo, setDataKo] = useState<SiteData>(() => {
    const saved = getLatestStoredData('xenians_site_data_ko');
    const merged = mergeSiteData(INITIAL_DATA_KO, saved);
    if (saved && typeof window !== 'undefined') {
      try {
        localStorage.setItem(MASTER_KEY_KO, JSON.stringify(merged));
        localStorage.setItem(STORAGE_KEY_KO, JSON.stringify(merged));
        localStorage.setItem('xenians_permanent_data_ko', JSON.stringify(merged));
      } catch (e) {}
    }
    return merged;
  });

  const [dataEn, setDataEn] = useState<SiteData>(() => {
    const saved = getLatestStoredData('xenians_site_data_en');
    const merged = mergeSiteData(INITIAL_DATA_EN, saved);
    if (saved && typeof window !== 'undefined') {
      try {
        localStorage.setItem(MASTER_KEY_EN, JSON.stringify(merged));
        localStorage.setItem(STORAGE_KEY_EN, JSON.stringify(merged));
        localStorage.setItem('xenians_permanent_data_en', JSON.stringify(merged));
      } catch (e) {}
    }
    return merged;
  });

  const data = lang === 'ko' ? dataKo : dataEn;

  // Listen for storage events across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if ((e.key === MASTER_KEY_KO || e.key === STORAGE_KEY_KO || e.key === 'xenians_permanent_data_ko') && e.newValue) {
        setDataKo(mergeSiteData(INITIAL_DATA_KO, e.newValue));
      } else if ((e.key === MASTER_KEY_EN || e.key === STORAGE_KEY_EN || e.key === 'xenians_permanent_data_en') && e.newValue) {
        setDataEn(mergeSiteData(INITIAL_DATA_EN, e.newValue));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleSetLang = (newLang: 'ko' | 'en') => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('xenians_session_lang', newLang);
      localStorage.setItem('xenians_lang', newLang);
      localStorage.setItem('xenians_lang_user_selected', 'true');
    }
  };

  const persistToStorage = (koData: SiteData, enData: SiteData) => {
    try {
      const koStr = JSON.stringify(koData);
      const enStr = JSON.stringify(enData);
      // 1. Permanent master keys
      localStorage.setItem(MASTER_KEY_KO, koStr);
      localStorage.setItem(MASTER_KEY_EN, enStr);
      // 2. Versioned keys for backward compatibility
      localStorage.setItem(STORAGE_KEY_KO, koStr);
      localStorage.setItem(STORAGE_KEY_EN, enStr);
      localStorage.setItem('xenians_site_data_ko_v30', koStr);
      localStorage.setItem('xenians_site_data_en_v30', enStr);
      // 3. Multi-tier fail-safe permanent keys
      localStorage.setItem('xenians_permanent_data_ko', koStr);
      localStorage.setItem('xenians_permanent_data_en', enStr);
      localStorage.setItem('xenians_last_saved_time', new Date().toISOString());
    } catch (err) {
      console.warn('LocalStorage save warning:', err);
    }
  };

  const updateData = (newData: SiteData) => {
    // Synchronize shared data across both languages
    const sharedFields = {
      detailedProjects: newData.detailedProjects,
      contactInfo: newData.contactInfo,
      navigation: newData.navigation,
      assets: newData.assets,
      theme: newData.theme,
      trackRecordHeader: newData.trackRecordHeader,
      footer: newData.footer,
      company: newData.company,
    };

    if (lang === 'ko') {
      const mergedKo: SiteData = { ...dataKo, ...newData };
      const mergedEn: SiteData = { ...dataEn, ...sharedFields };
      setDataKo(mergedKo);
      setDataEn(mergedEn);
      persistToStorage(mergedKo, mergedEn);
    } else {
      const mergedEn: SiteData = { ...dataEn, ...newData };
      const mergedKo: SiteData = { ...dataKo, ...sharedFields };
      setDataEn(mergedEn);
      setDataKo(mergedKo);
      persistToStorage(mergedKo, mergedEn);
    }
  };

  const importSiteData = (imported: Partial<SiteData>) => {
    const mergedKo = mergeSiteData(dataKo, JSON.stringify(imported));
    const mergedEn = mergeSiteData(dataEn, JSON.stringify(imported));
    setDataKo(mergedKo);
    setDataEn(mergedEn);
    persistToStorage(mergedKo, mergedEn);
  };

  const exportSiteData = (): SiteData => {
    return data;
  };

  const resetData = () => {
    if (lang === 'ko') {
      setDataKo(INITIAL_DATA_KO);
      localStorage.removeItem(MASTER_KEY_KO);
      localStorage.removeItem(STORAGE_KEY_KO);
      localStorage.removeItem('xenians_site_data_ko_v30');
      localStorage.removeItem('xenians_site_data_ko_v17');
    } else {
      setDataEn(INITIAL_DATA_EN);
      localStorage.removeItem(MASTER_KEY_EN);
      localStorage.removeItem(STORAGE_KEY_EN);
      localStorage.removeItem('xenians_site_data_en_v30');
      localStorage.removeItem('xenians_site_data_en_v17');
    }
  };

  return (
    <ContentContext.Provider value={{ 
      data, 
      lang, 
      setLang: handleSetLang, 
      updateData, 
      resetData,
      importSiteData,
      exportSiteData
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
