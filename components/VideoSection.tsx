
import React from 'react';

const VideoSection: React.FC = () => {
  const sideVideos = [
    {
      category: 'TRAVEL',
      title: 'Maui By Air The Best Way Around The Island',
      author: 'Ashley Graham',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=200',
      color: 'text-indigo-500'
    },
    {
      category: 'FASHION',
      title: 'To Keep Makeup Looking Fresh Take A Powder',
      author: 'Sergio Pliego',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=200',
      color: 'text-blue-400'
    },
    {
      category: 'CULTURE',
      title: 'Looking To Up Your Insta Game Here’s How To Nail An...',
      author: 'Ahmad Nazeri',
      image: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&q=80&w=200',
      color: 'text-emerald-400'
    },
    {
      category: 'CONTESTS',
      title: 'Want to win a free photoshoot? Join our latest...',
      author: 'Amachea Jajah',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=200',
      color: 'text-indigo-400'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Videos</h2>
          <a href="#" className="text-sm font-bold border-b-2 border-white pb-1 hover:text-indigo-400 hover:border-indigo-400 transition-all uppercase tracking-widest">
            All Videos
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Video */}
          <div className="lg:col-span-8 relative group cursor-pointer overflow-hidden rounded-sm">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Video" 
                className="w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Facts Why Inkjet Printing Is Very Appealing Compared
                </h3>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                  <span>By Amachea Jajah</span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                    Jun 02 2020
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    1K Views
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    310 Shares
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Videos */}
          <div className="lg:col-span-4 space-y-6">
            {sideVideos.map((video, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer">
                <div className="w-24 h-24 sm:w-32 sm:h-24 flex-shrink-0 relative overflow-hidden rounded-sm">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className={`text-[10px] font-black tracking-widest uppercase mb-1 ${video.color}`}>
                    {video.category}
                  </span>
                  <h4 className="text-sm font-bold leading-snug group-hover:text-indigo-400 transition-colors mb-1 line-clamp-2">
                    {video.title}
                  </h4>
                  <span className="text-xs text-gray-500">By {video.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
