<template>
  <PageWrapper>
    <AppTitle>
      I’m your new <span class="text-fuchsia-500">Nuxt starter</span>. I’m here
      to help you showcase your <span class="text-red-500">work</span>, your
      <br />
      thoughts, and anything else! I’m hooked up to
      <span class="text-green-400">Forestry</span> and deployed with
      <br />
      <span class="text-pink-500">Netlify</span>. 🎉
    </AppTitle>
    <div class="container mx-auto py-10 mt-4 sm:mt-20" v-if="projectSlice">
      <AppCardProject
        v-for="(project, i) in projectSlice"
        :project="project"
        :key="i"
      />
      <div class="flex justify-end -mt-2 sm:-mt-20">
        <AppButton>
          <NuxtLink to="/work">See More</NuxtLink>
        </AppButton>
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
  </PageWrapper>
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
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js'
        }
      ]
    }
  },
  data: () => ({
    projectSlice: []
  }),
  mounted() {
    this.projectSlice = [...this.projects].splice(0, 2)
    console.log('project slice', this.projectSlice)
  }
}
</script>

<style lang="scss"></style>
