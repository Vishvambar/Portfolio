import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaAward,
  FaDownload,
  FaPrint,
  FaArrowLeft
} from 'react-icons/fa';

const ResumePage = () => {
  const navigate = useNavigate();

  const skills = {
    programming: ['c#','JavaScript', 'Python', 'C++', 'Java', 'SQL'],
    web: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    tools: ['Git','Unity','GitHub', 'Postman', 'Vercel', 'Render', 'OpenAI API', 'VS Code'],
    concepts: ['REST APIs', 'Full-stack Development', 'Problem Solving', 'Research']
  };

  const projects = [
    {
      name: "TalkBuddy",
      tech: "React, OpenAI API, Whisper, LLaMA",
      description: "AI-powered English speaking coach with real-time feedback",
      github: "https://github.com/vishvambar/talkbuddy"
    },
    {
      name: "Digital Notes Manager (NoteVault)",
      tech: "MERN Stack, JWT Authentication",
      description: "Full-stack notes app with user authentication and dark mode",
      github: "https://github.com/vishvambar/notevault"
    },
    {
      name: "Movie Discovery Hub",
      tech: "React, TMDB API, Tailwind CSS",
      description: "Movie exploration app with bookmarking and advanced search",
      github: "https://github.com/vishvambar/movie-discovery-hub"
    },
    {
      name: "Smart Image Uploader",
      tech: "React, JavaScript, CSS3",
      description: "Drag-and-drop image uploader with compression and progress tracking",
      github: "https://github.com/vishvambar/smart-image-uploader"
    },
    {
      name: "Organic Grocery E-Commerce",
      tech: "React, Node.js, Tailwind CSS",
      description: "E-commerce platform for local organic produce with cart functionality",
      github: "https://github.com/vishvambar/organic-grocery"
    }
  ];

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 print:bg-white print:text-black">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg print:shadow-none print:bg-white sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 print:hidden"
              >
                <FaArrowLeft className="mr-2" />
                Back to Portfolio
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black">
                Resume - Vishvambar Udavant
              </h1>
            </div>
            <div className="flex items-center space-x-2 print:hidden">
              <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                <FaDownload className="mr-2" />
                Download PDF
              </button>
              <button
                onClick={handleDownload}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center dark:border-blue-400 dark:text-blue-400"
              >
                <FaPrint className="mr-2" />
                Print
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-8"
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 print:bg-white print:shadow-none shadow-2xl rounded-lg p-8 print:p-0">
          {/* Header Section */}
          <div className="text-center mb-8 print:mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white print:text-black mb-2">
              Vishvambar Udavant
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 print:text-blue-600 mb-4">
              B.Tech CSE Student | Problem Solver | Research
            </p>

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 dark:text-gray-400 print:text-gray-700">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-600" />
                <span>vishvambarudavant96@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-600" />
                <span>+91 9699605574</span>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="mr-2 text-blue-600" />
                <span>linkedin.com/in/vishvambar-udavant</span>
              </div>
              <div className="flex items-center">
                <FaGithub className="mr-2 text-blue-600" />
                <span>github.com/vishvambar</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b-2 border-blue-600 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 print:text-gray-700 leading-relaxed">
              Passionate 2nd-year B.Tech Computer Science student at MIT ADT University, Pune, with strong
              foundation in full-stack web development and AI technologies. Experienced in building
              impactful projects using modern frameworks like React.js, Node.js, and AI APIs.
              Skilled in problem-solving, research, and creating innovative solutions that address real-world challenges.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8 print:mb-6 ">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b-2 border-blue-600 pb-2">
              <FaGraduationCap className="inline mr-2" />
              Education
            </h2>
            <div className='flex justify-center align-middle gap-3'>
              <div className="bg-gray-50 dark:bg-gray-700 print:bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black">
                      B.Tech in Computer Science Engineering
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 print:text-blue-600 font-medium">
                      MIT ADT University, Pune
                    </p>

                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-400 print:text-gray-600 font-medium">
                      2025 - Present
                    </p>
                    <p className="text-green-600 dark:text-green-400 print:text-green-600 font-medium">
                      Currently Pursuing
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 print:bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black">
                      Diploma in Computer Science Engineering
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 print:text-blue-600 font-medium">
                      Government Polytechnic College, Jalna
                    </p>

                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-400 print:text-gray-600 font-medium">
                      2022 - 2025
                    </p>
                    <p className="text-green-600 dark:text-green-400 print:text-green-600 font-medium">
                      86.45% (First Class)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b-2 border-blue-600 pb-2">
              <FaCode className="inline mr-2" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.programming.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 print:bg-blue-100 text-blue-800 dark:text-blue-200 print:text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                  Web Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-100 dark:bg-green-900 print:bg-green-100 text-green-800 dark:text-green-200 print:text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                  Tools & APIs
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 dark:bg-purple-900 print:bg-purple-100 text-purple-800 dark:text-purple-200 print:text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                  Core Concepts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 dark:bg-orange-900 print:bg-orange-100 text-orange-800 dark:text-orange-200 print:text-orange-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8 print:mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b-2 border-blue-600 pb-2">
              <FaProjectDiagram className="inline mr-2" />
              Key Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 print:bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-black">
                      {project.name}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">
                      {project.github}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 print:text-blue-600 text-sm font-medium mb-2">
                    Tech Stack: {project.tech}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 print:text-gray-700">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6 print:gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b-2 border-blue-600 pb-2">
                <FaAward className="inline mr-2" />
                Achievements
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <li>• Built 8+ full-stack web applications with modern technologies</li>
                <li>• Integrated AI APIs (OpenAI, Whisper, Groq LLaMA) in projects</li>
                <li>• Active participation in coding competitions and tech events</li>
                <li>• Strong problem-solving skills with focus on real-world applications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 border-b-2 border-blue-600 pb-2">
                Interests
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <li>• Artificial Intelligence and Machine Learning</li>
                <li>• Full-stack Web Development</li>
                <li>• Open Source Contributions</li>
                <li>• Technology Research and Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage;
