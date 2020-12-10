<template>
  <div class="home-wrapper">
    <AppTitle>
      I’m your new <span class="text-indigo-400">Nuxt starter</span>. I’m here
      to help you showcase your <span class="text-red-500">work</span>, your
      <br />
      thoughts, and anything else! I’m hooked up to
      <span class="text-green-400">Forestry</span> and deployed with
      <br />
      <span class="text-pink-500">Netlify</span>. 🎉
    </AppTitle>
    <div class="container mx-auto py-10 mt-20 px-72">
      <AppCardProject
        v-for="(project, i) in projects"
        :project="project"
        :key="i"
      />
      <div class="flex justify-end -mt-20">
        <AppButton>See more work</AppButton>
      </div>
    </div>
    <AppAbout title="About">
      <AppAboutItem
        v-for="item in 5"
        :key="item"
        left="Wesite"
        right="Prist is built with Gatsby, Prismic CMS, and emotion styled components. It is mobile ready too! Home: Hero greeting, content block, Work Listing, and About section. Prist is built with Gatsby, Prismic CMS, and emotion styled components. It is mobile ready too! Home: Hero greeting, content block, Work Listing, and About section."
      />
    </AppAbout>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('blog').fetch()
    const img = await $content('home-slider').fetch()
    const projects = await $content('Projects').fetch()

    return {
      doc,
      img,
      projects
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
    console.log('projects', this.projects)
  }
}
</script>

<style lang="scss"></style>
