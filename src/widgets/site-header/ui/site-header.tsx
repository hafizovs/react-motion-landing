import { NavLink } from 'react-router-dom'

import { cn } from '@/shared/lib/cn'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'rounded-full px-4 py-2 text-sm font-medium transition',
    isActive ? 'bg-white text-slate-900 shadow' : 'text-slate-200 hover:text-white',
  )

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="font-semibold text-white">Motion landing</span>
        <nav className="flex gap-2">
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
