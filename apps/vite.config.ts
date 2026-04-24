import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [react()],
    css: {
      devSourcemap: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3002,
      open: true,
      strictPort: true,
      proxy: {
        '/api': {
          target: 'https://bnpmediin.mycafe24.com',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => '/backend' + path,
        },
        '/uploads': {
          target: 'https://bnpmediin.mycafe24.com',
          changeOrigin: true,
          secure: true,
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: true,
    },
  }
})
