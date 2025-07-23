import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava
} from 'react-icons/fa';
import {
  SiExpress,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiVercel,
  SiVisualstudiocode,
  SiPostman,
  SiOpenai,
  SiRender,
  SiCsharp
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: 90 },
        { name: "Python", icon: FaPython, color: "text-yellow-600", level: 85 },
        { name: "C++", icon: SiCplusplus, color: "text-blue-600", level: 80 },
        { name: "Java", icon: FaJava, color: "text-red-500", level: 75 },
        { name: "SQL", icon: SiMysql, color: "text-blue-700", level: 80 },
        {
          name: "C#",
          icon: SiCsharp,
          color: "text-blue-500",
          level: 80
        }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React.js", icon: FaReact, color: "text-blue-500", level: 90 },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600", level: 85 },
        { name: "Express.js", icon: SiExpress, color: "text-gray-600", level: 80 },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500", level: 95 },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", level: 88 }
      ]
    },
    {
      category: "Tools & APIs",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600", level: 88 },
        { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white", level: 90 },
        { name: "Postman", icon: SiPostman, color: "text-orange-500", level: 85 },
        { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white", level: 85 },
        { name: "Render", icon: SiRender, color: "text-purple-600", level: 80 },
        { name: "OpenAI API", icon: SiOpenai, color: "text-green-600", level: 82 },
        { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-600", level: 92 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
              Currently exploring advanced AI tools, Whisper API, Groq LLaMA, JWT authentication, and REST API development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
