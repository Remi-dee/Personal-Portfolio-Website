import React from "react";

const groups = [
  {
    label: "Frontend",
    techs: ["Next.js 15", "React 19", "TypeScript", "React Native", "Expo", "Angular", "Tailwind CSS", "TanStack Query"],
  },
  {
    label: "Backend",
    techs: ["NestJS", "Node.js", "Express", "FastAPI", "Pydantic AI", "Prisma", "PostgreSQL", "Redis"],
  },
  {
    label: "AI / ML",
    techs: ["OpenAI API", "Pydantic AI", "LLM Pipelines", "Streaming SSE", "Violation Detection"],
  },
  {
    label: "Infrastructure",
    techs: ["GCP Cloud Run", "Cloud SQL", "Pub/Sub", "Secret Manager", "Terraform", "Docker", "Cloud Build"],
  },
  {
    label: "Security",
    techs: ["JWT / OAuth", "SSRF Protection", "IAM Hardening", "RBAC", "OWASP"],
  },
  {
    label: "Tools",
    techs: ["Git", "Sentry", "Firebase", "MongoDB", "Supabase", "Redux Toolkit", "WebSockets", "WebRTC"],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
          What I work with
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(({ label, techs }) => (
            <div
              key={label}
              className="bg-[#111118] border border-white/5 rounded-xl p-5"
            >
              <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#1a1a24] border border-white/5 text-slate-400 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
