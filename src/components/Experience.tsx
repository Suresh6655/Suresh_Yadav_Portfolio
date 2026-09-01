import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Users, 
  Code, 
  Terminal,
  Award
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>03 // Practical Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Teaching & Mentorship Experience
          </h2>
          <p className="text-slate-400 text-base">
            Hands-on instructional roles demonstrating strong technical communication, code mentoring, and foundational software pedagogy.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-all group"
            >
              {/* Top Row: Role, Organization & Tag */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-cyan-950/90 text-cyan-300 border border-cyan-800/60 font-mono mb-1">
                    {exp.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 flex flex-wrap items-center gap-2">
                    <span>{exp.organization}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-normal">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/70 border border-slate-700/60 px-3 py-1 rounded-lg font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <div className="py-4 text-slate-300 text-sm leading-relaxed">
                {exp.description}
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Responsibilities & Deliverables
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills gained pills */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mr-1">
                  Skills Applied:
                </span>
                {exp.skillsGained.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Engineering Takeaway Note */}
        <div className="max-w-4xl mx-auto mt-8 bg-slate-950/80 border border-cyan-900/30 rounded-xl p-5 text-xs text-slate-400 flex items-start gap-3">
          <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">Engineering Value for Recruiters:</strong> Teaching foundational web development and computer concepts solidifies a developer's grasp of fundamentals, forces deep understanding of edge cases, and instills strong cross-functional communication habits crucial for agile software teams.
          </p>
        </div>

      </div>
    </section>
  );
};
