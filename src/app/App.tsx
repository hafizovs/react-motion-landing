import { BrowserRouter } from 'react-router-dom'

import { SiteHeader } from '@/widgets/site-header'

import { AppRouter } from './router'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-svh overflow-x-clip bg-slate-950 text-slate-900">
        <SiteHeader />
        <main className="bg-slate-100 py-5 sm:py-8">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  )
}
