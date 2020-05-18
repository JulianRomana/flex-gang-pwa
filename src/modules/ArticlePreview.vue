<template>
  <router-link :to="path">
    <img class="picture" src="https://images.pexels.com/photos/616808/pexels-photo-616808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="pciture">
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
</script >

<style module lang="scss">

</style>
