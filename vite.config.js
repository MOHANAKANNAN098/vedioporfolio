import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  server: {
    mimeTypes: {
      'video/mp4': ['mp4']
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'aos']
  }
})
