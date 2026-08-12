"use client";

import { useState } from "react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { RESUME_DATA, Project } from "@/lib/resume";
import { ArrowUpRight, GithubLogo, CheckCircle, X, Sparkle } from "@phosphor-icons/react";

export function ProjectArsenal() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "LLM / Agents",
    "SLM / Models",
    "Fintech / Systems",
    "WebSockets / Realtime",
    "Optimization",
    "AI Avatars",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? RESUME_DATA.projects
      : RESUME_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative px-6 py-14 md:px-10 md:py-20 z-10">
      {/* Background HUD accents */}
      <div className="pointer-events-none absolute top-1/3 right-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:gap-10 relative z-10">
        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>ARMOR VAULT // PRODUCTION PROJECTS</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
                  Project <span className="text-accent">Arsenal</span>
                </h2>
                <p className="mt-3 max-w-[52ch] font-sans text-sm text-zinc-400 sm:text-base">
                  8+ production-grade AI systems, custom language models, and automated fintech engines built from scratch.
                </p>
              </div>

              {/* Categories Filter */}
              <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-all ${
                      selectedCategory === cat
                        ? "bg-accent text-black shadow-[0_0_15px_rgba(212,162,47,0.4)]"
                        : "text-zinc-400 hover:text-foreground hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Projects Cards Grid */}
        <AnimatedSection className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <AnimatedItem key={project.id}>
              <div className="group relative card-surface flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1.5 h-full">
                <div className="pointer-events-none absolute right-4 top-4 text-accent/20 group-hover:text-accent/70 transition-colors">
                  <HudFrame corner="tr" size={16} />
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                      {project.category}
                    </span>
                    {project.highlight && (
                      <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400 font-bold">
                        <Sparkle size={12} weight="fill" /> {project.highlight}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-sm leading-relaxed text-zinc-300">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="flex flex-col gap-2 pt-3 border-t border-white/8 font-sans text-xs text-zinc-400">
                    {project.bullets.slice(0, 2).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent shrink-0 mt-0.5">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-5 pt-4 border-t border-white/8">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:underline flex items-center gap-1.5"
                    >
                      View Specs &amp; Metrics &rarr;
                    </button>

                    <a
                      href={project.github || "https://github.com/amoghmg007"}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 bg-white/5 p-2 text-foreground transition-all hover:bg-white/15 hover:border-accent/40"
                      title="View GitHub Repository"
                    >
                      <GithubLogo size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>

      {/* Project Deep Dive Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-fadeIn">
          <div className="relative card-surface w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 sm:p-10 flex flex-col gap-6 border-accent/50 shadow-[0_0_60px_rgba(212,162,47,0.25)]">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full border border-white/15 bg-white/5 text-zinc-400 hover:text-foreground hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent font-semibold">
                // SYSTEM SPECIFICATIONS &amp; ARCHITECTURE
              </span>
              <h3 className="font-sans text-3xl font-extrabold tracking-tight text-foreground">
                {activeProject.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                {activeProject.subtitle}
              </p>
            </div>

            <p className="font-sans text-base leading-relaxed text-zinc-300">
              {activeProject.description}
            </p>

            {activeProject.metrics && (
              <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-4 font-mono bg-black/40 p-4 rounded-xl">
                {activeProject.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase text-zinc-400 tracking-[0.18em]">{m.label}</span>
                    <span className="text-xl font-bold text-accent">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-accent mb-3 font-semibold">
                Key Technical Accomplishments:
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-sm text-zinc-300">
                {activeProject.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 border-t border-white/10">
              <a
                href={activeProject.github || "https://github.com/amoghmg007"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-white/20"
              >
                <GithubLogo size={16} />
                View Code Base
              </a>
              <button
                onClick={() => setActiveProject(null)}
                className="rounded-full border border-accent bg-accent px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-amber-400"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
