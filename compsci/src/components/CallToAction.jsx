import React from "react";

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #232331 50%, #1a1a2e 50%)",
      }}
    >
      {/* Decorative glowing accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#2563EB]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
              Shape the Future?
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
            Join our{" "}
            <span className="text-[#3B82F6] font-semibold">
              Computer Science program
            </span>{" "}
            and gain the{" "}
            <span className="text-[#60A5FA] font-medium">skills, network,</span>{" "}
            and{" "}
            <span className="text-[#60A5FA] font-medium">experience</span> to
            thrive in the tech world. Don’t just keep up with innovation—be the
            one leading it.
          </p>
        </div>

        {/* Right: CTA Card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group w-full max-w-sm p-12 rounded-2xl bg-[#1F1F2E]/80 backdrop-blur-md shadow-xl border border-[#3B82F6]/30 hover:border-[#3B82F6] transition-all duration-500 text-center">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] opacity-20 blur-xl group-hover:opacity-40 transition"></div>

            <h3 className="text-2xl font-bold mb-8 relative z-10">
              Take the Next Step
            </h3>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
              <button className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1E40AF] transition shadow-lg hover:shadow-[0_0_20px_#3B82F6]">
                Enroll Now
              </button>
              <button className="px-8 py-3 rounded-lg font-semibold border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
