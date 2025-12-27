
import React, { useState } from 'react';

const FEATURES = [
  {
    id: '01',
    title: 'Workforce Optimization Suite',
    description: 'Our suite provides real-time analytics and resource allocation tools to ensure your team is performing at its peak efficiency while maintaining a healthy work-life balance.'
  },
  {
    id: '02',
    title: 'Compliance & Risk Management System',
    description: 'Automated compliance tracking and risk assessment modules that keep your business protected against evolving legal frameworks and operational hazards.'
  },
  {
    id: '03',
    title: 'Employee Engagement Toolkit',
    description: 'Designed to streamline the recruitment process, this solution offers features such as applicant tracking, resume parsing, and candidate evaluation tools.'
  },
  {
    id: '04',
    title: 'Talent Acquisition Platform',
    description: 'A comprehensive platform for finding and nurturing top-tier talent, featuring automated job posting, AI-driven screening, and seamless onboarding flows.'
  }
];

const FeatureSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Default to item 03 (index 2) as in image

  return (
    <section className={`section-py transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Side: Image with Decorative Backdrop */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              {/* Decorative Backdrop */}
              <div className="absolute inset-0 bg-[#ffd8b8] rounded-[3rem] transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8"></div>
              
              {/* Main Image */}
              <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Business Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content & Accordion */}
          <div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Discover the Power of HR <br /> Management SaaS
            </h2>
            
            <p className={`text-lg mb-12 max-w-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Our product is designed to help you streamline HR processes and empower your team. Here are some of the key features:
            </p>

            <div className="space-y-0">
              {FEATURES.map((feature, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={feature.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group border-t border-slate-200 dark:border-white/10 transition-all duration-500 cursor-pointer overflow-hidden ${
                      isActive ? (isDark ? 'bg-white/5 border-transparent' : 'bg-slate-50 border-transparent') : 'hover:bg-slate-50/50 dark:hover:bg-white/5'
                    } ${idx === FEATURES.length - 1 ? 'border-b' : ''}`}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-6">
                        <span className={`text-sm font-bold transition-colors ${isActive ? 'text-indigo-500' : 'text-slate-400'}`}>
                          {feature.id}.
                        </span>
                        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                          isActive ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-slate-300' : 'text-slate-700')
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                      
                      {/* Expanded Content */}
                      <div className={`transition-all duration-500 ease-in-out ${
                        isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                      }`}>
                        <p className={`pl-12 text-base leading-relaxed max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
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
