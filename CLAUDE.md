# zudo-codemirror

Takazudo's personal CodeMirror 6 dev notes, built with zudo-doc (Astro 6).

## Architecture

- `/doc/` - Documentation site (Astro 6, MDX, Tailwind CSS v4). See `doc/CLAUDE.md` for content conventions.
- `/scripts/` - Build and utility scripts (CM6 bundle entry, b4push)

## Commands

```bash
pnpm dev          # Start Astro dev server (port 8847)
pnpm build        # Build static site to doc/dist/
pnpm build:cm6    # Rebuild CodeMirror IIFE bundle
pnpm preview      # Preview built site
pnpm check        # Astro type checking
pnpm format:md    # Format MDX files
pnpm b4push       # Pre-push validation (cm6 bundle + format + typecheck + build)
```

## CI/CD

- PR checks: typecheck + build + Cloudflare Pages preview
- Main deploy: build + Cloudflare Pages production + IFTTT notification
- Secrets: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN, IFTTT_PROD_NOTIFY
- Cloudflare Pages project: `zudo-codemirror`
- Deploy path: `/pj/zudo-codemirror/`
