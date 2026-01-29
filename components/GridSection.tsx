import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
];

export const GridSection: React.FC = () => {
  return (
    <section id="innovation" className="py-24 bg-[#121212] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
           <h3 className="font-serif text-5xl md:text-6xl text-white">
             Real impact, <br/>
             <span className="italic text-brand-gold">real value.</span>
           </h3>
           <p className="mt-8 md:mt-0 font-sans text-xs md:text-sm max-w-xs text-right text-brand-muted font-light leading-relaxed">
             모든 솔루션은 정밀하게 설계됩니다.<br/>
             단지 다른 방식으로 만들어질 뿐입니다.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Item 1 - Large vertical */}
          <div className="md:col-span-5 flex flex-col space-y-6 mt-12 md:mt-0">
             <div className="overflow-hidden relative group border border-white/5">
                <img 
                  src={images[0]} 
                  alt="Sustainable Process" 
                  className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
             <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">01. Automation</span>
                <h4 className="font-serif text-3xl text-white">Smart Warehousing</h4>
             </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Item 2 & 3 - Column */}
          <div className="md:col-span-6 flex flex-col space-y-20">
            
            <div className="flex flex-col space-y-6 md:pl-12">
               <div className="overflow-hidden relative group border border-white/5">
                  <img 
                    src={images[1]} 
                    alt="Data Analytics" 
                    className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
               </div>
               <div>
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">02. Intelligence</span>
                 <h4 className="font-serif text-3xl text-white mb-2">Predictive Analytics</h4>
                 <p className="text-xs text-brand-muted font-sans font-light leading-relaxed max-w-sm">
                   데이터가 이끄는 의사결정. 불확실한 미래를 예측 가능한 현실로 만듭니다.
                 </p>
               </div>
            </div>

            <div className="flex flex-col space-y-6 md:pr-24">
               <div className="overflow-hidden relative group border border-white/5">
                  <img 
                    src={images[2]} 
                    alt="Global Network" 
                    className="w-full h-[350px] object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
               </div>
               <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">03. Network</span>
                  <h4 className="font-serif text-3xl text-white">Global Connection</h4>
               </div>
            </div>

          </div>
        </div>
        
        <div className="mt-32 text-center">
             <button className="px-10 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-black transition-colors duration-300">
               View All Solutions
             </button>
        </div>

      </div>
    </section>
  );
};