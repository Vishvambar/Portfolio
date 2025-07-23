import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaStar, FaEye, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TalkBuddy",
      subtitle: "AI-Powered Language Coach",
      description: "Revolutionary English speaking coach using Whisper, LLaMA & React. Features real-time AI feedback, speech recognition, and personalized learning paths.",
      techStack: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "OpenAI API", icon: SiNextdotjs, color: "text-green-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
      ],
      liveDemo: "https://talkbuddy-demo.vercel.app",
      github: "https://github.com/Vishvambar/Talkbuddy",
      features: ["AI conversation", "Speech recognition", "Real-time feedback"],
      category: "AI & Machine Learning",
      status: "In MVP phase",
      metrics: { stars: 45, views: "2.3k", complexity: "Advanced" },
      gradient: "from-purple-500 to-pink-500",
      Live: false
    },
    {
      id: 2,
      title: "Smart Image Uploader",
      subtitle: "Advanced File Management",
      description: "High-performance drag-and-drop image uploader with automatic compression, format conversion, and real-time upload progress tracking.",
      techStack: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
      ],
      liveDemo: "https://imageuploader-v1.netlify.app",
      github: "https://github.com/Vishvambar/ImageUploader",
      features: ["Drag & drop", "Image compression", "Progress tracking"],
      category: "Frontend Tools",
      status: "Active",
      metrics: { stars: 32, views: "1.8k", complexity: "Intermediate" },
      gradient: "from-green-500 to-blue-500",
      Live: true

    },
    {
      id: 3,
      title: "Movie Discovery Hub",
      subtitle: "Entertainment Platform",
      description: "TMDB-powered React application for movie discovery with advanced search, ratings, watchlists, and personalized recommendations.",
      techStack: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
      ],
      liveDemo: "https://moviesearch-alpha.vercel.app/",
      github: "https://github.com/Vishvambar/movie-search-app",
      features: ["TMDB API", "Bookmarking", "Advanced search"],
      category: "Web Application",
      status: "Active",
      metrics: { stars: 28, views: "1.5k", complexity: "Intermediate" },
      gradient: "from-red-500 to-orange-500",
      Live:true
    },
    {
      id: 4,
      title: "Digital Notes Manager (NoteVault)",
      subtitle: "Full-Stack MERN Application",
      description: "Enterprise-grade notes application with JWT authentication, dark mode, categories, and real-time synchronization across devices.",
      techStack: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
      ],
      liveDemo: "https://notevault-demo.render.com",
      github: "https://github.com/vishvambar/notevault",
      features: ["JWT authentication", "Dark mode", "Real-time sync"],
      category: "Full-Stack Development",
      status: "Active",
      metrics: { stars: 38, views: "2.1k", complexity: "Advanced" },
      gradient: "from-blue-500 to-purple-500",
      Live: true

    },
    {
      id: 5,
      title: "Organic Grocery E-Commerce",
      subtitle: "E-Commerce Platform",
      description: "Modern e-commerce platform for organic produce with advanced filters, shopping cart, payment integration, and inventory management.",
      techStack: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" }
      ],
      liveDemo: "https://vishvambar.github.io/organic-ecommerce-platform",
      github: "https://github.com/Vishvambar/organic-ecommerce-platform",
      features: ["Product filters", "Shopping cart", "Payment gateway"],
      category: "E-Commerce",
      status: "Active",
      metrics: { stars: 42, views: "2.8k", complexity: "Advanced" },
      gradient: "from-green-500 to-emerald-500",
      Live: true
    },
    {
      id: 6,
      title: "Recipe Search Platform",
      description: "Search recipes using ingredients via Spoonacular API with dietary filters and nutritional information.",
      techStack: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
      ],
      liveDemo: "https://recipe-search-demo.netlify.app",
      github: "https://github.com/vishvambar/recipe-search",
      features: ["Ingredient search", "Dietary filters", "Nutrition info"],
      Live: true
    },
    {
      id: 7,
      title: "Bakery Shop Website",
      description: "Static business website for a local bakery with product showcase, menu, and contact information.",
      techStack: [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
      ],
      liveDemo: "https://bakery-shop-demo.netlify.app",
      github: "https://github.com/vishvambar/bakery-shop",
      features: ["Product showcase", "Contact form", "Responsive design"],
      Live: true
    },
    {
      id: 8,
      title: "Kids Coding Learning Platform",
      description: "Educational website for teaching basic coding concepts to children with interactive lessons and games.",
      techStack: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
      ],
      liveDemo: "https://kids-coding-demo.vercel.app",
      github: "https://github.com/vishvambar/kids-coding-platform",
      features: ["Interactive lessons", "Coding games", "Progress tracking"],
      Live: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            <FaStar className="mr-2" />
            8+ Production-Ready Projects
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here's a showcase of my recent full-stack projects that demonstrate my expertise in
            <span className="font-semibold text-blue-600 dark:text-blue-400"> modern web development</span>,
            <span className="font-semibold text-purple-600 dark:text-purple-400"> AI integration</span>, and
            <span className="font-semibold text-green-600 dark:text-green-400"> scalable solutions</span>
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200 dark:border-gray-700"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient || 'from-blue-500 to-purple-500'}`}></div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {project.status || 'Active'}
                </span>
              </div>

              <div className="p-8">
                {/* Header Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {project.subtitle && (
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {project.subtitle}
                    </p>
                  )}

                  {project.category && (
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Metrics Row */}
                {project.metrics && (
                  <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <FaStar className="w-4 h-4" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.metrics.stars}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-500">
                      <FaEye className="w-4 h-4" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.metrics.views}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-500">
                      <FaCode className="w-4 h-4" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.metrics.complexity}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
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

                {/* Key Features */}
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

                {/* Action Buttons */}
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

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
