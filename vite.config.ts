import {
  AutoImportTypes,
  regionComponents,
  RegionDevResolver,
  REGIONDEV_DIR,
} from '@regiondev/vue-components/lib/vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { getModifyVars } from './utils'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    Vue(),
    vueJsx({}),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        {
          '@regiondev/vue-utils': ['pt'],
          [REGIONDEV_DIR]: regionComponents,
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: './lib/types/auto-imports.d.ts',
    }),
    Components({
      dts: 'lib/types/components.d.ts',
      types: [AutoImportTypes],
      dirs: [REGIONDEV_DIR],
      resolvers: [RegionDevResolver],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          ...getModifyVars(),
        },
        javascriptEnabled: true,
      },
    },
  },
})
