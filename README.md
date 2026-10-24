## Live demo

https://hafizovs.github.io/react-motion-landing/

# Motion landing

## About

Animated marketing page with accessible motion and routed layout transitions, built with Framer Motion and React Router. Home plays a hero entrance and reveals sections on scroll. About continues that hero with a shared `layoutId`, and **prefers-reduced-motion** shortens the animation to instant.

## Capabilities

- Home hero entrance and scroll-revealed sections
- Shared `layoutId` hero between Home and About
- **prefers-reduced-motion** shortens animations to instant
- Reverse transition when navigating back to Home

## Functionality

- Open Home, watch the hero, and scroll to reveal sections
- Open About and follow the shared `layoutId` hero
- Enable **prefers-reduced-motion** and return to Home for the reverse transition

Animated marketing page with accessible motion and routed layout transitions — Framer Motion, React Router.

## Scripts

```bash
pnpm install
pnpm dev          # http://localhost:5008
pnpm check
pnpm build
```

## Manual demo

1. Open Home — hero animates in; scroll to reveal sections.
2. Navigate to About — hero morphs via shared `layoutId`.
3. Enable **prefers-reduced-motion** — animations shorten to instant.
4. Navigate back to Home for the reverse transition.
