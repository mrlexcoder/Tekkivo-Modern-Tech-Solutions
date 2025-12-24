
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass border-b transition-all ${isDark ? 'border-white/10' : 'border-black/5 bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-white shadow-lg">T</div>
              <span className={`text-xl font-bold font-heading tracking-tight ${!isDark ? 'text-slate-900' : 'text-white'}`}>Tekkivo</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group mega-menu-hover h-16 flex items-center">
                  <a href={link.href} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors font-medium text-sm ${
                    link.children ? (isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600') : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')
                  }`}>
                    {link.label}
                    {link.children && (
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {link.children && (
                    <div className="mega-menu absolute top-[calc(100%-4px)] left-0 w-[550px] p-2 glass rounded-2xl shadow-2xl opacity-0 invisible -translate-y-2 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto border border-white/10">
                      <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden p-3 grid grid-cols-2 gap-2">
                        {link.children[0].items.map((item, idx) => (
                          <a key={item.label} href={item.href} className={`flex items-start gap-4 p-4 rounded-xl transition-all ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'}`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                              idx === 0 ? 'bg-pink-100 text-pink-600' : 
                              idx === 1 ? 'bg-green-100 text-green-600' :
                              idx === 2 ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                            }`}>
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                              </svg>
                            </div>
                            <div>
                              <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</div>
                              <div className="text-xs text-slate-500 mt-1">Premium {item.label.toLowerCase()} kits.</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className={`relative hidden lg:block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <div className={`flex items-center gap-3 px-3 py-1.5 rounded-lg border transition-all ${isDark ? 'bg-slate-900/50 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7-0 11-14 0 7 7-0 0114 0z" />
                </svg>
                <span className="text-sm">Search</span>
                <span className={`text-[10px] px-1 rounded border ${isDark ? 'border-white/20' : 'border-slate-300'}`}>⌘K</span>
              </div>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={onToggleTheme}
              className={`p-2 rounded-lg transition-all ${isDark ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-indigo-600'}`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.071 16.071l.707.707M7.929 7.929l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button className={`p-2 rounded-lg ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
