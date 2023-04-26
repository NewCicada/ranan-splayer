import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
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
      /*option*/
      resolvers: [NaiveUiResolver()]
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/style/index.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  }
})
