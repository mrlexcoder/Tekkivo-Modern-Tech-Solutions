
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 px-6 rounded-2xl transition-all border ${
          isScrolled 
            ? 'glass border-white/10 shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg transition-transform group-hover:scale-110">T</div>
              <span className={`text-xl font-black tracking-tighter uppercase transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Tekkivo</span>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className={`px-4 py-2 rounded-xl text-sm font-bold tracking-tight transition-all ${
                    isDark 
                      ? 'text-slate-400 hover:text-white hover:bg-white/5' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl transition-all ${
                isDark ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-100 text-slate-500'
              }`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.071 16.071l.707.707M7.929 7.929l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button className="hidden sm:block px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all">
              Join the Ecosystem
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
