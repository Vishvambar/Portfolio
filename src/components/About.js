import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Student",
      description: "2nd-year B.Tech Computer Science student at MIT ADT University, Pune",
      color: "text-blue-500"
    },
    {
      icon: FaCode,
      title: "Project Builder",
      description: "Building impactful tech projects and exploring AI tools to solve real problems",
      color: "text-green-500"
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges and creating innovative software solutions",
      color: "text-yellow-500"
    },
    {
      icon: FaRocket,
      title: "Tech Explorer",
      description: "Constantly exploring new technologies and staying updated with industry trends",
      color: "text-purple-500"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my journey, passion, and aspirations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm <strong className="text-blue-600 dark:text-blue-400">Vishvambar Udavant</strong>, 
                a 2nd-year B.Tech Computer Science student at MIT ADT University, Pune. I'm passionate about 
                building impactful tech projects, exploring AI tools, and solving real-world problems through software.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in full-stack web development with modern technologies like React.js, Node.js, 
                and various APIs. What drives me is the ability to turn innovative ideas into functional, 
                user-friendly applications. I'm constantly exploring new technologies, especially AI tools 
                like OpenAI API, Whisper, and Groq LLaMA to build cutting-edge solutions.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently, I'm focused on building a diverse portfolio of projects that showcase my skills 
                in web development, AI integration, and problem-solving. I believe in learning through 
                hands-on projects and am always eager to take on new challenges that push the boundaries 
                of what's possible with technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                MIT ADT University
              </div>
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                B.Tech CSE Student
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                AI & Web Developer
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${highlight.color} mr-4`}>
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              I'm always excited to collaborate on interesting projects or discuss new opportunities. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
