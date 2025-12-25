
import React, { useState } from 'react';
import { PRODUCTS, PILL_TAGS, FRAMEWORK_FILTERS, DESIGN_FILTERS } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  isDark: boolean;
}

const ProductCard: React.FC<{ product: Product, isDark: boolean }> = ({ product, isDark }) => (
  <div className={`group rounded-xl overflow-hidden border transition-all duration-200 flex flex-col h-full ${
    isDark ? 'bg-slate-900 border-white/10 hover:shadow-2xl' : 'bg-white border-slate-200 hover:shadow-lg'
  }`}>
    <div className="relative aspect-video overflow-hidden border-b dark:border-white/5 border-slate-100">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover"
      />
      {product.stack.includes('React') && (
        <div className="absolute top-3 left-3 bg-indigo-600 p-1 rounded shadow-md">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-2">
        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{product.name}</h3>
        <span className={`text-sm font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
          {product.price === 0 ? 'Free' : `$${product.price}`}
        </span>
      </div>
      <p className={`text-sm mb-6 flex-grow ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{product.description}</p>
      
      <div className="flex justify-end pt-4 border-t dark:border-white/5 border-slate-100">
        <button className={`p-2 rounded-full transition-colors ${
          isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-400 hover:bg-slate-100'
        }`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <section className={`py-12 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`} id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pills / Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {PILL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActivePill(tag)}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${
                activePill === tag
                  ? 'bg-slate-400 text-white shadow-sm'
                  : (isDark ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-slate-200 text-slate-600 hover:bg-slate-300')
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="space-y-10">
              
              {/* Search */}
              <div>
                <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Search themes</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                      isDark ? 'bg-slate-900 border-white/10 text-white placeholder-slate-600' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              {/* Framework Filter */}
              <div>
                <h4 className={`text-lg font-bold mb-6 pb-2 border-b transition-all ${isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'}`}>Framework</h4>
                <div className="space-y-4">
                  {FRAMEWORK_FILTERS.map((f) => (
                    <label key={f.name} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" 
                        />
                        <span className={`text-sm ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{f.name}</span>
                      </div>
                      <span className="text-xs text-slate-400">{f.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Design Filter */}
              <div>
                <h4 className={`text-lg font-bold mb-6 pb-2 border-b transition-all ${isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'}`}>Design</h4>
                <div className="space-y-4">
                  {DESIGN_FILTERS.map((f) => (
                    <label key={f.name} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" 
                        />
                        <span className={`text-sm ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{f.name}</span>
                      </div>
                      <span className="text-xs text-slate-400">{f.count}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8 pb-4 border-b dark:border-white/10 border-slate-200">
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-indigo-900'}`}>
                React, VueJS, Angular and Bootstrap Templates
              </h2>
              <div className="relative">
                <select className={`px-4 py-2 rounded border appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm ${
                  isDark ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-300 text-slate-600'
                }`}>
                  <option>Sort by</option>
                  <option>Newest</option>
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
