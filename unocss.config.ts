import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Nunito Sans',
      },
    }),
  ],
  // rules: [
  //   ['m-1', { margin: '0.25rem' }],
  // ],
  theme: {
    colors: {

      gray: {
        50: 'rgb(var(--color-gray-50))',
        100: 'rgb(var(--color-gray-100))',
        200: 'rgb(var(--color-gray-200))',
        300: 'rgb(var(--color-gray-300))',
        400: 'rgb(var(--color-gray-400))',
        500: 'rgb(var(--color-gray-500))',
        600: 'rgb(var(--color-gray-600))',
        700: 'rgb(var(--color-gray-700))',
        800: 'rgb(var(--color-gray-800))',
        900: 'rgb(var(--color-gray-900))',
      },

      normal: 'rgb(var(--normal))',
      muted: 'rgb(var(--muted))',
      highlighted: 'rgb(var(--highlighted))',
      placeholder: 'rgb(var(--placeholder))',
      divider: 'rgb(var(--divider))',
      border: 'rgb(var(--border))',
      background: 'rgb(var(--background))',
      component: 'rgb(var(--component))',
      foreground: 'rgb(var(--foreground))',
      input: 'rgb(var(--input))',

      primary: 'rgb(var(--color-primary))',
    },
  },
})
