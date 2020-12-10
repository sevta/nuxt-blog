<template>
  <div class="app-wrapper dark:bg-gray-900 bg-gray-100 transition duration-300">
    <transition name="fade">
      <AppNotification v-if="showNotify" @close="onClose">
        This page is under construction 😍😍
      </AppNotification>
    </transition>

    <AppNavbar />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
export default {
  data: () => ({
    showNotify: true
  }),
  methods: {
    onClose() {
      this.showNotify = false
    }
  }
}
</script>
