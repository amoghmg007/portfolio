"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { RESUME_DATA } from "@/lib/resume";
import { MapPin, Envelope, Phone, LinkedinLogo, GithubLogo, DownloadSimple, ArrowUpRight, CheckCircle, Sparkle } from "@phosphor-icons/react";

export function ProfileOverview() {
  const { personal, stats } = RESUME_DATA;

  return (
    <section id="about" className="relative px-6 py-14 md:px-10 md:py-20 z-10">
      {/* Background HUD & Radial Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-30" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:gap-10 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>AMOGH M G // SYSTEMS ARCHITECT &amp; BUILDER</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
                  AI Builder &amp; <span className="text-accent">Systems Engineer</span>
                </h2>
                <p className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-zinc-400">
                  <MapPin size={16} className="text-accent shrink-0" />
                  {personal.location} &nbsp;&middot;&nbsp; Seeking AI Builder Intern Role
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all hover:bg-white/10"
                >
                  <GithubLogo size={16} />
                  GitHub
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all hover:bg-white/10"
                >
                  <LinkedinLogo size={16} className="text-sky-400" />
                  LinkedIn
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personal.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/20 px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-md transition-all hover:bg-accent hover:text-black shadow-[0_0_15px_rgba(212,162,47,0.2)]"
                >
                  <DownloadSimple size={16} weight="bold" />
                  Resume (DOCX)
                </a>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Core Stats Cards */}
        <AnimatedSection className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedItem key={stat.label}>
              <div className="relative card-surface p-6 overflow-hidden group">
                <div className="pointer-events-none absolute right-3 top-3 text-accent/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <HudFrame corner="tr" size={14} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 block">
                  {stat.label}
                </span>
                <div className="mt-2 font-sans text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-accent">{stat.value}</span>
                </div>
                <span className="mt-2 block font-mono text-[11px] text-zinc-400">
                  {stat.note}
                </span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Bio & Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Executive Summary */}
          <AnimatedSection className="lg:col-span-7 flex flex-col gap-6">
            <AnimatedItem>
              <div className="card-surface p-6 sm:p-8 relative flex flex-col gap-6 h-full justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent flex items-center gap-2">
                      <Sparkle size={15} weight="fill" />
                      EXECUTIVE SUMMARY
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active AI Builder
                    </span>
                  </div>

                  <p className="font-sans text-base leading-relaxed text-zinc-300 sm:text-lg">
                    {personal.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-6 border-t border-white/10 sm:grid-cols-2 font-sans text-xs text-zinc-300">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-black/30">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span>LLM Agent &amp; RAG Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-black/30">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span>Custom Small Language Models</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-black/30">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span>Fintech Recovery Engines</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-black/30">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span>IEEE Technical Workshop Mentor</span>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedSection>

          {/* Contact Details Card */}
          <AnimatedSection className="lg:col-span-5 flex flex-col gap-6">
            <AnimatedItem>
              <div className="card-surface p-6 sm:p-8 relative flex flex-col gap-6 h-full justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent block mb-6">
                    // COMM PROTOCOL SPECS
                  </span>
                  <ul className="flex flex-col gap-4 font-mono text-xs">
                    <li className="flex items-center justify-between border-b border-white/8 pb-4">
                      <span className="text-zinc-400 flex items-center gap-2.5">
                        <Envelope size={16} className="text-accent shrink-0" /> Email Address
                      </span>
                      <a href={`mailto:${personal.email}`} className="text-foreground hover:text-accent font-medium transition-colors">
                        {personal.email}
                      </a>
                    </li>
                    <li className="flex items-center justify-between border-b border-white/8 pb-4">
                      <span className="text-zinc-400 flex items-center gap-2.5">
                        <Phone size={16} className="text-accent shrink-0" /> Contact Phone
                      </span>
                      <a href={`tel:${personal.phone}`} className="text-foreground hover:text-accent font-medium transition-colors">
                        {personal.phone}
                      </a>
                    </li>
                    <li className="flex items-center justify-between border-b border-white/8 pb-4">
                      <span className="text-zinc-400 flex items-center gap-2.5">
                        <MapPin size={16} className="text-accent shrink-0" /> Base Location
                      </span>
                      <span className="text-foreground font-medium">{personal.location}</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-5 font-mono text-[11px] leading-relaxed text-zinc-300">
                  <span className="text-accent font-bold block mb-1 uppercase tracking-[0.2em]">
                    ⚡ Availability Status
                  </span>
                  Ready to deploy for AI Builder, LLM Engineer, &amp; Software Engineering Internships starting immediately.
                </div>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
