
import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  isDark: boolean;
}

const ProductCard: React.FC<{ product: Product, isDark: boolean }> = ({ product, isDark }) => (
  <div className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col h-full bg-white dark:bg-slate-900 ${
    isDark ? 'border-white/5 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10' : 'border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100'
  }`}>
    <div className="relative aspect-video overflow-hidden border-b dark:border-white/5 border-slate-100">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {product.isPopular && (
        <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
          POPULAR
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-3">
        {product.stack.map(s => (
          <span key={s} className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">{s}</span>
        ))}
      </div>
      <h3 className={`text-xl font-bold font-heading mb-3 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.name}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{product.description}</p>
      
      <div className="flex gap-3 border-t dark:border-white/5 border-slate-50 pt-6 mt-auto">
        <button className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all border ${
          isDark ? 'text-slate-300 border-white/10 hover:bg-slate-800' : 'text-slate-600 border-slate-200 hover:bg-slate-50'
        }`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Preview
        </button>
        <button className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-slate-900 dark:bg-indigo-600 text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95">
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

  const filteredProducts = PRODUCTS.filter(p => p.subCategory === activeCategory || activeCategory === 'SaaS');

  return (
    <section className="py-20 md:py-32" id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <h2 className={`text-3xl md:text-4xl font-black font-heading mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Explore our <span className="text-indigo-600">Curated Library</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            Choose from hundreds of high-quality, conversion-optimized templates and UI kits.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar - Sticky with Theme Integration */}
          <div className="lg:w-72 flex-shrink-0">
            <div className={`sticky top-28 p-4 rounded-3xl border transition-all ${
              isDark ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-widest mb-6 px-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Filter by Category</h4>
              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      activeCategory === cat.name 
                        ? (isDark ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20') 
                        : 'text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-500/5'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeCategory === cat.name ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`}>
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
