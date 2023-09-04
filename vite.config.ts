/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/.test/setup.ts",
    coverage: {
      provider: "v8",
    },
  },
});