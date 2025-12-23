
export type TechStack = 'Next.js' | 'React' | 'WordPress' | 'Vue.js' | 'PHP' | 'Laravel' | 'Tailwind';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Template' | 'Premium Solution';
  stack: TechStack[];
  features: string[];
  hasAdminPanel: boolean;
  isPopular?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: {
    title: string;
    items: { label: string; href: string; icon?: string }[];
  }[];
}
