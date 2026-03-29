# zudo-codemirror

Takazudo's personal CodeMirror 6 dev notes, built with zudo-doc (Astro 6). Base path: `/pj/zudo-codemirror/`.

## Architecture

- `/doc/` - Documentation site built with zudo-doc (Astro 6, MDX, Tailwind CSS v4)
- `/scripts/` - Build and utility scripts

## Commands

```bash
pnpm dev          # Start Astro dev server (port 4321)
pnpm build        # Build static site to doc/dist/
pnpm build:cm6    # Rebuild CodeMirror IIFE bundle
pnpm preview      # Preview built site
pnpm check        # Astro type checking
pnpm format:md    # Format MDX files
pnpm b4push       # Pre-push validation (cm6 bundle + format + typecheck + build)
```

## Content Structure

- English (default): `doc/src/content/docs/` → `/docs/...`
- Japanese: `doc/src/content/docs-ja/` → `/ja/docs/...`
- Japanese docs should mirror the English directory structure

## Content Categories

- `getting-started/` - Installation, first editor, quick reference
- `core/` - EditorState, EditorView, Transaction, Extension system
- `vim-mode/` - @replit/codemirror-vim setup, commands, customization
- `extensions/` - Built-in and custom extensions
- `recipes/` - Practical patterns from real projects

## MDX Components

Available globally in MDX without imports:

- `<Note>`, `<Tip>`, `<Info>`, `<Warning>`, `<Danger>` - Admonitions
- `<HtmlPreview>` - Interactive HTML/CSS/JS preview with code display

## Live Demos (CM6 Bundle)

Interactive CodeMirror demos use a pre-built IIFE bundle at `doc/public/assets/cm6-bundle.min.js`.

- Rebuild: `pnpm build:cm6`
- Entry: `scripts/cm6-bundle-entry.ts`
- The bundle exposes `window.CM` with all CodeMirror exports
- Auto-loaded in every `<HtmlPreview>` via `settings.htmlPreview.head`
- Use `js` prop for runtime code (`CM.*` globals), `displayJs` prop for clean ESM imports shown in code panel

## CI/CD

- PR checks: typecheck + build + Cloudflare Pages preview
- Main deploy: build + Cloudflare Pages production + IFTTT notification
- Secrets: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN, IFTTT_PROD_NOTIFY
