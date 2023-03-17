import { isDark } from '~/composables'

<template>
  <nav class="bg-foreground pl-4 pr-4 h-5rem w-100% flex items-center shadow">
    <ul class=" flex justify-between p-4 m-1 gap-3">
      <li class="">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          About
        </router-link>
      </li>
      <li>
        <button icon-btn @click="toggleDark()">
          <div dark:i-carbon-moon i-carbon-sun />
        </button>
      </li>
    </ul>
  </nav>
</template>
