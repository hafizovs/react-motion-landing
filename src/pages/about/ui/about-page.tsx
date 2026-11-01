import { motion, useReducedMotion } from 'framer-motion'

import { motionTransition } from '@/shared/lib/motion-prefs'

export function AboutPage() {
  const reduced = useReducedMotion()

  return (
    <div className="mx-auto w-full min-w-0 max-w-5xl px-4 pb-12 sm:pb-16">
      <motion.section
        layoutId="page-hero"
        className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 px-5 py-10 text-white shadow-xl sm:rounded-3xl sm:px-8 sm:py-16"
        transition={motionTransition(!!reduced, 0.45)}
      >
        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionTransition(!!reduced, 0.5)}
          className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
        >
          About this demo
        </motion.h1>
        <p className="mt-4 max-w-2xl text-base text-emerald-50 sm:text-lg">
          Shared layoutId transitions the hero between Home and About while content below stays
          route-specific.
        </p>
      </motion.section>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={motionTransition(!!reduced, 0.4)}
        className="prose prose-slate prose-sm mt-8 max-w-none rounded-2xl bg-white p-5 shadow-sm sm:prose-base sm:mt-10 sm:p-8"
      >
        <p>
          This landing sample focuses on motion that respects user preferences. Toggle reduced
          motion in your OS settings to see instant transitions.
        </p>
      </motion.article>
    </div>
  )
}
