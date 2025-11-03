import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Task-Focus/',    // <-- exactly your repo name with slashes
})
