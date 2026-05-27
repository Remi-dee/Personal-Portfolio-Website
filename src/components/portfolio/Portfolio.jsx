import React, { useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { data } from "./data";

const ProjectCard = ({ category, title, description, stack, github, demo, images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <article className="bg-[#111118] border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-indigo-500/20 transition-colors group">
      {/* Image carousel */}
      <div className="relative h-44 overflow-hidden bg-[#1a1a24]">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 group-hover:scale-105 transition-transform duration-500 ${
              i === current ? "opacity-80" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 z-10">
          {category}
        </span>

        {/* Dot indicators — only shown if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-4 h-1.5 bg-indigo-400"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-white text-sm mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded bg-[#1a1a24] text-slate-500 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(demo || github) && (
          <div className="flex items-center gap-3 pt-3 border-t border-white/5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <FiGithub size={13} />
                Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <FiExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
          What I've built
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
