import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'

export default defineConfig({
  base: '/weather-app/',
  plugins: [react(), manualChunksPlugin()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
        },
      },
    },
  },
})
