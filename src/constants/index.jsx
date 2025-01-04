import projectImage from "../assets/project.png";
import { BiCodeAlt, BiMobileAlt, BiPalette, BiSearchAlt } from "react-icons/bi";

export const menuItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Responsive Portfolio Website",
    image: projectImage,
    description:
      "A sleek and fully responsive portfolio website to showcase skills, projects, and experience. Built using HTML, CSS, and JavaScript with modern design practices.",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: projectImage,
    description:
      "An e-commerce platform with features like product listings, cart functionality, and user authentication. Developed using React, Node.js, Express, and MongoDB.",
  },
  {
    id: 3,
    title: "Dashboard Design",
    image: projectImage,
    description:
      "A highly customizable and interactive admin dashboard built with Tailwind CSS, React, and Chart.js to visualize complex data effectively.",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiCodeAlt,
  },
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiMobileAlt,
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiPalette,
  },
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: BiSearchAlt,
  },
];

export const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "yourname@example.com",
    link: "mailto:yourname@example.com",
    icon: "📧",
  },
  {
    id: 2,
    type: "Phone",
    value: "+123 456 7890",
    link: "tel:+1234567890",
    icon: "📞",
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    link: "https://www.linkedin.com/in/yourprofile",
    icon: "🔗",
  },
  {
    id: 4,
    type: "Location",
    value: "Your City, Your Country",
    link: null,
    icon: "📍",
  },
];

export const words = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "APIs",
  "Git",
  "GitHub",
  "VS Code",
];
