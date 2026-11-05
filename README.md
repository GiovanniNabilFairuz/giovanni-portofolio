# Giovanni Portfolio — Phase 1 (Scaffold)

Stack: React + TypeScript + Tailwind + Vite (frontend), Hono on Cloudflare Workers
(backend), D1 (database), R2 (media), deployed with Wrangler.

## Setup

```bash
npm install
npx wrangler login

# Create resources, then paste the returned database_id into wrangler.jsonc
npx wrangler d1 create giovanni-db
npx wrangler r2 bucket create giovanni-media

# Apply the initial schema
npx wrangler d1 migrations apply giovanni-db --remote
```

## Development

```bash
npm run dev          # Vite on :5173, proxies /api to :8787
npx wrangler dev     # Worker on :8787 (run in a second terminal)
```

For local admin testing, copy `.dev.vars.example` to `.dev.vars` and keep
`DEV_BYPASS_ACCESS=1`. This bypass applies only when the request hostname is
`localhost`. Never set it in production.

## Deploy

```bash
npm run deploy       # build, then `wrangler deploy`
```

The site lives at `https://giovanni.<your-subdomain>.workers.dev`.

## Protecting /cumanadmin (required before go-live)

Path hiding is not security. Do all of these:

1. Cloudflare Zero Trust → Access → Applications → Add self-hosted app.
   - Domain: `giovanni.<subdomain>.workers.dev`, path `cumanadmin*`.
   - Also add a second app or path rule for `api/admin*`.
   - Policy: Allow, Include → Emails → your email only.
2. Copy the Team domain into `ACCESS_TEAM_DOMAIN` and the Application AUD tag
   into `ACCESS_AUD` in `wrangler.jsonc`.
3. Confirm that an incognito window gets the Access login prompt at `/cumanadmin`.

The Worker verifies the Access JWT on every `/api/admin/*` request, so direct
API calls are rejected even if someone bypasses the frontend.

## Phase 1 scope

- Routing, including the hidden `/cumanadmin` route.
- Navbar, hero (live clock, stickers, polaroid placeholder), footer with Instagram link.
- Placeholder pages for About, Projects, Motion Graphics, Contact.
- Worker with health endpoint, Access JWT verification, CSRF header check.
- Initial D1 migration.

Not yet included: content editing, uploads, the motion gallery, the contact form,
and the admin panel UI. These come in Phases 2 to 4.
