import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-brand-bg flex flex-col">
      
      {/* 3D Model Area - Top 75-80% */}
      <div className="relative w-full h-[75vh] md:h-[80vh] overflow-hidden bg-[#151515]">
        <iframe 
          src='https://my.spline.design/claritystream-KuyiSO4CUQ0prcCFrWZKLoWT/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full pointer-events-auto opacity-90 hover:opacity-100 transition-opacity duration-700"
          title="Spline 3D Scene"
        ></iframe>
        
        {/* Subtle overlay gradient to blend bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none"></div>
      </div>

      {/* Text Content Area - Distinctly Separate Below */}
      <div className="flex-1 w-full bg-brand-bg relative z-10 flex flex-col justify-center items-center px-6 -mt-12 md:-mt-20">
        <div className="text-center">
            <span className="block text-brand-gold/80 text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase mb-4 animate-fade-in">
              The Future of Logistics
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-text tracking-wide mb-6 animate-slide-up leading-none">
              BE SPECIAL, <span className="italic text-brand-gold">BE PREMIUM</span>
            </h1>
            <p className="max-w-lg mx-auto text-brand-muted font-sans text-xs md:text-sm font-light leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              최고의 기술력과 품격있는 서비스로 물류의 새로운 기준을 정립합니다.<br className="hidden md:block"/>
              픽킷코리아가 제안하는 프리미엄 솔루션을 경험하세요.
            </p>
        </div>
      </div>

      {/* Floating Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-brand-gold/50">
        <ChevronDown size={20} />
      </div>
    </div>
  );
};