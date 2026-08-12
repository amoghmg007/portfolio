"use client";

import { useState } from "react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { RESUME_DATA } from "@/lib/resume";
import { Envelope, Phone, LinkedinLogo, GithubLogo, DownloadSimple, PaperPlaneRight, CheckCircle } from "@phosphor-icons/react";

export function ContactProtocol() {
  const { personal } = RESUME_DATA;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=Opportunity from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(formState.message + "\n\nSender Email: " + formState.email)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-14 md:px-10 md:py-20 z-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:gap-10 relative z-10">
        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>COMM PROTOCOL // DIRECT TRANSMISSION</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
                  Initiate <span className="text-accent">Contact</span>
                </h2>
                <p className="mt-3 max-w-[50ch] font-sans text-sm text-zinc-400 sm:text-base">
                  Available for AI Builder, LLM Engineer, &amp; Software Engineering Internships. Reach out directly below.
                </p>
              </div>

              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-amber-400 shadow-[0_0_25px_rgba(212,162,47,0.35)]"
              >
                <DownloadSimple size={18} weight="bold" />
                Download Resume (DOCX)
              </a>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Direct Channels */}
          <AnimatedSection className="lg:col-span-5 flex flex-col gap-6">
            <AnimatedItem>
              <div className="card-surface p-6 sm:p-8 relative flex flex-col gap-6 h-full justify-between">
                <div className="flex flex-col gap-6">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent font-semibold">
                    // VERIFIED COMM CHANNELS
                  </span>

                  <div className="flex flex-col gap-4 font-mono text-xs">
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 transition-all hover:border-accent/50 hover:bg-black/70 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent shrink-0">
                          <Envelope size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-zinc-400 block tracking-[0.16em]">Direct Email</span>
                          <span className="font-sans text-sm font-semibold text-zinc-200 group-hover:text-accent transition-colors">
                            {personal.email}
                          </span>
                        </div>
                      </div>
                      <span className="text-zinc-500 group-hover:text-accent font-bold">&rarr;</span>
                    </a>

                    <a
                      href={`tel:${personal.phone}`}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 transition-all hover:border-accent/50 hover:bg-black/70 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent shrink-0">
                          <Phone size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-zinc-400 block tracking-[0.16em]">Phone Line</span>
                          <span className="font-sans text-sm font-semibold text-zinc-200 group-hover:text-accent transition-colors">
                            {personal.phone}
                          </span>
                        </div>
                      </div>
                      <span className="text-zinc-500 group-hover:text-accent font-bold">&rarr;</span>
                    </a>

                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 transition-all hover:border-accent/50 hover:bg-black/70 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-foreground shrink-0">
                          <GithubLogo size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-zinc-400 block tracking-[0.16em]">GitHub Repository</span>
                          <span className="font-sans text-sm font-semibold text-zinc-200 group-hover:text-accent transition-colors">
                            github.com/amoghmg007
                          </span>
                        </div>
                      </div>
                      <span className="text-zinc-500 group-hover:text-accent font-bold">&rarr;</span>
                    </a>

                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 transition-all hover:border-accent/50 hover:bg-black/70 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shrink-0">
                          <LinkedinLogo size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-zinc-400 block tracking-[0.16em]">LinkedIn Profile</span>
                          <span className="font-sans text-sm font-semibold text-zinc-200 group-hover:text-accent transition-colors">
                            linkedin.com/in/amogh-m-g
                          </span>
                        </div>
                      </div>
                      <span className="text-zinc-500 group-hover:text-accent font-bold">&rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-accent/30 bg-accent/[0.05] p-4 font-mono text-[11px] text-zinc-300">
                  <span className="text-accent font-bold block mb-1">LOCATION &amp; REGION</span>
                  Bangalore, Karnataka, India &nbsp;&middot;&nbsp; Open to Remote &amp; On-Site
                </div>
              </div>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right Column: Transmission Form */}
          <AnimatedSection className="lg:col-span-7">
            <AnimatedItem>
              <div className="card-surface p-6 sm:p-8 relative">
                <div className="pointer-events-none absolute right-5 top-5 text-accent/20">
                  <HudFrame corner="tr" size={18} />
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.28em] text-accent font-semibold block mb-6">
                  // DIRECT TRANSMISSION FORM
                </span>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="rounded-xl border border-white/10 bg-black/60 px-4 py-3.5 font-sans text-sm text-foreground outline-none transition-colors focus:border-accent"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="rounded-xl border border-white/10 bg-black/60 px-4 py-3.5 font-sans text-sm text-foreground outline-none transition-colors focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">
                      Message / Internship Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details regarding AI intern opportunities, project collaboration, or interview invitations..."
                      className="rounded-xl border border-white/10 bg-black/60 p-4 font-sans text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent transition-all hover:bg-accent hover:text-black active:translate-y-[1px] shadow-[0_0_20px_rgba(212,162,47,0.2)]"
                  >
                    Send Direct Message
                    <PaperPlaneRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
                  </button>

                  {sent && (
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 font-mono text-xs text-emerald-400">
                      <CheckCircle size={18} className="shrink-0" />
                      Email client launched! Message payload prepared for transmission.
                    </div>
                  )}
                </form>
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
