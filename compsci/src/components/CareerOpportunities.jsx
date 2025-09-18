import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import softwareEngineerImg from "../assets/software-engineer.jpg";
import dataScientistImg from "../assets/data-scientist.jpg";
import cybersecurityImg from "../assets/cybersecurity.jpg";
import aiMlImg from "../assets/machine-learning.jpg";
import gameDevImg from "../assets/game-development.jpg";
import cloudArchitectImg from "../assets/cloud-architecture.jpg";

const CareerOpportunities = () => {
  const careers = [
    {
      title: "Software Engineer",
      desc: "Design and build software solutions that power businesses, apps, and global technology.",
      img: softwareEngineerImg,
    },
    {
      title: "Data Scientist",
      desc: "Analyze and interpret complex data to help organizations make smarter, data-driven decisions.",
      img: dataScientistImg,
    },
    {
      title: "Cybersecurity Analyst",
      desc: "Protect systems and networks against threats, ensuring data and infrastructure remain secure.",
      img: cybersecurityImg,
    },
    {
      title: "AI & Machine Learning Engineer",
      desc: "Develop intelligent systems that can learn, adapt, and transform industries.",
      img: aiMlImg,
    },
    {
      title: "Game Developer",
      desc: "Bring creativity to life by designing and programming immersive gaming experiences.",
      img: gameDevImg,
    },
    {
      title: "Cloud Architect",
      desc: "Design and manage scalable cloud solutions that power modern businesses worldwide.",
      img: cloudArchitectImg,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? careers.length - 2 : prev - 2));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 2 >= careers.length ? 0 : prev + 2));
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <section
      id="careers"
      className="py-32 px-6 text-white relative overflow-hidden"
      style={{ backgroundColor: "#232331" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Header + Arrows */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Career <span className="text-[#3B82F6]">Opportunities</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg max-w-md">
            A degree in Computer Science opens doors to diverse career paths.
            Explore the fields where you can thrive and shape the future of
            technology.
          </p>
          <div className="flex gap-4 mt-10">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#2C2C2B] hover:bg-[#3B82F6] shadow-lg hover:shadow-[#3B82F6]/40 transition"
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleNext}
              className="p-3 rounded-full bg-[#2C2C2B] hover:bg-[#3B82F6] shadow-lg hover:shadow-[#3B82F6]/40 transition"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Sliding Cards with AnimatePresence */}
        <div className="grid sm:grid-cols-2 gap-8 relative">
          <AnimatePresence mode="wait">
            {careers.slice(startIndex, startIndex + 2).map((career, index) => (
              <motion.div
                key={career.title} // use title for stable key
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
              >
                {/* Background Image */}
                <img
                  src={career.img}
                  alt={career.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 z-10">
                  <h3 className="text-2xl font-bold mb-3 text-[#60A5FA] group-hover:text-white transition">
                    {career.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {career.desc}
                  </p>
                </div>

                {/* Glow Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#3B82F6] transition duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Glow Background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CareerOpportunities;
