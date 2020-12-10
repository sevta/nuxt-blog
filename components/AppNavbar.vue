<template>
  <div class="navbar font-inter">
    <div class="container grid grid-cols-2 mx-auto py-10">
      <div class="col">
        <div class="text-2xl font-black text-green-400">LOGO</div>
      </div>
      <div class="col flex justify-end items-center">
        <div
          class="menu mr-12 text-sm font-sans capitalize font-semibold cursor-pointer hover:text-blue-400 dark:text-white dar transition duration-200"
          v-for="(item, index) in ['work', 'about', 'contact']"
          :key="index"
        >
          {{ item }}
        </div>
        <AppBtnDarkMode />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
