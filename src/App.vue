import { isDark } from '~/composables'

<template>
  <div
    text="center"
    :class="{
      'light-theme': !isDark,
      'dark-theme': isDark,
    }"
    class="h-100vh flex flex-col theme-yellow gray-neutral color-normal bg-background"
  >
    <!-- NavBar -->
    <header class="bg-foreground flex-initial relative">
      <TheHeader />
    </header>

    <!-- Main Content -->
    <div class="flex-auto flex w-100%">
      <aside class="bg-foreground flex-initial w-80px">
        <TheSidebar />
      </aside>
      <main class="bg-background flex w-100% flex-col mt-20 pl-10 pr-10 pb-10">
        <RouterView class=" flex-grow" />
        <TheFooter class=" flex-none" />
      </main>
    </div>
  </div>
</template>
