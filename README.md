# Pulse & Tin – Premium Scroll Experience

This Next.js project powers the Pulse & Tin marketing site. It uses the App Router with Tailwind CSS and Framer Motion to deliver a cinematic, scroll-driven hero sequence that demonstrates how effortless it is to cook with tinned pulses.

## Prerequisites

- Node.js 18+
- npm 9+

Install dependencies once after cloning:

```bash
npm install
```

## Previewing the Interactive Hero

Launch the development server locally:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in a desktop browser. Scroll slowly through the hero to watch:

1. The Pulse & Tin can rotate, tilt, and open.
2. Beans cascade from the tin directly into the pan.
3. The pan ignites with a glowing flame and rising steam.
4. The call-to-action "Cook Pulses the Easy Way — Open → Pour → Sizzle → Serve" fades in.

The animation responds to scroll position, so use a trackpad or mouse wheel for the smoothest experience. Reload the page to replay the sequence from the beginning.

## Additional Scripts

- `npm run lint` – Run ESLint to check the codebase.

## Deployment

When you are ready to publish, build the production bundle and deploy it to your hosting provider (e.g., Vercel):

```bash
npm run build
npm run start
```

For Vercel, push the repository to GitHub and import it into the Vercel dashboard. Vercel will handle building and serving the optimized site.
