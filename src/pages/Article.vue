<template>
  <div class="grid-article">
    <div v-if="article">
      <img class="image" :src="this.article.image" alt="images">
      <h1 class="title">{{ this.article.title }}</h1>
      <p class="text">{{ this.article.text }}</p>
    </div>
    <div v-else>
      <h1>Something wrong happen</h1>
    </div>
  </div>
</template>

<script>
import articles from '../assets/articles.json'

export default {
  name: 'Article',
  data() {
    return {
      id: parseInt(this.$route.params.id, 10),
      article: null,
    }
  },
  mounted() {
    this.article = articles.find((article) => article.id === this.id)
  },
}
</script>

<style module lang="scss">
  img{
    width: 100%;
  }
</style>
