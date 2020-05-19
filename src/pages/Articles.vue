<template>
  <div v-if="articles" class="grid-article-list">

    <div v-for="article in articles" :key="article.id">
      <ArticlePreview :article="article" :showContent="true"></ArticlePreview>
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
  data: () => ({
    articles: null,
    categories: ['ouf', 'relax', 'normal'],
  }),
  methods: {
    randomCategorie() {
      const random = Math.floor(Math.random() * this.categories.length)
      return this.categories[random]
    },
  },
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    this.articles = await response.json()
    this.articles = this.articles.map((article) => {
      const articleModified = article
      articleModified.categorie = this.randomCategorie()
      articleModified.image = 'https://i.ytimg.com/vi/NWPzIYJVa28/maxresdefault.jpg'
      return articleModified
    })
  },
}

</script>

<style module lang="scss">

</style>
