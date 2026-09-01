import { ContactInfo, Project, ExperienceItem, EducationItem, CertificationItem, SkillCategory } from '../types';

export const personalInfo: ContactInfo = {
  name: "Suresh Yadav",
  headline: "Full Stack Developer | B.Tech CSE Student",
  supportingLine: "DSA & Problem-Solving Enthusiast",
  intro: "I am a Computer Science & Engineering student and Full Stack Developer fresher passionate about building real-world web applications, solving Data Structures & Algorithms problems, and continuously improving my software engineering skills.",
  email: "Sureshydv6655@gmail.com",
  phone: "+9779824745924",
  whatsapp: "+9779824745924",
  location: "Panipat, Haryana, India / Nepal",
  university: "Geeta University, Panipat, Haryana, India",
  degree: "B.Tech – Computer Science & Engineering",
  status: "Open to software engineering internships and fresher opportunities",
  githubUrl: "https://github.com/Suresh6655",
  linkedinUrl: "https://www.linkedin.com/in/suresh-yadav-089b35336/",
  leetcodeUrl: "https://leetcode.com/u/SureshYadav4545/",
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    iconName: "Layout",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "React.js", level: "Intermediate", tag: "Library" },
      { name: "JavaScript (ES6+)", level: "Proficient", tag: "Core" },
      { name: "HTML5 & Semantic Web", level: "Proficient", tag: "Core" },
      { name: "CSS3 & Modern Layouts", level: "Proficient", tag: "Core" },
      { name: "Tailwind CSS", level: "Proficient", tag: "Styling" },
      { name: "Responsive Web Design", level: "Proficient", tag: "UI/UX" },
      { name: "DOM Manipulation", level: "Proficient", tag: "Core" },
    ],
  },
  {
    category: "Backend Development",
    iconName: "Server",
    description: "Creating REST APIs and server-side application logic",
    skills: [
      { name: "Node.js", level: "Intermediate", tag: "Runtime" },
      { name: "Express.js", level: "Intermediate", tag: "Framework" },
      { name: "RESTful API Design", level: "Intermediate", tag: "Architecture" },
      { name: "Server-side Routing", level: "Intermediate", tag: "Backend" },
      { name: "Middleware Integration", level: "Intermediate", tag: "Backend" },
      { name: "API Testing & Postman", level: "Proficient", tag: "Testing" },
    ],
  },
  {
    category: "Programming Languages",
    iconName: "Code2",
    description: "Core languages for software engineering and problem solving",
    skills: [
      { name: "JavaScript", level: "Proficient", tag: "Language" },
      { name: "C++", level: "Intermediate", tag: "DSA & Core" },
      { name: "C Language", level: "Intermediate", tag: "Fundamentals" },
      { name: "TypeScript", level: "Intermediate", tag: "Modern JS" },
      { name: "Python Basics", level: "Foundational", tag: "Scripting" },
    ],
  },
  {
    category: "Databases & Storage",
    iconName: "Database",
    description: "Relational and document storage fundamentals",
    skills: [
      { name: "MongoDB", level: "Intermediate", tag: "NoSQL" },
      { name: "SQL / MySQL Basics", level: "Intermediate", tag: "RDBMS" },
      { name: "CRUD Operations", level: "Proficient", tag: "Database" },
      { name: "Database Schema Design", level: "Intermediate", tag: "Modeling" },
    ],
  },
  {
    category: "Developer Tools & Platforms",
    iconName: "Wrench",
    description: "Standard engineering workflows, version control, and tooling",
    skills: [
      { name: "Git", level: "Proficient", tag: "VCS" },
      { name: "GitHub & Version Control", level: "Proficient", tag: "Collaboration" },
      { name: "VS Code", level: "Proficient", tag: "Editor" },
      { name: "Postman", level: "Intermediate", tag: "API Testing" },
      { name: "Vite & npm", level: "Proficient", tag: "Build Tools" },
      { name: "GitHub Pages / Deployment", level: "Proficient", tag: "DevOps" },
    ],
  },
  {
    category: "Core CS & DSA",
    iconName: "Binary",
    description: "Foundational computer science principles and algorithmic problem solving",
    skills: [
      { name: "Data Structures (Arrays, Linked Lists, Stacks, Queues, Trees)", level: "Intermediate", tag: "DSA" },
      { name: "Algorithms (Searching, Sorting, Recursion, Two Pointers)", level: "Intermediate", tag: "DSA" },
      { name: "Object-Oriented Programming (OOP)", level: "Intermediate", tag: "Core CS" },
      { name: "Database Management Systems (DBMS)", level: "Intermediate", tag: "Core CS" },
      { name: "Operating Systems Basics", level: "Foundational", tag: "Core CS" },
      { name: "Computer Networks Basics", level: "Foundational", tag: "Core CS" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "mathematics-calculator",
    title: "Mathematics Scientific & Standard Calculator",
    category: "utility",
    subtitle: "Interactive mathematical computation web app with dynamic UI & precision parsing",
    description: "A fast, responsive mathematical calculator application designed for comprehensive arithmetic, trigonometric, and scientific calculations with high numerical precision and an intuitive glassmorphic interface.",
    problemSolved: "Standard basic web calculators often struggle with operator precedence, decimal edge cases, and keyboard accessibility. This tool implements custom expression evaluation, parenthesis nesting support, and responsive layouts across all device form factors.",
    features: [
      "Scientific & Standard calculation modes with real-time expression evaluation",
      "Full keyboard event listeners with instant visual key feedback",
      "Calculation history logging with one-click recall functionality",
      "Robust error handling preventing division by zero and invalid syntax crashes",
      "Adaptive mobile-first layout optimized for touch and mouse interactions"
    ],
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM API", "GitHub Pages"],
    githubUrl: "https://github.com/Suresh6655/Mathematics-Calculator",
    liveUrl: "https://suresh6655.github.io/Mathematics-Calculator/",
    featured: true,
    metrics: "100% Client-Side • Sub-millisecond Execution • Production Live Demo"
  },
  {
    id: "mern-task-management",
    title: "Full-Stack Task & Student Workflow Manager",
    category: "fullstack",
    subtitle: "MERN Stack CRUD web application with RESTful API endpoints & state tracking",
    description: "A full-stack workflow management portal for students and developers to organize coursework, track project milestones, and manage tasks with priority tagging and status progression.",
    problemSolved: "Helps learners and developer teams maintain clarity on daily assignments and project deliverables through structured category boards and automated state persistence.",
    features: [
      "RESTful API backend powered by Express and Node.js with secure route handling",
      "Complete CRUD capabilities (Create, Read, Update, Delete) with MongoDB persistence",
      "Dynamic filtering by priority (Low, Medium, High) and status (Pending, In Progress, Done)",
      "Interactive responsive UI built with React components and modular state hooks",
      "Input sanitation and validation middleware for data consistency"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/Suresh6655",
    liveUrl: "https://suresh6655.github.io/Mathematics-Calculator/",
    featured: true,
    metrics: "MERN Architecture • Modular REST Endpoints • Scalable Schema"
  },
  {
    id: "dsa-problem-tracker",
    title: "DSA Problem-Solving & Pattern Explorer",
    category: "dsa",
    subtitle: "Interactive technical interview preparation and pattern-tracking tool",
    description: "A developer tool for cataloging and categorizing Data Structures & Algorithms questions solved across LeetCode and competitive programming platforms, grouped by foundational patterns.",
    problemSolved: "Organizes problem-solving intuition by tracking algorithmic patterns (Two Pointers, Sliding Window, Fast/Slow Pointers, Binary Search, Tree Traversals) alongside time and space complexity notes.",
    features: [
      "Categorized question matrix across Arrays, Strings, Trees, and Sorting",
      "Time (Big-O) and Space complexity quick reference cards",
      "Personal code notes and approach breakdowns for interview revision",
      "Direct integration links to problem statements on LeetCode"
    ],
    technologies: ["JavaScript", "React", "Tailwind CSS", "DSA Fundamentals"],
    githubUrl: "https://github.com/Suresh6655",
    featured: false,
    metrics: "150+ Problems Logged • Algorithmic Pattern Mapping"
  },
  {
    id: "dev-portfolio-platform",
    title: "Modern Engineering Portfolio & Profile Showcase",
    category: "frontend",
    subtitle: "High-performance recruiter-ready web application with interactive ATS resume generator",
    description: "A bespoke, performance-focused personal portfolio engineered with React, Tailwind CSS, and Motion, featuring clean architectural layouts, verified contact pipelines, and recruiter-focused credentials.",
    problemSolved: "Presents an authentic, transparent technical profile for a B.Tech fresher, highlighting real project repositories, live demos, verifiable training experience, and academic rigor.",
    features: [
      "Dynamic project filtering and detailed modal inspection view",
      "Interactive ATS-formatted resume viewer with dedicated print-to-PDF styles",
      "Direct verified links to GitHub, LinkedIn, LeetCode, Email, and WhatsApp",
      "Accessible dark engineering theme with WCAG AA compliance"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    githubUrl: "https://github.com/Suresh6655",
    liveUrl: "https://suresh6655.github.io/Mathematics-Calculator/",
    featured: false,
    metrics: "100/100 Lighthouse Performance Target • Clean TypeScript Architecture"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "birat-global-academy",
    role: "Frontend Trainer",
    organization: "Birat Global Academy",
    location: "Biratnagar, Nepal",
    type: "Teaching & Mentorship",
    period: "Training & Academic Instruction",
    description: "Conducted hands-on training sessions introducing students and beginner developers to modern frontend web development technologies, responsive design principles, and structured coding practices.",
    responsibilities: [
      "Delivered structured lectures and hands-on laboratory sessions on HTML5, CSS3, and modern JavaScript fundamentals.",
      "Mentored students through building real-world practical web projects, reinforcing clean code organization and semantic markup.",
      "Guided learners on debugging techniques, browser developer tools, and responsive layouts across varied screen sizes.",
      "Assisted students with understanding DOM manipulation, event-driven programming, and foundational problem solving."
    ],
    skillsGained: [
      "Technical Mentorship",
      "Frontend Architecture",
      "HTML5 / CSS3 / JavaScript",
      "Pedagogy & Communication",
      "Code Review & Debugging"
    ]
  },
  {
    id: "ocean-institute",
    role: "Computer Trainer",
    organization: "Ocean Institute",
    location: "Academic Training Center",
    type: "Instructor & Technical Guide",
    period: "Technical Instruction",
    description: "Provided fundamental computer science and practical software application training to batches of aspiring students, focusing on computer fundamentals, programming basics, and digital literacy.",
    responsibilities: [
      "Taught foundational computer application concepts, operating system navigation, and structured problem-solving basics.",
      "Instructed students on office productivity tools, computer hardware/software workflows, and practical keyboard mastery.",
      "Designed practice assignments and practical evaluation tests to assess learner comprehension and hands-on skill development.",
      "Fostered an encouraging, interactive classroom environment that motivated students to explore programming and software engineering."
    ],
    skillsGained: [
      "Computer Fundamentals",
      "Instructional Delivery",
      "Curriculum Planning",
      "Student Evaluation",
      "Technical Communication"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Geeta University",
    location: "Panipat, Haryana, India",
    period: "Undergraduate Degree Program",
    status: "Pursuing / Active Student",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP with C++/Java)",
      "Database Management Systems (DBMS & SQL)",
      "Operating Systems & Process Management",
      "Computer Networks & Internet Protocols",
      "Web Technologies & Software Engineering"
    ],
    highlights: [
      "Active focus on full-stack web development and core computer science fundamentals.",
      "Regular participant in DSA problem-solving sessions and technical coding challenges.",
      "Building practical hands-on software projects alongside rigorous academic curriculum."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-fullstack",
    title: "Full Stack Web Development Training",
    issuer: "Technical Training & Practical Development Program",
    date: "Completed Certification",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Node.js", "REST APIs"],
    verificationUrl: "https://github.com/Suresh6655"
  },
  {
    id: "cert-frontend-mentorship",
    title: "Frontend Development & Teaching Certification",
    issuer: "Birat Global Academy",
    date: "Instructor Recognition",
    skills: ["Technical Mentorship", "Frontend Essentials", "DOM API", "Responsive Web Design"],
    verificationUrl: "https://github.com/Suresh6655"
  },
  {
    id: "cert-dsa-fundamentals",
    title: "Data Structures & Algorithms Problem Solving",
    issuer: "DSA & Competitive Programming Practice Track",
    date: "Self-Paced & Academic Certification",
    skills: ["Array & String Algorithms", "Time & Space Complexity", "Recursion", "Searching & Sorting"],
    verificationUrl: "https://leetcode.com/u/SureshYadav4545/"
  },
  {
    id: "cert-computer-instruction",
    title: "Computer Applications & Systems Instructor",
    issuer: "Ocean Institute",
    date: "Training Certification",
    skills: ["Computer Systems", "Software Workflow", "Digital Tools", "Pedagogy"],
    verificationUrl: "https://github.com/Suresh6655"
  }
];

export const interviewTopics = [
  {
    category: "Data Structures",
    topics: ["Arrays & Strings", "Linked Lists (Singly & Doubly)", "Stacks & Queues", "Binary Trees & BST", "Hashing & HashMaps"],
    status: "Active Practice",
    level: "Intermediate"
  },
  {
    category: "Algorithms",
    topics: ["Two Pointers Technique", "Sliding Window", "Binary Search", "Sorting (Merge, Quick)", "Recursion & Backtracking Basics"],
    status: "Active Practice",
    level: "Intermediate"
  },
  {
    category: "Object-Oriented Programming (OOP)",
    topics: ["Encapsulation & Abstraction", "Inheritance & Polymorphism", "Constructors & Destructors", "Method Overloading / Overriding"],
    status: "Solid Understanding",
    level: "Core CS"
  },
  {
    category: "DBMS & SQL",
    topics: ["ER Modeling & Normalization", "SQL CRUD & Joins", "ACID Properties & Transactions", "Indexing Fundamentals"],
    status: "Solid Understanding",
    level: "Core CS"
  },
  {
    category: "Operating Systems & Networks",
    topics: ["Processes vs Threads", "CPU Scheduling & Deadlocks", "OSI & TCP/IP Model", "HTTP/HTTPS & DNS Resolution"],
    status: "Theoretical Fundamentals",
    level: "Core CS"
  },
  {
    category: "Web Engineering",
    topics: ["Asynchronous JavaScript (Promises/Async-Await)", "Event Loop & Call Stack", "State Management & React Lifecycle", "RESTful API Conventions"],
    status: "Practical Implementation",
    level: "Hands-on"
  }
];
