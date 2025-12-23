
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
    <section id="ai-consultant" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-indigo-500/30 text-indigo-400 font-bold text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          AI SOLUTIONS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Can't decide on a <span className="text-indigo-400">Technology?</span></h2>
        <p className="text-gray-400 text-lg mb-10">Describe your project and our AI will recommend the perfect Tekkivo solution for your business.</p>

        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-12">
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g. I want to build a real estate listing site for Dubai with an admin panel and maps..."
            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl p-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-[120px]"
          />
          <button 
            type="submit"
            disabled={loading}
            className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2 mx-auto"
          >
            {loading ? 'Consulting AI...' : 'Get Instant Recommendation'}
            {!loading && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
          </button>
        </form>

        {recommendation && (
          <div className="glass border-white/20 rounded-3xl p-8 text-left animate-in fade-in slide-in-from-bottom-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-indigo-400 font-bold text-sm uppercase mb-2">Recommended Stack</h4>
                <p className="text-2xl font-bold mb-4">{recommendation.recommendedStack}</p>
                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0">✓</div>
                    <p className="text-gray-300"><span className="font-bold">Type:</span> {recommendation.suggestedSolutionType}</p>
                   </div>
                   <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0">🚀</div>
                    <p className="text-gray-300"><span className="font-bold">Launch:</span> {recommendation.estimatedLaunchTime}</p>
                   </div>
                </div>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <h4 className="text-indigo-400 font-bold text-sm uppercase mb-2">AI Expert Analysis</h4>
                <p className="text-gray-400 leading-relaxed italic">"{recommendation.reasoning}"</p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="text-indigo-400 font-bold hover:underline">View Matching Products →</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIConsultant;
