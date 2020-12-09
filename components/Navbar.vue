<template>
  <div class="navbar">
    <div class="container grid grid-cols-2 mx-auto py-5">
      <div class="col">
        <div class="font-bold">LOGO</div>
      </div>
      <div class="col flex justify-end items-center">
        <div
          class="menu mr-8 text-sm font-sans"
          v-for="(item, index) in 6"
          :key="index"
        >
          menu
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
