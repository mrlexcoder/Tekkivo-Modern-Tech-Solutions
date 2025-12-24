
import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  isDark: boolean;
}

const ProductCard: React.FC<{ product: Product, isDark: boolean }> = ({ product, isDark }) => (
  <div className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full bg-white dark:bg-slate-900 ${
    isDark ? 'border-white/5 hover:border-indigo-500/50' : 'border-slate-200 hover:border-indigo-200'
  }`}>
    <div className="relative aspect-video overflow-hidden border-b dark:border-white/5 border-slate-200">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="p-5 flex flex-col flex-grow">
      <h3 className={`text-lg font-bold font-heading mb-2 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.name}</h3>
      <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{product.description}</p>
      
      <div className="flex gap-0 border-t dark:border-white/5 border-slate-100 -mx-5 -mb-5 mt-auto">
        <button className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-colors border-r dark:border-white/5 border-slate-100 ${
          isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
        }`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Preview
        </button>
        <button className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-colors ${
          isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
        }`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>
      </div>
    </div>
  </div>
);

const ProductGrid: React.FC<ProductGridProps> = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState('SaaS');
  const [filterType, setFilterType] = useState('NEWEST');

  const filteredProducts = PRODUCTS.filter(p => p.subCategory === activeCategory || activeCategory === 'SaaS');

  return (
    <section className="py-12" id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Controls */}
        <div className="flex justify-end mb-8 gap-4">
          <div className={`inline-flex p-1 rounded-lg border transition-all ${isDark ? 'bg-black border-white/10' : 'bg-slate-100 border-slate-200'}`}>
            <button 
              onClick={() => setFilterType('NEWEST')}
              className={`px-4 py-1.5 text-[11px] font-bold rounded-md transition-all ${filterType === 'NEWEST' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500'}`}
            >
              NEWEST
            </button>
            <button 
              onClick={() => setFilterType('POPULAR')}
              className={`px-4 py-1.5 text-[11px] font-bold rounded-md transition-all ${filterType === 'POPULAR' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500'}`}
            >
              POPULAR
            </button>
          </div>
          
          <div className={`inline-flex p-1 rounded-lg border transition-all ${isDark ? 'bg-black border-white/10' : 'bg-slate-100 border-slate-200'}`}>
            <button className="px-4 py-1.5 text-[11px] font-bold text-slate-500">FREE</button>
            <button className="px-4 py-1.5 text-[11px] font-bold bg-slate-900 text-white rounded-md shadow-sm">ALL</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className={`sticky top-24 p-2 rounded-2xl border transition-all ${isDark ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200'}`}>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === cat.name 
                        ? (isDark ? 'bg-white/5 text-white' : 'bg-slate-50 text-slate-900 shadow-sm border border-slate-200/50') 
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] font-bold ${activeCategory === cat.name ? 'text-indigo-500' : 'text-slate-400'}`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
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
