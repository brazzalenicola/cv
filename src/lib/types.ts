export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  role: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    description?: string;
    start: string;
    end: string;
  }>;
  work: Array<{
    company: string;
    link: string;
    logo?: string;
    title: string;
    start: string;
    end: string | null;
    badges: readonly string[];
    general_description?: string;
    description: string | readonly string[];
    highlights?: readonly string[];
  }>;
  skillGroups: Array<{
    title: string;
    items: readonly string[];
  }>;
  projects: Array<{
    title: string;
    techStack: readonly string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
}
