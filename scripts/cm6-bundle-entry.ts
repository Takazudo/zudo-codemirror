// CodeMirror 6 IIFE bundle entry point
// Built with esbuild, exposes window.CM for HtmlPreview demos
//
// Only export APIs that are actually used in MDX demo files.
// To find usage: grep -roh "CM\.[a-zA-Z]*" src/content/docs/ src/content/docs-ja/ --include="*.mdx" | sort -u

// Core
import { EditorView, basicSetup, minimalSetup } from "codemirror";
import { EditorState, Compartment } from "@codemirror/state";

// View
import {
  keymap,
  lineNumbers,
  highlightActiveLine,
} from "@codemirror/view";

// Commands
import { history, historyKeymap, undo } from "@codemirror/commands";

// Language
import { bracketMatching, foldGutter } from "@codemirror/language";

// Language modes
import { javascript } from "@codemirror/lang-javascript";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";

// Search
import {
  search,
  searchKeymap,
  highlightSelectionMatches,
} from "@codemirror/search";

// Theme
import { oneDark } from "@codemirror/theme-one-dark";

// Vim mode
import { vim } from "@replit/codemirror-vim";

(window as any).CM = {
  // Core
  EditorView,
  basicSetup,
  minimalSetup,
  EditorState,
  Compartment,

  // View
  keymap,
  lineNumbers,
  highlightActiveLine,

  // Commands
  history,
  historyKeymap,
  undo,

  // Language
  bracketMatching,
  foldGutter,

  // Language modes
  javascript,
  markdown,
  markdownLanguage,

  // Search
  search,
  searchKeymap,
  highlightSelectionMatches,

  // Theme
  oneDark,

  // Vim
  vim,
};
