import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Send, 
  Github, 
  Linkedin, 
  Code2, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink,
  Mail,
  Phone,
  Layers,
  Terminal
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import defaultAvatar from '../assets/images/ChatGPT Image Sep 1, 2026, 11_11_38 AM.png';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [profileImgSrc, setProfileImgSrc] = useState(defaultAvatar);
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImgSrc(event.target.result as string);
          setImgError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background glow and subtle tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Mobile Profile Photo Placement (Top on small screens) */}
          <div className="lg:hidden flex justify-center order-1">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
                {!imgError ? (
                  <img
                    src={profileImgSrc}
                    alt="Suresh Yadav — Full Stack Developer and B.Tech CSE Student"
                    className="w-full h-full object-cover object-[50%_18%] rounded-full scale-110"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-800 flex flex-col items-center justify-center text-cyan-400 font-bold">
                    <span className="text-4xl">SY</span>
                    <span className="text-xs text-slate-400 mt-1">Suresh Yadav</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-medium tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Eyebrow & Main Headings */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-wider uppercase flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-cyan-400 inline" />
                Hi, I'm Suresh Yadav
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Full Stack Developer <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                  | B.Tech CSE Student
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-cyan-300/90 font-mono tracking-tight">
                {personalInfo.supportingLine}
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.intro}
            </p>

            {/* Key credentials bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-slate-300 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Geeta University (B.Tech CSE)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Panipat, Haryana / Nepal
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                id="hero-view-projects-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-900/30 transition-all cursor-pointer hover:shadow-cyan-500/25 active:scale-95"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer shadow-md active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Download Resume
              </button>

              <button
                onClick={() => scrollTo('contact')}
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4 text-slate-400" />
                Contact Me
              </button>
            </div>

            {/* Social Links & Live Profiles */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-center lg:justify-start gap-2">
                <span>Verified Profiles & Live Channels</span>
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition-all group cursor-pointer"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 transition-all group cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400" />
                </a>

                <a
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-leetcode-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 transition-all group cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors" />
                  <span>LeetCode</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  id="hero-email-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition-all group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Circular Profile Image & Interactive Tech Card on Desktop */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Outer decorative orbit / ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-xl animate-pulse" />
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-80 group-hover:opacity-100 transition duration-300" />
                
                {/* Circular Profile Container */}
                <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full p-1.5 bg-slate-900 border-2 border-slate-800 shadow-2xl overflow-hidden">
                  {!imgError ? (
                    <img
                      src={profileImgSrc}
                      alt="Suresh Yadav — Full Stack Developer and B.Tech CSE Student"
                      className="w-full h-full object-cover object-[50%_18%] rounded-full transition-transform duration-500 scale-125 group-hover:scale-130"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-slate-800 flex flex-col items-center justify-center text-cyan-400 font-bold">
                      <span className="text-6xl">SY</span>
                      <span className="text-sm text-slate-400 mt-2 font-mono">Suresh Yadav</span>
                      <span className="text-xs text-slate-500">B.Tech CSE</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Engineering Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-700 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full-Stack Fresher</div>
                  <div className="text-[11px] text-slate-400 font-mono">React • Node • C++</div>
                </div>
              </div>

              {/* Floating Engineering Badge 2 */}
              <div className="absolute -top-3 -right-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div className="text-xs font-semibold text-slate-200">
                  DSA & Problem Solving
                </div>
              </div>
            </div>

            {/* Quick Photo update helper */}
            <div className="mt-8 text-center">
              <label className="text-[11px] text-slate-400 hover:text-cyan-400 cursor-pointer inline-flex items-center gap-1.5 transition-colors">
                <span>🔄 Change / Refresh Profile Photo</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleCustomPhotoUpload} 
                  className="hidden" 
                />
              </label>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
