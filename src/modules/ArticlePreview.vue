<template>
  <div class="grid">
    <img :class="$style.picture" src="../../src/assets/example.jpg" alt="picture">
    <h3 class="article-preview-title">Un couché de soleil magnifique de ouf beau le soir</h3>
    <div :class="$style.description">
      <p class="article-preview-description">Le 18/05/2020</p>
      <p class="article-preview-description">Bill Gates</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
}
</script>

<style module lang="scss">
  .picture {
    width: 100%;
    height: auto;
  }
  .description {
    display: flex;
    justify-content: space-between;
  }
</style>
