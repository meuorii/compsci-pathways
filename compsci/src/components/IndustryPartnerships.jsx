import React, { useEffect, useMemo, useRef, useState } from "react";
import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import amazonLogo from "../assets/amazon.png";
import ibmLogo from "../assets/ibm.png";
import facebookLogo from "../assets/facebook.png";
import startupLogo from "../assets/startup.png";

const IndustryPartnerships = () => {
  const partners = [
    { name: "Google", logo: googleLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "IBM", logo: ibmLogo },
    { name: "Meta", logo: facebookLogo },
    { name: "Tech Startup", logo: startupLogo },
  ];

  const canvasRef = useRef(null);
  const [radius, setRadius] = useState(170);
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    const setR = () => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const r = Math.max(120, Math.min(200, Math.floor(Math.min(rect.width, rect.height) * 0.32)));
      setRadius(r);
    };
    setR();
    window.addEventListener("resize", setR);
    return () => window.removeEventListener("resize", setR);
  }, []);

  // Animate rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setAngleOffset((prev) => prev + 0.01); // slow rotation
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const orbit = useMemo(() => {
    const count = partners.length;
    return partners.map((p, i) => {
      const angle = (i / count) * 2 * Math.PI - Math.PI / 2 + angleOffset;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { ...p, x, y };
    });
  }, [partners, radius, angleOffset]);

  return (
    <section
      id="partners"
      className="py-24 px-6 text-white relative overflow-hidden"
      style={{ backgroundColor: "#232331" }}
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#2563EB]/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Orbit Visualization */}
        <div ref={canvasRef} className="relative h-[500px] flex items-center justify-center">
          {/* Orbit Circle */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
            <circle cx="50%" cy="50%" r={radius} stroke="#3B82F6" strokeWidth="1" fill="none" />
          </svg>

          {/* Center Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#1F1F2E]/80 backdrop-blur-md shadow-lg border-2 border-[#3B82F6] relative">
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-full bg-[#3B82F6]/30 blur-2xl animate-pulse"></div>
              <img src={microsoftLogo} alt="Microsoft" className="h-14 object-contain relative z-10" />
            </div>
            <p className="mt-2 text-gray-300 text-sm">Microsoft</p>
          </div>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
            {orbit.map((n, idx) => (
              <line
                key={`line-${idx}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${n.x}px)`}
                y2={`calc(50% + ${n.y}px)`}
                stroke="#60A5FA"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Orbiting Nodes */}
          {orbit.map((n, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center group"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${n.x}px, ${n.y}px)`,
              }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#1F1F2E] shadow-lg border-2 border-transparent group-hover:border-[#3B82F6] transition-all duration-500 relative">
                {/* Glow halo */}
                <div className="absolute inset-0 rounded-full bg-[#3B82F6]/30 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
                <img
                  src={n.logo}
                  alt={n.name}
                  className="h-9 object-contain opacity-80 group-hover:opacity-100 transition relative z-10"
                />
              </div>
              <p className="mt-2 text-gray-300 text-xs group-hover:text-[#60A5FA] transition">
                {n.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Header and Description */}
        <div className="text-left md:pl-8 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
              Industry Partners
            </span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg max-w-lg leading-relaxed">
            Collaborating with global leaders, we connect students with{" "}
            <span className="text-[#3B82F6] font-semibold">internships</span>,{" "}
            <span className="text-[#3B82F6] font-semibold">mentorships</span>, and{" "}
            <span className="text-[#3B82F6] font-semibold">career opportunities</span> across the
            tech industry. Our partnerships prepare graduates for impactful roles in world-class
            companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartnerships;
