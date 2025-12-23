
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 glass rounded-3xl border-white/10 hover:border-indigo-500/30 transition-all group">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-xl font-bold mb-4 font-heading">Rapid Deployment</h3>
                <p className="text-gray-400">Go from concept to live in minutes with our perfectly optimized codebases.</p>
              </div>
              <div className="p-8 glass rounded-3xl border-white/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-xl font-bold mb-4 font-heading">Secure Admin Panels</h3>
                <p className="text-gray-400">Full backend systems with user roles, inventory, and detailed analytics included.</p>
              </div>
              <div className="p-8 glass rounded-3xl border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform">✨</div>
                <h3 className="text-xl font-bold mb-4 font-heading">Modern Tech Stack</h3>
                <p className="text-gray-400">Built using the latest industry standards: Next.js 14, Tailwind CSS, and Laravel.</p>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />
        
        <AIConsultant />

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto glass border-indigo-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading mb-8">Ready to dominate the <br/><span className="text-indigo-400">Digital Landscape?</span></h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Join 5,000+ developers and businesses building high-end experiences with Tekkivo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-500 hover:text-white transition-all">Browse All Themes</button>
                <button className="glass border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 glass mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-lg">T</div>
                <span className="text-xl font-bold font-heading">Tekkivo.com</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">The ultimate source for high-end web architecture, pre-made platforms, and professional themes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-400">Products</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Next.js Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WordPress Themes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pre-made Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admin Dashboards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-400">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-400">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Get notified about new weekly drops.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                <button className="bg-indigo-600 px-4 py-2 rounded-lg text-sm font-bold">Join</button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
            <p>© 2024 Tekkivo Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
