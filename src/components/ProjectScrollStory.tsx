import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Maximize2, Briefcase } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export interface StoryProject {
  id: string;
  index: string;
  category: string;
  titleKo: string;
  titleEn: string;
  locationKo: string;
  locationEn: string;
  scaleKo: string;
  scaleEn: string;
  roleKo: string;
  roleEn: string;
  descriptionKo: string;
  descriptionEn: string;
  image: string;
  link: string;
}

interface ProjectScrollStoryProps {
  projects: StoryProject[];
}

const ProjectCard: React.FC<{
  project: StoryProject;
  index: number;
  total: number;
  progress: any;
  targetScale: number;
}> = ({ project, index, total, progress, targetScale }) => {
  const { lang } = useContent();
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate range for this card's scroll expansion and overlap
  const range = [index * (1 / total), (index + 1) * (1 / total)];
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(progress, range, [1, 1.08]);

  return (
    <div
      ref={cardRef}
      className="sticky top-28 md:top-32 flex items-center justify-center mb-16 md:mb-24"
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(10px + ${index * 18}px)`,
        }}
        className="w-full max-w-[1400px] bg-[#ffffff] border border-black/[0.08] hover:border-[#a18750]/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] min-h-[480px] sm:min-h-[540px] md:min-h-[580px] transition-colors"
      >
        {/* Left Specification Column */}
        <div className="p-8 sm:p-12 md:p-14 flex flex-col justify-between bg-[#ffffff] z-10">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] md:text-[12px] text-[#a18750] font-bold tracking-[0.25em] uppercase">
                {project.index} &nbsp;/&nbsp; {project.category}
              </span>
              <span className="px-3 py-1 bg-[#faf8f5] text-[#141413] border border-black/10 font-mono text-[10px] font-semibold rounded-full">
                LANDMARK
              </span>
            </div>

            <h3 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] text-[#141413] font-normal my-4 break-keep">
              {lang === 'ko' ? project.titleKo : project.titleEn}
            </h3>

            {/* Spec Table */}
            <div className="my-6 space-y-2.5 font-mono text-[11.5px] md:text-[12.5px] border-t border-b border-black/[0.08] py-4">
              <div className="grid grid-cols-[90px_1fr] items-center">
                <span className="text-[#888888]">Location</span>
                <span className="text-[#141413] font-medium">{lang === 'ko' ? project.locationKo : project.locationEn}</span>
              </div>
              <div className="grid grid-cols-[90px_1fr] items-center">
                <span className="text-[#888888]">Scale</span>
                <span className="text-[#a18750] font-bold">{lang === 'ko' ? project.scaleKo : project.scaleEn}</span>
              </div>
              <div className="grid grid-cols-[90px_1fr] items-center">
                <span className="text-[#888888]">Role</span>
                <span className="text-[#141413] font-medium break-keep">{lang === 'ko' ? project.roleKo : project.roleEn}</span>
              </div>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#555555] leading-[1.9] font-normal break-keep">
              {lang === 'ko' ? project.descriptionKo : project.descriptionEn}
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-black/[0.08] flex items-center justify-between">
            <Link
              to={project.link}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] font-bold tracking-[0.2em] text-[#141413] hover:text-[#a18750] uppercase transition-colors group"
            >
              <span>{lang === 'ko' ? '프로젝트 상세 정보' : 'VIEW CASE STUDY'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <span className="font-mono text-[11px] text-[#aaaaaa]">
              {index + 1} / {total}
            </span>
          </div>
        </div>

        {/* Right Grand Architectural Image with Zoom Effect */}
        <div className="relative h-[320px] sm:h-[400px] lg:h-full w-full overflow-hidden bg-[#141413]">
          <motion.img
            style={{ scale: imageScale }}
            src={project.image}
            alt={project.titleEn}
            className="w-full h-full object-cover transition-transform duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/og-image.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectScrollStory: React.FC<ProjectScrollStoryProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.03;
        return (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};
