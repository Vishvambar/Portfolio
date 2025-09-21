import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// --- Start of SVG Icon Components ---

const FaExternalLinkAlt = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
);

const FaGithub = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.1-6.5 69.1 25.8 20.1-5.6 41.6-8.3 62.1-8.3 20.6 0 42.1 2.8 62.1 8.3 48-32.3 69.1-25.8 69.1-25.8 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-56.4 104.2-112.6 110.2 9.1 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);

const FaReact = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H96C68.2 32 48 52.2 48 80V432C48 459.8 68.2 480 96 480H416C443.8 480 464 459.8 464 432V80C464 52.2 443.8 32 416 32ZM256 368C182 368 121.8 307.4 121.8 233.5C121.8 174.4 163.4 128 224 128C233.9 128 243.2 129.4 252.1 131.9C254.1 119.3 264.9 109.3 277.9 109.3C278.1 109.3 278.2 109.3 278.4 109.3C291.4 110.2 301.9 120.6 302.7 133.5C302.8 134.1 302.8 134.7 302.8 135.3C311.8 130.6 321.6 128 332.8 128C393.4 128 440.2 174.4 440.2 233.5C440.2 307.4 379.1 368 306.8 368H256Z"></path></svg>
);

const FaNodeJs = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M439.4 243.6L246.5 19.1c-15.6-15.6-40.9-15.6-56.6 0l-193 193c-15.6 15.6-15.6 40.9 0 56.6l193 193c15.6 15.6 40.9 15.6 56.6 0l193-193c15.6-15.6 15.6-40.9 0-56.6zM245 391.8V120.2c0-9.4-10-15.1-18.4-10.9L84.9 231.7c-7.9 3.9-7.9 14.8 0 18.7l141.8 122.4c8.4 4.2 18.4-1.5 18.4-10.9z"></path></svg>
);

const FaCss3 = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L224 390.2l105.7-40.6 16-82H82.3L42.2 51.4H480z"></path></svg>
);

const FaHtml5 = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.3H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.4z"></path></svg>
);

const FaCss3Alt = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L224 390.2l105.7-40.6 16-82H82.3L42.2 51.4H480z"></path></svg>
);

const FaJs = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm243.8 349.4c-26.2 25.4-63.3 38.6-112.5 38.6-41.2 0-74-10.3-98.1-30.8-24.1-20.5-36.1-49.3-36.1-86.4 0-35.2 12.3-64.5 37-87.9 24.7-23.4 58.4-35.1 101.2-35.1 42.1 0 75.4 10.3 99.8 30.8 24.4 20.5 36.6 49.3 36.6 86.4 0 36.1-12.2 65.3-36.6 87.8zM399 381.4h-55.9V214.5h55.9v166.9z"></path></svg>
);

const SiNextdotjs = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM9.53 7.2l5.065 8.106V7.2h1.874v9.6h-1.507L9.897 8.694V16.8H8V7.2h1.53z"></path></svg>
);

const FaRazorpay = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM9.53 7.2l5.065 8.106V7.2h1.874v9.6h-1.507L9.897 8.694V16.8H8V7.2h1.53z"></path></svg>
);

const FaTailwindcss = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM9.53 7.2l5.065 8.106V7.2h1.874v9.6h-1.507L9.897 8.694V16.8H8V7.2h1.53z"></path></svg>
);
const FaMongoDb = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM9.53 7.2l5.065 8.106V7.2h1.874v9.6h-1.507L9.897 8.694V16.8H8V7.2h1.53z"></path></svg>
);
const SiExpress = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.52V16.48C21.34 15.64 21.06 15.54 18.88 13.33C17.79 12.22 17.21 11.33 17.21 9.99C17.21 8.52 17.88 7.77 19.41 7.77C20.41 7.77 21.2 8.12 21.93 9.04L23.53 7.74C22.47 6.44 21.11 5.68 19.53 5.68C17.13 5.68 15.29 7.03 15.29 9.87C15.29 11.83 16.29 13.2 17.87 14.79C19.72 16.63 20.33 17.11 22.45 18.02V18.11C20.33 18.89 19.41 19.46 19.41 20.67C19.41 21.79 20.2 22.5 21.43 22.5C22.36 22.5 23.11 22.06 23.68 21.36L22.1 20.21C21.75 20.67 21.35 20.89 21.05 20.89C20.73 20.89 20.56 20.64 20.56 20.31C20.56 19.64 21.35 19.12 24 18.52ZM11.11 5.92H.72L5.85 12L.72 18.08H11.11L16.24 12L11.11 5.92Z"></path></svg>
);
const ChevronLeftIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
);
const ChevronRightIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
);
// --- End of SVG Icon Components ---

const Projects = () => {
  const scrollContainerRef = useRef(null);

  // Corrected project IDs to be unique
  const allProjects = [
    {
      id: 1,
      type: 'core',
      title: "Cream & Crunch",
      subtitle: "Bakery Shop Website",
      description: "Developed a Cream and Crunch bakery website using Html and CSS and JS. Integrated Razorpay for secure payments.",
      techStack: [ {name: "Razorpay", icon: FaRazorpay, color: "text-purple-500" }, { name: "HTML", icon: FaHtml5, color: "text-blue-500" }, { name: "CSS", icon: FaCss3, color: "text-green-600" }, { name: "JavaScript", icon: FaJs, color: "text-yellow-500" } ],
      liveDemo: "https://vishvambar.github.io/cream-crunch/",
      github: "https://github.com/Vishvambar/cream-crunch",
      features: ["Razorpay integration", "Secure payments", "User-friendly interface"],
      category: "Web Development",
      gradient: "from-purple-500 to-pink-500",
      Live: true
    },
    {
      id: 2,
      type: 'core',
      title: "Digital Notes Manager (NoteVault)",
      subtitle: "Full-Stack MERN Application",
      description: "Developed a full-stack MERN application with secure JWT authentication. Engineered real-time database synchronization.",
      techStack: [ { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "Node.js", icon: FaNodeJs, color: "text-green-600" }, { name: "Express", icon: SiExpress, color: "text-gray-600" }, { name: "MongoDB", icon: FaMongoDb, color: "text-green-500" } ],
      liveDemo: "https://notevault-demo.render.com",
      github: "https://github.com/Vishvambar/Todoapp-with-Authentication",
      features: ["JWT authentication", "Real-time sync"],
      category: "Full-Stack",
      gradient: "from-blue-500 to-purple-500",
      Live: false
    },
    {
      id: 3,
      type: 'core',
      title: "Kids Coding Learning Platform",
      subtitle: "Educational Technology",
      description: "Designed an interactive learning platform with gamified coding lessons. Analytics showed a 35% increase in average session duration.",
      techStack: [ { name: "HTML", icon: FaHtml5, color: "text-blue-500" }, { name: "CSS", icon: FaCss3Alt, color: "text-cyan-500" }, { name: "JavaScript", icon: FaJs, color: "text-yellow-500" } ],
      liveDemo: "https://vishvambar.github.io/kidscode/",
      github: "https://github.com/Vishvambar/kidscode",
      features: ["Interactive lessons", "Coding games", "Progress tracking"],
      gradient: "from-red-500 to-yellow-500",
      Live: true
    },
    {
      id: 4,
      type: 'core',
      title: "TalkBuddy",
      subtitle: "AI-Powered Language Coach",
      description: "Building An AI-powered spoken English coach that provides real-time feedback to improve fluency and confidence.",
      techStack: [ { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "OpenAI API", icon: SiNextdotjs, color: "text-green-600" }, { name: "JavaScript", icon: FaJs, color: "text-yellow-500" } ],
      liveDemo: "https://talkbuddy-ashy.vercel.app/",
      github: "https://github.com/Vishvambar/Talkbuddy",
      features: ["AI conversation", "Speech recognition", "Real-time feedback"],
      category: "AI & ML",
      gradient: "from-purple-500 to-pink-500",
      Live: true
    },
    {
      id: 5,
      type: 'core',
      title: "ElevanLabs Clone",
      subtitle: "Backend Development",
      description: "Built a backend for a clone of ElevanLabs, a platform for learning and sharing knowledge.",
      techStack: [ { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-200" }, { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "MongoDB", icon: FaMongoDb, color: "text-green-500" } ],
      liveDemo: "https://elevanslab.vercel.app/",
      github: "https://github.com/Vishvambar/elevanslab_project",
      features: ["Language Translation", "Audio Transcription", "Real-time Collaboration"],
      category: "Backend",
      gradient: "from-red-500 to-orange-500",
      Live:true
    },
    {
      id: 6,
      type: 'core',
      title: "Smart Image Uploader",
      subtitle: "Advanced File Management",
      description: "Developed an image upload and retrieval system with a Express backend and MongoDB database.",
      techStack: [{name: "Express", icon: SiExpress, color: "text-gray-600 dark:text-gray-400" }, {name :"MongoDB", icon: FaMongoDb, color: "text-green-500" }, { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "Tailwind CSS", icon: FaTailwindcss, color: "text-cyan-500" } ],
      liveDemo: "https://imageuploader-v1.netlify.app",
      github: "https://github.com/Vishvambar/ImageUploader",
      features: ["Drag & drop", "Image compression", "Progress tracking"],
      category: "Full-Stack Tool",
      gradient: "from-green-500 to-blue-500",
      Live: true
    },
    {
      id: 7,
      type: 'core',
      title: "Organic Grocery E-Commerce",
      subtitle: "E-Commerce Platform",
      description: "Built a Static e-commerce site. Implemented Razorpay for secure payments.",
      techStack: [ {name : "Razorpay", icon: FaRazorpay, color: "text-blue-500" }, { name: "Javascript", icon: FaJs, color: "text-yellow-500" }, { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" }, { name: "HTML", icon: FaHtml5, color: "text-orange-500" } ],
      liveDemo: "https://vishvambar.github.io/organic-ecommerce-platform",
      github: "https://github.com/Vishvambar/organic-ecommerce-platform",
      features: ["Product filters", "Shopping cart", "Payment gateway"],
      category: "E-Commerce",
      gradient: "from-green-500 to-emerald-500",
      Live: true
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const scroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const scrollAmount = current.offsetWidth * 0.8; // Scroll by 80% of the container width
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Engineering <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects where I've turned complex problems into elegant software solutions.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors ml-4 hidden md:block"
          aria-label="Scroll left"
        >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800 dark:text-white" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors mr-4 hidden md:block"
          aria-label="Scroll right"
        >
            <ChevronRightIcon className="h-6 w-6 text-gray-800 dark:text-white" />
        </button>
        
        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto space-x-8 py-8 px-6 md:px-12 scrollbar-hide" // Hiding scrollbar for a cleaner look with arrows
        >
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="flex-shrink-0 w-11/12 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
               <div className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                      <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {project.title}
                          </h3>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                              {project.category}
                          </span>
                      </div>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                          {project.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm h-24">
                          {project.description}
                      </p>

                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                          {project.techStack.map((tech, index) => (
                              <div key={index} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                  <tech.icon className={`w-4 h-4 ${tech.color}`} />
                                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                              </div>
                          ))}
                      </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 flex space-x-3">
                      {project.Live && (
                      <motion.a href={project.liveDemo} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-center shadow-md">
                          <FaExternalLinkAlt className="inline mr-2 h-4 w-4" /> Live Demo
                      </motion.a>
                      )}
                      <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-center shadow-md">
                          <FaGithub className="inline mr-2 h-4 w-4" /> GitHub
                      </motion.a>
                  </div>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

