<template>
  <div class="grid-article">
    <div v-if="article">
      <img :src="this.article.image" alt="images">
      <h1 class="article-preview-title">{{ this.article.title }}</h1>
      <p class="article-preview-description">{{ this.article.text }}</p>
    </div>
    <div v-else>
      <h1>Petit malin, ne change pas l'url comme ça voyons. 🧐</h1>
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

  h1{
    margin: 10px 0;

  }
</style>
