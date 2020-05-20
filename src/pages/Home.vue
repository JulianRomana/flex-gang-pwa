<template>
  <div class="grid" v-if="articles">
    <div v-for="article in articles.slice(0,1)" :key="article.id">
      <ArticlePreview :article="article" :showContent="true"></ArticlePreview>
    </div>
    <div v-for="article in articles.slice(1,3)" :key="article.id">
      <ArticlePreview :article="article" :showContent="true"></ArticlePreview>
    </div>
  </div>
</template>

<script>
import ArticlePreview from '../modules/ArticlePreview.vue'

export default {
  name: 'Home',
  components: {
    ArticlePreview,
  },
  data: () => ({ articles: null }),
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    this.articles = await response.json()
  },
}
</script>

<style module lang="scss">

</style>
