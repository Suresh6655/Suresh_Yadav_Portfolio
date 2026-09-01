import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Star, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Info, 
  Filter, 
  Calculator,
  Code
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'utility', label: 'Utility & Tools' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'dsa', label: 'DSA Prep' },
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>04 // Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Code
          </h2>
          <p className="text-slate-400 text-base">
            Real-world applications built with modern web technologies, algorithmic rigor, and clean design architecture.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-900/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Project Banner: Mathematics Scientific Calculator */}
        {activeCategory === 'all' || activeCategory === 'utility' ? (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-800/60 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              {/* Highlight ribbon */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/60 text-xs font-mono">
                <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                <span>Featured Live Project</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Calculator className="w-4 h-4" />
                    <span>SCIENTIFIC & ARITHMETIC COMPUTATION</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    Mathematics Scientific & Standard Calculator
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    A fast, responsive mathematical calculator application designed for comprehensive arithmetic, trigonometric, and scientific calculations with high numerical precision, operator precedence parsing, and full keyboard interaction.
                  </p>

                  <div className="space-y-2 py-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Real-time expression parser & precedence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Keyboard listeners & tactile visual feedback</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Error boundary prevents invalid division</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Adaptive responsive UI on mobile & desktop</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["JavaScript (ES6+)", "HTML5", "CSS3", "DOM API", "GitHub Pages"].map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 border border-slate-800 text-cyan-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions box */}
                <div className="lg:col-span-4 flex flex-col gap-3 justify-center p-6 bg-slate-950/70 border border-slate-800 rounded-xl">
                  <div className="text-xs text-slate-400 font-mono">
                    Status: <span className="text-emerald-400 font-semibold">Live in Production</span>
                  </div>

                  <a
                    href="https://suresh6655.github.io/Mathematics-Calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="featured-live-demo-btn"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-900/30 transition-all cursor-pointer group/btn"
                  >
                    <span>View Live Calculator</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://github.com/Suresh6655/Mathematics-Calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="featured-github-btn"
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>Inspect GitHub Source</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(projectsData[0])}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center gap-1.5 pt-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture Breakdown</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group shadow-lg"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                    {project.category.toUpperCase()}
                  </span>
                  
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] text-amber-400 font-mono">
                      <Star className="w-3 h-3 fill-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-500 bg-slate-950">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  Details
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 text-xs font-medium border border-cyan-800/60 transition-colors"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500 px-2 py-1 bg-slate-950 rounded border border-slate-800">
                      Repo Ready
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
