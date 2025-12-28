
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
