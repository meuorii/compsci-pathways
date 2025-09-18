import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <header
      id="home"
      className="relative h-screen flex items-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with fade-in */}
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 md:px-16 text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Build the Future with{" "}
          <span className="text-blue-500">Computer Science</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          From Artificial Intelligence to Cybersecurity, Computer Science equips
          you with the skills to innovate, solve problems, and thrive in the
          digital world.
        </motion.p>

        {/* Buttons with staggered animation */}
        <motion.div
          className="mt-8 flex gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-500 transition shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Enroll Now
          </motion.button>

          <motion.button
            className="bg-transparent border border-blue-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
