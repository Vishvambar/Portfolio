import React from 'react';
import { motion } from 'framer-motion';

// --- SVG Icon Components ---
const MailIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const PhoneIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const LinkIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
);
const GithubIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const MapPinIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);


// --- Resume Data ---
const resumeData = {
  header: {
    name: "Vishvambar Ramesh Udavant",
    location: "Pune, Maharashtra, India",
    phone: "+91 9699605574",
    email: "vishvambarudavant96@gmail.com",
    portfolio: "https://portfolio-vishvambar.netlify.app",
    github: "https://github.com/Vishvambar",
  },
  objective: "Computer Engineering student specializing in full-stack development and AI-powered applications. Experienced in leading tech teams, building real-world solutions, and integrating cutting-edge APIs. Passionate about scalable product development and entrepreneurship, with the goal of launching impactful ventures that generate opportunities for India's youth.",
  skills: [
    { title: "Languages & Frameworks", items: ["Python", "JavaScript", "C++", "Java", "React.js", "Node.js", "Express.js", "Tailwind CSS"] },
    { title: "Databases & Cloud", items: ["MongoDB", "MySQL", "Firebase"] },
    { title: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "Figma", "Canva", "VS Code", "Microsoft Office"] },
    { title: "APIs & AI", items: ["REST APIs", "OpenAI API", "Whisper", "LLAMA", "Hugging Face"] },
    { title: "Other", items: ["SQL", "HTML", "CSS"] },
  ],
  education: [
    {
      degree: "Bachelor of Computer Engineering (Ongoing)",
      institution: "MIT ADT University, Pune",
      details: "Technical Team Lead, Innovation & Entrepreneurship Club",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Government Polytechnic College, Jalna",
      details: "Graduated with 86%",
    },
  ],
  experience: [
    {
      role: "Student Developer & Team Lead",
      company: "MIT ADT University",
      duration: "2023 - Present",
      points: [
        "Led 4+ development teams in building AI, web, and mobile applications.",
        "Mentored peers on full-stack development and organized technical workshops.",
        "Deployed functional prototypes used by 100+ students across campus.",
      ],
    },
  ],
  projects: [
    {
      title: "TalkBuddy - AI-Powered English Speaking Coach",
      description: "Built a language learning platform using Whisper + LLAMA + React for real-time speech recognition and AI conversational feedback. Implemented personalized learning paths and live fluency scoring, tested with 50+ users.",
    },
    {
      title: "Campus Connect - Student Social & Resource Platform",
      description: "Developed a community platform for students to share resources, ask questions, and collaborate. Integrated notifications, moderation tools, and real-time updates; deployed with ~200 active users.",
    },
    {
      title: "Digital Notes Manager (NoteVault) - Full-Stack MERN Notes App",
      description: "Created a cross-device note-taking app with JWT authentication, dark mode, categories, and real-time sync. Designed for enterprise-grade use, combining secure auth with a scalable MongoDB backend.",
    },
  ],
  achievements: [
    "Technical Team Lead - Innovation & Entrepreneurship Club, MIT ADT University",
    "Built and showcased 10+ projects at college events and innovation fairs",
  ],
  certifications: [
    "CS50 AI with Python - Harvard University (Ongoing)",
    "Git & GitHub Essentials",
    "Additional online courses in AI/ML and Web Development",
  ],
};

// --- Reusable Components ---
const Section = ({ title, children }) => (
  <motion.div 
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2 mb-4">{title}</h2>
    <div className="text-gray-700 dark:text-gray-300">
      {children}
    </div>
  </motion.div>
);

// --- Main Resume Component ---
const Resume = () => {
  const { header, objective, skills, education, experience, projects, achievements, certifications } = resumeData;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 sm:p-12">
        
        {/* Header */}
        <header className="text-center mb-10 border-b pb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">{header.name}</h1>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center"><MapPinIcon className="w-4 h-4 mr-2 text-blue-500"/>{header.location}</span>
            <a href={`tel:${header.phone}`} className="flex items-center hover:text-blue-500 transition-colors"><PhoneIcon className="w-4 h-4 mr-2 text-blue-500"/>{header.phone}</a>
            <a href={`mailto:${header.email}`} className="flex items-center hover:text-blue-500 transition-colors"><MailIcon className="w-4 h-4 mr-2 text-blue-500"/>{header.email}</a>
          </div>
           <div className="flex justify-center items-center gap-6 mt-4 text-sm text-gray-600 dark:text-gray-400">
            <a href={header.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors"><LinkIcon className="w-4 h-4 mr-2 text-blue-500"/>Portfolio</a>
            <a href={header.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500 transition-colors"><GithubIcon className="w-4 h-4 mr-2 text-blue-500"/>GitHub</a>
          </div>
        </header>

        <main>
          {/* Objective */}
          <Section title="Objective">
            <p className="leading-relaxed">{objective}</p>
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills">
            {skills.map(skillCategory => (
              <div key={skillCategory.title} className="mb-3">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{skillCategory.title}:</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map(item => (
                    <span key={item} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          {/* Experience */}
          <Section title="Experience">
            {experience.map(exp => (
              <div key={exp.role} className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.duration}</p>
                </div>
                <p className="text-md font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  {exp.points.map(point => <li key={point}>{point}</li>)}
                </ul>
              </div>
            ))}
          </Section>

          {/* Projects */}
          <Section title="Projects">
             {projects.map(proj => (
              <div key={proj.title} className="mb-4">
                 <h3 className="text-lg font-bold">{proj.title}</h3>
                 <p className="text-sm mt-1">{proj.description}</p>
              </div>
            ))}
          </Section>

          {/* Education */}
          <Section title="Education">
            {education.map(edu => (
              <div key={edu.degree} className="mb-4">
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="font-semibold text-blue-600 dark:text-blue-400">{edu.institution}</p>
                <p className="text-sm">{edu.details}</p>
              </div>
            ))}
          </Section>
          
          {/* Achievements */}
          <Section title="Achievements">
             <ul className="list-disc list-inside space-y-1 text-sm">
              {achievements.map(ach => <li key={ach}>{ach}</li>)}
            </ul>
          </Section>
          
           {/* Certifications */}
          <Section title="Certifications">
             <ul className="list-disc list-inside space-y-1 text-sm">
              {certifications.map(cert => <li key={cert}>{cert}</li>)}
            </ul>
          </Section>

        </main>
      </div>
    </div>
  );
};

export default Resume;
