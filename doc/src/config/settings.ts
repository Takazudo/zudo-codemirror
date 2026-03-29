export type {
  HeaderNavItem,
  ColorModeConfig,
  HtmlPreviewConfig,
  LocaleConfig,
  VersionConfig,
  FooterConfig,
} from "./settings-types";
import type {
  HeaderNavItem,
  ColorModeConfig,
  HtmlPreviewConfig,
  LocaleConfig,
  VersionConfig,
  FooterConfig,
} from "./settings-types";

export const settings = {
  colorScheme: "Default Dark",
  colorMode: {
    defaultMode: "dark",
    lightScheme: "Default Light",
    darkScheme: "Default Dark",
    respectPrefersColorScheme: true,
  } satisfies ColorModeConfig,
  siteName: "zudo-codemirror",
  siteDescription: "Takazudo's personal CodeMirror 6 dev notes — not official documentation" as string,
  base: "/pj/zudo-codemirror/",
  trailingSlash: false as boolean,
  noindex: false as boolean,
  editUrl: false as string | false,
  siteUrl: "" as string,
  docsDir: "src/content/docs",
  locales: {
    ja: { label: "JA", dir: "src/content/docs-ja" },
  } as Record<string, LocaleConfig>,
  mermaid: true,
  sitemap: false,
  docMetainfo: true,
  docTags: false,
  llmsTxt: false,
  math: false,
  aiAssistant: false as boolean,
  docHistory: false,
  colorTweakPanel: false as boolean,
  htmlPreview: {
    head: `<script src="/pj/zudo-codemirror/assets/cm6-bundle.min.js"></script>`,
    css: `.cm-editor { border: 1px solid #ddd; border-radius: 4px; }
.cm-editor.cm-focused { outline: 2px solid #4a9eff; outline-offset: -1px; }
.cm-editor .cm-scroller { font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace; font-size: 14px; }`,
  } satisfies HtmlPreviewConfig,
  versions: false as VersionConfig[] | false,
  claudeResources: {
    claudeDir: ".claude",
  } as { claudeDir: string; projectRoot?: string } | false,
  footer: {
    links: [],
    copyright: `Copyright © ${new Date().getFullYear()} <a href="https://x.com/Takazudo">Takazudo</a>. Built with <a href="https://takazudomodular.com/pj/zudo-doc">zudo-doc</a>.`,
  } satisfies FooterConfig,
  headerNav: [
    { label: "Overview", path: "/docs/overview", categoryMatch: "overview" },
    { label: "Core", path: "/docs/core", categoryMatch: "core" },
    { label: "Vim Mode", path: "/docs/vim-mode", categoryMatch: "vim-mode" },
    { label: "Extensions", path: "/docs/extensions", categoryMatch: "extensions" },
    { label: "Recipes", path: "/docs/recipes", categoryMatch: "recipes" },
  ] satisfies HeaderNavItem[],
};
