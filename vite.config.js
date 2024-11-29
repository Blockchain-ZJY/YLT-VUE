import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import glob from 'vite-plugin-glob';
export default defineConfig({
  define: {
    'process.env': process.env
  },

  plugins: [vue(),
  glob({
    entries: '../router/main/**/*.js',
    context: __dirname,
    keyAsFileName: true,
    filesAsObject: true
  })],

  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ],
  },

  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      },
    }
  },
});