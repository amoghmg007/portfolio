"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, DownloadSimple, Envelope, SpeakerHigh, SpeakerSimpleSlash } from "@phosphor-icons/react";
import { RESUME_DATA } from "@/lib/resume";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.75;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <audio ref={audioRef} src="/audio/ironman.mp3" loop preload="auto" />

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground transition-opacity hover:opacity-90"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
          />
          {RESUME_DATA.personal.name} <span className="hidden text-zinc-500 sm:inline">// AI BUILDER</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#hero"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Overview
          </a>
          <a
            href="#skills"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Skills Matrix
          </a>
          <a
            href="#projects"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Arsenal
          </a>
          <a
            href="#experience"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Timeline
          </a>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Sound Toggle Button integrated into Header */}
          <button
            onClick={toggleSound}
            className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-200 active:translate-y-[1px] ${
              isPlaying
                ? "border-accent bg-accent/20 text-accent shadow-[0_0_15px_rgba(212,162,47,0.35)]"
                : "border-white/15 bg-white/[0.05] text-zinc-400 hover:text-foreground hover:bg-white/10"
            }`}
            title={isPlaying ? "Mute Theme Music" : "Play Theme Music"}
          >
            {isPlaying ? (
              <SpeakerHigh size={15} weight="bold" className="text-accent animate-pulse" />
            ) : (
              <SpeakerSimpleSlash size={15} weight="bold" className="text-zinc-400 group-hover:text-foreground" />
            )}
            <span>{isPlaying ? "Audio ON" : "Audio OFF"}</span>
          </button>

          <a
            href={RESUME_DATA.personal.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent/20 sm:inline-flex active:translate-y-[1px]"
          >
            <DownloadSimple size={14} weight="bold" />
            Resume
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] active:translate-y-[1px]"
          >
            <Envelope size={14} weight="bold" />
            <span className="hidden xs:inline">Access</span>
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
