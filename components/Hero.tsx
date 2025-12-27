
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden transition-colors duration-500 bg-[var(--hero-bg)]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
          style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '60px 60px', transform: `perspective(1000px) rotateX(60deg) translateY(${mousePos.y * 0.5}px)` }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-indigo-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">Premium Web Architecture</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-10 text-slate-900 dark:text-white leading-[1.05] tracking-tight">
              Ship your <br />
              <span className="relative inline-block">
                <span className="text-indigo-600 dark:text-indigo-400">Masterpiece</span>
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-amber-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q25 0 50 5 T100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
              <br />in Record Time
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl mb-12 leading-relaxed font-medium">
              Elite boilerplate templates and pre-built architectures using <span className="text-slate-900 dark:text-white font-bold">Next.js 15</span>, <span className="text-slate-900 dark:text-white font-bold">React</span>, and <span className="text-slate-900 dark:text-white font-bold">Tailwind</span>. 
              Built for scale.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <button className="group relative bg-indigo-600 text-white px-10 py-6 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:bg-indigo-700 hover:-translate-y-1 shadow-2xl shadow-indigo-500/40">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Browse Premium Library
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <button className="px-10 py-6 rounded-2xl font-bold text-lg border-2 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all hover:-translate-y-1">
                Our Showcase
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-base font-medium text-slate-500">
                <span className="text-slate-900 dark:text-white font-bold">2.5k+</span> developers joined this week
              </p>
            </div>
          </div>

          {/* 3D Visual Side */}
          <div className="lg:col-span-5 relative flex justify-center perspective-2000 py-12 lg:py-0">
            <div 
              className="relative w-full max-w-[480px] aspect-square preserve-3d transition-transform duration-200 ease-out"
              style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
            >
              {/* Main Card */}
              <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-slate-200 dark:border-white/10 overflow-hidden animate-3d preserve-3d">
                <div className="h-14 border-b dark:border-white/5 bg-slate-50 dark:bg-slate-800/50 flex items-center px-8 gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
                </div>
                <div className="p-10">
                  <div className="w-full h-44 bg-indigo-50 dark:bg-indigo-500/5 rounded-[24px] mb-8 relative overflow-hidden flex items-center justify-center">
                    <div className="text-5xl font-black text-indigo-500/20 tracking-tighter">TEKKIVO</div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-5 w-3/4 bg-slate-100 dark:bg-white/5 rounded-full"></div>
                    <div className="h-5 w-1/2 bg-slate-100 dark:bg-white/5 rounded-full"></div>
                    <div className="pt-6 flex gap-4">
                      <div className="h-12 w-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-5.523-4.477-10-10-10zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                      </div>
                      <div className="h-12 flex-grow rounded-xl bg-slate-100 dark:bg-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div 
                className="absolute -top-12 -right-12 w-36 h-36 glass rounded-[32px] flex items-center justify-center animate-3d shadow-2xl"
                style={{ animationDelay: '-1s', transform: 'translateZ(120px)' }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-indigo-600 leading-none mb-1">99+</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Perf Score</div>
                </div>
              </div>

              <div 
                className="absolute -bottom-8 -left-16 px-8 py-5 glass rounded-[24px] flex items-center gap-5 animate-3d shadow-2xl"
                style={{ animationDelay: '-2.5s', transform: 'translateZ(100px)' }}
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-base font-bold dark:text-white">Next.js 15</div>
                  <div className="text-xs text-slate-500 font-medium">Native Vercel support</div>
                </div>
              </div>

              {/* Backglow element */}
              <div className="absolute inset-[-15%] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
