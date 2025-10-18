"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type BeanMotion = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  rotate: MotionValue<number>;
  squish: MotionValue<number>;
};

function useBean(
  progress: MotionValue<number>,
  delay: number,
  offset: number,
  baseRotate: number,
  landingDepth: number
): BeanMotion {
  const y = useTransform(progress, [0.34 + delay, 0.78 + delay], [-180, landingDepth]);
  const x = useTransform(progress, [0.32 + delay, 0.56 + delay], [offset * 0.12, offset]);
  const opacity = useTransform(
    progress,
    [0.3 + delay, 0.36 + delay, 0.82 + delay, 0.88 + delay],
    [0, 1, 1, 0]
  );
  const rotate = useTransform(progress, [0.34 + delay, 0.78 + delay], [baseRotate, baseRotate * 1.8]);
  const squish = useTransform(progress, [0.7 + delay, 0.78 + delay, 0.84 + delay], [1, 0.76, 1]);

  return { x, y, opacity, rotate, squish };
}

export function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for the scene container only.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth the raw scroll progress so animations feel gentle and premium.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // Tin can appears, then gently tilts forward to pour as the story progresses.
  const canOpacity = useTransform(smoothProgress, [0, 0.12], [0, 1]);
  const canScale = useTransform(smoothProgress, [0, 0.2], [0.82, 1]);
  const canLift = useTransform(smoothProgress, [0, 0.32], [60, -6]);
  const canTilt = useTransform(smoothProgress, [0.32, 0.58], [0, -52]);

  // Lid gently lifts and tilts open.
  const lidLift = useTransform(smoothProgress, [0.18, 0.38], [0, -140]);
  const lidRotate = useTransform(smoothProgress, [0.18, 0.45], [0, -34]);
  const lidOpacity = useTransform(smoothProgress, [0.12, 0.2], [0, 1]);

  // Frying pan fades in below the can.
  const panOpacity = useTransform(smoothProgress, [0.4, 0.55], [0, 1]);
  const panRise = useTransform(smoothProgress, [0.4, 0.6], [140, 0]);
  const flameGlow = useTransform(smoothProgress, [0.55, 0.7], [0, 1]);
  const panTilt = useTransform(canTilt, [-52, 0], [-6, 0]);
  const sizzleOpacity = useTransform(smoothProgress, [0.58, 0.72], [0, 1]);
  const sizzleScale = useTransform(smoothProgress, [0.6, 0.74], [0.8, 1.3]);

  // Steam lifts in soft waves once beans land.
  const steamOpacity = useTransform(smoothProgress, [0.6, 0.75], [0, 1]);
  const steamDrift = useTransform(smoothProgress, [0.6, 1], [40, -30]);

  // Final message fades and slides into view.
  const messageOpacity = useTransform(smoothProgress, [0.75, 0.95], [0, 1]);
  const messageRise = useTransform(smoothProgress, [0.75, 1], [40, 0]);

  const beanMotions: BeanMotion[] = [
    useBean(smoothProgress, 0, -58, -18, 224),
    useBean(smoothProgress, 0.035, -12, 14, 232),
    useBean(smoothProgress, 0.07, 46, -6, 228),
    useBean(smoothProgress, 0.105, -26, 18, 236),
    useBean(smoothProgress, 0.14, 34, -12, 230),
  ];

  return (
    <div ref={containerRef} className="relative mt-12 h-[240vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          className="relative flex h-[520px] w-[420px] items-center justify-center"
          style={{ perspective: 1600 }}
        >
          {/* Soft backdrop glow */}
          <motion.div
            aria-hidden
            style={{ opacity: canOpacity, scale: canScale }}
            className="absolute inset-x-12 bottom-12 top-24 rounded-[46px] bg-gradient-to-b from-white to-[#f1f2f7] shadow-[0_60px_120px_-60px_rgba(15,18,30,0.35)]"
          />

          {/* Tin can body */}
          <motion.div
            className="relative flex h-80 w-44 flex-col items-center justify-center rounded-[36px] bg-gradient-to-b from-[#fdfdff] via-[#f3f5fb] to-[#e6e8f2] shadow-[0_40px_80px_rgba(15,16,25,0.2)]"
            style={{ opacity: canOpacity, scale: canScale, y: canLift, rotateX: canTilt, transformOrigin: "top center", transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-x-6 top-8 rounded-2xl border border-white/60 bg-white/60 p-4 text-center text-xs uppercase tracking-[0.35em] text-pulse-muted">
              Freshly Sealed
            </div>
            <div className="absolute inset-x-0 bottom-0 h-14 rounded-b-[36px] bg-gradient-to-t from-[#d7dae5] to-transparent" />
          </motion.div>

          {/* Tin lid animation */}
          <motion.div
            className="absolute top-24 h-16 w-48 rounded-full border border-white/70 bg-gradient-to-br from-white via-[#f3f4f8] to-[#dfe3ef] shadow-[0_20px_40px_rgba(15,16,25,0.12)]"
            style={{ y: lidLift, rotate: lidRotate, opacity: lidOpacity, transformOrigin: "right center" }}
          >
            <div className="absolute inset-[10%] rounded-full border border-white/60" />
          </motion.div>

          {/* Falling beans */}
          <div className="pointer-events-none absolute inset-0">
            {beanMotions.map((bean, index) => (
              <motion.span
                key={index}
                style={{
                  x: bean.x,
                  y: bean.y,
                  rotate: bean.rotate,
                  opacity: bean.opacity,
                  scaleY: bean.squish,
                  transformOrigin: "center bottom",
                }}
                className="absolute left-1/2 h-8 w-6 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#7f1d1d] via-[#a7202a] to-[#6a0f17] shadow-[0_18px_22px_-12px_rgba(50,8,8,0.55)]"
              >
                <span className="absolute inset-1 rounded-full bg-gradient-to-br from-[#f7b4b4]/40 to-transparent" />
              </motion.span>
            ))}
          </div>

          {/* Frying pan and flame */}
          <motion.div
            className="absolute bottom-4 flex h-32 w-72 flex-col items-center"
            style={{ opacity: panOpacity, y: panRise }}
          >
            <motion.div
              className="relative h-5 w-40 rounded-full bg-gradient-to-r from-[#1f1f22] via-[#2b2b2f] to-[#1a1a1d] shadow-inner shadow-black/30"
              style={{ rotateX: panTilt }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b74ff]/40 via-[#66a7ff]/20 to-transparent blur-sm"
                style={{ opacity: flameGlow }}
                animate={{ opacity: [0.3, 0.7, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <div className="relative mt-4 h-20 w-full overflow-hidden rounded-[44px] bg-gradient-to-br from-[#1d1d20] via-[#242429] to-[#141417] shadow-[0_30px_50px_-40px_rgba(15,15,22,0.7)]">
              <div className="absolute inset-x-6 bottom-2 h-1 rounded-full bg-white/10" />
              <motion.div
                className="absolute left-1/2 top-2 h-12 w-28 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-3xl"
                style={{ opacity: sizzleOpacity, scale: sizzleScale }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-x-10 bottom-0 h-8 rounded-full bg-gradient-to-t from-[#3d7aff]/60 via-[#6c9fff]/30 to-transparent blur-2xl"
                style={{ opacity: flameGlow }}
                animate={{ scaleX: [0.9, 1.05, 0.95] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Steam wisps */}
          <motion.div
            className="pointer-events-none absolute inset-x-auto bottom-28 flex w-36 flex-col items-center gap-3"
            style={{ opacity: steamOpacity, y: steamDrift }}
          >
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="h-12 w-12 rounded-full bg-gradient-to-b from-white/45 via-white/10 to-transparent blur-2xl"
                animate={{ y: [0, -16, 0], opacity: [0.8, 1, 0.6] }}
                transition={{ duration: 6.5, repeat: Infinity, delay: index * 1.1, ease: "easeInOut" }}
              />
            ))}
          </motion.div>

          {/* Final call to action */}
          <motion.div
            className="absolute bottom-[-120px] flex w-full flex-col items-center gap-2 text-center"
            style={{ opacity: messageOpacity, y: messageRise }}
          >
            <p className="text-sm uppercase tracking-[0.45em] text-pulse-muted">Cook Pulses the Easy Way</p>
            <p className="text-lg font-medium text-pulse-ink">Open → Pour → Sizzle → Serve</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
