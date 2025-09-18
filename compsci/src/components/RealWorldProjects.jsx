import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

const RealWorldProjects = () => {
  const projects = [
    { title: "AI-Powered Chatbot", desc: "Chatbot leveraging NLP to provide instant support.", img: project1 },
    { title: "E-Commerce Platform", desc: "Scalable online store with secure payments.", img: project2 },
    { title: "Cybersecurity Dashboard", desc: "System to monitor and prevent cyber threats.", img: project3 },
    { title: "Smart City IoT", desc: "IoT for traffic, waste, and energy management.", img: project4 },
    { title: "Mobile Health App", desc: "Track fitness and connect with doctors.", img: project5 },
    { title: "Cloud-Based LMS", desc: "Learning system for online courses and collaboration.", img: project6 },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 text-white relative overflow-hidden"
      style={{ backgroundColor: "#232331" }}
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#3B82F6]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#2563EB]/20 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Real-World{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Build innovative solutions with hands-on projects designed to reflect{" "}
          <span className="text-[#60A5FA] font-medium">real industry challenges</span>.
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_0_25px_#3B82F6]/40 ${
              i % 2 === 1 ? "md:mt-12" : ""
            }`}
            style={{
              background:
                "linear-gradient(135deg, rgba(31,31,46,0.9), rgba(35,35,49,0.85))",
              backdropFilter: "blur(6px)",
            }}
          >
            {/* Image with overlay */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition duration-500"></div>
            </div>

            {/* Text */}
            <div className="p-7 relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#60A5FA] transition">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {p.desc}
              </p>
              <button className="mt-6 px-6 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg text-sm font-semibold transition transform hover:scale-105 shadow-md hover:shadow-[#3B82F6]/30">
                Learn More
              </button>
            </div>

            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#3B82F6] transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealWorldProjects;
