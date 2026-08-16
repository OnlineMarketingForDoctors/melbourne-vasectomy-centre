/**
 * NOINDEX GUARD — do not remove without an explicit decision to launch publicly.
 *
 * X-Robots-Tag is the authoritative de-indexing signal: it applies to every
 * response (pages, API routes, PDFs, images), and unlike a <meta> tag it does
 * not depend on the crawler executing or parsing HTML.
 *
 * Deliberately paired with a permissive public/robots.txt. Blocking crawl in
 * robots.txt would stop crawlers from ever fetching these headers, which can
 * leave a bare URL listed in search results with no way to remove it.
 */
const NOINDEX = 'noindex, nofollow, noarchive, nosnippet, noimageindex';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: NOINDEX }],
      },
    ];
  },
};

export default nextConfig;
