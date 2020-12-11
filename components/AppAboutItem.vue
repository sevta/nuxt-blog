<template>
  <div class="flex flex-col sm:flex-row mb-6 sm:mb-5 font-inter">
    <div
      class="w-36 mb-2 sm:mb-0 text-xl sm:text-base font-semibold dark:text-gray-100"
    >
      {{ left }}
    </div>
    <div
      class="flex-1 text-sm text-gray-500 leading-relaxed dark:text-gray-300"
    >
      {{ right }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: String,
      default: 'left'
    },
    right: {
      type: String,
      default: 'right'
    }
  }
}
</script>
