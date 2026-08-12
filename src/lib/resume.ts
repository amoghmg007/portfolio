export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "LLM / Agents" | "SLM / Models" | "Fintech / Systems" | "WebSockets / Realtime" | "Optimization" | "AI Avatars";
  period?: string;
  tags: string[];
  description: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
  highlight?: string;
  github?: string;
  demo?: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: { name: string; level?: string; badge?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  coursework?: string[];
  honors?: string[];
}

export const RESUME_DATA = {
  personal: {
    name: "Amogh M G",
    tagline: "AI / ML Engineer & Systems Builder",
    heroHeadline: "Building Next-Gen AI Agents & Language Models",
    location: "Bangalore, India",
    email: "amogh7365@gmail.com",
    phone: "+91-8217801592",
    linkedin: "https://linkedin.com/in/amogh-m-g",
    github: "https://github.com/amoghmg007",
    resumeUrl: "/Amogh_MG_Resume.docx",
    summary:
      "AI/ML engineering student and builder with hands-on experience shipping end-to-end AI products across LLM agents, custom language models, and fintech systems. Built 8 production-style projects, including a reverse-learning platform, a from-scratch small language model, and a post-fraud financial recovery platform. Formerly appointed to the IEEE Student Council, where I led technical workshops for 100+ students. Seeking the AI Builder Intern role to ship real AI agent and automation products in a fast-moving, high-impact environment.",
  },
  stats: [
    { label: "Production Projects", value: "8+", note: "End-to-End AI Products" },
    { label: "Students Mentored", value: "100+", note: "IEEE Technical Workshops" },
    { label: "Hackathon Standing", value: "Finalist", note: "Code Red — BMSIT 2024" },
    { label: "IEEE Appointment", value: "1st Year", note: "Youngest Executive Member" },
  ],
  skillGroups: [
    {
      category: "Languages",
      iconName: "Code",
      skills: [
        { name: "Python", level: "Advanced", badge: "Core" },
        { name: "Java", level: "Intermediate" },
        { name: "C", level: "Intermediate" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      category: "AI / ML & NLP",
      iconName: "Cpu",
      skills: [
        { name: "LLM Agents", badge: "Specialty" },
        { name: "RAG Systems", badge: "Specialty" },
        { name: "LangChain" },
        { name: "Transformers / PyTorch", badge: "Deep Learning" },
        { name: "NLP & Tokenization" },
        { name: "Computer Vision (OpenCV)" },
        { name: "Prompt Engineering" },
        { name: "ML Algorithms" },
      ],
    },
    {
      category: "Backend & Data Engines",
      iconName: "Database",
      skills: [
        { name: "FastAPI", badge: "Core Backend" },
        { name: "REST API Design" },
        { name: "WebSockets", badge: "Real-time" },
        { name: "MongoDB" },
        { name: "MySQL / SQLite" },
        { name: "Pandas / NumPy" },
      ],
    },
    {
      category: "Frontend & Tooling",
      iconName: "Terminal",
      skills: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Streamlit" },
        { name: "Git & GitHub" },
        { name: "Google Colab / Jupyter" },
        { name: "VS Code / Linux CLI" },
      ],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: "mirai",
      title: "Mirai — Reverse-Learning Platform",
      subtitle: "AI-Powered Adaptive Learning & Code Automation Engine",
      category: "LLM / Agents",
      tags: ["Python", "NLP", "Transformers", "LangChain", "FastAPI", "SQLite"],
      description:
        "Built an innovative learning platform where users build first and receive explanations afterward, completely reversing the traditional learn-then-build flow.",
      bullets: [
        "Engineered core modules for concept decomposition, mistake detection, adaptive guidance, code generation, and task automation.",
        "Reduced repetitive user actions by modeling behavioral patterns and surfacing predictive suggestions.",
        "Utilized LangChain and custom prompt chains for context-aware code feedback and task decomposition.",
      ],
      metrics: [
        { label: "Flow Paradigm", value: "Build-First" },
        { label: "Latency", value: "<150ms API" },
      ],
      highlight: "Featured Project",
      github: "https://github.com/amoghmg007",
    },
    {
      id: "slm-toolkit",
      title: "SLM Toolkit — Custom Small Language Model",
      subtitle: "From-Scratch Transformer Architecture & Tokenizer",
      category: "SLM / Models",
      tags: ["Python", "PyTorch", "Transformers", "Tokenization", "Google Colab"],
      description:
        "Engineered a small language model entirely from scratch—designing architecture, custom BPE tokenizer, and training pipeline instead of wrapping third-party APIs.",
      bullets: [
        "Built custom multi-head self-attention layers, positional embeddings, and training loop using PyTorch.",
        "Implemented tokenizer, fine-tuning, and evaluation workflows to benchmark against baseline open-source models.",
        "Optimized memory efficiency during training for local and Colab GPU execution.",
      ],
      metrics: [
        { label: "Architecture", value: "Custom Transformer" },
        { label: "Tokenizer", value: "BPE Custom" },
      ],
      highlight: "Core Deep Learning",
      github: "https://github.com/amoghmg007",
    },
    {
      id: "payguard",
      title: "PayGuard — Post-Fraud Financial Recovery",
      subtitle: "Automated Fintech Dispute & UPI Scam Workflow Engine",
      category: "Fintech / Systems",
      tags: ["Python", "FastAPI", "MySQL", "Streamlit", "Pandas"],
      description:
        "Developed an automated fintech recovery platform guiding victims through post-fraud actions and UPI scam resolution.",
      bullets: [
        "Designed a fraud analysis engine and state machine for legal & bank compliance workflows.",
        "Automated victim document drafting, bank dispute generation, and cybercrime reporting steps.",
        "Built a real-time compliance tracking and status dashboard using Streamlit & Pandas.",
      ],
      metrics: [
        { label: "Workflow Type", value: "State Machine" },
        { label: "Target Sector", value: "Fintech / Cybercrime" },
      ],
      github: "https://github.com/amoghmg007",
    },
    {
      id: "bodhi",
      title: "Bodhi — AI Consultant Platform with Digital Twin",
      subtitle: "Real-time Expert Discovery & Live WebSockets Engine",
      category: "WebSockets / Realtime",
      tags: ["Python", "FastAPI", "MongoDB", "React", "Tailwind CSS", "WebSockets"],
      description:
        "Created a real-time consultant-discovery platform connecting clients with verified domain experts via dynamic AI digital twins.",
      bullets: [
        "Built a real-time digital twin per consultant covering skills graph, availability scheduling, and AI agent interaction.",
        "Implemented smart-matching algorithm and live availability engine powered by WebSockets.",
        "Designed responsive frontend interface with React, Tailwind CSS, and instant messaging status.",
      ],
      metrics: [
        { label: "Protocols", value: "WebSockets / REST" },
        { label: "State Sync", value: "Real-time Twin" },
      ],
      github: "https://github.com/amoghmg007",
    },
    {
      id: "smart-logistics",
      title: "Smart Logistics & Optimization System",
      subtitle: "Intelligent Route Planning & Dynamic Resource Allocation",
      category: "Optimization",
      tags: ["Python", "OR-Tools", "FastAPI", "Leaflet.js", "MySQL"],
      description:
        "Designed an intelligent logistics engine for fleet route optimization and dynamic resource allocation.",
      bullets: [
        "Applied Google OR-Tools and shortest-path load-balancing algorithms to minimize travel cost.",
        "Built interactive map visualizations and vehicle telemetry interfaces using Leaflet.js.",
        "Exposed high-throughput REST APIs for vehicle dispatch and delivery scheduling.",
      ],
      metrics: [
        { label: "Engine", value: "Google OR-Tools" },
        { label: "Mapping", value: "Leaflet GIS" },
      ],
      github: "https://github.com/amoghmg007",
    },
    {
      id: "nocode-avatar",
      title: "No-Code Platform with AI-Driven Avatar",
      subtitle: "Interactive Visual Builder & AI Persona Engine",
      category: "AI Avatars",
      tags: ["Python", "AI Avatar Engine", "Computer Vision", "FastAPI"],
      description:
        "Designed and shipped a no-code web platform featuring interactive, real-time AI avatars.",
      bullets: [
        "Finalist at Code Red Hackathon — BMSIT Bangalore (2024).",
        "Integrated AI avatar animation with real-time audio lip-sync and dialogue synthesis.",
        "Designed visual drag-and-drop workflow canvas for non-technical users.",
      ],
      metrics: [
        { label: "Recognition", value: "Hackathon Finalist" },
        { label: "Venue", value: "BMSIT Bangalore" },
      ],
      highlight: "Hackathon Finalist",
      github: "https://github.com/amoghmg007",
    },
  ] as Project[],

  education: [
    {
      degree: "B.E. — Artificial Intelligence & Machine Learning",
      institution: "Brindavan College of Engineering",
      location: "Bangalore, India",
      period: "2024 – 2028 (Expected)",
      details:
        "Focused on foundational AI architectures, deep learning pipelines, algorithms, and practical software engineering.",
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Database Systems",
      ],
      honors: ["Appointed to IEEE Executive Committee in First Year (Youngest on Record)"],
    },
    {
      degree: "Pre-University (PCMC — Physics, Chemistry, Math, Computer Science)",
      institution: "Shakti Pre-University College",
      location: "Mangalore, India",
      period: "2022 – 2024",
      details: "Rigorous pre-engineering foundation in computer science and mathematics.",
    },
  ] as EducationItem[],

  leadership: [
    {
      id: "ieee-council",
      role: "Appointed Member — IEEE Student Council",
      organization: "Brindavan College of Engineering",
      period: "2024",
      location: "Bangalore, India",
      description:
        "Appointed to the IEEE Executive Committee as a first-year student—the youngest member on record.",
      bullets: [
        "Led 5+ hands-on technical workshops and hackathon preparation sessions for 100+ students.",
        "Coordinated cross-team student initiatives across AI, software engineering, and competitive coding.",
        "Organized industry outreach events bridging tech professionals with the student community.",
      ],
      badge: "Executive Committee",
    },
    {
      id: "code-red",
      role: "Hackathon Finalist — Code Red 2024",
      organization: "BMSIT Bangalore",
      period: "2024",
      location: "Bangalore, India",
      description:
        "Selected as Finalist for building a No-Code Web Builder with interactive AI Avatars under 24-hour hackathon constraints.",
      bullets: [
        "Pitched to senior engineering judges and demonstrated real-time avatar dialogue generation.",
        "Ranked among top finalist teams out of nationwide student entries.",
      ],
      badge: "Finalist",
    },
  ] as ExperienceItem[],
};
