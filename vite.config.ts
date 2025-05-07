/**
 * Vite configuration file for the Happy Moments Companion app.
 *
 * This file configures the Vite build tool for a React application using TypeScript.
 * It uses the @vitejs/plugin-react and vite packages.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import * as fs from 'node:fs';

// Validate VITE_API_URL
function isValidURL(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

// Environment variables
const VITE_APP_TITLE = process.env.VITE_APP_TITLE || 'Happy Moments Companion';
const VITE_API_URL = process.env.VITE_API_URL || 'http://localhost:3000';
const VITE_THREE_MODEL_PATH = process.env.VITE_THREE_MODEL_PATH || '/models/';

if (!isValidURL(VITE_API_URL)) {
  throw new Error('VITE_API_URL is not a valid URL.');
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [react()],
  define: {
    'process.env': {
      VITE_APP_TITLE: JSON.stringify(VITE_APP_TITLE),
      VITE_API_URL: JSON.stringify(VITE_API_URL),
      VITE_THREE_MODEL_PATH: JSON.stringify(VITE_THREE_MODEL_PATH),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('src/components')) {
            return 'components';
          }
          return 'vendor';
        },
      },
    },
  },
});