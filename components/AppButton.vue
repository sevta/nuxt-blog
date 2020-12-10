<template>
  <button
    class="cursor-pointer flex items-center justify-center font-semibold font-inter text-gray-700 capitalize hover:text-green-400 transition duration-150 focus:outline-none dark:text-gray-100"
  >
    <slot></slot>
    <svg
      class="w-6 h-6 ml-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      ></path>
    </svg>
  </button>
</template>

<style lang="scss" scoped></style>
