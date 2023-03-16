<template>
  <nav class="top-bar">
    <ul class="flex justify-between p-4 m-1 theme-blue">
      <li>
        <router-link to="/" class="hover:text-yellow-300">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          About
        </router-link>
      </li>
      <li>
        <router-link to="/contact" class="hover:text-yellow-300">
          Contact
        </router-link>
      </li>
      <div class="w-4 h-4 bg-primary rounded-md  " />
    </ul>
  </nav>
</template>
