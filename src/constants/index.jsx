import projectImage from '../assets/projectPhotos/project.png';


export const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: 'Learning Management System',
    image: projectImage,
    description:
    'A comprehensive platform for managing online courses, student enrollments, and assessments. Built with React, Node.js, Express, and MongoDB.',
    github: "https://github.com/fuyalasmit?tab=repositories",
    website:"https://github.com/fuyalasmit?tab=repositories",
  },
  {
    id: 2,
    title: 'Text to Own Handwriting',
    image: projectImage,
    description:
    'An application that converts typed text into a user\'s own handwriting style. Utilizes machine learning algorithms and React for the frontend.',
    github: "",
    website:"",
  },
  {
    id: 3,
    title: 'Agro Insights',
    image: projectImage,
    description:
    'A data-driven platform providing insights and analytics for the agricultural sector. Built with React, D3.js, and Node.js.',
    github: "",
    website:"",
  },
];

export const contactDetails = [
  {
    id: 1,
    type: 'Email',
    value: 'contact.asmit@gmail.com',
    link: 'mailto:contact.asmit@gmail.com',
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
  "Docker",
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
    href: 'https://x.com/asmlogs',
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

// workLogos
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
