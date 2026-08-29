'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

function CityNotifyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
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
        body: JSON.stringify({ email, cities: selectedCities }),
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
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#32322C]/55 p-[30px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-[630px] flex-col gap-6 rounded-[30px] bg-white p-12 sm:p-[60px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 text-[30px] leading-none text-[#8a8a80] transition-colors hover:text-[#32322C]"
        >
          ×
        </button>
        <span className="text-lg font-semibold text-[#F76F8E]">
          Coming soon
        </span>
        <h3 className="text-4xl leading-tight font-extrabold text-[#32322C]">
          Get notified when we launch in your city
        </h3>
        <p className="text-[22px] leading-relaxed text-[#5a5a52]">
          Leave your email and we&apos;ll let you know when Get Rent Ready
          expands to other Bay Area cities.
        </p>
        {status === 'success' ? (
          <div className="rounded-[18px] bg-[#D2E0BF] p-6 text-center text-[22px] font-semibold text-[#32322C]">
            You&apos;re on the list — we&apos;ll be in touch.
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              <span className="text-lg font-semibold text-[#32322C]">
                Which cities are you interested in?
              </span>
              <div className="flex flex-wrap gap-2.5">
                {BAY_AREA_CITIES.map((city) => {
                  const active = selectedCities.includes(city);
                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => toggleCity(city)}
                      aria-pressed={active}
                      className={`rounded-full border px-4 py-2 text-base font-medium transition-colors ${
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
            <form onSubmit={handleSubmit} className="flex gap-[15px]">
              <Input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[66px] flex-1 rounded-[15px] px-[18px] text-lg"
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="h-[66px] shrink-0 rounded-[15px] bg-[#4D6CFA] text-lg text-white hover:bg-[#3D5CE8]"
              >
                {status === 'loading' ? 'Sending…' : 'Notify me'}
              </Button>
            </form>
          </>
        )}
        {status === 'error' && (
          <p className="text-lg text-red-500">
            Something went wrong — please try again.
          </p>
        )}
      </div>
    </div>
  );
}

const MetafiRentReadyPanel = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="grr-rent-ready"
      className="w-full bg-[#32322C] px-6 py-16 text-center sm:px-10 sm:py-20 md:py-[88px]"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F76F8E] px-3.5 py-1.5 text-[13px] font-semibold text-white">
          Now available
        </span>
        <h2 className="max-w-2xl text-3xl leading-tight font-extrabold text-balance text-white sm:text-4xl md:text-5xl">
          Get Rent Ready is now available in{' '}
          <span className="text-[#F76F8E]">Oakland</span>
        </h2>
        <p className="max-w-xl text-lg font-semibold text-[#F76F8E] sm:text-xl">
          See how your rental property compares.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-balance text-[#c9c9c0] sm:text-lg">
          Get Rent Ready compares your units to similar Oakland rentals to show
          where your rents stand and where there may be opportunities to
          improve.
        </p>
        <Button
          asChild
          className="mt-2 w-full bg-[#4D6CFA] text-white hover:bg-[#3D5CE8] sm:w-auto"
        >
          <Link href="/tool">
            Analyze My Property — Free
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <div className="mt-4 flex flex-wrap justify-center gap-3.5">
          <span className="rounded-full bg-[#3d3d35] px-4 py-2 text-[13px] font-medium text-[#D2E0BF]">
            Free to use
          </span>
          <span className="rounded-full bg-[#3d3d35] px-4 py-2 text-[13px] font-medium text-[#D2E0BF]">
            Coming soon to other Bay Area cities —{' '}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="font-semibold text-white underline underline-offset-2"
            >
              get notified
            </button>
          </span>
          <span className="rounded-full bg-[#3d3d35] px-4 py-2 text-[13px] font-medium text-[#D2E0BF]">
            No commitment
          </span>
        </div>
      </div>

      <CityNotifyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default MetafiRentReadyPanel;
