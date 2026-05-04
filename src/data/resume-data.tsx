import {
  ClevertechLogo,
  ConsultlyLogo,
  ThironaIcon,
  MonitoLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nicola Brazzale",
  initials: "NB",
  location: "Arnhem, the Netherlands",
  locationLink: "https://www.google.com/maps/place/Arnhem",
  role: "Senior Deep Learning Engineer",
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
      description: "Major's courses: Machine Learning: Advanced Probabilistic Methods, Bayesian Data Analysis, Gaussian Processes, Deep Learning, Kernel Methods, Computer Vision, and Data Mining,  AI in health technologies and Medical Image Analysis. Bioinformatic minor's courses: Computational Genomics, Machine Learning for bioinformatics, AI in health technologies, and Medical Image Analysis. Elective courses: Linear optimisation and non-linear optimisation",
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
      title: "Senior Deep Learning Engineer",
      logo: ThironaIcon,
      start: "2023",
      end: "Present",
    general_description: "Joined as Deep Learning Engineer in 2023 and promoted to Senior Deep Learning Engineer in January 2024. I lead research and development of deep learning models for 3D volumetric image analysis, owning work across the full ML lifecycle in a production environment.",
    description: [
      "Research, design, and develop deep learning architectures (CNNs, UNets) for segmentation and classification tasks on 3D volumetric data.",
      "Build and maintain scalable end-to-end ML pipelines covering data ingestion, preprocessing, training, inference, and evaluation.",
      "Drive systematic experimentation and ablation studies to validate architectural choices and model improvements.",
      "Optimise models for production deployment, reducing inference latency and improving robustness and reliability at scale.",
      "Define and refine quantitative metrics and output biomarkers to ensure precise and actionable results for clients.",
      "Collaborate cross-functionally with software engineers, and domain experts in a regulated, quality-controlled environment."
    ]
    },
    {
      company: "Aalto University - Machine Learning for Health (ML4H) research group",
      link: "https://users.ics.aalto.fi/~pemartti/",
      title: "Research Assistant",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      general_description:"",
      description:[
        "Conducted research on the comparison of ViTs and traditional CNNs for Chest X-Ray classification. Pretrained [miniGPT](https://github.com/karpathy/minGPT) on a large corpus of radiology reports and fine-tuned it with visual features extracted from X-Rays to build a lightweight vision-language model.",
        "Evaluated multiple datasets and data augmentation strategies to analyze their effect on model efficiency and diagnostic performance."
      ]
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "Tensorflow",
    "OpenCV",
    "Keras",
    "GIT",
    "Docker",
  ],

  skills_good_knowledge: ["ITK", "Jenkins", "SQL"],
  skills_basic_knowledge: ["Julia", "Java", "C++", "R", "Matlab"],
  projects: [
    {
      title: "Artery-Vein Phenotyping - AVX",
      techStack: ["UNets","CNNs", "Tensorflow", "Docker"],
      description: "I contributed to the artery-vein segmentation module by researching practical improvements. I designed and implemented parts of the pipeline, such as the training, inference and evaluation pipeline, and through literature research explored different normalization techniques, new metrics, and new loss functions to accurately segment anatomical structures, thereby obtaining predictions that conformed to our requirements. In addition, I refined the calculation of biomarkers to ensure to provide clients with highly precise and informative measurements regarding vessels.",
      logo: ThironaIcon,
      link: {
        label: "thirona",
        href: "https://thirona.eu/avx/",
      },
    },
    {
      title: "Lobe and Fissure Segmentation",
      techStack: ["UNets", "CNNs", "Tensorflow", "Docker", "Evidential Deep Learning"],
      description: "Redesigned and extended the fissure segmentation module into a joint lobe and fissure segmentation system. Achieved significant improvements in both inference speed and segmentation accuracy through architectural and preprocessing enhancements. Introduced evidential deep learning to produce calibrated uncertainty estimates alongside predictions; these confidence signals are used in production to flag low-quality outputs and inform downstream decision-making, ensuring results consistently meet quality requirements before delivery.",
      logo: ThironaIcon,
      link: {
        label: "thirona",
        href: "https://thirona.eu/",
      },
    },
    {
      title: "Multi-modal Chest X-Ray analysis using self-supervised learning",
      techStack: [
        "Master Thesis",
        "Shell scripting",
        "High-performance Cluster",
        "PyTorch",
        "Lightning AI",
        "Weights&Biases"
      ],
      description: "Improved downstream classification performance via self-supervised pre-training with BarlowTwins on large unlabeled X-Ray datasets. A GPT-based model was then fine-tuned with extracted visual features to generate radiology-style reports from X-rays.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/chestXray-ssl",
      },
    },
    {
      title: "Older university projects",
      techStack: ["PyTorch", "Tensorflow", "GANs", "RNNs", "CNNs", "Matlab"],
      description: "A collection of academic and side projects covering signal and image classification tasks — including ECG arrhythmia detection, lymphoma subtype classification, and EEG seizure classification. See GitHub for details.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola",
      },
    },

  ],
} as const;
