import { Scene } from "./Scene";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="section-max flex flex-col items-center pb-40 pt-24 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-pulse-muted">
          Premium Tinned Pulses
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-pulse-ink sm:text-5xl lg:text-6xl">
          Effortless cooking that feels like a cinematic reveal.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-pulse-muted sm:text-lg">
          Pulse & Tin turns pantry staples into indulgent kitchen moments. Scroll to
          witness the lid lift, beans glide, and dinner hit the pan — all in a calm,
          interactive showcase.
        </p>
      </div>
      <Scene />
    </section>
  );
}
