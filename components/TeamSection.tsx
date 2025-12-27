
import React from 'react';

const TEAM_MEMBERS = [
  {
    name: 'Logan Dang',
    role: 'WordPress Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Brian Hanley',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Luke Van de Berg',
    role: 'Brand Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Rahat Chowdhury',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ana Belić',
    role: 'Social Media Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Barbora Kratochvilová',
    role: 'UI Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Darko Stanković',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Tomislav Jozić',
    role: 'React Team Lead',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400',
  },
];

const TeamSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <section className={`section-py transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-[#fcfdff]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Meet the <span className="italic font-serif font-light">creative minds</span>
            <br />
            behind our success
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[2rem] transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="px-1">
                <h3 className={`text-xl font-bold mb-1 tracking-tight transition-colors ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                  {member.name}
                </h3>
                <p className={`text-sm font-medium tracking-wide ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
