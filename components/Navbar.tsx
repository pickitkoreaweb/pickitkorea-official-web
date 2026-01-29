import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        isScrolled ? 'py-4 bg-brand-bg/95 backdrop-blur-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-brand-text z-50 hover:text-brand-gold transition-colors"
        >
          PICKIT-KOREA
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          
          {/* 회사 소개 Dropdown */}
          <div 
            className="relative group h-full py-2"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-xs font-sans font-medium tracking-[0.2em] uppercase hover:text-brand-gold transition-colors">
              회사 소개
              <ChevronDown size={12} className="ml-1 opacity-70" />
            </button>
            <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-brand-surface border border-white/10 shadow-2xl transition-all duration-300 transform origin-top ${activeDropdown === 'company' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
              <button onClick={() => handleNavClick('vision')} className="block w-full text-left px-6 py-4 text-xs tracking-widest hover:bg-white/5 hover:text-brand-gold border-b border-white/5">
                경영비전
              </button>
              <button onClick={() => handleNavClick('ceo')} className="block w-full text-left px-6 py-4 text-xs tracking-widest hover:bg-white/5 hover:text-brand-gold">
                CEO 인사말
              </button>
            </div>
          </div>

          {/* 사업 영역 Dropdown */}
          <div 
            className="relative group h-full py-2"
            onMouseEnter={() => setActiveDropdown('business')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-xs font-sans font-medium tracking-[0.2em] uppercase hover:text-brand-gold transition-colors">
              사업 영역
              <ChevronDown size={12} className="ml-1 opacity-70" />
            </button>
            <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-brand-surface border border-white/10 shadow-2xl transition-all duration-300 transform origin-top ${activeDropdown === 'business' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
              <button onClick={() => handleNavClick('manufacturing')} className="block w-full text-left px-6 py-4 text-xs tracking-widest hover:bg-white/5 hover:text-brand-gold border-b border-white/5">
                제조 부문
              </button>
              <button onClick={() => handleNavClick('service')} className="block w-full text-left px-6 py-4 text-xs tracking-widest hover:bg-white/5 hover:text-brand-gold border-b border-white/5">
                서비스 부문
              </button>
              <button onClick={() => handleNavClick('development')} className="block w-full text-left px-6 py-4 text-xs tracking-widest hover:bg-white/5 hover:text-brand-gold">
                개발사업 부문
              </button>
            </div>
          </div>

          {/* 인재채용 */}
          <button 
            onClick={() => handleNavClick('recruit')}
            className="text-xs font-sans font-medium tracking-[0.2em] uppercase hover:text-brand-gold transition-colors"
          >
            인재채용
          </button>

          {/* Contact */}
           <button 
            onClick={() => handleNavClick('contact')}
            className="px-6 py-2 border border-white/20 text-xs font-sans font-medium tracking-[0.2em] uppercase hover:border-brand-gold hover:text-brand-gold transition-all"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-bg z-40 flex flex-col pt-32 px-12 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
           <div className="flex flex-col space-y-8">
              <div>
                <span className="text-brand-gold text-xs tracking-widest uppercase mb-4 block">Company</span>
                <button onClick={() => handleNavClick('vision')} className="block text-2xl font-serif mb-2">경영비전</button>
                <button onClick={() => handleNavClick('ceo')} className="block text-2xl font-serif">CEO 인사말</button>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <span className="text-brand-gold text-xs tracking-widest uppercase mb-4 block">Business</span>
                <button onClick={() => handleNavClick('manufacturing')} className="block text-2xl font-serif mb-2">제조 부문</button>
                <button onClick={() => handleNavClick('service')} className="block text-2xl font-serif mb-2">서비스 부문</button>
                <button onClick={() => handleNavClick('development')} className="block text-2xl font-serif">개발사업 부문</button>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <button onClick={() => handleNavClick('recruit')} className="text-left text-2xl font-serif">인재채용</button>
           </div>
        </div>
      </div>
    </nav>
  );
};