import React from 'react';
import { ExternalLink } from 'lucide-react';

// Common header for subpages
const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="pt-40 pb-20 px-6 md:px-12 bg-brand-bg border-b border-white/5">
    <div className="container mx-auto">
      <span className="block text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 font-sans">{subtitle}</span>
      <h1 className="text-5xl md:text-7xl font-serif text-brand-text">{title}</h1>
    </div>
  </div>
);

export const VisionPage: React.FC = () => (
  <div className="min-h-screen bg-brand-bg">
    <PageHeader title="경영비전" subtitle="Our Vision" />
    <div className="container mx-auto px-6 md:px-12 py-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="font-serif text-3xl md:text-4xl leading-tight text-white/90">
          "기술을 넘어, <br/> <span className="italic text-brand-gold">가치를 연결합니다.</span>"
        </div>
        <div className="space-y-8 text-brand-muted font-sans font-light leading-relaxed">
          <p>
            픽킷코리아는 단순한 물류 시스템을 넘어, 사람과 사람, 기업과 기업을 잇는 가교 역할을 수행합니다.
            우리의 비전은 끊임없는 혁신을 통해 지속 가능한 미래를 설계하는 것입니다.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-white text-lg font-serif mb-2">Innovation</h3>
              <p className="text-xs">최첨단 자동화 기술 도입</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-serif mb-2">Sustainability</h3>
              <p className="text-xs">친환경 물류 프로세스 구축</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CEOPage: React.FC = () => (
  <div className="min-h-screen bg-brand-bg">
    <PageHeader title="CEO 인사말" subtitle="Leadership" />
    <div className="container mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row gap-12 items-start">
      <div className="w-full md:w-1/3 aspect-[3/4] bg-white/5 grayscale relative overflow-hidden">
        {/* Placeholder for CEO Image */}
        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif italic text-2xl">
           CEO Portrait
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-serif text-brand-gold mb-8">안녕하십니까, 픽킷코리아 대표이사입니다.</h2>
        <div className="space-y-6 text-brand-text/80 font-sans font-light leading-loose text-sm md:text-base">
          <p>
            급변하는 글로벌 시장 환경 속에서 물류는 더 이상 단순한 운송 수단이 아닙니다. 
            그것은 비즈니스의 성공을 결정짓는 핵심 경쟁력이 되었습니다.
          </p>
          <p>
            저희 픽킷코리아는 고객 여러분의 성공 파트너로서, 차별화된 기술력과 깊이 있는 통찰력을 바탕으로 
            최적의 솔루션을 제공하기 위해 끊임없이 노력하고 있습니다.
          </p>
          <p>
            앞으로도 기본과 원칙을 지키며, 고객과 사회로부터 신뢰받는 기업이 되겠습니다.
          </p>
          <div className="pt-12 mt-12 border-t border-white/10">
            <p className="font-serif text-xl italic text-right">Representative Director</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ManufacturingPage: React.FC = () => (
  <div className="min-h-screen bg-brand-bg">
    <PageHeader title="제조 부문" subtitle="Premium Manufacturing" />
    <div className="container mx-auto px-6 md:px-12 py-24">
       
       {/* Introduction */}
       <div className="mb-24 max-w-4xl">
         <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
           <span className="text-brand-gold">STS304</span>로 완성하는<br/>
           프리미엄 메탈 솔루션
         </h2>
         <p className="text-brand-muted text-sm md:text-base leading-relaxed font-light mb-10">
           픽킷코리아는 최고급 스테인리스 스틸 STS304를 사용하여 내구성과 위생, 미적 가치를 모두 충족하는 정밀 가공품을 생산합니다.
           반도체 장비, 정밀 의료기기, 그리고 프리미엄 인테리어 자재까지, 타협하지 않는 품질로 고객의 요구를 실현합니다.
         </p>
         
         <a 
           href="https://pickit-korea.com" 
           target="_blank" 
           rel="noopener noreferrer"
           className="inline-flex items-center px-8 py-4 border border-brand-gold text-brand-gold text-xs tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-black transition-all duration-300"
         >
           Visit Manufacturing Site <ExternalLink size={16} className="ml-2" />
         </a>
       </div>

       {/* Grid Images */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=800" alt="Metal Work" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale"/>
            </div>
            <h3 className="text-xl font-serif text-white mb-2">High Precision</h3>
            <p className="text-xs text-brand-muted">Micro-tolerance machining</p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1565620610-85f269a9b233?auto=format&fit=crop&q=80&w=800" alt="STS304 Material" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale"/>
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Premium Materials</h3>
            <p className="text-xs text-brand-muted">Certified STS304 Stainless Steel</p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 mb-6 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" alt="Laser Cutting" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale"/>
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Advanced Processing</h3>
            <p className="text-xs text-brand-muted">Laser cutting & Welding</p>
          </div>
       </div>
    </div>
  </div>
);

export const ServicePage: React.FC = () => (
  <div className="min-h-screen bg-brand-bg">
    <PageHeader title="서비스 부문" subtitle="Consulting & Marketing" />
    <div className="container mx-auto px-6 md:px-12 py-24">
       <div className="max-w-4xl mb-20">
         <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
           비즈니스 마케팅 및 <br/> 전략 컨설팅
         </h2>
         <p className="text-brand-muted leading-relaxed font-light">
           성공적인 비즈니스를 위해서는 정확한 시장 분석과 차별화된 전략이 필요합니다.
           픽킷코리아는 기업의 잠재력을 극대화하는 맞춤형 마케팅 솔루션과 경영 컨설팅을 제공하여
           지속 가능한 성장을 돕습니다.
         </p>
       </div>

       <ul className="border-t border-white/10">
         {[
           { title: 'Business Strategy', desc: '기업의 중장기 성장 로드맵 수립 및 비즈니스 모델 고도화' },
           { title: 'Brand Marketing', desc: '브랜드 아이덴티티 구축 및 온/오프라인 통합 마케팅 실행' },
           { title: 'Market Analysis', desc: '빅데이터 기반 시장 트렌드 분석 및 경쟁사 리서치' },
           { title: 'Digital Transformation', desc: '전통적 비즈니스의 디지털 전환 가속화 지원' }
         ].map((service, idx) => (
           <li key={idx} className="flex flex-col md:flex-row justify-between md:items-center py-12 border-b border-white/10 hover:bg-white/5 transition-colors px-4 group cursor-pointer">
             <div className="mb-4 md:mb-0">
               <span className="block text-brand-gold text-xs tracking-widest uppercase mb-2">0{idx + 1}</span>
               <span className="font-serif text-2xl md:text-3xl text-white group-hover:translate-x-2 transition-transform duration-500 block">{service.title}</span>
             </div>
             <div className="md:w-1/2 flex justify-between items-center">
               <span className="text-sm text-brand-muted font-light">{service.desc}</span>
               <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity ml-4">&rarr;</span>
             </div>
           </li>
         ))}
       </ul>
    </div>
  </div>
);

export const DevelopmentPage: React.FC = () => (
  <div className="min-h-screen bg-brand-bg">
    <PageHeader title="개발사업 부문" subtitle="R&D & Development" />
    <div className="container mx-auto px-6 md:px-12 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
           <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
             Innovation through <br/> <span className="text-brand-gold">Code & Tech.</span>
           </h2>
           <p className="text-brand-muted leading-relaxed font-light mb-12">
             디지털 환경에 최적화된 웹/앱 플랫폼 개발부터 스마트 팩토리 솔루션까지,
             기술이 비즈니스에 실질적인 가치를 더할 수 있도록 연구하고 개발합니다.
           </p>
           
           <div className="space-y-6">
              <div className="p-6 border border-white/10 hover:border-brand-gold/50 transition-colors">
                 <h4 className="text-xl font-serif text-white mb-2">SI / SM</h4>
                 <p className="text-xs text-brand-muted">시스템 통합 및 유지보수, 기업 맞춤형 인트라넷 구축</p>
              </div>
              <div className="p-6 border border-white/10 hover:border-brand-gold/50 transition-colors">
                 <h4 className="text-xl font-serif text-white mb-2">Smart Factory</h4>
                 <p className="text-xs text-brand-muted">IoT 기반 제조 공정 자동화 및 모니터링 시스템</p>
              </div>
              <div className="p-6 border border-white/10 hover:border-brand-gold/50 transition-colors">
                 <h4 className="text-xl font-serif text-white mb-2">Platform Development</h4>
                 <p className="text-xs text-brand-muted">O2O 플랫폼, 이커머스 솔루션, 모바일 애플리케이션</p>
              </div>
           </div>
        </div>
        
        <div className="md:w-1/2 relative min-h-[400px]">
           <img 
             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
             alt="Development Code" 
             className="w-full h-full object-cover grayscale opacity-30 absolute inset-0"
           />
           <div className="absolute bottom-8 left-8 p-6 bg-brand-bg/90 backdrop-blur border-l-2 border-brand-gold">
              <span className="text-brand-gold text-xs tracking-widest uppercase block mb-2">Tech Stack</span>
              <p className="text-white font-serif text-lg">React, Node.js, Python, AWS Cloud</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export const RecruitPage: React.FC = () => (
  <div className="min-h-screen bg-brand-bg flex items-center justify-center">
    <div className="text-center px-6">
       <span className="text-brand-gold text-xs tracking-widest uppercase mb-4 block">Careers</span>
       <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Join the Movement</h1>
       <p className="text-brand-muted max-w-md mx-auto mb-12 font-sans font-light">
         우리는 열정적이고 창의적인 인재를 기다립니다. <br/>
         세상을 바꾸는 혁신, 픽킷코리아에서 시작하세요.
       </p>
       <button className="px-10 py-4 border border-white text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-brand-bg transition-colors">
         View Open Positions
       </button>
    </div>
  </div>
);