'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// "A 2BR remodel, by the numbers": Gray's four-part YouTube case study. Sits
// just above the "Talk with Gray" CTA, as proof of who a visitor would be
// talking to. Each card shows YouTube's thumbnail and loads the real player
// (youtube-nocookie, privacy-enhanced) only when clicked, so the page doesn't
// pay for four YouTube embeds up front.
const CHANNEL_URL = 'https://www.youtube.com/@GetRealReady';

type Video = {
  id: string;
  title: string;
  /** ISO 8601 duration for the VideoObject schema, e.g. PT3M49S. */
  duration: string;
  /** Shown on the card. */
  length: string;
  uploadDate: string;
  description: string;
};

const VIDEOS: Video[] = [
  {
    id: 'CBsbhxoEz2I',
    title: 'How do you measure remodel value?',
    duration: 'PT3M49S',
    length: '3:49',
    uploadDate: '2026-11-15T22:19:34-08:00',
    description:
      'Introduction to a 2BR apartment remodel and how gross rent multiplier and cap rate estimate the value it created.',
  },
  {
    id: 'Oej1Ez4dYgw',
    title: 'The kitchen',
    duration: 'PT10M54S',
    length: '10:54',
    uploadDate: '2026-11-15T22:23:53-08:00',
    description: 'Remodeling the kitchen of a 2BR apartment.',
  },
  {
    id: 'sMqPtgqq8iI',
    title: 'The bath: lower expenses, more appeal',
    duration: 'PT4M10S',
    length: '4:10',
    uploadDate: '2026-11-15T22:26:30-08:00',
    description:
      'Remodeling the bathroom of a 2BR apartment to reduce expenses and appeal to tenants.',
  },
  {
    id: 'MNAPZRKgmZ0',
    title: 'The financials',
    duration: 'PT8M35S',
    length: '8:35',
    uploadDate: '2026-11-15T22:29:56-08:00',
    description:
      'The numbers behind a 2BR apartment remodel: cost, rent and estimated value created.',
  },
];

const videoSchema = {
  '@context': 'https://schema.org',
  '@graph': VIDEOS.map((v, i) => ({
    '@type': 'VideoObject',
    name: `A 2BR remodel, part ${i + 1}: ${v.title}`,
    description: v.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
  })),
};

function VideoCard({ video, part }: { video: Video; part: number }) {
  const [playing, setPlaying] = useState(false);
  const label = `Part ${part}: ${video.title}`;

  return (
    <li className="flex flex-col gap-3">
      {/* The custom thumbnails for parts 2-4 have thin black bars baked in, so
          the poster frame is a little wider than 16:9 (object-cover then crops
          only top and bottom). The player itself opens at a true 16:9. */}
      <div
        className={`relative overflow-hidden rounded-xl bg-[#32322C] ${playing ? 'aspect-video' : 'aspect-[1.93/1]'}`}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${label} (${video.length})`}
            className="group absolute inset-0 focus-visible:ring-4 focus-visible:ring-[#3D5CE8] focus-visible:outline-none"
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
            />
            <span className="absolute top-3 left-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-white/95 text-[#32322C] shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:transition-none">
                <Play
                  className="ml-0.5 size-6 fill-current"
                  aria-hidden="true"
                />
              </span>
            </span>
            <span className="absolute top-3 right-3 rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white tabular-nums">
              {video.length}
            </span>
          </button>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#3550D9] tabular-nums">
          Part {part}
        </p>
        <h3 className="text-foreground mt-0.5 text-lg leading-snug font-medium text-pretty">
          {video.title}
        </h3>
      </div>
    </li>
  );
}

const GrrVideos = () => {
  return (
    <section
      id="grr-videos"
      className="bg-background scroll-mt-20 px-6 lg:px-0"
      aria-labelledby="grr-videos-title"
    >
      <script
        type="application/ld+json"
        // Static data defined above; no user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="grr-videos-title"
            className="text-foreground text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl"
          >
            A 2BR remodel, by the numbers
          </h2>
          <p className="text-muted-foreground mt-4 text-base text-pretty sm:text-lg">
            Four short videos on remodeling a 2BR apartment, and using gross
            rent multiplier (GRM) and cap rate to estimate the value it created.
          </p>
        </div>
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} part={i + 1} />
          ))}
        </ul>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-[#3550D9] underline underline-offset-4 hover:text-[#2a43bd]"
        >
          More on YouTube
        </a>
      </div>
    </section>
  );
};

export default GrrVideos;
