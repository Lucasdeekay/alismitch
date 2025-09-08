import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Detect if we're inside GitHub Actions (used for GitHub Pages deploys)
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

  return {
    plugins: [react()],
    base: isGitHubPages ? '/alismitch-website/' : '/', // ✅ GitHub Pages vs Vercel
  }
})
