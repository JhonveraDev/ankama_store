import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swiper/css': 'node_modules/swiper/swiper.min.css',
      'swiper/css/navigation': 'node_modules/swiper/modules/navigation.min.css',
    }
  }
})
