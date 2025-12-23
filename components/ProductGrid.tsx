
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group glass border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 flex flex-col h-full">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 flex gap-2">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          product.category === 'Premium Solution' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-gray-300'
        }`}>
          {product.category}
        </span>
        {product.isPopular && (
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-900">
            POPULAR
          </span>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold font-heading group-hover:text-indigo-400 transition-colors">{product.name}</h3>
        <span className="text-2xl font-bold">${product.price}</span>
      </div>
      <p className="text-gray-400 text-sm mb-6 line-clamp-2">{product.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {product.stack.map(s => (
          <span key={s} className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">{s}</span>
        ))}
        {product.hasAdminPanel && (
          <span className="text-[11px] px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">Admin Panel</span>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <button className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">Live Preview</button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

const ProductGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Template' | 'Premium Solution'>('All');

  const filteredProducts = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="py-24" id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold font-heading mb-4">Premium <span className="text-indigo-400">Inventory.</span></h2>
            <p className="text-gray-400">Discover our curated collection of high-performance templates and pre-made systems built for scalability.</p>
          </div>
          
          <div className="flex p-1.5 glass rounded-2xl border-white/10">
            {(['All', 'Template', 'Premium Solution'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab ? 'bg-white text-slate-900 shadow-lg shadow-white/5' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'Premium Solution' ? 'Premium Pre-mades' : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
