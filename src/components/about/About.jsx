import React from "react";
import ME from "../../Asset/me_about.jpg";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "6+", label: "Companies" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
          Get to know
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-lg" />
            <img
              src={ME}
              alt="Remi Daniel Aluko"
              className="relative w-full max-w-sm mx-auto rounded-2xl object-cover border border-white/10"
            />
          </div>

          {/* Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#111118] border border-white/5 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-indigo-400 mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">
              I'm a product-focused software engineer with over five years of
              experience building high-quality, scalable applications across
              fintech, e-commerce, fashion tech, and enterprise AI SaaS.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              At{" "}
              <span className="text-slate-200 font-medium">InPolicy</span>, I
              work across three production services — a Next.js 15 frontend, a
              NestJS API, and a Python/FastAPI AI service — shipping everything
              from security-hardened auth systems to LLM-powered violation
              detection pipelines running on GCP.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Before that, I led mobile development at NutriLab (cutting AI scan
              latency 90%), built open banking integrations at Petrong, and
              directed full-stack development for a recruitment platform rated
              4.8/5 at World Wide Techies.
            </p>

            <a
              href="#contact"
              className="inline-block px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
