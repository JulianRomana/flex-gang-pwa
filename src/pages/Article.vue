<template>
  <div class="grid-article">
      Article n°{{ $route.params.id }}
    <div v-if="article">
      <img class="image" src="../assets/controller.svg" alt="images">
      <h1 class="title">{{ article.title }}</h1>
      <p class="text">{{ article.body }}</p>
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

  h1{
    margin: 10px 0;

  }
</style>
