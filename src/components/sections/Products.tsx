const products = [
  {
    name: "Chickpeas",
    description: "Silky and nutty, ready to swirl into hummus or roast until crisp.",
    image: "/images/chickpeas.svg",
    tone: "from-[#fdf8f4] to-[#f4ede8]",
  },
  {
    name: "Kidney Beans",
    description: "Deep burgundy sheen with a creamy center — perfect for saucy stews.",
    image: "/images/kidney-beans.svg",
    tone: "from-[#fef7f8] to-[#f3e5e7]",
  },
  {
    name: "Lentils",
    description: "Earthy and tender, simmered to perfection for soups and salads.",
    image: "/images/lentils.svg",
    tone: "from-[#f6f8f3] to-[#e7ebe0]",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-32">
      <div className="section-max">
        <div className="mb-16 flex flex-col gap-6 text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-pulse-muted">Our Tins</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pulse-ink sm:text-4xl">
              Luxurious pulses in three iconic varieties.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-pulse-muted sm:text-base">
            Each tin is slow-cooked, lightly seasoned, and sealed at peak freshness. Pop the lid and pour — the texture and sheen speak for themselves.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br p-8 shadow-[0_50px_120px_-90px_rgba(15,18,30,0.55)] transition-transform duration-700 hover:-translate-y-3"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.tone} opacity-70 transition-opacity duration-700 group-hover:opacity-90`} />
              <div className="relative flex h-full flex-col">
                <div className="relative h-48 overflow-hidden rounded-3xl border border-white/60 bg-white/40">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-pulse-ink">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm text-pulse-muted">
                  {product.description}
                </p>
                <span className="mt-auto pt-8 text-xs uppercase tracking-[0.45em] text-pulse-ink/80">
                  Open → Pour → Enjoy
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
