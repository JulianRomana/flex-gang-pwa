<template>
  <div class="grid-article">
    <div v-if="article">
      <img class="image" src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="images">
      <h1 :class="$style.title" class="article-title">{{ article.title }}</h1>
      <p class="article-text">{{ article.body }}</p>
    </div>
    <div v-else>
      <h1>Petit malin, ne change pas l'url comme ça voyons. 🧐</h1>
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
    // eslint-disable-next-line max-len
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
    this.article = await response.json()
  },
  mounted() {
    console.log(this.$route)
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
