import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//sae
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
})
