<template>
  <div>
    <h1>Articles</h1>
    <ArticlePreview></ArticlePreview>
    <div v-for="article in articles" :key="article.id">
      {{ article.title }}
      {{ article.body }}
      <router-link :to="`/article/${article.id}`">HOME</router-link>
    </div>
  </div>
</template>

<script>
import ArticlePreview from '../modules/ArticlePreview.vue'

export default {
  name: 'Articles',
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
