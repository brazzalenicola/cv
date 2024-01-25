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
      general_description: "As a deep learning engineer, I focused on cutting-edge research and development of segmentation modules for chest ct scans. My work revolves around two significant projects:",
      description:[
        "AVX - Artery Vein Segmentation Module: Contributed in the research and development of the AVX module for pulmonary hypertension research. Executed experiments to validate concepts and measure progress. Subsequently, refined biomarkers, measurements characterizing the segmented vessels, enhancing their precision and contributing to the overall advancement of the module.",
        "Fissure Segmentation and Classification: Contributed to improving the efficiency and inference time of the fissure segmentation module. This module identifies and classifies lobe fissures as complete or gapped. Implemented enhancements for quicker and more precise analysis, crucial for assessing collateral ventilation in patients."
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
      description:
        "I conducted research on the comparison of Vision Transformers with traditional CNNs for Chest X-Rays classification. I evaluated various datasets and techniques to improve training efficiency and analyzed the impact of data augmentation on final performance.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "Tensorflow",
    "OpenCV",
    "Keras",
  ],

  skills_good_knowledge: ["Matlab", "R", "C++", "GIT", "Docker"],
  skills_basic_knowledge: ["Julia", "Java", "SQL", "Jenkins"],
  projects: [
    {
      title: "Artery-Vein Phenotyping - AVX",
      techStack: ["UNets","CNNs", "Tensorflow", "Docker"],
      description: "I contributed to the artery-vein segmentation module by researching practical improvements. I explored new loss functions to accurately segment anatomical structures and ensure connected predictions, and I experimented with different normalization techniques better suited to our requirements. In addition, I refined the calculation of biomarkers to ensure to provide clients with highly precise and informative measurements regarding vessels.",
      logo: ThironaIcon,
      link: {
        label: "thirona",
        href: "https://thirona.eu/avx/",
      },
    },
    {
      title: "Fissure Segmentation and Classification",
      techStack: ["UNets","CNNs", "Tensorflow", "Docker", "Evidential Deep Learning"],
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
