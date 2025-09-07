import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  
  // ✅ When deploying to GitHub Pages:
  // Replace <repo-name> with your actual repo name
  base: '/alismitch-deploy/',

  // 🌍 Custom domain setup (optional):
  // If you want to use a custom domain instead of GitHub Pages URL,
  // uncomment the line below and set base to "/"
  //
  // base: '/',
})
