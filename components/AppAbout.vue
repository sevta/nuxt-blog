<template>
  <div class="container mx-auto mt-20 px-72 font-inter">
    <h1 class="text-3xl font-semibold mb-24 dark:text-gray-100">{{ title }}</h1>
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
