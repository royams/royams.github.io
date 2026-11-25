import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        publications: resolve(__dirname, 'publications/index.html'),
        talks: resolve(__dirname, 'talks/index.html'),
        teaching: resolve(__dirname, 'teaching/index.html'),
        cv: resolve(__dirname, 'cv/index.html'),
        publication1: resolve(__dirname, 'publication/2009-10-01-paper-title-number-1/index.html'),
        publication2: resolve(__dirname, 'publication/2010-10-01-paper-title-number-2/index.html'),
        publication3: resolve(__dirname, 'publication/2015-10-01-paper-title-number-3/index.html'),
        publication4: resolve(__dirname, 'publication/2024-02-17-paper-title-number-4/index.html'),
        talkSne: resolve(__dirname, 'talks/2025-SNE/index.html'),
        talkMma: resolve(__dirname, 'talks/2026-MMA/index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
})
