export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function motionTransition(reduced: boolean, seconds = 0.5) {
  return reduced ? { duration: 0 } : { duration: seconds, ease: 'easeOut' as const }
}
