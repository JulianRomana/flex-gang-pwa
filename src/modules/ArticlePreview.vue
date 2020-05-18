<template>
  <router-link :to="path" class="grid">
    <div :class="$style.articlePreview">
      <img :class="$style.picture" src="../../src/assets/example.jpg" alt="picture">
      <div :class="$style.textContainer">
        <h3 class="article-preview-title">Un couché de soleil magnifique de ouf beau le soir</h3>
        <div :class="$style.description">
          <p class="article-preview-description">Le 18/05/2020</p>
          <p class="article-preview-description">Bill Gates</p>
        </div>
        <p class="article-preview-description">3 mins</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ArticlePreview',
  data() {
    return {
      path: '/articles/1',
    }
  },
}
</script>

<style module lang="scss">
  .articlePreview {
    background-color: #d2d2d23e;
  }

  .textContainer {
    padding: 0 10px 10px;
  }

  .picture {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 10px;
    text-align: justify;
  }

  .description {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
</style>
