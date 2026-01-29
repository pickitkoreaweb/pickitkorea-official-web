import React from 'react';

export const PressSection: React.FC = () => {
  return (
    <section className="py-32 bg-brand-bg text-center border-t border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="font-serif text-3xl md:text-4xl mb-20 text-white">Trusted by Leaders</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 text-brand-muted opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="font-serif text-3xl font-bold italic tracking-tighter">VOGUE</div>
          <div className="font-sans text-2xl font-black tracking-widest uppercase">WIRED</div>
          <div className="font-serif text-3xl font-bold">Forbes</div>
          <div className="font-sans text-2xl font-bold tracking-tight">Bloomberg</div>
          <div className="font-serif text-2xl italic">The New York Times</div>
        </div>
      </div>
    </section>
  );
};