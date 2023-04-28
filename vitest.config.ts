import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // setupFiles: ['dotenv/config']
  },
  envPrefix: 'SHOPEE_SDK_',
  root: '.',
  resolve: {
    alias: {
      '@/': './src/'
    }
  }
})