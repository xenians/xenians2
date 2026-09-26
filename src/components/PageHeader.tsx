import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  imageSrc: string;
  imageAlt?: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumb,
  imageSrc,
  imageAlt = 'Header Architecture',
  subtitle,
}) => {
  return (
    <section className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[440px] flex flex-col justify-end pt-36 pb-16 sm:pb-20 px-6 md:px-[6vw] bg-[#141413] text-white border-b border-black/20 overflow-hidden">
      {/* Full Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center brightness-[0.55] contrast-[1.05] scale-105 transition-transform duration-1000"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/hero-seoul-skyline.jpg';
          }}
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/40 to-black/60" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-transparent via-[#141413]/30 to-[#141413]/80" />
      </div>

      {/* Main Content Overlaid on Background */}
      <div className="max-w-[1500px] mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/70 font-mono text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-4">
            <Link to="/" className="hover:text-[#c6a35b] transition-colors">
              HOME
            </Link>
            <span className="text-[#c6a35b]/60">/</span>
            <span className="text-[#c6a35b] font-bold">{breadcrumb}</span>
          </div>

          {/* Title with Slow Color Shift Animation */}
          <h1 className="font-serif text-[38px] sm:text-[50px] md:text-[60px] lg:text-[68px] tracking-tight uppercase font-light leading-[1.08] mb-3 drop-shadow-md animate-slow-color-shift">
            {title}
          </h1>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="font-mono text-[11.5px] sm:text-[13px] tracking-[0.25em] text-[#e2d8c3] uppercase font-medium mt-3">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

