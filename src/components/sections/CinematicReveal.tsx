"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { BEATS } from "@/lib/cinematic";

export function CinematicReveal() {
  return (
    <section
      id="cinematic"
      className="relative min-h-[85dvh] w-full flex flex-col justify-between pt-20 pb-10 px-6 md:px-10 z-10"
    >
      {/* HUD Frame Accent Corners */}
      <div className="pointer-events-none absolute left-6 top-20 text-accent md:left-10 md:top-24">
        <HudFrame corner="tl" size={24} />
      </div>
      <div className="pointer-events-none absolute right-6 top-20 text-accent md:right-10 md:top-24">
        <HudFrame corner="tr" size={24} />
      </div>

      {/* Status Header */}
      <div className="flex items-center justify-between w-full font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 pb-6">
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-accent/60" />
          <span>Flight Log &mdash; Archived</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-accent font-bold">SEQ 169 / 169</span>
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(212,162,47,0.85)]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto flex flex-col items-start gap-6 max-w-[850px] py-8">
        <EyebrowBadge>TITAN II // FINAL FRAME</EyebrowBadge>

        <h2 className="font-sans text-4xl font-extrabold leading-[0.94] tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          I am Inevitable.
          <br />
          <span className="text-accent">And I am Iron Man.</span>
        </h2>

        <p className="max-w-[50ch] font-sans text-sm leading-relaxed text-zinc-300 md:text-base">
          Endgame &mdash; the snap heard across the universe. J.A.R.V.I.S. held the last frame so we could rebuild from it.
        </p>

        <div className="pt-2">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full border border-accent bg-accent/20 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent hover:text-black active:translate-y-[1px] shadow-[0_0_20px_rgba(212,162,47,0.25)]"
          >
            Explore Profile Overview
            <span aria-hidden>&darr;</span>
          </a>
        </div>
      </div>

      {/* Featured Quote / Dialogue Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 pt-6 border-t border-white/10">
        {BEATS.map((b) => (
          <div key={b.id} className="card-surface p-5 backdrop-blur-xl flex flex-col justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent font-semibold">
              {b.label}
            </span>
            <blockquote className="font-sans text-xs sm:text-sm font-medium leading-snug text-foreground">
              &ldquo;{b.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between border-t border-white/8 pt-2.5">
              <span className="font-sans text-[11px] text-zinc-300">{b.speaker}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                {b.film}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Diagnostic Line */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 mt-6">
        <span>MARK III // ARCHIVE</span>
        <span>J.A.R.V.I.S. // PLAYBACK</span>
        <span>Scroll &darr;</span>
      </div>
    </section>
  );
}
