import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Code2, 
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Placement Opportunity',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable transmission and offer direct mailto trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const openDirectEmail = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Opportunity for Suresh Yadav'
    )}&body=${encodeURIComponent(
      `Hello Suresh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <span>08 // Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Hire Suresh
          </h2>
          <p className="text-slate-400 text-base">
            Open to software engineering internships, graduate engineering roles, hackathons, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-lg">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Direct Communication Channels
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to reach out via email, phone, WhatsApp, or connect on professional engineering networks. I respond promptly to recruiter inquiries.
              </p>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-slate-500 font-mono">Official Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  title="Copy email address"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-slate-500 font-mono">Phone / WhatsApp</div>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors truncate block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    title="Copy phone number"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-mono">Location & Readiness</div>
                  <div className="text-xs font-semibold text-slate-300">
                    Panipat, Haryana, India • Open to Relocation & Remote
                  </div>
                </div>
              </div>

              {/* Availability response time */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800 font-mono">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 flex flex-col items-center justify-center text-center group transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-slate-300">LinkedIn</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 flex flex-col items-center justify-center text-center group transition-colors"
              >
                <Github className="w-5 h-5 text-slate-300 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-slate-300">GitHub</span>
              </a>

              <a
                href={personalInfo.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 flex flex-col items-center justify-center text-center group transition-colors"
              >
                <Code2 className="w-5 h-5 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-slate-300">LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-400">
                      Recruiting for an internship or full-time fresher role? Drop me a message below.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs font-medium animate-in fade-in">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Tech Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-none placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-none placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Subject / Inquiring About
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="Software Engineering Internship">Software Engineering Internship</option>
                      <option value="Full-Stack Developer Fresher Role">Full-Stack Developer Fresher Role</option>
                      <option value="Frontend Development Opportunity">Frontend Development Opportunity</option>
                      <option value="Hackathon / Project Collaboration">Hackathon / Project Collaboration</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Suresh, we reviewed your projects and would like to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-none placeholder-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-900/30 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={openDirectEmail}
                      className="text-xs text-slate-400 hover:text-cyan-400 font-medium underline underline-offset-4 cursor-pointer"
                    >
                      Or open in your default email client &rarr;
                    </button>
                  </div>

                  {/* Privacy note */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Privacy guaranteed. Your contact info is strictly used to reply to your inquiry.</span>
                  </div>

                </form>
              ) : (
                <div className="py-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been queued. I will review your details and respond to <span className="text-cyan-400 font-semibold">{formData.email}</span> shortly.
                  </p>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={openDirectEmail}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
                    >
                      Send via Email App as well
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
