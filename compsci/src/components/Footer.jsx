import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Variants for staggered animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-20 pb-10 px-6 overflow-hidden"
      style={{ backgroundColor: "#232331" }}
    >
      {/* Decorative glowing accents (static, not animated) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3B82F6]/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#2563EB]/20 blur-3xl rounded-full -z-10"></div>

      {/* Top Divider (static) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-40"></div>

      {/* Main Footer Content with animation */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left: Personal Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent mb-3">
            Ken Andrei A. Torres
          </h3>
          <p className="text-gray-400 leading-relaxed">
            BS Computer Science Student <br />
            President Ramon Magsaysay State University
          </p>
        </motion.div>

        {/* Center: Navigation */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-4 text-[#60A5FA]">Explore</h4>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "#home" },
              { name: "Why Computer Science", link: "#whycs" },
              { name: "Career Opportunities", link: "#careers" },
              { name: "Real-World Projects", link: "#projects" },
              { name: "Skills You'll Master", link: "#skills" },
              { name: "Industry Partnerships", link: "#partners" },
              { name: "Contact", link: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="relative inline-block text-gray-400 hover:text-[#3B82F6] transition-colors after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#3B82F6] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Social Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold mb-4 text-[#60A5FA]">Connect</h4>
          <div className="flex justify-center md:justify-start gap-5">
            {[
              { icon: <FaFacebookF />, link: "https://facebook.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaGithub />, link: "https://github.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-[#3B82F6]/60 text-[#60A5FA] hover:text-white hover:border-[#3B82F6] hover:shadow-[0_0_20px_#3B82F6] transition-all duration-300"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar with animation */}
      <motion.div
        className="border-t border-[#3B82F6]/20 pt-6 text-center text-gray-500 text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        © {new Date().getFullYear()} Ken Andrei A. Torres · All Rights Reserved
      </motion.div>
    </footer>
  );
};

export default Footer;
