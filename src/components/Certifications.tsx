import React from 'react';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  BookCheck
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>06 // Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-400 text-base">
            Formal technical certifications, mentorship credentials, and verified skill development achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group shadow-lg"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Verified Training
                  </span>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-cyan-400/90 font-mono mt-1">
                  Issuer: {cert.issuer}
                </div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Status: {cert.date}
                </div>

                {/* Skills verified list */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Skills Covered & Practiced:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action / Link */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  Credential Ready
                </span>
                
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Inspect Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Certificate notice */}
        <div className="max-w-5xl mx-auto mt-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center text-xs text-slate-400">
          <span>Official certificates and institutional recommendation letters are available upon recruiter request during interview rounds.</span>
        </div>

      </div>
    </section>
  );
};
