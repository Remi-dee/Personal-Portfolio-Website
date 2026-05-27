import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import ME from "@Asset/self.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Remi Daniel
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Aluko
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Full-Stack Software Engineer building enterprise AI SaaS at{" "}
            <span className="text-slate-200 font-medium">InPolicy</span>.
            Shipping across Next.js, NestJS, Python, and GCP — from
            AI pipelines to hardened auth systems.
          </p>

          <div className="flex gap-3 flex-wrap mb-10">
            <a
              href="#portfolio"
              className="px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:border-indigo-400/50 hover:text-indigo-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Remi-dee"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/remi-daniel-aluko"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="hidden md:flex justify-end">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-xl" />
            <img
              src={ME}
              alt="Remi Daniel Aluko"
              className="relative w-full h-full object-cover object-top rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <HiArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
