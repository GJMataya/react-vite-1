import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Vue from '@vitejs/plugin-vue'
import Icons from 'vite-plugin-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Icons({
      scale: 1.2, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: '', // Class names apply to icons
      compiler: null, // Compiler 'vue2' or 'vue3', by default detected automatically
    })
  ],
})
