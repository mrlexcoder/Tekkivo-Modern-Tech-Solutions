
import React, { useState } from 'react';

const FEATURES = [
  {
    id: '01',
    title: 'Workforce Optimization Suite',
    description: 'Real-time analytics and dynamic resource allocation tools engineered to maintain peak organizational efficiency with zero burnout.'
  },
  {
    id: '02',
    title: 'Global Compliance System',
    description: 'Automated legal-tech tracking that keeps your cross-border operations protected against evolving regulatory frameworks.'
  },
  {
    id: '03',
    title: 'Talent Engagement Toolkit',
    description: 'Designed to humanize the recruitment experience, featuring advanced applicant tracking and sentiment-aware evaluation tools.'
  },
  {
    id: '04',
    title: 'Precision Acquisition Platform',
    description: 'A data-driven marketplace for finding and nurturing top-tier talent through AI-driven screening and seamless onboarding.'
  }
];

const FeatureSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className={`section-py transition-colors duration-700 ${isDark ? 'bg-slate-950' : 'bg-slate-50/50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Interactive Visual Piece */}
          <div className="relative group">
            <div className="relative w-full max-w-[500px] aspect-[4/5] mx-auto lg:mx-0">
              {/* Floating Shadow Backdrop */}
              <div className="absolute inset-0 bg-[#e7dfd8] dark:bg-[#2c2c2c] rounded-[4rem] translate-x-6 translate-y-6 lg:translate-x-12 lg:translate-y-12 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              <div className="relative z-10 w-full h-full rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800" 
                  alt="Business Strategic Planning" 
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Float Widget */}
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl shadow-2xl z-20 animate-bounce transition-all" style={{ animationDuration: '4s' }}>
                <div className="text-indigo-500 font-black text-2xl mb-1">92%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Efficiency Lift</div>
              </div>
            </div>
          </div>

          {/* Right: Feature Content */}
          <div className="flex flex-col justify-center">
            <h2 className={`text-5xl md:text-6xl font-black mb-8 leading-[1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Engineering the <br /> <span className="text-slate-400">Future of HR.</span>
            </h2>
            
            <p className={`text-xl mb-12 max-w-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'} font-light`}>
              We provide the architectural foundation for modern Human Resource Management systems, optimized for enterprise scale.
            </p>

            <div className="space-y-2">
              {FEATURES.map((feature, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={feature.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group transition-all duration-500 cursor-pointer rounded-2xl overflow-hidden ${
                      isActive ? (isDark ? 'bg-white/5 shadow-xl' : 'bg-white shadow-xl') : 'hover:bg-slate-100/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-6">
                        <span className={`text-sm font-black transition-colors ${isActive ? 'text-indigo-500' : 'text-slate-400'}`}>
                          {feature.id}
                        </span>
                        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                          isActive ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-slate-400' : 'text-slate-500')
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                      
                      <div className={`transition-all duration-500 ease-in-out ${
                        isActive ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                      }`}>
                        <p className={`pl-12 text-lg leading-relaxed max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-500'} font-light`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
