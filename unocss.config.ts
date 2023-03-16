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
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // rules: [
  //   ['m-1', { margin: '0.25rem' }],
  // ],
  theme: {
    colors: {
      gray: {
        50: '#FFFFFF',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      normal: 'var(--color-gray-600)',
      muted: 'var(--color-gray-500)',
      highlighted: 'var(--color-gray-700)',
      placeholder: 'var(--color-gray-400)',
      component: 'rgb(255 255 255)',
      divider: 'var(--color-gray-200)',
      border: 'var(--color-gray-300)',
      background: 'var(--color-gray-100)',
      foreground: 'rgb(255 255 255)',
      input: 'rgb(255 255 255)',
      primary: 'var(--color-primary)',
    },

  },
})
