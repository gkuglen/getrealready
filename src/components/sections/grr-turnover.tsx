'use client';

import { useEffect, useRef, useState } from 'react';

import { LIVE_CITIES, listCities } from '@/lib/live-cities';

// Why pricing at turnover matters: in rent-controlled cities the move-in rent
// becomes the base every capped annual increase builds on. The chart shows
// that compounding with an illustrative cap; it is labelled as an example on
// screen because allowable increases vary by city and year.
const RIGHT_RENT = 2800;
const LOW_RENT = 2600;
const CAP = 0.03;
const YEARS = 5;

const POINTS = Array.from({ length: YEARS + 1 }, (_, year) => ({
  year,
  right: Math.round(RIGHT_RENT * (1 + CAP) ** year),
  low: Math.round(LOW_RENT * (1 + CAP) ** year),
}));

// Rent lost over the five years after move-in: each year's monthly gap × 12.
const FIVE_YEAR_GAP = POINTS.slice(0, YEARS).reduce(
  (sum, p) => sum + (p.right - p.low) * 12,
  0,
);

const usd = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);

const yearLabel = (year: number) => (year === 0 ? 'Move-in' : `Year ${year}`);

// Chart geometry. The SVG's width tracks its container (1 unit = 1px) so axis
// text stays 12px on phones instead of shrinking with a scaled viewBox.
const H = 300;
const PAD = { top: 16, right: 16, bottom: 32, left: 56 };
const Y_MIN = 2500;
const Y_MAX = 3300;
const Y_TICKS = [2600, 2800, 3000, 3200];
const y = (rent: number) =>
  PAD.top + (1 - (rent - Y_MIN) / (Y_MAX - Y_MIN)) * (H - PAD.top - PAD.bottom);

const RIGHT_COLOR = '#3D5CE8';
const LOW_COLOR = '#E0466C';

function TurnoverChart() {
  const [active, setActive] = useState<number | null>(null);
  const [W, setW] = useState(560);
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setW(Math.max(280, Math.round(entry.contentRect.width))),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const x = (year: number) =>
    PAD.left + (year / YEARS) * (W - PAD.left - PAD.right);
  const linePath = (key: 'right' | 'low') =>
    POINTS.map((p, i) => `${i ? 'L' : 'M'}${x(p.year)},${y(p[key])}`).join(' ');
  const gapPath = `${linePath('right')} ${[...POINTS]
    .reverse()
    .map((p) => `L${x(p.year)},${y(p.low)}`)
    .join(' ')} Z`;
  const last = POINTS[POINTS.length - 1];
  const point = active === null ? null : POINTS[active];

  return (
    <figure className="flex flex-col gap-4">
      <div
        className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#4a4a44]"
        aria-hidden="true"
      >
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-4 rounded-full" style={{ background: RIGHT_COLOR }} />
          Priced to market at turnover
        </span>
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-4 rounded-full" style={{ background: LOW_COLOR }} />
          Priced $200 low
        </span>
      </div>

      <div ref={boxRef} className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full overflow-visible"
          role="img"
          aria-label={`Example: a unit priced at ${usd(RIGHT_RENT)} rises to ${usd(last.right)} after ${YEARS} years of ${CAP * 100}% increases; priced at ${usd(LOW_RENT)} it reaches only ${usd(last.low)}. The gap totals about ${usd(FIVE_YEAR_GAP)} over five years.`}
          onMouseLeave={() => setActive(null)}
        >
          {Y_TICKS.map((t) => (
            <g key={t}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y(t)}
                y2={y(t)}
                stroke="#E7E4DD"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 10}
                y={y(t)}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-[#5f5e57] text-[12px] tabular-nums"
              >
                {usd(t)}
              </text>
            </g>
          ))}
          {/* On narrow charts "Move-in" would collide with "Yr 1"; drop that label. */}
          {POINTS.filter((p) => W >= 440 || p.year !== 1).map((p) => (
            <text
              key={p.year}
              x={x(p.year)}
              y={H - 8}
              textAnchor={p.year === 0 ? 'start' : p.year === YEARS ? 'end' : 'middle'}
              className="fill-[#5f5e57] text-[12px]"
            >
              {p.year === 0 ? 'Move-in' : `Yr ${p.year}`}
            </text>
          ))}

          <path d={gapPath} fill={LOW_COLOR} fillOpacity={0.1} />
          <path
            d={linePath('right')}
            fill="none"
            stroke={RIGHT_COLOR}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d={linePath('low')}
            fill="none"
            stroke={LOW_COLOR}
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {point && (
            <line
              x1={x(point.year)}
              x2={x(point.year)}
              y1={PAD.top}
              y2={H - PAD.bottom}
              stroke="#32322C"
              strokeOpacity={0.35}
              strokeWidth={1}
            />
          )}
          {(point ? [point] : [last]).flatMap((p) =>
            (['right', 'low'] as const).map((key) => (
              <circle
                key={`${p.year}-${key}`}
                cx={x(p.year)}
                cy={y(p[key])}
                r={4.5}
                fill={key === 'right' ? RIGHT_COLOR : LOW_COLOR}
                stroke="#ffffff"
                strokeWidth={2}
              />
            )),
          )}

          {/* Hover/tap targets: one full-height column per year, wider than the marks. */}
          {POINTS.map((p) => {
            const half = (W - PAD.left - PAD.right) / YEARS / 2;
            return (
              <rect
                key={p.year}
                x={x(p.year) - half}
                y={0}
                width={half * 2}
                height={H}
                fill="transparent"
                onMouseEnter={() => setActive(p.year)}
                onClick={() => setActive(p.year)}
              />
            );
          })}
        </svg>

        {point && (
          <div
            className="pointer-events-none absolute top-2 rounded-lg bg-[#32322C] px-3 py-2 text-[13px] leading-snug whitespace-nowrap text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
            style={{
              left: `${(x(point.year) / W) * 100}%`,
              transform: `translateX(${point.year > YEARS / 2 ? 'calc(-100% - 12px)' : '12px'})`,
            }}
          >
            <div className="font-semibold">{yearLabel(point.year)}</div>
            <div className="tabular-nums">
              Priced right {usd(point.right)}/mo
            </div>
            <div className="tabular-nums">Priced low {usd(point.low)}/mo</div>
            <div className="font-semibold tabular-nums">
              Gap {usd(point.right - point.low)}/mo
            </div>
          </div>
        )}
      </div>

      <figcaption className="flex flex-col gap-2">
        <p className="text-[#32322C]">
          <span className="text-3xl font-extrabold tracking-[-0.02em] tabular-nums">
            ≈ {usd(Math.round(FIVE_YEAR_GAP / 100) * 100)}
          </span>{' '}
          <span className="text-base">
            less rent over five years, from a $200 miss at move-in.
          </span>
        </p>
        <p className="text-sm text-[#5f5e57]">
          Example with a {CAP * 100}% annual cap. Allowable increases vary by
          city and year.
        </p>
        <details className="text-sm text-[#4a4a44]">
          <summary className="inline-flex min-h-11 cursor-pointer items-center font-medium underline underline-offset-4">
            Show the numbers
          </summary>
          <table className="mt-2 w-full max-w-md text-left tabular-nums">
            <thead>
              <tr className="border-b border-[#E7E4DD]">
                <th className="py-1.5 font-semibold">Year</th>
                <th className="py-1.5 font-semibold">Priced right</th>
                <th className="py-1.5 font-semibold">Priced $200 low</th>
                <th className="py-1.5 font-semibold">Gap / mo</th>
              </tr>
            </thead>
            <tbody>
              {POINTS.map((p) => (
                <tr key={p.year} className="border-b border-[#EFEDE9]">
                  <td className="py-1.5">{yearLabel(p.year)}</td>
                  <td className="py-1.5">{usd(p.right)}</td>
                  <td className="py-1.5">{usd(p.low)}</td>
                  <td className="py-1.5">{usd(p.right - p.low)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </figcaption>
    </figure>
  );
}

const GrrTurnover = () => {
  return (
    <section id="grr-turnover" className="bg-background px-6 lg:px-0">
      <div className="container grid items-center gap-12 px-0 py-16 sm:py-20 md:px-6 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-foreground max-w-xl text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl">
            The rent you set at turnover is the rent you live with
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl text-base text-pretty sm:text-lg">
            In {listCities(LIVE_CITIES)}, many rentals are under rent control.
            When a unit turns over, you can generally reset the rent to market.
            Once a new tenant moves in, increases are capped each year. Price a
            unit a few hundred dollars low at turnover, and that gap can follow
            you for years.
          </p>
          <p className="text-foreground mt-6 max-w-xl text-base font-medium text-balance sm:text-lg">
            Get Rent Ready helps you get that number right before you list.
          </p>
        </div>
        <TurnoverChart />
      </div>
    </section>
  );
};

export default GrrTurnover;
