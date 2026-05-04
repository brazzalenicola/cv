import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Nicola Brazzale",
  initials: "NB",
  location: "Arnhem, the Netherlands",
  locationLink: "https://www.google.com/maps/place/Arnhem",
  role: "Deep Learning Research Engineer",
  about: "I multiply large matrices on GPUs for a living",
  summary:
    "Ambitious Deep Learning Engineer with a track record of delivering end-to-end ML solutions from research to production. I thrive in mission-oriented, interdisciplinary teams and believe that any challenge can be overcome through dedication and a strong work ethic. I bring hands-on experience in model development, scalable pipeline engineering, and deploying systems in production and regulated environments. I value direct communication and collaboration as core strengths.",
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
      title: "Senior Deep Learning Engineer",
      start: "2023",
      end: null,
      badges: [],
      general_description:
        "Joined as Deep Learning Engineer in 2023 and promoted to Senior Deep Learning Engineer in January 2024. I lead research and development of deep learning models for 3D volumetric image analysis, owning work across the full ML lifecycle in a production environment.",
      description: [
        "Research, design, and develop deep learning architectures (CNNs, UNets) for segmentation and classification tasks on 3D volumetric data.",
        "Own the end-to-end ML lifecycle for allocated projects — from data collection and annotation to model training, evaluation, and initial integration into production systems.",
        "Drive systematic experimentation and ablation studies to validate architectural choices and model improvements.",
        "Optimise models for production deployment, reducing inference latency and improving robustness and reliability at scale.",
        "Serve as technical point of contact for deep learning within the team, advising on design decisions and evaluating emerging technologies for adoption.",
        "Define the scope and planning of algorithm releases, coordinating delivery across engineering teams from stakeholder requirements to shipped features.",
        "Support and mentor Deep Learning Engineers in the design and development of new algorithm features; reflect on research project status and surface technical risks early.",
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
        "Contributed to the artery-vein segmentation module by researching practical improvements. Designed and implemented parts of the pipeline — including training, inference and evaluation — and explored different normalisation techniques, new metrics, and loss functions to accurately segment anatomical structures. Refined biomarker calculations to provide clients with precise and informative vascular measurements.",
      link: {
        label: "thirona.eu",
        href: "https://thirona.eu/avx/",
      },
    },
    {
      title: "Lobes and Fissures Segmentation",
      techStack: ["UNets", "CNNs", "TensorFlow", "Docker", "Evidential Deep Learning"],
      description:
        "Involved in the research and development of two segmentation models: one for pulmonary lobes and one for fissures. Achieved significant improvements in both inference speed and segmentation accuracy through architectural and preprocessing enhancements. Introduced evidential deep learning to produce calibrated uncertainty estimates; these confidence signals are used in production to flag low-quality outputs and inform downstream decision-making.",
      link: {
        label: "thirona.eu",
        href: "https://thirona.eu/",
      },
    },
    {
      title: "Multi-modal Chest X-Ray Analysis",
      techStack: ["Master Thesis", "PyTorch", "Lightning AI", "Weights & Biases", "HPC"],
      description:
        "Improved downstream classification performance via self-supervised pre-training with BarlowTwins on large unlabeled X-Ray datasets. A GPT-based model was then fine-tuned with extracted visual features to generate radiology-style reports from X-rays.",
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

