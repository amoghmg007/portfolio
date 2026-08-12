"use client";

import { useEffect, useRef, useState } from "react";
import { SpeakerHigh, SpeakerSimpleSlash, MusicNotes } from "@phosphor-icons/react";

export function VintageAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
        .catch((err) => console.log("Playback error:", err));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/audio/ironman.mp3" loop preload="auto" />

      <button
        onClick={toggleSound}
        className={`group relative flex items-center gap-3 rounded-full border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-2xl transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(212,162,47,0.3)] ${
          isPlaying
            ? "border-accent bg-accent/20 text-accent shadow-[0_0_30px_rgba(212,162,47,0.5)]"
            : "border-white/20 bg-black/80 text-zinc-300 hover:border-accent/60 hover:text-accent"
        }`}
        title={isPlaying ? "Mute Theme Music" : "Play Theme Music"}
      >
        {/* Pulsing Glow Indicator Ring */}
        {isPlaying && (
          <span className="absolute -inset-0.5 rounded-full bg-accent/40 blur-md animate-pulse pointer-events-none" />
        )}

        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <SpeakerHigh size={18} weight="bold" className="text-accent animate-pulse" />
          ) : (
            <SpeakerSimpleSlash size={18} weight="bold" className="text-zinc-400 group-hover:text-accent" />
          )}
        </div>

        {/* Dynamic Sound Wave Bars Indicator */}
        <div className="flex items-end gap-0.5 h-3.5 px-0.5">
          {[40, 80, 50, 100, 60].map((h, i) => (
            <span
              key={i}
              className={`w-0.5 rounded-full transition-all duration-200 ${
                isPlaying ? "bg-accent animate-pulse" : "bg-zinc-600"
              }`}
              style={{
                height: isPlaying ? `${h}%` : "30%",
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        <span className="relative z-10 hidden sm:inline">
          {isPlaying ? "AUDIO ON" : "AUDIO OFF"}
        </span>
      </button>
    </div>
  );
}
