<template>
  <div
    class="app-card-wrapper shadow-lg hover:shadow-2xl rounded transition duration-300 mb-32 flex font-inter dark:bg-black subpixel-antialiased overflow-hidden"
  >
    <div class="w-1/3 px-8 py-10">
      <div class="font-semibold text-gray-400">Web Design</div>
      <div class="font-semibold text-2xl mt-4 text-gray-800 dark:text-gray-100">
        {{ project.title }}
      </div>
      <div
        class="mt-4 text-base text-gray-800 dark:text-gray-300 leading-relaxed"
      >
        {{ project }}
        <nuxt-content :document="project" />
      </div>
      <AppButton class="mt-10">details</AppButton>
    </div>
    <div class="w-2/3 block bg-gray-200 overflow-hidden relative">
      <img
        class="w-full h-full absolute top-0 left-0 object-cover object-center"
        :src="project.image"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  mounted() {
    console.log(this.project)
  }
}
</script>

<style lang="sass" scoped>
.app-card-wrapper
  &:hover
    button
      @apply text-blue-400
</style>
