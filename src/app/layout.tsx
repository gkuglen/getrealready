import './globals.css';

import type { Metadata } from 'next';
import { Caveat, Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import { AnalyticsPageview } from '@/components/analytics/analytics-pageview';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default:
      'Get Rent Ready — Set the right rent for your rental | Get Real Ready',
    template: '%s | Get Real Ready',
  },
  description:
    'Get Rent Ready, from Get Real Ready, compares your rental to similar units nearby in Oakland, Berkeley and Alameda so you can set the right rent at turnover. Free to use.',
  keywords: [
    'rental property',
    'property management',
    'rent optimization',
    'landlord services',
    'rent control',
    'rental comps',
    'property value',
    'real estate',
  ],
  authors: [{ name: 'Get Real Ready' }],
  creator: 'Get Real Ready',
  publisher: 'Get Real Ready',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'Get Rent Ready — Set the right rent for your rental',
    description:
      'Compare your rental to similar units nearby in Oakland, Berkeley and Alameda and set the right rent at turnover. Free, from Get Real Ready.',
    siteName: 'Get Real Ready',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Get Real Ready' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          async
          src="https://news.google.com/swg/js/v1/publisher.js"
        ></script>
      </head>
      <body
        className={`hmin-h-screen ${inter.variable} ${caveat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          // The marketing site is designed for the light theme only (the
          // dark hero is fixed); a visitor's saved "dark" choice no longer applies.
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsPageview />
        </Suspense>
      </body>
    </html>
  );
}
