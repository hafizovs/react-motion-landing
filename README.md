# 08 — Motion landing

**Live:** https://hafizovs.github.io/react-motion-landing/

Animated marketing page with accessible motion and routed layout transitions for a React CV portfolio.

**CV line:** Framer Motion landing with prefers-reduced-motion and React Router layout transitions

## Stack

Vite, React 19, TypeScript, Tailwind CSS, Framer Motion, React Router, Vitest. Feature-Sliced Design.


## How to run

```bash
# from portfolio_react/
pnpm install
pnpm dev
```

Open **http://localhost:5008**

See also [docs/RUNBOOK.md](../docs/RUNBOOK.md).

## Scripts

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Manual demo

1. Open Home — hero animates in; scroll to reveal sections.
2. Navigate to About — hero morphs via shared `layoutId`.
3. Enable **prefers-reduced-motion** in OS settings — animations shorten to instant.
4. Navigate back to Home to see the reverse transition.

## Interview talking points

- `useReducedMotion` + shared transition helper
- `layoutId` for cross-route hero continuity
- Separating motion policy in `shared/lib`
