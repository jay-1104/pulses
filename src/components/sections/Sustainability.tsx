const pillars = [
  {
    title: "Local",
    description: "Sourced from growers within 100 miles to minimize transport and support regenerative farms.",
  },
  {
    title: "Recyclable",
    description: "100% aluminum tins with easy-peel lids designed to be infinitely reusable.",
  },
  {
    title: "Low CO₂",
    description: "Gentle pressure-cooking cuts energy by 40% compared to dried pulse cooking at home.",
  },
];

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-[#f9f9fb] py-32">
      <div className="section-max grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-pulse-muted">
            From Seed to Shelf
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pulse-ink sm:text-4xl">
            Thoughtful sourcing that keeps the planet — and your pantry — refreshed.
          </h2>
          <p className="mt-6 max-w-xl text-sm text-pulse-muted sm:text-base">
            Pulse & Tin partners with small-scale farmers, uses closed-loop water systems, and fills every tin within hours of harvesting. Sustainability is woven into every delicious pour.
          </p>
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/70 bg-white/80 p-6 text-center shadow-veil">
                <dt className="text-sm font-semibold uppercase tracking-[0.4em] text-pulse-ink">
                  {pillar.title}
                </dt>
                <dd className="mt-4 text-xs text-pulse-muted">
                  {pillar.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-6 top-8 h-32 rounded-full bg-gradient-to-b from-white to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[44px] border border-white/70 bg-white shadow-[0_60px_140px_-100px_rgba(15,18,30,0.5)]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/farm.svg)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
