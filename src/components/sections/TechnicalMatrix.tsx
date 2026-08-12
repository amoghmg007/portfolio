"use client";

import { useState } from "react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { RESUME_DATA } from "@/lib/resume";
import { Cpu, Code, Database, Terminal, CheckCircle } from "@phosphor-icons/react";

const CATEGORY_ICONS: Record<string, any> = {
  Languages: Code,
  "AI / ML & NLP": Cpu,
  "Backend & Data Engines": Database,
  "Frontend & Tooling": Terminal,
};

export function TechnicalMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...RESUME_DATA.skillGroups.map((g) => g.category)];

  const filteredGroups =
    activeCategory === "All"
      ? RESUME_DATA.skillGroups
      : RESUME_DATA.skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="relative px-6 py-14 md:px-10 md:py-20 z-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:gap-10 relative z-10">
        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>TECHNICAL MATRIX // SUBSYSTEM DIAGNOSTICS</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
                  Engineering <span className="text-accent">Capabilities</span>
                </h2>
                <p className="mt-3 max-w-[52ch] font-sans text-sm text-zinc-400 sm:text-base">
                  Full-stack AI development: from custom tokenizers &amp; PyTorch architectures to WebSockets real-time systems.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-all ${
                      activeCategory === cat
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

        {/* Skill Groups Grid */}
        <AnimatedSection className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredGroups.map((group) => {
            const IconComponent = CATEGORY_ICONS[group.category] || Cpu;

            return (
              <AnimatedItem key={group.category}>
                <div className="card-surface p-6 sm:p-8 relative flex flex-col gap-6 group">
                  <div className="pointer-events-none absolute right-5 top-5 text-accent/20 group-hover:text-accent/60 transition-colors">
                    <HudFrame corner="tr" size={18} />
                  </div>

                  <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent shadow-[0_0_15px_rgba(212,162,47,0.15)]">
                      <IconComponent size={24} weight="bold" />
                    </div>
                    <div>
                      <h3 className="font-sans text-2xl font-bold text-foreground">
                        {group.category}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                        {group.skills.length} Calibrated Modules
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between rounded-xl border border-white/8 bg-black/40 px-4 py-3.5 transition-all hover:border-accent/40 hover:bg-black/60"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle size={16} className="text-accent shrink-0" />
                          <span className="font-sans text-sm font-semibold text-zinc-200">
                            {skill.name}
                          </span>
                        </div>
                        {skill.badge ? (
                          <span className="rounded-md border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
                            {skill.badge}
                          </span>
                        ) : skill.level ? (
                          <span className="font-mono text-[10px] text-zinc-400">
                            {skill.level}
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>

        {/* HUD Subsystem Readout */}
        <AnimatedSection>
          <AnimatedItem>
            <div className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-6 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-300 flex flex-col gap-3 md:flex-row md:items-center md:justify-between shadow-[0_0_20px_rgba(212,162,47,0.1)]">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping shrink-0" />
                <span>AI &amp; AGENT ARCHITECTURE STATUS // ALL SYSTEMS OPERATIONAL</span>
              </div>
              <span className="text-accent font-bold">PyTorch · LangChain · FastAPI · Transformers · RAG</span>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
