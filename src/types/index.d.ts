// src/types/index.d.ts

export type Skill = {
  category: string;
  technologies: string;
};

export type Project = {
  title: string;
  link: string;
  description?: string;
  links?: { label: string; href: string }[];
  youtube?: { id: string; title: string };
  techStack?: {
    backend?: string[];
    frontend?: string[];
    orm?: string[];
    database?: string[];
    authentication?: string[];
    migrations?: string[];
    validation?: string[];
    developmentTools?: string[];
    skills?: string[];
    packageManager?: string[];
  };
};