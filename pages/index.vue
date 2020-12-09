<template>
  <div class="app-container py-10">
    <div class="container">
      <div class="row">
        <h1 class="text-3xl font-sans font-bold">Blog</h1>
      </div>
      <div class="row flex">
        <img
          class="w-24 h-24"
          v-for="(img, i) in img"
          :key="i"
          :src="img.image"
          alt=""
        />
      </div>
      <div class="row flex flex-col mt-8">
        <div class="blog-list mb-3" v-for="(item, key) in doc" :key="key">
          <div class="font-bold">{{ item.title }}</div>
          <div class="text-sm">{{ item.description }}</div>
          <div class="text-sm">link</div>
        </div>
      </div>
      <div class="row flex flex-col">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          class="bg-gray-300 flex flex-col p-5"
        >
          <input type="text" name="username" placeholder="username" />
          <textarea
            name="body"
            id=""
            cols="30"
            rows="10"
            placeholder="body"
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('blog').fetch()
    const img = await $content('home-slider').fetch()

    return {
      doc,
      img
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
    console.log('img', this.img)
  }
}
</script>

<style lang="scss"></style>
