
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AIConsultant from './components/AIConsultant';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
  // Set light theme as default
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
      
      <main className="pt-16">
        <Hero />
        <ProductGrid isDark={isDarkMode} />
        <AIConsultant />
        
        {/* Video Blog Section */}
        <VideoSection />

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className={`max-w-7xl mx-auto rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center border ${
            isDarkMode ? 'glass border-indigo-500/20' : 'bg-slate-50 border-slate-200 shadow-xl'
          }`}>
            <div className={`absolute -top-24 -right-24 w-96 h-96 blur-[100px] rounded-full ${isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-200/50'}`}></div>
            <div className="relative z-10">
              <h2 className={`text-4xl md:text-6xl font-extrabold font-heading mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Ready to dominate the <br/><span className="text-indigo-600">Digital Landscape?</span>
              </h2>
              <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Join 5,000+ developers and businesses building high-end experiences with Tekkivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={`px-10 py-5 rounded-2xl font-bold text-lg transition-all ${
                  isDarkMode ? 'bg-white text-slate-900 hover:bg-indigo-500 hover:text-white' : 'bg-slate-900 text-white hover:bg-indigo-600'
                }`}>
                  Browse All Themes
                </button>
                <button className={`px-10 py-5 rounded-2xl font-bold text-lg border transition-all ${
                  isDarkMode ? 'glass border-white/20 hover:bg-white/10' : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`py-12 border-t mt-12 ${isDarkMode ? 'glass border-white/10' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white">T</div>
                <span className={`text-xl font-bold font-heading ${!isDarkMode && 'text-slate-900'}`}>Tekkivo.com</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">The ultimate source for high-end web architecture, pre-made platforms, and professional themes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-500">Products</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Next.js Templates</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">WordPress Themes</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Pre-made Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-500">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Support Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-500">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={`border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                    isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                  }`} 
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center">
            <p>© 2024 Tekkivo Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
