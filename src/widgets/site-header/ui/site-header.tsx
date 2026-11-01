import { NavLink } from 'react-router-dom'

import { cn } from '@/shared/lib/cn'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 text-sm font-medium transition sm:min-w-0',
    isActive ? 'bg-white text-slate-900 shadow' : 'text-slate-200 hover:text-white',
  )

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
      <div className="mx-auto flex max-w-5xl min-w-0 items-center justify-between gap-3 px-4 py-2 sm:py-3">
        <span className="truncate text-sm font-semibold text-white sm:text-base">
          Motion landing
        </span>
        <nav className="flex shrink-0 gap-1 sm:gap-2" aria-label="Primary">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
