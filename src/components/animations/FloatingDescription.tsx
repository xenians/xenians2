import React from 'react';
import { cn } from '../../lib/utils';
import { useContent } from '../../context/ContentContext';

interface FloatingDescriptionProps {
  ko?: string;
  en?: string;
  className?: string;
}

export const FloatingDescription: React.FC<FloatingDescriptionProps> = ({ ko, en, className }) => {
  const { lang } = useContent();
  
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {lang === 'ko' ? (
        <>
          {ko && (
            <p className="text-[15px] md:text-[17px] font-noto font-normal leading-[1.8] break-keep tracking-tight">
              {ko}
            </p>
          )}
          {en && (
            <p className="text-[12px] text-secondary font-medium italic leading-relaxed uppercase tracking-[0.2em] opacity-60">
              {en}
            </p>
          )}
        </>
      ) : (
        <p className="text-[15px] md:text-[17px] font-noto font-normal leading-[1.8] break-keep tracking-tight">
          {en || ko}
        </p>
      )}
    </div>
  );
};
