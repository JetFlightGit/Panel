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
    ['menu-item', 'relative block w100% border-b border-color-divider pl-5 pr-5 pt-6 pb-6 text-center color-normal hover:text-primary'],
    ['icon-center', 'h100% flex flex-grow items-center'],
    ['tooltip', 'relative before:z-10 before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:translate-x-full before:-translate-y-1/2 before:rounded-md before:bg-foreground before:px-3 before:py-2 before:text-normal before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:-right-[0.8rem] after:top-1/2 after:h-0 after:w-0 after:translate-x-0 after:-translate-y-1/2 after:border-8 after:border-r-gray-200 after:border-l-transparent after:border-b-transparent after:border-t-transparent after:invisible hover:before:visible hover:after:visible'],
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
