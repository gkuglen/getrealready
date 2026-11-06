'use client';

import { X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LIVE_CITIES, listCities } from '@/lib/live-cities';

// Kept in sync by hand with the copy of this file in the getrentready repo
// (components/city-notify-modal.tsx) — no shared package between the two
// repos, so this is the shadcn-style "copy the component" pattern already
// used elsewhere in both codebases. Only the live-city import differs. Both
// copies POST to the same backend: getrealready.com proxies /api/:path* to
// getrentready.vercel.app, where app/api/notify-city-interest/route.ts
// actually lives.
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

// Cities already live are never offered as "coming soon" — asking someone to
// vote for a city we just told them is live reads as a mistake. The
// getrentready copy filters against its COVERED_CITIES (data/city_zones.json).
// "Another Bay Area city" keeps the city requirement from locking out anyone
// whose city isn't listed (Fremont, Emeryville, …).
const NOTIFY_CITIES = [
  ...BAY_AREA_CITIES.filter((city) => !LIVE_CITIES.includes(city)),
  'Another Bay Area city',
];

// Same check the API route runs, so a bad address is caught here with a
// message next to the field instead of a round trip and a generic error.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FOCUSABLE =
  'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

type SubmitError = 'server' | 'network' | null;

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>(
    'idle',
  );
  const [emailError, setEmailError] = useState<string | null>(null);
  const [cityError, setCityError] = useState(false);
  const [submitError, setSubmitError] = useState<SubmitError>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const firstCityRef = useRef<HTMLButtonElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);

  const titleId = useId();
  const descriptionId = useId();
  const emailId = useId();
  const emailErrorId = useId();
  const cityErrorId = useId();

  // After a successful sign-up, reopening starts a fresh form rather than
  // showing the old confirmation. A failed attempt keeps what was typed.
  const close = () => {
    if (status === 'success') {
      setEmail('');
      setSelectedCities([]);
      setStatus('idle');
    }
    onClose();
  };
  // The keyboard effect below reads close through a ref so it only runs when
  // the dialog opens/closes — parents pass an inline onClose, and re-running
  // the effect on every render would keep yanking focus back to the email field.
  const closeRef = useRef(close);
  closeRef.current = close;

  useEffect(() => {
    if (!open) return;
    const returnFocusTo = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    emailRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable =
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!dialogRef.current.contains(document.activeElement)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusTo?.focus();
    };
  }, [open]);

  // The form (and the focused button inside it) disappears on success; move
  // focus to the confirmation's button so keyboard users aren't dropped on <body>.
  useEffect(() => {
    if (status === 'success') doneRef.current?.focus();
  }, [status]);

  if (!open) return null;

  const toggleCity = (city: string) => {
    setCityError(false);
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    const trimmed = email.trim();
    const badEmail = !EMAIL_PATTERN.test(trimmed);
    const noCity = selectedCities.length === 0;
    setEmailError(
      badEmail
        ? trimmed
          ? 'That email address doesn’t look right. Check it for typos.'
          : 'Enter your email address.'
        : null,
    );
    setCityError(noCity);
    setSubmitError(null);
    if (badEmail) {
      emailRef.current?.focus();
      return;
    }
    if (noCity) {
      firstCityRef.current?.focus();
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/notify-city-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, cities: selectedCities, source }),
      });
      if (res.status === 400) {
        setStatus('idle');
        setEmailError(
          'That email address doesn’t look right. Check it for typos.',
        );
        emailRef.current?.focus();
        return;
      }
      if (!res.ok) {
        setStatus('idle');
        setSubmitError('server');
        return;
      }
      setEmail(trimmed);
      setStatus('success');
    } catch {
      setStatus('idle');
      setSubmitError('network');
    }
  };

  const chosenCities = selectedCities.filter(
    (city) => city !== 'Another Bay Area city',
  );

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#32322C]/55 p-4 sm:p-[30px]"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(e) => e.stopPropagation()}
        // max-h + overflow-y-auto: on a short mobile viewport (especially
        // with the on-screen keyboard open) this card can be taller than
        // the visible screen — without its own scroll, the CTA at the
        // bottom becomes unreachable rather than just off-screen.
        className="relative flex max-h-[90vh] w-full max-w-[630px] flex-col gap-5 overflow-y-auto text-left rounded-[24px] bg-white p-6 sm:gap-6 sm:rounded-[30px] sm:p-12 md:p-[60px]"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-full text-[#6b6b62] transition-colors hover:bg-[#F0EDE5] hover:text-[#32322C] focus-visible:ring-2 focus-visible:ring-[#4D6CFA] focus-visible:outline-none sm:top-5 sm:right-5"
        >
          <X className="size-6" aria-hidden="true" />
        </button>

        {status === 'success' ? (
          <div role="status" className="flex flex-col gap-5 sm:gap-6">
            <h2
              id={titleId}
              className="pr-10 text-2xl leading-tight font-extrabold text-[#32322C] sm:pr-0 sm:text-4xl"
            >
              You&apos;re on the list
            </h2>
            <p
              id={descriptionId}
              className="text-base leading-relaxed [overflow-wrap:anywhere] text-[#5a5a52] sm:text-[22px]"
            >
              {chosenCities.length > 0
                ? `We'll email ${email} when Get Rent Ready launches in ${listCities(chosenCities)}.`
                : `We'll email ${email} when Get Rent Ready launches in more Bay Area cities.`}
            </p>
            <Button
              ref={doneRef}
              type="button"
              onClick={close}
              className="h-12 w-full rounded-[15px] bg-[#3D5CE8] text-base text-white hover:bg-[#3550D9] sm:h-[66px] sm:text-lg"
            >
              Done
            </Button>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <div className="flex flex-col gap-3">
              <h2
                id={titleId}
                className="pr-10 text-2xl leading-tight font-extrabold text-[#32322C] sm:pr-0 sm:text-4xl"
              >
                Get notified when we launch in your city
              </h2>
              <p
                id={descriptionId}
                className="text-base leading-relaxed text-[#5a5a52] sm:text-[22px]"
              >
                Get Rent Ready is live in {listCities(LIVE_CITIES)}. Leave your
                email and we&apos;ll let you know when it reaches your city.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor={emailId}
                className="text-sm font-semibold text-[#32322C] sm:text-lg"
              >
                Email
              </label>
              <Input
                ref={emailRef}
                id={emailId}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(null);
                }}
                aria-invalid={emailError ? true : undefined}
                aria-describedby={emailError ? emailErrorId : undefined}
                className="h-12 rounded-[15px] border-[#8a8a80] px-[18px] text-base sm:h-[66px] sm:text-lg"
              />
              {emailError && (
                <p
                  id={emailErrorId}
                  role="alert"
                  className="text-sm font-medium text-[#b42318] sm:text-base"
                >
                  {emailError}
                </p>
              )}
            </div>

            <fieldset
              className="flex flex-col gap-2 sm:gap-3"
              aria-describedby={cityError ? cityErrorId : undefined}
            >
              <legend className="mb-2 text-sm font-semibold text-[#32322C] sm:mb-3 sm:text-lg">
                Which cities are you interested in?
              </legend>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {NOTIFY_CITIES.map((city, i) => {
                  const active = selectedCities.includes(city);
                  return (
                    <button
                      key={city}
                      ref={i === 0 ? firstCityRef : undefined}
                      type="button"
                      onClick={() => toggleCity(city)}
                      aria-pressed={active}
                      className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#4D6CFA] focus-visible:ring-offset-2 focus-visible:outline-none sm:text-base ${
                        active
                          ? 'border-[#3D5CE8] bg-[#3D5CE8] text-white'
                          : 'border-[#ddd] bg-[#F0EDE5] text-[#32322C] hover:bg-[#e5e0d3]'
                      }`}
                    >
                      {city}
                    </button>
                  );
                })}
              </div>
              {cityError && (
                <p
                  id={cityErrorId}
                  role="alert"
                  className="text-sm font-medium text-[#b42318] sm:text-base"
                >
                  Pick at least one city, or choose “Another Bay Area city.”
                </p>
              )}
            </fieldset>

            <div className="flex flex-col gap-3">
              {/* aria-disabled, not disabled: a disabled button drops focus
                  to <body> mid-submit, which lets the next Tab escape the
                  dialog. handleSubmit already ignores repeat submits. */}
              <Button
                type="submit"
                aria-disabled={status === 'loading'}
                className="h-12 w-full rounded-[15px] bg-[#3D5CE8] text-base text-white hover:bg-[#3550D9] aria-disabled:cursor-wait aria-disabled:opacity-70 sm:h-[66px] sm:text-lg"
              >
                {status === 'loading' ? 'Sending…' : 'Notify me'}
              </Button>
              {submitError && (
                <p
                  role="alert"
                  className="text-sm font-medium text-[#b42318] sm:text-base"
                >
                  {submitError === 'network'
                    ? 'We couldn’t reach our server. Check your connection and try again. Your email and cities are still filled in.'
                    : 'We couldn’t save your sign-up just now. Please try again in a minute. Your email and cities are still filled in.'}
                </p>
              )}
              <p className="text-sm text-[#5a5a52]">
                One email when your city goes live. No spam.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
