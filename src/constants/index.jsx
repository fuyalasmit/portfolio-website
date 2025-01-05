import projectImage from '../assets/project.png';
import { BiCodeAlt, BiMobileAlt, BiPalette, BiSearchAlt } from 'react-icons/bi';

export const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: 'Responsive Portfolio Website',
    image: projectImage,
    description:
      'A sleek and fully responsive portfolio website to showcase skills, projects, and experience. Built using HTML, CSS, and JavaScript with modern design practices.',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    image: projectImage,
    description:
      'An e-commerce platform with features like product listings, cart functionality, and user authentication. Developed using React, Node.js, Express, and MongoDB.',
  },
  {
    id: 3,
    title: 'Dashboard Design',
    image: projectImage,
    description:
      'A highly customizable and interactive admin dashboard built with Tailwind CSS, React, and Chart.js to visualize complex data effectively.',
  },
];

export const services = [
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    icon: BiCodeAlt,
  },
  {
    title: 'Mobile App Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    icon: BiMobileAlt,
  },
  {
    title: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    icon: BiPalette,
  },
  {
    title: 'SEO',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    icon: BiSearchAlt,
  },
];

export const contactDetails = [
  {
    id: 1,
    type: 'Email',
    value: 'yourname@example.com',
    link: 'mailto:yourname@example.com',
    icon: '📧',
  },
  {
    id: 2,
    type: 'Phone',
    value: '+123 456 7890',
    link: 'tel:+1234567890',
    icon: '📞',
  },
  {
    id: 3,
    type: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    link: 'https://www.linkedin.com/in/yourprofile',
    icon: '🔗',
  },
  {
    id: 4,
    type: 'Location',
    value: 'Your City, Your Country',
    link: null,
    icon: '📍',
  },
];

export const words = [
  'React',
  'Next.js',
  'Tailwind',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'GraphQL',
  'Apollo',
  'APIs',
  'Git',
  'GitHub',
  'VS Code',
];

export const footerLinks = [
  {
    title: 'GitHub',
    href: '#',
  },
  {
    title: 'Twitter',
    href: '#',
  },
  {
    title: 'LinkedIn',
    href: '#',
  },
  {
    title: 'Blogs',
    href: '#',
  },
];

import {
  meta,
  starbucks,
  tesla,
  shopify,
} from "../assets";

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      "Developed and maintained interactive web components for Starbucks' e-commerce platform.",
      'Enhanced website performance, reducing page load times by 30%.',
      'Collaborated with teams to ensure brand consistency across digital platforms.',
      'Built reusable components, improving scalability of the codebase.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      "Led mobile app development for Tesla's user management system.",
      'Integrated real-time data sync features, enabling seamless updates.',
      'Worked closely with backend developers to streamline API integration.',
      'Optimized mobile app UX, improving customer engagement by 20%.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      "Built scalable web solutions for Shopify's marketplace.",
      'Improved site responsiveness, achieving a 95% Lighthouse score.',
      'Integrated third-party services to enhance platform functionality.',
      "Contributed to developing themes for Shopify's storefronts.",
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      "Architected scalable systems for Meta's internal tools.",
      'Collaborated on implementing GraphQL for optimized data fetching.',
      'Enhanced deployment processes, reducing downtime by 15%.',
      "Designed new features for Meta's project management platform.",
    ],
  },
];
