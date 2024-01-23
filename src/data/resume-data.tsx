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
    "I multiply large matrices on GPUs for a living",
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
      description: "We improved the classification performance by conducting self-supervised pre-training using BarlowTwins on unlabeled datasets. This set the stage for employing a pre-trained CNN in the final classification, leading to enhanced performance. GPT was then utilized to generate reports based on the visual features of X-rays.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/chestXray-ssl",
      },
    },
    {
      title: "Abnormal ECG classification",
      techStack: ["Side Project", "Python", "Pytorch"],
      description:
        "A project involving RNNs and Generative Adversarial Networks (GANs) for classifying abnormal heart rhythms and generating synthetic data.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/Atrial-Fibrillation",
      },
    },
  ],
} as const;
