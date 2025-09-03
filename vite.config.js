import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Gebruik polling om bestands-wijzigingen te detecteren
      usePolling: true,
    },
  },
})