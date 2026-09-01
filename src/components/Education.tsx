import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Award,
  Layers
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>05 // Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Coursework
          </h2>
          <p className="text-slate-400 text-base">
            Formal undergraduate engineering curriculum grounding full-stack software development in foundational computer science principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-cyan-800/60 transition-all space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {edu.degree}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {edu.field}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 mt-1 flex flex-wrap items-center gap-2">
                      <span>{edu.institution}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-normal">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right flex flex-col sm:items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-lg font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {edu.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Coursework Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Relevant Core Engineering Modules</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {edu.coursework.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Academic Focus Points */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Undergraduate Academic Highlights
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
