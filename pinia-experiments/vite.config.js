import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  build: {
    extendViteConf(viteConf) {
      viteConf.define.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    },
},
  plugins: [vue()]
})