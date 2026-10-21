import { motion, useReducedMotion } from 'framer-motion'

import { motionTransition } from '@/shared/lib/motion-prefs'

export function AboutPage() {
  const reduced = useReducedMotion()

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16">
      <motion.section
        layoutId="page-hero"
        className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-800 px-8 py-16 text-white shadow-xl"
        transition={motionTransition(!!reduced, 0.45)}
      >
        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionTransition(!!reduced, 0.5)}
          className="text-4xl font-bold"
        >
          About this demo
        </motion.h1>
        <p className="mt-4 max-w-2xl text-emerald-50">
          Shared layoutId transitions the hero between Home and About while content below stays
          route-specific.
        </p>
      </motion.section>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={motionTransition(!!reduced, 0.4)}
        className="prose prose-slate mt-10 max-w-none rounded-2xl bg-white p-8 shadow-sm"
      >
        <p>
          This landing sample focuses on motion that respects user preferences. Toggle reduced
          motion in your OS settings to see instant transitions.
        </p>
      </motion.article>
    </div>
  )
}
