import React from 'react';
import { motion } from 'framer-motion';

// --- SVG Icon Components ---
// Replaced react-icons with inline SVGs to resolve the dependency issue.

const GraduationCapIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2L1 7.5V13.5C1 16.279 3.686 18.234 6.5 19.344V22H8V18.277C9.286 18.738 10.618 19 12 19C13.382 19 14.714 18.738 16 18.277V22H17.5V19.344C20.314 18.234 23 16.279 23 13.5V7.5L12 2ZM12 4.04L19.953 8.25L12 12.46L4.047 8.25L12 4.04Z" />
        <path d="M4.5 9.75V13.5C4.5 14.232 5.42 14.862 6.5 15.26V11.59L4.5 10.47V9.75Z" />
        <path d="M20.5 9.75V10.47L18.5 11.59V15.26C19.58 14.862 20.5 14.232 20.5 13.5V9.75Z" />
    </svg>
);

const CalendarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4ZM19 20H5V9H19V20ZM19 7H5V6H19V7Z" />
    </svg>
);

const MapMarkerIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" />
    </svg>
);

const AwardIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" />
        <path d="M12 10C15.3137 10 18 12.6863 18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16C6 12.6863 8.68629 10 12 10ZM12 8C7.58172 8 4 11.5817 4 16C4 20.4183 7.58172 24 12 24C16.4183 24 20 20.4183 20 16C20 11.5817 16.4183 8 12 8Z" />
        <path d="M12 13C11.4477 13 11 13.4477 11 14V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V14C13 13.4477 12.5523 13 12 13Z" />
        <path d="M9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H9Z" />
    </svg>
);


const EducationCard = ({ edu, index }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: index * 0.2
            }
        }
    };

    return (
        <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                        <GraduationCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
            </div>

            <div className="flex flex-wrap items-center justify-between mb-6 gap-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span className="font-medium">{edu.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapMarkerIcon className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                </div>
                <div className="flex items-center">
                    <AwardIcon className={`w-4 h-4 mr-2 ${edu.status === "Completed" ? "text-purple-500" : "text-green-500"}`} />
                    <span className={`${edu.status === "Completed" ? "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"} px-3 py-1 rounded-full text-sm font-medium`}>
                        {edu.status}
                    </span>
                </div>
            </div>


            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                {edu.description}
            </p>

            
        </motion.div>
    );
};


const Education = () => {
    const education = [
      {
        id: 1,
        degree: "B.Tech in Computer Science Engineering",
        institution: "MIT ADT University",
        location: "Pune, Maharashtra",
        duration: "2025 - Present",
        status: "Currently Pursuing",
        description: "Specializing in software development, data structures, algorithms, and modern web technologies.",
      },
      {
        id: 2,
        degree: "Diploma in Computer Science Engineering",
        institution: "Government Polytechnic, Jalna",
        location: "Jalna, Maharashtra",
        duration: "2022 - 2025",
        status: "Completed",
        description: "Graduated with 86%, gaining a solid foundation in computer science principles and hands-on programming experience.",
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    {education.map((edu, index) => (
                        <EducationCard key={edu.id} edu={edu} index={index} />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white max-w-6xl mx-auto">
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

