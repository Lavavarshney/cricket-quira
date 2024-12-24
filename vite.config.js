import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Add Tailwind CSS to the plugins array
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },
  },
})