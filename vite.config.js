import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true, // Enable source maps
    minify: 'terser', // Minify with terser
  },
  base: './',
  plugins: [
    react(),
  ],
})
