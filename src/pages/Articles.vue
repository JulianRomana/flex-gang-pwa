<template>
  <div class="grid-article-list">
    <h1>Articles</h1>
    <div v-for="article in articles" :key="article.id">
      <ArticlePreview
        picture="http://image.jeuxvideo.com/medias-md/157849/1578490854-2372-card.jpg"
        :title="article.title"
        date="18/05/2020"
        author="Bill Gates"
        time="3 mins"
        :content="article.body"
        :showContent="true"
        :id="article.id"
        >
      </ArticlePreview>
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
