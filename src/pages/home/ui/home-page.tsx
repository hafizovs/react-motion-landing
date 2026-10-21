import { motion, useReducedMotion } from 'framer-motion'

import { motionTransition } from '@/shared/lib/motion-prefs'

const sections = [
  {
    title: 'Ship polished UI',
    body: 'Motion highlights hierarchy without blocking content.',
  },
  {
    title: 'Respect accessibility',
    body: 'Animations fall back when prefers-reduced-motion is enabled.',
  },
  {
    title: 'Portfolio ready',
    body: 'Hero, scroll sections, and routed layout transitions in one demo.',
  },
]

export function HomePage() {
  const reduced = useReducedMotion()

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      <motion.section
        layoutId="page-hero"
        className="rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-800 px-8 py-16 text-white shadow-xl"
        transition={motionTransition(!!reduced, 0.45)}
      >
        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionTransition(!!reduced, 0.6)}
          className="text-4xl font-bold tracking-tight md:text-5xl"
        >
          Build interfaces that move with purpose
        </motion.h1>
        <p className="mt-4 max-w-2xl text-lg text-violet-100">
          Framer Motion hero and scroll-driven sections for a product marketing page.
        </p>
      </motion.section>

      <div className="mt-12 space-y-8">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: reduced ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={motionTransition(!!reduced, 0.5 + index * 0.05)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-2 text-slate-600">{section.body}</p>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
