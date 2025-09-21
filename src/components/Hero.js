import React from 'react';
import { motion } from 'framer-motion';

// SVG Icon Components for better organization
const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <img
              // IMPORTANT: Replace this with the path to your own image!
              src="https://res.cloudinary.com/dn61ijqlc/image/upload/v1758432094/ImageUploader/s0cgbhqzs1sk4cn7ezof.png"
              alt="Vishvambar Udavant"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-8 border-white dark:border-gray-800 shadow-2xl"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Vishvambar</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-light"
            >
              Crafting solutions that empower learning, working, and growth.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-md text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0"
            >
              A 2nd-year B.Tech Computer Science student at MIT ADT University, Pune. Passionate about creating impactful tech projects, exploring AI innovations, and solving real-world challenges through software.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              <a href="/resume" aria-label="View Resume" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 transform hover:scale-125">
                <FileTextIcon className="w-8 h-8" />
              </a>
              <a href="#contact" aria-label="Contact Me" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 transform hover:scale-125">
                <MailIcon className="w-8 h-8" />
              </a>
              <a href="https://github.com/Vishvambar" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 transform hover:scale-125">
                <GithubIcon className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/vishvambar-udavant/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 transform hover:scale-125">
                <LinkedinIcon className="w-8 h-8" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

