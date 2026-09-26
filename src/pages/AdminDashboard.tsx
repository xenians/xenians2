import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../context/ContentContext';
import { SiteData, DetailedProject } from '../types';
import { DEFAULT_DETAILED_PROJECTS } from '../data/defaultProjects';
import { 
  Save, RefreshCcw, LogOut, ChevronRight, Trash2, Plus, 
  Lock, User, Key, AlertCircle, Image as ImageIcon, 
  Type, Briefcase, Building2, BarChart3, Settings, 
  Home, MessageSquare, MapPin, Mail, Clock, Compass, Layers, CheckCircle2, Globe, Send,
  Download, Upload, Copy, Check, ShieldCheck, ArrowUp, ArrowDown, Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  const { data, updateData, resetData, importSiteData } = useContent();
  const [localData, setLocalData] = useState<SiteData>(data);
  const [activeTab, setActiveTab] = useState<'HOME' | 'MENUS' | 'COMPANY' | 'BUSINESS' | 'PROJECTS' | 'CONTACT' | 'SYSTEM'>('PROJECTS');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [backupMessage, setBackupMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const lastSavedJson = useRef<string>(JSON.stringify(data));
  const [autoSaveStatus, setAutoSaveStatus] = useState<'idle' | 'saving' | 'saved'>('saved');

  // Sync from outside if not actively editing
  useEffect(() => {
    const dataJson = JSON.stringify(data);
    if (dataJson !== lastSavedJson.current) {
      lastSavedJson.current = dataJson;
      setLocalData(data);
    }
  }, [data]);

  // Debounced Auto-Save to localStorage whenever user modifies anything
  useEffect(() => {
    const currentJson = JSON.stringify(localData);
    if (currentJson === lastSavedJson.current) {
      return;
    }

    setAutoSaveStatus('saving');
    const timer = setTimeout(() => {
      lastSavedJson.current = currentJson;
      updateData(localData);
      setAutoSaveStatus('saved');
    }, 600);

    return () => clearTimeout(timer);
  }, [localData, updateData]);
  
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [contactLangFilter, setContactLangFilter] = useState<'ALL' | 'KO' | 'EN'>('ALL');

  // Helper to read and update navigation items accurately
  const getNavName = (path: string, defaultName: string) => {
    const item = localData.navigation?.find((n) => n.path === path);
    return (item?.name && item.name.trim() !== '') ? item.name : defaultName;
  };

  const setNavName = (path: string, newName: string) => {
    setLocalData(prev => {
      const existing = [...(prev.navigation || [])];
      const idx = existing.findIndex((n) => n.path === path);
      if (idx >= 0) {
        existing[idx] = { ...existing[idx], name: newName };
      } else {
        existing.push({ name: newName, path });
      }
      return { ...prev, navigation: existing };
    });
  };

  const updateProjectField = (index: number, field: keyof DetailedProject, value: any) => {
    setLocalData(prev => {
      const list = [...(prev.detailedProjects && prev.detailedProjects.length > 0 ? prev.detailedProjects : DEFAULT_DETAILED_PROJECTS)];
      if (list[index]) {
        list[index] = { ...list[index], [field]: value };
      }
      return { ...prev, detailedProjects: list };
    });
  };

  const moveProject = (index: number, direction: 'up' | 'down') => {
    setLocalData(prev => {
      const list = [...(prev.detailedProjects && prev.detailedProjects.length > 0 ? prev.detailedProjects : DEFAULT_DETAILED_PROJECTS)];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= list.length) return prev;
      const temp = list[index];
      list[index] = list[targetIndex];
      list[targetIndex] = temp;
      return { ...prev, detailedProjects: list };
    });
  };

  const duplicateProject = (index: number) => {
    setLocalData(prev => {
      const list = [...(prev.detailedProjects && prev.detailedProjects.length > 0 ? prev.detailedProjects : DEFAULT_DETAILED_PROJECTS)];
      const itemToDup = list[index];
      if (!itemToDup) return prev;
      const duplicated: DetailedProject = {
        ...JSON.parse(JSON.stringify(itemToDup)),
        id: `proj-${Date.now()}`,
        num: String(list.length + 1).padStart(2, '0'),
        name: `${itemToDup.name || 'PROJECT'} (COPY)`,
        titleKo: `${itemToDup.titleKo || '프로젝트'} (사본)`
      };
      list.splice(index + 1, 0, duplicated);
      return { ...prev, detailedProjects: list };
    });
  };

  const handleCopyDefaultProjectsCode = () => {
    const list = localData.detailedProjects && localData.detailedProjects.length > 0
      ? localData.detailedProjects
      : DEFAULT_DETAILED_PROJECTS;
    const code = `import { DetailedProject } from '../types';\n\nexport const DEFAULT_DETAILED_PROJECTS: DetailedProject[] = ${JSON.stringify(list, null, 2)};\n`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'xenians2019' && password === 'atom072600!') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('접근 권한이 없습니다. 올바른 계정 정보를 입력하세요.');
    }
  };

  const handleSave = () => {
    lastSavedJson.current = JSON.stringify(localData);
    updateData(localData);
    setSaveSuccess(true);
    setAutoSaveStatus('saved');
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  const handleReset = () => {
    if (confirm('모든 데이터를 초기 기본값으로 초기화하시겠습니까? (기존에 수정한 프로젝트 및 문구가 모두 지워집니다)')) {
      resetData();
      window.location.reload();
    }
  };

  const handleExportJson = () => {
    try {
      const jsonStr = JSON.stringify(localData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `xenians_site_data_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setBackupMessage('현재 편집 데이터가 JSON 파일로 다운로드되었습니다.');
      setTimeout(() => setBackupMessage(''), 4000);
    } catch (err) {
      alert('백업 파일 생성에 실패했습니다.');
    }
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && typeof parsed === 'object') {
          importSiteData(parsed);
          setLocalData(parsed);
          setSaveSuccess(true);
          setBackupMessage('백업 데이터를 성공적으로 복원하여 적용했습니다!');
          setTimeout(() => {
            setSaveSuccess(false);
            setBackupMessage('');
          }, 4000);
        } else {
          alert('올바른 백업 파일 형식이 아닙니다.');
        }
      } catch (err) {
        alert('JSON 파일을 파싱하는 데 실패했습니다. 올바른 파일인지 확인해주세요.');
      }
    };
    reader.readAsText(file, 'UTF-8');
    if (e.target) e.target.value = '';
  };

  const handleCopyJson = () => {
    try {
      navigator.clipboard.writeText(JSON.stringify(localData, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      alert('클립보드 복사에 실패했습니다.');
    }
  };

  if (!isLoggedIn) {
     return (
        <div className="min-h-screen bg-[#0d0d0c] flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,rgba(198,163,91,0.08)_0%,transparent_70%)] font-sans">
           <div className="w-full max-w-md">
              <div className="text-center mb-10">
                 <Link to="/" className="inline-block mb-6 group">
                    <div className="w-20 h-20 flex items-center justify-center group-hover:scale-105 transition-transform mx-auto">
                       <img src="/images/logo.png" alt="Xenians Logo" className="w-full h-full object-contain brightness-110" onError={(e) => { (e.target as HTMLImageElement).src = "/images/로고.png"; }} />
                    </div>
                 </Link>
                 <h1 className="text-2xl font-serif text-white font-bold mb-1">XENIANS ADMIN CONSOLE</h1>
                 <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-mono">
                    통합 관리자 모드 시스템
                 </p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 p-8 sm:p-10 rounded-xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#c6a35b]" />
                 
                 <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-5">
                       <div className="space-y-1.5">
                          <label className="text-[10px] tracking-widest font-mono text-white/40 uppercase block">관리자 ID</label>
                          <div className="relative">
                             <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                             <input 
                               type="text" 
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                               className="w-full bg-white/[0.03] border border-white/10 rounded-md pl-10 pr-4 py-3 text-white outline-none focus:border-[#c6a35b] transition-all text-sm font-sans"
                               placeholder="Authorized ID"
                             />
                          </div>
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] tracking-widest font-mono text-white/40 uppercase block">비밀번호 (Access Key)</label>
                          <div className="relative">
                             <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                             <input 
                               type="password" 
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className="w-full bg-white/[0.03] border border-white/10 rounded-md pl-10 pr-4 py-3 text-white outline-none focus:border-[#c6a35b] transition-all text-sm font-sans"
                               placeholder="Passkey"
                             />
                          </div>
                       </div>
                    </div>

                    {error && (
                       <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 p-3 rounded border border-red-500/20">
                          <AlertCircle className="w-4 h-4 shrink-0" /> {error}
                       </div>
                    )}

                    <button 
                       type="submit"
                       className="cursor-pointer w-full py-3.5 bg-[#c6a35b] text-[#141413] font-bold text-xs tracking-widest uppercase hover:bg-white transition-all rounded-md flex items-center justify-center gap-2"
                    >
                       <Lock className="w-3.5 h-3.5" /> 관리자 로그인
                    </button>
                 </form>
              </div>

              <p className="mt-6 text-center text-white/20 text-[11px] font-mono">
                 Xenians Group Administrative Interface
              </p>
              
              <Link to="/" className="block text-center text-white/40 hover:text-white transition-colors text-xs font-mono mt-4">
                 ← 홈페이지로 돌아가기
              </Link>
           </div>
        </div>
     );
  }

  // Helper to update deeply nested fields
  const updateNested = (path: string, value: any) => {
    setLocalData(prev => {
      const keys = path.split('.');
      const newData = { ...prev };
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (Array.isArray(current[key])) {
          current[key] = [...current[key]];
        } else if (current[key] && typeof current[key] === 'object') {
          current[key] = { ...current[key] };
        } else {
          current[key] = {};
        }
        current = current[key];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const renderSectionHeader = (icon: React.ReactNode, title: string, description: string) => (
    <div className="mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 bg-[#c6a35b]/10 flex items-center justify-center rounded-md border border-[#c6a35b]/20 text-[#c6a35b]">
                {icon}
            </div>
            <div>
                <h2 className="text-2xl font-serif text-white font-bold">{title}</h2>
                <p className="text-white/40 text-xs font-sans mt-0.5">{description}</p>
            </div>
        </div>
    </div>
  );

  const renderField = (label: string, value: string, path: string, type: 'input' | 'textarea' = 'input', options: any = {}) => (
    <div className="space-y-1.5">
        <label className="text-[10.5px] font-mono tracking-wider font-bold text-white/40 uppercase block">
          {label}
        </label>
        {type === 'input' ? (
            <input 
                className="w-full bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-md text-sm text-white outline-none focus:border-[#c6a35b] transition-colors" 
                value={value || ''} 
                onChange={(e) => updateNested(path, e.target.value)} 
                {...options}
            />
        ) : (
            <textarea 
                className="w-full bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-md text-sm text-white outline-none focus:border-[#c6a35b] transition-colors min-h-[90px] resize-y" 
                value={value || ''} 
                onChange={(e) => updateNested(path, e.target.value)}
                {...options}
            />
        )}
    </div>
  );

  const detailedProjectsList = (localData.detailedProjects && localData.detailedProjects.length > 0)
    ? localData.detailedProjects
    : DEFAULT_DETAILED_PROJECTS;

  return (
    <div className="min-h-screen bg-[#0e0e0d] flex flex-col font-sans text-white selection:bg-[#c6a35b] selection:text-black">
      {/* Admin Top Navigation Bar */}
      <nav className="h-20 border-b border-white/10 flex items-center justify-between px-6 md:px-10 bg-[#141413]/90 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center gap-6">
           <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center p-1.5 bg-white/5 rounded-md border border-white/10">
                 <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain brightness-110" onError={(e) => { (e.target as HTMLImageElement).src = "/images/로고.png"; }} />
              </div>
              <div className="flex flex-col">
                 <span className="text-xs font-bold tracking-[0.25em] text-[#c6a35b] uppercase font-mono">Xenians Admin</span>
                 <span className="text-[9px] tracking-widest text-white/40 uppercase">홈페이지 문구 & 포트폴리오 관리</span>
              </div>
           </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
           {backupMessage && (
             <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#c6a35b]/20 border border-[#c6a35b]/40 text-[#c6a35b] text-xs font-mono font-bold animate-fade-in">
               <ShieldCheck className="w-4 h-4" /> {backupMessage}
             </div>
           )}

           {/* Auto-Save Status Indicator */}
           <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono">
             <span className={`w-2 h-2 rounded-full ${autoSaveStatus === 'saving' ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
             <span className="text-white/70">
               {autoSaveStatus === 'saving' ? '자동 저장 중...' : '자동 저장됨 (영구 보관)'}
             </span>
           </div>

           {saveSuccess && (
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold animate-pulse">
               <CheckCircle2 className="w-4 h-4" /> 영구 저장 완료!
             </div>
           )}

           {/* Hidden File Input for JSON restore */}
           <input 
             type="file" 
             ref={fileInputRef} 
             accept=".json" 
             onChange={handleImportJson} 
             className="hidden" 
           />

           <button 
             onClick={handleExportJson}
             className="cursor-pointer flex items-center gap-1.5 text-white/80 hover:text-white transition-all font-mono text-[11px] font-bold px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-[#c6a35b]"
             title="수정한 모든 프로젝트 및 문구를 JSON 파일로 안전하게 백업"
           >
              <Download className="w-3.5 h-3.5 text-[#c6a35b]" /> 백업 다운로드
           </button>

           <button 
             onClick={() => fileInputRef.current?.click()}
             className="cursor-pointer flex items-center gap-1.5 text-white/80 hover:text-white transition-all font-mono text-[11px] font-bold px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-[#c6a35b]"
             title="이전에 백업했던 JSON 파일을 불러와 즉시 복원"
           >
              <Upload className="w-3.5 h-3.5 text-[#c6a35b]" /> 백업 복원
           </button>

           <button 
             onClick={handleReset} 
             className="cursor-pointer flex items-center gap-1.5 text-white/40 hover:text-red-400 transition-all font-mono text-[11px] font-bold px-2.5 py-2 rounded-md hover:bg-white/5" 
             title="기본값으로 되돌리기"
           >
              <RefreshCcw className="w-3.5 h-3.5" /> 초기화
           </button>

           <button 
             onClick={handleSave} 
             className={`cursor-pointer flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-md font-mono text-xs font-bold tracking-wider transition-all shadow-lg ${
               saveSuccess 
                 ? 'bg-emerald-500 text-black shadow-emerald-500/20' 
                 : 'bg-[#c6a35b] text-[#141413] hover:bg-white shadow-[#c6a35b]/10'
             }`}
           >
              <Save className="w-4 h-4" /> {saveSuccess ? '저장 완료!' : '변경사항 저장'}
           </button>

           <Link 
             to="/projects" 
             className="cursor-pointer hidden lg:flex items-center gap-1.5 text-[#c6a35b] hover:text-white transition-all font-mono text-[11px] ml-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-[#c6a35b]"
             title="프로젝트 실적 페이지로 바로 이동"
           >
              <LogOut className="w-3.5 h-3.5" /> 프로젝트 보기
           </Link>
           <Link 
             to="/" 
             className="cursor-pointer flex items-center gap-1.5 text-white/50 hover:text-white transition-all font-mono text-[11px] px-2.5 py-2 rounded-md hover:bg-white/5"
           >
              홈으로
           </Link>
        </div>
      </nav>

      <div className="flex flex-grow overflow-hidden">
        {/* Left Tab Sidebar */}
        <aside className="w-72 border-r border-white/10 flex flex-col gap-1.5 p-5 bg-[#121211] shrink-0 overflow-y-auto">
           <span className="text-[9px] font-mono tracking-[0.25em] text-white/30 uppercase px-3 mb-2 font-bold">
             MANAGEMENT TABS
           </span>
           {[
             { id: 'PROJECTS', name: '프로젝트 메뉴 & 포트폴리오', icon: <BarChart3 className="w-4 h-4" />, badge: '중요' },
             { id: 'CONTACT', name: '컨택트 전체 문구 & 폼스프리 연동', icon: <Mail className="w-4 h-4" />, badge: '한/영 지원' },
             { id: 'MENUS', name: '모든 메뉴 & 헤더 문구', icon: <Compass className="w-4 h-4" /> },
             { id: 'HOME', name: '홈 메인 페이지 문구', icon: <Home className="w-4 h-4" /> },
             { id: 'COMPANY', name: '회사 소개 (COMPANY)', icon: <Building2 className="w-4 h-4" /> },
             { id: 'BUSINESS', name: '비즈니스 5개 부문 (BUSINESS)', icon: <Briefcase className="w-4 h-4" /> },
             { id: 'SYSTEM', name: '시스템 & 테마 & 푸터', icon: <Settings className="w-4 h-4" /> }
           ].map((t) => {
              const isActive = activeTab === t.id;
              return (
                <button
                   key={t.id}
                   onClick={() => setActiveTab(t.id as any)}
                   className={`cursor-pointer w-full flex items-center justify-between px-4 py-3.5 rounded-md text-xs font-medium transition-all text-left ${
                     isActive 
                       ? 'bg-[#c6a35b] text-[#141413] font-bold shadow-md' 
                       : 'text-white/60 hover:bg-white/5 hover:text-white'
                   }`}
                >
                   <div className="flex items-center gap-3 truncate">
                      <span className={isActive ? 'text-[#141413]' : 'text-[#c6a35b]'}>{t.icon}</span>
                      <span className="truncate">{t.name}</span>
                   </div>
                   {t.badge && !isActive && (
                      <span className="text-[9px] font-mono bg-[#c6a35b]/20 text-[#c6a35b] px-1.5 py-0.5 rounded uppercase">
                        {t.badge}
                      </span>
                   )}
                </button>
              );
           })}
        </aside>

        {/* Right Tab Content Main Area */}
        <main className="flex-grow overflow-y-auto p-8 sm:p-12">
           <div className="max-w-4xl mx-auto pb-24">
              
              {/* 1. PROJECTS TAB (프로젝트 메뉴 문구, 좌측 상세설명, 8개 프로젝트 전체 스펙 및 VIEW DETAIL 모달 완벽 지원) */}
              {activeTab === 'PROJECTS' && (
                  <div className="space-y-12">
                      {renderSectionHeader(
                        <BarChart3 className="w-5 h-5" />, 
                        "프로젝트 메뉴 문구 & 포트폴리오 관리", 
                        "상단 배너 및 좌측 상세 설명문, 세부 섹션 타이틀, 그리고 프로젝트 목록의 모든 제원 스펙(위치, 규모, 용도, 연면적, 시공, 시행, 준공, 요약문, VIEW DETAIL 모달 실적)을 한국어와 영어 모두 직접 수정합니다."
                      )}

                      {/* Top Header Texts for Projects Page */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                             <Type className="w-4 h-4" /> 1. 프로젝트 메뉴 문구 & 페이지 배너/좌측 상세설명 설정
                          </h3>

                          {/* Top Navigation Menu Bar Label */}
                          <div className="bg-black/30 border border-[#c6a35b]/30 rounded-lg p-4 space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-mono font-bold text-[#c6a35b] uppercase block">
                                ① 상단 헤더 내비게이션 메뉴 표시명 (Navigation Menu Label)
                              </label>
                              <span className="text-[10px] font-mono bg-[#c6a35b]/20 text-[#c6a35b] px-2 py-0.5 rounded">
                                사이트 최상단 메뉴바 & 모바일 메뉴 즉시 반영
                              </span>
                            </div>
                            <input 
                              className="w-full bg-white/[0.06] border border-white/20 px-4 py-2.5 rounded text-sm text-white font-bold outline-none focus:border-[#c6a35b] transition-colors"
                              value={getNavName('/projects', 'PROJECTS')}
                              onChange={(e) => setNavName('/projects', e.target.value)}
                              placeholder="예: PROJECTS, 프로젝트 실적, 포트폴리오"
                            />
                            <p className="text-[11px] text-white/50 font-sans">
                              * 사이트 상단 메뉴 바의 'PROJECTS' 글자를 원하는 문구로 변경합니다. (저장 즉시 모든 페이지의 상단 메뉴에 반영됩니다)
                            </p>
                          </div>

                          <div className="pt-2 border-t border-white/10 space-y-4">
                            <span className="text-xs font-mono font-bold text-white/70 uppercase block">
                              ② 프로젝트 페이지 상단 배너 문구
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {renderField("메인 타이틀 (Title)", localData.trackRecordHeader?.title || "PROJECTS", "trackRecordHeader.title")}
                                {renderField("서브 타이틀 (Subtitle / Breadcrumb)", localData.trackRecordHeader?.subtitle || "PORTFOLIO / TRACK RECORD", "trackRecordHeader.subtitle")}
                            </div>
                          </div>

                          {/* Left Column Detailed Description */}
                          <div className="pt-4 border-t border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold text-[#c6a35b] uppercase block">
                                ③ 프로젝트 페이지 왼쪽 상세설명 부분 (Left Column Description)
                              </span>
                              <span className="text-[10px] font-mono bg-white/10 text-white/70 px-2 py-0.5 rounded">
                                프로젝트 페이지 좌측 상단 박스에 직접 표출
                              </span>
                            </div>
                            {renderField("좌측 프로젝트 전체 개요 상세 설명문 (Description)", localData.trackRecordHeader?.description || "제니안스 그룹이 주관 및 참여한 국내외 대표 랜드마크 복합개발, 매각자문, 리조트 및 골프클럽 위탁운영 포트폴리오입니다.", "trackRecordHeader.description", "textarea")}
                          </div>

                          {/* Section Labels */}
                          <div className="pt-4 border-t border-white/10 space-y-4">
                            <span className="text-xs font-mono font-bold text-white/70 uppercase block">
                              ④ 페이지 세부 섹션 타이틀 및 기본 버튼 문구 설정
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {renderField("좌측 프로젝트 목록 타이틀 - 한글 (List Title KO)", localData.trackRecordHeader?.listTitleKo || "PORTFOLIO LIST", "trackRecordHeader.listTitleKo")}
                              {renderField("좌측 프로젝트 목록 타이틀 - 영문 (List Title EN)", localData.trackRecordHeader?.listTitleEn || "PORTFOLIO LIST", "trackRecordHeader.listTitleEn")}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {renderField("하단 갤러리 섹션 타이틀 - 한글 (Gallery Title KO)", localData.trackRecordHeader?.galleryTitleKo || "ALL PROJECTS GALLERY", "trackRecordHeader.galleryTitleKo")}
                              {renderField("하단 갤러리 섹션 타이틀 - 영문 (Gallery Title EN)", localData.trackRecordHeader?.galleryTitleEn || "ALL PROJECTS GALLERY", "trackRecordHeader.galleryTitleEn")}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {renderField("상세 보기 버튼 기본 문구 - 한글 (View Detail Text KO)", localData.trackRecordHeader?.viewDetailTextKo || "VIEW DETAIL", "trackRecordHeader.viewDetailTextKo")}
                              {renderField("상세 보기 버튼 기본 문구 - 영문 (View Detail Text EN)", localData.trackRecordHeader?.viewDetailTextEn || "VIEW DETAIL", "trackRecordHeader.viewDetailTextEn")}
                            </div>
                          </div>
                      </div>

                      {/* Project Items List Editor */}
                      <div className="space-y-6">
                          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-white/10">
                            <div>
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                  <span>2. 프로젝트 목록 편집 ({detailedProjectsList.length}개)</span>
                                </h3>
                                <p className="text-white/40 text-xs mt-0.5">
                                  각 프로젝트의 번호, 한글/영문 명칭, 사진, 상세 제원 스펙, 요약문 및 VIEW DETAIL 모달 문구를 완벽하게 수정할 수 있습니다.
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={handleCopyDefaultProjectsCode}
                                className="cursor-pointer bg-white/10 text-white hover:bg-white/20 px-3.5 py-2.5 rounded text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-1.5 border border-white/20"
                                title="배포 코드 복사"
                              >
                                {copiedCode ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400">코드 복사 완료!</span>
                                  </>
                                ) : (
                                  <>
                                    <Code className="w-3.5 h-3.5 text-[#c6a35b]" />
                                    <span>배포용 코드 복사 (TypeScript)</span>
                                  </>
                                )}
                              </button>
                              <button
                                  onClick={() => {
                                      setLocalData(prev => {
                                        const projects = [...(prev.detailedProjects && prev.detailedProjects.length > 0 ? prev.detailedProjects : DEFAULT_DETAILED_PROJECTS)];
                                        const newNum = String(projects.length + 1).padStart(2, '0');
                                        const newProj: DetailedProject = {
                                          id: `proj-${Date.now()}`,
                                          num: newNum,
                                          name: 'NEW LANDMARK PROJECT',
                                          titleKo: '신규 랜드마크 프로젝트',
                                          titleEn: 'New Landmark Project',
                                          category: 'DEVELOPMENT',
                                          year: '2024 - 2025',
                                          locationKo: '서울특별시 강남구 테헤란로',
                                          locationEn: 'Teheran-ro, Gangnam, Seoul',
                                          scaleKo: '지하 6층 ~ 지상 28층',
                                          scaleEn: 'B6F - 28F',
                                          useKo: '업무시설 및 판매시설 (프라임 복합)',
                                          useEn: 'Prime Office & Commercial Complex',
                                          gfaKo: '65,000.00㎡',
                                          gfaEn: '65,000.00 sq.m',
                                          contractorKo: '대형 1군 건설사',
                                          contractorEn: 'Tier-1 General Contractor',
                                          developerKo: '(주)제니안스 파트너스',
                                          developerEn: 'Xenians Partners Inc.',
                                          completionYear: '2025',
                                          roleKo: '시행 기획, 금융 주선 및 개발 총괄',
                                          roleEn: 'Lead Development & Financing',
                                          summaryKo: '프로젝트 핵심 개요 및 사업 설명문입니다.',
                                          summaryEn: 'Executive summary of project achievements and investment value.',
                                          highlightsTitleKo: '주요 수행 실적 및 핵심 성과',
                                          highlightsTitleEn: 'KEY HIGHLIGHTS & EXECUTION',
                                          viewDetailBtnKo: 'VIEW DETAIL',
                                          viewDetailBtnEn: 'VIEW DETAIL',
                                          detailsKo: [
                                            '사업 부지 매입 및 인허가 원스톱 수행 완료',
                                            '금융기관 본PF 4,500억 원 주선 및 자금조달',
                                            '프리미엄 앵커 테넌트 조기 유치 완료'
                                          ],
                                          detailsEn: [
                                            'End-to-end land acquisition and zoning authorization',
                                            'Project financing totaling KRW 450 Billion syndication',
                                            'Early onboarding of prime anchor tenants'
                                          ],
                                          image: '/images/hero-luxury-real-estate.png'
                                        };
                                        return { ...prev, detailedProjects: [newProj, ...projects] };
                                      });
                                  }}
                                  className="cursor-pointer bg-[#c6a35b] text-[#141413] px-4 py-2.5 rounded text-xs font-mono font-bold tracking-wider hover:bg-white transition-all flex items-center gap-1.5"
                              >
                                  <Plus className="w-3.5 h-3.5" /> 새 프로젝트 추가
                              </button>
                            </div>
                          </div>
                          
                          <div className="space-y-8">
                              {detailedProjectsList.map((proj, pIdx) => (
                                  <div key={proj.id || pIdx} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6 hover:border-[#c6a35b]/40 transition-all">
                                      {/* Card Header with reorder & actions */}
                                      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-3">
                                        <div className="flex items-center gap-3">
                                          <span className="w-8 h-8 rounded bg-[#c6a35b] text-[#141413] font-mono text-xs font-bold flex items-center justify-center shadow-sm">
                                            {proj.num || String(pIdx + 1).padStart(2, '0')}
                                          </span>
                                          <div>
                                            <span className="text-white font-serif text-lg font-bold block">
                                              {proj.titleKo || proj.name}
                                            </span>
                                            {proj.name && proj.titleKo && (
                                              <span className="text-white/40 text-xs font-mono">
                                                {proj.name}
                                              </span>
                                            )}
                                          </div>
                                          <span className="px-2.5 py-0.5 bg-[#c6a35b]/20 text-[#c6a35b] rounded text-[10px] font-mono uppercase font-bold border border-[#c6a35b]/30">
                                            {proj.category}
                                          </span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                          <button
                                            type="button"
                                            onClick={() => moveProject(pIdx, 'up')}
                                            disabled={pIdx === 0}
                                            className="p-1.5 rounded bg-white/[0.05] hover:bg-white/15 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer"
                                            title="위로 이동"
                                          >
                                            <ArrowUp className="w-4 h-4" />
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => moveProject(pIdx, 'down')}
                                            disabled={pIdx === detailedProjectsList.length - 1}
                                            className="p-1.5 rounded bg-white/[0.05] hover:bg-white/15 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer"
                                            title="아래로 이동"
                                          >
                                            <ArrowDown className="w-4 h-4" />
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => duplicateProject(pIdx)}
                                            className="px-2.5 py-1.5 rounded bg-white/[0.05] hover:bg-white/15 text-white/80 hover:text-white text-xs font-mono transition-all flex items-center gap-1 cursor-pointer"
                                            title="프로젝트 복제"
                                          >
                                            <Copy className="w-3.5 h-3.5 text-[#c6a35b]" />
                                            <span>복제</span>
                                          </button>
                                          <button 
                                              type="button"
                                              className="cursor-pointer text-white/30 hover:text-red-400 p-1.5 transition-colors flex items-center gap-1 text-xs"
                                              title="프로젝트 삭제"
                                              onClick={() => {
                                                  if (confirm(`'${proj.name || proj.titleKo}' 프로젝트를 삭제하시겠습니까?`)) {
                                                    setLocalData(prev => {
                                                      const list = [...(prev.detailedProjects && prev.detailedProjects.length > 0 ? prev.detailedProjects : DEFAULT_DETAILED_PROJECTS)];
                                                      const filtered = list.filter((_, idx) => idx !== pIdx);
                                                      return { ...prev, detailedProjects: filtered };
                                                    });
                                                  }
                                              }}
                                          >
                                              <Trash2 className="w-4 h-4" /> <span>삭제</span>
                                          </button>
                                        </div>
                                      </div>

                                      {/* Top Row: Basic Info & Image Preview */}
                                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                        <div className="md:col-span-4 space-y-3">
                                          <div className="aspect-[16/10] bg-black rounded-md border border-white/10 overflow-hidden relative">
                                            <img 
                                              src={proj.image} 
                                              alt={proj.name} 
                                              className="w-full h-full object-cover"
                                              onError={(e) => {
                                                (e.target as HTMLImageElement).src = "/images/project-acro-forest.jpg";
                                              }}
                                            />
                                          </div>
                                          <div>
                                            <label className="text-[10px] font-mono font-bold text-white/40 uppercase block mb-1">이미지 경로 (URL)</label>
                                            <input 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                              value={proj.image || ''}
                                              onChange={(e) => updateProjectField(pIdx, 'image', e.target.value)}
                                            />
                                          </div>
                                        </div>

                                        <div className="md:col-span-8 space-y-4">
                                          <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <label className="text-[10px] font-mono text-white/40 uppercase block mb-1">번호 (NUM)</label>
                                                <input 
                                                  className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b] font-mono"
                                                  value={proj.num || ''} 
                                                  onChange={(e) => updateProjectField(pIdx, 'num', e.target.value)}
                                                  placeholder="01"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-mono text-white/40 uppercase block mb-1">영문 대표명 (NAME - 대문자)</label>
                                                <input 
                                                  className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b] font-bold"
                                                  value={proj.name || ''} 
                                                  onChange={(e) => updateProjectField(pIdx, 'name', e.target.value)}
                                                  placeholder="ACRO SEOUL FOREST"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-mono text-white/40 uppercase block mb-1">사업 분야 (CATEGORY)</label>
                                                <select 
                                                  className="w-full bg-[#1c1c1b] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b] cursor-pointer" 
                                                  value={proj.category} 
                                                  onChange={(e) => updateProjectField(pIdx, 'category', e.target.value)}
                                                >
                                                    <option value="DEVELOPMENT">DEVELOPMENT (시행 · 개발)</option>
                                                    <option value="M&A">M&A (자산 매각 · 인수)</option>
                                                    <option value="OPERATION">OPERATION (위탁 운영)</option>
                                                    <option value="FM">FM (시설 관리)</option>
                                                    <option value="SALES">SALES (분양 대행)</option>
                                                </select>
                                            </div>
                                          </div>

                                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div>
                                                <label className="text-[10px] font-mono text-[#c6a35b] font-bold uppercase block mb-1">한글 프로젝트명 (Title KO)</label>
                                                <input 
                                                  className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                  value={proj.titleKo || ''} 
                                                  onChange={(e) => updateProjectField(pIdx, 'titleKo', e.target.value)}
                                                  placeholder="아크로 서울포레스트"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-mono text-white/60 uppercase block mb-1">영문 부제/명칭 (Title EN)</label>
                                                <input 
                                                  className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                  value={proj.titleEn || ''} 
                                                  onChange={(e) => updateProjectField(pIdx, 'titleEn', e.target.value)}
                                                  placeholder="Acro Seoul Forest"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-mono text-white/40 uppercase block mb-1">준공 연도 (YEAR)</label>
                                                <input 
                                                  className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                  value={proj.completionYear || proj.year || ''} 
                                                  onChange={(e) => {
                                                    updateProjectField(pIdx, 'completionYear', e.target.value);
                                                    updateProjectField(pIdx, 'year', e.target.value);
                                                  }}
                                                  placeholder="2024"
                                                />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Project Specs Table Inputs (Korean & English) */}
                                      <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-4">
                                        <div className="flex items-center justify-between">
                                          <span className="text-[10px] font-mono tracking-wider text-[#c6a35b] font-bold uppercase block">
                                            프로젝트 상세 제원 스펙 (한글 & 영문 테이블 표출 정보)
                                          </span>
                                          <span className="text-[10px] text-white/40 font-mono">
                                            언어 선택(KO/EN)에 따라 자동 대응
                                          </span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                          {/* Location */}
                                          <div className="space-y-1.5 bg-white/[0.02] p-3 rounded border border-white/5">
                                            <span className="text-[10px] font-mono text-[#c6a35b] font-bold block">위치 (LOCATION)</span>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">한글 위치</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.locationKo || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'locationKo', e.target.value)}
                                                placeholder="서울특별시 성동구 왕십리로"
                                              />
                                            </div>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">영문 위치</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.locationEn || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'locationEn', e.target.value)}
                                                placeholder="Seongsu, Seongdong, Seoul"
                                              />
                                            </div>
                                          </div>

                                          {/* Scale */}
                                          <div className="space-y-1.5 bg-white/[0.02] p-3 rounded border border-white/5">
                                            <span className="text-[10px] font-mono text-[#c6a35b] font-bold block">규모 (SCALE)</span>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">한글 규모</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.scaleKo || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'scaleKo', e.target.value)}
                                                placeholder="지하 5층 ~ 지상 49층, 2개동"
                                              />
                                            </div>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">영문 규모</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.scaleEn || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'scaleEn', e.target.value)}
                                                placeholder="B5F - 49F, 2 Towers"
                                              />
                                            </div>
                                          </div>

                                          {/* Use */}
                                          <div className="space-y-1.5 bg-white/[0.02] p-3 rounded border border-white/5">
                                            <span className="text-[10px] font-mono text-[#c6a35b] font-bold block">용도 (USE)</span>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">한글 용도</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.useKo || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'useKo', e.target.value)}
                                                placeholder="공동주택, 오피스, 문화집회시설"
                                              />
                                            </div>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">영문 용도</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.useEn || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'useEn', e.target.value)}
                                                placeholder="Residential, Prime Office, Retail"
                                              />
                                            </div>
                                          </div>

                                          {/* GFA */}
                                          <div className="space-y-1.5 bg-white/[0.02] p-3 rounded border border-white/5">
                                            <span className="text-[10px] font-mono text-[#c6a35b] font-bold block">연면적 (GFA)</span>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">한글 연면적</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.gfaKo || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'gfaKo', e.target.value)}
                                                placeholder="279,723.00㎡"
                                              />
                                            </div>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">영문 연면적</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.gfaEn || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'gfaEn', e.target.value)}
                                                placeholder="279,723.00 sq.m"
                                              />
                                            </div>
                                          </div>

                                          {/* Contractor */}
                                          <div className="space-y-1.5 bg-white/[0.02] p-3 rounded border border-white/5">
                                            <span className="text-[10px] font-mono text-[#c6a35b] font-bold block">시공 / 역할 (CONTRACTOR)</span>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">한글 시공/역할</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.contractorKo || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'contractorKo', e.target.value)}
                                                placeholder="DL이앤씨(주)"
                                              />
                                            </div>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">영문 시공/역할</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.contractorEn || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'contractorEn', e.target.value)}
                                                placeholder="DL E&C Co., Ltd."
                                              />
                                            </div>
                                          </div>

                                          {/* Developer */}
                                          <div className="space-y-1.5 bg-white/[0.02] p-3 rounded border border-white/5">
                                            <span className="text-[10px] font-mono text-[#c6a35b] font-bold block">시행 / 고객사 (DEVELOPER)</span>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">한글 시행/고객사</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.developerKo || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'developerKo', e.target.value)}
                                                placeholder="DL이앤씨 & LB자산운용"
                                              />
                                            </div>
                                            <div>
                                              <label className="text-[9px] font-mono text-white/40 block mb-0.5">영문 시행/고객사</label>
                                              <input 
                                                className="w-full bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                                value={proj.developerEn || ''} 
                                                onChange={(e) => updateProjectField(pIdx, 'developerEn', e.target.value)}
                                                placeholder="DL E&C & LB Asset Management"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Summaries (Korean & English) */}
                                      <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                          <div>
                                            <label className="text-[10px] font-mono text-[#c6a35b] font-bold uppercase block mb-1">
                                              프로젝트 상세 요약문 - 한글 (SUMMARY KO)
                                            </label>
                                            <textarea 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b] min-h-[70px]"
                                              value={proj.summaryKo || ''}
                                              onChange={(e) => updateProjectField(pIdx, 'summaryKo', e.target.value)}
                                              placeholder="서울 성수 뚝섬의 하이엔드 복합 랜드마크. 최고급 주거 및 프라임 오피스 통합 개발."
                                            />
                                            <p className="text-[10px] text-white/40 mt-0.5">
                                              * 프로젝트 화면 중앙 설명문 및 VIEW DETAIL 모달 상단에 노출됩니다.
                                            </p>
                                          </div>
                                          <div>
                                            <label className="text-[10px] font-mono text-[#c6a35b] font-bold uppercase block mb-1">
                                              프로젝트 상세 요약문 - 영문 (SUMMARY EN)
                                            </label>
                                            <textarea 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b] min-h-[70px]"
                                              value={proj.summaryEn || ''}
                                              onChange={(e) => updateProjectField(pIdx, 'summaryEn', e.target.value)}
                                              placeholder="Premier landmark mixed-use development combining luxury residences and prime office."
                                            />
                                            <p className="text-[10px] text-white/40 mt-0.5">
                                              * 영문 모드 전환 시 프로젝트 화면 및 모달에 노출됩니다.
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      {/* VIEW DETAIL Modal Customization & Key Highlights */}
                                      <div className="bg-[#c6a35b]/[0.03] p-5 rounded-lg border border-[#c6a35b]/20 space-y-4">
                                        <span className="text-[11px] font-mono tracking-wider text-[#c6a35b] font-bold uppercase flex items-center gap-1.5">
                                          <CheckCircle2 className="w-4 h-4" /> VIEW DETAIL 모달 팝업 세부 문구 & 주요 수행 실적
                                        </span>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                          <div>
                                            <label className="text-[10px] font-mono text-white/60 uppercase block mb-1">
                                              모달 실적 섹션 타이틀 - 한글 (기본: 주요 수행 실적 및 핵심 성과)
                                            </label>
                                            <input 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                              value={proj.highlightsTitleKo || ''}
                                              onChange={(e) => updateProjectField(pIdx, 'highlightsTitleKo', e.target.value)}
                                              placeholder="주요 수행 실적 및 핵심 성과"
                                            />
                                          </div>
                                          <div>
                                            <label className="text-[10px] font-mono text-white/60 uppercase block mb-1">
                                              모달 실적 섹션 타이틀 - 영문 (기본: KEY HIGHLIGHTS & EXECUTION)
                                            </label>
                                            <input 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                              value={proj.highlightsTitleEn || ''}
                                              onChange={(e) => updateProjectField(pIdx, 'highlightsTitleEn', e.target.value)}
                                              placeholder="KEY HIGHLIGHTS & EXECUTION"
                                            />
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                          <div>
                                            <label className="text-[10px] font-mono text-white/60 uppercase block mb-1">
                                              이 프로젝트 전용 버튼 문구 - 한글 (비워두면 기본값 사용)
                                            </label>
                                            <input 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                              value={proj.viewDetailBtnKo || ''}
                                              onChange={(e) => updateProjectField(pIdx, 'viewDetailBtnKo', e.target.value)}
                                              placeholder="VIEW DETAIL 또는 상세 실적 보기"
                                            />
                                          </div>
                                          <div>
                                            <label className="text-[10px] font-mono text-white/60 uppercase block mb-1">
                                              이 프로젝트 전용 버튼 문구 - 영문 (비워두면 기본값 사용)
                                            </label>
                                            <input 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b]"
                                              value={proj.viewDetailBtnEn || ''}
                                              onChange={(e) => updateProjectField(pIdx, 'viewDetailBtnEn', e.target.value)}
                                              placeholder="VIEW DETAIL or CASE STUDY"
                                            />
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                          <div>
                                            <label className="text-[10px] font-mono text-[#c6a35b] font-bold uppercase block mb-1">
                                              주요 수행 실적 - 한글 (1줄에 1개씩 줄바꿈 입력)
                                            </label>
                                            <textarea 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b] min-h-[90px] font-sans"
                                              value={(proj.detailsKo || []).join('\n')}
                                              onChange={(e) => {
                                                updateProjectField(pIdx, 'detailsKo', e.target.value.split('\n'));
                                              }}
                                              placeholder="부지 매입 및 인허가 원스톱 수행 완료&#10;국내 대형 금융기관을 통한 본PF 주선 및 자금조달 완료&#10;VIP 타깃 프리미엄 마케팅을 통한 프라임 주거 부문 조기 완판"
                                            />
                                          </div>

                                          <div>
                                            <label className="text-[10px] font-mono text-[#c6a35b] font-bold uppercase block mb-1">
                                              주요 수행 실적 - 영문 (1줄에 1개씩 줄바꿈 입력)
                                            </label>
                                            <textarea 
                                              className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 rounded text-xs text-white outline-none focus:border-[#c6a35b] min-h-[90px] font-sans"
                                              value={(proj.detailsEn || []).join('\n')}
                                              onChange={(e) => {
                                                updateProjectField(pIdx, 'detailsEn', e.target.value.split('\n'));
                                              }}
                                              placeholder="End-to-end land acquisition and zoning authorization&#10;Project financing totaling KRW 450 Billion syndication&#10;Early onboarding of prime anchor tenants"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              )}

              {/* 2. CONTACT & GLOBAL OFFICES TAB (한/영 컨텍트 페이지 문구 완벽 지원) */}
              {activeTab === 'CONTACT' && (
                  <div className="space-y-10">
                      {renderSectionHeader(
                        <Mail className="w-5 h-5" />, 
                        "컨택트(CONTACT) 전체 문구 & 폼스프리(Formspree) 연동 관리", 
                        "폼스프리 이메일 연동 엔드포인트 URL, 상단 배너 타이틀, 서울·런던·싱가포르 오피스 정보, 이메일 문의 폼 문구, 접수 완료 메시지 및 업무시간의 한국어/영문(English) 버전을 한곳에서 직접 관리합니다."
                      )}

                      {/* 0. 폼스프리(Formspree) 이메일 접수 연동 설정 */}
                      <div className="bg-gradient-to-r from-amber-500/10 via-[#c6a35b]/10 to-amber-500/5 border-2 border-[#c6a35b]/40 rounded-xl p-6 sm:p-8 space-y-5 shadow-xl">
                          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#c6a35b]/20">
                            <div className="flex items-center gap-2.5">
                              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                              <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                                <Send className="w-4 h-4" /> 0. 폼스프리(Formspree) 실시간 이메일 연동 설정
                              </h3>
                            </div>
                            <span className="text-[11px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded font-bold">
                              연동 연계 시스템 가동 중
                            </span>
                          </div>

                          <div className="space-y-3">
                            {renderField(
                              "폼스프리 제출 엔드포인트 URL (Formspree Action URL)",
                              localData.contactInfo?.formspreeEndpoint || 'https://formspree.io/f/xaqvaqyd',
                              "contactInfo.formspreeEndpoint"
                            )}
                            <div className="p-4 rounded-lg bg-black/40 border border-white/10 space-y-2 text-xs">
                              <p className="text-[#c6a35b] font-bold flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 shrink-0" />
                                문의 접수 시 위 주소를 통해 담당자 이메일(xenians2019@gmail.com)로 즉시 메일이 발송됩니다.
                              </p>
                              <p className="text-white/70 leading-relaxed">
                                ※ <strong className="text-white">주의사항 (최초 1회 이메일 확인)</strong>: Formspree에 처음 등록된 엔드포인트인 경우, 첫 문의가 접수되었을 때 Formspree에서 계정 이메일(xenians2019@gmail.com)로 <em>'Confirm Your Email / Activate Form'</em> 확인 메일을 발송합니다. 해당 메일의 활성화 링크를 1회 클릭하셔야 이후부터 정상적으로 문의 메일이 수신함으로 전달됩니다.
                              </p>
                            </div>
                          </div>
                      </div>

                      {/* 1. 컨택트 페이지 최상단 배너 문구 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <Type className="w-4 h-4" /> 1. 최상단 페이지 배너 문구 (PAGE HEADER)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">페이지 상단 대형 배너 텍스트</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                              <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-white/5">
                                <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                  🇰🇷 한국어 상단 배너 문구
                                </div>
                                {renderField(
                                  "배너 메인 타이틀 (한국어)",
                                  localData.contactInfo?.bannerTitleKo || 'CONTACT',
                                  "contactInfo.bannerTitleKo"
                                )}
                                {renderField(
                                  "배너 서브 설명 (한국어)",
                                  localData.contactInfo?.bannerSubKo || '오시는 길 & 이메일 문의',
                                  "contactInfo.bannerSubKo"
                                )}
                              </div>
                            )}

                            {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                              <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-[#c6a35b]/20">
                                <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                  🇺🇸 영어 상단 배너 문구 (English)
                                </div>
                                {renderField(
                                  "Banner Main Title (English)",
                                  localData.contactInfo?.bannerTitleEn || 'CONTACT',
                                  "contactInfo.bannerTitleEn"
                                )}
                                {renderField(
                                  "Banner Subtitle (English)",
                                  localData.contactInfo?.bannerSubEn || 'Global Locations & Inquiries',
                                  "contactInfo.bannerSubEn"
                                )}
                              </div>
                            )}
                          </div>
                      </div>

                      {/* 언어 모드 선택 탭 바 */}
                      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 shadow-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white/70">편집 모드:</span>
                          <div className="flex items-center bg-black/50 p-1 rounded-lg border border-white/10">
                            <button
                              type="button"
                              onClick={() => setContactLangFilter('ALL')}
                              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                                contactLangFilter === 'ALL'
                                  ? 'bg-[#c6a35b] text-[#141413] font-bold shadow'
                                  : 'text-white/60 hover:text-white'
                              }`}
                            >
                              🌐 전체 (한/영 나란히 보기)
                            </button>
                            <button
                              type="button"
                              onClick={() => setContactLangFilter('KO')}
                              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                                contactLangFilter === 'KO'
                                  ? 'bg-[#c6a35b] text-[#141413] font-bold shadow'
                                  : 'text-white/60 hover:text-white'
                              }`}
                            >
                              🇰🇷 한국어 버전만 보기
                            </button>
                            <button
                              type="button"
                              onClick={() => setContactLangFilter('EN')}
                              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                                contactLangFilter === 'EN'
                                  ? 'bg-[#c6a35b] text-[#141413] font-bold shadow'
                                  : 'text-white/60 hover:text-white'
                              }`}
                            >
                              🇺🇸 영어 버전 (English)만 보기
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-[#c6a35b] bg-[#c6a35b]/10 px-2.5 py-1 rounded border border-[#c6a35b]/25 font-bold flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5" /> 영문 컨텍트 페이지 문구 편집 지원
                          </span>
                        </div>
                      </div>

                      {/* 0. 오피스 상단 헤더 문구 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <Layers className="w-4 h-4" /> 오피스 안내 섹션 헤더 (SECTION HEADER)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">상단 타이틀 & 서브타이틀</span>
                          </div>

                          {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-black/20 p-4 rounded-lg border border-white/5">
                              <div className="col-span-full font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                🇰🇷 한국어 헤더 문구
                              </div>
                              {renderField(
                                "한국어 서브타이틀",
                                localData.contactInfo?.locationsSubtitleKo || 'GLOBAL LOCATIONS',
                                "contactInfo.locationsSubtitleKo"
                              )}
                              {renderField(
                                "한국어 메인 타이틀",
                                localData.contactInfo?.locationsTitleKo || '글로벌 오피스 안내',
                                "contactInfo.locationsTitleKo"
                              )}
                            </div>
                          )}

                          {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-black/20 p-4 rounded-lg border border-[#c6a35b]/20">
                              <div className="col-span-full font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                🇺🇸 영어 헤더 문구 (English)
                              </div>
                              {renderField(
                                "English Subtitle",
                                localData.contactInfo?.locationsSubtitleEn || 'GLOBAL LOCATIONS',
                                "contactInfo.locationsSubtitleEn"
                              )}
                              {renderField(
                                "English Main Title",
                                localData.contactInfo?.locationsTitleEn || 'Global Locations & Offices',
                                "contactInfo.locationsTitleEn"
                              )}
                            </div>
                          )}
                      </div>

                      {/* 1. 서울 본사 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <MapPin className="w-4 h-4" /> 1. 서울 본사 (SEOUL HEADQUARTERS)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">대한민국 서울 테헤란로</span>
                          </div>

                          {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                            <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-white/5">
                              <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                🇰🇷 서울 본사 - 한국어 정보
                              </div>
                              {renderField(
                                "서울 본사 표시명 (한국어)", 
                                localData.contactInfo?.seoulTitleKo || '서울 본사', 
                                "contactInfo.seoulTitleKo"
                              )}
                              {renderField(
                                "서울 주소 (한국어)", 
                                localData.contactInfo?.seoulAddressKo || '서울특별시 강남구 테헤란로 456 XENIANS Tower 15층', 
                                "contactInfo.seoulAddressKo"
                              )}
                              {renderField(
                                "지하철 및 교통 안내 (한국어)", 
                                localData.contactInfo?.seoulTransportKo || '선릉역 1번 출구 (도보 3분) / 삼성역 4번 출구 (도보 5분)', 
                                "contactInfo.seoulTransportKo"
                              )}
                            </div>
                          )}

                          {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                            <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-[#c6a35b]/20">
                              <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                🇺🇸 서울 본사 - 영어 정보 (English Version)
                              </div>
                              {renderField(
                                "Seoul HQ Display Title (English)", 
                                localData.contactInfo?.seoulTitleEn || 'Seoul HQ', 
                                "contactInfo.seoulTitleEn"
                              )}
                              {renderField(
                                "Seoul Address (English)", 
                                localData.contactInfo?.seoulAddressEn || '15F, XENIANS Tower, 456 Teheran-ro, Gangnam-gu, Seoul, Republic of Korea', 
                                "contactInfo.seoulAddressEn"
                              )}
                              {renderField(
                                "Subway & Transit Info (English)", 
                                localData.contactInfo?.seoulTransportEn || 'Seolleung Station Exit 1 (3-min walk) / Samseong Station Exit 4 (5-min walk)', 
                                "contactInfo.seoulTransportEn"
                              )}
                            </div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            {renderField(
                              "네이버 지도 링크 URL (공통)", 
                              localData.contactInfo?.seoulNaverMapUrl || 'https://map.naver.com/v5/search/%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20456', 
                              "contactInfo.seoulNaverMapUrl"
                            )}
                            {renderField(
                              "구글 지도 링크 URL (공통)", 
                              localData.contactInfo?.seoulGoogleMapUrl || 'https://maps.google.com/?q=456+Teheran-ro,+Gangnam-gu,+Seoul', 
                              "contactInfo.seoulGoogleMapUrl"
                            )}
                          </div>
                      </div>

                      {/* 2. 런던 오피스 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <MapPin className="w-4 h-4" /> 2. 런던 오피스 (LONDON OFFICE)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">영국 런던</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                              renderField(
                                "런던 오피스 표시명 (한국어)", 
                                localData.contactInfo?.londonTitleKo || '런던 오피스', 
                                "contactInfo.londonTitleKo"
                              )
                            )}
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                              renderField(
                                "London Office Display Title (English)", 
                                localData.contactInfo?.londonTitleEn || 'London', 
                                "contactInfo.londonTitleEn"
                              )
                            )}
                          </div>
                          {renderField(
                            "런던 주소 (공통/영문)", 
                            localData.contactInfo?.londonAddress || 'Tower 42, 25 Old Broad St, London EC2N 1HN, United Kingdom', 
                            "contactInfo.londonAddress"
                          )}
                      </div>

                      {/* 3. 싱가포르 오피스 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <MapPin className="w-4 h-4" /> 3. 싱가포르 오피스 (SINGAPORE OFFICE)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">싱가포르 마리나 원</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                              renderField(
                                "싱가포르 오피스 표시명 (한국어)", 
                                localData.contactInfo?.singaporeTitleKo || '싱가포르 오피스', 
                                "contactInfo.singaporeTitleKo"
                              )
                            )}
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                              renderField(
                                "Singapore Office Display Title (English)", 
                                localData.contactInfo?.singaporeTitleEn || 'Singapore', 
                                "contactInfo.singaporeTitleEn"
                              )
                            )}
                          </div>
                          {renderField(
                            "싱가포르 주소 (공통/영문)", 
                            localData.contactInfo?.singaporeAddress || '7 Straits View, Marina One East Tower #12-01, Singapore 018936', 
                            "contactInfo.singaporeAddress"
                          )}
                      </div>

                      {/* 4. 이메일 문의 접수 섹션 문구 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <Mail className="w-4 h-4" /> 4. 이메일 문의 접수 문구 (EMAIL INQUIRY SECTION)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">문의 양식 섹션 타이틀 및 안내문</span>
                          </div>

                          {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                            <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-white/5">
                              <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                🇰🇷 이메일 문의 섹션 - 한국어 문구
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {renderField(
                                  "한국어 서브타이틀", 
                                  localData.contactInfo?.inquirySubtitleKo || 'EMAIL INQUIRY', 
                                  "contactInfo.inquirySubtitleKo"
                                )}
                                {renderField(
                                  "한국어 섹션 제목", 
                                  localData.contactInfo?.inquiryTitleKo || '이메일 문의 접수', 
                                  "contactInfo.inquiryTitleKo"
                                )}
                              </div>
                              {renderField(
                                "한국어 안내 설명문", 
                                localData.contactInfo?.inquiryDescKo || '부동산 개발, M&A 자문, 자산 위탁운영 등 전문 상담이 필요하신 내용을 남겨주시면 담당 부서 전문가가 24시간 이내에 회신해 드립니다.', 
                                "contactInfo.inquiryDescKo",
                                "textarea"
                              )}
                            </div>
                          )}

                          {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                            <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-[#c6a35b]/20">
                              <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                🇺🇸 이메일 문의 섹션 - 영어 문구 (English Version)
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {renderField(
                                  "English Subtitle", 
                                  localData.contactInfo?.inquirySubtitleEn || 'EMAIL INQUIRY', 
                                  "contactInfo.inquirySubtitleEn"
                                )}
                                {renderField(
                                  "English Section Title", 
                                  localData.contactInfo?.inquiryTitleEn || 'Send an Email Inquiry', 
                                  "contactInfo.inquiryTitleEn"
                                )}
                              </div>
                              {renderField(
                                "English Description", 
                                localData.contactInfo?.inquiryDescEn || 'For real estate advisory, M&A transactions, or hospitality consignment inquiries, please submit the form or email us directly at info@xenians.co.kr.', 
                                "contactInfo.inquiryDescEn",
                                "textarea"
                              )}
                            </div>
                          )}
                      </div>

                      {/* 5. 문의 접수 완료 성공 메시지 문구 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <CheckCircle2 className="w-4 h-4" /> 5. 문의 접수 완료 안내 문구 (SUCCESS MESSAGE)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">폼 전송 완료 후 화면에 나타나는 문구</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                              <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-white/5">
                                <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                  🇰🇷 접수 완료 - 한국어 안내문
                                </div>
                                {renderField(
                                  "접수 완료 타이틀 (한국어)",
                                  localData.contactInfo?.successTitleKo || '문의가 성공적으로 접수되었습니다.',
                                  "contactInfo.successTitleKo"
                                )}
                                {renderField(
                                  "접수 완료 상세 안내 (한국어)",
                                  localData.contactInfo?.successDescKo || '기재해주신 이메일 주소로 담당 임원이 신속하고 면밀히 검토 후 연락드리겠습니다.',
                                  "contactInfo.successDescKo",
                                  "textarea"
                                )}
                              </div>
                            )}

                            {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                              <div className="space-y-4 bg-black/20 p-4 rounded-lg border border-[#c6a35b]/20">
                                <div className="font-bold text-xs text-[#c6a35b] flex items-center gap-1.5">
                                  🇺🇸 접수 완료 - 영어 안내문 (English)
                                </div>
                                {renderField(
                                  "Success Title (English)",
                                  localData.contactInfo?.successTitleEn || 'Your inquiry has been submitted.',
                                  "contactInfo.successTitleEn"
                                )}
                                {renderField(
                                  "Success Description (English)",
                                  localData.contactInfo?.successDescEn || 'Our specialist team will review your requirements and respond to your email within 24 business hours.',
                                  "contactInfo.successDescEn",
                                  "textarea"
                                )}
                              </div>
                            )}
                          </div>
                      </div>

                      {/* 6. 공통 이메일 및 업무 시간 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                               <Clock className="w-4 h-4" /> 6. 대표 이메일 및 업무 시간 (EMAIL & BUSINESS HOURS)
                            </h3>
                            <span className="text-[11px] text-white/40 font-mono">하단 정보</span>
                          </div>

                          {renderField(
                            "공식 대표 이메일 주소", 
                            localData.contactInfo?.email || 'info@xenians.co.kr', 
                            "contactInfo.email"
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'KO') && (
                              renderField(
                                "업무 시간 안내 (한국어)", 
                                localData.contactInfo?.hoursKo || '09:00 - 17:00(Mon - Fri)', 
                                "contactInfo.hoursKo"
                              )
                            )}
                            {(contactLangFilter === 'ALL' || contactLangFilter === 'EN') && (
                              renderField(
                                "Business Hours (English)", 
                                localData.contactInfo?.hoursEn || '09:00 - 17:00(Mon - Fri)', 
                                "contactInfo.hoursEn"
                              )
                            )}
                          </div>
                      </div>
                  </div>
              )}

              {/* 3. MENUS & PAGE HEADERS TAB (사용자 요청: 모든 메뉴의 문구들을 쉽게 변경) */}
              {activeTab === 'MENUS' && (
                  <div className="space-y-10">
                      {renderSectionHeader(
                        <Compass className="w-5 h-5" />, 
                        "모든 메뉴 & 헤더 문구 간편 관리", 
                        "홈페이지 상단 헤더 메뉴 5개(ABOUT, BUSINESS, PROJECTS, INSIGHTS, CONTACT)와 세부 사업부문 문구를 원하는 대로 쉽고 빠르게 변경합니다."
                      )}

                      {/* 1. 5대 주요 상단 내비게이션 메뉴 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <div>
                              <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider flex items-center gap-2">
                                <Compass className="w-4 h-4" /> 1. 사이트 상단 헤더 5대 메뉴 문구 설정
                              </h3>
                              <p className="text-xs text-white/50 font-sans mt-0.5">
                                변경하신 문구는 최상단 글로벌 헤더 및 모바일 내비게이션에 즉시 적용됩니다.
                              </p>
                            </div>
                            <span className="text-[10px] font-mono bg-[#c6a35b]/10 text-[#c6a35b] border border-[#c6a35b]/30 px-2.5 py-1 rounded">
                              실시간 전파 연동
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {/* Menu 1: ABOUT */}
                              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2 hover:border-[#c6a35b]/50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-white flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/10 text-white text-[10px] font-mono flex items-center justify-center">1</span>
                                    회사소개 메뉴
                                  </span>
                                  <span className="font-mono text-[10px] text-white/40">경로: /company</span>
                                </div>
                                <label className="text-[10px] font-mono text-white/50 uppercase block">메뉴 표시명 (기본: ABOUT)</label>
                                <input 
                                  className="w-full bg-white/[0.06] border border-white/15 px-3 py-2 rounded text-xs font-bold text-white outline-none focus:border-[#c6a35b]"
                                  value={getNavName('/company', 'ABOUT')}
                                  onChange={(e) => setNavName('/company', e.target.value)}
                                  placeholder="ABOUT"
                                />
                              </div>

                              {/* Menu 2: BUSINESS */}
                              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2 hover:border-[#c6a35b]/50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-white flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/10 text-white text-[10px] font-mono flex items-center justify-center">2</span>
                                    비즈니스 메뉴
                                  </span>
                                  <span className="font-mono text-[10px] text-white/40">경로: /business</span>
                                </div>
                                <label className="text-[10px] font-mono text-white/50 uppercase block">메뉴 표시명 (기본: BUSINESS)</label>
                                <input 
                                  className="w-full bg-white/[0.06] border border-white/15 px-3 py-2 rounded text-xs font-bold text-white outline-none focus:border-[#c6a35b]"
                                  value={getNavName('/business', 'BUSINESS')}
                                  onChange={(e) => setNavName('/business', e.target.value)}
                                  placeholder="BUSINESS"
                                />
                              </div>

                              {/* Menu 3: PROJECTS (핵심 사용자 요청) */}
                              <div className="bg-black/30 border border-[#c6a35b]/60 rounded-lg p-4 space-y-2 shadow-lg shadow-[#c6a35b]/5 md:col-span-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#c6a35b] flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-[#c6a35b] text-black text-[10px] font-mono font-bold flex items-center justify-center">3</span>
                                    ★ 프로젝트 메뉴 (핵심 관리 항목)
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-[10px] text-white/40">경로: /projects</span>
                                    <button
                                      onClick={() => setActiveTab('PROJECTS')}
                                      className="cursor-pointer text-[10px] font-mono bg-[#c6a35b] text-black px-2 py-0.5 rounded font-bold hover:bg-white transition-colors"
                                    >
                                      프로젝트 8개 제원 편집 탭으로 이동 →
                                    </button>
                                  </div>
                                </div>
                                <label className="text-[10px] font-mono text-[#c6a35b] uppercase block font-bold">
                                  프로젝트 메뉴 표시명 (기본: PROJECTS)
                                </label>
                                <input 
                                  className="w-full bg-white/[0.08] border border-[#c6a35b]/40 px-3.5 py-2.5 rounded text-sm font-bold text-white outline-none focus:border-[#c6a35b]"
                                  value={getNavName('/projects', 'PROJECTS')}
                                  onChange={(e) => setNavName('/projects', e.target.value)}
                                  placeholder="예: PROJECTS, 프로젝트 실적, 포트폴리오"
                                />
                                <p className="text-[11px] text-white/60">
                                  * 상단 메뉴바의 PROJECTS 글자가 위 입력값으로 즉시 변경됩니다.
                                </p>
                              </div>

                              {/* Menu 4: INSIGHTS */}
                              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2 hover:border-[#c6a35b]/50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-white flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/10 text-white text-[10px] font-mono flex items-center justify-center">4</span>
                                    인사이트 메뉴
                                  </span>
                                  <span className="font-mono text-[10px] text-white/40">경로: /insights</span>
                                </div>
                                <label className="text-[10px] font-mono text-white/50 uppercase block">메뉴 표시명 (기본: INSIGHTS)</label>
                                <input 
                                  className="w-full bg-white/[0.06] border border-white/15 px-3 py-2 rounded text-xs font-bold text-white outline-none focus:border-[#c6a35b]"
                                  value={getNavName('/insights', 'INSIGHTS')}
                                  onChange={(e) => setNavName('/insights', e.target.value)}
                                  placeholder="INSIGHTS"
                                />
                              </div>

                              {/* Menu 5: CONTACT */}
                              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-2 hover:border-[#c6a35b]/50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-white flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/10 text-white text-[10px] font-mono flex items-center justify-center">5</span>
                                    글로벌 오피스 / 문의 메뉴
                                  </span>
                                  <span className="font-mono text-[10px] text-white/40">경로: /contact</span>
                                </div>
                                <label className="text-[10px] font-mono text-white/50 uppercase block">메뉴 표시명 (기본: CONTACT)</label>
                                <input 
                                  className="w-full bg-white/[0.06] border border-white/15 px-3 py-2 rounded text-xs font-bold text-white outline-none focus:border-[#c6a35b]"
                                  value={getNavName('/contact', 'CONTACT')}
                                  onChange={(e) => setNavName('/contact', e.target.value)}
                                  placeholder="CONTACT"
                                />
                              </div>
                          </div>
                      </div>

                      {/* 2. 프로젝트 페이지 내부 배너 헤더 문구 (연계 설정) */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">
                             2. 프로젝트 페이지 내부 상단 배너 타이틀
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {renderField("프로젝트 페이지 대제목 (Title)", localData.trackRecordHeader?.title || "PROJECTS", "trackRecordHeader.title")}
                              {renderField("서브 타이틀 / 경로 (Subtitle)", localData.trackRecordHeader?.subtitle || "PORTFOLIO / TRACK RECORD", "trackRecordHeader.subtitle")}
                          </div>
                          {renderField("프로젝트 페이지 설명문 (Description)", localData.trackRecordHeader?.description || "제니안스 그룹이 주관 및 참여한 국내외 대표 랜드마크 복합개발, 매각자문, 리조트 및 골프클럽 위탁운영 포트폴리오입니다.", "trackRecordHeader.description", "textarea")}
                      </div>

                      {/* 3. Main Common Action Labels */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">
                             3. 주요 공통 라벨 및 버튼 문구
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {renderField("자세히 보기 (Explore)", localData.common.explore, "common.explore")}
                              {renderField("회사 소개 라벨 (About Xenians)", localData.common.aboutXenians, "common.aboutXenians")}
                              {renderField("자문 서비스 (Advisory Services)", localData.common.advisoryServices, "common.advisoryServices")}
                              {renderField("사업부문 보기 (Explore Division)", localData.common.exploreDivision, "common.exploreDivision")}
                              {renderField("가치 및 철학 (Values & Philosophy)", localData.common.valuesAndPhilosophy, "common.valuesAndPhilosophy")}
                              {renderField("전략적 파트너십 (Strategic Partnership)", localData.common.strategicPartnership, "common.strategicPartnership")}
                          </div>
                      </div>
                  </div>
              )}

              {/* 4. HOME TAB */}
              {activeTab === 'HOME' && (
                  <div className="space-y-10">
                      {renderSectionHeader(
                        <Home className="w-5 h-5" />, 
                        "홈 메인 페이지 문구 관리", 
                        "첫 화면 히어로 배너 및 OUR BUSINESS, PHILOSOPHY 섹션의 소개 문구를 편집합니다."
                      )}
                      
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">메인 히어로 (HERO)</h3>
                          {renderField("히어로 메인 타이틀", localData.hero.title, "hero.title")}
                          {renderField("히어로 서브 설명문", localData.hero.description, "hero.description", "textarea")}
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">OUR BUSINESS 소개 헤더</h3>
                          <div className="grid grid-cols-2 gap-6">
                              {renderField("소제목 (Subtitle)", localData.home.servicesHeader.subtitle, "home.servicesHeader.subtitle")}
                              {renderField("메인 제목 (Title)", localData.home.servicesHeader.title, "home.servicesHeader.title")}
                          </div>
                          {renderField("설명문", localData.home.servicesHeader.description, "home.servicesHeader.description", "textarea")}
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">기업 철학 (OUR PHILOSOPHY)</h3>
                          <div className="grid grid-cols-2 gap-6">
                              {renderField("철학 소제목", localData.home.philosophy.subtitle, "home.philosophy.subtitle")}
                              {renderField("철학 메인 제목", localData.home.philosophy.title, "home.philosophy.title")}
                          </div>
                          {renderField("철학 설명문", localData.home.philosophy.description, "home.philosophy.description", "textarea")}
                      </div>
                  </div>
              )}

              {/* 5. COMPANY TAB */}
              {activeTab === 'COMPANY' && (
                  <div className="space-y-10">
                      {renderSectionHeader(
                        <Building2 className="w-5 h-5" />, 
                        "회사 소개 (COMPANY) 문구 관리", 
                        "CEO 인사말, 핵심 가치, 기업 비전 문구를 편집합니다."
                      )}

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">CEO 메시지</h3>
                          <div className="grid grid-cols-2 gap-6">
                              {renderField("대표자 성함", localData.company.ceoMessage.name, "company.ceoMessage.name")}
                              {renderField("직함 (Role)", localData.company.ceoMessage.role, "company.ceoMessage.role")}
                          </div>
                          {renderField("CEO 인사말 전문 (한글)", localData.company.ceoMessage.ko, "company.ceoMessage.ko", "textarea")}
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">회사 소개 개요 (INTRO)</h3>
                          <div className="grid grid-cols-2 gap-6">
                              {renderField("소제목", localData.company.intro.subtitle, "company.intro.subtitle")}
                              {renderField("제목", localData.company.intro.title, "company.intro.title")}
                          </div>
                          {renderField("설명문", localData.company.intro.description, "company.intro.description", "textarea")}
                      </div>
                  </div>
              )}

              {/* 6. BUSINESS TAB */}
              {activeTab === 'BUSINESS' && (
                  <div className="space-y-10">
                      {renderSectionHeader(
                        <Briefcase className="w-5 h-5" />, 
                        "비즈니스 (BUSINESS) 부문 문구 관리", 
                        "M&A, 개발/PF, 분양 마케팅, 위탁 운영, 스마트 시설관리 5대 사업 영역의 소개 문구를 편집합니다."
                      )}

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">M&A 및 자문 (ADVISORY)</h3>
                          <div className="grid grid-cols-2 gap-6">
                              {renderField("소제목", localData.advisory.header.subtitle, "advisory.header.subtitle")}
                              {renderField("메인 제목", localData.advisory.header.title, "advisory.header.title")}
                          </div>
                          {renderField("설명문", localData.advisory.header.description, "advisory.header.description", "textarea")}
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">시행 기획 및 개발 (DEVELOPMENT)</h3>
                          <div className="grid grid-cols-2 gap-6">
                              {renderField("소제목", localData.pm.header.subtitle, "pm.header.subtitle")}
                              {renderField("메인 제목", localData.pm.header.title, "pm.header.title")}
                          </div>
                          {renderField("설명문", localData.pm.header.description, "pm.header.description", "textarea")}
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">위탁 운영 및 관리 (OPERATIONS)</h3>
                          <div className="grid grid-cols-2 gap-6">
                              {renderField("소제목", localData.operations.header.subtitle, "operations.header.subtitle")}
                              {renderField("메인 제목", localData.operations.header.title, "operations.header.title")}
                          </div>
                          {renderField("설명문", localData.operations.header.description, "operations.header.description", "textarea")}
                      </div>
                  </div>
              )}

              {/* 7. SYSTEM & FOOTER TAB */}
              {activeTab === 'SYSTEM' && (
                  <div className="space-y-10">
                      {renderSectionHeader(
                        <Settings className="w-5 h-5" />, 
                        "시스템 설정 & 푸터 관리", 
                        "테마 색상, 로고 이미지 경로 및 하단 푸터 카피라이트를 설정합니다."
                      )}

                      <div className="bg-[#c6a35b]/10 border border-[#c6a35b]/30 rounded-xl p-6 sm:p-8 space-y-6">
                          <div className="flex items-center gap-3">
                              <ShieldCheck className="w-6 h-6 text-[#c6a35b]" />
                              <div>
                                  <h3 className="text-base font-bold text-white font-mono tracking-wider">데이터 영구 보관 & 안전 백업 센터</h3>
                                  <p className="text-xs text-white/60 mt-1">
                                      수정하신 모든 프로젝트 문구와 컨택트 주소는 브라우저 영구 마스터 스토리지에 안전하게 저장됩니다.
                                  </p>
                              </div>
                          </div>

                          <div className="bg-black/30 p-4 rounded-lg border border-white/10 space-y-3 text-xs text-white/70">
                              <p className="font-semibold text-[#c6a35b]">💡 영구 보관 및 다른 기기 이전 안내</p>
                              <ul className="list-disc list-inside space-y-1 text-[11px] text-white/60">
                                  <li>수정한 프로젝트 및 컨택트 데이터는 어떤 업데이트나 브라우저 재접속 시에도 지워지지 않고 유지됩니다.</li>
                                  <li>ZIP 파일을 다운로드하여 새 도메인/새 컴퓨터에 배포하실 때는 아래 <strong>[현재 데이터 JSON 백업 다운로드]</strong>를 클릭해 파일을 보관해 두시면, 새 기기에서 <strong>[백업 복원]</strong> 버튼 하나로 1초 만에 모든 수정 내용을 그대로 복원하실 수 있습니다.</li>
                              </ul>
                          </div>

                          <div className="flex flex-wrap gap-3 pt-2">
                              <button
                                  type="button"
                                  onClick={handleExportJson}
                                  className="cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#c6a35b] text-black font-mono text-xs font-bold hover:bg-white transition-all shadow-lg"
                              >
                                  <Download className="w-4 h-4" /> 현재 데이터 JSON 백업 다운로드
                              </button>

                              <button
                                  type="button"
                                  onClick={() => fileInputRef.current?.click()}
                                  className="cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/20 border border-white/20 transition-all"
                              >
                                  <Upload className="w-4 h-4 text-[#c6a35b]" /> 백업 파일 업로드하여 복원
                              </button>

                              <button
                                  type="button"
                                  onClick={handleCopyJson}
                                  className="cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/5 text-white/80 font-mono text-xs hover:text-white border border-white/10 transition-all"
                              >
                                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                                  {copied ? '클립보드에 복사 완료!' : 'JSON 클립보드로 복사'}
                              </button>
                          </div>
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">푸터 정보</h3>
                          {renderField("푸터 소개 문구", localData.footer.description, "footer.description", "textarea")}
                          {renderField("카피라이트", localData.footer.copyright, "footer.copyright")}
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
                          <h3 className="text-base font-bold text-[#c6a35b] font-mono uppercase tracking-wider">로고 및 에셋</h3>
                          {renderField("로고 이미지 경로", localData.assets.logo, "assets.logo")}
                      </div>
                  </div>
              )}

           </div>
        </main>
      </div>
    </div>
  );
};
