<template>
  <div class="grid">
    <h3 :class="$style.title">Un couché de soleil</h3>
    <img :class="$style.picture" src="../../src/assets/example.jpg" alt="picture">
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
}
</script>

<style module lang="scss">
  .title {
    font-size: 20px;
  }
  .picture {
    width: 100%;
    height: auto;
  }
</style>
