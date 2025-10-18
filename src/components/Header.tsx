import Link from "next/link";

const links = [
  { href: "#products", label: "Products" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#recipes", label: "Recipes" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="section-max flex items-center justify-between py-4">
        <Link
          href="#top"
          className="text-lg font-semibold tracking-[0.3em] uppercase text-pulse-ink"
        >
          Pulse & Tin
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-pulse-muted sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-pulse-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="sm:hidden">
          <span className="text-xs uppercase tracking-[0.35em] text-pulse-muted">
            Menu
          </span>
        </div>
      </div>
    </header>
  );
}
