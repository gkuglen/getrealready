import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const columns = [
  {
    title: 'Navigate',
    links: [
      { name: 'Home', href: '/#grr-hero' },
      { name: 'Process', href: '/#grr-process' },
      { name: 'What We Do', href: '/#grr-what-we-do' },
      { name: 'How It Works', href: '/#grr-how-it-works' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Unit Turns & Refreshes', href: '/#grr-services' },
      { name: 'Value-Add Renovations', href: '/#grr-services' },
      { name: 'Ongoing Maintenance', href: '/#grr-services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Request a Property Review', href: '/#grr-cta' },
      { name: 'Send Us Your Unit', href: '/#grr-cta' },
      { name: 'Email Us', href: 'mailto:gray@getrealready.com' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

const socials = [
  { Icon: Linkedin, href: 'https://linkedin.com' },
  { Icon: Twitter, href: 'https://twitter.com' },
  { Icon: Facebook, href: 'https://facebook.com' },
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
              Get Real Ready — Smarter upgrades for better performing rental
              properties.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:flex md:w-[560px] md:items-start md:justify-between md:gap-0">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="text-muted-foreground mb-4 text-sm leading-tight font-medium">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
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
            {socials.map(({ Icon, href }) => (
              <Link
                key={href}
                href={href}
                aria-label={href}
                className="text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
