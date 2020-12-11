<template>
  <div class="page-wrapper min-h-screen w-full relative dark:text-gray-200">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
$navbarHeight: 112px;
$footerHeight: 180px;

.page-wrapper {
  min-height: calc(100vh - 292px);
}
</style>
