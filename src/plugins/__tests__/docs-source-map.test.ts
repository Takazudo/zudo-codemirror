import { describe, it, expect, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import {
  buildDocsSourceMap,
  clearDocsSourceMapCache,
} from "../docs-source-map";

let tmpDir: string;

function createFixture() {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "docs-source-map-test-"));

  // Create docs directory with some markdown files
  const docsDir = path.join(tmpDir, "src/content/docs");
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(
    path.join(docsDir, "getting-started.md"),
    "# Getting Started\n",
  );
  fs.writeFileSync(path.join(docsDir, "index.mdx"), "# Home\n");

  // Create ja locale directory
  const jaDir = path.join(tmpDir, "src/content/docs-ja");
  fs.mkdirSync(jaDir, { recursive: true });
  fs.writeFileSync(
    path.join(jaDir, "getting-started.md"),
    "# はじめに\n",
  );
}

function cleanup() {
  if (tmpDir) {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function makeOptions() {
  return {
    rootDir: tmpDir,
    docsDir: "src/content/docs",
    locales: { ja: { dir: "src/content/docs-ja" } },
    versions: false as const,
    base: "/pj/test/",
    trailingSlash: true,
  };
}

describe("buildDocsSourceMap", () => {
  beforeEach(() => {
    clearDocsSourceMapCache();
    createFixture();
  });

  afterEach(() => {
    cleanup();
    clearDocsSourceMapCache();
  });

  it("returns a map of file paths to URLs", () => {
    const options = makeOptions();
    const map = buildDocsSourceMap(options);

    expect(map.size).toBeGreaterThan(0);

    // Check that docs files are mapped
    const docsDir = path.join(tmpDir, "src/content/docs");
    const gettingStartedPath = path.join(docsDir, "getting-started.md");
    expect(map.get(gettingStartedPath)).toBe("/pj/test/docs/getting-started/");
  });

  it("returns the same cached object on second call with same options", () => {
    const options = makeOptions();

    const first = buildDocsSourceMap(options);
    const second = buildDocsSourceMap(options);

    // Cached result should be the exact same object reference (not a new Map)
    expect(second).toBe(first);
  });

  it("returns a fresh result after clearDocsSourceMapCache is called", () => {
    const options = makeOptions();

    const first = buildDocsSourceMap(options);
    clearDocsSourceMapCache();
    const second = buildDocsSourceMap(options);

    // After clearing cache, a new Map object should be created
    expect(second).not.toBe(first);

    // But contents should be equivalent
    expect(second.size).toBe(first.size);
    for (const [key, value] of first) {
      expect(second.get(key)).toBe(value);
    }
  });

  it("returns different cached results for different options", () => {
    const options1 = makeOptions();
    const options2 = { ...makeOptions(), base: "/other/" };

    const first = buildDocsSourceMap(options1);
    const second = buildDocsSourceMap(options2);

    // Different options produce different Map objects
    expect(second).not.toBe(first);
  });
});
