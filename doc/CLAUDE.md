# Doc Site (zudo-doc)

Astro 6 + MDX + Tailwind CSS v4 + React islands. Base path: `/pj/zudo-codemirror/`.

## Content Structure

- English (default): `src/content/docs/` → `/docs/...`
- Japanese: `src/content/docs-ja/` → `/ja/docs/...`
- Japanese docs mirror the English directory structure

## Categories

- `overview/` - About, installation, quick reference
- `core/` - EditorState, EditorView, Transaction, Extension system
- `vim-mode/` - @replit/codemirror-vim setup, commands, customization
- `extensions/` - Built-in and custom extensions
- `recipes/` - Practical patterns from real projects

## MDX Components

Available globally without imports:

- `<Note>`, `<Tip>`, `<Info>`, `<Warning>`, `<Danger>` - Admonitions
- `<HtmlPreview>` - Interactive HTML/CSS/JS preview with code display

## Live CodeMirror Demos

A pre-built IIFE bundle at `public/assets/cm6-bundle.min.js` exposes `window.CM` in every HtmlPreview iframe.

- Rebuild: `pnpm --dir .. build:cm6` (entry: `../scripts/cm6-bundle-entry.ts`)
- `js` prop: runtime code using `CM.*` globals
- `displayJs` prop: clean ESM imports shown in "Show code" panel
- Available exports: EditorView, basicSetup, minimalSetup, EditorState, Compartment, StateField, StateEffect, Prec, keymap, lineNumbers, highlightActiveLine, drawSelection, scrollPastEnd, ViewPlugin, defaultKeymap, history, historyKeymap, indentWithTab, undo, redo, syntaxHighlighting, HighlightStyle, bracketMatching, foldGutter, javascript, markdown, markdownLanguage, search, searchKeymap, highlightSelectionMatches, oneDark, vim, Vim, getCM, tags

## Frontmatter

Required: `title` (string). Optional: `description`, `sidebar_position` (number).

## i18n

When adding or modifying EN content, update the corresponding JA file. Keep HtmlPreview blocks identical — only translate surrounding text.
