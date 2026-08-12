"use client";

import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { DIALOGUES } from "@/lib/hero";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92dvh] w-full flex flex-col justify-between pt-24 pb-10 px-6 md:px-10 z-10">
      {/* HUD Frame Accent Corners */}
      <div className="pointer-events-none absolute left-6 top-24 text-accent md:left-10 md:top-28">
        <HudFrame corner="tl" size={24} />
      </div>
      <div className="pointer-events-none absolute right-6 top-24 text-accent md:right-10 md:top-28">
        <HudFrame corner="tr" size={24} />
      </div>

      {/* Telemetry Header Line */}
      <div className="flex items-center justify-between w-full font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 pb-6">
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-accent/60" />
          <span>Telemetry Link &mdash; Live</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Arc Reactor</span>
          <span className="text-accent font-bold">87.3%</span>
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(212,162,47,0.85)]" />
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="my-auto flex flex-col items-start gap-6 max-w-[850px] py-8">
        <EyebrowBadge>AMOGH M G // AI BUILDER & SYSTEMS ARCHITECT</EyebrowBadge>

        <h1 className="font-sans text-4xl font-extrabold leading-[0.94] tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Building Next-Gen
          <br />
          <span className="text-accent">AI & LLM Products.</span>
        </h1>

        <p className="max-w-[54ch] font-sans text-sm leading-relaxed text-zinc-300 md:text-base">
          AI/ML engineering student at Brindavan College of Engineering. Builder of LLM agents, custom small language models, and fintech recovery engines.
        </p>

        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-accent bg-accent/20 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent hover:text-black active:translate-y-[1px] shadow-[0_0_20px_rgba(212,162,47,0.25)]"
          >
            Explore Arsenal
            <ArrowUpRight size={15} weight="bold" />
          </a>
          <a
            href="/Amogh_MG_Resume.docx"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/15"
          >
            <DownloadSimple size={15} weight="bold" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Featured Quote / Dialogue Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 pt-6 border-t border-white/10">
        {DIALOGUES.map((d) => (
          <div key={d.id} className="card-surface p-5 backdrop-blur-xl flex flex-col justify-between gap-3">
            <blockquote className="font-sans text-xs sm:text-sm font-medium leading-snug text-foreground">
              &ldquo;{d.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between border-t border-white/8 pt-2.5">
              <span className="font-sans text-[11px] text-zinc-300">{d.speaker}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent font-semibold">
                {d.film}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Diagnostic Bottom Bar */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 mt-6">
        <span>MARK LXXXV // SUIT ONLINE</span>
        <span>J.A.R.V.I.S. // DIAGNOSTIC</span>
        <span>Scroll &darr;</span>
      </div>
    </section>
  );
}
