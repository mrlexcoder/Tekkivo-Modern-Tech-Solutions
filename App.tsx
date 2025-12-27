
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseSection from './components/ShowcaseSection';
import ProductGrid from './components/ProductGrid';
import FeatureSection from './components/FeatureSection';
import AIConsultant from './components/AIConsultant';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'selection:bg-indigo-500/30' : 'selection:bg-indigo-100'}`}>
      <Navbar isDark={isDarkMode} onToggleTheme={toggleTheme} />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Showcase / Brand Slider Section */}
        <ShowcaseSection isDark={isDarkMode} />

        {/* Templates Catalog Section */}
        <ProductGrid isDark={isDarkMode} />
        
        {/* New Feature Section (HR Management SaaS style) */}
        <FeatureSection isDark={isDarkMode} />
        
        {/* AI Strategy Engine Section */}
        <AIConsultant />
        
        {/* Knowledge Base / Video Blog Section */}
        <VideoSection />

        {/* CTA Section - Standardized Spacing */}
        <section className="section-py px-4">
          <div className={`max-w-7xl mx-auto rounded-[40px] p-12 md:p-24 relative overflow-hidden text-center border ${
            isDarkMode ? 'glass border-indigo-500/20' : 'bg-slate-50 border-slate-200 shadow-2xl'
          }`}>
            <div className={`absolute -top-24 -right-24 w-96 h-96 blur-[120px] rounded-full ${isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-200/50'}`}></div>
            <div className="relative z-10">
              <h2 className={`text-4xl md:text-6xl font-extrabold font-heading mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Ready to dominate the <br/><span className="text-indigo-600">Digital Landscape?</span>
              </h2>
              <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Join 5,000+ developers and businesses building high-end experiences with Tekkivo's elite template library.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className={`px-12 py-5 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 ${
                  isDarkMode ? 'bg-white text-slate-900 hover:bg-indigo-500 hover:text-white shadow-xl shadow-white/10' : 'bg-slate-900 text-white hover:bg-indigo-600 shadow-xl shadow-slate-900/20'
                }`}>
                  Browse All Themes
                </button>
                <button className={`px-12 py-5 rounded-2xl font-bold text-lg border transition-all hover:-translate-y-1 ${
                  isDarkMode ? 'glass border-white/20 hover:bg-white/10' : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`py-20 border-t ${isDarkMode ? 'glass border-white/10' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg">T</div>
                <span className={`text-2xl font-bold font-heading ${!isDarkMode && 'text-slate-900'}`}>Tekkivo.com</span>
              </div>
              <p className="text-slate-500 text-base leading-relaxed">The ultimate source for high-end web architecture, pre-made platforms, and professional themes for modern builders.</p>
            </div>
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-indigo-500">Products</h4>
              <ul className="space-y-4 text-base text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Next.js Templates</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">WordPress Themes</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Pre-made Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-indigo-500">Company</h4>
              <ul className="space-y-4 text-base text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Support Portal</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Our Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-indigo-500">Newsletter</h4>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className={`border rounded-xl px-5 py-3 text-base w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                  }`} 
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl text-base font-bold shadow-lg shadow-indigo-600/20 transition-all">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>© 2024 Tekkivo Solutions. Built with Next.js & Tailwind v4.</p>
            <div className="flex gap-8 font-medium">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
