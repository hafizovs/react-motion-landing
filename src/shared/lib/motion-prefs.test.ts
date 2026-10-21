import { afterEach, describe, expect, it, vi } from 'vitest'

import { motionTransition, prefersReducedMotion } from './motion-prefs'

describe('prefersReducedMotion', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('reads matchMedia reduce preference', () => {
    vi.stubGlobal('window', {
      matchMedia: (query: string) => ({
        matches: query.includes('reduce'),
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => false,
      }),
    })
    expect(prefersReducedMotion()).toBe(true)
    expect(motionTransition(true)).toEqual({ duration: 0 })
    expect(motionTransition(false, 0.4)).toEqual({ duration: 0.4, ease: 'easeOut' })
  })
})
