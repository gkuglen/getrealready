import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default:
      'Get Real Ready — Smarter upgrades for better performing rental properties',
    template: '%s | Get Real Ready',
  },
  description:
    'We help landlords and property managers improve their units, align rents with the market, and maintain properties with a clear return on investment—without unnecessary upgrades or added complexity.',
  keywords: [
    'rental property',
    'property management',
    'rent optimization',
    'landlord services',
    'unit renovation',
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
  openGraph: {
    title:
      'Get Real Ready — Smarter upgrades for better performing rental properties',
    description:
      'We help landlords and property managers improve their units, align rents with the market, and maintain properties with a clear return on investment.',
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
      <body className={`hmin-h-screen ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
