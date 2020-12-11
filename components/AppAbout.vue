<template>
  <div class="container mx-auto mt-10 sm:mt-20 font-inter">
    <h1
      class="text-3xl text-center sm:text-left font-semibold mb-10 sm:mb-24 dark:text-gray-100"
    >
      {{ title }}
    </h1>
    <div class="relative">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>
