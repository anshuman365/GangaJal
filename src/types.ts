export type ActivePage = 'home' | 'about' | 'quality' | 'products' | 'where-to-find-us' | 'contact';

export interface Product {
  id: string;
  nameEn: string;
  nameHi: string;
  descriptionEn: string;
  descriptionHi: string;
  mrp: number;
  highlight: string;
  image: string;
  features: string[];
  ctaText: string;
}

export interface Stat {
  value: string;
  labelEn: string;
  labelHi: string;
}

export interface TimelineStep {
  step: number;
  titleHi: string;
  titleEn: string;
  descriptionHi: string;
  descriptionEn: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}
