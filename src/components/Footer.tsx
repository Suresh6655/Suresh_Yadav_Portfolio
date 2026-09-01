import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Code2, 
  Mail, 
  Phone, 
  Heart,
  Terminal,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'interview-readiness', label: 'DSA Prep' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Identity (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/20">
                SY
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {personalInfo.headline}. B.Tech Computer Science & Engineering student at Geeta University, passionate about full-stack engineering and algorithmic problem-solving.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-400 font-mono">
                Open for Software Engineering Internships & Placement Roles
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-slate-400 hover:text-cyan-400 transition-colors text-xs cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onOpenResume}
                className="text-left text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3 h-3" />
                Resume View
              </button>
            </div>
          </div>

          {/* Col 3: Social & Verified Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Live Profiles
            </h4>
            
            <div className="flex flex-col space-y-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub: Suresh6655</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode Profile</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Suresh Yadav. All rights reserved. Built with React & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
