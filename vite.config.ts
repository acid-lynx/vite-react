import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build'
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})