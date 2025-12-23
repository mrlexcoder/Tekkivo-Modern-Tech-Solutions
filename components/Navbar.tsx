
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">T</div>
            <span className="text-2xl font-bold tracking-tight font-heading">Tekkivo<span className="text-indigo-500">.com</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group mega-menu-hover h-20 flex items-center">
                <a href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-1">
                  {link.label}
                  {link.children && (
                    <svg className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {link.children && (
                  <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[600px] p-8 glass rounded-2xl shadow-2xl opacity-0 invisible -translate-y-4 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="grid grid-cols-2 gap-8">
                      {link.children.map((section) => (
                        <div key={section.title}>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">{section.title}</h3>
                          <ul className="space-y-3">
                            {section.items.map((item) => (
                              <li key={item.label}>
                                <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group/item">
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">Sign In</button>
            <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all shadow-lg shadow-white/5">
              Start Building
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/10 p-4 space-y-4 animate-in slide-in-from-top">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <a href={link.href} className="block text-lg font-medium py-2">{link.label}</a>
            </div>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <button className="w-full bg-indigo-600 py-3 rounded-xl font-bold">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
