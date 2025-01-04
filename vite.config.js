import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from any device on the same network
    port: 5173,      // Specifies the port (can be changed if needed)
    strictPort: true // Ensures the server fails if the port is not available
  }
})
