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
  role: "Deep Learning Engineer",
  about: "I multiply large matrices on GPUs for a living",
  summary:
    "Ambitious person with a strong inclination towards interdisciplinary and mission-oriented companies, with a particular focus on medical AI. I believe in my objectives and that any task can be achieved through dedication and a strong work ethic. I value teamwork and being able to communicate directly and sincerely as my strengths. I have experience working in regulated environments and am proficient at handling medical images (e.g., DICOMs).",
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
      title: "Deep Learning Engineer",
      logo: ThironaIcon,
      start: "2023",
      end: "Present",
    general_description: "As a Deep Learning Engineer, I focused on the research and development of advanced segmentation modules for chest CT scans, contributing to both model innovation and clinical applicability. My work centered around these key projects:",
    description: [
      "AVX - Artery Vein Phenotyping: Contributed to the research and development of AVX for pulmonary hypertension studies. Designed and implemented end-to-end data and training pipelines, conducted experiments to validate architectural choices, and refined vessel-based biomarkers to improve quantitative precision and clinical relevance.",
      "Fissure Segmentation: Optimized the fissure segmentation module for faster and more accurate inference. The model detects and classifies pulmonary fissures as complete or gapped, supporting the assessment of collateral ventilation. Implemented architectural and preprocessing enhancements to reduce latency and improve robustness in clinical deployment."
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
      title: "Fissure Segmentation and Classification",
      techStack: ["UNets","CNNs", "Tensorflow", "Docker", "EDL - Evidential Deep Learning"],
      description: "Improved efficiency and reduced inference time of the fissure segmentation module. This module identifies and categorizes lobe fissures as complete or gapped. Implemented enhancements for faster and more precise analysis, critical for evaluating collateral ventilation in patients. Additionally, introduced evidential deep learning to estimate confidence and uncertainty in model predictions.",
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
      description: "I improved the downstream classification performance by performing self-supervised pre-training using BarlowTwins on unlabeled X-Rays datasets. GPT was then utilized to generate reports based on the visual features of X-rays.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/chestXray-ssl",
      },
    },
    {
      title: "Abnormal ECG classification",
      techStack: ["Side Project", "Pytorch", "GANs", "RNNs"],
      description:
        "A project involving Recurrent and Generative Adversarial Networks for classifying abnormal heart rhythms and generating synthetic data.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/Atrial-Fibrillation",
      },
    },
    {
      title: "Lymphoma Subtype Classification",
      techStack: ["Side Project", "CNNs", "RNNs", "Tensorflow"],
      description: "Personal project on the classification of non-Hodgkin's lymphoma subtypes using different colour spaces, CNNs, RNNs and hybrid Recurrent-Convolutional neural networks",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/LymphomaSubtypeClassifier",
      },
    },
    {
      title: "Long-term Epileptic EEG classification",
      techStack: ["Bachelor Thesis", "Matlab", "Wavelet-transform", "CNNs"],
      description: "Classification of epileptic EEG records using a 2D mapping of the signal and CNNs",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/brazzalenicola/Atrial-Fibrillation",
      },
    },

  ],
} as const;
