import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TextSection } from './components/TextSection';
import { GridSection } from './components/GridSection';
import { PressSection } from './components/PressSection';
import { Footer } from './components/Footer';
import { VisionPage, CEOPage, ManufacturingPage, ServicePage, DevelopmentPage, RecruitPage } from './components/SubPages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Basic browser title update
    document.title = `PICKIT-KOREA | ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`;
  }, [currentPage]);

  // Render content based on current page state
  const renderContent = () => {
    switch(currentPage) {
      case 'vision':
        return <VisionPage />;
      case 'ceo':
        return <CEOPage />;
      case 'manufacturing':
        return <ManufacturingPage />;
      case 'service':
        return <ServicePage />;
      case 'development':
        return <DevelopmentPage />;
      case 'recruit':
        return <RecruitPage />;
      case 'contact':
        return (
            <div className="pt-32 pb-20 bg-brand-bg min-h-screen">
                <h1 className="text-center text-5xl font-serif text-white">Contact Us</h1>
                <p className="text-center text-brand-muted mt-4">Seoul, Republic of Korea</p>
            </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <TextSection />
            
            {/* Divider Image */}
            <div className="w-full h-[60vh] overflow-hidden relative border-y border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Technology Divider" 
                className="w-full h-full object-cover fixed top-0 left-0 -z-10 opacity-20 grayscale brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                  <p className="text-white font-serif text-2xl md:text-5xl italic text-center px-4 leading-normal tracking-wide">
                    "The future is not just about speed, <br/> but about <span className="text-brand-gold">precision.</span>"
                  </p>
              </div>
            </div>

            <GridSection />
            <PressSection />
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-bg text-brand-text selection:bg-brand-gold selection:text-black">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="fade-enter-active">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;