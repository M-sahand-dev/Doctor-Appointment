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

interface Comment {
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
