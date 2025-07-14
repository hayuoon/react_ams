import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/react_ams',
  plugins: [react()],
  build: {
    outDir: 'D:/dev_env/htdocs/biz_ams/bizwatch_ams/public/react_ams',
  },

})
