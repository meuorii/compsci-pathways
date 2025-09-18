import React from "react";
import {
  FaLightbulb,
  FaGlobeAmericas,
  FaLaptopCode,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChooseCompSci = () => {
  const reasons = [
    {
      title: "Innovation & Creativity",
      desc: "Turn your ideas into real-world applications, from mobile apps to AI systems that shape the future.",
      icon: <FaLightbulb size={32} className="text-[#3B82F6]" />,
    },
    {
      title: "Global Opportunities",
      desc: "CS skills open doors to careers around the world, from Silicon Valley to startups shaping tomorrow.",
      icon: <FaGlobeAmericas size={32} className="text-[#60A5FA]" />,
    },
    {
      title: "High Demand Careers",
      desc: "Be in demand with paths like Software Engineer, Data Scientist, and Cybersecurity Specialist.",
      icon: <FaLaptopCode size={32} className="text-[#2563EB]" />,
    },
    {
      title: "Secure the Future",
      desc: "Play a critical role in cybersecurity, safeguarding systems and innovating for a safer digital world.",
      icon: <FaShieldAlt size={32} className="text-[#1E40AF]" />,
    },
  ];

  return (
    <section
      id="whycs"
      className="py-24 px-6 text-white relative"
      style={{ backgroundColor: "#232331" }}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Why Choose{" "}
          <span
            className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent"
          >
            Computer Science?
          </span>
        </h2>
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Unlock your potential in a field that blends creativity, technology,
          and problem-solving. Computer Science empowers you to design the
          future and thrive in a digital-first world.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="relative group rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-transform duration-500 hover:-translate-y-3 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(31,31,46,0.9), rgba(35,35,49,0.8))",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Glow border effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"
              style={{
                background:
                  "linear-gradient(135deg, #60A5FA, #3B82F6, #2563EB)",
              }}
            ></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Icon inside glowing circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2C2C2B] border border-[#3B82F6]/40 mb-6 group-hover:border-[#3B82F6] transition">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#60A5FA] transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseCompSci;
