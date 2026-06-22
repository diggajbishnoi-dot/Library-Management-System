import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Library-Management-System/', // Yahan repo ka naam aayega
  plugins: [react()]
})