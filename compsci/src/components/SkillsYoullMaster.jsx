import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaLock,
  FaProjectDiagram,
  FaBrain,
  FaCloud,
} from "react-icons/fa";

const SkillsYoullMaster = () => {
  const skills = [
    {
      title: "Programming",
      desc: "Master languages like Python, JavaScript, and C++ to solve real-world problems.",
      icon: <FaCode size={28} />,
    },
    {
      title: "Databases",
      desc: "Learn SQL and NoSQL databases to store, manage, and retrieve data efficiently.",
      icon: <FaDatabase size={28} />,
    },
    {
      title: "Cybersecurity",
      desc: "Understand security principles to protect systems, data, and networks.",
      icon: <FaLock size={28} />,
    },
    {
      title: "Project Management",
      desc: "Develop collaboration and planning skills to deliver real-world tech solutions.",
      icon: <FaProjectDiagram size={28} />,
    },
    {
      title: "AI & Machine Learning",
      desc: "Explore algorithms and AI systems that can learn and adapt intelligently.",
      icon: <FaBrain size={28} />,
    },
    {
      title: "Cloud Computing",
      desc: "Work with AWS, Azure, or Google Cloud to deploy and manage scalable systems.",
      icon: <FaCloud size={28} />,
    },
  ];

  // Variants for container and items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 text-white relative overflow-hidden"
      style={{ backgroundColor: "#232331" }}
    >
      {/* Decorative glowing accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3B82F6]/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#2563EB]/20 blur-3xl rounded-full -z-10"></div>

      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Skills You’ll{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
            Master
          </span>
        </h2>
        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Build a versatile skillset that equips you for the tech industry. From
          coding to AI, discover the tools and knowledge you’ll gain throughout
          your Computer Science journey.
        </p>
      </motion.div>

      {/* Roadmap Grid */}
      <motion.div
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Connector line (glowing) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-[#2C2C2B] via-[#3B82F6]/30 to-[#2C2C2B]"></div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 relative z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl shadow-lg bg-[#1F1F2E]/90 backdrop-blur-md 
              transition-all duration-500 group overflow-hidden"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#3B82F6] transition-all duration-500"></div>

              {/* Icon in glowing circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2C2C2B] border border-[#3B82F6]/40 mb-5
                group-hover:border-[#3B82F6] group-hover:shadow-[0_0_20px_#3B82F6] transition-all duration-500">
                <span className="text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors">
                  {skill.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsYoullMaster;
