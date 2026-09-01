import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code2,
  FileText,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo, skillsData, experienceData, educationData, projectsData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainTextResume = () => {
    const text = `
======================================================
SURESH YADAV — FULL STACK DEVELOPER | B.TECH CSE
======================================================
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.githubUrl}
LinkedIn: ${personalInfo.linkedinUrl}
LeetCode: ${personalInfo.leetcodeUrl}

EDUCATION:
------------------------------------------------------
Bachelor of Technology (B.Tech) in Computer Science & Engineering
Geeta University, Panipat, Haryana, India
Status: Active Undergraduate / Fresher

TECHNICAL SKILLS:
------------------------------------------------------
• Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design
• Backend: Node.js, Express.js, RESTful APIs, Middleware, Server Routing
• Languages: JavaScript, C++, C, TypeScript, Python Basics
• Databases: MongoDB, SQL/MySQL Basics, CRUD Design
• Tools: Git, GitHub, VS Code, Postman, Vite, npm
• Core CS: Data Structures & Algorithms, OOP, DBMS, OS & Computer Networks Basics

PRACTICAL EXPERIENCE / TRAINING:
------------------------------------------------------
1. Frontend Trainer — Birat Global Academy
   • Conducted hands-on instruction in HTML5, CSS3, and JavaScript fundamentals.
   • Mentored learners on building real-world practical web projects and debugging.

2. Computer Trainer — Ocean Institute
   • Instructed batches of students in foundational computing, programming basics, and office workflows.

KEY PROJECTS:
------------------------------------------------------
1. Mathematics Scientific & Standard Calculator
   Live: https://suresh6655.github.io/Mathematics-Calculator/
   GitHub: https://github.com/Suresh6655/Mathematics-Calculator
   • Engineered scientific computation web application with real-time expression parsing.

2. Full-Stack Task & Student Workflow Manager (MERN)
   GitHub: https://github.com/Suresh6655
   • Developed full-stack CRUD application with Express API and MongoDB persistence.

CERTIFICATIONS:
------------------------------------------------------
• Full Stack Web Development Training
• Frontend Development & Teaching Certification (Birat Global Academy)
• Data Structures & Algorithms Problem Solving Track
• Computer Applications Instructor (Ocean Institute)
======================================================
`;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="no-print p-4 sm:px-6 border-b border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              ATS-Optimized Resume Viewer — Suresh Yadav
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-modal-print-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 shadow-sm cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={copyPlainTextResume}
              id="resume-modal-copy-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              id="resume-modal-close-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 resume-sheet font-sans space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              SURESH YADAV
            </h1>
            <p className="text-sm font-semibold text-cyan-700 tracking-wide mt-0.5">
              Full Stack Developer | B.Tech Computer Science & Engineering Student | DSA Enthusiast
            </p>
            
            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <strong>Email:</strong> {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <strong>Phone:</strong> {personalInfo.phone}
              </span>
              <span>•</span>
              <span><strong>Location:</strong> Panipat, Haryana, India</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-blue-700 mt-1 font-mono">
              <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="underline">
                github.com/Suresh6655
              </a>
              <span>•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="underline">
                linkedin.com/in/suresh-yadav-089b35336
              </a>
              <span>•</span>
              <a href={personalInfo.leetcodeUrl} target="_blank" rel="noreferrer" className="underline">
                leetcode.com/u/SureshYadav4545
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed pt-1">
              Computer Science & Engineering student and Full Stack Developer fresher with hands-on proficiency in modern JavaScript (ES6+), React.js, Node.js, Express.js, and C++. Solid foundation in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems. Proven pedagogical experience training students in frontend web development and computer fundamentals. Dedicated to building reliable, user-focused software solutions and eager to contribute to high-impact engineering teams.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              EDUCATION
            </h2>
            <div className="pt-1 flex justify-between items-baseline">
              <div>
                <span className="text-xs font-bold text-slate-900">Geeta University</span> — <span className="text-xs text-slate-700">Panipat, Haryana, India</span>
                <div className="text-xs text-slate-800 italic">Bachelor of Technology (B.Tech) in Computer Science & Engineering</div>
              </div>
              <span className="text-xs font-mono text-slate-600">Pursuing / Undergraduate</span>
            </div>
            <p className="text-[11px] text-slate-600 pt-0.5">
              <strong>Core Modules:</strong> Data Structures & Algorithms, DBMS, Object-Oriented Programming (C++/Java), Operating Systems, Computer Networks, Web Technologies.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 gap-1 text-xs text-slate-800 pt-1">
              <div><strong>Programming Languages:</strong> JavaScript (ES6+), C++, C, TypeScript, Python (Basics)</div>
              <div><strong>Frontend Development:</strong> React.js, HTML5, CSS3, Tailwind CSS, DOM API, Responsive UI Design</div>
              <div><strong>Backend & APIs:</strong> Node.js, Express.js, RESTful API Design, Middleware, Server Routing</div>
              <div><strong>Databases:</strong> MongoDB, SQL / MySQL Fundamentals, Schema Modeling</div>
              <div><strong>Developer Tools:</strong> Git, GitHub, VS Code, Postman, Vite, npm, GitHub Pages</div>
              <div><strong>Core Computer Science:</strong> Data Structures & Algorithms, OOPs, DBMS, OS & Networking Principles</div>
            </div>
          </div>

          {/* Practical Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              PRACTICAL TRAINING & MENTORSHIP EXPERIENCE
            </h2>
            
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-xs font-bold text-slate-900">Frontend Trainer</span> — <span className="text-xs text-slate-700">Birat Global Academy</span>
                </div>
                <span className="text-xs font-mono text-slate-600">Academic Instruction</span>
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-700 space-y-0.5 pl-1">
                <li>Delivered structured lectures and hands-on laboratory sessions on HTML5, CSS3, and JavaScript essentials.</li>
                <li>Mentored students through building real-world practical web projects, reinforcing clean code organization and semantic markup.</li>
                <li>Guided learners on browser debugging techniques, developer tools, and responsive layouts across varied screen sizes.</li>
              </ul>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-xs font-bold text-slate-900">Computer Trainer</span> — <span className="text-xs text-slate-700">Ocean Institute</span>
                </div>
                <span className="text-xs font-mono text-slate-600">Technical Instruction</span>
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-700 space-y-0.5 pl-1">
                <li>Taught foundational computer application concepts, operating system navigation, and structured problem-solving basics.</li>
                <li>Instructed students on software workflows, digital productivity tools, and practical keyboard mastery.</li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              KEY TECHNICAL PROJECTS
            </h2>

            <div className="space-y-1 pt-1">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-900">Mathematics Scientific & Standard Calculator</span>
                <span className="text-[11px] font-mono text-blue-700">
                  <a href="https://suresh6655.github.io/Mathematics-Calculator/" target="_blank" rel="noreferrer" className="underline">Live Demo</a> | <a href="https://github.com/Suresh6655/Mathematics-Calculator" target="_blank" rel="noreferrer" className="underline">GitHub</a>
                </span>
              </div>
              <div className="text-[11px] text-slate-600 font-mono">Tech Stack: JavaScript (ES6+), HTML5, CSS3, DOM API, GitHub Pages</div>
              <p className="text-[11px] text-slate-700">
                • Built a fast, responsive mathematical calculator application designed for comprehensive arithmetic, trigonometric, and scientific calculations with high numerical precision, operator precedence parsing, and full keyboard interaction.
              </p>
            </div>

            <div className="space-y-1 pt-1">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-900">Full-Stack Task & Student Workflow Manager (MERN)</span>
                <span className="text-[11px] font-mono text-blue-700">
                  <a href="https://github.com/Suresh6655" target="_blank" rel="noreferrer" className="underline">GitHub Repository</a>
                </span>
              </div>
              <div className="text-[11px] text-slate-600 font-mono">Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs</div>
              <p className="text-[11px] text-slate-700">
                • Developed full-stack workflow application with secure REST API endpoints, full CRUD persistence in MongoDB, and dynamic status/priority filtering.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              CERTIFICATIONS & RECOGNITION
            </h2>
            <ul className="list-disc list-inside text-[11px] text-slate-700 space-y-0.5 pt-1 pl-1">
              <li>Full Stack Web Development Certification — Technical Training & Development Program</li>
              <li>Frontend Development & Teaching Certification — Birat Global Academy</li>
              <li>Data Structures & Algorithms Problem Solving Track — Self-Paced & Academic Certification</li>
              <li>Computer Applications & Systems Instructor — Ocean Institute</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
