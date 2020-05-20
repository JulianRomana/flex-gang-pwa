<template>
  <div class="grid-article">
    <div v-if="article">
      <img class="image" src="../assets/default.jpg" alt="images">
      <h1 :class="$style.title" class="article-title">{{ article.title }}</h1>
      <p class="article-text">{{ article.body }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Article',
  data() {
    return {
      article: null,
    }
  },
  async created() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
    this.article = await response.json()
  },
}
</script>

<style module lang="scss">
  img{
    width: 100%;
  }

  .title{
    margin: 10px 0;
  }
</style>
