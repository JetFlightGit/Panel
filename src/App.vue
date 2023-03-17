import { isDark } from '~/composables'

<template>
  <main
    text="center"
    :class="{
      'light-theme': !isDark,
      'dark-theme': isDark,
    }"
    class="h-screen theme-blue gray-pure color-normal bg-background"
  >
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>
</template>
