'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Kept in sync by hand with the copy of this file in the getrentready repo
// (components/city-notify-modal.tsx) — no shared package between the two
// repos, so this is the shadcn-style "copy the component" pattern already
// used elsewhere in both codebases. Both copies POST to the same backend:
// getrealready.com proxies /api/:path* to getrentready.vercel.app, where
// app/api/notify-city-interest/route.ts actually lives.
const BAY_AREA_CITIES = [
  'Oakland',
  'San Francisco',
  'San Jose',
  'Berkeley',
  'San Mateo',
  'Sunnyvale',
  'Santa Clara',
  'Mountain View',
  'Hayward',
  'Concord',
  'Richmond',
  'Santa Rosa',
];

export function CityNotifyModal({
  open,
  onClose,
  source,
}: {
  open: boolean;
  onClose: () => void;
  /** Which surface is showing this modal, e.g. "getrealready-homepage" — recorded on the contact and included in the sign-up notification email. */
  source: string;
}) {
  const [email, setEmail] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  if (!open) return null;

  const toggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/notify-city-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, cities: selectedCities, source }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#32322C]/55 p-4 sm:p-[30px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        // max-h + overflow-y-auto: on a short mobile viewport (especially
        // with the on-screen keyboard open) this card can be taller than
        // the visible screen — without its own scroll, the CTA at the
        // bottom becomes unreachable rather than just off-screen.
        className="relative flex max-h-[90vh] w-full max-w-[630px] flex-col gap-4 overflow-y-auto rounded-[24px] bg-white p-6 sm:gap-6 sm:rounded-[30px] sm:p-12 md:p-[60px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-2xl leading-none text-[#8a8a80] transition-colors hover:text-[#32322C] sm:top-6 sm:right-6 sm:text-[30px]"
        >
          ×
        </button>
        <span className="text-sm font-semibold text-[#F76F8E] sm:text-lg">
          Coming soon
        </span>
        <h3 className="pr-6 text-2xl leading-tight font-extrabold text-[#32322C] sm:pr-0 sm:text-4xl">
          Get notified when we launch in your city
        </h3>
        <p className="text-sm leading-relaxed text-[#5a5a52] sm:text-[22px]">
          Leave your email and we&apos;ll let you know when Get Rent Ready
          expands to other Bay Area cities.
        </p>
        {status === 'success' ? (
          <div className="rounded-[18px] bg-[#D2E0BF] p-4 text-center text-base font-semibold text-[#32322C] sm:p-6 sm:text-[22px]">
            You&apos;re on the list — we&apos;ll be in touch.
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-sm font-semibold text-[#32322C] sm:text-lg">
                Which cities are you interested in?
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {BAY_AREA_CITIES.map((city) => {
                  const active = selectedCities.includes(city);
                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => toggleCity(city)}
                      aria-pressed={active}
                      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 sm:py-2 sm:text-base ${
                        active
                          ? 'border-[#4D6CFA] bg-[#4D6CFA] text-white'
                          : 'border-[#ddd] bg-[#F0EDE5] text-[#32322C] hover:bg-[#e5e0d3]'
                      }`}
                    >
                      {city}
                    </button>
                  );
                })}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:flex-row sm:gap-[15px]">
              <Input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-[15px] px-[18px] text-base sm:h-[66px] sm:text-lg"
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="h-12 shrink-0 rounded-[15px] bg-[#4D6CFA] text-base text-white hover:bg-[#3D5CE8] sm:h-[66px] sm:text-lg"
              >
                {status === 'loading' ? 'Sending…' : 'Notify me'}
              </Button>
            </form>
          </>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500 sm:text-lg">
            Something went wrong — please try again.
          </p>
        )}
      </div>
    </div>
  );
}
