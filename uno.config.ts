import { safelist, unocssShorcuts, colorPaletteVar } from '@regiondev/vue-components/lib/vite'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import colors from 'tailwindcss/colors'

export default defineConfig({
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: colors.violet,
      secondary: colors.sky,
    },
  },
  include: [
    'lib/**/*',
    /\.js$/,
    /vue-components\/*.js$/,
    // 'node_modules/**/*.js',
    // /\.js$/, /\.vue\?vue/
    // /rd\.js$/,
    // /\index.rd.js$/,
  ],
  shortcuts: [unocssShorcuts],

  safelist: [...safelist],
  presets: [
    presetUno({}),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
