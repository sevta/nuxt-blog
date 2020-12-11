<template>
  <div class="title-wrapper my-12 pr-10 sm:pr-0 sm:my-10">
    <div class="container mx-auto">
      <div
        class="text-xl leading-relaxed sm:leading-normal sm:text-5xl font-bold font-inter dark:text-white"
      >
        <h1 class="ml2">
          <span class="letter">
            <slot></slot>
          </span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['animate'],
  mounted() {
    if (this.animate) {
      this.animateText()
    }
  },
  methods: {
    animateText() {
      // Wrap every letter in a span
      var textWrapper = document.querySelector('.ml2')
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )

      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml2 .letter',
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: 'easeOutExpo',
          duration: 950,
          delay: (el, i) => 30 * i
        })
        .add({
          targets: '.ml2',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 4000
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.ml11 {
  font-weight: 700;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 {
  top: 0;
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
