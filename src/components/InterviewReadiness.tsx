import React, { useState } from 'react';
import { 
  Binary, 
  Code2, 
  CheckCircle, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Target, 
  Sparkles, 
  Check, 
  Activity,
  Terminal,
  Zap
} from 'lucide-react';
import { interviewTopics, personalInfo } from '../data/portfolioData';

export const InterviewReadiness: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dsa' | 'core_cs' | 'methodology'>('dsa');

  const problemSolvingSteps = [
    {
      step: "01",
      title: "Problem Clarification & Constraints",
      desc: "Carefully analyze problem constraints, input data boundaries, and identify potential edge cases (empty arrays, negative values, integer overflows)."
    },
    {
      step: "02",
      title: "Algorithmic Pattern Recognition",
      desc: "Map the challenge to known patterns (Two Pointers, Sliding Window, Fast/Slow Pointers, Hash Mapping, BFS/DFS, Binary Search)."
    },
    {
      step: "03",
      title: "Big-O Time & Space Tradeoffs",
      desc: "Formulate an initial baseline and then engineer optimal time (e.g. O(N) or O(N log N)) and auxiliary space complexity solutions."
    },
    {
      step: "04",
      title: "Dry Run & Clean Modular Coding",
      desc: "Trace manual test cases on paper before translating logic into clean, readable C++ or JavaScript code with descriptive variable naming."
    }
  ];

  return (
    <section id="interview-readiness" className="py-20 bg-slate-900/50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>07 // Technical Preparation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DSA & Interview Readiness
          </h2>
          <p className="text-slate-400 text-base">
            Systematic preparation across Data Structures, Algorithmic patterns, and Core Computer Science fundamentals for technical interviews.
          </p>
        </div>

        {/* LeetCode & Practice Spotlight Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-800/60 text-amber-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    LeetCode Problem-Solving Profile
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Handle: @SureshYadav4545 • Continuous Practice
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Actively practicing algorithmic problem-solving in C++ and JavaScript. Focusing on fundamental data structures, pattern identification, and achieving optimal time/space complexities.
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                  ⚡ Arrays & Hashing
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                  ⚡ Two Pointers & Sliding Window
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                  ⚡ Binary Search
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                  ⚡ Linked Lists & Trees
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 justify-center">
              <a
                href={personalInfo.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="interview-leetcode-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-900/20 transition-all cursor-pointer"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <span>View DSA Repositories</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl gap-1">
            <button
              onClick={() => setActiveTab('dsa')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'dsa'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              DSA Topics Matrix
            </button>
            <button
              onClick={() => setActiveTab('core_cs')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'core_cs'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Core CS Foundations
            </button>
            <button
              onClick={() => setActiveTab('methodology')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'methodology'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Problem-Solving Framework
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        {activeTab === 'dsa' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {interviewTopics.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">
                    {item.category}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                    {item.status}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'core_cs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {interviewTopics.slice(2, 6).map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">
                    {item.category}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/60">
                    {item.level}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'methodology' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
            {problemSolvingSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-md"
              >
                <span className="text-2xl font-black font-mono text-cyan-400">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
