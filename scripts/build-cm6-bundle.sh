#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT_DIR/public/assets/cm6-bundle.min.js"

mkdir -p "$(dirname "$OUT")"

./node_modules/.bin/esbuild "$ROOT_DIR/scripts/cm6-bundle-entry.ts" \
  --bundle \
  --minify \
  --format=iife \
  --outfile="$OUT" \
  --target=es2020 \
  --legal-comments=none

SIZE=$(wc -c < "$OUT" | tr -d ' ')
echo "Built cm6-bundle.min.js ($SIZE bytes)"
