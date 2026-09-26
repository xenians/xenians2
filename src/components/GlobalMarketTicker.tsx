import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface MarketData {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const INITIAL_DATA: MarketData[] = [
  { symbol: "USD/KRW", price: "1350.20", change: "+0.12%", isPositive: true },
  { symbol: "USD/JPY", price: "155.45", change: "-0.25%", isPositive: false },
  { symbol: "GBP/USD", price: "1.2840", change: "+0.05%", isPositive: true },
  { symbol: "EUR/USD", price: "1.0820", change: "+0.10%", isPositive: true },
  { symbol: "SGD/USD", price: "0.7420", change: "-0.08%", isPositive: false },
  { symbol: "KOSPI", price: "2,560.20", change: "+0.12%", isPositive: true },
  { symbol: "KOSDAQ", price: "840.40", change: "-0.45%", isPositive: false },
  { symbol: "S&P 500", price: "5,300.10", change: "+0.65%", isPositive: true },
  { symbol: "NASDAQ", price: "18,230.40", change: "+0.80%", isPositive: true },
  { symbol: "DOW JONES", price: "39,120.30", change: "-0.15%", isPositive: false },
  { symbol: "FTSE 100", price: "7,950.50", change: "+0.20%", isPositive: true },
  { symbol: "NIKKEI 225", price: "38,400.00", change: "-0.50%", isPositive: false },
  { symbol: "HANG SENG", price: "19,200.00", change: "+1.10%", isPositive: true },
  { symbol: "STI SINGAPORE", price: "3,300.15", change: "-0.05%", isPositive: false },
  { symbol: "BTC/USD", price: "68,450.00", change: "+1.50%", isPositive: true },
  { symbol: "ETH/USD", price: "3,750.20", change: "+0.90%", isPositive: true },
];

export const GlobalMarketTicker: React.FC = () => {
  const [data, setData] = useState<MarketData[]>(INITIAL_DATA);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(item => ({
        ...item,
        price: (parseFloat(item.price.replace(/,/g, '')) + (Math.random() - 0.5) * 5).toFixed(2),
        change: ((Math.random() - 0.5) * 2).toFixed(2) + "%",
        isPositive: Math.random() > 0.5
      })));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050505] border-y border-white/10 py-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

      <motion.div 
        className="flex gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {[...data, ...data].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-3 font-mono text-xs whitespace-nowrap p-3 rounded-md hover:bg-white/10 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white/70 font-bold uppercase tracking-wider">{item.symbol}</span>
              <span className="text-white">{item.price}</span>
              <span className={cn(
                "font-bold",
                item.isPositive ? "text-emerald-400" : "text-rose-400"
              )}>
                {item.isPositive ? '▲' : '▼'} {item.change}
              </span>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};
