import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cab-booking/',   // 🔥 critical — matches GitHub Pages repo name
  plugins: [react()],
  build: {
    target: 'es2018',
    sourcemap: false,
  },
})