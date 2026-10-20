import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Nicola Brazzale",
  initials: "NB",
  location: "Arnhem, the Netherlands",
  locationLink: "https://www.google.com/maps/place/Arnhem",
  role: "Deep Learning Research Engineer",
  about: "I multiply large matrices on GPUs for a living",
  summary:
    "Deep learning engineer with around four years of experience taking ML solutions from early research through to production, including a 3D segmentation pipeline that was clinically validated and is used today on real patients. I enjoy working in interdisciplinary teams on problems that matter, and I bring curiosity, persistence, and a steady work ethic to solving them. My day-to-day spans model development, evaluation, data quality, pipeline engineering, and production deployment, mostly in medical AI and regulated environments. I care about direct communication and about the kind of rigorous thinking that turns a promising idea into something people can actually rely on.",
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
      degree:
        "MSc in Machine Learning, Data Science and Artificial Intelligence",
      description:
        "Major: Machine Learning: Advanced Probabilistic Methods, Bayesian Data Analysis, Gaussian Processes, Deep Learning, Kernel Methods, Computer Vision, and Data Mining. Bioinformatics minor: Computational Genomics, Machine Learning for bioinformatics, AI in health technologies, and Medical Image Analysis. Electives: Linear and non-linear optimisation.",
      start: "2020",
      end: "2022",
    },
    {
      school: "University of Padua",
      degree: "BEng in Computer Engineering",
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
        "Define validation strategies, test sets, and quality metrics for deep learning models in FDA-cleared products, with a focus on robustness, uncertainty, edge cases, and real-world failure modes.",
        "Lead annotation efforts, translating expert requirements into labelling instructions, resolving ambiguous edge cases, and improving label quality for training and test sets.",
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
        "Built deep learning projects from scratch, from data gathering, curation, and preprocessing to training, evaluation, inference, and integration with production systems, for 3D medical image segmentation and classification.",
        "Applied evidential deep learning across two FDA-cleared production models to derive a joint confidence signal, and built a routing system on top that sends only low-confidence cases to manual review, automating roughly 80% of a previously manual workload.",
        "Converted PyTorch models to ONNX for production inference, resolving operator-compliance and mixed-precision issues, benchmarking speed/accuracy trade-offs, and verifying numerical consistency between research and deployed models.",
        "Built and maintained reusable ML pipelines that supported model development, evaluation, and deployment across multiple projects.",
        "Ran controlled experiments across preprocessing, normalization, loss functions, model variants, and uncertainty methods to improve model robustness and reliability.",
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
        "Trained a Barlow Twins self-supervised model on several TB of unlabeled chest X-ray data with domain-adapted augmentations, including dataset curation and sharding for efficient training. Fine-tuning on the learned representations improved classification AUC by roughly 0.2.",
        "Compared Vision Transformers and traditional CNNs for chest X-ray classification under different training settings.",
        "Pre-trained a character-level miniGPT model on a large corpus of unpaired radiology reports and fine-tuned it on paired visual features extracted from X-rays to build a lightweight vision-language model.",
        "Evaluated multiple datasets and data augmentation strategies to analyse their effect on model efficiency and diagnostic performance.",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Core",
      items: [
        "Deep Learning",
        "Computer Vision",
        "Model Development",
        "Model Evaluation",
        "Self-Supervised Learning",
        "Uncertainty Estimation",
        "Data Quality & Annotation",
        "Research Prototyping",
      ],
    },
    {
      title: "Stack",
      items: [
        "Python",
        "PyTorch",
        "PyTorch Lightning",
        "TensorFlow",
        "Keras",
        "MONAI",
        "OpenCV",
        "ITK",
        "NumPy",
        "Pandas",
        "scikit-learn",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Git",
        "Docker",
        "Jenkins",
        "SQL",
        "ONNX / ONNX Runtime",
        "Mixed Precision",
        "Weights & Biases",
        "Model Deployment",
        "Data Pipelines",
      ],
    },
    {
      title: "Applied Experience",
      items: [
        "Medical Imaging",
        "3D Imaging",
        "Image Processing",
        "Segmentation",
        "Classification",
      ],
    },
  ],
  projects: [
    {
      title: "Artery-Vein Phenotyping – AVX",
      techStack: ["UNets", "CNNs", "TensorFlow", "Docker"],
      description:
        "A medical imaging project focused on 3D artery-vein segmentation and biomarker extraction, which I built from scratch: data gathering and curation, training, inference, evaluation, and biomarker components. The work included normalization strategies, topology-aware loss functions, and branch-level evaluation of the vessel tree. The algorithm was clinically validated and is used in production for pulmonary hypertension patients.",
      link: {
        label: "thirona.eu",
        href: "https://thirona.eu/avx/",
      },
    },
    {
      title: "Lobes and Fissures Segmentation",
      techStack: [
        "UNets",
        "CNNs",
        "TensorFlow",
        "Docker",
        "Evidential Deep Learning",
      ],
      description:
        "A production-oriented medical imaging project focused on segmenting pulmonary lobes and fissures in CT scans, built from scratch. The work involved data preparation, model development, preprocessing, evaluation, and improving the reliability of the system. I also introduced evidential deep learning to estimate uncertainty and identify low-confidence outputs.",
      link: {
        label: "thirona.eu",
        href: "https://thirona.eu/",
      },
    },
    {
      title: "Multi-modal Chest X-Ray Analysis",
      techStack: ["PyTorch", "Lightning", "Weights & Biases"],
      description:
        "A research project exploring self-supervised learning and lightweight vision-language modeling for chest X-ray analysis. I used Barlow Twins pre-training to improve downstream classification (roughly +0.2 AUC) and experimented with conditioning a small GPT-style language model on visual features from X-rays. The project was especially useful for understanding the gap between a promising idea and a model that actually learns the desired cross-modal relationship.",
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
