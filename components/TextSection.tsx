import React from 'react';

export const TextSection: React.FC = () => {
  return (
    <section id="mission" className="py-24 md:py-40 bg-brand-bg relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-text leading-[1.1] mb-16">
            Inspired by <br/>
            <span className="italic text-brand-gold">Nature's Intelligence,</span> <br/>
            Engineered for Perfection.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            <div className="pt-8 border-t border-white/20">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold mb-6">Core Philosophy</p>
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug">
                한계 없는 혁신. <br/>
                기존의 틀을 깨고 새로운 가치를 창출하는 것.
              </p>
            </div>
            
            <div className="flex flex-col justify-end">
              <p className="font-sans text-brand-muted leading-loose font-light mb-8 text-sm md:text-base">
                우리는 자연의 효율적인 시스템에서 영감을 받아 최첨단 알고리즘을 구축합니다. 
                복잡한 물류 네트워크를 유기체처럼 연결하여 에너지 소비를 최소화하고 효율을 극대화합니다.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase border-b border-brand-gold pb-2 self-start text-brand-gold hover:text-white hover:border-white transition-colors">
                Read More Philosophy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};