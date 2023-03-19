import { isDark } from '~/composables'

<template>
  <nav class="bg-foreground pl-4 pr-4 h100 w-100% flex justify-center items-center shadow-lg">
    <ul class=" flex h100% items-center flex-grow p-4 m-1 gap-3">
      <li>
        <button class="icon-center">
          <div i-carbon-menu class="text-3xl hover:color-primary " />
        </button>
      </li>
      <li>
        <span class="text-3xl"> Dashboard</span>
      </li>
    </ul>
    <ul class="flex gap-3">
      <li>
        <button class="icon-center" @click="toggleDark()">
          <div dark:i-carbon-moon i-carbon-sun class="text-2xl hover:color-primary" />
        </button>
      </li>
      <li>
        <button class="icon-center">
          <div class="i-mdi-fullscreen hover:color-primary" />
        </button>
      </li>
      <li>
        <button class="icon-center">
          <div dark:i-carbon-moon i-carbon-sun class="text-2xl hover:color-primary" />
        </button>
      </li>
    </ul>
  </nav>
</template>
