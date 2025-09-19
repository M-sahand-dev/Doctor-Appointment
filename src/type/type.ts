import type { IconType } from "react-icons";

export interface NavigationItem {
  id: number;
  title: string;
  to: string;
}

export interface BenefitItem {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export interface SkillItem {
  id: number;
  image: string;
  title: string;
}

export interface Comment {
  id: number;
  name: string;
  image: string;
  distinction: number;
  date: string;
  description: string;
}

export interface Doctor {
  id: number;
  name: string;
  image: string;
  specialization: string;
  city: string;
  distinction: number;
  doctorNumber: number;
  address: string;
  description: string;
  phoneNumber: string;
  linkSite: string;
  linkInstagramAcc: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  name: string;
  image: string;
  distinction: number;
  date: string;
  description: string;
  aboutDr?: string;
}

export interface Questions {
  id: number;
  question: string;
  answer: string;
}

export interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

export interface SocialMediaLink {
  id: number;
  icon: IconType;
  to: string;
}

export interface HonorarilyUs {
  number: number;
  title: string;
}
export interface DataTiemType {
  id: number;
  time: string;
  active: boolean;
  reserv: boolean;
}
