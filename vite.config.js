import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://crxjs.dev/vite-plugin
import { crx } from "@crxjs/vite-plugin"
import manifest from "./manifest.json"

import packageJson from './package.json'
const { version } = packageJson

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/)

manifest.version = `${major}.${minor}.${patch}.${label}`
manifest.version_name = version

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: {
    port: 3000
  },
  build: {
   rollupOptions: {
       output:{
           manualChunks(id) {
               if (id.includes('node_modules')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString()
               }
           }
       }
      }
   }
})