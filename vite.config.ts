import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const config: UserConfigExport = {
  cacheDir: '.vite',
  optimizeDeps: {
    include: [
      'graphql-request'
    ]
  },
  plugins: [
    react()
  ]
}
if (process.env.mode === 'test') {
  config.optimizeDeps?.include?.push('chai')
}

export default defineConfig(config)
