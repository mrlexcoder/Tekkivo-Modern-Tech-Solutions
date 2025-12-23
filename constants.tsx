
import { Product, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Templates',
    href: '#/templates',
    children: [
      {
        title: 'By Framework',
        items: [
          { label: 'Next.js Templates', href: '#/category/nextjs' },
          { label: 'Vue.js Templates', href: '#/category/vue' },
          { label: 'WordPress Themes', href: '#/category/wordpress' },
          { label: 'PHP & Laravel', href: '#/category/php' },
        ]
      },
      {
        title: 'By Category',
        items: [
          { label: 'SaaS & Tech', href: '#/category/saas' },
          { label: 'Corporate', href: '#/category/corporate' },
          { label: 'Portfolio', href: '#/category/portfolio' },
          { label: 'Landing Pages', href: '#/category/landing' },
        ]
      }
    ]
  },
  {
    label: 'Premium Solutions',
    href: '#/solutions',
    children: [
      {
        title: 'Full Stack Sites',
        items: [
          { label: 'E-commerce (with Admin)', href: '#/premium/ecommerce' },
          { label: 'Real Estate Lister', href: '#/premium/realestate' },
          { label: 'LMS Platforms', href: '#/premium/lms' },
          { label: 'CRM Solutions', href: '#/premium/crm' },
        ]
      },
      {
        title: 'Custom Pre-mades',
        items: [
          { label: 'Booking Systems', href: '#/premium/booking' },
          { label: 'Directory Sites', href: '#/premium/directory' },
          { label: 'Admin Dashboard Bundles', href: '#/premium/dashboards' },
        ]
      }
    ]
  },
  { label: 'AI Consultant', href: '#/ai-consultant' },
  { label: 'Support', href: '#/support' }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nexus SaaS Starter',
    description: 'Ultra-fast Next.js 14 template with Clerk auth and Stripe integration.',
    price: 49,
    image: 'https://picsum.photos/seed/tekkivo1/800/500',
    category: 'Template',
    stack: ['Next.js', 'Tailwind'],
    features: ['Dark Mode', 'SEO Optimized', 'Stripe Ready'],
    hasAdminPanel: false,
    isPopular: true
  },
  {
    id: '2',
    name: 'Horizon Property Lister',
    description: 'Complete Real Estate platform with advanced search and full Admin Panel.',
    price: 199,
    image: 'https://picsum.photos/seed/tekkivo2/800/500',
    category: 'Premium Solution',
    stack: ['Laravel', 'Vue.js', 'PHP'],
    features: ['Admin Dashboard', 'User Management', 'Map Integration'],
    hasAdminPanel: true,
    isPopular: true
  },
  {
    id: '3',
    name: 'Lumina WordPress Blog',
    description: 'High-performance WordPress theme for modern digital publishers.',
    price: 29,
    image: 'https://picsum.photos/seed/tekkivo3/800/500',
    category: 'Template',
    stack: ['WordPress', 'PHP'],
    features: ['Elementor Support', 'Gutenberg Ready', 'One-click Demo'],
    hasAdminPanel: true,
    isPopular: false
  },
  {
    id: '4',
    name: 'StoreFront Pro',
    description: 'Ready-to-deploy E-commerce site with Inventory management & Sales dashboard.',
    price: 249,
    image: 'https://picsum.photos/seed/tekkivo4/800/500',
    category: 'Premium Solution',
    stack: ['Next.js', 'Tailwind', 'PHP'],
    features: ['Admin Portal', 'Payment Gateways', 'Email Notifications'],
    hasAdminPanel: true,
    isPopular: true
  },
  {
    id: '5',
    name: 'Elevate Portfolio',
    description: 'Clean and minimal portfolio template for creative professionals.',
    price: 19,
    image: 'https://picsum.photos/seed/tekkivo5/800/500',
    category: 'Template',
    stack: ['React', 'Tailwind'],
    features: ['Framer Motion', 'Responsive', 'Contact Form'],
    hasAdminPanel: false,
    isPopular: false
  }
];
