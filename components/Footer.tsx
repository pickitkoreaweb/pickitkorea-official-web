import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h4 className="font-serif text-3xl mb-8 text-white">Let's build the future together.</h4>
            <p className="font-sans text-brand-muted mb-8 max-w-sm font-light text-sm">
              혁신에 대한 열망이 있으신가요? 뉴스레터를 구독하고 우리의 소식을 가장 먼저 받아보세요.
            </p>
            <div className="flex w-full max-w-sm border-b border-white/20 py-2 focus-within:border-brand-gold transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full outline-none placeholder-brand-muted/40 font-sans text-sm text-white"
              />
              <button className="text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-sm font-sans">
            <div>
              <h5 className="font-bold mb-6 text-white/50 uppercase tracking-widest text-xs">Sitemap</h5>
              <ul className="space-y-4 text-brand-muted font-light">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Vision</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Recruit</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-white/50 uppercase tracking-widest text-xs">Social</h5>
              <ul className="space-y-4 text-brand-muted font-light">
                <li><a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden mb-12 opacity-20">
           <h1 className="font-serif text-[15vw] leading-none text-white text-center tracking-tighter select-none">
             PICKIT
           </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30 border-t border-white/5 pt-8 font-light">
           <span>© 2024 Pickit-Korea Inc. All Rights Reserved.</span>
           <div className="space-x-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  );
};