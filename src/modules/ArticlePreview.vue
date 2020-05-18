<template>
  <router-link :to="path" class="grid">
    <h3 :class="$style.title">Un couché de soleil</h3>
    <img :class="$style.picture" src="../../src/assets/example.jpg" alt="picture">
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
  .title {
    font-size: 20px;
  }
  .picture {
    width: 100%;
    height: auto;
  }
</style>
