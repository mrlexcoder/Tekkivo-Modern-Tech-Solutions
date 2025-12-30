
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-700 bg-[var(--bg-color)]">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[180px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #6366f1 0.5px, transparent 0.5px)', 
            backgroundSize: '40px 40px' 
          }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Layer */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-500 text-xs font-bold uppercase tracking-[0.2em] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Vercel Partner Portfolio
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-slate-900 dark:text-white leading-[0.95] tracking-tight text-balance">
              Design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">Systems</span> <br />
              for Scale.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-light">
              Elite architectural boilerplates and pre-built ecosystems. Ship high-performance products with the precision of a top-tier agency.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.5)] transform hover:-translate-y-1">
                Explore The Library
              </button>
              <button className="w-full sm:w-auto px-10 py-5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                Custom Solutions
              </button>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 dark:border-white/5 flex items-center gap-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 shadow-sm" alt="user" />
                ))}
              </div>
              <div>
                <div className="text-xl font-bold dark:text-white">Trusted by 12k+</div>
                <div className="text-sm text-slate-500">Elite developers globally</div>
              </div>
            </div>
          </div>

          {/* 3D Visual Layer */}
          <div className="hidden lg:block relative perspective-2000">
            <div 
              className="relative w-full aspect-square preserve-3d transition-transform duration-300 ease-out"
              style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
            >
              {/* Central Abstract Piece */}
              <div className="absolute inset-0 glass rounded-[40px] shadow-2xl flex items-center justify-center p-12">
                <div className="w-full h-full bg-slate-950/20 rounded-3xl border border-white/5 overflow-hidden flex flex-col">
                  <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                    <div className="h-20 w-full bg-indigo-500/10 rounded-xl border border-indigo-500/20"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Widgets */}
              <div 
                className="absolute top-10 -right-10 glass px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 transition-transform duration-500"
                style={{ transform: 'translateZ(100px)' }}
              >
                <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-xl flex items-center justify-center font-bold">99</div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-400">SEO SCORE</div>
              </div>

              <div 
                className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-xl transition-transform duration-700"
                style={{ transform: 'translateZ(80px)' }}
              >
                <div className="text-3xl font-black text-indigo-500 mb-1">React 19</div>
                <div className="text-xs font-bold text-slate-400 uppercase">Native Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
