
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden transition-colors duration-500 bg-[var(--hero-bg)]">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1]" 
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content - Fluid Typography */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-6 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Newly Released
            </div>
            
            <h1 className="font-mono-bold text-hero-clamp mb-8 text-slate-900 dark:text-white">
              Premium Web & <br /> 
              Mobile Templates <br />
              <span className="text-indigo-600 dark:text-indigo-400">for Startups</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
              Over 25,000 businesses worldwide chose our <span className="text-indigo-600 border-b-2 border-indigo-200">Vue</span>, <span className="text-blue-500 border-b-2 border-blue-200">Angular</span>, <span className="text-sky-500 border-b-2 border-sky-200">React</span> and <span className="text-indigo-800 border-b-2 border-indigo-200">React Native</span> templates to build their platforms faster.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <a href="#ai-consultant" className="group flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20">
                Try Tekkivo AI Assistant
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                All templates <span className="text-indigo-600 dark:text-white underline underline-offset-4">ARE PREMIUM</span> now!
              </span>
            </div>
          </div>

          {/* Right Content - Full Animated Geometric Playground */}
          <div className="lg:col-span-5 xl:col-span-4 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] group cursor-default">
              
              {/* Floating Shape Layer - Background Peak */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <svg viewBox="0 0 400 500" className="w-full h-full drop-shadow-2xl overflow-visible">
                  {/* Background Triangle */}
                  <path 
                    d="M150 500 L300 100 L450 500 Z" 
                    className="fill-white dark:fill-white/10 animate-float-slow opacity-80" 
                  />
                  
                  {/* Animated Sun */}
                  <circle 
                    cx="330" cy="80" r="30" 
                    className="fill-amber-400 animate-float-medium shadow-amber-500/50" 
                  />

                  {/* Tower Structure */}
                  <rect 
                    x="240" y="240" width="100" height="260" rx="8"
                    className="fill-white dark:fill-white/20 transition-all duration-500 group-hover:translate-y-[-10px]" 
                  />

                  {/* Interactive Arch */}
                  <path 
                    d="M240 400 Q290 280 340 400" 
                    className="stroke-amber-400 stroke-[16] fill-none transition-all duration-500 group-hover:stroke-[24]"
                  />

                  {/* Floating Bubbles */}
                  <circle cx="180" cy="420" r="50" className="fill-white/90 dark:fill-white/20 animate-float-fast group-hover:translate-x-[-15px]" />
                  <circle cx="220" cy="300" r="35" className="fill-white/60 dark:fill-white/10 animate-float-medium group-hover:translate-x-5" />
                  
                  {/* Decorative Stair Layer */}
                  <rect x="120" y="440" width="70" height="60" rx="4" className="fill-white/40 dark:fill-white/5 transition-all duration-700 group-hover:rotate-[-10deg]" />
                  
                  {/* Small Accent Circle */}
                  <circle cx="290" cy="360" r="18" className="fill-amber-500 animate-pulse group-hover:scale-150 transition-transform" />
                </svg>
              </div>

              {/* Parallax Hover Elements (Abstract CSS Shapes) */}
              <div className="absolute top-1/4 -left-12 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-float-slow group-hover:translate-x-12 transition-all"></div>
              <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-amber-500/20 rounded-full blur-xl animate-float-fast group-hover:-translate-x-12 transition-all"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
