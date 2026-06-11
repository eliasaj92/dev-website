export type Project = {
  name: string;
  url: string;
  stage: "Live" | "Early access" | "In development";
  focus: string;
  description: string;
  tags: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export type Education = {
  school: string;
  credential: string;
  detail: string;
};

export const profile = {
  name: "Elias Abou Jaoude",
  location: "Beirut, Lebanon",
  email: "eliasaboujaoude92@gmail.com",
  linkedin: "https://www.linkedin.com/in/elias-abou-jaoude/",
  github: "https://github.com/eliasaj92",
  resume: "/Elias-Abou-Jaoude-Resume.pdf",
  headline:
    "Software engineer building production systems and useful products across healthcare access, creator commerce, and AI-assisted job search.",
  summary:
    "I work across backend systems, product engineering, and pragmatic infrastructure. Most recently, I was an SDE at Amazon Prime Video, where I helped build and operate encoding orchestration systems processing tens of thousands of workflows daily. Since Amazon, I have been actively building public products: Dr. Ordo, PIE, and HiredSignal.",
};

export const projects: Project[] = [
  {
    name: "HiredSignal",
    url: "https://hiredsignal.com/",
    stage: "Live",
    focus: "AI-assisted job search",
    description:
      "A job board that re-verifies every listing daily and ranks the freshest roles first. Plain-English vector search, source-attributed links, and an MCP server plus API so AI agents can search too. Works for job seekers, never employers.",
    tags: ["Vector search", "MCP server", "Daily re-verified", "Chrome extension"],
  },
  {
    name: "PIE",
    url: "https://pieapp.io/",
    stage: "Early access",
    focus: "Creator commerce",
    description:
      "A creator platform that gamifies and boosts audience engagement while promoting influencers' affiliate products through storefronts, cashback, and quests.",
    tags: ["Influencer storefronts", "Cashback", "Quests & loyalty", "Affiliate networks"],
  },
  {
    name: "Dr. Ordo",
    url: "https://www.drordo.com/",
    stage: "In development",
    focus: "Healthcare access",
    description:
      "Modern healthcare access for Lebanon - one place to find the right practitioner, book appointments in seconds, and keep a medical history that follows the patient from visit to visit. Built to replace scattered phone calls and paper files with care that just works.",
    tags: ["Built for Lebanon", "Appointment booking", "Health records"],
  },
];

export const experience: Experience[] = [
  {
    company: "Amazon",
    role: "Software Development Engineer",
    location: "Toronto, Canada",
    period: "Jan 2022 - Aug 2025",
    highlights: [
      "Worked on the Prime Video Encoding Orchestration team.",
      "Designed and implemented a DAG-based orchestration system to improve scalability and process reuse.",
      "Refactored monolithic branching workflows into simpler linear workflows, reducing remediation time from hours to minutes.",
      "Participated in cross-functional delivery and on-call operations for production systems.",
    ],
  },
  {
    company: "Morgan Stanley",
    role: "C#/WPF Developer, Associate",
    location: "Montreal, Canada",
    period: "Jun 2021 - Jan 2022",
    highlights: [
      "Built desktop applications supporting Fixed Income and FX products.",
      "Worked with C#, MVVM architecture, object-oriented design patterns, and globally distributed teams.",
    ],
  },
  {
    company: "IVeS Inc.",
    role: "Front-End Developer",
    location: "Montreal, Canada",
    period: "Feb 2020 - Jun 2021",
    highlights: [
      "Built client-side applications for accessibility software for deaf and hard-of-hearing users.",
      "Led development of a UWP app in C# on the Microsoft Store with more than 1,000 downloads.",
    ],
  },
  {
    company: "Megaphone",
    role: "Full Stack Developer, Contract",
    location: "Beirut, Lebanon",
    period: "May 2019 - Oct 2019",
    highlights: [
      "Architected megaphone.news for a Lebanese media activist group.",
      "Built the front end with React and integrated a headless WordPress CMS backend.",
    ],
  },
  {
    company: "Seez-App S.A.L",
    role: "Backend and Machine Learning Developer",
    location: "Beirut, Lebanon",
    period: "Jun 2017 - Mar 2019",
    highlights: [
      "Built Python microservices supporting machine learning features.",
      "Worked on gradient boosting for price prediction and NLP models for chatbot functionality.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & frameworks",
    items: ["Java", "Spring Boot", "Python", "TypeScript", "React", "C#"],
  },
  {
    title: "Systems & data",
    items: ["System design", "Microservices", "Workflow orchestration", "PostgreSQL", "DynamoDB", "Headless CMS"],
  },
  {
    title: "AWS & infrastructure",
    items: ["Lambda", "ECS", "Step Functions", "SQS", "SNS", "CloudWatch", "Infrastructure as code (CDK)", "Docker", "CI/CD"],
  },
  {
    title: "Engineering practices",
    items: ["Testing", "Code review", "On-call operations", "Cross-functional delivery", "Accessibility"],
  },
];

export const education: Education[] = [
  {
    school: "Imperial College London",
    credential: "MSc Biomedical Engineering",
    detail: "Graduated with merit, Oct 2016",
  },
  {
    school: "American University of Beirut",
    credential: "BE Computer Engineering",
    detail: "Minor in Mathematics, May 2015",
  },
  {
    school: "American University of Beirut",
    credential: "BE Chemistry",
    detail: "Graduated with distinction, May 2015",
  },
];

export const certifications = ["AWS Certified Developer - Associate, Amazon Web Services, Sep 2025"];

export const languages = [
  "English, French, Arabic - fluent",
  "German, Spanish, Romanian - conversational",
];
