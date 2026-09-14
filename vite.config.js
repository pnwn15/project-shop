// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'gh-pages' ? '/project-shop/' : '/',
  plugins: [react()],
})