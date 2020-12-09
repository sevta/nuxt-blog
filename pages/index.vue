<template>
  <div class="app-container py-10">
    <div class="container">
      <div class="row">
        <h1 class="text-3xl font-sans font-bold">Blog</h1>
      </div>
      <div class="row flex flex-col mt-8">
        <div class="blog-list mb-3" v-for="(item, key) in doc" :key="key">
          <div class="font-bold">{{ item.title }}</div>
          <div class="text-sm">{{ item.description }}</div>
          <div class="text-sm">link</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('blog').fetch()

    return {
      doc
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  mounted() {
    console.log('doc', this.doc)
  }
}
</script>

<style lang="scss"></style>
