<template>
  <div class="navbar font-inter">
    <div
      class="container grid grid-cols-1 sm:grid-cols-2 mx-auto py-6 sm:py-10"
    >
      <div
        class="col flex items-center justify-start sm:items-start sm:justify-start"
      >
        <NuxtLink
          to="/"
          class="text-2xl bg-black dark:bg-white dark:text-gray-900 px-2 font-black place-content-around text-white"
          >LOGO</NuxtLink
        >
      </div>
      <div
        class="col flex justify-between sm:justify-end items-center mt-5 sm:mt-0"
      >
        <NuxtLink
          class="menu-list mr-5 sm:mr-12 text-sm font-sans capitalize font-semibold cursor-pointer hover:text-blue-400 dark:text-white dar transition duration-200"
          v-for="(item, index) in menus"
          :key="index"
          :to="item.link"
        >
          {{ item.label }}
        </NuxtLink>
        <AppBtnDarkMode />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {
        label: 'work',
        link: '/work'
      },

      {
        label: 'about',
        link: '/about'
      },

      {
        label: 'contact',
        link: '/contact'
      }
    ]
  })
}
</script>

<style>
.menu-list.nuxt-link-exact-active {
  @apply text-blue-500;
}
</style>
