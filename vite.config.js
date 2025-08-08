import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Spanish-MMA/',
  css: {
    postcss: './postcss.config.js'
  }
});