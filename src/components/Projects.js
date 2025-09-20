// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaStar, FaEye, FaCode } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "TalkBuddy",
//       subtitle: "AI-Powered Language Coach",
//       description: "Revolutionary English speaking coach using Whisper, LLaMA & React. Features real-time AI feedback, speech recognition, and personalized learning paths.",
//       techStack: [
//         { name: "React", icon: FaReact, color: "text-blue-500" },
//         { name: "OpenAI API", icon: SiNextdotjs, color: "text-green-600" },
//         { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
//       ],
//       liveDemo: "https://talkbuddy-demo.vercel.app",
//       github: "https://github.com/Vishvambar/Talkbuddy",
//       features: ["AI conversation", "Speech recognition", "Real-time feedback"],
//       category: "AI & Machine Learning",
//       status: "In MVP phase",
//       metrics: {  complexity: "Advanced" },
//       gradient: "from-purple-500 to-pink-500",
//       Live: false
//     },
//     {
//       id: 2,
//       title: "Smart Image Uploader",
//       subtitle: "Advanced File Management",
//       description: "High-performance drag-and-drop image uploader with automatic compression, format conversion, and real-time upload progress tracking.",
//       techStack: [
//         { name: "React", icon: FaReact, color: "text-blue-500" },
//         { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
//         { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
//       ],
//       liveDemo: "https://imageuploader-v1.netlify.app",
//       github: "https://github.com/Vishvambar/ImageUploader",
//       features: ["Drag & drop", "Image compression", "Progress tracking"],
//       category: "Frontend Tools",
//       status: "Active",
//       metrics: { stars: 32, views: "1.8k", complexity: "Intermediate" },
//       gradient: "from-green-500 to-blue-500",
//       Live: true

//     },
//     {
//       id: 3,
//       title: "Movie Discovery Hub",
//       subtitle: "Entertainment Platform",
//       description: "TMDB-powered React application for movie discovery with advanced search, ratings, watchlists, and personalized recommendations.",
//       techStack: [
//         { name: "React", icon: FaReact, color: "text-blue-500" },
//         { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
//         { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
//       ],
//       liveDemo: "https://movie-search-vishu.vercel.app/",
//       github: "https://github.com/Vishvambar/movie-search",
//       features: ["TMDB API", "Bookmarking", "Advanced search"],
//       category: "Web Application",
//       status: "Active",
//       metrics: { stars: 28, views: "1.5k", complexity: "Intermediate" },
//       gradient: "from-red-500 to-orange-500",
//       Live:true
//     },
//     {
//       id: 4,
//       title: "Digital Notes Manager (NoteVault)",
//       subtitle: "Full-Stack MERN Application",
//       description: "Enterprise-grade notes application with JWT authentication, dark mode, categories, and real-time synchronization across devices.",
//       techStack: [
//         { name: "React", icon: FaReact, color: "text-blue-500" },
//         { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
//         { name: "Express", icon: SiExpress, color: "text-gray-600" },
//         { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
//       ],
//       liveDemo: "https://notevault-demo.render.com",
//       github: "https://github.com/vishvambar/notevault",
//       features: ["JWT authentication", "Dark mode", "Real-time sync"],
//       category: "Full-Stack Development",
//       status: "Active",
//       metrics: { stars: 38, views: "2.1k", complexity: "Advanced" },
//       gradient: "from-blue-500 to-purple-500",
//       Live: true

//     },
//     {
//       id: 5,
//       title: "Organic Grocery E-Commerce",
//       subtitle: "E-Commerce Platform",
//       description: "Modern e-commerce platform for organic produce with advanced filters, shopping cart, payment integration, and inventory management.",
//       techStack: [
//         { name: "React", icon: FaReact, color: "text-blue-500" },
//         { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
//         { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" }
//       ],
//       liveDemo: "https://vishvambar.github.io/organic-ecommerce-platform",
//       github: "https://github.com/Vishvambar/organic-ecommerce-platform",
//       features: ["Product filters", "Shopping cart", "Payment gateway"],
//       category: "E-Commerce",
//       status: "Active",
//       metrics: { stars: 42, views: "2.8k", complexity: "Advanced" },
//       gradient: "from-green-500 to-emerald-500",
//       Live: true
//     },
//     {
//       id: 6,
//       title: "Recipe Search Platform",
//       description: "Search recipes using ingredients via Spoonacular API with dietary filters and nutritional information.",
//       techStack: [
//         { name: "React", icon: FaReact, color: "text-blue-500" },
//         { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
//         { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
//       ],
//       liveDemo: "https://recipe-search-demo.netlify.app",
//       metrics: {  complexity: "Intermediate" },
//       github: "https://github.com/vishvambar/recipe-search",
//       features: ["Ingredient search", "Dietary filters", "Nutrition info"],
//       Live: true
//     },
//     {
//       id: 7,
//       title: "Bakery Shop Website",
//       description: "Static business website for a local bakery with product showcase, menu, and contact information.",
//       techStack: [
//         { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
//         { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
//         { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
//       ],
//       liveDemo: "https://bakery-shop-demo.netlify.app",
//       metrics: {  complexity: "Intermediate" },
//       github: "https://github.com/vishvambar/bakery-shop",
//       features: ["Product showcase", "Contact form", "Responsive design"],
//       Live: true
//     },
//     {
//       id: 8,
//       title: "Kids Coding Learning Platform",
//       description: "Educational website for teaching basic coding concepts to children with interactive lessons and games.",
//       techStack: [
//         { name: "React", icon: FaReact, color: "text-blue-500" },
//         { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
//         { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
//       ],
//       liveDemo: "https://kids-coding-demo.vercel.app",
//       metrics: {  complexity: "Advanced" },
//       github: "https://github.com/vishvambar/kids-coding-platform",
//       features: ["Interactive lessons", "Coding games", "Progress tracking"],
//       Live: true
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8
//       }
//     }
//   };

//   return (
//     <section className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
//             <FaStar className="mr-2" />
//             8 + Projects
//           </div>
//           <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Here's a showcase of my recent full-stack projects that demonstrate my expertise in
//             <span className="font-semibold text-blue-600 dark:text-blue-400"> modern web development</span>,
//             <span className="font-semibold text-purple-600 dark:text-purple-400"> AI integration</span>, and
//             <span className="font-semibold text-green-600 dark:text-green-400"> scalable solutions</span>
//           </p>
//           <div className="mt-8 flex justify-center space-x-8">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-green-600 dark:text-green-400">2+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200 dark:border-gray-700"
//             >
//               {/* Gradient Header */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient || 'from-blue-500 to-purple-500'}`}></div>

//               {/* Status Badge */}
//               <div className="absolute top-4 right-4 z-10">
//                 <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
//                   {project.status || 'Active'}
//                 </span>
//               </div>

//               <div className="p-8">
//                 {/* Header Section */}
//                 <div className="mb-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {project.title}
//                     </h3>
//                   </div>

//                   {project.subtitle && (
//                     <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
//                       {project.subtitle}
//                     </p>
//                   )}

//                   {project.category && (
//                     <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
//                       {project.category}
//                     </span>
//                   )}
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
//                   {project.description}
//                 </p>

//                 {/* Metrics Row */}
//                 {project.metrics && (
//                   <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
//                     {/* <div className="flex items-center space-x-1 text-yellow-500">
//                       <FaStar className="w-4 h-4" />
//                       <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                         {project.metrics.stars}
//                       </span>
//                     </div>
//                     <div className="flex items-center space-x-1 text-blue-500">
//                       <FaEye className="w-4 h-4" />
//                       <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                         {project.metrics.views}
//                       </span>
//                     </div> */}
//                     <div className="flex items-center space-x-1 text-purple-500">
//                       <FaCode className="w-4 h-4" />
//                       <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                         {project.metrics.complexity}
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Tech Stack */}
//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                     Tech Stack
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.techStack.map((tech, index) => (
//                       <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.1 }}
//                         className="flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
//                       >
//                         <tech.icon className={`w-4 h-4 ${tech.color}`} />
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                           {tech.name}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Key Features */}
//                 <div className="mb-8">
//                   <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
//                     <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                     Key Features
//                   </h4>
//                   <ul className="grid grid-cols-1 gap-2">
//                     {project.features.map((feature, index) => (
//                       <li key={index} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
//                         <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
//                           <span className="text-white text-xs">✓</span>
//                         </div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3">
//                   {project.Live && (
//                     <motion.a
//                       href={project.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
//                     >
//                       <FaExternalLinkAlt className="inline mr-2" />
//                       Live Demo
//                     </motion.a>
//                   )}


//                   <motion.a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
//                   >
//                     <FaGithub className="inline mr-2" />
//                     GitHub
//                   </motion.a>
//                 </div>
//               </div>

//               {/* Hover Effect Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none"></div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from 'react';
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

const FaHtml5 = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.3H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.4z"></path></svg>
);

const FaCss3Alt = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L224 390.2l105.7-40.6 16-82H82.3L42.2 51.4H480z"></path></svg>
);

const FaJs = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm243.8 349.4c-26.2 25.4-63.3 38.6-112.5 38.6-41.2 0-74-10.3-98.1-30.8-24.1-20.5-36.1-49.3-36.1-86.4 0-35.2 12.3-64.5 37-87.9 24.7-23.4 58.4-35.1 101.2-35.1 42.1 0 75.4 10.3 99.8 30.8 24.4 20.5 36.6 49.3 36.6 86.4 0 36.1-12.2 65.3-36.6 87.8zM399 381.4h-55.9V214.5h55.9v166.9z"></path></svg>
);

const FaStar = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
);

const FaCode = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.5c-4.8-4.5-12.4-4.3-17 .5L431.6 159.4c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
);

const SiMongodb = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm3.42,15.22c-1.5.8-3.15.8-4.78.32a4.4,4.4,0,0,1-1.89-1.22c-.34-.36-.61-.78-.79-1.24a4.4,4.4,0,0,1-.22-2.11V7.59c1.89-.68,3.61-.66,5.52,0l.33,7.54c.05,1.44-.49,2.4-1.2,3.09Z"></path></svg>
);

const SiExpress = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.52V16.48C21.34 15.64 21.06 15.54 18.88 13.33C17.79 12.22 17.21 11.33 17.21 9.99C17.21 8.52 17.88 7.77 19.41 7.77C20.41 7.77 21.2 8.12 21.93 9.04L23.53 7.74C22.47 6.44 21.11 5.68 19.53 5.68C17.13 5.68 15.29 7.03 15.29 9.87C15.29 11.83 16.29 13.2 17.87 14.79C19.72 16.63 20.33 17.11 22.45 18.02V18.11C20.33 18.89 19.41 19.46 19.41 20.67C19.41 21.79 20.2 22.5 21.43 22.5C22.36 22.5 23.11 22.06 23.68 21.36L22.1 20.21C21.75 20.67 21.35 20.89 21.05 20.89C20.73 20.89 20.56 20.64 20.56 20.31C20.56 19.64 21.35 19.12 24 18.52ZM11.11 5.92H.72L5.85 12L.72 18.08H11.11L16.24 12L11.11 5.92Z"></path></svg>
);

const SiTailwindcss = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.016c-5.517 0-9.984 4.467-9.984 9.984s4.467 9.984 9.984 9.984 9.984-4.467 9.984-9.984S17.517 2.016 12 2.016zm0 18.016c-4.43 0-8.032-3.602-8.032-8.032s3.602-8.032 8.032-8.032 8.032 3.602 8.032 8.032-3.602 8.032-8.032 8.032zm-4.016-10.516c-1.332 0-2.408.875-2.408 2.22s1.076 2.22 2.408 2.22c1.9 0 3.225-2.22 4.016-3.725 1.054-1.996 2.129-3.716 4.016-3.716 1.332 0 2.408.875 2.408 2.22s-1.076 2.22-2.408 2.22c-1.9 0-3.225-2.22-4.016-3.725-1.054-1.996-2.129-3.716-4.016-3.716z"></path></svg>
);

const SiNextdotjs = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM9.53 7.2l5.065 8.106V7.2h1.874v9.6h-1.507L9.897 8.694V16.8H8V7.2h1.53z"></path></svg>
);

const FaRazorpay = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM9.53 7.2l5.065 8.106V7.2h1.874v9.6h-1.507L9.897 8.694V16.8H8V7.2h1.53z"></path></svg>
);

// --- End of SVG Icon Components ---

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      type: 'core',
      title: "TalkBuddy",
      subtitle: "AI-Powered Language Coach",
      description: "Building An AI-powered spoken English coach that provides real-time feedback to improve fluency and confidence.",
      techStack: [ { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "OpenAI API", icon: SiNextdotjs, color: "text-green-600" }, { name: "JavaScript", icon: FaJs, color: "text-yellow-500" } ],
      liveDemo: "https://talkbuddy-ashy.vercel.app/",
      github: "https://github.com/Vishvambar/Talkbuddy",
      features: ["AI conversation", "Speech recognition", "Real-time feedback"],
      category: "AI & Machine Learning",
      metrics: { complexity: "Advanced" },
      gradient: "from-purple-500 to-pink-500",
      Live: true
    },
    {
      id: 4,
      type: 'core',
      title: "Digital Notes Manager (NoteVault)",
      subtitle: "Full-Stack MERN Application",
      description: "Developed a full-stack MERN application with secure JWT authentication. Engineered real-time database synchronization.",
      techStack: [ { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "Node.js", icon: FaNodeJs, color: "text-green-600" }, { name: "Express", icon: SiExpress, color: "text-gray-600" }, { name: "MongoDB", icon: SiMongodb, color: "text-green-500" } ],
      liveDemo: "https://notevault-demo.render.com",
      github: "https://github.com/Vishvambar/Todoapp-with-Authentication",
      features: ["JWT authentication", "Real-time sync"],
      category: "Full-Stack Development",
      metrics: { stars: 38, views: "2.1k", complexity: "Advanced" },
      gradient: "from-blue-500 to-purple-500",
      Live: false
    },
    {
      id: 8,
      type: 'core',
      title: "Kids Coding Learning Platform",
      subtitle: "Educational Technology",
      description: "Designed an interactive learning platform with gamified coding lessons. Analytics showed a 35% increase in average session duration after deploying interactive challenges.",
      techStack: [ { name: "HTML", icon: FaHtml5, color: "text-blue-500" }, { name: "CSS", icon: FaCss3Alt, color: "text-cyan-500" }, { name: "JavaScript", icon: FaJs, color: "text-yellow-500" } ],
      liveDemo: "https://vishvambar.github.io/kidscode/",
      metrics: { complexity: "Intermediate" },
      github: "https://github.com/Vishvambar/kidscode",
      features: ["Interactive lessons", "Coding games", "Progress tracking"],
      Live: true
    },
    {
      id: 5,
      type: 'core',
      title: "Organic Grocery E-Commerce",
      subtitle: "E-Commerce Platform",
      description: "Built a Static e-commerce site. Implemented Razorpay for secure payments.",
      techStack: [ {name : "Razorpay", icon: FaRazorpay, color: "text-green-500" }, { name: "Javascript", icon: FaJs, color: "text-blue-500" }, { name: "CSS", icon: FaCss3Alt, color: "text-green-600" }, { name: "HTML", icon: FaHtml5, color: "text-cyan-500" } ],
      liveDemo: "https://vishvambar.github.io/organic-ecommerce-platform",
      github: "https://github.com/Vishvambar/organic-ecommerce-platform",
      features: ["Product filters", "Shopping cart", "Payment gateway"],
      category: "E-Commerce",
      metrics: { stars: 42, views: "2.8k", complexity: "Advanced" },
      gradient: "from-green-500 to-emerald-500",
      Live: true
    },
    {
      id: 2,
      type: 'lab',
      title: "Smart Image Uploader",
      subtitle: "Advanced File Management",
      description: "Engineered a client-side image processor that achieved a 70% average reduction in file size, improving upload times significantly before backend submission.",
      techStack: [ { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }, { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" } ],
      liveDemo: "https://imageuploader-v1.netlify.app",
      github: "https://github.com/Vishvambar/ImageUploader",
      features: ["Drag & drop", "Image compression", "Progress tracking"],
      category: "Frontend Tools",
      metrics: { stars: 32, views: "1.8k", complexity: "Intermediate" },
      gradient: "from-green-500 to-blue-500",
      Live: true
    },
    {
      id: 3,
      type: 'lab',
      title: "Movie Discovery Hub",
      subtitle: "Entertainment Platform",
      description: "Built a performant movie discovery app fetching from the TMDB API, featuring a debounced search function that reduced API calls by 80% during user typing.",
      techStack: [ { name: "React", icon: FaReact, color: "text-blue-500" }, { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" }, { name: "JavaScript", icon: FaJs, color: "text-yellow-500" } ],
      liveDemo: "https://movie-search-vishu.vercel.app/",
      github: "https://github.com/Vishvambar/movie-search",
      features: ["TMDB API", "Bookmarking", "Advanced search"],
      category: "Web Application",
      metrics: { stars: 28, views: "1.5k", complexity: "Intermediate" },
      gradient: "from-red-500 to-orange-500",
      Live:true
    },
    
  ];

  const coreProjects = allProjects.filter(p => p.type === 'core');
  const labProjects = allProjects.filter(p => p.type === 'lab');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };
  
  const ProjectCard = ({ project }) => (
    <motion.div
      key={project.id}
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200 dark:border-gray-700"
    >
      <div className={`h-2 bg-gradient-to-r ${project.gradient || 'from-blue-500 to-purple-500'}`}></div>
      {project.category && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      )}
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <tech.icon className={`w-4 h-4 ${tech.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Key Features
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-3">
          {project.Live && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              <FaExternalLinkAlt className="inline mr-2" />
              Live Demo
            </motion.a>
          )}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
          >
            <FaGithub className="inline mr-2" />
            GitHub
          </motion.a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Main Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}  className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Engineering <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I focus on building effective, results-driven applications. Here’s a look at my most significant work and other experiments that showcase my problem-solving process.
          </p>
        </motion.div>

        {/* Core Projects Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Core Projects</h3>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
          </motion.div>
        </div>

        {/* Labs & Experiments Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Practice & Experiments</h3>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

