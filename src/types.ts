export interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'utility' | 'dsa';
  subtitle: string;
  description: string;
  problemSolved: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  period: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  coursework: string[];
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  verificationUrl?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Foundational' | 'Intermediate' | 'Proficient';
    tag?: string;
  }[];
}

export interface ContactInfo {
  name: string;
  headline: string;
  supportingLine: string;
  intro: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  university: string;
  degree: string;
  status: string;
  githubUrl: string;
  linkedinUrl: string;
  leetcodeUrl: string;
}
