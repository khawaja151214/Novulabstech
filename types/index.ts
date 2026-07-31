export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface WhyUsItem {
  num: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface IndustryItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface TechStackItem {
  icon: string;
  name: string;
}

export interface PortfolioItem {
  img: string;
  tags: string;
  title: string;
  desc: string;
  tech: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface InquiryFormData {
  full_name: string;
  work_email: string;
  service_needed: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
