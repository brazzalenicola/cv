import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Nicola Brazzale",
  initials: "NB",
  location: "Arnhem, the Netherlands",
  locationLink: "https://www.google.com/maps/place/Arnhem",
  role: "Deep Learning Research Engineer",
  about: "I multiply large matrices on GPUs for a living",
  summary:
    "Ambitious Deep Learning Engineer with a track record of delivering end-to-end ML solutions from research to production. I enjoy working in mission-oriented, interdisciplinary teams and approach difficult problems with curiosity, persistence, and a strong work ethic. My work combines model development, experimentation, pipeline engineering, and production deployment, mostly in medical AI and regulated environments. I value direct communication, collaboration, and the kind of rigorous thinking that turns promising ideas into reliable systems.",
  avatarUrl: "https://github.com/brazzalenicola.png",
  personalWebsiteUrl: "",
  contact: {
    email: "brazzalenicola@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/brazzalenicola",
        icon: "github" as const,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicola-brazzale-266313221/",
        icon: "linkedin" as const,
      },
      {
        name: "X",
        url: "https://twitter.com/brazzalenicola",
        icon: "x" as const,
      },
    ],
  },
  education: [
    {
      school: "Aalto University",
      degree: "MSc in Machine Learning, Data Science and Artificial Intelligence",
      description:
        "Major: Machine Learning: Advanced Probabilistic Methods, Bayesian Data Analysis, Gaussian Processes, Deep Learning, Kernel Methods, Computer Vision, and Data Mining. Bioinformatics minor: Computational Genomics, Machine Learning for bioinformatics, AI in health technologies, and Medical Image Analysis. Electives: Linear and non-linear optimisation.",
      start: "2020",
      end: "2022",
    },
    {
      school: "University of Padua",
      degree: "BSc in Computer Engineering",
      description:
        "Relevant courses: Algorithms and Data Structures, Database Management Systems, Optimisation, Artificial Intelligence, Embedded System Programming, and Computer Networks.",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
      {

    company: "Thirona",

    link: "https://thirona.eu",

    logo: "/logos/thirona.svg",

    title: "Senior Deep Learning Engineer",

    start: "2026",

    end: "Present",

    badges: [],

    general_description:

      "In my current role, I combine hands-on deep learning work with technical guidance, planning, and mentoring. I help the team make sound technical decisions, evaluate promising ideas, and turn research work into reliable algorithm releases.",

    description: [

      "Act as technical point of contact for deep learning, supporting model design decisions, reviewing technical work, and helping junior engineers grow into effective contributors.",

      "Lead small PoCs and experiments to assess new tools and methods, with a focus on whether they are useful, maintainable, and worth adopting in practice.",

      "Coordinate algorithm releases by translating stakeholder needs into technical scope, planning the work, and surfacing risks early through experiments and validation.",

      "Help bridge research and production by improving how models are evaluated, documented, exported, and integrated into production systems.",

    ],

  },

  {

    company: "Thirona",

    link: "https://thirona.eu",

    logo: "/logos/thirona.svg",

    title: "Deep Learning Engineer",

    start: "2023",

    end: "2026",

    badges: [],

    general_description:

      "In this role, I worked across the full lifecycle of deep learning projects in medical imaging: understanding the problem, shaping the data and experiments, developing models, evaluating them carefully, and helping bring them into production.",

    description: [

      "Developed deep learning models for 3D medical image segmentation and classification, balancing model performance with robustness and production constraints.",

      "Owned project workflows from data preparation and experimentation to training, evaluation, inference, and integration with production systems.",

      "Built and maintained reusable ML pipelines that supported model development, evaluation, and deployment across multiple projects.",

      "Improved model reliability through careful validation, failure analysis, uncertainty estimation, and iterative refinement of models and pipelines.",

    ],

  },
    {
      company: "Aalto University – ML4H Research Group",
      link: "https://users.ics.aalto.fi/~pemartti/",
      title: "Research Assistant",
      start: "2021",
      end: "2022",
      badges: [],
      general_description: "",
      description: [
        "Conducted research on the comparison of ViTs and traditional CNNs for Chest X-Ray classification. Pre-trained a miniGPT model on a large corpus of radiology reports and fine-tuned it with visual features extracted from X-Rays to build a lightweight vision-language model.",
        "Evaluated multiple datasets and data augmentation strategies to analyse their effect on model efficiency and diagnostic performance.",
      ],
    },
  ],
  skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Keras", "Git", "Docker"],
  skills_good_knowledge: ["ITK", "Jenkins", "SQL"],
  skills_basic_knowledge: ["Julia", "Java", "C++", "R", "Matlab"],
  projects: [
    {
      title: "Artery-Vein Phenotyping – AVX",
      techStack: ["UNets", "CNNs", "TensorFlow", "Docker"],
      description:
        "A medical imaging project focused on artery-vein segmentation and biomarker extraction. I contributed to training, inference, evaluation, and practical model improvements, including normalization strategies, metrics, and loss functions for more robust anatomical segmentation.",
      link: {
        label: "thirona.eu",
        href: "https://thirona.eu/avx/",
      },
    },
    {
      title: "Lobes and Fissures Segmentation",
      techStack: ["UNets", "CNNs", "TensorFlow", "Docker", "Evidential Deep Learning"],
      description:
        "A production-oriented medical imaging project focused on segmenting pulmonary lobes and fissures in CT scans. The work involved model development, preprocessing, evaluation, and improving the reliability of the system. I also introduced evidential deep learning to estimate uncertainty and help identify low-confidence outputs.",
      link: {
        label: "thirona.eu",
        href: "https://thirona.eu/",
      },
    },
    {
      title: "Multi-modal Chest X-Ray Analysis",
      techStack: ["PyTorch", "Lightning", "Weights & Biases"],
      description:
        "A research project exploring self-supervised learning and lightweight vision-language modeling for chest X-ray analysis. I used Barlow Twins pre-training to improve downstream classification and experimented with conditioning a small GPT-style language model on visual features from X-rays. The project was especially useful for understanding the gap between a promising idea and a model that actually learns the desired cross-modal relationship.",
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/chestXray-ssl",
      },
    },
    {
      title: "Older University Projects",
      techStack: ["PyTorch", "TensorFlow", "GANs", "RNNs", "CNNs", "Matlab"],
      description:
        "A collection of academic and side projects covering signal and image classification tasks — including ECG arrhythmia detection, lymphoma subtype classification, and EEG seizure classification. See GitHub for details.",
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola",
      },
    },
  ],
} as const;

