export interface NavLink {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface Deployment {
  title: string;
  location: string;
  metric: string;
  description: string;
}

export interface TechPipelineStep {
  step: string;
  label: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug?: string;
}

export interface OpenPosition {
  title: string;
  location: string;
  type: string;
  department: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
