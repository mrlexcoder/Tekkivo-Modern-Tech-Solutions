
import React from 'react';

const ShowcaseSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const brands = [
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Adobe', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg' },
    { name: 'Intel', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%2C_dark_blue%29.svg' },
  ];

  const scrollBrands = [...brands, ...brands];

  // More team avatars for the slider
  const teamIds = [10, 20, 30, 40, 50, 60, 70, 80];
  const scrollTeam = [...teamIds, ...teamIds];

  const showcaseTemplates = [
    { id: 1, title: 'Trusted Residential Cleaning Services', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Studiova Digital Agency', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Futuristic Haven Real Estate', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Fintech Mobile Dashboard', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Creative Portfolio NextJS', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className={`section-py overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Brands Slider Section */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-grow bg-slate-200 dark:bg-white/10"></div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">Trusted by global industry leaders</span>
          <div className="h-px flex-grow bg-slate-200 dark:bg-white/10"></div>
        </div>
        
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10"></div>

          <div className="flex w-fit items-center gap-24 md:gap-32 opacity-30 grayscale dark:invert transition-all hover:opacity-100 animate-marquee">
            {scrollBrands.map((brand, i) => (
              <img 
                key={i} 
                src={brand.url} 
                alt={brand.name} 
                className="h-10 md:h-12 w-auto object-contain flex-shrink-0" 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Narrative Headline with Team Slider */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-32">
        <h2 className={`text-4xl md:text-6xl font-extrabold leading-[1.15] tracking-tight flex flex-wrap items-center justify-center gap-y-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <span>Our flexible team</span>
          
          <div className="inline-block relative overflow-hidden h-14 md:h-20 w-48 md:w-80 mx-4 align-middle rounded-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--bg-color)] via-transparent to-[var(--bg-color)] pointer-events-none"></div>
            <div className="flex w-fit items-center gap-4 animate-marquee">
              {scrollTeam.map((id, i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/120?u=${id}`} 
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white dark:border-slate-900 shadow-2xl flex-shrink-0" 
                  alt="team member" 
                />
              ))}
            </div>
          </div>

          <span>has a wide range of skills, combining creativity 🎨 with high-performance utility ✨</span>
        </h2>
      </div>

      {/* Fanned Template Showcase */}
      <div className="relative h-[450px] md:h-[650px] w-full max-w-7xl mx-auto perspective-2000 flex items-center justify-center">
        {showcaseTemplates.map((template, idx) => {
          const position = idx - 2;
          const rotationY = position * -18;
          const translateX = position * 140;
          const translateZ = Math.abs(position) * -120;
          const scale = 1 - Math.abs(position) * 0.12;

          return (
            <div
              key={template.id}
              className="absolute w-[300px] md:w-[550px] aspect-[4/3] rounded-[32px] md:rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20 dark:border-white/10 transition-all duration-700 hover:z-50 hover:scale-[1.03] cursor-pointer group"
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotationY}deg) scale(${scale})`,
                zIndex: 10 - Math.abs(position),
                left: 'auto'
              }}
            >
              <img 
                src={template.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={template.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                <h4 className="text-white font-bold text-2xl md:text-3xl tracking-tight mb-2">{template.title}</h4>
                <p className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">Premium Series</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShowcaseSection;
