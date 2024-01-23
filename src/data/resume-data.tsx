import {
  ClevertechLogo,
  ConsultlyLogo,
  ThironaIcon,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nicola Brazzale",
  initials: "NB",
  location: "Arnhem, the Netherlands",
  locationLink: "https://www.google.com/maps/place/Arnhem",
  about:
    "Deep Learning Engineer - I multiply large matrices on GPUs for a living",
  summary:
    "",
  avatarUrl: "https://github.com/brazzalenicola.png",
  personalWebsiteUrl: "",
  contact: {
    email: "brazzalenicola@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/brazzalenicola",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicola-brazzale-266313221/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/brazzalenicola",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Aalto University",
      degree: "MSc Machine Learning, Data Science and Artificial Intelligence",
      start: "2020",
      end: "2022",
    },
    {
      school: "Univeristy of Padua",
      degree: "BSc in Computer Engineering",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ThironaIcon,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Aalto University - Machine Learnign for Health (ML4H) research group",
      link: "https://clevertech.biz",
      title: "Research Assistant",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "I conducted research on the comparison of Vision Transformers with traditional CNNs for X-Rays classification. I evaluated various datasets and techniques to improve training efficiency and analyzed the impact of data augmentation on final performance.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "Tensorflow",
    "C++",
    "OpenCV",
    "Keras",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
  ],
} as const;
