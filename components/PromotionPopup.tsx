
import React, { useState, useEffect } from 'react';

const PromotionPopup: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    // Check if the user has already dismissed the popup in this session
    const isDismissed = sessionStorage.getItem('tekkivo_promo_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Show after 5 seconds for a professional experience
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('tekkivo_promo_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        handleClose();
      }, 2000);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-500"
        onClick={handleClose}
      />
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-lg overflow-hidden rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border ${
        isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
      }`}>
        {/* Decorative Top Banner Image */}
        <div className="h-40 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover" 
            alt="Promotion Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-10 text-center">
          {status === 'success' ? (
            <div className="py-10 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={`text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>You're on the list!</h3>
              <p className="text-slate-500">Check your inbox for your exclusive welcome gift.</p>
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Limited Time Offer
              </div>
              
              <h3 className={`text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Level up your <span className="text-indigo-500">Architecture.</span>
              </h3>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'} font-light`}>
                Join 50,000+ developers getting the latest premium templates and design systems directly in their inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-base ${
                      isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-600/20 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Get Instant Access'}
                </button>
                
                <p className="text-[11px] text-slate-500 font-medium">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionPopup;
