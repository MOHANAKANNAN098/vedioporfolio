import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false
  },
  server: {
    middlewareMode: false
  },
  preview: {
    port: 3000,
    strictPort: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'aos']
  }
})
