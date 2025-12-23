
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-8">
            <span className="bg-indigo-500 px-2 py-0.5 rounded-full text-white text-[10px] font-bold">NEW</span>
            <span>Gemini AI Consultant now available</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold font-heading tracking-tight mb-8">
            Build Faster with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">
              Modern Solutions.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            The marketplace for premium website templates and turn-key pre-made websites. 
            WordPress, Next.js, Vue, and Full-stack systems with integrated admin panels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-indigo-500 hover:text-white transition-all shadow-xl shadow-white/5">
              Explore Templates
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              Premium Pre-mades
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-bold text-2xl font-heading">Next.js</div>
            <div className="font-bold text-2xl font-heading">React</div>
            <div className="font-bold text-2xl font-heading">WordPress</div>
            <div className="font-bold text-2xl font-heading">Vue.js</div>
            <div className="font-bold text-2xl font-heading">Laravel</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
