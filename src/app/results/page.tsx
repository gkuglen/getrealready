'use client';

import { useState } from 'react';

import { MetricCard } from '@/components/sections/metric-card';
import { RemodelGallery } from '@/components/sections/remodel-gallery';

const projects = [
  {
    id: 'large',
    name: 'Large Remodel',
    description: 'Full gut renovation across kitchen, living area, and bathroom',
    details: 'Multi-room • Completed 2023',
    metrics: [
      { label: 'Rent Increase', value: '$410', change: '+14%', changeType: 'positive' as const },
      { label: 'Days on Market', value: '14', change: '-65%', changeType: 'positive' as const },
      { label: 'Cash on Cash Return', value: '11%', change: '+8.4%', changeType: 'positive' as const },
      { label: 'Asset Value', value: '$89,450', change: '5.5% CAP', changeType: 'positive' as const },
    ],
    changes: [
      'Complete kitchen renovation with 40% new cabinetry and countertops, appliances and new dishwasher',
      'Full flooring replacement throughout & living area refresh with new LVP flooring',
      'Bathroom gut with coppery piping with modern tile and fixtures & storage ',
      'Fresh interior paint throughout 1044 sqft unit',
      'All new updated elecrical wiring and recessed lighting',
    ],
    images: [
      { id: '1', src: '/images/remodels/large/kitliv_large/kit1_before.webp', alt: 'Kitchen before', type: 'before' as const },
      { id: '2', src: '/images/remodels/large/kitliv_large/kit1_after.webp', alt: 'Kitchen after', type: 'after' as const },
      { id: '3', src: '/images/remodels/large/kitliv_large/kit2_after.webp', alt: 'Kitchen after (angle 2)', type: 'after' as const },
      { id: '4', src: '/images/remodels/large/kitliv_large/liv1_before.webp', alt: 'Living area before', type: 'before' as const },
      { id: '5', src: '/images/remodels/large/kitliv_large/liv1_after.webp', alt: 'Living area after', type: 'after' as const },
      { id: '6', src: '/images/remodels/large/bath_large/ba_1before.webp', alt: 'Bathroom before', type: 'before' as const },
      { id: '7', src: '/images/remodels/large/bath_large/ba_2during.webp', alt: 'Bathroom during renovation', type: 'during' as const },
      { id: '8', src: '/images/remodels/large/bath_large/ba_3after.webp', alt: 'Bathroom after', type: 'after' as const },
    ],
  },
  {
    id: 'med',
    name: 'Medium Remodel',
    description: 'Kitchen and bedroom upgrades targeting rent gap vs. nearby units',
    details: 'Kitchen + Bedroom • Completed 2022',
    metrics: [
      { label: 'Rent Increase', value: '$450', change: '+32%', changeType: 'positive' as const },
      { label: 'Days on Market', value: '12', change: '-58%', changeType: 'positive' as const },
      { label: 'Cash on Cash Return', value: '18.4%', change: '+6.2%', changeType: 'positive' as const },
      { label: 'Asset Value', value: '$285K', change: '+$47K', changeType: 'positive' as const },
    ],
    changes: [
      'Kitchen refresh with new countertops and updated fixtures',
      'New cabinetry hardware and backsplash',
      'Bedroom flooring replaced with LVP',
      'Fresh paint throughout',
      'Updated bedroom lighting',
    ],
    images: [
      { id: '1', src: '/images/remodels/med/kitchen_med/kit_1before.webp', alt: 'Kitchen before', type: 'before' as const },
      { id: '2', src: '/images/remodels/med/kitchen_med/kit_1after.webp', alt: 'Kitchen after', type: 'after' as const },
      { id: '3', src: '/images/remodels/med/kitchen_med/kit_2before.webp', alt: 'Kitchen before (angle 2)', type: 'before' as const },
      { id: '4', src: '/images/remodels/med/kitchen_med/kit_2after.webp', alt: 'Kitchen after (angle 2)', type: 'after' as const },
      { id: '5', src: '/images/remodels/med/bed_med/bed_1before.webp', alt: 'Bedroom before', type: 'before' as const },
      { id: '6', src: '/images/remodels/med/bed_med/bed_1during.webp', alt: 'Bedroom during renovation', type: 'during' as const },
      { id: '7', src: '/images/remodels/med/bed_med/bed_1after.webp', alt: 'Bedroom after', type: 'after' as const },
    ],
  },
  {
    id: 'light',
    name: 'Light Remodel',
    description: 'Targeted bathroom upgrade to close rent gap with minimal spend',
    details: 'Bathroom • Completed 2021',
    metrics: [
      { label: 'Rent Increase', value: '$175', change: '+12%', changeType: 'positive' as const },
      { label: 'Days on Market', value: '6', change: '-72%', changeType: 'positive' as const },
      { label: 'Cash on Cash Return', value: '14.1%', change: '+3.8%', changeType: 'positive' as const },
      { label: 'Asset Value', value: '$180K', change: '+$18K', changeType: 'positive' as const },
    ],
    changes: [
      'New vanity with updated fixtures',
      'Tile surround replacement',
      'Fresh paint and updated mirror',
      'New lighting fixture',
    ],
    images: [
      { id: '1', src: '/images/remodels/light/ba_1before.webp', alt: 'Bathroom before', type: 'before' as const },
      { id: '2', src: '/images/remodels/light/ba_2after.webp', alt: 'Bathroom after', type: 'after' as const },
    ],
  },
];

export default function ResultsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Project Tabs */}
        <nav className="mb-8 flex gap-2 border-b border-border">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(i)}
              className={`pb-3 px-1 text-sm font-medium transition-colors border-b-2 -mb-px ${
                i === currentIndex
                  ? 'border-foreground text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {p.name}
            </button>
          ))}
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-foreground text-balance text-3xl font-bold">
            {project.name}
          </h1>
          <p className="text-muted-foreground mt-2">{project.description}</p>
        </header>

        {/* Gallery */}
        <RemodelGallery key={project.id} images={project.images} className="mb-10" aspect={project.id === 'light' ? 'portrait' : 'landscape'} />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
            />
          ))}
        </div>

        {/* Changes Section */}
        <section className="mt-10">
          <h2 className="text-foreground text-xl font-semibold">Changes</h2>
          <ul className="mt-4 space-y-2">
            {project.changes.map((change, index) => (
              <li key={index} className="text-muted-foreground flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                <span>{change}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
