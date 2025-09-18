import React from "react";
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 md:px-16 text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Build the Future with{" "}
          <span className="text-blue-500">Computer Science</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          From Artificial Intelligence to Cybersecurity, Computer Science equips
          you with the skills to innovate, solve problems, and thrive in the
          digital world.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-6">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-500 transition shadow-lg">
            Enroll Now
          </button>
          <button className="bg-transparent border border-blue-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
