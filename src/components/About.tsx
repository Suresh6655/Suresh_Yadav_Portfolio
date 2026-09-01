import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Brain, 
  Terminal, 
  Compass, 
  Sparkles, 
  CheckCircle2,
  Users,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: "Academic Background",
      description: "Pursuing B.Tech in Computer Science & Engineering at Geeta University, Panipat, Haryana with rigorous coursework in algorithms, operating systems, and DBMS."
    },
    {
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: "Full-Stack Development",
      description: "Hands-on experience building dynamic web apps using React, JavaScript (ES6+), Node.js, Express, Tailwind CSS, and RESTful APIs with clean modular architecture."
    },
    {
      icon: <Brain className="w-5 h-5 text-amber-400" />,
      title: "DSA & Analytical Thinking",
      description: "Consistent problem solver practicing Data Structures and Algorithms in C++ & JavaScript on LeetCode, with focus on time & space complexity optimization."
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Teaching & Mentorship",
      description: "Trained students as Frontend Trainer at Birat Global Academy and Computer Trainer at Ocean Institute, honing clear technical communication and debugging guidance."
    }
  ];

  const values = [
    {
      title: "Clean, Maintainable Code",
      desc: "Writing readable, well-structured, and documented code that follows industry best practices and modular standards."
    },
    {
      title: "Continuous Learner",
      desc: "Passionate about exploring modern frameworks, solving new algorithmic patterns, and rapidly picking up new toolchains."
    },
    {
      title: "Collaborative Team Player",
      desc: "Values constructive feedback, open technical communication, Git-based workflows, and shared engineering goals."
    },
    {
      title: "Engineering Fundamentals",
      desc: "Deep respect for core CS concepts—memory efficiency, OOP principles, relational database design, and protocol basics."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>01 // Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Suresh Yadav
          </h2>
          <p className="text-slate-400 text-base">
            An authentic look into my journey as a Computer Science student, builder, and aspiring Software Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Passionate Builder & Lifelong Learner
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am currently a B.Tech Computer Science & Engineering student at <strong className="text-slate-100 font-semibold">Geeta University</strong> in Panipat, Haryana. My passion lies in transforming theoretical computer science principles into robust, responsive, and user-centric web applications.
                </p>
                <p>
                  From the start of my engineering education, I have emphasized a balanced approach: mastering core fundamentals like <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-800">Data Structures & Algorithms</span> in C++ and JavaScript, while simultaneously gaining practical, hands-on experience building full-stack applications with <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-800">React.js, Node.js, Express</span>, and modern CSS frameworks.
                </p>
                <p>
                  In addition to independent development, I have had the privilege of instructing and mentoring students as a <strong className="text-slate-200">Frontend Trainer at Birat Global Academy</strong> and as a <strong className="text-slate-200">Computer Trainer at Ocean Institute</strong>. These experiences strengthened my ability to explain complex technical concepts with clarity, debug code systematically, and cultivate patience.
                </p>
                <p>
                  I am actively seeking <strong className="text-cyan-400">Software Engineering Internships and Full-Stack Developer Fresher opportunities</strong> where I can contribute to meaningful engineering projects, collaborate with experienced engineers, and continuously elevate my craftsmanship.
                </p>
              </div>

              {/* Ready for hire summary bar */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Immediate Availability for Internships & Graduate Roles</span>
                </div>
                <div className="text-slate-400 font-mono">
                  Location: Panipat / Relocatable
                </div>
              </div>
            </div>

            {/* Core Engineering Mindset */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800/70 p-4 rounded-xl space-y-1.5 hover:border-slate-700 transition-colors">
                  <div className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-cyan-400" />
                    {v.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Quick Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 font-mono tracking-tight mb-2">
              Engineering Profile Highlights
            </h3>

            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 hover:border-cyan-800/60 hover:bg-slate-900 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700/80 group-hover:border-cyan-500/50 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick stats panel */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-900/30 rounded-xl p-5 shadow-lg space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Quick Snapshot
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-800">
                  <div className="text-xl font-extrabold text-white">B.Tech</div>
                  <div className="text-[11px] text-slate-400">CSE Undergraduate</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-800">
                  <div className="text-xl font-extrabold text-cyan-400">150+</div>
                  <div className="text-[11px] text-slate-400">DSA Questions Practiced</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-800">
                  <div className="text-xl font-extrabold text-blue-400">2</div>
                  <div className="text-[11px] text-slate-400">Trainer Roles Held</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-800">
                  <div className="text-xl font-extrabold text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400">Hands-on Focus</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
