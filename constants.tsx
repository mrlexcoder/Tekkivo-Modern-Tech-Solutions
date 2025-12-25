
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
    name: 'React Material Admin Full',
    description: 'React Material-UI Admin & Dashboard Template',
    price: 0,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Template',
    stack: ['React'],
    features: ['Material UI', 'Admin Panel'],
    hasAdminPanel: true,
    isPopular: true,
    subCategory: 'React'
  },
  {
    id: '2',
    name: 'React Native Starter',
    description: 'Mobile Application Template built with React Native',
    price: 49,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    category: 'Template',
    stack: ['React'],
    features: ['React Native', 'Mobile Ready'],
    hasAdminPanel: false,
    isPopular: true,
    subCategory: 'React Native'
  },
  {
    id: '3',
    name: 'Vue Material Admin',
    description: 'Clean and modern Vue.js admin dashboard.',
    price: 0,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Template',
    stack: ['Vue.js'],
    features: ['Vuex', 'Vuetify'],
    hasAdminPanel: true,
    isPopular: false,
    subCategory: 'Vue'
  },
  {
    id: '4',
    name: 'Sing App Laravel',
    description: 'PHP Laravel Admin & Dashboard Kit',
    price: 149,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Solution',
    stack: ['Laravel', 'PHP'],
    features: ['Backend Ready'],
    hasAdminPanel: true,
    isPopular: false,
    subCategory: 'Bootstrap'
  }
];

export const PILL_TAGS = [
  'All Themes', 'React', 'Sofia', 'Flatlogic', 'Transparent', 'Classic', 'Material', 'Vue', 'Angular', 'Free', 'React Native', 'Premium', 'Admin Dashboards', 'Bootstrap', 'Nodejs'
];

export const FRAMEWORK_FILTERS = [
  { name: 'React', count: 14 },
  { name: 'Vue', count: 6 },
  { name: 'Angular', count: 5 },
  { name: 'React-native', count: 1 },
  { name: 'Bootstrap', count: 3 },
];

export const DESIGN_FILTERS = [
  { name: 'Sofia', count: 2 },
  { name: 'Flatlogic', count: 5 },
];
