'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { CalendlyButton } from '@/components/ui/calendly-button';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '../ui/theme-toggle';

const HEADER_HEIGHT = 80;

const ITEMS = [
  { label: 'How It Works', href: '/' },
  { label: 'Results', href: '/results' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number | 'auto'>(0);
  const [minOpenHeight, setMinOpenHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;
    const viewportRemainder = Math.max(0, window.innerHeight - HEADER_HEIGHT);
    setMinOpenHeight(viewportRemainder);
    const onEnd = () => {
      if (isMenuOpen) setPanelHeight('auto');
      wrapper.removeEventListener('transitionend', onEnd);
    };
    if (isMenuOpen) {
      const target = Math.max(content.scrollHeight, viewportRemainder);
      setPanelHeight(target);
      wrapper.addEventListener('transitionend', onEnd);
    } else {
      const current = wrapper.getBoundingClientRect().height || 0;
      setPanelHeight(current);
      requestAnimationFrame(() => setPanelHeight(0));
    }
  }, [isMenuOpen, pathname]);

  useEffect(() => {
    const onResize = () => {
      if (!isMenuOpen || !contentRef.current) return;
      const viewportRemainder = Math.max(0, window.innerHeight - HEADER_HEIGHT);
      setMinOpenHeight(viewportRemainder);
      if (panelHeight !== 'auto') {
        setPanelHeight(
          Math.max(contentRef.current.scrollHeight, viewportRemainder),
        );
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMenuOpen, panelHeight]);

  return (
    <header className="bg-background border-border sticky top-0 z-50 h-20 border-b px-2.5 lg:px-0">
      <div className="container flex h-20 items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Get Real Ready"
        >
          <Image
            src="/images/layout/grr.svg"
            alt="Get Real Ready"
            width={65}
            height={65}
            className="invert-0 dark:invert"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {ITEMS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive
                    ? 'text-[#000] dark:text-white'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right actions */}
        <div className="flex items-center gap-2.5">
          <CalendlyButton className="hidden sm:block lg:block">
            See My Rent Potential
          </CalendlyButton>
          <div className="lg:block">
            <ThemeToggle />
          </div>
          {/* Hamburger */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle main menu"
          >
            <span className="sr-only">Toggle main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? 'opacity-0' : 'opacity-100',
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="lg:hidden">
        <div
          ref={wrapperRef}
          style={{
            height: panelHeight === 'auto' ? 'auto' : panelHeight,
            minHeight: isMenuOpen ? `${minOpenHeight}px` : undefined,
            transition: 'height 320ms cubic-bezier(.22,.61,.36,1)',
          }}
          className={cn(
            'border-border bg-background overflow-hidden border-t',
            'relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen',
          )}
          aria-hidden={!isMenuOpen}
        >
          <div
            ref={contentRef}
            className="max-h-[calc(100vh-80px)] overflow-auto"
          >
            <div className="container px-2.5">
              <div className="px-5">
                <nav
                  className={cn(
                    'mt-6 flex flex-col',
                    'transition-[transform,opacity] duration-300',
                    isMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0',
                  )}
                >
                  <div className="flex flex-col gap-6">
                    {ITEMS.map((link) => {
                      const isActive =
                        link.href === '/'
                          ? pathname === '/'
                          : pathname.startsWith(link.href);
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={cn(
                            'text-lg tracking-[-0.36px] transition-colors',
                            isActive
                              ? 'font-medium text-[#000] dark:text-white'
                              : 'text-muted-foreground',
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-4 mb-6">
                    <CalendlyButton
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      See My Rent Potential
                    </CalendlyButton>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
