import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Code2, 
  Database, 
  Wrench, 
  Binary, 
  Search, 
  Check, 
  Cpu, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-violet-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = ['All', ...skillsData.map(s => s.category)];

  const filteredCategories = skillsData.filter(cat => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return false;
    }
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();
    const matchesCategory = cat.category.toLowerCase().includes(term);
    const matchesSkill = cat.skills.some(s => s.name.toLowerCase().includes(term) || s.tag?.toLowerCase().includes(term));
    return matchesCategory || matchesSkill;
  });

  return (
    <section id="skills" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>02 // Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Tooling
          </h2>
          <p className="text-slate-400 text-base">
            Structured domains representing my development toolchain, core computer science foundation, and analytical problem-solving skills.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by skill or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, index) => (
            <div
              key={index}
              className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/60 group-hover:border-cyan-500/40 transition-colors">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.category}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills tags list */}
                <div className="space-y-2 mt-4">
                  {group.skills
                    .filter(s => !searchTerm.trim() || s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.tag?.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-xs font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          {skill.tag && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                              {skill.tag}
                            </span>
                          )}
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                            skill.level === 'Proficient' 
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/50' 
                              : skill.level === 'Intermediate' 
                              ? 'bg-blue-950 text-blue-300 border border-blue-800/50' 
                              : 'bg-slate-800 text-slate-300 border border-slate-700/50'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Bottom tag count indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{group.skills.length} core proficiencies</span>
                <span className="text-cyan-500">Verified Fresher Level</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter assurance banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Honest, credible competency levels tailored for entry-level Software Engineering and Internship evaluations.</span>
          </div>
          <a
            href="#projects"
            className="text-cyan-400 hover:text-cyan-300 font-medium whitespace-nowrap flex items-center gap-1"
          >
            See skills in projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
