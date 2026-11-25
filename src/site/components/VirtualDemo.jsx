import { useState } from 'react'

import Sparkle from './Sparkle.jsx'

const ICON_PROPS = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.9',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const STEPS = [
  {
    title: 'Share your listing',
    description: 'Add a Homezai booking link to social posts, open house materials, and your website.',
    panelLabel: 'Listing ready to share',
    panelValue: '124 Shoreline Drive',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-mouse-pointer-click h-7 w-7 h-8 w-8">
        <path d="M14 4.1 12 6" />
        <path d="m5.1 8-2.9-.8" />
        <path d="m6 12-1.9 2" />
        <path d="M7.2 2.2 8 5.1" />
        <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
      </svg>
    ),
  },
  {
    title: 'Capture buyer interest',
    description: 'Buyers can move directly from property discovery into a guided showing request.',
    panelLabel: 'New buyer conversation',
    panelValue: 'Showing requested from Instagram',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-message-square-text h-7 w-7 h-8 w-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M13 8H7" />
        <path d="M17 12H7" />
      </svg>
    ),
  },
  {
    title: 'Coordinate the showing',
    description: 'Homezai helps manage availability, follow-up, and the details around the appointment.',
    panelLabel: 'Showing confirmed',
    panelValue: 'Saturday at 11:30 AM',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-calendar-days h-7 w-7 h-8 w-8">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
  },
  {
    title: 'See the opportunity',
    description: 'Review engagement and showing activity so you know where to focus next.',
    panelLabel: 'Listing activity updated',
    panelValue: '8 requests · 3 confirmed',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-chart-column h-7 w-7 h-8 w-8">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
]

export default function VirtualDemo() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <section id="virtual-demo" className="scroll-mt-24 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8" aria-labelledby="virtual-demo-heading">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 shadow-2xl shadow-slate-950/20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-7 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Virtual Demo</p>
            <h2 id="virtual-demo-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">See how interest becomes a showing</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">Explore the workflow from the first social click through scheduling and listing activity.</p>
            <div className="mt-8 grid gap-3">
              {STEPS.map((item, index) => {
                const selected = index === active
                return (
                  <button
                    key={item.title}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(index)}
                    className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-all ${selected ? 'border-blue-400 bg-blue-500/15' : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'}`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${selected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>{index + 1}</span>
                    <span>
                      <span className="block font-bold text-white">{item.title}</span>
                      <span className="mt-1 block text-sm leading-5 text-slate-400">{item.description}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="flex min-h-[520px] items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-slate-400">HOMEZAI WORKFLOW</span>
              </div>
              <div className="p-6 sm:p-8" aria-live="polite">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Step {active + 1}</p>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Active</span>
                </div>
                <div className="mt-8">
                  <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-16 w-16" aria-hidden="true">
                    {step.icon}
                    <Sparkle />
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{step.panelLabel}</p>
                  <p className="mt-2 font-bold text-slate-900">{step.panelValue}</p>
                </div>
                <div className="mt-6 flex items-center gap-2" aria-hidden="true">
                  {STEPS.map((item, index) => (
                    <span key={item.title} className={`h-1.5 rounded-full transition-all ${index === active ? 'w-8 bg-blue-600' : 'w-4 bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
