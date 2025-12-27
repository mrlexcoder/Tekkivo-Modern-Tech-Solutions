
import React, { useState } from 'react';
import { getAIRecommendation } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    setLoading(true);
    const result = await getAIRecommendation(goal);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="ai-consultant" className="section-py relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border-indigo-500/30 text-indigo-400 font-bold text-xs mb-10 tracking-[0.2em] uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
          AI Strategy Engine
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 tracking-tight">Can't decide on a <span className="text-indigo-400">Technology?</span></h2>
        <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">Describe your project requirements and our AI will recommend the architectural stack for your business.</p>

        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-16">
          <div className="relative">
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g. I want to build a real estate listing site for Dubai with an admin panel and maps..."
              className="w-full bg-slate-900/40 border border-white/10 rounded-3xl p-8 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-[160px] text-lg leading-relaxed shadow-2xl"
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="mt-8 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/30 disabled:opacity-50 flex items-center justify-center gap-3 mx-auto"
          >
            {loading ? 'Analyzing Architecture...' : 'Get Instant Recommendation'}
            {!loading && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
          </button>
        </form>

        {recommendation && (
          <div className="glass border-white/10 rounded-[40px] p-10 md:p-14 text-left animate-in fade-in slide-in-from-bottom-12 duration-700 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-indigo-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">Recommended Stack</h4>
                <p className="text-3xl md:text-4xl font-black mb-8 tracking-tight">{recommendation.recommendedStack}</p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0 text-xl font-bold">✓</div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Type</p>
                      <p className="text-white font-bold">{recommendation.suggestedSolutionType}</p>
                    </div>
                   </div>
                   <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 text-xl font-bold">🚀</div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Time to Market</p>
                      <p className="text-white font-bold">{recommendation.estimatedLaunchTime}</p>
                    </div>
                   </div>
                </div>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-12">
                <h4 className="text-indigo-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">Strategic Analysis</h4>
                <p className="text-slate-300 text-lg leading-relaxed italic font-medium">"{recommendation.reasoning}"</p>
              </div>
            </div>
            <div className="mt-12 flex justify-end">
              <button className="text-indigo-400 font-bold hover:underline flex items-center gap-2 group text-base">
                View Matching Products 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIConsultant;
