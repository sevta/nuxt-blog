<template>
  <div
    class="flex w-full z-20 justify-center fixed top-0 left-0 p-3 px-24 font-inter text-sm bg-gradient-to-br from-red-400 to-pink-500 text-white"
  >
    <slot></slot>
    <div
      class="w-24 h-full cursor-pointer absolute right-0 top-0 flex items-center justify-center"
      @click="$emit('close')"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  </div>
</template>
