// CodeMirror 6 IIFE bundle entry point
// Built with esbuild, exposes window.CM for HtmlPreview demos

// Core
import { EditorView, basicSetup, minimalSetup } from "codemirror";
import {
  EditorState,
  Compartment,
  StateField,
  StateEffect,
  Prec,
} from "@codemirror/state";

// View
import {
  keymap,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
  drawSelection,
  highlightSpecialChars,
  scrollPastEnd,
  ViewPlugin,
} from "@codemirror/view";

// Commands
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
  undo,
  redo,
} from "@codemirror/commands";

// Language
import {
  syntaxHighlighting,
  HighlightStyle,
  indentOnInput,
  bracketMatching,
  foldGutter,
  foldKeymap,
} from "@codemirror/language";

// Language modes
import { javascript } from "@codemirror/lang-javascript";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";

// Search
import {
  search,
  searchKeymap,
  highlightSelectionMatches,
  openSearchPanel,
  closeSearchPanel,
} from "@codemirror/search";

// Autocomplete
import {
  autocompletion,
  completionKeymap,
  closeBrackets,
  closeBracketsKeymap,
} from "@codemirror/autocomplete";

// Theme
import { oneDark } from "@codemirror/theme-one-dark";

// Vim mode
import { vim, Vim, getCM } from "@replit/codemirror-vim";

// Highlight tags
import { tags } from "@lezer/highlight";

(window as any).CM = {
  // Core
  EditorView,
  basicSetup,
  minimalSetup,
  EditorState,
  Compartment,
  StateField,
  StateEffect,
  Prec,

  // View
  keymap,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
  drawSelection,
  highlightSpecialChars,
  scrollPastEnd,
  ViewPlugin,

  // Commands
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
  undo,
  redo,

  // Language
  syntaxHighlighting,
  HighlightStyle,
  indentOnInput,
  bracketMatching,
  foldGutter,
  foldKeymap,

  // Language modes
  javascript,
  markdown,
  markdownLanguage,

  // Search
  search,
  searchKeymap,
  highlightSelectionMatches,
  openSearchPanel,
  closeSearchPanel,

  // Autocomplete
  autocompletion,
  completionKeymap,
  closeBrackets,
  closeBracketsKeymap,

  // Theme
  oneDark,

  // Vim
  vim,
  Vim,
  getCM,

  // Highlight tags
  tags,
};
