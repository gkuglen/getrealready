import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const columns = [
  {
    title: 'Navigate',
    links: [
      { name: 'How It Works', href: '/' },
      { name: 'Results', href: '/results' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'About', href: '/about' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Request a Property Review', href: '/#grr-cta' },
      { name: 'Send Us Your Unit', href: '/#grr-cta' },
      { name: 'Email Us', href: 'mailto:gray@getrealready.com' },
    ],
  },
];

const socials = [
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/graykuglen',
    label: 'Gray Kuglen on LinkedIn',
  },
];

export const Footer = () => {
  return (
    <footer className="force-light-vars bg-primary text-primary-foreground px-2.5 lg:px-0">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div className="md:min-w-[160px]">
            <Link href="/" aria-label="Get Real Ready">
              <Image
                src="/images/layout/grr_wht.svg"
                alt="Get Real Ready"
                width={140}
                height={32}
                className=""
              />
            </Link>
            <p className="text-primary-foreground/50 mt-3 max-w-[200px] text-sm leading-snug">
              Get Real Ready makes Get Rent Ready, rental pricing for Bay Area
              landlords.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 md:flex md:w-[400px] md:items-start md:justify-between md:gap-0">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="text-muted-foreground mb-4 text-sm leading-tight font-medium">
                  {col.title}
                </h3>
                <ul className="flex flex-col md:gap-3">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="text-primary-foreground/90 hover:text-primary-foreground inline-flex min-h-11 items-center text-sm font-normal transition-colors md:min-h-0"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-border/40 mt-12 border-t" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-muted-foreground text-sm font-normal">
            © {new Date().getFullYear()} Get Real Ready. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href, label }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-foreground -m-3 flex size-11 items-center justify-center transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* A bare JSX attribute like google-add-preferred-source-btn resolves
            to boolean true, which React silently strips from a plain <div>
            since it isn't a recognized DOM attribute — confirmed on the
            getrentready repo's equivalent change. An explicit "" value is
            treated as a normal string attribute and passes through as-is.
            suppressHydrationWarning is required here too: Google's SwG
            script (loaded in the root layout's <head>) finds this div and
            initializes a real widget into it — adding data-initialized/
            aria-live attributes — which can happen before React finishes
            hydrating, and React flags that as a mismatch otherwise. This
            div's whole purpose is to be mutated by that external script, so
            React shouldn't try to reconcile its attributes at all (same
            reasoning as the suppressHydrationWarning already on <html> in
            src/app/layout.tsx, for next-themes' own client-only attribute). */}
        <div
          google-add-preferred-source-btn=""
          suppressHydrationWarning
          className="mt-6"
        />
      </div>
    </footer>
  );
};
