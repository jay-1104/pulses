const recipes = [
  {
    name: "Midnight Chili",
    description: "Kidney beans, dark cocoa, and smoked paprika simmered to velvet perfection.",
    image: "/images/recipe-chili.svg",
  },
  {
    name: "Golden Hummus",
    description: "Lemony chickpeas whipped with tahini and roasted garlic, finished with chili oil.",
    image: "/images/recipe-hummus.svg",
  },
  {
    name: "Garden Lentil Salad",
    description: "Warm lentils tossed with charred greens, herb oil, and toasted seeds.",
    image: "/images/recipe-salad.svg",
  },
];

export function RecipesSection() {
  return (
    <section id="recipes" className="py-32">
      <div className="section-max">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-pulse-muted">
            Serve in Minutes
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pulse-ink sm:text-4xl">
            Recipes that love a good shortcut.
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.name}
              className="group overflow-hidden rounded-[32px] border border-white/60 bg-white/80 shadow-[0_60px_140px_-120px_rgba(15,18,30,0.6)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
              </div>
              <div className="space-y-4 p-8 text-left">
                <h3 className="text-2xl font-semibold text-pulse-ink">{recipe.name}</h3>
                <p className="text-sm text-pulse-muted">{recipe.description}</p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-pulse-ink transition-all duration-500 hover:border-black/30 hover:bg-black/10">
                  View Recipe
                  <span aria-hidden className="text-base">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
