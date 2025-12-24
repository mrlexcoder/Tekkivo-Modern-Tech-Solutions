
import { Product, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Templates',
    href: '#/templates',
    children: [
      {
        title: 'Popular Categories',
        items: [
          { label: 'Boilerplates', href: '#/boilerplates', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z' },
          { label: 'Landing Pages', href: '#/landing', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
          { label: 'Dashboard', href: '#/dashboards', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
          { label: 'Blogs', href: '#/blogs', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z' },
        ]
      }
    ]
  },
  { label: 'Docs', href: '#/docs' },
  { label: 'Resources', href: '#/resources' }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AI Starter Kit',
    description: 'Next.js AI Website Templates and a SaaS Starter Kit with prebuilt AI tools, auth, billing, and dashboards.',
    price: 49,
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800',
    category: 'Template',
    stack: ['Next.js', 'React'],
    features: ['Auth', 'Stripe', 'AI Integration'],
    hasAdminPanel: true,
    isPopular: true,
    subCategory: 'AI'
  },
  {
    id: '2',
    name: 'NextCommerce',
    description: 'All-in-One Next.js eCommerce Template for Online Stores. Effortlessly create and manage your online store.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Solution',
    stack: ['Next.js', 'Tailwind'],
    features: ['Sanity CMS', 'Admin Portal', 'Stripe'],
    hasAdminPanel: true,
    isPopular: true,
    subCategory: 'SaaS'
  },
  {
    id: '3',
    name: 'Horizon Property Lister',
    description: 'Complete Real Estate platform with advanced search and full Admin Panel.',
    price: 199,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Solution',
    stack: ['Laravel', 'Vue.js'],
    features: ['Admin Dashboard', 'Map Integration'],
    hasAdminPanel: true,
    isPopular: false,
    subCategory: 'Software'
  },
  {
    id: '4',
    name: 'Lumina WordPress Blog',
    description: 'High-performance WordPress theme for modern digital publishers.',
    price: 29,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    category: 'Template',
    stack: ['WordPress', 'PHP'],
    features: ['Elementor Support'],
    hasAdminPanel: true,
    isPopular: false,
    subCategory: 'Blog'
  },
  {
    id: '5',
    name: 'Base SaaS Boilerplate',
    description: 'The foundation for your next multi-tenant SaaS application.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Template',
    stack: ['Next.js', 'Tailwind'],
    features: ['Multi-tenant', 'Auth'],
    hasAdminPanel: false,
    isPopular: true,
    subCategory: 'Boilerplate'
  },
  {
    id: '6',
    name: 'Agency Portfolio Pro',
    description: 'Sleek and professional agency portfolio to showcase your best work.',
    price: 39,
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=800',
    category: 'Template',
    stack: ['React', 'Next.js'],
    features: ['Framer Motion'],
    hasAdminPanel: false,
    isPopular: false,
    subCategory: 'Portfolio'
  }
];

export const CATEGORIES = [
  { name: 'SaaS', count: 14 },
  { name: 'Starter', count: 13 },
  { name: 'Startup', count: 12 },
  { name: 'Software', count: 12 },
  { name: 'Business', count: 9 },
  { name: 'Boilerplate', count: 8 },
  { name: 'Landing Page', count: 7 },
  { name: 'Blog', count: 7 },
  { name: 'Portfolio', count: 3 },
  { name: 'AI', count: 2 },
];
