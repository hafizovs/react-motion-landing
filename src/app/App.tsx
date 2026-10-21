import { BrowserRouter } from 'react-router-dom'

import { SiteHeader } from '@/widgets/site-header'

import { AppRouter } from './router'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-slate-950 text-slate-900">
        <SiteHeader />
        <main className="bg-slate-100 py-8">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  )
}
