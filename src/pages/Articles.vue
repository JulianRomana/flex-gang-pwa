<template>
  <div v-if="articles" class="grid-article-list">
    <h2 class="article-preview-title"
      :class="$style.articlesTitle"
    >
      Articles
    </h2>

    <input value="ouf" type="button" @click="handleClick">
    <input value="relax" type="button" @click="handleClick">
    <input value="normal" type="button" @click="handleClick">
    <input value="all" type="button" @click="handleClick">

    <div v-if="categorieSelected !== 'all'">
      <div v-for="article in articles" :key="article.id">
        <ArticlePreview v-if="article.categorie === categorieSelected" :article="article" :showContent="true"></ArticlePreview>
      </div>
    </div>
    <div v-else v-for="article in articles" :key="article.id">
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
    categorieSelected: 'all',
  }),
  methods: {
    randomCategorie() {
      const random = Math.floor(Math.random() * this.categories.length)
      return this.categories[random]
    },
    handleClick(e) {
      const { value } = e.target
      console.log(value)
      this.categorieSelected = value
    },
  },
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    this.articles = await response.json()
    this.articles = this.articles.map((article) => {
      const articleModified = article
      articleModified.categorie = this.randomCategorie()
      // articleModified.image = 'https://i.ytimg.com/vi/NWPzIYJVa28/maxresdefault.jpg'
      return articleModified
    })
  },
}

</script>

<style module lang="scss">
  .articlesTitle {
    padding: 2rem 0;
  }
</style>
