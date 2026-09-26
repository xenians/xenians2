import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

// Marquee effect
export const Marquee: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div className={cn("marquee border-y border-white/10 py-4", className)}>
      <div className="marquee-content">
        {children}
        {children}
      </div>
    </div>
  );
};

// Text Ticker (Vertical rolling)
export const TextTicker: React.FC<{ items: string[]; className?: string }> = ({ items, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Increased from 3000 to 5000 ms
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className={cn("h-8 overflow-hidden relative", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center font-serif italic text-secondary"
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Typing Effect
export const TypingText: React.FC<{ text: string; className?: string; delay?: number; showPulse?: boolean }> = ({ text, className, delay = 0, showPulse = false }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showPulse && <span className="animate-pulse text-secondary">|</span>}
    </span>
  );
};

// Vertical Marquee for smooth continuous vertical scrolling
export const VerticalMarquee: React.FC<{ children: React.ReactNode; className?: string; speed?: number }> = ({ children, className, speed = 40 }) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        animate={{ y: [0, "-50%"] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

// Gradient Text Animation
export const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <span className={cn(
      "bg-gradient-to-r from-secondary via-[#FFF9C4] to-[#B8860B] bg-clip-text text-transparent animate-gradient-text",
      className
    )}>
      {children}
    </span>
  );
};
