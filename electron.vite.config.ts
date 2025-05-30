import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import * as viteReact from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [(viteReact as any).default()]
  }
})
