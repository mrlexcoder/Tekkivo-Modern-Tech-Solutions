
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden transition-colors duration-500 bg-[var(--hero-bg)]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
          style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '60px 60px', transform: `perspective(1000px) rotateX(60deg) translateY(${mousePos.y * 0.5}px)` }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-indigo-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">The Future of Web Development</span>
            </div>
            
            <h1 className="font-heading text-hero-clamp font-black mb-6 text-slate-900 dark:text-white leading-[1.1]">
              Ship your <br />
              <span className="relative">
                <span className="text-indigo-600 dark:text-indigo-400">Masterpiece</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q25 0 50 5 T100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
              <br />in Record Time
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed font-medium">
              Elite boilerplate templates and pre-built architectures using <span className="text-slate-900 dark:text-white font-bold">Next.js 15</span>, <span className="text-slate-900 dark:text-white font-bold">React</span>, and <span className="text-slate-900 dark:text-white font-bold">Tailwind v4</span>. 
              Built for speed, scale, and uncompromising quality.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button className="group relative bg-indigo-600 text-white px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:bg-indigo-700 shadow-2xl shadow-indigo-500/30">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Browse Premium Library
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <button className="px-8 py-5 rounded-2xl font-bold text-lg border-2 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                Our Showcase
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                <span className="text-slate-900 dark:text-white font-bold">2.5k+</span> developers joined this week
              </p>
            </div>
          </div>

          {/* 3D Visual Side */}
          <div className="lg:col-span-5 relative flex justify-center perspective-2000 py-12 lg:py-0">
            <div 
              className="relative w-full max-w-[440px] aspect-square preserve-3d transition-transform duration-200 ease-out"
              style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
            >
              {/* Main Card */}
              <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[32px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-white/10 overflow-hidden animate-3d preserve-3d">
                <div className="h-12 border-b dark:border-white/5 bg-slate-50 dark:bg-slate-800/50 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-8">
                  <div className="w-full h-40 bg-indigo-50 dark:bg-indigo-500/5 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                    <div className="text-4xl font-black text-indigo-500/20">TEKKIVO</div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-slate-100 dark:bg-white/5 rounded"></div>
                    <div className="h-4 w-1/2 bg-slate-100 dark:bg-white/5 rounded"></div>
                    <div className="pt-4 flex gap-3">
                      <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-5.523-4.477-10-10-10zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                      </div>
                      <div className="h-10 flex-grow rounded-lg bg-slate-100 dark:bg-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting elements */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 glass rounded-3xl flex items-center justify-center animate-3d shadow-xl"
                style={{ animationDelay: '-1s', transform: 'translateZ(100px)' }}
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-indigo-600">99+</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Perf Score</div>
                </div>
              </div>

              <div 
                className="absolute -bottom-6 -left-12 px-6 py-4 glass rounded-2xl flex items-center gap-4 animate-3d shadow-xl"
                style={{ animationDelay: '-2.5s', transform: 'translateZ(80px)' }}
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold dark:text-white">Next.js Ready</div>
                  <div className="text-[10px] text-slate-500">Auto-deployment set</div>
                </div>
              </div>

              {/* Backglow element */}
              <div className="absolute inset-[-10%] bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
