"use client";

import { useCallback, useEffect, useRef } from "react";
import { FRAME_COUNT, framePath } from "@/lib/hero";
import { CINE_FRAME_COUNT, cineFramePath } from "@/lib/cinematic";

export function GlobalBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frames1Ref = useRef<HTMLImageElement[]>([]);
  const frames2Ref = useRef<HTMLImageElement[]>([]);
  
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const currentSetRef = useRef<1 | 2>(1);
  const targetSetRef = useRef<1 | 2>(1);
  
  const rafIdRef = useRef<number | null>(null);
  const lastKeyRef = useRef<string>("");

  useEffect(() => {
    // Preload frames 1
    const imgs1: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      imgs1.push(img);
    }
    frames1Ref.current = imgs1;

    // Preload frames 2
    const imgs2: HTMLImageElement[] = [];
    for (let i = 1; i <= CINE_FRAME_COUNT; i++) {
      const img = new Image();
      img.src = cineFramePath(i);
      imgs2.push(img);
    }
    frames2Ref.current = imgs2;
  }, []);

  const drawFrame = useCallback((setIndex: 1 | 2, index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pool = setIndex === 1 ? frames1Ref.current : frames2Ref.current;
    const img = pool[Math.round(index)];
    if (!img) return;

    if (!img.complete || !img.naturalWidth) {
      img.addEventListener("load", () => drawFrame(setIndex, index), { once: true });
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW: number;
    let drawH: number;
    if (canvasRatio > imgRatio) {
      drawW = cw;
      drawH = cw / imgRatio;
    } else {
      drawH = ch;
      drawW = ch * imgRatio;
    }

    if (window.innerWidth <= 768) {
      drawW *= 1.25;
      drawH *= 1.25;
    }

    const drawX = (cw - drawW) / 2;
    const drawY = (ch - drawH) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(1, 1);
    drawFrame(currentSetRef.current, currentFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Smooth interpolation loop (60 FPS lerp)
  useEffect(() => {
    const animate = () => {
      // Lerp frame towards target frame for silky smooth motion
      const setIdx = targetSetRef.current;
      currentSetRef.current = setIdx;

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.15; // Smooth spring lerp factor
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const roundedIndex = Math.round(currentFrameRef.current);
      const key = `${setIdx}-${roundedIndex}`;

      if (key !== lastKeyRef.current) {
        lastKeyRef.current = key;
        drawFrame(setIdx, roundedIndex);
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  // Scroll listener updates target frame
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollY / totalHeight));

      if (progress < 0.45) {
        targetSetRef.current = 1;
        const localProgress = progress / 0.45;
        targetFrameRef.current = Math.min(FRAME_COUNT - 1, localProgress * (FRAME_COUNT - 1));
      } else {
        targetSetRef.current = 2;
        const localProgress = (progress - 0.45) / 0.55;
        targetFrameRef.current = Math.min(CINE_FRAME_COUNT - 1, localProgress * (CINE_FRAME_COUNT - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08080a]">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-70 transition-opacity duration-500 object-cover"
        style={{ willChange: "contents", transform: "translateZ(0)" }}
      />

      {/* Global Vignette & Ambient Radial Glows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(140% 100% at 50% 20%, transparent 25%, rgba(8,8,10,0.55) 65%, rgba(8,8,10,0.92) 100%)",
        }}
      />
      <div className="absolute inset-0 hud-grid opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] rounded-full bg-accent/10 blur-[160px] animate-pulse-glow" />
      <div className="absolute top-3/4 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[150px] animate-pulse-glow" />
    </div>
  );
}
