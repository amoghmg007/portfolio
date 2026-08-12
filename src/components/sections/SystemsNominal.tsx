"use client";

import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { RESUME_DATA } from "@/lib/resume";

const telemetry = [
  { label: "LLM & Agent Pipelines", value: "99.4%", note: "LangChain, FastAPI & SQLite" },
  { label: "Small Language Model", value: "PyTorch", note: "Custom tokenizer & architecture from scratch" },
  { label: "IEEE Mentorship", value: "100+ Students", note: "5+ Technical workshops & hackathon prep" },
  { label: "Hackathon Standing", value: "Finalist", note: "Code Red — BMSIT Bangalore 2024" },
];

export function SystemsNominal() {
  return (
    <section
      id="systems"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_4fr] md:gap-20">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>J.A.R.V.I.S. // ARCHITECT SYSTEMS NOMINAL</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              &ldquo;Engineering AI that &hellip;{" "}
              <span className="text-accent">solves real problems.</span>&rdquo;
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              {RESUME_DATA.personal.summary}
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px]"
              >
                Inspect Armor Vault
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={RESUME_DATA.personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent/20"
              >
                <DownloadSimple size={14} weight="bold" />
                Resume (DOCX)
              </a>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col divide-y divide-white/8 border-t border-white/8 font-mono md:mt-3">
          {telemetry.map((row) => (
            <AnimatedItem key={row.label}>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    {row.label}
                  </span>
                  <span className="font-sans text-[13px] text-zinc-400">
                    {row.note}
                  </span>
                </div>
                <span className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-right">
                  {row.value}
                </span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
