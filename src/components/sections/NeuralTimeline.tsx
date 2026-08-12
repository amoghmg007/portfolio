"use client";

import { useState } from "react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { RESUME_DATA } from "@/lib/resume";
import { GraduationCap, Trophy, CheckCircle } from "@phosphor-icons/react";

export function NeuralTimeline() {
  const [activeTab, setActiveTab] = useState<"all" | "leadership" | "education">("all");

  const { education, leadership } = RESUME_DATA;

  return (
    <section id="experience" className="relative px-6 py-14 md:px-10 md:py-20 z-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:gap-10 relative z-10">
        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>NEURAL TIMELINE // LEADERSHIP &amp; ACADEMIA</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
                  Leadership &amp; <span className="text-accent">Education</span>
                </h2>
                <p className="mt-3 max-w-[50ch] font-sans text-sm text-zinc-400 sm:text-base">
                  Youngest IEEE Executive Member on record &amp; Code Red Hackathon Finalist.
                </p>
              </div>

              {/* View Switcher */}
              <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`rounded-full px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-all ${
                    activeTab === "all"
                      ? "bg-accent text-black shadow-[0_0_15px_rgba(212,162,47,0.4)]"
                      : "text-zinc-400 hover:text-foreground"
                  }`}
                >
                  All Milestones
                </button>
                <button
                  onClick={() => setActiveTab("leadership")}
                  className={`rounded-full px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-all ${
                    activeTab === "leadership"
                      ? "bg-accent text-black shadow-[0_0_15px_rgba(212,162,47,0.4)]"
                      : "text-zinc-400 hover:text-foreground"
                  }`}
                >
                  IEEE &amp; Honors
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`rounded-full px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-all ${
                    activeTab === "education"
                      ? "bg-accent text-black shadow-[0_0_15px_rgba(212,162,47,0.4)]"
                      : "text-zinc-400 hover:text-foreground"
                  }`}
                >
                  Academia
                </button>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: IEEE Leadership & Hackathons */}
          {(activeTab === "all" || activeTab === "leadership") && (
            <AnimatedSection className={`flex flex-col gap-8 ${activeTab === "all" ? "lg:col-span-6" : "lg:col-span-12"}`}>
              <AnimatedItem>
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <Trophy size={24} className="text-accent shrink-0" />
                  <h3 className="font-mono text-sm font-bold uppercase tracking-[0.28em] text-accent">
                    // LEADERSHIP &amp; RECOGNITION
                  </h3>
                </div>
              </AnimatedItem>

              {leadership.map((item) => (
                <AnimatedItem key={item.id}>
                  <div className="card-surface p-6 relative flex flex-col gap-5 border-l-4 border-l-accent group">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs text-zinc-400">
                        {item.period} &nbsp;&middot;&nbsp; {item.location}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-sans text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {item.role}
                      </h4>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 block mt-1">
                        {item.organization}
                      </span>
                    </div>

                    <p className="font-sans text-sm leading-relaxed text-zinc-300">
                      {item.description}
                    </p>

                    <ul className="flex flex-col gap-2.5 pt-3 border-t border-white/8 font-sans text-xs text-zinc-400">
                      {item.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          )}

          {/* Right Column: Academic Foundation */}
          {(activeTab === "all" || activeTab === "education") && (
            <AnimatedSection className={`flex flex-col gap-8 ${activeTab === "all" ? "lg:col-span-6" : "lg:col-span-12"}`}>
              <AnimatedItem>
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <GraduationCap size={24} className="text-accent shrink-0" />
                  <h3 className="font-mono text-sm font-bold uppercase tracking-[0.28em] text-accent">
                    // ACADEMIC FOUNDATION
                  </h3>
                </div>
              </AnimatedItem>

              {education.map((edu, i) => (
                <AnimatedItem key={i}>
                  <div className="card-surface p-6 relative flex flex-col gap-5 group">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300">
                        DEGREE SPECIFICATION
                      </span>
                      <span className="font-mono text-xs text-zinc-400">
                        {edu.period} &nbsp;&middot;&nbsp; {edu.location}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-sans text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent block mt-1 font-semibold">
                        {edu.institution}
                      </span>
                    </div>

                    <p className="font-sans text-sm leading-relaxed text-zinc-300">
                      {edu.details}
                    </p>

                    {edu.coursework && (
                      <div className="pt-4 border-t border-white/8">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 block mb-2 font-medium">
                          Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((c) => (
                            <span
                              key={c}
                              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-zinc-300"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}
