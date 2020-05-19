<template>
  <div id="app">
    <Header/>
    <div :class="$style.app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { Header } from '@/modules/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
}

</script>

<style module lang="scss">
  .app {
    margin-top: 70px;
  }
</style>
