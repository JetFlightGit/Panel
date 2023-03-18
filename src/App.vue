import { isDark } from '~/composables'

<template>
  <div
    text="center"
    :class="{
      'light-theme': !isDark,
      'dark-theme': isDark,
    }"
    class="h-screen flex flex-col theme-yellow gray-neutral color-normal bg-background"
  >
    <!-- NavBar -->
    <header class="flex flex-col bg-foreground relative h-5rem">
      <TheHeader />
    </header>

    <!-- Main Content -->
    <div class="flex-auto flex w-100% overflow-hidden">
      <aside class="bg-foreground flex-none w-80px">
        <TheSidebar />
      </aside>
      <main class="bg-background flex w-100% flex-col pt-10 pl-10 pr-10 overflow-auto">
        <RouterView class=" flex-grow" />
        <TheFooter class=" flex-none" />
      </main>
    </div>
  </div>
</template>
