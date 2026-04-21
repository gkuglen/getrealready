'use client';

import { useState } from 'react';

import { MetricCard } from '@/components/sections/metric-card';
import { RemodelGallery } from '@/components/sections/remodel-gallery';

const projects = [
  {
    id: 'large',
    name: 'Large Remodel',
    description:
      'Full gut renovation across kitchen, living area, and bathroom',
    details: 'Multi-room • Completed 2023',
    metrics: [
      {
        label: 'Rent Increase',
        value: '+$410',
        change: '+14%',
        changeType: 'positive' as const,
      },
      {
        label: 'Leased in',
        value: '14',
        change: 'DAYS',
        changeType: 'positive' as const,
      },
      {
        label: 'Annual Return (Cash-on-Cash)',
        value: '11%' /*, change: '+8.4%', changeType: 'positive' as const*/,
      },
      {
        label: 'Estimated Value Created',
        value: '+$89.5k',
        change: '5.5% CAP',
        changeType: 'positive' as const,
      },
    ],
    changes: [
      'Complete kitchen renovation with 40% additional cabinet space and new countertops, plus two new appliances including a dishwasher installation',
      'Full flooring upgrade throughout, with new LVP flooring in the kitchen, bedrooms, and living areas',
      'Full bathroom remodel with new copper piping, modern tile and fixtures, and 50% additional storage',
      'Fresh interior paint throughout the 1,044 sq ft unit',
      'All-new updated electrical wiring and recessed lighting',
    ],
    images: [
      {
        id: '1',
        src: '/images/remodels/large/kitliv_large/kit1_before.webp',
        alt: 'Kitchen before',
        type: 'before' as const,
      },
      {
        id: '2',
        src: '/images/remodels/large/kitliv_large/kit1_after.webp',
        alt: 'Kitchen after',
        type: 'after' as const,
      },
      {
        id: '3',
        src: '/images/remodels/large/kitliv_large/kit2_after.webp',
        alt: 'Kitchen after (angle 2)',
        type: 'after' as const,
      },
      {
        id: '4',
        src: '/images/remodels/large/kitliv_large/liv1_before.webp',
        alt: 'Living area before',
        type: 'before' as const,
      },
      {
        id: '5',
        src: '/images/remodels/large/kitliv_large/liv1_after.webp',
        alt: 'Living area after',
        type: 'after' as const,
      },
      {
        id: '6',
        src: '/images/remodels/large/bath_large/ba_1before.webp',
        alt: 'Bathroom before',
        type: 'before' as const,
      },
      {
        id: '7',
        src: '/images/remodels/large/bath_large/ba_2during.webp',
        alt: 'Bathroom during renovation',
        type: 'during' as const,
      },
      {
        id: '8',
        src: '/images/remodels/large/bath_large/ba_3after.webp',
        alt: 'Bathroom after',
        type: 'after' as const,
      },
    ],
  },
  {
    id: 'med',
    name: 'Medium Remodel',
    description:
      'Kitchen and bedroom upgrades targeting rent gap vs. nearby units',
    details: 'Kitchen + Bedroom • Completed 2022',
    metrics: [
      {
        label: 'Rent Increase',
        value: '+$350',
        change: '+16.6%',
        changeType: 'positive' as const,
      },
      {
        label: 'Leased in',
        value: '32',
        change: 'DAYS',
        changeType: 'negative' as const,
      },
      {
        label: 'Annual Return (Cash-on-Cash)',
        value: '27%' /*, change: '+6.2%', changeType: 'positive' as const */,
      },
      {
        label: 'Estimated Value Created',
        value: '+$76.3k',
        change: '5.5% CAP',
        changeType: 'positive' as const,
      },
    ],
    changes: [
      'Kitchen remodel with 30% more cabinet space, new countertops, and updated fixtures',
      'Light bathroom remodel with new tile, paint, and lighting',
      'New LVP flooring throughout the apartment, with updated electrical wiring and lighting',
      'Converted large bonus space into a second bedroom, including a new closet and doors',
    ],
    images: [
      {
        id: '1',
        src: '/images/remodels/med/kitchen_med/kit_1before.webp',
        alt: 'Kitchen before',
        type: 'before' as const,
      },
      {
        id: '2',
        src: '/images/remodels/med/kitchen_med/kit_1after.webp',
        alt: 'Kitchen after',
        type: 'after' as const,
      },
      {
        id: '3',
        src: '/images/remodels/med/kitchen_med/kit_2before.webp',
        alt: 'Kitchen before (angle 2)',
        type: 'before' as const,
      },
      {
        id: '4',
        src: '/images/remodels/med/kitchen_med/kit_2after.webp',
        alt: 'Kitchen after (angle 2)',
        type: 'after' as const,
      },
      {
        id: '5',
        src: '/images/remodels/med/bed_med/bed_1before.webp',
        alt: 'Bedroom before',
        type: 'before' as const,
      },
      {
        id: '6',
        src: '/images/remodels/med/bed_med/bed_1during.webp',
        alt: 'Bedroom during renovation',
        type: 'during' as const,
      },
      {
        id: '7',
        src: '/images/remodels/med/bed_med/bed_1after.webp',
        alt: 'Bedroom after',
        type: 'after' as const,
      },
    ],
  },
  {
    id: 'light',
    name: 'Light Remodel',
    description:
      'Targeted bathroom upgrade to close rent gap with minimal spend',
    details: 'Bathroom • Completed 2021',
    metrics: [
      {
        label: 'Rent Increase',
        value: '$150',
        change: '+3%',
        changeType: 'positive' as const,
      },
      {
        label: 'Leased in',
        value: '61',
        change: 'DAYS',
        changeType: 'negative' as const,
      },
      {
        label: 'Annual Return (Cash-on-Cash)',
        value: '10%' /*, change: '+3.8%', changeType: 'positive' as const */,
      },
      {
        label: 'Estimated Value Created',
        value: '+$30k',
        change: '6% CAP',
        changeType: 'positive' as const,
      },
    ],
    changes: [
      'Full bathroom remodel with a new bath/shower, vanity, and updated fixtures',
      'Half bathroom remodel',
      'Tile surround replacement',
      'Converted shower area to laundry, increasing livable space and adding a small office where the previous washer and dryer were located',
      'New stackable washer and dryer',
    ],
    images: [
      {
        id: '1',
        src: '/images/remodels/light/ba_1before.webp',
        alt: 'Bathroom before',
        type: 'before' as const,
      },
      {
        id: '2',
        src: '/images/remodels/light/ba_2after.webp',
        alt: 'Bathroom after',
        type: 'after' as const,
      },
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
        <nav className="border-border mb-8 flex gap-2 border-b">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(i)}
              className={`-mb-px border-b-2 px-1 pb-3 text-sm font-medium transition-colors ${
                i === currentIndex
                  ? 'border-foreground text-foreground'
                  : 'text-muted-foreground hover:text-foreground border-transparent'
              }`}
            >
              {p.name}
            </button>
          ))}
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-foreground text-3xl font-bold text-balance">
            {project.name}
          </h1>
          <p className="text-muted-foreground mt-2">{project.description}</p>
        </header>

        {/* Gallery */}
        <RemodelGallery
          key={project.id}
          images={project.images}
          className="mb-10"
          aspect={project.id === 'light' ? 'portrait' : 'landscape'}
        />

        {/* Investment Impact */}
        <p className="text-tagline font-caveat mb-4 text-center text-xl font-medium sm:text-2xl">
          Investment Impact
        </p>

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
              <li
                key={index}
                className="text-muted-foreground flex items-start gap-3"
              >
                <span className="bg-muted-foreground/50 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                <span>{change}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
