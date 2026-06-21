// Import assets
import ser1 from "../assets/serv-icon1.png"
import ser2 from "../assets/serv-icon2.png"
import ser3 from "../assets/serv-icon3.png"

import serviceicon1 from "../assets/service-icon1.png"
import serviceicon2 from "../assets/service-icon2.png"
import serviceicon3 from "../assets/service-icon3.png"
import serviceicon4 from "../assets/service-icon4.png"
import serviceicon5 from "../assets/service-icon5.png"

import project1 from "../assets/project-01.jpg"
import project2 from "../assets/project-02.jpg"
import project3 from "../assets/project-03.jpg"
import project4 from "../assets/project-04.jpg"
import project5 from "../assets/project-05.jpg"
import project6 from "../assets/project-06.jpg"
import project7 from "../assets/project-07.jpg"
import project8 from "../assets/project-08.jpg"

import team1 from "../assets/team-01.png"
import team2 from "../assets/team-02.png"
import team3 from "../assets/team-03.png"
import team4 from "../assets/team-04.png"
import team5 from "../assets/team-05.jpg"
import team6 from "../assets/team-06.jpg"

import blog1 from "../assets/blog_01.jpg"
import blog2 from "../assets/blog_02.jpg"
import blog3 from "../assets/blog_03.jpg"
import blog4 from "../assets/blog_04.jpg"
import blog5 from "../assets/blog_05.jpg"
import blog6 from "../assets/blog_06.jpg"

import post1 from "../assets/blogpost01.jpg";
import post2 from "../assets/blogpost02.jpg";
import post3 from "../assets/blogpost03.jpg";

import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"
import brand5 from "../assets/brand5.png"
import brand6 from "../assets/brand6.png"
import brand7 from "../assets/brand7.png"

// Re-export specific assets for detail pages
export { project2, project3, project5 };
export { post1, post2, post3 };

// 1. Services lists
export const servicesSimple = [
  { id: 1, title: "Creation", img: ser1 },
  { id: 2, title: "Websites", img: ser2 },
  { id: 3, title: "Studio", img: ser3 },
];

export const servicesDetailed = [
  {
    number: "01.",
    title: "Brand Strategy",
    description:
      "We work with you to understand your business goals and craft strategies that deliver measurable results. Our approach combines creativity, technology, and market insights to help you stand out.",
    icon: serviceicon1,
  },
  {
    number: "02.",
    title: "UI / UX Design",
    description:
      "We design intuitive interfaces and meaningful experiences that connect brands with their audiences across every touchpoint.",
    icon: serviceicon2,
  },
  {
    number: "03.",
    title: "Web Development",
    description:
      "We build fast, scalable and accessible web products using modern stacks, clean architecture and a strong attention to detail.",
    icon: serviceicon3,
  },
  {
    number: "04.",
    title: "Motion & Branding",
    description:
      "We bring brands to life through motion design, micro-interactions and visual systems crafted to feel alive and consistent.",
    icon: serviceicon4,
  },
  {
    number: "05.",
    title: "Creative Direction",
    description:
      "We guide the creative process end-to-end, aligning concept, design and storytelling with the goals of your business.",
    icon: serviceicon5,
  },
];

export const servicesPageData = [
  {
    id: 1,
    name: "Brand Creation",
    icon: serviceicon1,
    items: [
      "Brand Strategy",
      "Visual Identity",
      "Naming",
      "Toolkits",
      "Guidelines",
    ]
  },
  {
    id: 2,
    name: "Web Campaigns",
    icon: serviceicon2,
    items: [
      "Creative Direction",
      "Concepts",
      "Copywriting",
      "Social Media",
      "Creative Strategy",
    ]
  },
  {
    id: 3,
    name: "UX/UI Design",
    icon: serviceicon3,
    items: [
      "Native and Web Apps",
      "Campaigns / Brand Sites",
      "Machine Learning / AI",
      "Brand Design",
      "Product Animation Design",
    ]
  },
];

// 2. Items / Splide text list
export const splideItemsText = [
  "- Creative Direction",
  "- Machine Learning / AI",
  "- Brand Strategy",
  "- Native and Webs Apps",
];

// 3. Projects list
export const projectsData = [
  { id: 1, image: project1, category: "Branding", title: "Museums Art Concept", client: "Art Museum NY", date: "May 2026", role: "Lead Designer" },
  { id: 2, image: project2, category: "Marketing", title: "Market Economy Graphics", client: "Finance Corp", date: "Apr 2026", role: "Art Director" },
  { id: 3, image: project3, category: "Design", title: "Headphones 3D Rendering", client: "AudioTech", date: "Mar 2026", role: "3D Artist" },
  { id: 4, image: project4, category: "Branding", title: "Product Packaging Style", client: "EcoGoods", date: "Feb 2026", role: "Packaging Designer" },
  { id: 5, image: project5, category: "Design", title: "Interior Design for Modern Homes", client: "Luxury Living", date: "Jan 2026", role: "Interior Architect" },
  { id: 6, image: project6, category: "Architecture", title: "Modern Villa Project", client: "Private Client", date: "Dec 2025", role: "Architect" },
  { id: 7, image: project7, category: "Photography", title: "Professional Photography Session", client: "Vogue Mag", date: "Nov 2025", role: "Photographer" },
  { id: 8, image: project8, category: "Architecture", title: "Modern Residential Architecture", client: "Urban Dev", date: "Oct 2025", role: "Lead Architect" },
  { id: 9, image: project1, category: "Photography", title: "Especial Creation", client: "Creative Studio", date: "Sep 2025", role: "Visual Creator" },
  { id: 10, image: project2, category: "Marketing", title: "Branding Style Project", client: "Style Inc", date: "Aug 2025", role: "Brand Strategist" },
];

// 4. Team Members list
export const teamMembers = [
  {
    id: 1,
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team1,
    letter: "A",
    age: "27 Years",
    location: "Mumbai, India",
    email: "aara@gmail.com",
    phone: "+91 8765 3234"
  },
  {
    id: 2,
    name: "Diya mehra",
    role: "Digital Marketer",
    img: team2,
    letter: "D",
    age: "28 Years",
    location: "Ahmedabad, India",
    email: "diya@gmail.com",
    phone: "+91 3256 9876"
  },
  {
    id: 3,
    name: "Karan Thakor",
    role: "Full-Stacl Developer",
    img: team3,
    letter: "K",
    age: "26 Years",
    location: "New York, USA",
    email: "karan@gmail.com",
    phone: "+91 4323 9876"
  },
  {
    id: 4,
    name: "Sara Thomas",
    role: "Content Strategist",
    img: team4,
    letter: "S",
    age: "25 Years",
    location: "Surat, India",
    email: "sara@gmail.com",
    phone: "+91 5678 2354"
  },
  {
    id: 5,
    name: "Alex Morgan",
    role: "UI/UX Designer",
    img: team5,
    letter: "A",
    age: "29 Years",
    location: "Toronto, Canada",
    email: "alex@gmail.com",
    phone: "+91 9877 4321"
  },
  {
    id: 6,
    name: "Olivia Rodriguez",
    role: "UI/UX Designer",
    img: team6,
    letter: "O",
    age: "30 Years",
    location: "London, UK",
    email: "olivia@gmail.com",
    phone: "+91 2345 5522"
  },
];

// 5. Testimonials list
export const testimonialsData = [
  {
    id: 1,
    text: "Their high level of customer service. Always available and quick to respond. They exceeded all expectations.",
    name: "Jessica Brown",
    role: "Design Quality",
    rating: 4.5,
  },
  {
    id: 2,
    text: "Working with them was seamless. They understood our vision and brought it to life perfectly. I will work with them again.",
    name: "Mark Johnson",
    role: "Creative Director",
    rating: 5.0,
  },
  {
    id: 3,
    text: "The results speak for themselves. Our engagement increased by 300% in just one quarter. Excellent work.",
    name: "Emily Carter",
    role: "Marketing Manager",
    rating: 4.8,
  },
  {
    id: 4,
    text: "Highly recommend! Professional, fast, and the final product exceeded all expectations.",
    name: "David Wilson",
    role: "Project Lead",
    rating: 4.9,
  },
];

// 6. Blogs list
export const blogsData = [
  {
    id: 1,
    date: "April 10, 2025",
    category: "Art",
    title: "Play to your Strength and Supercharge your Business",
    description: "Ambleton: Behind the Branding",
    image: blog1,
  },
  {
    id: 2,
    date: "May 22, 2025",
    category: "Marketing",
    title: "5 steps to Create an Outstanding Marketing Plan",
    description: "Ambleton: Behing the Branding of High Calgary's Community Mos innovative company",
    image: blog2,
  },
  {
    id: 3,
    date: "May 15, 2025",
    category: "Copywriting",
    title: "10 Content Proofreading Tips to Catch More Avoidable Errors",
    description: "Ambleton: The Most Important Element in Ad Creating",
    image: blog3,
  },
  {
    id: 4,
    date: "April 10, 2025",
    category: "Design",
    title: "Why Your Business Needs a Website",
    description: "Ambleton: The Power of Visual Branding",
    image: blog4,
  },
  {
    id: 5,
    date: "May 22, 2025",
    category: "Strategy",
    title: "Why Your Content Strategy Needs a Refresh",
    description: "Ambleton: The Competitive Edge",
    image: blog5,
  },
  {
    id: 6,
    date: "May 15, 2025",
    category: "Creativity",
    title: "Unlocking Your Creative Potential: A Guide",
    description: "Ambleton: Embracing Innovation",
    image: blog6,
  },
];

// 7. Brands list
export const brandsData = [
  { id: 1, image: brand1, link: "https://www.google.com" },
  { id: 2, image: brand2, link: "https://www.google.com" },
  { id: 3, image: brand3, link: "https://www.google.com" },
  { id: 4, image: brand4, link: "https://www.google.com" },
  { id: 5, image: brand5, link: "https://www.google.com" },
  { id: 6, image: brand6, link: "https://www.google.com" },
  { id: 7, image: brand7, link: "https://www.google.com" },
  { id: 8, image: brand1, link: "https://www.google.com" },
];

// 8. FAQs list
export const faqsData = [
  {
    question: "What services does Nova provide?",
    answer: "Nova offers comprehensive creative and digital solutions, including branding, UI/UX design, web design, marketing strategy, content creation, and digital product development."
  },
  {
    question: "Can Nova help build a brand from scratch?",
    answer: "Yes. We guide businesses through the entire branding process, from research and positioning to visual identity, messaging, and brand guidelines."
  },
  {
    question: "Do you work with startups and established companies?",
    answer: "Absolutely. We collaborate with startups, growing businesses, and established organizations, tailoring our approach to each client's goals and stage of growth."
  },
  {
    question: "What is your UI/UX design process?",
    answer: "Our process includes discovery, research, wireframing, prototyping, user testing, and interface design to create intuitive and engaging digital experiences."
  },
  {
    question: "Can Nova redesign an existing website or product?",
    answer: "Yes. We can audit your current digital presence, identify opportunities for improvement, and deliver a modernized design focused on usability, performance, and brand consistency."
  },
  {
    question: "Do you provide marketing services after the design phase?",
    answer: "Yes. We offer ongoing marketing support, including digital campaigns, content strategy, social media management, SEO, and performance optimization."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. Smaller projects may take a few weeks, while full branding and digital transformation projects can span several months."
  },
  {
    question: "How do we get started with Nova?",
    answer: "Simply contact our team to schedule a discovery call. We'll discuss your goals, evaluate your needs, and create a customized strategy to help your business grow."
  }
];

// 9. Pricing Plans list
export const pricingPlans = [
  {
    title: "Standard Package",
    duration: "3 Months",
    price: "$60.10",
    icon: "solar:rocket-bold",
    recommended: false,
    features: [
      { text: "Unlimited updates", active: true },
      { text: "Custom permissions", active: true },
      { text: "Custom infraestructure", active: false },
      { text: "Custom design and features", active: false }
    ]
  },
  {
    title: "Professional Package",
    duration: "6 Months",
    price: "$120.10",
    icon: "mdi:crown",
    recommended: true,
    features: [
      { text: "Unlimited updates", active: true },
      { text: "Custom permissions", active: true },
      { text: "Custom infraestructure", active: true },
      { text: "Custom design and features", active: false }
    ]
  },
  {
    title: "Premium Package",
    duration: "01 Year",
    price: "$230",
    icon: "fa-solid:building",
    recommended: false,
    features: [
      { text: "Unlimited updates", active: true },
      { text: "Custom permissions", active: true },
      { text: "Custom infraestructure", active: true },
      { text: "Custom design and features", active: true }
    ]
  }
];

// 10. Expertise Highlights list
export const expertiseHighlights = [
  {
    text: "Far curiosity incommode now led smallness allowance.",
    icon: "mdi:certificate-outline",
  },
  {
    text: "Favour bed assure son things yet.",
    icon: "mdi:shield-check-outline",
  },
  {
    text: "She consisted consulted elsewhere happiness.",
    icon: "mdi:clipboard-check-outline",
  },
  {
    text: "Window donws you new shade drift hopes small.",
    icon: "mdi:account-hard-hat-outline",
  },
  {
    text: "Interest discretion estimating on stimulated.",
    icon: "mdi:check-decagram-outline",
  },
];
