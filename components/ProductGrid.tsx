
import React, { useState } from 'react';
import { PRODUCTS, PILL_TAGS, FRAMEWORK_FILTERS, DESIGN_FILTERS } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  isDark: boolean;
}

const ProductCard: React.FC<{ product: Product, isDark: boolean }> = ({ product, isDark }) => (
  <div className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col h-full hover:-translate-y-2 ${
    isDark ? 'bg-slate-900 border-white/10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]' : 'bg-white border-slate-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] shadow-sm'
  }`}>
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {product.stack.includes('React') && (
        <div className="absolute top-4 left-4 bg-indigo-600 p-2 rounded-xl shadow-xl">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
      )}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white font-bold text-xs">
        {product.subCategory}
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.name}</h3>
        <span className={`text-lg font-black ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
          {product.price === 0 ? 'Free' : `$${product.price}`}
        </span>
      </div>
      <p className={`text-base mb-8 flex-grow leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{product.description}</p>
      
      <div className="flex items-center justify-between pt-6 border-t dark:border-white/5 border-slate-100">
        <div className="flex gap-2">
           {product.stack.slice(0, 2).map(s => (
             <span key={s} className="text-[10px] font-bold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase tracking-widest">{s}</span>
           ))}
        </div>
        <button className={`p-3 rounded-xl transition-all hover:scale-110 ${
          isDark ? 'text-slate-400 hover:bg-slate-800 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
        }`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const ProductGrid: React.FC<ProductGridProps> = ({ isDark }) => {
  const [activePill, setActivePill] = useState('All Themes');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className={`section-py ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`} id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Filter Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black font-heading mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Explore the Library
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {PILL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActivePill(tag)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
                  activePill === tag
                    ? 'bg-indigo-600 text-white'
                    : (isDark ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200')
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Sidebar - Refined spacing */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="space-y-12 sticky top-24">
              
              {/* Search Box */}
              <div>
                <h4 className={`text-base font-bold mb-6 uppercase tracking-[0.2em] text-indigo-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>Find themes</h4>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full px-5 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-base ${
                      isDark ? 'bg-slate-900 border-white/10 text-white placeholder-slate-600' : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7-0 11-14 0 7 7-0 0114 0z" /></svg>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div>
                <h4 className={`text-base font-bold mb-8 pb-3 border-b transition-all uppercase tracking-[0.2em] text-indigo-500 ${isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'}`}>Technology</h4>
                <div className="space-y-5">
                  {FRAMEWORK_FILTERS.map((f) => (
                    <label key={f.name} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" 
                          />
                        </div>
                        <span className={`text-base font-medium transition-colors ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{f.name}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">{f.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Design Series */}
              <div>
                <h4 className={`text-base font-bold mb-8 pb-3 border-b transition-all uppercase tracking-[0.2em] text-indigo-500 ${isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'}`}>Design Style</h4>
                <div className="space-y-5">
                  {DESIGN_FILTERS.map((f) => (
                    <label key={f.name} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" 
                        />
                        <span className={`text-base font-medium transition-colors ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{f.name}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">{f.count}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Main List Area - Uniform Gaps */}
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 pb-6 border-b dark:border-white/10 border-slate-200 gap-6">
              <h2 className={`text-2xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Premium Next.js & React Dashboard Templates
              </h2>
              <div className="relative w-full sm:w-auto">
                <select className={`w-full sm:w-48 px-4 py-3 rounded-xl border appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-bold shadow-sm ${
                  isDark ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-700'
                }`}>
                  <option>Newest Arrivals</option>
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
