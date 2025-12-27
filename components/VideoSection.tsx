
import React from 'react';

const VideoSection: React.FC = () => {
  const sideVideos = [
    {
      category: 'TUTORIAL',
      title: 'How to deploy Next.js 15 projects on Vercel Edge',
      author: 'Tekkivo Labs',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=200',
      color: 'text-indigo-500'
    },
    {
      category: 'DESIGN',
      title: 'Mastering Tailwind v4 with Premium Boilerplates',
      author: 'Sergio Pliego',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=200',
      color: 'text-blue-400'
    },
    {
      category: 'CULTURE',
      title: 'Why Developers are choosing Rust for Backend',
      author: 'Ahmad Nazeri',
      image: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&q=80&w=200',
      color: 'text-emerald-400'
    },
    {
      category: 'DEVLOG',
      title: 'Our Journey to building the ultimate Admin Panel',
      author: 'Amachea Jajah',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=200',
      color: 'text-indigo-400'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white section-py">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500 mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight">Our Video Series</h2>
          </div>
          <a href="#" className="hidden sm:block text-sm font-bold border-b-2 border-white pb-1 hover:text-indigo-400 hover:border-indigo-400 transition-all uppercase tracking-[0.2em]">
            Watch All
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          {/* Featured Video */}
          <div className="lg:col-span-8 relative group cursor-pointer overflow-hidden rounded-3xl">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Video" 
                className="w-full h-full object-cover brightness-75 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white text-black">
                  <svg className="w-10 h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                  Next-Gen Development Workflow <br/> with Tekkivo
                </h3>
                <div className="flex flex-wrap items-center gap-8 text-sm font-bold text-gray-400">
                  <span className="flex items-center gap-2 text-white">
                    <img src="https://i.pravatar.cc/100?u=tekkivo" className="w-8 h-8 rounded-full border border-white/20" alt="avatar"/>
                    Tekkivo HQ
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    Oct 24 2024
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    24K Views
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Videos */}
          <div className="lg:col-span-4 space-y-10">
            {sideVideos.map((video, idx) => (
              <div key={idx} className="flex gap-6 group cursor-pointer">
                <div className="w-32 h-24 sm:w-40 sm:h-28 flex-shrink-0 relative overflow-hidden rounded-2xl">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white text-black">
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className={`text-[10px] font-black tracking-[0.2em] uppercase mb-2 ${video.color}`}>
                    {video.category}
                  </span>
                  <h4 className="text-base font-bold leading-snug group-hover:text-indigo-400 transition-colors mb-2 line-clamp-2 tracking-tight">
                    {video.title}
                  </h4>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">By {video.author}</span>
                </div>
              </div>
            ))}
            <div className="pt-4 sm:hidden text-center">
               <a href="#" className="text-sm font-bold border-b-2 border-white pb-1 uppercase tracking-[0.2em]">Watch All Videos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
