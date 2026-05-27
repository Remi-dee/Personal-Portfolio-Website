import React, { useState } from "react";

const jobs = [
  {
    company: "InPolicy",
    role: "Full-Stack Software Engineer",
    period: "Oct 2025 – Present",
    type: "Full-time",
    description:
      "Enterprise multi-tenant AI-powered policy management platform. Working across three production services on GCP.",
    bullets: [
      "Resolved 14 security audit findings across 5 sprint cycles — SSRF/DNS-rebinding, JWT type-claim hardening, Redis-backed permission revalidation (≤30s), and IAM least-privilege enforcement.",
      "Hardened GCP Cloud Run with Terraform: dedicated service accounts with scoped IAM bindings, zero-downtime rolling deploys.",
      "Built streaming violation detection pipeline in Python with tenant isolation, SSE keepalive, and overlap-window search.",
      "Wired Sentry observability across all three services with PII scrubbing.",
    ],
    stack: ["Next.js 15", "NestJS", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "GCP", "Terraform"],
  },
  {
    company: "NutriLab Singapore",
    role: "Lead Developer — AI Mobile App",
    period: "Jun 2025 – Oct 2025",
    type: "Contract",
    description:
      "AI-driven nutrition and food analysis app. Led architecture and delivery from unstructured codebase to production-ready.",
    bullets: [
      "Reduced food scan API latency from 30s to 3–4s (90% reduction) through AI pipeline restructuring.",
      "Architected AI chat streaming loop with intelligent context management using OpenAI API.",
      "Set up EAS build & OTA pipelines, enabling rapid testing and deployment cycles.",
      "Mentored three junior AI/ML and DevSecOps engineers.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "OpenAI API", "Firebase", "Node.js", "EAS"],
  },
  {
    company: "ExpatSwap",
    role: "Full-Stack Developer",
    period: "Sep 2024 – Sep 2025",
    type: "Full-time",
    description: "Expat community and services platform.",
    bullets: [
      "Launched high-impact features that boosted user engagement by 40%.",
      "Restructured deployment pipelines, cutting release cycle time by 35%.",
    ],
    stack: ["Angular", "NestJS", "WebSockets", "MongoDB"],
  },
  {
    company: "Petrong Software Solutions",
    role: "Full-Stack Developer",
    period: "Apr 2024 – Sep 2024",
    type: "Full-time",
    description:
      "Built two fintech products: FXKARASHELL (blockchain P2P forex exchange) and Fewchore (lending platform).",
    bullets: [
      "Integrated Truelayer & Mono open banking APIs — 20% uplift in successful transactions.",
      "Delivered secure escrow wallet system that reduced disputes by 15%.",
      "Reduced loan processing time by 30% through backend optimisation and third-party integrations.",
    ],
    stack: ["React", "Next.js", "NestJS", "MongoDB", "Truelayer", "Mono API"],
  },
  {
    company: "World Wide Techies",
    role: "Developer Lead & Maintainer",
    period: "Jan 2023 – Dec 2024",
    type: "Lead",
    description:
      "Led full-stack development for Talentyard, a recruitment platform, and an anonymous real-time chat tool.",
    bullets: [
      "Directed full-stack development for Talentyard — achieved a 4.8/5 user rating.",
      "Built real-time chat platform with WebRTC/WebSockets, maintaining 99.5%+ uptime across 600+ active users.",
      "Mentored junior developers, reducing onboarding time and delivery cycles by 25%.",
    ],
    stack: ["React", "Next.js", "Firebase", "WebSockets", "MongoDB"],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
          Where I've worked
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Experience
        </h2>

        <div className="space-y-3">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className="border border-white/5 rounded-xl bg-[#111118] overflow-hidden"
            >
              {/* Header row */}
              <button
                className="w-full text-left px-6 py-5 flex items-start md:items-center justify-between gap-4 hover:bg-white/2 transition-colors"
                onClick={() => setExpanded(expanded === i ? -1 : i)}
              >
                <div className="flex items-start md:items-center gap-4 flex-1 min-w-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-semibold text-white">
                        {job.company}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{job.role}</p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">
                    {job.period}
                  </span>
                </div>
                <span className="text-slate-500 text-lg shrink-0 ml-2">
                  {expanded === i ? "−" : "+"}
                </span>
              </button>

              {/* Expanded content */}
              {expanded === i && (
                <div className="px-6 pb-6 border-t border-white/5">
                  <p className="text-slate-400 text-sm mt-4 mb-4">
                    {job.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-indigo-400 mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#1a1a24] border border-white/5 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
