export interface Project {
  id: number;
  name: string;
  cat: string;
  img: string;
  desc: string;
  wood: string;
  time: string;
  size: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface ProcessStep {
  numeral: string;
  title: string;
  desc: string;
}
