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
  role: "Deep Learning Engineer",
  about: "I multiply large matrices on GPUs for a living",
  summary:
    "I am an ambitious person with a great interest in interdisciplinary and mission-oriented companies. I believe in my objectives and that any task can be achieved through dedication and a strong work ethic. I value teamwork and being able to communicate directly and sincerely as my strengths.",
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
      degree: "MSc in Machine Learning, Data Science and Artificial Intelligence",
      description: "Major's courses: Machine Learning: Advanced Probabilistic Methods, Bayesian Data Analysis, Gaussian Processes, Deep Learning, Kernel Methods, Computer Vision, and Data Mining,  AI in health technologies and Medical Image Analysis.",
      start: "2020",
      end: "2022",
    },
    {
      school: "Univeristy of Padua",
      degree: "BSc in Computer Engineering",
      description: "Some relevant courses: Algorithms and Data Structures, Database management System, Optimisation, Artificial Intelligence, Embedded System Programming and Computer Networks.",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Thirona",
      link: "https://thirona.eu",
      badges: ["Remote"],
      title: "Deep Learning Engineer",
      logo: ThironaIcon,
      start: "2023",
      end: "2024",
      description:
        "",
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
      title: "Multi-modal Chest X-Ray analysis using self-supervised learning",
      techStack: [
        "Master Thesis",
        "Python",
        "Shell scripting",
        "High-performance Cluster",
        "Pytorch",
        "Lightning AI",
        "Weights&Biases"
      ],
      description: "We improved the downstream classification performance by conducting self-supervised pre-training using BarlowTwins on unlabeled X-Rays datasets. GPT was then utilized to generate reports based on the visual features of X-rays.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/chestXray-ssl",
      },
    },
    {
      title: "Abnormal ECG classification",
      techStack: ["Side Project", "Python", "Pytorch", "GANs", "RNNs"],
      description:
        "A project involving Recurrent and Generative Adversarial Networks for classifying abnormal heart rhythms and generating synthetic data.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/Atrial-Fibrillation",
      },
    },
    {
      title: "Long-term Epileptic EEG classification",
      techStack: ["Matlab", "Wavelet-transform", "CNNs"],
      description: "Classification of epileptic EEG records using a 2D mapping of the signal and CNNs",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/Atrial-Fibrillation",
      },
    },
  ],
} as const;
