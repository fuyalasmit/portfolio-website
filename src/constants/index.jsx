import lms from '../assets/projectPhotos/lms.png';
import texttoownhandwriting from '../assets/projectPhotos/texttoownhandwriting.png';
import agroIn from '../assets/projectPhotos/agroIn.png';

export const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  // { label: 'Experiences', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: 'Learning Management System',
    image: lms,
    description:
      'This project is a Learning Management System (LMS) that allows users to register, log in, and manage their profiles. Instructors can create, edit, and manage courses, while students can browse, enroll in, and view courses. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React, Redux Toolkit, and Tailwind CSS.',
    github: 'https://github.com/fuyalasmit/Learning-Management-System',
    website: '',
  },
  {
    id: 2,
    title: 'Text to Own Handwriting',
    image: texttoownhandwriting,
    description:
      'This is a free online tool that transforms digital text into realistic handwritten text. Users can customize fonts, colors, and paper styles, then generate and download their handwritten text as images or compile multiple pages into a PDF.',
    github: 'https://github.com/fuyalasmit/text-to-own-handwriting',
    website: 'https://texttoownhandwriting.netlify.app/',
  },
  {
    id: 3,
    title: 'Agro Insights',
    image: agroIn,
    description:
      'AgroInsight is a smart farming tool designed to revolutionize crop management. Built during the Kathmandu University Hackfest, this innovative solution analyzes fields for pests, diseases, nutrient deficiencies, and soil moisture levels. It processe user-uploaded videos and integrates real-time soil moisture sensors to provide actionable insights and AI-driven recommendations for improved farming practices.',
    github: 'https://github.com/fuyalasmit/AgroInsight',
    website: 'https://www.youtube.com/watch?v=30TF73z2JrM',
  },
];

export const contactDetails = [
  {
    id: 1,
    type: 'Email',
    value: 'contact@asmitphuyal.com.np',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=contact@asmitphuyal.com.np',
    mobileLink: "mailto:contact@asmitphuyal.com.np",
    icon: '📧',
  },
  {
    id: 2,
    type: 'Phone',
    value: '+977-9841944949',
    link: 'tel:+9779841944949',
    icon: '📞',
  },
  {
    id: 3,
    type: 'LinkedIn',
    value: 'linkedin.com/in/fuyalasmit',
    link: 'https://www.linkedin.com/in/fuyalasmit',
    icon: '🔗',
  },
  {
    id: 4,
    type: 'Location',
    value: 'Kathmandu, Nepal',
    link: null,
    icon: '📌',
  },
];

export const words = [
  'React',
  'Tailwind',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Docker',
  'APIs',
  'Git',
  'GitHub',
  'VS Code',
];

export const footerLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/fuyalasmit',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/fuyalasmit',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fuyalasmit/',
  },
  {
    title: 'Blogs',
    href: 'https://blog.asmitphuyal.com.np',
  },
];

// workCompanyLogos
// import {} from '../assets';

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: '',
    // icon: icon name imported from assets,
    // iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, possimus!',
      'Lorem ipsum dolor sit amet.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: '',
    // icon: ,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, possimus!',
      'Lorem ipsum dolor sit amet.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: '',
    // icon: ,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, possimus!',
      'Lorem ipsum dolor sit amet.',
    ],
  },
];
