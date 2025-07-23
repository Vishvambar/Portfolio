import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science Engineering",
      institution: "MIT ADT University",
      location: "Pune, Maharashtra",
      duration: "2022 - Present",
      status: "Currently Pursuing",
      description: "Focused on software development, data structures & algorithms, and modern web technologies.",
      highlights: [
        "Relevant coursework in Programming, Web Development, and Database Systems",
        "Active participation in coding competitions and tech events",
        "Strong foundation in Computer Science fundamentals"
      ]
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
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey in Computer Science Engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <FaGraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaAward className="w-4 h-4 mr-2 text-green-500" />
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Academic Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Academic Focus</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              My academic journey is complemented by hands-on project experience and a strong focus on 
              modern web technologies. I'm actively building my expertise in full-stack development 
              while maintaining excellent academic performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
