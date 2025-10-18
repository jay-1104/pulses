export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white py-12">
      <div className="section-max flex flex-col items-center justify-between gap-6 text-center text-xs text-pulse-muted sm:flex-row">
        <p className="tracking-[0.35em] uppercase text-pulse-ink">
          Pulse & Tin
        </p>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
        <p>© {new Date().getFullYear()} Pulse & Tin. Crafted for effortless cooking.</p>
      </div>
    </footer>
  );
}
