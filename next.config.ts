import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,

    // If you want to use a custom image loader, uncomment the following lines
    // loader: 'custom',
    // loaderFile: './src/lib/imageLoader.ts',
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Multi-zone: proxy the getrentready tool app through to this domain so
  // customers never leave getrealready.com. /tool/:path* covers everything
  // under the tool's own base path; /tool alone is needed too since Next's
  // :path* matcher doesn't cover the bare parent path. /report is the tool's
  // share-link path; /api covers the tool's own API routes, which its
  // client-side code calls with relative fetch() paths that resolve against
  // whatever domain is in the browser's address bar. /rubric-scoring (an
  // internal debug page) is deliberately NOT proxied — stays reachable only
  // on the tool's own getrentready.vercel.app domain.
  async rewrites() {
    return [
      { source: '/tool', destination: 'https://getrentready.vercel.app/tool' },
      { source: '/tool/:path*', destination: 'https://getrentready.vercel.app/tool/:path*' },
      { source: '/report/:path*', destination: 'https://getrentready.vercel.app/report/:path*' },
      { source: '/api/:path*', destination: 'https://getrentready.vercel.app/api/:path*' },
    ];
  },
};
const withMDX = createMDX({
  // Add markdown plugins here, if needed
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
