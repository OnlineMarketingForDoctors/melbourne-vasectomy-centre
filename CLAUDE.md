# Melbourne Vasectomy Centre

## Status

Pre-launch. The site is being built for review and is **not** to appear in
search results.

## Hard requirement: the site must stay noindex

Every page, asset, and API route must be de-indexed until the owner explicitly
decides to launch. Three layers enforce this — keep all three intact:

1. **`X-Robots-Tag` response header** (`next.config.mjs`) — applies to all
   routes and all file types. This is the authoritative signal.
2. **Root layout robots metadata** — when `app/layout.tsx` is created it must
   export:

   ```ts
   export const metadata: Metadata = {
     robots: { index: false, follow: false, nocache: true },
   };
   ```

   Any page that sets its own `metadata` must not override `robots`.
3. **`public/robots.txt`** — deliberately allows crawling. Do not add
   `Disallow: /`; blocking crawl prevents crawlers from reading the noindex
   directives above, which can leave URLs listed with no way to remove them.

### When building

- Do not add a sitemap, `sitemap.xml`, or `app/sitemap.ts`.
- Do not add canonical tags pointing at a public production domain.
- Do not add analytics/verification tags that submit the site to a search
  index (Google Search Console verification, IndexNow, etc.).
- Keep the noindex layers in place when adding new routes or route handlers.

### Verifying

After any deploy, confirm the header is actually being sent:

```sh
curl -sSI https://<deployment-url>/ | grep -i x-robots-tag
# expected: x-robots-tag: noindex, nofollow, noarchive, nosnippet, noimageindex
```

Note that Vercel preview deployments are noindexed by Vercel as well, but that
protection does not extend to a production domain — the layers above are what
cover it.

## Skills

`.claude/skills/frontend-design/` — Anthropic's frontend-design skill, used for
visual design direction.
