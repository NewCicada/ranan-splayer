import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      // ⚠️ Vue must be placed after VueRouter()
      vue(),
      'vue',
      {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar',
        ],
      },
      VueRouter({
        /* options */
        resolvers: [NaiveUiResolver()],
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: './auto-import.d.ts', // or a custom path
        eslintrc: {
          enabled: true, // <-- this
        },
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    server: {
      port: 8888,
      open: true,
      http: true,
      ssr: false,
      // 设置代理
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_MUSIC_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/style/index.scss";',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  })
